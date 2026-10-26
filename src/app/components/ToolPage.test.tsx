import { render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ToolPage, { toolPageMetadata } from './ToolPage'
import { QRStyleProvider } from './QRStyleProvider'
import { guides } from '../lib/guides'
import { toolPageContent } from '../lib/toolPageContent'

vi.mock('react-toastify', () => ({ toast: vi.fn() }))
vi.mock('next/dynamic', () => ({ default: () => () => null }))

const renderPage = () =>
  render(
    <QRStyleProvider>
      <ToolPage type='wifi' />
    </QRStyleProvider>,
  )

const jsonLdTypes = (container: HTMLElement) =>
  [...container.querySelectorAll('script[type="application/ld+json"]')].flatMap((script) =>
    JSON.parse(script.innerHTML)['@graph'].map((node: { '@type': string }) => node['@type']),
  )

describe('ToolPage', () => {
  it('renders the generator with its tab active', () => {
    renderPage()

    expect(
      screen.getByRole('heading', { level: 1, name: 'Free WiFi QR Code Generator' }),
    ).toBeInTheDocument()
    expect(
      within(screen.getByRole('navigation', { name: 'QR code type' })).getByRole('link', {
        name: 'WiFi',
      }),
    ).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('textbox', { name: 'Network name (SSID)' })).toBeInTheDocument()
  })

  it('shows the content sections and FAQs', () => {
    renderPage()
    const { stepsHeading, sections, faqs } = toolPageContent.wifi

    expect(screen.getByRole('heading', { level: 2, name: stepsHeading })).toBeInTheDocument()
    for (const { heading } of sections) {
      expect(screen.getByRole('heading', { level: 2, name: heading })).toBeInTheDocument()
    }
    for (const { question } of faqs) {
      expect(screen.getByRole('heading', { level: 3, name: question })).toBeInTheDocument()
    }
  })

  it('links to every guide that uses this type', () => {
    renderPage()

    const related = screen.getByText(/^Related:/)
    const wifiGuides = guides.filter(({ types }) => types.includes('wifi'))
    expect(wifiGuides.length).toBeGreaterThan(0)
    for (const { path, hubLabel } of wifiGuides) {
      expect(within(related).getByRole('link', { name: hubLabel })).toHaveAttribute('href', path)
    }
  })

  it('adds structured data', () => {
    const { container } = renderPage()
    expect(jsonLdTypes(container)).toEqual(['WebApplication', 'BreadcrumbList', 'FAQPage'])
  })
})

describe('toolPageMetadata', () => {
  it('uses the content title and the tool path', () => {
    expect(toolPageMetadata('wifi')).toMatchObject({
      title: toolPageContent.wifi.title,
      alternates: { canonical: 'https://freeqrgen.net/wifi-qr-code-generator' },
    })
  })
})
