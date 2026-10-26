import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import HomeInfo, { homeFaqs } from './HomeInfo'

describe('HomeInfo', () => {
  it('shows the home steps and FAQs by default', () => {
    render(<HomeInfo />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'How to create a free QR code' }),
    ).toBeInTheDocument()
    expect(within(screen.getByRole('list')).getAllByRole('listitem')).toHaveLength(3)
    for (const { question } of homeFaqs) {
      expect(screen.getByRole('heading', { level: 3, name: question })).toBeInTheDocument()
    }
  })

  // Rich answers carry a plain-text copy for structured data; it should say the same thing
  it.each(homeFaqs.filter(({ text }) => text))('"$question" text matches its answer', (faq) => {
    const { container } = render(<p>{faq.answer}</p>)
    expect(container.textContent).toContain(faq.text!.split('.')[0])
  })

  it('numbers custom steps and renders extra sections before the FAQs', () => {
    render(
      <HomeInfo
        heading='How to make a WiFi QR code'
        steps={[
          { title: 'Enter your network', body: 'SSID' },
          { title: 'Download', body: 'PNG' },
        ]}
        faqs={[{ question: 'Is it free?', answer: 'Yes' }]}
      >
        <h2>Where to use it</h2>
      </HomeInfo>,
    )

    expect(screen.getByText('Step 1')).toBeInTheDocument()
    expect(screen.getByText('Step 2')).toBeInTheDocument()
    expect(screen.queryByText('Step 3')).not.toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)
    expect(headings).toEqual([
      'How to make a WiFi QR code',
      'Where to use it',
      'Frequently asked questions',
    ])
  })
})
