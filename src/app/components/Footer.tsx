'use client'

import React, { useState } from 'react'
import FeedbackForm from './form/FeedbackForm'
import { FaBug } from 'react-icons/fa'
import { format } from 'date-fns'
import Link from '@/app/components/Link'
import { qrTypeList } from '../lib/qrTypes'

const guides = [
  { href: '/about', label: 'About' },
  { href: '/guides', label: 'All guides' },
  { href: '/what-is-a-qr-code', label: 'What is a QR code?' },
  { href: '/qr-code-for-restaurant-menu', label: 'Restaurant menu QR codes' },
  { href: '/how-to-share-wifi-with-a-qr-code', label: 'Share WiFi with a QR code' },
  { href: '/why-did-my-qr-code-stop-working', label: 'Why QR codes stop working' },
]

export default function Footer() {
  const [formOpen, setFormOpen] = useState(false)
  const year = format(new Date(), 'yyyy')

  return (
    <div className='mx-auto w-full max-w-5xl'>
      <div className='flex w-full justify-center'>
        <FeedbackForm feedbackFormOpen={formOpen} setFeedbackFormOpen={setFormOpen} />
      </div>
      <footer className='w-full border-t border-neutral-800 pt-8 text-sm text-neutral-500'>
        <div className='grid gap-8 sm:grid-cols-3'>
          <nav aria-label='QR code generators' className='sm:col-span-2'>
            <p className='section-title mb-3'>QR code generators</p>
            <ul className='grid grid-cols-2 gap-x-4 gap-y-2'>
              {qrTypeList.map(({ type, path, label }) => (
                <li key={type}>
                  <Link href={path} className='transition-colors hover:text-neutral-300'>
                    {label} QR code
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label='Resources'>
            <p className='section-title mb-3'>Resources</p>
            <ul className='flex flex-col gap-2'>
              {guides.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className='transition-colors hover:text-neutral-300'>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='mt-8 flex flex-col items-center justify-between gap-3 border-t border-neutral-800 pt-6 sm:flex-row'>
          <button
            type='button'
            className='link-style flex items-center gap-2'
            onClick={() => setFormOpen((prevState) => !prevState)}
            aria-expanded={formOpen}
          >
            Feedback / report a bug
            <FaBug />
          </button>
          <span>© Aidan Lowson - {year}</span>
        </div>
      </footer>
    </div>
  )
}
