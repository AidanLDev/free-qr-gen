import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import useClickOutside from './useClickOutside'

function Harness({ onOutside }: { onOutside: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, onOutside)
  return (
    <div>
      <div ref={ref}>
        <button>Inside</button>
      </div>
      <button>Outside</button>
    </div>
  )
}

describe('useClickOutside', () => {
  it('fires for clicks outside the element only', async () => {
    const onOutside = vi.fn()
    render(<Harness onOutside={onOutside} />)

    await userEvent.click(screen.getByRole('button', { name: 'Inside' }))
    expect(onOutside).not.toHaveBeenCalled()

    await userEvent.click(screen.getByRole('button', { name: 'Outside' }))
    expect(onOutside).toHaveBeenCalledOnce()
  })

  it('ignores a drag that starts inside and ends outside', () => {
    const onOutside = vi.fn()
    render(<Harness onOutside={onOutside} />)

    fireEvent.mouseDown(screen.getByRole('button', { name: 'Inside' }))
    fireEvent.click(screen.getByRole('button', { name: 'Outside' }))
    expect(onOutside).not.toHaveBeenCalled()
  })

  it('stops listening once unmounted', async () => {
    const onOutside = vi.fn()
    const { unmount } = render(<Harness onOutside={onOutside} />)
    unmount()

    await userEvent.click(document.body)
    expect(onOutside).not.toHaveBeenCalled()
  })
})
