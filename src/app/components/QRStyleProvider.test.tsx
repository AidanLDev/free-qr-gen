import { render, renderHook, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { QRStyleProvider, useQRStyle } from './QRStyleProvider'

function SizeButton() {
  const { size, setSize } = useQRStyle()
  return <button onClick={() => setSize(1024)}>{size}</button>
}

describe('QRStyleProvider', () => {
  it('starts with a black-on-white, medium-correction code and no logo', () => {
    const { result } = renderHook(() => useQRStyle(), { wrapper: QRStyleProvider })

    expect(result.current).toMatchObject({
      size: 300,
      foregroundColour: '#000000',
      backgroundColour: '#FFFFFF',
      imgSrc: undefined,
      errorCorrectionLevel: 'M',
    })
  })

  it('shares updates with every consumer', async () => {
    render(
      <QRStyleProvider>
        <SizeButton />
        <SizeButton />
      </QRStyleProvider>,
    )

    await userEvent.click(screen.getAllByRole('button')[0])
    expect(screen.getAllByRole('button', { name: '1024' })).toHaveLength(2)
  })

  it('throws a helpful error outside the provider', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => renderHook(() => useQRStyle())).toThrow(
      'useQRStyle must be used inside QRStyleProvider',
    )
    vi.restoreAllMocks()
  })
})
