import type { MetadataRoute } from 'next'
import { siteUrl } from './constants/constants'
import { qrTypeList } from './lib/qrTypes'

// Bump a page's date here when its content changes
const toolsUpdated = '2026-10-23'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: toolsUpdated, priority: 1 },
    ...qrTypeList
      .filter(({ type }) => type !== 'url')
      .map(({ path }) => ({ url: `${siteUrl}${path}`, lastModified: toolsUpdated, priority: 0.9 })),
    { url: `${siteUrl}/what-is-a-qr-code`, lastModified: '2026-10-19', priority: 0.8 },
    {
      url: `${siteUrl}/qr-code-for-restaurant-menu`,
      lastModified: '2026-10-23',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/why-did-my-qr-code-stop-working`,
      lastModified: '2026-10-23',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/how-to-share-wifi-with-a-qr-code`,
      lastModified: '2026-10-23',
      priority: 0.8,
    },
    { url: `${siteUrl}/about`, lastModified: '2026-10-19', priority: 0.5 },
  ]
}
