import Link from 'next/link'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import HomeInfo from './HomeInfo'
import JsonLd, { faqPageJsonLd } from './JsonLd'
import QRTypeTabs from './QRTypeTabs'
import QRInfoForm from './form/QRInfoForm'
import { siteUrl } from '../constants/constants'
import { guides } from '../lib/guides'
import { pageMetadata, siteName } from '../lib/metadata'
import { qrTypes } from '../lib/qrTypes'
import { toolPageContent } from '../lib/toolPageContent'
import { QrType } from '../types'

type ToolType = Exclude<QrType, 'url'>

export const toolPageMetadata = (type: ToolType) =>
  pageMetadata({
    title: toolPageContent[type].title,
    description: toolPageContent[type].description,
    path: qrTypes[type].path,
  })

export default function ToolPage({ type }: { type: ToolType }) {
  const { name, stepsHeading, subtitle, description, steps, sections, faqs } = toolPageContent[type]
  const related = [
    ...toolPageContent[type].related,
    ...guides
      .filter(({ types }) => types.includes(type))
      .map(({ path, hubLabel }) => ({ href: path, label: hubLabel })),
  ]
  const url = `${siteUrl}${qrTypes[type].path}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: `${name} Generator`,
        url,
        description,
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
        browserRequirements: 'Requires JavaScript',
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        isPartOf: { '@id': `${siteUrl}/#website` },
        author: { '@type': 'Person', name: 'Aidan Lowson', url: `${siteUrl}/about` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
          { '@type': 'ListItem', position: 2, name: `${name} Generator`, item: url },
        ],
      },
      faqPageJsonLd(faqs),
    ],
  }

  return (
    <div>
      <Header
        title={
          <>
            Free <span className='text-primary'>{name}</span> Generator
          </>
        }
        subtitle={subtitle}
      />
      <main className='mx-auto min-h-[75vh] w-full max-w-5xl pb-12 pt-8 sm:pb-24 sm:pt-10'>
        <JsonLd data={jsonLd} />
        <QRTypeTabs active={type} />
        <React.Suspense fallback={<div />}>
          <QRInfoForm type={type} />
        </React.Suspense>
      </main>
      <HomeInfo heading={stepsHeading} steps={steps} faqs={faqs}>
        {sections.map(({ heading, intro, items }) => (
          <React.Fragment key={heading}>
            <h2>{heading}</h2>
            {intro && <p>{intro}</p>}
            {items.length > 0 && (
              <ul className='mb-12'>
                {items.map(({ title, body }) => (
                  <li key={title}>
                    <strong>{title}.</strong> {body}
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
        {related.length > 0 && (
          <p className='mb-12'>
            Related:{' '}
            {related.map(({ href, label }, i) => (
              <React.Fragment key={href}>
                {i > 0 && ' · '}
                <Link href={href}>{label}</Link>
              </React.Fragment>
            ))}
          </p>
        )}
      </HomeInfo>
      <React.Suspense fallback={<div />}>
        <Footer />
      </React.Suspense>
    </div>
  )
}
