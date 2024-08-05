import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Providerse({ children }: { children: ReactNode }) {
  return (
    <>
      <ToastContainer />
      <GoogleAnalytics gaId="G-6Q96JQ2FS6" />
      {children}
    </>
  )
}
