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
      className={`feedback-form-wrapper mb-12 max-w-80 overflow-hidden rounded-md border-2 border-slate-700 p-4 text-xl sm:mb-0 ${
        feedbackFormOpen ? 'open' : ''
      }`}
    >
      <div className='flex justify-center'>
        <h1 className='w-full text-center text-lg font-bold text-primary'>Get in touch!</h1>
        <MdClose
          className='h-[24px] w-[24px] cursor-pointer text-white'
          onClick={() => {
            setFeedback('')
            setFeedbackFormOpen(false)
          }}
          width={28}
          height={28}
        />
      </div>
      <div className='flex flex-col gap-4 text-center'>
        <p className='py-2'>Spotted an issue? Let me know and I will fix it!</p>
        <div className='flex flex-col gap-4 text-center'>
          <TextArea value={feedback} setValue={setFeedback} id='feedback' label='Feedback:' />
          <Button
            label='Submit Feedback'
            className='max-w-[75%] self-center'
            onClick={async () => await handleSubmitFeedback()}
          />
        </div>
        <p className='py-2 text-center'>I am a human, please do be kind 💖</p>
      </div>
    </div>
  )
}
