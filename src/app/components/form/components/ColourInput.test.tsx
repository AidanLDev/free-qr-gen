import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import ColourInput from './ColourInput'

// The real picker needs browser APIs jsdom lacks; the tests only care whether it is open
vi.mock('next/dynamic', () => ({
  default: () =>
    function ChromePicker() {
      return <div data-testid='picker' />
    },
}))

const renderInput = (setValue = vi.fn()) => {
  render(
    <div>
      <ColourInput id='fg' label='Foreground colour' value='#000000' setValue={setValue} />
      <p>Outside</p>
    </div>,
  )
  return { setValue, swatch: screen.getByRole('button', { name: 'Open foreground colour picker' }) }
}

describe('ColourInput', () => {
  it('lets the hex value be typed', async () => {
    const { setValue } = renderInput()
    const input = screen.getByRole('textbox', { name: 'Foreground colour' })

    expect(input).toHaveValue('#000000')
    await userEvent.type(input, 'f')
    expect(setValue).toHaveBeenCalledWith('#000000f')
  })

  it('toggles the picker from the swatch', async () => {
    const { swatch } = renderInput()

    expect(swatch).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('picker')).not.toBeInTheDocument()

    await userEvent.click(swatch)
    expect(swatch).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByTestId('picker')).toBeInTheDocument()

    await userEvent.click(swatch)
    expect(screen.queryByTestId('picker')).not.toBeInTheDocument()
  })

  it('closes on Escape', async () => {
    const { swatch } = renderInput()
    await userEvent.click(swatch)
    await userEvent.keyboard('{Escape}')
    expect(swatch).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes when clicking outside', async () => {
    const { swatch } = renderInput()
    await userEvent.click(swatch)
    await userEvent.click(screen.getByText('Outside'))
    expect(swatch).toHaveAttribute('aria-expanded', 'false')
  })
})
