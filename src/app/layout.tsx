import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Providerse from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Free QR Code Generator',
  description:
    'Customise and generate a QR code for free! Download and share your links in a convenient fun way.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Providerse>
        <body className={inter.className}>{children}</body>
      </Providerse>
    </html>
  )
}
