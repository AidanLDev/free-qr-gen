import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header({
  title = (
    <>
      Free <span className='text-primary'>QR Code</span> Generator
    </>
  ),
  subtitle = 'Pick your colours, add a logo and download. No sign-up, no watermarks.',
}: {
  title?: React.ReactNode
  subtitle?: string
}) {
  return (
    <header className='mx-auto flex w-full max-w-5xl items-center gap-4 pt-8 sm:gap-6 sm:pt-12'>
      <Link className='shrink-0' href='/'>
        <Image
          alt='Free QR Gen Logo'
          src='/FreeQRGenLogo.webp'
          width={150}
          height={120}
          priority
          unoptimized
          className='h-12 w-auto rounded-xl sm:h-16'
        />
      </Link>
      <div>
        <h1 className='text-balance text-2xl font-bold tracking-tight text-white sm:text-4xl'>
          {title}
        </h1>
        <p className='mt-1 text-sm text-neutral-400 sm:text-base'>{subtitle}</p>
      </div>
    </header>
  )
}
