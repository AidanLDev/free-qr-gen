import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Vitest doesn't enable globals, so Testing Library can't register its own cleanup
afterEach(() => {
  cleanup()
})
