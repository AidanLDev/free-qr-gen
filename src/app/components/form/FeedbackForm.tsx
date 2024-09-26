'use client'

import React, { useState } from 'react'

import { IFeedbackFormProps } from '@/app/types'
import { MdClose } from 'react-icons/md'
import Button from './Button'
import { toast } from 'react-toastify'
import TextArea from './TextArea'
import { postHeader } from '@/app/constants/constants'

export default function FeedbackForm({
  setFeedbackFormOpen,
  feedbackFormOpen,
}: IFeedbackFormProps) {
  const [feedback, setFeedback] = useState('')
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
      className={`border-2 border-slate-700 rounded-md max-w-80 p-4 overflow-hidden feedback-form-wrapper sm:mb-0 mb-12 text-xl ${
        feedbackFormOpen ? 'open' : ''
      }`}
    >
      <div className="flex justify-center">
        <h1 className="text-lg font-bold text-center text-primary w-full">
          Get in touch!
        </h1>
        <MdClose
          className="cursor-pointer w-[24px] h-[24px] text-white"
          onClick={() => {
            setFeedback('')
            setFeedbackFormOpen(false)
          }}
          width={28}
          height={28}
        />
      </div>
      <div className='flex flex-col gap-4 text-center'>
        <p className="py-2">Spotted an issue? Let me know and I will fix it!</p>
        <div className="flex flex-col gap-4 text-center">
          <TextArea
            value={feedback}
            setValue={setFeedback}
            id="feedback"
            label="Feedback:"
          />
          <Button
            label="Submit Feedback"
            className="max-w-[75%] self-center"
            onClick={async () => await handleSubmitFeedback()}
          />
        </div>
        <p className="text-center py-2">I am a human, please do be kind 💖</p>
      </div>
    </div>
  )
}
