import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import TextInput from './TextInput'

describe('TextInput', () => {
  it('is labelled and reports changes and focus', async () => {
    const setValue = vi.fn()
    const setFocus = vi.fn()
    render(<TextInput id='name' label='Name' value='' setValue={setValue} setFocus={setFocus} />)

    const input = screen.getByRole('textbox', { name: 'Name' })
    await userEvent.type(input, 'J')
    expect(setValue).toHaveBeenCalledWith('J')
    expect(setFocus).toHaveBeenLastCalledWith(true)

    await userEvent.tab()
    expect(setFocus).toHaveBeenLastCalledWith(false)
  })

  it('links the error message to the input', () => {
    render(<TextInput id='email' label='Email' value='x' setValue={() => {}} error='Bad email' />)

    const input = screen.getByRole('textbox', { name: 'Email' })
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAccessibleDescription('Bad email')
  })

  it('is valid without an error', () => {
    render(<TextInput id='email' label='Email' value='' setValue={() => {}} />)
    expect(screen.getByRole('textbox', { name: 'Email' })).toHaveAttribute('aria-invalid', 'false')
  })
})
