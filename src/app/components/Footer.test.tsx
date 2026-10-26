import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Footer from './Footer'
import { qrTypeList } from '../lib/qrTypes'

vi.mock('react-toastify', () => ({ toast: vi.fn() }))

describe('Footer', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()
  })

  it('links to every generator', () => {
    render(<Footer />)

    const nav = screen.getByRole('navigation', { name: 'QR code generators' })
    for (const { path, label } of qrTypeList) {
      expect(within(nav).getByRole('link', { name: `${label} QR code` })).toHaveAttribute(
        'href',
        path,
      )
    }
  })

  it('links to the about page and guides hub', () => {
    render(<Footer />)

    const nav = screen.getByRole('navigation', { name: 'Resources' })
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
    expect(within(nav).getByRole('link', { name: 'All guides' })).toHaveAttribute('href', '/guides')
  })

  it('shows the current year', () => {
    render(<Footer />)
    expect(screen.getByText(`© Aidan Lowson - ${new Date().getFullYear()}`)).toBeInTheDocument()
  })

  it('toggles the feedback form', async () => {
    render(<Footer />)
    const toggle = screen.getByRole('button', { name: /Feedback \/ report a bug/ })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await userEvent.click(screen.getByRole('button', { name: 'Close feedback form' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
