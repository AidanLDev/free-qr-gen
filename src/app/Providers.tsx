import { ReactNode } from 'react'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { QRStyleProvider } from './components/QRStyleProvider'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <GoogleAnalytics gaId='G-6Q96JQ2FS6' />
      <GoogleTagManager gtmId='GTM-M2CNZHRC' />
      <QRStyleProvider>{children}</QRStyleProvider>
    </>
  )
}
