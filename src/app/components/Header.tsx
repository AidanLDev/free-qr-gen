import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="flex w-full gap-4 pt-8 sm:flex-nowrap flex-wrap sm:justify-normal justify-center">
      <Link className="cursor-pointer" href="/">
        <Image
          alt="Free QR Gen Logo"
          src="/FreeQRGenLogo.webp"
          width={128}
          height={100}
          className="rounded-xl cursor-pointer"
        />
      </Link>
      <h1 className="flex w-full pb-6 pt-8 backdrop-blur-2xl  lg:w-auto  lg:rounded-xl text-primary font-bold md:text-4xl text-2xl text-center m-auto sm:justify-normal justify-center">
        Welcome! Generate a free QR Code
      </h1>
    </header>
  )
}
