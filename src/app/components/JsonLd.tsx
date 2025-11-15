import Script from 'next/script'
import React from 'react'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Custom QR Code Generator',
  description: 'Create personalized QR codes with custom images and colors',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Custom QR code generation',
    'Image embedding',
    'Colour customisation',
    'QR Code Personalisation',
    'QR Code Downloads',
  ],
}

export default function JsonLd() {
  return (
    <Script
      id='json-ld'
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
