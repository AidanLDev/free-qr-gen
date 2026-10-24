import type { MetadataRoute } from 'next'
import { siteUrl } from './constants/constants'
import { guides } from './lib/guides'
import { qrTypeList } from './lib/qrTypes'

// Bump a page's date here when its content changes. Guide dates live in lib/guides.ts
const toolsUpdated = '2026-10-24'
const guidesUpdated = guides.reduce(
  (latest, { updated }) => (updated > latest ? updated : latest),
  '',
)

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: toolsUpdated, priority: 1 },
    ...qrTypeList
      .filter(({ type }) => type !== 'url')
      .map(({ path }) => ({ url: `${siteUrl}${path}`, lastModified: toolsUpdated, priority: 0.9 })),
    { url: `${siteUrl}/guides`, lastModified: guidesUpdated, priority: 0.7 },
    ...guides.map(({ path, updated }) => ({
      url: `${siteUrl}${path}`,
      lastModified: updated,
      priority: 0.8,
    })),
    { url: `${siteUrl}/about`, lastModified: '2026-10-19', priority: 0.5 },
  ]
}
