import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="flex w-full sm:gap-16 gap-4 pt-8 sm:flex-nowrap flex-wrap justify-center">
      <Link className="cursor-pointer sm:inline hidden" href="/">
        <Image
          alt="Free QR Gen Logo"
          src="/FreeQRGenLogo.webp"
          width={150}
          height={120}
          className="rounded-xl cursor-pointer sm:inline hidden"
        />
      </Link>
      <h1 className="flex w-full pb-6 pt-8 backdrop-blur-2xl  lg:w-auto  lg:rounded-xl text-primary font-bold md:text-4xl text-3xl text-center sm:justify-normal justify-center">
        Welcome! Generate a free QR Code
      </h1>
    </header>
  )
}
