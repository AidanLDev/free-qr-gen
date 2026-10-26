import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import ErrorCorrectionPicker from './ErrorCorrectionPicker'

describe('ErrorCorrectionPicker', () => {
  it('shows every level in a labelled group with the current one checked', () => {
    render(<ErrorCorrectionPicker value='M' setValue={() => {}} />)

    expect(screen.getByRole('group', { name: 'Error correction' })).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(4)
    expect(screen.getByRole('radio', { name: /Medium/ })).toBeChecked()
    expect(screen.getByRole('radio', { name: /High/ })).not.toBeChecked()
  })

  it('selects a level', async () => {
    const setValue = vi.fn()
    render(<ErrorCorrectionPicker value='M' setValue={setValue} />)

    await userEvent.click(screen.getByRole('radio', { name: /High/ }))
    expect(setValue).toHaveBeenCalledWith('H')
  })
})
