import Link from 'next/link'
import React from 'react'

export default function Custom404() {
  return (
    <div className="h-[100vh] gap-8 flex justify-center flex-col align-middle items-center">
      <header>
        <h1 className="text-4xl">Oh no! Page not found...</h1>
      </header>
      <main>
        <section>
          <Link href="/">
            <p className="text-2xl link-style">Let us take you back home</p>
          </Link>
        </section>
      </main>
    </div>
  )
}
