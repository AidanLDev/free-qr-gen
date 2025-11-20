'use client'

import React, { useState } from 'react'
import FeedbackForm from './form/FeedbackForm'
import { FaBug } from 'react-icons/fa'
import { format } from 'date-fns'

export default function Footer() {
  const [formOpen, setFormOpen] = useState(false)
  const year = format(new Date(), 'yyyy')

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
        <span className='md:self-baseline'>© Aidan Lowson - {year}</span>
      </footer>
    </>
  )
}
