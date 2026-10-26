import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import TextArea from './TextArea'

describe('TextArea', () => {
  it('is labelled and reports changes and focus', async () => {
    const setValue = vi.fn()
    const setFocus = vi.fn()
    render(<TextArea id='msg' label='Message' value='' setValue={setValue} setFocus={setFocus} />)

    const textarea = screen.getByRole('textbox', { name: 'Message' })
    await userEvent.type(textarea, 'H')
    expect(setValue).toHaveBeenCalledWith('H')
    expect(setFocus).toHaveBeenLastCalledWith(true)

    await userEvent.tab()
    expect(setFocus).toHaveBeenLastCalledWith(false)
  })

  it('links the error message to the textarea', () => {
    render(<TextArea id='msg' label='Message' value='x' setValue={() => {}} error='Too long' />)

    const textarea = screen.getByRole('textbox', { name: 'Message' })
    expect(textarea).toHaveAttribute('aria-invalid', 'true')
    expect(textarea).toHaveAccessibleDescription('Too long')
  })
})
