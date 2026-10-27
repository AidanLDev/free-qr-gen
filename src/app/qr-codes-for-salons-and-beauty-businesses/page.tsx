import Link from '@/app/components/Link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-codes-for-salons-and-beauty-businesses'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'What is the most useful QR code for a salon?',
    answer:
      'A booking code. If you use an online booking system, link a QR code to your booking page. If you take bookings by message, use a WhatsApp code with a pre-filled booking request.',
  },
  {
    question: 'Can I put a QR code on my salon window?',
    answer:
      'Yes, and it is one of the best spots, because it works while you are closed. Make it at least 15 x 15 cm and put it at eye level, away from glare.',
  },
  {
    question: 'How do I get more Google reviews with a QR code?',
    answer:
      'Link a QR code to your Google review link, which you can copy from your Google Business Profile, and put it on the counter or on aftercare cards. Ask in person too. A code works best as a reminder, not a replacement for asking.',
  },
  {
    question: 'Do the codes cost anything or expire?',
    answer:
      'No. Codes made with Free QR Gen are free and static, so they keep working for as long as the number, link or details in them stay the same.',
  },
]

const sections = [
  { id: 'why', label: 'Why QR codes suit salons' },
  { id: 'ideas', label: '6 QR codes every salon can use' },
  { id: 'steps', label: 'Make a matching set in 4 steps' },
  { id: 'where', label: 'Where to put them' },
  { id: 'tips', label: 'Tips for codes that get scanned' },
]

export default function SalonQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='Clients already have their phone in their hand at the chair, in the waiting area and walking past your window. A few well-placed QR codes turn those moments into bookings, reviews and repeat visits. Here are the codes that work for hair salons, barbers, nail bars and beauty therapists, and where to put each one.'
      sections={sections}
      faqs={faqs}
      about={[{ name: 'Beauty salon', sameAs: 'https://en.wikipedia.org/wiki/Beauty_salon' }]}
      cta={{ href: '/whatsapp-qr-code-generator', label: 'Create your booking QR code now, free' }}
    >
      <h2 id='why'>Why QR codes suit salons</h2>
      <ul>
        <li>
          <strong>You can&apos;t answer the phone mid-appointment.</strong> A code that starts a
          booking message lets clients get in touch without interrupting you.
        </li>
        <li>
          <strong>Your window works after hours.</strong> People walking past in the evening can
          book there and then.
        </li>
        <li>
          <strong>The best time to ask for a review is while they love their new look.</strong> A
          code on the counter makes it a ten-second job.
        </li>
      </ul>

      <h2 id='ideas'>6 QR codes every salon can use</h2>
      <ul>
        <li>
          <strong>Book an appointment.</strong> A{' '}
          <Link href='/whatsapp-qr-code-generator'>WhatsApp QR code</Link> with a message like
          &quot;Hi, I&apos;d like to book a cut and colour. Are you free on…&quot;, or a{' '}
          <Link href='/'>link QR code</Link> to your online booking page.
        </li>
        <li>
          <strong>Leave a review.</strong> A link code to your Google review page, on the counter
          and on aftercare cards.
        </li>
        <li>
          <strong>Find us.</strong> A{' '}
          <Link href='/location-qr-code-generator'>location QR code</Link> on flyers and gift
          vouchers that opens your salon in Google Maps. Useful if you&apos;re upstairs, down a side
          street or easy to miss.
        </li>
        <li>
          <strong>Aftercare instructions.</strong> A{' '}
          <Link href='/text-qr-code-generator'>text QR code</Link> on an aftercare card with the
          do&apos;s and don&apos;ts for a new colour, lashes or nails. It shows the text on the
          client&apos;s phone with no internet needed, so they can screenshot it.
        </li>
        <li>
          <strong>Price list.</strong> A link code to your price list or treatment menu, for the
          window and the waiting area.
        </li>
        <li>
          <strong>Join the guest WiFi.</strong> A{' '}
          <Link href='/wifi-qr-code-generator'>WiFi QR code</Link> for clients sitting under the
          dryer for an hour. See{' '}
          <Link href='/how-to-share-wifi-with-a-qr-code'>how to share WiFi with a QR code</Link>.
        </li>
      </ul>

      <h2 id='steps'>Make a matching set in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          <strong>Start with your booking code.</strong> Enter your number or booking link, then set
          your salon&apos;s colours and add your logo.
        </li>
        <li>
          <strong>Switch QR type</strong> for each of the other codes. Your colours and logo carry
          over, so the whole set matches.
        </li>
        <li>
          <strong>Download SVGs</strong> for printed cards and window stickers, and PNGs for
          Instagram and your website.
        </li>
        <li>
          <strong>Scan every code</strong> with your own phone before you print, to check each one
          does what its label says.
        </li>
      </ol>

      <h2 id='where'>Where to put them</h2>
      <ul>
        <li>
          <strong>Front window:</strong> booking and price list, for passers-by.
        </li>
        <li>
          <strong>Reception counter:</strong> review and rebooking, for clients paying on the way
          out.
        </li>
        <li>
          <strong>Mirror stations:</strong> a small WiFi or rebooking card in the corner of each
          mirror.
        </li>
        <li>
          <strong>Aftercare and loyalty cards:</strong> aftercare text, rebooking and review.
        </li>
        <li>
          <strong>Gift vouchers:</strong> directions and booking, because whoever gets the voucher
          may never have visited.
        </li>
      </ul>

      <h2 id='tips'>Tips for codes that get scanned</h2>
      <ul>
        <li>
          <strong>Label every code.</strong> &quot;Scan to book&quot;, &quot;Scan to leave us a
          review&quot;. People don&apos;t scan mystery codes.
        </li>
        <li>
          <strong>One code per card.</strong> Two codes next to each other confuse cameras and
          people. If you need two, label them and leave space between.
        </li>
        <li>
          <strong>Keep codes dark on a light background.</strong> Pale pink on white or gold foil
          looks lovely and often won&apos;t scan.
        </li>
        <li>
          <strong>Use a business number.</strong> WhatsApp and SMS codes show your number to every
          client who scans them.
        </li>
      </ul>
      <p>
        More ideas for chat bookings in{' '}
        <Link href='/whatsapp-qr-code-for-business'>WhatsApp QR codes for small businesses</Link>.
      </p>
    </GuidePage>
  )
}
