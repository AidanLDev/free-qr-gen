import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Button from './Button'

describe('Button', () => {
  it('renders the label and icon and handles clicks', async () => {
    const onClick = vi.fn()
    render(<Button label='Download' icon={<svg data-testid='icon' />} onClick={onClick} />)

    const button = screen.getByRole('button', { name: 'Download' })
    expect(button).toHaveAttribute('type', 'button')
    expect(screen.getByTestId('icon')).toBeInTheDocument()

    await userEvent.click(button)
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('does not fire when disabled', async () => {
    const onClick = vi.fn()
    render(<Button label='Download' onClick={onClick} disable />)

    const button = screen.getByRole('button', { name: 'Download' })
    expect(button).toBeDisabled()
    await userEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('supports submit buttons', () => {
    render(<Button label='Send' type='submit' onClick={() => {}} />)
    expect(screen.getByRole('button', { name: 'Send' })).toHaveAttribute('type', 'submit')
  })
})
