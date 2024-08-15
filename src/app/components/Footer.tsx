'use client'

import React, { useState } from 'react'
import FeedbackForm from './form/FeedbackForm'
import BuyMeACoffeeButton from './BuyMeACoffeeButton/BuyMeACoffeeButton'
import Link from 'next/link'
import { FaLongArrowAltRight, FaBug } from 'react-icons/fa'

export default function Footer() {
  const [formOpen, setFormOpen] = useState(false)
  return (
    <footer className="w-full">
      <div className="flex w-full justify-between items-center">
        {!formOpen && (
          <div
            className="flex gap-1 items-center"
            onClick={() => setFormOpen((prevState) => !prevState)}
          >
            <span className="link-style">Feedback/Report a bug</span>
            <FaBug className="text-primary" />
          </div>
        )}
        {!formOpen && <BuyMeACoffeeButton />}
        {!formOpen && (
          <Link href="/support-me" className="self-baseline">
            <div className="flex gap-1 items-center">
              <span className="link-style">Support Me</span>
              <FaLongArrowAltRight className="text-primary" />
            </div>
          </Link>
        )}
      </div>
      <FeedbackForm
        feedbackFormOpen={formOpen}
        setFeedbackFormOpen={setFormOpen}
      />
    </footer>
  )
}
