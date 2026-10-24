import Link from 'next/link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/whatsapp-qr-code-for-business'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'Do I need WhatsApp Business for a WhatsApp QR code?',
    answer:
      'No. The code works with personal and WhatsApp Business numbers. WhatsApp Business adds handy extras like away messages, quick replies and a business profile.',
  },
  {
    question: 'Can I have different codes for different products?',
    answer:
      'Yes. Make one code per product or service, each with its own pre-filled message. They all go to the same number, but you can see at a glance what each customer is asking about.',
  },
  {
    question: 'What happens if a customer does not have WhatsApp?',
    answer:
      'The code opens a wa.me link, which shows a WhatsApp page offering to install the app or continue on the web. If many of your customers do not use WhatsApp, offer a phone or SMS code too.',
  },
  {
    question: 'Will my WhatsApp QR code expire?',
    answer:
      'No. The number and message are stored in the code itself, so it works for as long as you keep that number.',
  },
  {
    question: 'Does the customer see my number?',
    answer:
      'Yes. Opening a chat always shows the number it is with, so use a business number rather than your personal one if that matters to you.',
  },
]

const sections = [
  { id: 'why', label: 'Why customers like WhatsApp' },
  { id: 'ideas', label: 'Ways to use a WhatsApp QR code' },
  { id: 'messages', label: 'Pre-filled messages that work' },
  { id: 'steps', label: 'Make your WhatsApp QR code in 4 steps' },
  { id: 'where', label: 'Where to put it' },
  { id: 'alternatives', label: 'When SMS or a call works better' },
]

export default function WhatsAppBusinessQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='For many small businesses, WhatsApp is already where the orders, bookings and questions come in. A WhatsApp QR code makes that one scan away: the customer points their camera at it and a chat with you opens, with a message ready to send. This guide covers the best uses, how to word the message and where to put the code.'
      sections={sections}
      faqs={faqs}
      about={[{ name: 'WhatsApp', sameAs: 'https://en.wikipedia.org/wiki/WhatsApp' }]}
      cta={{ href: '/whatsapp-qr-code-generator', label: 'Create your WhatsApp QR code now, free' }}
    >
      <h2 id='why'>Why customers like WhatsApp</h2>
      <ul>
        <li>
          <strong>No phone call needed.</strong> Plenty of people would rather message than call,
          especially for a quick question or a booking.
        </li>
        <li>
          <strong>They don&apos;t have to save your number.</strong> The code opens the chat
          straight away.
        </li>
        <li>
          <strong>Photos and voice notes.</strong> A customer can send a picture of the broken
          boiler or the hairstyle they want, which saves a lot of back and forth.
        </li>
      </ul>

      <h2 id='ideas'>Ways to use a WhatsApp QR code</h2>
      <ul>
        <li>
          <strong>Takeaway and click-and-collect orders:</strong> a code on the menu or window that
          starts &quot;Hi, I&apos;d like to order…&quot;.
        </li>
        <li>
          <strong>Bookings:</strong> salons, tutors, dog walkers and personal trainers can take
          appointment requests by chat. See our guide for{' '}
          <Link href='/qr-codes-for-salons-and-beauty-businesses'>
            salons and beauty businesses
          </Link>
          .
        </li>
        <li>
          <strong>Quotes:</strong> tradespeople can put a code on the van and invoices that starts
          &quot;Hi, I&apos;d like a quote for…&quot;.
        </li>
        <li>
          <strong>After-sales support:</strong> a code on packaging or receipts so customers reach a
          person, not a contact form.
        </li>
        <li>
          <strong>Reorders:</strong> a code on the product itself, for things customers buy again
          like coffee beans, pet food or printer ink.
        </li>
      </ul>

      <h2 id='messages'>Pre-filled messages that work</h2>
      <p>
        The pre-filled message appears in the chat box, ready to send. It tells the customer what to
        say and tells you where they found you. Keep it short and leave room for them to finish:
      </p>
      <ul>
        <li>&quot;Hi, I&apos;d like to book an appointment for…&quot;</li>
        <li>&quot;Hi, I saw your van. Could I get a quote for…&quot;</li>
        <li>&quot;Hi, I&apos;d like to order: &quot;</li>
        <li>&quot;Hi, I have a question about my order number: &quot;</li>
      </ul>
      <p>
        Use a slightly different message for each place you put a code (&quot;I saw your
        flyer&quot;, &quot;I saw your van&quot;) and you&apos;ll know which ones bring in work.
      </p>

      <h2 id='steps'>Make your WhatsApp QR code in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          Open the <Link href='/whatsapp-qr-code-generator'>WhatsApp QR code generator</Link>.
        </li>
        <li>
          <strong>Enter your number with the country code</strong> and without the leading 0. A UK
          mobile 07700 900123 becomes +44 7700 900123.
        </li>
        <li>
          <strong>Add your pre-filled message</strong>, then your brand colours and logo.
        </li>
        <li>
          <strong>Download and test.</strong> Scan the code from another phone and check the chat
          opens with the right number and message.
        </li>
      </ol>

      <h2 id='where'>Where to put it</h2>
      <ul>
        <li>
          <strong>Shop windows and doors</strong>, for people walking past when you&apos;re closed.
        </li>
        <li>
          <strong>Vans and signs.</strong> See{' '}
          <Link href='/qr-codes-for-vans-and-shop-signs'>QR codes for vans and shop signs</Link> for
          sizes that scan from the street.
        </li>
        <li>
          <strong>Receipts, packaging and business cards</strong>, for repeat orders and support.
        </li>
        <li>
          <strong>Social posts and email signatures.</strong> On a screen a wa.me link works too,
          but a code lets desktop users jump to their phone.
        </li>
      </ul>

      <h2 id='alternatives'>When SMS or a call works better</h2>
      <p>WhatsApp isn&apos;t everyone&apos;s first choice. Think about your customers:</p>
      <ul>
        <li>
          <strong>Older customers or urgent jobs:</strong> a{' '}
          <Link href='/phone-number-qr-code-generator'>phone number QR code</Link> that calls you
          straight away.
        </li>
        <li>
          <strong>Customers without WhatsApp:</strong> an{' '}
          <Link href='/sms-qr-code-generator'>SMS QR code</Link> works on every phone, using the
          built-in messages app.
        </li>
      </ul>
      <p>
        Two small codes with a gap between them, labelled &quot;WhatsApp&quot; and &quot;Call&quot;,
        cover everyone.
      </p>
    </GuidePage>
  )
}
