import Link from 'next/link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-codes-for-trade-shows-and-conferences'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'How big should a QR code be on a trade show banner?',
    answer:
      'Roughly a tenth of the distance people scan from. For a pull-up banner read from 2 metres, that is about 20 x 20 cm. Put it at chest height, not near the floor.',
  },
  {
    question: 'Can I see how many people scanned my code at the event?',
    answer:
      'Not with a static code, because scans do not pass through a tracking server. Count the results instead: contacts saved, chats started, emails received. A pre-filled subject line makes event leads easy to find.',
  },
  {
    question: 'Will the codes work if the venue has bad signal?',
    answer:
      'Contact card codes work with no signal, because the details are stored in the code. WhatsApp, email and website codes need a connection to finish the job, so offer a contact card as a fallback.',
  },
  {
    question: 'Should every member of the team have their own code?',
    answer:
      'For badges and business cards, yes, so leads reach the person they spoke to. For the stand itself, use one shared code to a team inbox or sales WhatsApp number.',
  },
]

const sections = [
  { id: 'why', label: 'Why QR codes work at events' },
  { id: 'which-code', label: 'Which code for which job' },
  { id: 'where', label: 'Where to put them on your stand' },
  { id: 'steps', label: 'Get your codes ready in 4 steps' },
  { id: 'size', label: 'Size and print tips' },
  { id: 'follow-up', label: 'Following up after the event' },
]

export default function TradeShowQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='At a busy trade show you get a few seconds with each visitor, and business cards get left in hotel rooms. QR codes on your badge, stand and banners let people take your details, start a conversation or ask for a quote before they walk on. This guide covers which code to use where, and how to print them so they scan across a crowded hall.'
      sections={sections}
      faqs={faqs}
      about={[{ name: 'Trade show', sameAs: 'https://en.wikipedia.org/wiki/Trade_show' }]}
      cta={{ href: '/vcard-qr-code-generator', label: 'Create your event QR codes now, free' }}
    >
      <h2 id='why'>Why QR codes work at events</h2>
      <ul>
        <li>
          <strong>No queue for a card.</strong> When your team is busy, visitors can scan the banner
          and go, instead of waiting or leaving.
        </li>
        <li>
          <strong>Leads arrive in your phone, not a fishbowl.</strong> A scan that saves a contact
          or starts a message gives you something to follow up on.
        </li>
        <li>
          <strong>Nothing to install.</strong> Phone cameras read QR codes on their own, so nobody
          needs your event app.
        </li>
      </ul>

      <h2 id='which-code'>Which code for which job</h2>
      <ul>
        <li>
          <strong>Name badge or lanyard:</strong> a{' '}
          <Link href='/vcard-qr-code-generator'>contact card (vCard) QR code</Link> with your name,
          company, number and email. Whoever you meet saves you in one scan, even with no signal.
        </li>
        <li>
          <strong>Stand and banners:</strong> a{' '}
          <Link href='/whatsapp-qr-code-generator'>WhatsApp QR code</Link> with a pre-filled message
          like &quot;Hi, we met at the stand. I&apos;d like to know more about…&quot;. The visitor
          sends it when they&apos;re ready, and you have their number.
        </li>
        <li>
          <strong>Brochures and price lists:</strong> an{' '}
          <Link href='/email-qr-code-generator'>email QR code</Link> to your sales inbox with a
          subject like &quot;Quote request from the show&quot;. Every event lead lands under one
          subject.
        </li>
        <li>
          <strong>Product displays:</strong> a <Link href='/'>link QR code</Link> to the product
          page, data sheet or demo video.
        </li>
      </ul>

      <h2 id='where'>Where to put them on your stand</h2>
      <ul>
        <li>
          <strong>Chest height on the main banner</strong>, where people standing in the aisle can
          scan without walking up to it.
        </li>
        <li>
          <strong>On the front of the counter</strong>, for people waiting to talk to someone.
        </li>
        <li>
          <strong>On every handout</strong>, so the brochure someone finds in their bag next week
          still leads back to you.
        </li>
        <li>
          <strong>On a screen or tablet</strong> that shows a large code between demos.
        </li>
      </ul>

      <h2 id='steps'>Get your codes ready in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          <strong>Decide what each code should do:</strong> save a contact, start a chat, send an
          enquiry or open a page. One action per code.
        </li>
        <li>
          <strong>Make each one</strong> with the matching generator. Your colours and logo carry
          over when you switch between QR types, so the set matches.
        </li>
        <li>
          <strong>Download SVGs</strong> for banners and printed materials, and PNGs for screens and
          slides.
        </li>
        <li>
          <strong>Print a test at full size</strong> and scan it from where visitors will stand,
          under bright lights, before you send the banner to the printer.
        </li>
      </ol>

      <h2 id='size'>Size and print tips</h2>
      <ul>
        <li>
          <strong>Use the one-in-ten rule.</strong> Make the code about a tenth of the scanning
          distance: 20 cm wide to scan from 2 metres, 30 cm from 3 metres.
        </li>
        <li>
          <strong>Dark code, light background.</strong> Brand colours are fine if they are dark
          enough to contrast with the background.
        </li>
        <li>
          <strong>Matt materials.</strong> Glossy banners catch the hall lighting and hide parts of
          the code.
        </li>
        <li>
          <strong>Say what happens.</strong> &quot;Scan to WhatsApp our team&quot; gets more scans
          than a code on its own.
        </li>
      </ul>

      <h2 id='follow-up'>Following up after the event</h2>
      <p>
        Static QR codes don&apos;t count scans, so measure results in your inbox and chats instead.
        A pre-filled subject or message makes event leads easy to filter. Reply within a day or two
        while the conversation is fresh.
      </p>
      <p>
        For the cards you hand out, see{' '}
        <Link href='/qr-code-for-business-cards'>how to put a QR code on your business card</Link>.
      </p>
    </GuidePage>
  )
}
