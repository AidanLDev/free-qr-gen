import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import NumberInput from './NumberInput'

function Harness({ onChange }: { onChange: (value: number) => void }) {
  const [value, setValue] = useState(300)
  return (
    <NumberInput
      id='size'
      label='Size'
      suffix='px'
      min={1}
      max={1000}
      value={value}
      setValue={(next) => {
        setValue(next)
        onChange(next as number)
      }}
    />
  )
}

describe('NumberInput', () => {
  it('shows the suffix', () => {
    render(<Harness onChange={() => {}} />)
    expect(screen.getByText('px')).toBeInTheDocument()
  })

  it('commits values within range', async () => {
    const onChange = vi.fn()
    render(<Harness onChange={onChange} />)

    const input = screen.getByRole('spinbutton', { name: 'Size' })
    await userEvent.clear(input)
    await userEvent.type(input, '512')
    expect(onChange).toHaveBeenLastCalledWith(512)
  })

  it('lets the field be cleared without committing, then resets on blur', async () => {
    const onChange = vi.fn()
    render(<Harness onChange={onChange} />)

    const input = screen.getByRole('spinbutton', { name: 'Size' })
    await userEvent.clear(input)
    expect(input).toHaveValue(null)
    expect(onChange).not.toHaveBeenCalled()

    await userEvent.tab()
    expect(input).toHaveValue(300)
  })

  it('ignores values out of range', async () => {
    const onChange = vi.fn()
    render(<Harness onChange={onChange} />)

    const input = screen.getByRole('spinbutton', { name: 'Size' })
    await userEvent.clear(input)
    await userEvent.type(input, '5000')
    expect(onChange).not.toHaveBeenCalledWith(5000)

    await userEvent.tab()
    expect(input).toHaveValue(500)
  })

  it('follows changes to the value from outside', () => {
    const { rerender } = render(<NumberInput id='w' label='Width' value={48} setValue={() => {}} />)
    rerender(<NumberInput id='w' label='Width' value={64} setValue={() => {}} />)
    expect(screen.getByRole('spinbutton', { name: 'Width' })).toHaveValue(64)
  })
})
