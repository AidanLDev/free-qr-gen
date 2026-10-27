'use client'

import { useLinkStatus } from 'next/link'
import { useEffect, useSyncExternalStore } from 'react'

// Links report their pending state here so one bar can show it for the whole page
let pendingLinks = 0
const listeners = new Set<() => void>()

function changePending(delta: number) {
  pendingLinks += delta
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

// Rendered inside every Link; useLinkStatus only works from a Link's descendants
export function LinkPending() {
  const { pending } = useLinkStatus()

  useEffect(() => {
    if (!pending) return
    changePending(1)
    return () => changePending(-1)
  }, [pending])

  return null
}

// Thin bar along the top of the page; globals.css delays it so fast navigations don't flash
export function NavigationProgress() {
  const pending = useSyncExternalStore(
    subscribe,
    () => pendingLinks > 0,
    () => false,
  )

  return (
    <div
      aria-hidden
      data-testid='navigation-progress'
      className={`nav-progress ${pending ? 'is-pending' : ''}`}
    />
  )
}
