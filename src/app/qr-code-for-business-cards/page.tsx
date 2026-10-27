import Link from '@/app/components/Link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-code-for-business-cards'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'What should a QR code on a business card link to?',
    answer:
      'For most people, a contact card (vCard) that saves your details straight into the phone. If your work is visual, like design or photography, a link to your portfolio can be the better choice.',
  },
  {
    question: 'How big should a QR code be on a business card?',
    answer:
      'At least 2 x 2 cm for a contact code, with a clear margin around it. A link code can go a little smaller, but 2 cm is a safe minimum for both.',
  },
  {
    question: 'Can I update my details after the cards are printed?',
    answer:
      'Not with a contact code, because your details are stored in the code itself. If you expect them to change, point the code at a web page you control and update that page instead.',
  },
  {
    question: 'Does a business card QR code work on iPhone and Android?',
    answer:
      'Yes. Both read QR codes from the built-in camera and offer to save the contact, with no app needed.',
  },
  {
    question: 'Will the QR code stop working after a while?',
    answer:
      'No. Codes made with Free QR Gen are static, so there is no subscription to run out. Your contact code works for as long as the details in it are correct.',
  },
]

const sections = [
  { id: 'why', label: 'Why add a QR code to your business card' },
  { id: 'which-code', label: 'Contact card or link?' },
  { id: 'what-to-include', label: 'What to include' },
  { id: 'steps', label: 'Make your business card QR code in 4 steps' },
  { id: 'design', label: 'Design tips for the card' },
  { id: 'mistakes', label: 'Mistakes to avoid' },
]

export default function BusinessCardQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='A business card does its job when someone actually saves your details. Most cards end up in a drawer before that happens. A QR code on the card lets people add you to their phone contacts in one scan, while you are still talking. This guide covers what to put in the code, how big to print it and how to fit it into your design.'
      sections={sections}
      faqs={faqs}
      about={[{ name: 'Business card', sameAs: 'https://en.wikipedia.org/wiki/Business_card' }]}
      cta={{ href: '/vcard-qr-code-generator', label: 'Create your contact QR code now, free' }}
    >
      <h2 id='why'>Why add a QR code to your business card</h2>
      <ul>
        <li>
          <strong>Your details get saved, not filed.</strong> One scan and a tap on Add contact puts
          your name, number and email into their phone, spelt correctly.
        </li>
        <li>
          <strong>It works on the spot.</strong> People can scan the card during the conversation
          and hand it back, which is handy at events where cards get lost.
        </li>
        <li>
          <strong>You can share more than fits on the card.</strong> A portfolio, booking page or
          LinkedIn profile is one scan away, without crowding the design.
        </li>
      </ul>

      <h2 id='which-code'>Contact card or link?</h2>
      <p>There are two good options, and the right one depends on what you want people to do.</p>
      <ul>
        <li>
          <strong>A contact card (vCard)</strong> stores your details in the code itself. Scanning
          it offers to save you as a contact. It needs no website and works with no signal. Make one
          with the <Link href='/vcard-qr-code-generator'>free vCard QR code generator</Link>.
        </li>
        <li>
          <strong>A link</strong> opens a web page, such as your portfolio, booking page or online
          profile. It can show far more, and you can update the page at any time without reprinting.
          Make one with the <Link href='/'>free URL QR code generator</Link>.
        </li>
      </ul>
      <p>
        If you&apos;re not sure, choose the contact card. It does the one thing a business card is
        for, and it never breaks because a website went down.
      </p>

      <h2 id='what-to-include'>What to include</h2>
      <p>
        Every field you add makes the code denser, and denser codes are harder to scan at business
        card size. Stick to what people need to reach you:
      </p>
      <ul>
        <li>
          <strong>Name, company and job title</strong>, so they remember who you are when they
          scroll their contacts later.
        </li>
        <li>
          <strong>One phone number</strong> with the country code, like +44 7700 900123, so it works
          for international contacts.
        </li>
        <li>
          <strong>One email address and your website.</strong>
        </li>
        <li>
          <strong>Leave out the address</strong> unless people visit you in person. It adds a lot of
          data for little benefit.
        </li>
      </ul>

      <h2 id='steps'>Make your business card QR code in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          Open the <Link href='/vcard-qr-code-generator'>vCard QR code generator</Link> and fill in
          the fields you want to share.
        </li>
        <li>
          <strong>Match your brand.</strong> Set the code colour to your brand colour, as long as it
          is dark, and keep the background light. Add your logo if you like, with error correction
          set to Quartile or High.
        </li>
        <li>
          <strong>Download an SVG.</strong> It stays sharp at any size, which is what printers want.
          Use a PNG if you are designing the card in a tool that doesn&apos;t accept SVG.
        </li>
        <li>
          <strong>Print one proof and scan it</strong> with an iPhone and an Android phone. Check
          every field lands in the right place before you order a full batch.
        </li>
      </ol>
      <p>Your details are turned into a code in your browser and are never sent to our servers.</p>

      <h2 id='design'>Design tips for the card</h2>
      <ul>
        <li>
          <strong>Give it at least 2 x 2 cm.</strong> A standard UK card is 85 x 55 mm, so the code
          fits comfortably on the back, or in a corner of the front.
        </li>
        <li>
          <strong>Leave a quiet border.</strong> Keep a margin of plain background around the code,
          about the width of four of its small squares. Text or patterns right up against it stop it
          scanning.
        </li>
        <li>
          <strong>Add a short label</strong> like &quot;Scan to save my contact&quot;, so people
          know what the code does before they scan it.
        </li>
        <li>
          <strong>Choose a matt finish.</strong> Gloss and foil reflect light and can hide parts of
          the code from the camera.
        </li>
      </ul>

      <h2 id='mistakes'>Mistakes to avoid</h2>
      <ul>
        <li>
          <strong>Using a code from a free trial.</strong> Many QR sites make codes that go through
          their own redirect link, which stops working when the trial ends. Read{' '}
          <Link href='/why-did-my-qr-code-stop-working'>why QR codes stop working</Link> before you
          print 500 cards.
        </li>
        <li>
          <strong>Light code on a dark card.</strong> Some phones can&apos;t read inverted codes.
          Keep the code dark on a light panel, even on a dark card.
        </li>
        <li>
          <strong>Printing it too small</strong> to make room for a logo. If space is tight, drop a
          field from the code rather than shrinking it.
        </li>
      </ul>
      <p>
        Handing out cards at an event? See our guide to{' '}
        <Link href='/qr-codes-for-trade-shows-and-conferences'>
          QR codes for trade shows and conferences
        </Link>
        .
      </p>
    </GuidePage>
  )
}
