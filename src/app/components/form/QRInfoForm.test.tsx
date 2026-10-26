import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { toast } from 'react-toastify'
import { afterEach, describe, expect, it, vi } from 'vitest'
import QRInfoForm from './QRInfoForm'
import { QRStyleProvider } from '../QRStyleProvider'
import { QrType } from '@/app/types'

vi.mock('react-toastify', () => ({ toast: vi.fn() }))
vi.mock('next/dynamic', () => ({ default: () => () => null }))

const renderForm = (type?: QrType) =>
  render(
    <QRStyleProvider>
      <QRInfoForm type={type} />
    </QRStyleProvider>,
  )

const download = () => screen.getByRole('button', { name: 'Download PNG' })

describe('QRInfoForm', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('defaults to the URL type and enables download once the URL is valid', async () => {
    renderForm()
    expect(screen.getByText('Enter a URL to generate your QR code')).toBeInTheDocument()
    expect(download()).toBeDisabled()

    await userEvent.type(screen.getByRole('textbox', { name: 'QR Code URL' }), 'example.com')
    expect(download()).toBeEnabled()
  })

  it('uses the config for the given type', () => {
    renderForm('wifi')
    expect(screen.getByText('Enter your network name and password')).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'Security' })).toHaveValue('WPA')
  })

  it('warns when the content makes a dense code', async () => {
    renderForm('text')
    const text = screen.getByRole('textbox', { name: 'Text' })

    fireEvent.change(text, { target: { value: 'a'.repeat(300) } })
    expect(screen.queryByText(/code will be dense/)).not.toBeInTheDocument()

    fireEvent.change(text, { target: { value: 'a'.repeat(301) } })
    expect(screen.getByText(/code will be dense/)).toBeInTheDocument()
  })

  it('warns about low contrast and inverted colours', async () => {
    renderForm()
    const fg = screen.getByRole('textbox', { name: 'Foreground colour' })
    const bg = screen.getByRole('textbox', { name: 'Background colour' })

    fireEvent.change(fg, { target: { value: '#EEEEEE' } })
    expect(screen.getByText(/Low contrast between colours/)).toBeInTheDocument()

    fireEvent.change(bg, { target: { value: '#000000' } })
    expect(screen.queryByText(/Low contrast/)).not.toBeInTheDocument()
    expect(screen.getByText(/Light-on-dark codes/)).toBeInTheDocument()
  })

  it('sets the download size from a preset', async () => {
    renderForm()
    const preset = screen.getByRole('button', { name: '1024px' })

    await userEvent.click(preset)
    expect(preset).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('spinbutton', { name: 'Download size' })).toHaveValue(1024)
  })

  it('rejects logos over 10MB', async () => {
    renderForm()
    const huge = new File(['x'], 'huge.png', { type: 'image/png' })
    Object.defineProperty(huge, 'size', { value: 10 * 1024 * 1024 + 1 })

    await userEvent.upload(screen.getByLabelText(/Upload a logo/), huge)
    expect(toast).toHaveBeenCalledWith(expect.stringContaining('too large'), { type: 'error' })
    expect(screen.queryByRole('img', { name: 'Uploaded logo' })).not.toBeInTheDocument()
  })

  it('adds a logo and asks for higher error correction until it is chosen', async () => {
    renderForm()
    const logo = new File(['<svg/>'], 'logo.svg', { type: 'image/svg+xml' })

    await userEvent.upload(screen.getByLabelText(/Upload a logo/), logo)
    await waitFor(() =>
      expect(screen.getByRole('img', { name: 'Uploaded logo' })).toBeInTheDocument(),
    )
    expect(screen.getByRole('spinbutton', { name: 'Logo width' })).toHaveValue(48)
    expect(screen.getByText(/Use Quartile or High error correction/)).toBeInTheDocument()

    await userEvent.click(screen.getByRole('radio', { name: /High/ }))
    expect(screen.queryByText(/Use Quartile or High error correction/)).not.toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Remove' }))
    expect(screen.queryByRole('img', { name: 'Uploaded logo' })).not.toBeInTheDocument()
  })
})
