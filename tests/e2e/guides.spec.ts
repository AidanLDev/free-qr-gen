import { test, expect } from '@playwright/test'
import { guides } from '../../src/app/lib/guides'
import { qrTypeList } from '../../src/app/lib/qrTypes'

const generatorPaths = qrTypeList.map(({ path }) => path)

test('guides hub lists every guide', async ({ page }) => {
  await page.goto('/guides')
  await expect(
    page.getByRole('heading', { level: 1, name: 'QR code guides and ideas' }),
  ).toBeVisible()
  for (const { path, title } of guides) {
    await expect(page.getByRole('link', { name: title, exact: true })).toHaveAttribute('href', path)
  }
})

for (const { path, title } of guides) {
  test(`${path} renders with structured data and links to a generator`, async ({ page }) => {
    await page.goto(path)
    // Older guides use a shorter h1 than their search title, so match the <title> instead
    expect(await page.title()).toContain(title)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

    const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents()
    const types = jsonLd.flatMap((json) => {
      const data = JSON.parse(json)
      return (data['@graph'] ?? [data]).map((node: { '@type': string }) => node['@type'])
    })
    expect(types).toContain('Article')

    const hrefs = await page
      .locator('article a[href^="/"]')
      .evaluateAll((links) => links.map((link) => link.getAttribute('href')))
    expect(hrefs.some((href) => generatorPaths.includes(href ?? ''))).toBe(true)
  })
}
