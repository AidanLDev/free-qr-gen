import React from 'react'
import PageHeader from './PageHeader'
import Footer from './Footer'

export default function ContentPage({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children: React.ReactNode
}) {
  return (
    <div>
      <PageHeader />
      <main className='mx-auto w-full max-w-3xl pb-16 pt-10 sm:pb-24 sm:pt-14'>
        <article className='prose-page'>
          <h1 className='text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            {title}
          </h1>
          <p className='mt-3 text-lg text-neutral-400'>{intro}</p>
          {children}
        </article>
      </main>
      <div className='mx-auto w-full max-w-3xl'>
        <React.Suspense fallback={<div />}>
          <Footer />
        </React.Suspense>
      </div>
    </div>
  )
}
