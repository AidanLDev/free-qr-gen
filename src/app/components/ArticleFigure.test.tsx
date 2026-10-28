import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ArticleFigure from './ArticleFigure'

const image = {
  src: '/guide-images/menu.webp',
  alt: 'A QR code on a table',
  width: 1200,
  height: 800,
}

describe('ArticleFigure', () => {
  it('renders the image unoptimised with its dimensions', () => {
    render(<ArticleFigure {...image} />)

    const img = screen.getByRole('img', { name: 'A QR code on a table' })
    // Unoptimised images keep their public path rather than going through /_next/image
    expect(img).toHaveAttribute('src', '/guide-images/menu.webp')
    expect(img).toHaveAttribute('width', '1200')
    expect(img).toHaveAttribute('height', '800')
  })

  it('adds a caption when given one', () => {
    const { container, rerender } = render(<ArticleFigure {...image} />)
    expect(container.querySelector('figcaption')).toBeNull()

    rerender(<ArticleFigure {...image} caption='Place it on every table' />)
    expect(container.querySelector('figure > figcaption')).toHaveTextContent(
      'Place it on every table',
    )
  })
})
