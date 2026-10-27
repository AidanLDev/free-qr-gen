import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Link from './Link'
import { LinkPending, NavigationProgress } from './NavigationProgress'

const linkStatus = vi.hoisted(() => ({ pending: false }))

vi.mock('next/link', async (importOriginal) => ({
  ...(await importOriginal<typeof import('next/link')>()),
  useLinkStatus: () => ({ pending: linkStatus.pending }),
}))

function renderWithLink() {
  return render(
    <>
      <NavigationProgress />
      <LinkPending />
    </>,
  )
}

describe('NavigationProgress', () => {
  it('stays hidden while no link is pending', () => {
    linkStatus.pending = false
    renderWithLink()

    expect(screen.getByTestId('navigation-progress')).not.toHaveClass('is-pending')
  })

  it('shows while a link is pending and hides once it settles', () => {
    linkStatus.pending = true
    const { rerender } = renderWithLink()
    expect(screen.getByTestId('navigation-progress')).toHaveClass('is-pending')

    linkStatus.pending = false
    rerender(
      <>
        <NavigationProgress />
        <LinkPending />
      </>,
    )
    expect(screen.getByTestId('navigation-progress')).not.toHaveClass('is-pending')
  })

  it('hides if the pending link unmounts', () => {
    linkStatus.pending = true
    const { rerender } = renderWithLink()

    rerender(<NavigationProgress />)
    expect(screen.getByTestId('navigation-progress')).not.toHaveClass('is-pending')
  })
})

describe('Link', () => {
  it('renders a normal link and passes props through', () => {
    linkStatus.pending = false
    render(
      <Link href='/guides' className='text-primary'>
        Guides
      </Link>,
    )

    const link = screen.getByRole('link', { name: 'Guides' })
    expect(link).toHaveAttribute('href', '/guides')
    expect(link).toHaveClass('text-primary')
  })
})
