import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ContentPage from './ContentPage'

vi.mock('react-toastify', () => ({ toast: vi.fn() }))

describe('ContentPage', () => {
  it('wraps the content in an article with the page header and footer', () => {
    render(
      <ContentPage title='About Free QR Gen' intro='Who made this and why.'>
        <h2>Why it is free</h2>
      </ContentPage>,
    )

    const article = screen.getByRole('article')
    expect(screen.getByRole('heading', { level: 1, name: 'About Free QR Gen' })).toBeInTheDocument()
    expect(article).toHaveTextContent('Who made this and why.')
    expect(article).toContainElement(screen.getByRole('heading', { name: 'Why it is free' }))

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
