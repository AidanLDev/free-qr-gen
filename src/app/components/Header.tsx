import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='flex w-full flex-wrap justify-center gap-4 pt-8 sm:flex-nowrap sm:gap-16'>
      <Link className='hidden cursor-pointer sm:inline' href='/'>
        <Image
          alt='Free QR Gen Logo'
          src='/FreeQRGenLogo.webp'
          width={150}
          height={120}
          className='hidden cursor-pointer rounded-xl sm:inline'
        />
      </Link>
      <h1 className='flex w-full justify-center pb-6 pt-8 text-center text-3xl font-bold text-primary backdrop-blur-2xl sm:justify-normal md:text-4xl lg:w-auto lg:rounded-xl'>
        Welcome! Generate a free QR Code
      </h1>
    </header>
  )
}
