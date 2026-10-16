import React from 'react'
import QRInfoForm from './components/form/QRInfoForm'
import { Metadata } from 'next'
import JsonLd from './components/JsonLd'
import Footer from './components/Footer'
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://freeqrgen.net',
  },
}

export default function Home() {
  return (
    <div>
      <main className='mx-auto min-h-[75vh] w-full max-w-5xl pb-12 pt-8 sm:pb-24 sm:pt-10'>
        <JsonLd />
        <div>
          <React.Suspense fallback={<div />}>
            <QRInfoForm />
          </React.Suspense>
        </div>
      </main>
      <React.Suspense fallback={<div />}>
        <Footer />
      </React.Suspense>
    </div>
  )
}
