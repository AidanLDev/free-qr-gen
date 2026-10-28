import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { getGuide, guides } from './guides'
import { encodeQrValue } from './qrPayloads'
import { qrTypeList, qrTypes } from './qrTypes'
import { toolPageContent } from './toolPageContent'

// Checks on the content registries that drive routing, the sitemap and search titles

const suffix = ' | Free QR Gen'
const appDir = join(__dirname, '..')
const routeExists = (path: string) => existsSync(join(appDir, path === '/' ? '' : path, 'page.tsx'))

describe('qrTypes', () => {
  it('has unique paths and filenames', () => {
    const paths = qrTypeList.map(({ path }) => path)
    const filenames = qrTypeList.map(({ filename }) => filename)
    expect(new Set(paths).size).toBe(paths.length)
    expect(new Set(filenames).size).toBe(filenames.length)
  })

  it.each(qrTypeList)('$type has a route', ({ path }) => {
    expect(routeExists(path)).toBe(true)
  })

  it.each(qrTypeList)('$type has unique field ids', ({ fields }) => {
    const ids = fields.map(({ id }) => id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it.each(qrTypeList)('$type encodes to null with no input', ({ type, defaults }) => {
    expect(encodeQrValue(type, defaults ?? {})).toBeNull()
  })
})

describe('toolPageContent', () => {
  it('covers every QR type except the home page URL tool', () => {
    expect(Object.keys(toolPageContent).sort()).toEqual(
      Object.keys(qrTypes)
        .filter((type) => type !== 'url')
        .sort(),
    )
  })

  it.each(Object.entries(toolPageContent))('%s title fits in search results', (_, { title }) => {
    expect((title + suffix).length).toBeLessThanOrEqual(60)
  })
})

describe('guides', () => {
  it('has unique paths', () => {
    const paths = guides.map(({ path }) => path)
    expect(new Set(paths).size).toBe(paths.length)
  })

  it.each(guides)('$path has a route', ({ path }) => {
    expect(routeExists(path)).toBe(true)
  })

  it.each(guides)('$path has valid dates', ({ published, updated }) => {
    expect(published).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(updated).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(updated >= published).toBe(true)
  })

  it.each(guides)('$path only lists known QR types', ({ types }) => {
    for (const type of types) expect(qrTypes).toHaveProperty(type)
  })

  it('getGuide finds a guide and throws for unknown paths', () => {
    expect(getGuide('/what-is-a-qr-code').hubLabel).toBe('What is a QR code?')
    expect(() => getGuide('/nope')).toThrow('No guide registered for /nope')
  })
})

describe('public folder', () => {
  // SST sends every top-level name in public/ to S3 by path prefix, so a folder sharing a
  // route's name (public/guides vs /guides) makes that page return S3's AccessDenied
  const publicNames = readdirSync(join(appDir, '..', '..', 'public'))
  const routeNames = readdirSync(appDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map(({ name }) => name)

  it.each(publicNames)('%s does not shadow a route', (name) => {
    expect(routeNames.filter((route) => route.startsWith(name))).toEqual([])
  })
})
