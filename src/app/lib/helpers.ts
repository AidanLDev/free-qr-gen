export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | undefined

  return function executedFunction(this: any, ...args: Parameters<T>): void {
    const later = () => {
      clearTimeout(timeout)
      func.apply(this, args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const parseHex = (colour: string): number[] | null => {
  const match = colour.trim().match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i)
  if (!match) return null
  const hex =
    match[1].length === 3
      ? match[1]
          .split('')
          .map((c) => c + c)
          .join('')
      : match[1]
  return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16))
}

const relativeLuminance = ([r, g, b]: number[]): number => {
  const [lr, lg, lb] = [r, g, b].map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb
}

/**
 * Compares two hex colours. Returns null if either can't be parsed.
 * `inverted` is true when the foreground is lighter than the background,
 * which some QR scanners can't read.
 */
export const getColourContrast = (
  fg: string,
  bg: string,
): { ratio: number; inverted: boolean } | null => {
  const fgRgb = parseHex(fg)
  const bgRgb = parseHex(bg)
  if (!fgRgb || !bgRgb) return null
  const fgLum = relativeLuminance(fgRgb)
  const bgLum = relativeLuminance(bgRgb)
  const ratio = (Math.max(fgLum, bgLum) + 0.05) / (Math.min(fgLum, bgLum) + 0.05)
  return { ratio, inverted: fgLum > bgLum }
}
