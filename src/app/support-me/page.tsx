'use client'

import React, { useState } from 'react'

import Link from 'next/link'
import BuyMeACoffeeButton from '../components/BuyMeACoffeeButton/BuyMeACoffeeButton'
import Footer from '../components/Footer'
import Input from '../components/form/TextInput'
import Button from '../components/form/Button'

export default function page() {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    console.log('handleSubscribe clicked...')
    {
      /* TODO: Add email validation */
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 px-8">
      <h1>Thanks for visiting my QR Gen project!</h1>
      <div>
        <h2>
          I'm working on various other projects which you can keep up to date
          with by subscribing to email alerts for when new projects are released
        </h2>
        <Input
          value={email}
          setValue={setEmail}
          label="Email"
          id="Email"
          type="email"
        />
        <Button label="Subscribe" onClick={handleSubscribe} />
      </div>
      <p>
        Take a look at <Link href="https://aidanlowson.com">my Portfolio</Link>{' '}
        to find out about other things I've worked on in the past
      </p>
      <p>
        If you gained value from this site you can always buy me a coffee to
        show support
      </p>
      <BuyMeACoffeeButton />
      <p>This directly supports me and helps cover server costs too.</p>
      <p>
        Or if you want to support via{' '}
        <Link href="https://patreon.com/AidanL94?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink">
          Patreon
        </Link>{' '}
        that would be greatley appreciated
      </p>
      <p>
        You can find me on{' '}
        <Link href="https://boosty.to/aidanl94/donate">Boosty</Link> too
      </p>
      <Footer />
    </main>
  )
}
