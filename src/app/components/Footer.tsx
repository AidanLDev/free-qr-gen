'use client'

import React, { useState } from 'react'
import FeedbackForm from './form/FeedbackForm'

export default function Footer() {
  const [formOpen, setFormOpen] = useState(false)
  return (
    <footer>
      <div
        className="cursor-pointer"
        onClick={() => setFormOpen((prevState) => !prevState)}
      >
        {!formOpen && (
          <span className="font-bold text-center">Feedback/Report a bug</span>
        )}
      </div>
      <FeedbackForm feedbackFormOpen={formOpen} setFeedbackFormOpen={setFormOpen} />
    </footer>
  )
}
