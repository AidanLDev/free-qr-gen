import { afterEach, describe, expect, it, vi } from 'vitest'
import { debounce, getColourContrast, validateEmail } from './helpers'

describe('debounce', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('only calls the function once calls stop, with the latest arguments', () => {
    vi.useFakeTimers()
    const fn = vi.fn()
    const debounced = debounce(fn, 100)

    debounced('a')
    vi.advanceTimersByTime(50)
    debounced('b')
    vi.advanceTimersByTime(99)
    expect(fn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(1)
    expect(fn).toHaveBeenCalledOnce()
    expect(fn).toHaveBeenCalledWith('b')
  })
})

describe('validateEmail', () => {
  it.each(['a@b.co', 'jane.smith+qr@example.co.uk'])('accepts %s', (email) =>
    expect(validateEmail(email)).toBe(true),
  )

  it.each(['', 'jane', 'jane@', 'jane@example', 'ja ne@example.com'])('rejects %s', (email) =>
    expect(validateEmail(email)).toBe(false),
  )
})

describe('getColourContrast', () => {
  it('returns 21:1 for black on white', () => {
    const result = getColourContrast('#000000', '#FFFFFF')
    expect(result?.ratio).toBeCloseTo(21)
    expect(result?.inverted).toBe(false)
  })

  it('flags light-on-dark codes as inverted', () => {
    expect(getColourContrast('#fff', '#000')?.inverted).toBe(true)
  })

  it('accepts 3-digit hex and a missing #', () => {
    expect(getColourContrast('000', 'fff')?.ratio).toBeCloseTo(21)
  })

  it('returns 1:1 for identical colours', () => {
    expect(getColourContrast('#1ABC9C', '#1abc9c')?.ratio).toBeCloseTo(1)
  })

  it('returns null for colours it cannot parse', () => {
    expect(getColourContrast('red', '#fff')).toBeNull()
    expect(getColourContrast('#000', '#12345')).toBeNull()
  })
})
