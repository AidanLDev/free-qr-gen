import Link from 'next/link'
import React from 'react'

export default function Custom404() {
  return (
    <div className='flex h-[100vh] flex-col items-center justify-center gap-8 align-middle'>
      <header>
        <h1 className='text-4xl'>Oh no! Page not found...</h1>
      </header>
      <main>
        <section>
          <Link href='/'>
            <p className='link-style text-2xl'>Let us take you back home</p>
          </Link>
        </section>
      </main>
    </div>
  )
}
