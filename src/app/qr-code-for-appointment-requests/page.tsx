import Link from '@/app/components/Link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-code-for-appointment-requests'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'Does a text-to-book QR code confirm the appointment?',
    answer:
      'No. It sends you a request by text. You reply to confirm a time, the same as any booking by message. If you want automatic booking, link a QR code to an online booking page instead.',
  },
  {
    question: 'Can customers edit the message before sending?',
    answer:
      'Yes. The pre-filled message is a starting point. They can add the day, time or details before they press send.',
  },
  {
    question: 'Should I use SMS or WhatsApp for bookings?',
    answer:
      'SMS works on every phone with no app. WhatsApp is better if customers want to send photos, like a leaking tap or a damaged bumper. You can offer both.',
  },
  {
    question: 'Is it OK to use for medical or health bookings?',
    answer:
      'For appointment requests, yes, but ask customers not to include medical details in the text. Ordinary text messages are not a secure channel for health information.',
  },
]

const sections = [
  { id: 'why', label: 'Why let customers text to book' },
  { id: 'who', label: 'Who it works for' },
  { id: 'wording', label: 'How to word the message' },
  { id: 'steps', label: 'Make a text-to-book QR code in 4 steps' },
  { id: 'where', label: 'Where to put it' },
  { id: 'replies', label: 'Handling the requests' },
]

export default function AppointmentRequestQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='When you’re with a customer or a client, you can’t always pick up the phone. Missed calls turn into lost jobs. A text-to-book QR code lets customers send you a booking request in one scan, with the message already started, so you can reply when you have a minute. This guide shows how to set one up and word it so you get the details you need.'
      sections={sections}
      faqs={faqs}
      about={[{ name: 'Appointment', sameAs: 'https://en.wikipedia.org/wiki/Appointment' }]}
      cta={{ href: '/sms-qr-code-generator', label: 'Create your text-to-book QR code now, free' }}
    >
      <h2 id='why'>Why let customers text to book</h2>
      <ul>
        <li>
          <strong>No missed calls.</strong> A text waits for you. You can reply between jobs instead
          of calling back and playing phone tag.
        </li>
        <li>
          <strong>Better details.</strong> A pre-filled message prompts customers for what you need,
          like the job, the postcode and a good time.
        </li>
        <li>
          <strong>A written record.</strong> The booking, the time and the address are all in one
          thread.
        </li>
      </ul>

      <h2 id='who'>Who it works for</h2>
      <ul>
        <li>
          <strong>Tradespeople:</strong> plumbers, electricians, cleaners, gardeners and mechanics.
        </li>
        <li>
          <strong>Clinics and therapists:</strong> physios, dentists, osteopaths and massage
          therapists taking new-patient enquiries.
        </li>
        <li>
          <strong>Studios and tutors:</strong> driving instructors, music teachers, personal
          trainers and photographers.
        </li>
        <li>
          <strong>Mobile services:</strong> dog groomers, hairdressers and car valeters who are
          never at a desk.
        </li>
      </ul>

      <h2 id='wording'>How to word the message</h2>
      <p>
        Pre-fill the start of the message and leave gaps for the customer to fill in. A few
        examples:
      </p>
      <ul>
        <li>&quot;Hi, I&apos;d like to book a boiler service. My postcode is: &quot;</li>
        <li>
          &quot;Hi, I&apos;m a new patient and would like an appointment. Best days for me: &quot;
        </li>
        <li>&quot;Hi, I&apos;d like to book a trial lesson. I&apos;m free on: &quot;</li>
      </ul>
      <p>Keep it to one or two lines. Long messages make the code denser and feel like a form.</p>

      <h2 id='steps'>Make a text-to-book QR code in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          Open the <Link href='/sms-qr-code-generator'>SMS QR code generator</Link>.
        </li>
        <li>
          <strong>Enter your business mobile with the country code</strong>, like +44 7700 900123,
          and your pre-filled message.
        </li>
        <li>
          <strong>Add your colours and logo</strong>, keeping the code dark on a light background.
        </li>
        <li>
          <strong>Download and test</strong> from another phone to check the text arrives with the
          right message.
        </li>
      </ol>
      <p>
        If you&apos;d rather take bookings on WhatsApp, the{' '}
        <Link href='/whatsapp-qr-code-generator'>WhatsApp QR code generator</Link> works the same
        way.
      </p>

      <h2 id='where'>Where to put it</h2>
      <ul>
        <li>
          <strong>Your van, shop window or door.</strong> See{' '}
          <Link href='/qr-codes-for-vans-and-shop-signs'>QR codes for vans and shop signs</Link>.
        </li>
        <li>
          <strong>Flyers, leaflets and local adverts.</strong>
        </li>
        <li>
          <strong>Invoices and receipts</strong>, with a message like &quot;Hi, I&apos;d like to
          book my next service&quot; for repeat work.
        </li>
        <li>
          <strong>Appointment cards and stickers</strong> left on the boiler, the car or the fridge.
        </li>
      </ul>

      <h2 id='replies'>Handling the requests</h2>
      <ul>
        <li>
          <strong>Reply the same day</strong>, even if it&apos;s only to say when you&apos;ll get
          back to them.
        </li>
        <li>
          <strong>Save a few quick replies</strong> on your phone for common answers, like your next
          free dates or prices.
        </li>
        <li>
          <strong>Offer a call option too.</strong> Some customers want to talk. A{' '}
          <Link href='/phone-number-qr-code-generator'>phone number QR code</Link> next to the text
          code covers them.
        </li>
      </ul>
    </GuidePage>
  )
}
