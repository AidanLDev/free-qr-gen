import { render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import GuidePage, { guideMetadata } from './GuidePage'
import { getGuide } from '../lib/guides'

vi.mock('react-toastify', () => ({ toast: vi.fn() }))

const path = '/qr-code-for-pet-tags'
const guide = getGuide(path)

const renderGuide = () =>
  render(
    <GuidePage
      path={path}
      intro='Intro text'
      sections={[
        { id: 'why', label: 'Why it helps' },
        { id: 'steps', label: 'How to make one' },
      ]}
      faqs={[{ question: 'Does it expire?', answer: 'No.' }]}
      about={[{ name: 'Pet tag', sameAs: 'https://en.wikipedia.org/wiki/Pet_tag' }]}
      cta={{ href: '/phone-number-qr-code-generator', label: 'Make your pet tag' }}
    >
      <h2 id='why'>Why it helps</h2>
      <h2 id='steps'>How to make one</h2>
    </GuidePage>,
  )

const articleJsonLd = (container: HTMLElement) =>
  JSON.parse(container.querySelector('script[type="application/ld+json"]')!.innerHTML)['@graph'][0]

describe('GuidePage', () => {
  it('uses the registered title and shows the updated date', () => {
    renderGuide()

    expect(screen.getByRole('heading', { level: 1, name: guide.title })).toBeInTheDocument()
    const updated = screen.getByText((_, el) => el?.tagName === 'TIME')
    expect(updated).toHaveAttribute('dateTime', guide.updated)
    expect(updated).toHaveTextContent('24 October 2026')
  })

  it('builds the table of contents from the sections, plus the FAQs', () => {
    renderGuide()

    const toc = screen.getByRole('navigation', { name: 'On this page' })
    expect(
      within(toc)
        .getAllByRole('link')
        .map((link) => link.getAttribute('href')),
    ).toEqual(['#why', '#steps', '#faq'])
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently asked questions' }),
    ).toHaveAttribute('id', 'faq')
  })

  it('shows the FAQs and the call to action', () => {
    renderGuide()

    expect(screen.getByRole('heading', { level: 3, name: 'Does it expire?' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Make your pet tag/ })).toHaveAttribute(
      'href',
      '/phone-number-qr-code-generator',
    )
  })

  it('describes the guide as an Article with its dates and topics', () => {
    const { container } = renderGuide()

    expect(articleJsonLd(container)).toMatchObject({
      '@type': 'Article',
      headline: guide.title,
      datePublished: guide.published,
      dateModified: guide.updated,
      about: [
        { '@type': 'Thing', name: 'QR code' },
        { '@type': 'Thing', name: 'Pet tag' },
      ],
    })
  })
})

describe('guideMetadata', () => {
  it('marks guides as articles', () => {
    expect(guideMetadata(path)).toMatchObject({
      title: guide.title,
      openGraph: { type: 'article', url: `https://freeqrgen.net${path}` },
    })
  })
})
