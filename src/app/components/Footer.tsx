'use client'

import React, { useState } from 'react'
import FeedbackForm from './form/FeedbackForm'
import { FaBug } from 'react-icons/fa'
import { format } from 'date-fns'
import Link from 'next/link'

export default function Footer() {
  const [formOpen, setFormOpen] = useState(false)
  const year = format(new Date(), 'yyyy')

  return (
    <div className='mx-auto w-full max-w-5xl'>
      <div className='flex w-full justify-center'>
        <FeedbackForm feedbackFormOpen={formOpen} setFeedbackFormOpen={setFormOpen} />
      </div>
      <footer className='flex w-full flex-col items-center justify-between gap-3 border-t border-neutral-800 pt-6 text-sm text-neutral-500 sm:flex-row'>
        <button
          type='button'
          className='link-style flex items-center gap-2'
          onClick={() => setFormOpen((prevState) => !prevState)}
          aria-expanded={formOpen}
        >
          Feedback / report a bug
          <FaBug />
        </button>
        <nav
          aria-label='Site'
          className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2'
        >
          <Link href='/about' className='transition-colors hover:text-neutral-300'>
            About
          </Link>
          <Link href='/what-is-a-qr-code' className='transition-colors hover:text-neutral-300'>
            What is a QR code?
          </Link>
          <Link
            href='/qr-code-for-restaurant-menu'
            className='transition-colors hover:text-neutral-300'
          >
            Restaurant menu QR codes
          </Link>
        </nav>
        <span>© Aidan Lowson - {year}</span>
      </footer>
    </div>
  )
}
