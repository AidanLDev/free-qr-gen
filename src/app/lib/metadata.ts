import type { Metadata } from 'next'
import { siteUrl } from '../constants/constants'

export const siteName = 'Free QR Gen'
export const siteTitle = 'Free QR Code Generator with Logo & Colours'
export const siteDescription =
  'Create a custom QR code for free. Add your logo, pick your colours and download as PNG or SVG. No sign-up, no watermarks, and codes that never expire.'

export const ogImage = {
  url: `${siteUrl}/FreeQRGenCoverImage.png`,
  width: 1325,
  height: 685,
  alt: 'Free QR Gen: create a custom QR code for free',
}

// Builds per-page metadata. openGraph is replaced (not merged) by child routes,
// so the shared fields have to be repeated on every page.
export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
  image = ogImage,
}: {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  image?: typeof ogImage
}): Metadata {
  const url = `${siteUrl}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName,
      locale: 'en_GB',
      images: [image],
    },
  }
}
