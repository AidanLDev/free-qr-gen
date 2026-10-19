import type { MetadataRoute } from 'next'
import { siteUrl } from './constants/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    { url: `${siteUrl}/what-is-a-qr-code`, priority: 0.8 },
    {
      url: `${siteUrl}/qr-code-for-restaurant-menu`,
      lastModified: '2026-10-19',
      priority: 0.8,
    },
    { url: `${siteUrl}/about`, priority: 0.5 },
  ]
}
