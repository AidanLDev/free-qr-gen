import Link from '@/app/components/Link'
import React from 'react'
import { IFaq, IStep } from '../types'

const homeSteps: IStep[] = [
  { title: 'Paste your link', body: 'Enter the web address you want your QR code to open.' },
  {
    title: 'Make it yours',
    body: 'Pick your colours, add a logo and choose an error correction level.',
  },
  { title: 'Download', body: 'Save it as a PNG or SVG at any size, ready to share or print.' },
]

export const homeFaqs: IFaq[] = [
  {
    question: 'Is this QR code generator really free?',
    answer:
      'Yes. There is no sign-up, no watermark and no limit on how many QR codes you can create or download.',
  },
  {
    question: 'Do the QR codes expire?',
    answer: (
      <>
        No. Your link is encoded directly into the QR code rather than sent through a redirect
        service, so it keeps working for as long as the page it points to exists. If a code from
        another site has stopped working, read{' '}
        <Link href='/why-did-my-qr-code-stop-working'>why QR codes stop working</Link>.
      </>
    ),
    text: 'No. Your link is encoded directly into the QR code rather than sent through a redirect service, so it keeps working for as long as the page it points to exists.',
  },
  {
    question: 'What kinds of QR code can I make?',
    answer: (
      <>
        As well as links, you can make QR codes that{' '}
        <Link href='/wifi-qr-code-generator'>join a WiFi network</Link>,{' '}
        <Link href='/vcard-qr-code-generator'>save a contact</Link>,{' '}
        <Link href='/email-qr-code-generator'>send an email</Link>,{' '}
        <Link href='/sms-qr-code-generator'>send a text</Link>,{' '}
        <Link href='/phone-number-qr-code-generator'>call a number</Link>,{' '}
        <Link href='/whatsapp-qr-code-generator'>start a WhatsApp chat</Link>,{' '}
        <Link href='/text-qr-code-generator'>show some text</Link> or{' '}
        <Link href='/location-qr-code-generator'>open a location in Google Maps</Link>. Pick a type
        above the form.
      </>
    ),
    text: 'As well as links, you can make QR codes that join a WiFi network, save a contact, send an email, send a text, call a number, start a WhatsApp chat, show some text or open a location in Google Maps.',
  },
  {
    question: 'Can I add my logo to a QR code?',
    answer:
      'Yes. Upload a PNG, JPG or SVG and it is placed in the centre of the code. Use the Quartile or High error correction level so the code still scans with part of it covered, and test it with your phone before printing.',
  },
  {
    question: 'Should I download a PNG or an SVG?',
    answer:
      'PNG works almost everywhere, from websites and social posts to documents. SVG is a vector format that stays sharp at any size, which makes it the better choice for print, posters and signage.',
  },
  {
    question: 'Can I make a QR code for my restaurant menu?',
    answer: (
      <>
        Yes. Put your menu online, paste the link above, then add your logo and brand colours. Our
        guide on{' '}
        <Link href='/qr-code-for-restaurant-menu'>
          how to make a QR code for your restaurant menu
        </Link>{' '}
        covers each step, from choosing a link to printing codes for your tables.
      </>
    ),
    text: 'Yes. Put your menu online, paste the link above, then add your logo and brand colours. Our guide on how to make a QR code for your restaurant menu covers each step, from choosing a link to printing codes for your tables.',
  },
  {
    question: 'Can I track how many people scan my QR code?',
    answer:
      'No. Because the codes are static and do not go through a tracking server, scans are not counted. The upside is that nobody sits between your visitors and your link.',
  },
  {
    question: 'What is a QR code and who invented it?',
    answer: (
      <>
        A QR code is a two-dimensional barcode invented in 1994 by Masahiro Hara at Denso Wave. Read
        the full story in <Link href='/what-is-a-qr-code'>What is a QR code?</Link>
      </>
    ),
    text: 'A QR code is a two-dimensional barcode invented in 1994 by Masahiro Hara at Denso Wave.',
  },
]

export default function HomeInfo({
  heading = 'How to create a free QR code',
  steps = homeSteps,
  faqs = homeFaqs,
  children,
}: {
  heading?: string
  steps?: IStep[]
  faqs?: IFaq[]
  // Extra sections between the steps and the FAQs
  children?: React.ReactNode
}) {
  return (
    <section
      aria-labelledby='how-it-works-heading'
      className='prose-page mx-auto w-full max-w-5xl pb-16 sm:pb-24'
    >
      <h2 id='how-it-works-heading' className='!mt-0'>
        {heading}
      </h2>
      <ol className='mb-12 grid gap-4 sm:grid-cols-3'>
        {steps.map(({ title, body }, i) => (
          <li key={title} className='card'>
            <span className='section-title'>Step {i + 1}</span>
            <h3 className='!mt-2 !text-base'>{title}</h3>
            <p className='!mb-0 text-sm text-neutral-400'>{body}</p>
          </li>
        ))}
      </ol>

      {children}

      <h2>Frequently asked questions</h2>
      <div className='divide-y divide-neutral-800 border-y border-neutral-800'>
        {faqs.map(({ question, answer }) => (
          <details key={question} className='group py-4'>
            <summary className='flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white [&::-webkit-details-marker]:hidden'>
              <h3 className='!m-0 !text-base !font-medium'>{question}</h3>
              <span
                aria-hidden
                className='text-xl leading-none text-primary transition-transform group-open:rotate-45'
              >
                +
              </span>
            </summary>
            <p className='!mb-0 mt-3 text-neutral-400'>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
