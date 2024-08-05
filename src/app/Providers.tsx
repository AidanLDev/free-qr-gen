import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

export default function Providerse({ children }: { children: ReactNode }) {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  )
}
