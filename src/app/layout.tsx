import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Providers from './Providers'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Free QR Code Generator',
  description:
    'Customise and generate a QR code for free! Download and share your links in a convenient fun way.',
  applicationName: 'Free QR Gen',
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
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  verification: {
    google:
      'google-site-verification=kyNk7PgQmwiuEPtm2DX7tKsAECvYMbcNNnRTVg9fUc4',
  },
  icons: {
    icon: [
      {
        url: 'https://freeqrgen.net/favicon.ico',
        type: 'image/x-icon',
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
      <Providers>
        <ToastContainer />
        <body
          className={`${inter.className} min-h-screen  px-8 sm:px-24 flex flex-col justify-between pb-4`}
        >
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  )
}
