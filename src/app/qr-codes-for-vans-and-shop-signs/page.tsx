import Link from '@/app/components/Link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-codes-for-vans-and-shop-signs'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'How big should a QR code be on a van?',
    answer:
      'About a tenth of the distance people scan from. To scan from 3 metres away on the pavement, make it at least 30 x 30 cm. On the back doors, where people scan from close up while the van is parked, 20 x 20 cm is enough.',
  },
  {
    question: 'Can people scan a QR code on a moving van?',
    answer:
      'Not easily, and drivers should never try. Van codes work when the van is parked outside a job or on the drive, which is when most people notice it.',
  },
  {
    question: 'Which is better on a van: phone, WhatsApp or website?',
    answer:
      'A phone or WhatsApp code if you want enquiries straight away. A website code if you want people to see your reviews and past work first. If you only have room for one, choose the one you answer fastest.',
  },
  {
    question: 'Will vinyl or a shiny sign stop the code scanning?',
    answer:
      'Gloss can reflect sunlight and hide parts of the code. Ask your sign maker for a matt laminate over the code, and make sure it is not cut across panel gaps or door handles.',
  },
  {
    question: 'Does the code expire if I change my number?',
    answer:
      'The code never expires, but it will keep calling the old number. If your number changes, make a new code and replace the sticker.',
  },
]

const sections = [
  { id: 'why', label: 'Why put a QR code on your van or sign' },
  { id: 'which-code', label: 'Which code to choose' },
  { id: 'size', label: 'How big to make it' },
  { id: 'placement', label: 'Where to put it' },
  { id: 'steps', label: 'Get it on your van in 4 steps' },
]

export default function VanSignQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='Your van sits outside customers’ houses all day, and your shop sign is seen by everyone walking past. Most people who notice it won’t remember your number by the time they get home. A QR code turns that moment into a call, a message or a saved contact. Here is how to choose the right code and size it so it scans from the street.'
      sections={sections}
      faqs={faqs}
      about={[
        { name: 'Vehicle vinyl wrap', sameAs: 'https://en.wikipedia.org/wiki/Vehicle_vinyl_wrap' },
      ]}
      cta={{ href: '/phone-number-qr-code-generator', label: 'Create your van QR code now, free' }}
    >
      <h2 id='why'>Why put a QR code on your van or sign</h2>
      <ul>
        <li>
          <strong>Neighbours are your best leads.</strong> People on the street where you&apos;re
          working often need the same job done.
        </li>
        <li>
          <strong>Nobody has to remember anything.</strong> A scan is quicker than writing down a
          number, and the number is always right.
        </li>
        <li>
          <strong>It works when you&apos;re busy.</strong> A WhatsApp or text code collects
          enquiries while you&apos;re under a sink.
        </li>
      </ul>

      <h2 id='which-code'>Which code to choose</h2>
      <ul>
        <li>
          <strong>Call:</strong> a{' '}
          <Link href='/phone-number-qr-code-generator'>phone number QR code</Link> rings you in one
          tap. Best for urgent work like locksmiths, plumbers and breakdown services.
        </li>
        <li>
          <strong>Message:</strong> a{' '}
          <Link href='/whatsapp-qr-code-generator'>WhatsApp QR code</Link> with &quot;Hi, I saw your
          van. Could I get a quote for…&quot;. Customers can send photos of the job, and you reply
          when you can.
        </li>
        <li>
          <strong>Save contact:</strong> a{' '}
          <Link href='/vcard-qr-code-generator'>contact card QR code</Link> for people who
          don&apos;t need you today but will next month.
        </li>
        <li>
          <strong>Website:</strong> a <Link href='/'>link QR code</Link> to your reviews or gallery,
          for bigger jobs where customers want to see your work first.
        </li>
      </ul>
      <p>
        Choose one main code. Two codes side by side on a van are hard to tell apart from a
        distance.
      </p>

      <h2 id='size'>How big to make it</h2>
      <p>
        The rule of thumb is that a code should be about a tenth of the distance it is scanned from:
      </p>
      <ul>
        <li>
          <strong>Back doors, scanned from 1 to 2 metres:</strong> 15 to 20 cm square.
        </li>
        <li>
          <strong>Van sides, scanned from the pavement at 3 metres:</strong> 30 cm square or more.
        </li>
        <li>
          <strong>Shop fascia, scanned from across the road:</strong> at 10 metres the rule calls
          for a code a metre wide, so put a smaller code at eye level in the window instead.
        </li>
      </ul>

      <h2 id='placement'>Where to put it</h2>
      <ul>
        <li>
          <strong>On a flat panel</strong>, away from door handles, panel gaps, wheel arches and
          windows.
        </li>
        <li>
          <strong>At about eye level</strong>, so people don&apos;t have to crouch or stretch.
        </li>
        <li>
          <strong>On a plain light background.</strong> Don&apos;t lay the code over a photo or
          pattern on the wrap.
        </li>
        <li>
          <strong>With a short label</strong> like &quot;Scan for a quote&quot; or &quot;Scan to
          call&quot;.
        </li>
        <li>
          <strong>Shop windows:</strong> on the inside of the glass, at eye level, away from where
          the sun reflects. Make sure it still reads when the lights are on inside.
        </li>
      </ul>

      <h2 id='steps'>Get it on your van in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          <strong>Make the code</strong> with your number or link. Include the country code for
          phone and WhatsApp codes.
        </li>
        <li>
          <strong>Set your brand colour</strong> if it is dark, and keep the background white. Skip
          the logo if your logo is already on the van.
        </li>
        <li>
          <strong>Download an SVG</strong> and send it to your sign maker. It prints sharp at any
          size, which a PNG may not.
        </li>
        <li>
          <strong>Test it on the van.</strong> Stick on a paper print first, step back to the
          pavement and scan it with two different phones.
        </li>
      </ol>
      <p>
        Want texts instead of calls? Read{' '}
        <Link href='/qr-code-for-appointment-requests'>
          how to let customers text to book with a QR code
        </Link>
        .
      </p>
    </GuidePage>
  )
}
