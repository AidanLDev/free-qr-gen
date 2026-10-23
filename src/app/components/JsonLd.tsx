import React from 'react'
import { siteUrl } from '../constants/constants'
import { ogImage, siteDescription, siteName } from '../lib/metadata'
import { IFaq } from '../types'
import { homeFaqs } from './HomeInfo'

export const faqPageJsonLd = (faqs: IFaq[]) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer, text }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: text ?? answer },
  })),
})

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: siteName,
      alternateName: ['FreeQRGen', 'freeqrgen.net'],
      url: siteUrl,
      inLanguage: 'en-GB',
    },
    {
      '@type': 'WebApplication',
      '@id': `${siteUrl}/#app`,
      name: siteName,
      url: siteUrl,
      description: siteDescription,
      image: ogImage.url,
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript',
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Generate QR codes for any URL',
        'WiFi, contact card (vCard), email, SMS, phone, WhatsApp, text and location QR codes',
        'Custom foreground and background colours',
        'Add a logo to the centre of the QR code',
        'Adjustable error correction level',
        'Download as PNG or SVG',
        'No sign-up and no watermarks',
      ],
      author: { '@type': 'Person', name: 'Aidan Lowson' },
      sameAs: ['https://github.com/AidanLDev/free-qr-gen'],
    },
    faqPageJsonLd(homeFaqs),
  ],
}

// Rendered as a plain <script> (not next/script) so it is in the server HTML crawlers read
export default function JsonLd({ data = homeJsonLd }: { data?: Record<string, unknown> }) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
