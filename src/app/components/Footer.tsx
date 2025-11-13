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
  const year = format(new Date(), 'yyyy')
  return (
    <>
      <div className="flex w-full justify-center">
        <FeedbackForm
          feedbackFormOpen={formOpen}
          setFeedbackFormOpen={setFormOpen}
        />
      </div>
      <footer className="w-full flex md:flex-row flex-col justify-between md:items-center items-center gap-4">
        <div
          className="flex gap-1 items-center justify-center text-primary py-2 md:self-baseline"
          onClick={() => setFormOpen((prevState) => !prevState)}
        >
          <span className="link-style hover:underline cursor-pointer text-primary">
            Feedback/Report a bug
          </span>
          <FaBug className="text-primary hover:underline cursor-pointer" />
        </div>
        {<BuyMeACoffeeButton />}
        {
          <Link
            href={supportMe ? '/' : '/support-me'}
            className="md:self-baseline"
          >
            <div className="flex gap-1 items-center">
              <span className="link-style">
                {supportMe ? 'BackHome' : 'Support Me'}
              </span>
              <FaLongArrowAltRight className="text-primary hover:underline cursor-pointer" />
            </div>
          </Link>
        }
        {<span className="md:self-baseline">© Aidan Lowson - {year}</span>}
      </footer>
    </>
  )
}
