import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import ImageUpload from './ImageUpload'

const logo = new File(['<svg/>'], 'logo.svg', { type: 'image/svg+xml' })

describe('ImageUpload', () => {
  it('passes the chosen file on, and allows choosing the same file again', async () => {
    const onFileSelected = vi.fn()
    render(<ImageUpload onFileSelected={onFileSelected} onRemove={() => {}} />)

    const input = screen.getByLabelText(/Upload a logo/)
    await userEvent.upload(input, logo)
    expect(onFileSelected).toHaveBeenCalledWith(logo)
    expect(input).toHaveValue('')
  })

  it('shows the logo with replace and remove options once uploaded', async () => {
    const onRemove = vi.fn()
    render(
      <ImageUpload src='data:image/png;base64,AA' onFileSelected={() => {}} onRemove={onRemove} />,
    )

    expect(screen.getByRole('img', { name: 'Uploaded logo' })).toBeInTheDocument()
    expect(screen.getByLabelText('Replace')).toHaveAttribute('type', 'file')

    await userEvent.click(screen.getByRole('button', { name: 'Remove' }))
    expect(onRemove).toHaveBeenCalledOnce()
  })
})
