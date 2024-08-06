import { ReactNode } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <GoogleAnalytics gaId="G-6Q96JQ2FS6" />
      {children}
    </>
  )
}
