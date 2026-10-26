import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import JsonLd, { faqPageJsonLd } from './JsonLd'

const script = (container: HTMLElement) =>
  container.querySelector('script[type="application/ld+json"]')!

describe('JsonLd', () => {
  it('renders the home page graph by default', () => {
    const { container } = render(<JsonLd />)
    const types = JSON.parse(script(container).innerHTML)['@graph'].map(
      (node: { '@type': string }) => node['@type'],
    )
    expect(types).toEqual(['WebSite', 'WebApplication', 'FAQPage'])
  })

  it('escapes < so content cannot close the script tag', () => {
    const { container } = render(<JsonLd data={{ name: '</script><b>hi</b>' }} />)
    const html = script(container).innerHTML

    expect(html).not.toContain('</script>')
    expect(JSON.parse(html)).toEqual({ name: '</script><b>hi</b>' })
  })
})

describe('faqPageJsonLd', () => {
  it('prefers the plain-text answer when there is one', () => {
    expect(
      faqPageJsonLd([
        { question: 'Q1', answer: 'A1' },
        { question: 'Q2', answer: <b>rich</b>, text: 'plain' },
      ]),
    ).toEqual({
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Q1', acceptedAnswer: { '@type': 'Answer', text: 'A1' } },
        { '@type': 'Question', name: 'Q2', acceptedAnswer: { '@type': 'Answer', text: 'plain' } },
      ],
    })
  })
})
