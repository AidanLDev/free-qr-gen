'use client'

import React, { useState } from 'react'
import FeedbackForm from './form/FeedbackForm'
import BuyMeACoffeeButton from './BuyMeACoffeeButton/BuyMeACoffeeButton'
import Link from 'next/link'
import { FaLongArrowAltRight, FaBug } from 'react-icons/fa'
import { format } from 'date-fns'

interface IFooterProps {
  supportMe?: boolean
}

export default function Footer({ supportMe }: IFooterProps) {
  const [formOpen, setFormOpen] = useState(false)
  const year = typeof window !== 'undefined' ? format(new Date(), 'yyyy') : ''

  return (
    <>
      <div className='flex w-full justify-center'>
        <FeedbackForm feedbackFormOpen={formOpen} setFeedbackFormOpen={setFormOpen} />
      </div>
      <footer className='flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-center'>
        <div
          className='flex items-center justify-center gap-1 py-2 text-primary md:self-baseline'
          onClick={() => setFormOpen((prevState) => !prevState)}
        >
          <span className='link-style cursor-pointer text-primary hover:underline'>
            Feedback/Report a bug
          </span>
          <FaBug className='cursor-pointer text-primary hover:underline' />
        </div>
        {<BuyMeACoffeeButton />}
        {
          <Link href={supportMe ? '/' : '/support-me'} className='md:self-baseline'>
            <div className='flex items-center gap-1'>
              <span className='link-style'>{supportMe ? 'BackHome' : 'Support Me'}</span>
              <FaLongArrowAltRight className='cursor-pointer text-primary hover:underline' />
            </div>
          </Link>
        }
        {<span className='md:self-baseline'>© Aidan Lowson - {year}</span>}
      </footer>
    </>
  )
}
