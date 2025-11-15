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
      <main className='flex min-h-[75vh] flex-col items-center justify-between pb-8 pt-4 sm:pb-24'>
        <JsonLd />
        <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl'>
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
