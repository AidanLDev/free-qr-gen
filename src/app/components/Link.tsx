import NextLink from 'next/link'
import type { ComponentProps } from 'react'
import { LinkPending } from './NavigationProgress'

// Use this instead of next/link so slow navigations show the progress bar
export default function Link({ children, ...props }: ComponentProps<typeof NextLink>) {
  return (
    <NextLink {...props}>
      {children}
      <LinkPending />
    </NextLink>
  )
}
