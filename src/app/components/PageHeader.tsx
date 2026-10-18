import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Compact header for content pages; the home page uses the full <Header />
export default function PageHeader() {
  return (
    <header className='mx-auto flex w-full max-w-3xl items-center justify-between gap-4 pt-8 sm:pt-12'>
      <Link className='flex shrink-0 items-center gap-3' href='/'>
        <Image
          alt='Free QR Gen Logo'
          src='/FreeQRGenLogo.webp'
          width={150}
          height={120}
          unoptimized
          className='h-10 w-auto rounded-lg'
        />
        <span className='hidden font-semibold text-white sm:inline'>Free QR Gen</span>
      </Link>
      <Link
        href='/'
        className='inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-neutral-950 transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900'
      >
        Create a QR code
      </Link>
    </header>
  )
}
