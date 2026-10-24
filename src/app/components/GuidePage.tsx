import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import ContentPage from './ContentPage'
import JsonLd, { faqPageJsonLd } from './JsonLd'
import { siteUrl } from '../constants/constants'
import { getGuide } from '../lib/guides'
import { ogImage, pageMetadata } from '../lib/metadata'
import { IFaq } from '../types'

export const guideMetadata = (path: string) => {
  const { title, description } = getGuide(path)
  return pageMetadata({ title, description, path, type: 'article' })
}

// Shared layout for use-case guides: structured data, byline, table of contents, FAQs and CTA.
// The post body goes in `children`, with an h2 per entry in `sections`.
export default function GuidePage({
  path,
  intro,
  sections,
  faqs,
  about = [],
  cta,
  children,
}: {
  path: string
  intro: string
  sections: { id: string; label: string }[]
  faqs: IFaq[]
  // Extra schema.org topics besides "QR code", linked to Wikipedia
  about?: { name: string; sameAs: string }[]
  cta: { href: string; label: string }
  children: React.ReactNode
}) {
  const { title, description, hubLabel, published, updated } = getGuide(path)
  const url = `${siteUrl}${path}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: title,
        description,
        url,
        mainEntityOfPage: url,
        inLanguage: 'en-GB',
        datePublished: published,
        dateModified: updated,
        image: ogImage.url,
        author: { '@type': 'Person', name: 'Aidan Lowson', url: `${siteUrl}/about` },
        publisher: {
          '@type': 'Organization',
          name: 'Free QR Gen',
          url: siteUrl,
          logo: { '@type': 'ImageObject', url: `${siteUrl}/FreeQRGenLogo.png` },
        },
        about: [{ name: 'QR code', sameAs: 'https://en.wikipedia.org/wiki/QR_code' }, ...about].map(
          (thing) => ({ '@type': 'Thing', ...thing }),
        ),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Free QR Gen', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteUrl}/guides` },
          { '@type': 'ListItem', position: 3, name: hubLabel, item: url },
        ],
      },
      faqPageJsonLd(faqs),
    ],
  }

  return (
    <ContentPage title={title} intro={intro}>
      <JsonLd data={jsonLd} />

      <p className='!mb-0 mt-4 text-sm text-neutral-500'>
        By <Link href='/about'>Aidan Lowson</Link> · Updated{' '}
        <time dateTime={updated}>{format(parseISO(updated), 'd MMMM yyyy')}</time>
      </p>

      <nav aria-label='On this page' className='card mt-8'>
        <p className='section-title mb-3'>On this page</p>
        <ul className='!mb-0 !list-none !space-y-1.5 !pl-0'>
          {[...sections, { id: 'faq', label: 'Frequently asked questions' }].map(
            ({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ),
          )}
        </ul>
      </nav>

      {children}

      <h2 id='faq'>Frequently asked questions</h2>
      {faqs.map(({ question, answer }) => (
        <React.Fragment key={question}>
          <h3>{question}</h3>
          <p>{answer}</p>
        </React.Fragment>
      ))}

      <p className='mt-10'>
        <Link href={cta.href}>{cta.label} →</Link>
      </p>

      <p className='mt-10 text-sm text-neutral-500'>
        QR Code is a registered trademark of DENSO WAVE INCORPORATED.
      </p>
    </ContentPage>
  )
}
