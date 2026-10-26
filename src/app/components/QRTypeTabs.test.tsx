import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import QRTypeTabs from './QRTypeTabs'
import { qrTypeList } from '../lib/qrTypes'

describe('QRTypeTabs', () => {
  it('links to every QR type and marks the active one', () => {
    render(<QRTypeTabs active='wifi' />)

    const nav = screen.getByRole('navigation', { name: 'QR code type' })
    const links = within(nav).getAllByRole('link')
    expect(links.map((link) => link.getAttribute('href'))).toEqual(
      qrTypeList.map(({ path }) => path),
    )

    expect(within(nav).getByRole('link', { name: 'WiFi' })).toHaveAttribute('aria-current', 'page')
    expect(within(nav).getByRole('link', { name: 'URL' })).not.toHaveAttribute('aria-current')
  })
})
