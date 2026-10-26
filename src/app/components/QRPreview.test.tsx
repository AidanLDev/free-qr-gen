import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import QRPreview from './QRPreview'

vi.mock('react-toastify', () => ({ toast: vi.fn() }))

const props = {
  placeholder: 'Enter a URL to generate your QR code',
  filename: 'wifi-qrcode',
  size: 1024,
  bgColour: '#ffffff',
  fgColour: '#000000',
  errorCorrectionLevel: 'M' as const,
}

describe('QRPreview', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('shows the placeholder and disables downloads with no value', () => {
    render(<QRPreview {...props} />)

    expect(screen.getByText(props.placeholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Download PNG' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'SVG' })).toBeDisabled()
  })

  it('shows the code and its download size once there is a value', () => {
    render(<QRPreview {...props} value='https://example.com' />)

    const preview = screen.getByRole('region', { name: 'QR code preview' })
    expect(preview.querySelector('svg')).not.toBeNull()
    expect(screen.getByText('1024 x 1024 px')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Download PNG' })).toBeEnabled()
  })

  it('downloads a standalone SVG at the chosen size', async () => {
    let blob: Blob | undefined
    URL.createObjectURL = vi.fn((b: Blob) => {
      blob = b
      return 'blob:qr'
    })
    URL.revokeObjectURL = vi.fn()
    const anchors: HTMLAnchorElement[] = []
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function (
      this: HTMLAnchorElement,
    ) {
      anchors.push(this)
    })

    render(<QRPreview {...props} value='https://example.com' />)
    await userEvent.click(screen.getByRole('button', { name: 'SVG' }))

    expect(anchors[0].download).toBe('wifi-qrcode.svg')
    expect(anchors[0].href).toBe('blob:qr')
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:qr')

    // Without the namespace the file won't open as an image outside the browser
    const markup = await blob!.text()
    expect(markup).toMatch(/^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg"/)

    // jsdom's serializer writes xmlns twice (browsers don't), so parse as HTML, which tolerates it
    const svg = new DOMParser().parseFromString(markup, 'text/html').querySelector('svg')!
    expect(svg.getAttribute('width')).toBe('1024')
    expect(svg.getAttribute('height')).toBe('1024')
    // The preview scales the code with an inline style that must not end up in the file
    expect(svg.hasAttribute('style')).toBe(false)
  })
})
