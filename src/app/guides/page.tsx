import Link from 'next/link'
import React from 'react'
import ContentPage from '../components/ContentPage'
import JsonLd from '../components/JsonLd'
import { siteUrl } from '../constants/constants'
import { guides } from '../lib/guides'
import { pageMetadata } from '../lib/metadata'
import { qrTypeList } from '../lib/qrTypes'

const path = '/guides'
const title = 'QR code guides and ideas'
const description =
  'Practical guides to using QR codes: business cards, WiFi, WhatsApp orders, wedding invitations, pet tags, packaging and more. Free, with no sign-up.'

export const metadata = pageMetadata({ title, description, path })

// Each guide sits under its main QR type; general guides go last
const groups = [
  ...qrTypeList.map(({ type, label, icon }) => ({
    id: type,
    heading: `${label} QR codes`,
    icon,
    items: guides.filter(({ types }) => types[0] === type),
  })),
  {
    id: 'general',
    heading: 'About QR codes',
    icon: undefined,
    items: guides.filter(({ types }) => types.length === 0),
  },
].filter(({ items }) => items.length > 0)

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: title,
      description,
      url: `${siteUrl}${path}`,
      inLanguage: 'en-GB',
      isPartOf: { '@id': `${siteUrl}/#website` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: groups
          .flatMap(({ items }) => items)
          .map(({ path: guidePath, title: name }, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name,
            url: `${siteUrl}${guidePath}`,
          })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Free QR Gen', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteUrl}${path}` },
      ],
    },
  ],
}

export default function GuidesPage() {
  return (
    <ContentPage
      title='QR code guides and ideas'
      intro='Step-by-step guides to getting real jobs done with a QR code, from business cards and shop signs to wedding invitations and pet tags. Every code you make here is free, has no watermark and never expires.'
    >
      <JsonLd data={jsonLd} />

      {groups.map(({ id, heading, icon: Icon, items }) => (
        <section key={id} aria-labelledby={`${id}-heading`}>
          <h2 id={`${id}-heading`} className='flex items-center gap-2'>
            {Icon && <Icon aria-hidden className='shrink-0 text-primary' />}
            {heading}
          </h2>
          <ul className='!list-none !space-y-4 !pl-0'>
            {items.map(({ path: guidePath, title: guideTitle, description: summary }) => (
              <li key={guidePath}>
                <Link href={guidePath} className='font-semibold'>
                  {guideTitle}
                </Link>
                <p className='!mb-0 mt-1 text-sm text-neutral-400'>{summary}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p className='mt-10'>
        <Link href='/'>Create a free QR code →</Link>
      </p>
    </ContentPage>
  )
}
