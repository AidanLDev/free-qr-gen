import Link from 'next/link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-codes-for-holiday-lets'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'Which QR codes should every holiday let have?',
    answer:
      'WiFi, a way to contact the host, and directions to the property. Those three answer most of the questions guests message about.',
  },
  {
    question: 'Should I put the key safe code in a QR code?',
    answer:
      'Not on anything left in public view or outside the property. Send the key safe code privately in the booking messages, and use a location code to show guests where the key safe is.',
  },
  {
    question: 'What happens when I change the WiFi password?',
    answer:
      'The old WiFi code stops working, because the password is stored in it. Print a new one each time you change the password, for example after a long-stay guest leaves.',
  },
  {
    question: 'Can I send the QR codes before guests arrive?',
    answer:
      'Yes. Save the codes as PNGs and add them to your welcome email or digital guidebook. Guests can scan them from a laptop screen or a printout.',
  },
]

const sections = [
  { id: 'why', label: 'Why hosts use QR codes' },
  { id: 'ideas', label: '6 QR codes for your welcome book' },
  { id: 'steps', label: 'Make your set in 4 steps' },
  { id: 'where', label: 'Where to put each one' },
  { id: 'safety', label: 'Keep guests and your property safe' },
]

export default function HolidayLetQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='Every host knows the questions: what is the WiFi password, where do we park, which bin is recycling? A handful of QR codes in your welcome book and around the property answers them before guests reach for their phone to message you. This guide covers the codes that save hosts the most time and where to put them.'
      sections={sections}
      faqs={faqs}
      about={[{ name: 'Vacation rental', sameAs: 'https://en.wikipedia.org/wiki/Vacation_rental' }]}
      cta={{ href: '/wifi-qr-code-generator', label: 'Create your holiday let QR codes now, free' }}
    >
      <h2 id='why'>Why hosts use QR codes</h2>
      <ul>
        <li>
          <strong>Fewer messages.</strong> Guests find the answer themselves, at midnight, without
          waiting for you.
        </li>
        <li>
          <strong>A better first hour.</strong> Online in one scan and parked in the right place
          means guests start their stay happy, which shows in reviews.
        </li>
        <li>
          <strong>Works for international guests.</strong> A WiFi code or a map pin needs no
          translation.
        </li>
      </ul>

      <h2 id='ideas'>6 QR codes for your welcome book</h2>
      <ul>
        <li>
          <strong>Join the WiFi.</strong> A <Link href='/wifi-qr-code-generator'>WiFi QR code</Link>{' '}
          connects guests in one scan. Our guide to{' '}
          <Link href='/how-to-share-wifi-with-a-qr-code'>sharing WiFi with a QR code</Link> covers
          signs and security.
        </li>
        <li>
          <strong>Find the door and the parking.</strong> A{' '}
          <Link href='/location-qr-code-generator'>location QR code</Link> with exact coordinates,
          sent before arrival, gets guests to the right gate, not the postcode&apos;s best guess.
        </li>
        <li>
          <strong>Message the host.</strong> A{' '}
          <Link href='/whatsapp-qr-code-generator'>WhatsApp QR code</Link> with &quot;Hi, we&apos;re
          staying at Harbour Cottage and have a question:&quot; tells you who&apos;s messaging.
        </li>
        <li>
          <strong>House rules and check-out steps.</strong> A{' '}
          <Link href='/text-qr-code-generator'>text QR code</Link> with bin day, check-out time and
          what to do with the keys. It shows with no WiFi, and guests can screenshot it.
        </li>
        <li>
          <strong>Local guide.</strong> A <Link href='/'>link QR code</Link> to your favourite pubs,
          beaches and walks on a Google Maps list or your own website.
        </li>
        <li>
          <strong>Feedback.</strong> An <Link href='/email-qr-code-generator'>email QR code</Link>{' '}
          so guests can tell you privately about the wobbly shower head before it ends up in a
          review. See{' '}
          <Link href='/qr-code-for-customer-feedback'>getting feedback with a QR code</Link>.
        </li>
      </ul>

      <h2 id='steps'>Make your set in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          <strong>Start with the WiFi code</strong> and set your colours and logo, if you have one.
        </li>
        <li>
          <strong>Switch QR type for each other code.</strong> Your style carries over, so the set
          matches your welcome book.
        </li>
        <li>
          <strong>Download PNGs</strong> for your welcome book and booking messages, and SVGs for
          anything you send to a printer.
        </li>
        <li>
          <strong>Scan every code from the printed page</strong>, inside the property, with your own
          phone before guests arrive.
        </li>
      </ol>

      <h2 id='where'>Where to put each one</h2>
      <ul>
        <li>
          <strong>Welcome book, first page:</strong> WiFi, host contact and house rules.
        </li>
        <li>
          <strong>Booking confirmation or pre-arrival message:</strong> directions and parking.
        </li>
        <li>
          <strong>Fridge or kitchen cupboard:</strong> WiFi and bin day.
        </li>
        <li>
          <strong>By the front door:</strong> check-out steps and the local guide.
        </li>
      </ul>

      <h2 id='safety'>Keep guests and your property safe</h2>
      <ul>
        <li>
          <strong>Share a guest WiFi network</strong>, not the one your smart lock or cameras use,
          if your router supports it.
        </li>
        <li>
          <strong>Never put the key safe or door code in a QR code</strong> on anything visible from
          outside. Send it privately in your booking messages.
        </li>
        <li>
          <strong>Use a host number you&apos;re happy to share.</strong> Every guest who scans the
          WhatsApp code sees it.
        </li>
        <li>
          <strong>Reprint codes when details change</strong>, like the WiFi password or your number.
          Codes can&apos;t be edited once printed.
        </li>
      </ul>
    </GuidePage>
  )
}
