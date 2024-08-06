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
  keywords: [
    'QR code generator',
    'Custom QR codes',
    'QR code creator',
    'Personalized QR codes',
    'QR code design',
    'QR code maker',
    'QR code customization',
    'Dynamic QR codes',
    'Branded QR codes',
    'QR code scanner',
    'QR code marketing',
    'QR code solutions',
    'Colorful QR codes',
    'Logo QR codes',
    'QR code analytics',
  ],
  openGraph: {
    title: 'Free QR Code Generator',
    description:
      'Customise and generate a QR code for free! Download and share your links in a convenient fun way.',
    type: 'website',
    siteName: 'freeqrgen.net',
    images: [
      {
        url: 'https://freeqrgen.net/FreeQRGenCoverImage.png',
        width: 1200,
        height: 630,
        alt: 'Free QR Code Generator Cover Image',
      },
    ],
  },
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
