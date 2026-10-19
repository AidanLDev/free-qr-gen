import Link from 'next/link'
import React from 'react'

const steps = [
  { title: 'Paste your link', body: 'Enter the web address you want your QR code to open.' },
  {
    title: 'Make it yours',
    body: 'Pick your colours, add a logo and choose an error correction level.',
  },
  { title: 'Download', body: 'Save it as a PNG or SVG at any size, ready to share or print.' },
]

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'Is this QR code generator really free?',
    answer:
      'Yes. There is no sign-up, no watermark and no limit on how many QR codes you can create or download.',
  },
  {
    question: 'Do the QR codes expire?',
    answer:
      'No. Your link is encoded directly into the QR code rather than sent through a redirect service, so it keeps working for as long as the page it points to exists.',
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
  },
]

export default function HomeInfo() {
  return (
    <section
      aria-labelledby='how-it-works-heading'
      className='prose-page mx-auto w-full max-w-5xl pb-16 sm:pb-24'
    >
      <h2 id='how-it-works-heading' className='!mt-0'>
        How to create a free QR code
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
