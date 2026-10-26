import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import QRCodeSvg from './QRCodeSvg'

describe('QRCodeSvg', () => {
  it('renders the code at full size with the chosen colours inside the ref', () => {
    const svgRef = createRef<HTMLDivElement>()
    render(
      <QRCodeSvg
        value='https://example.com'
        size={512}
        fgColour='#123456'
        bgColour='#abcdef'
        svgRef={svgRef}
        errorCorrectionLevel='H'
      />,
    )

    const svg = svgRef.current?.querySelector('svg')
    expect(svg).toHaveAttribute('width', '512')
    expect(svg?.querySelector('[fill="#123456"]')).not.toBeNull()
    expect(svg?.querySelector('[fill="#abcdef"]')).not.toBeNull()
  })

  it('falls back to black on white', () => {
    const svgRef = createRef<HTMLDivElement>()
    render(<QRCodeSvg value='hi' svgRef={svgRef} errorCorrectionLevel='M' />)

    const svg = svgRef.current?.querySelector('svg')
    expect(svg?.querySelector('[fill="#000000"]')).not.toBeNull()
    expect(svg?.querySelector('[fill="#ffffff"]')).not.toBeNull()
  })

  it('makes a denser code at a higher error correction level', () => {
    const cells = (level: 'L' | 'H') => {
      const svgRef = createRef<HTMLDivElement>()
      const { unmount } = render(
        <QRCodeSvg value='https://example.com' svgRef={svgRef} errorCorrectionLevel={level} />,
      )
      const viewBox = svgRef.current?.querySelector('svg')?.getAttribute('viewBox')
      unmount()
      return Number(viewBox?.split(' ')[2])
    }
    expect(cells('H')).toBeGreaterThan(cells('L'))
  })
})
