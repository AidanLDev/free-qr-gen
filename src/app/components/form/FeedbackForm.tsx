'use client'

import React, { useEffect, useState } from 'react'

import { IFeedbackFormProps } from '@/app/types'
import { MdClose } from 'react-icons/md'
import Button from './components/Button'
import { toast } from 'react-toastify'
import TextArea from './components/TextArea'
import { postHeader } from '@/app/constants/constants'

export default function FeedbackForm({
  setFeedbackFormOpen,
  feedbackFormOpen,
}: IFeedbackFormProps) {
  const [feedback, setFeedback] = useState('')
  useEffect(() => {
    if (feedbackFormOpen) {
      const timeoutId = setTimeout(
        () =>
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          }),
        200,
      )
      return () => clearTimeout(timeoutId)
    }
  }, [feedbackFormOpen])
  const handleSubmitFeedback = async () => {
    const sendFeedbackRes = await fetch('api/send-feedback', {
      headers: postHeader,
      method: 'POST',
      body: JSON.stringify({
        feedback,
      }),
    })

    if (sendFeedbackRes.ok) {
      toast('Feedback sent, thank you for taking your time to reach out!', {
        type: 'success',
      })
      setFeedback('')
      setFeedbackFormOpen(false)
    }
  }
  return (
    <div
      className={`feedback-form-wrapper card w-full max-w-md overflow-hidden ${
        feedbackFormOpen ? 'open' : ''
      }`}
    >
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold text-white'>Get in touch!</h2>
        <button
          type='button'
          aria-label='Close feedback form'
          className='rounded-md p-1 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white'
          onClick={() => {
            setFeedback('')
            setFeedbackFormOpen(false)
          }}
        >
          <MdClose size={22} />
        </button>
      </div>
      <p className='mt-1 text-sm text-neutral-400'>
        Spotted an issue? Can think of an improvement? Let me know and I will get on it! - AL
      </p>
      <div className='mt-4 flex flex-col gap-4'>
        <TextArea value={feedback} setValue={setFeedback} id='feedback' label='Feedback' />
        <Button
          label='Submit feedback'
          className='self-end'
          onClick={async () => await handleSubmitFeedback()}
        />
      </div>
    </div>
  )
}
