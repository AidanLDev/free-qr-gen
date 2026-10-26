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
    'WiFi QR code generator',
    'vCard QR code generator',
    'contact QR code',
    'WhatsApp QR code',
    'QR code that never expires',
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
  twitter: {
    card: 'summary_large_image',
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
    other: {
      'msvalidate.01': 'A1B90C4E68047999157C3B062E05CB34',
    },
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
    // globals.css scrolls smoothly for in-page links; this tells Next to jump instantly on navigation
    <html lang='en-GB' data-scroll-behavior='smooth'>
      <body className={`${inter.className} min-h-screen px-4 pb-6 antialiased sm:px-8`}>
        <Providers>
          <ToastContainer theme='dark' />
          {children}
        </Providers>
      </body>
    </html>
  )
}
