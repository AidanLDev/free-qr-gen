import React from 'react'
import QRInfoForm from './components/form/QRInfoForm'
import { Metadata } from 'next'
import JsonLd from './components/JsonLd'
import Footer from './components/Footer'
import { siteUrl } from './constants/constants'
import Header from './components/Header'
import HomeInfo from './components/HomeInfo'
import QRTypeTabs from './components/QRTypeTabs'

export const metadata: Metadata = {
  alternates: {
    canonical: siteUrl,
  },
}

export default function Home() {
  return (
    <div>
      <Header />
      <main className='mx-auto min-h-[75vh] w-full max-w-5xl pb-12 pt-8 sm:pb-24 sm:pt-10'>
        <JsonLd />
        <QRTypeTabs active='url' />
        <div>
          <React.Suspense fallback={<div />}>
            <QRInfoForm />
          </React.Suspense>
        </div>
      </main>
      <HomeInfo />
      <React.Suspense fallback={<div />}>
        <Footer />
      </React.Suspense>
    </div>
  )
}
