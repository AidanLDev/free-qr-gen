import React from 'react'

import Link from 'next/link'
import BuyMeACoffeeButton from '../components/BuyMeACoffeeButton/BuyMeACoffeeButton'

export default function page() {
  return (
    <div>
      <h1>Thanks for visiting my QR Gen project!</h1>
      <h2>
        I'm working on various other projects which you can keep up to date with
        by subscribing to email alerts for when new projects are released
      </h2>
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
    </div>
  )
}
