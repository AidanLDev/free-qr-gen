'use client'

import React, { useState } from 'react'
import FeedbackForm from './form/FeedbackForm'
import BuyMeACoffeeButton from './BuyMeACoffeeButton/BuyMeACoffeeButton'

export default function Footer() {
  const [formOpen, setFormOpen] = useState(false)
  return (
    <footer className="w-full">
      <div className="flex w-full justify-between items-center">
        {!formOpen && (
          <span
            onClick={() => setFormOpen((prevState) => !prevState)}
            className="font-bold text-center cursor-pointer hover:underline"
          >
            Feedback/Report a bug
          </span>
        )}
        {!formOpen && <BuyMeACoffeeButton />}
      </div>
      <FeedbackForm
        feedbackFormOpen={formOpen}
        setFeedbackFormOpen={setFormOpen}
      />
    </footer>
  )
}
