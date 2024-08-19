import React from 'react'


export default function Header() {
  return (
    <header>
      <h1 className="fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:bg-zinc-800/30 text-primary">
        Welcome! Generate a free QR Code
      </h1>
    </header>
  )
}
