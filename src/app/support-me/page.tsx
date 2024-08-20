'use client'

import React, { useState } from 'react'

import Link from 'next/link'
import BuyMeACoffeeButton from '../components/BuyMeACoffeeButton/BuyMeACoffeeButton'
import Footer from '../components/Footer'
import Input from '../components/form/TextInput'
import Button from '../components/form/Button'
import { postHeader } from '../constants/constants'
import { toast } from 'react-toastify'
import { validateEmail } from '@/app/lib/helpers'

export default function SupportMe() {
  const [email, setEmail] = useState('')

  const handleSubscribe = async () => {
    if (!email) {
      toast(
        'Please enter an email address you would like us to send the news letter to',
        { type: 'info' }
      )
      return
    }

    if (!validateEmail(email)) {
      toast('Please check your email address and try again', { type: 'info' })
      return
    }
    const subResponse = await fetch('api/subscribe', {
      headers: postHeader,
      method: 'POST',
      body: JSON.stringify({
        email,
      }),
    })

    if (subResponse.ok) {
      toast('Successfully subscribed to the newsletter', { type: 'success' })
      setEmail('')
    } else {
      toast('Error subscribing to the newsletter, please try again', {
        type: 'error',
      })
    }
  }

  return (
    <div>
      <main className="flex flex-col items-center justify-between sm:pb-24 py-8 gap-3 min-h-[75vh]">
        <h1 className="text-lg font-bold">
          Thanks for visiting my QR Gen project!
        </h1>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center font-bold">
            Subscribe to email alerts for when new projects are released:
          </h2>
          <Input
            value={email}
            setValue={setEmail}
            label="Email"
            id="Email"
            type="email"
          />
          <Button
            label="Subscribe"
            onClick={async () => await handleSubscribe()}
          />
        </div>
        <p>
          Take a look at{' '}
          <Link
            target="_blank"
            className="link-style"
            href="https://aidanlowson.com"
          >
            my Portfolio
          </Link>{' '}
          to find out about other things I have worked on in the past
        </p>
        <p>
          If you gained value from this site you can always buy me a coffee to
          show support
        </p>
        <BuyMeACoffeeButton />
        <p>This directly supports me and helps cover server costs too.</p>
        <p>
          Or if you want to support via{' '}
          <Link
            target="_blank"
            className="link-style"
            href="https://patreon.com/AidanL94?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
          >
            Patreon
          </Link>{' '}
          that would be greatly appreciated
        </p>
        <p>
          You can find me on{' '}
          <Link
            target="_blank"
            className="link-style"
            href="https://boosty.to/aidanl94/donate"
          >
            Boosty
          </Link>{' '}
          too
        </p>
      </main>
      <Footer supportMe />
    </div>
  )
}
