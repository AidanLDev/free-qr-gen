import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import Providers from './Providers'
import { ToastContainer } from 'react-toastify'
import { siteUrl } from './constants/constants'
import { ogImage, siteDescription, siteName, siteTitle } from './lib/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteTitle} | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    'free QR code generator',
    'QR code generator',
    'QR code maker',
    'custom QR code',
    'QR code with logo',
    'coloured QR code',
    'QR code SVG',
    'QR code PNG',
    'no sign-up QR code',
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    type: 'website',
    siteName,
    locale: 'en_GB',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  verification: {
    google: 'kyNk7PgQmwiuEPtm2DX7tKsAECvYMbcNNnRTVg9fUc4',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en-GB'>
      <body className={`${inter.className} min-h-screen px-4 pb-6 antialiased sm:px-8`}>
        <Providers>
          <ToastContainer theme='dark' />
          {children}
        </Providers>
      </body>
    </html>
  )
}
