import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Header from './Header'
import PageHeader from './PageHeader'

describe('Header', () => {
  it('shows the home page heading by default', () => {
    render(<Header />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Free QR Code Generator' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/No sign-up, no watermarks/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Free QR Gen Logo' })).toHaveAttribute('href', '/')
  })

  it('accepts a custom title and subtitle', () => {
    render(<Header title='Free WiFi QR Code Generator' subtitle='Share your WiFi' />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Free WiFi QR Code Generator' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Share your WiFi')).toBeInTheDocument()
  })
})

describe('PageHeader', () => {
  it('links back to the generator without adding a heading', () => {
    render(<PageHeader />)

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Create a QR code' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: /Free QR Gen Logo/ })).toHaveAttribute('href', '/')
  })
})
