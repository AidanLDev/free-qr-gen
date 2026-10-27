import Link from '@/app/components/Link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/text-to-win-competition-qr-code'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'Who pays for the text?',
    answer:
      'The person entering, at their normal rate. On most mobile plans that means it is free for them. Use a standard mobile number, not a premium-rate short code.',
  },
  {
    question: 'Is the entry sent automatically when someone scans?',
    answer:
      'No. Scanning opens the phone’s messaging app with your number and the keyword filled in. The entrant presses send.',
  },
  {
    question: 'Can I use WhatsApp instead of SMS?',
    answer:
      'Yes, a WhatsApp QR code works the same way with a pre-filled message. It suits audiences who live on WhatsApp, but SMS works on every phone without an app.',
  },
  {
    question: 'Can I text entrants with offers afterwards?',
    answer:
      'Only if they agreed to it. Entering a competition is not the same as signing up for marketing, so ask separately, for example “Reply YES for offers”, and keep a record.',
  },
]

const sections = [
  { id: 'how', label: 'How an SMS QR code works' },
  { id: 'ideas', label: 'Ideas for text-to-win and text-to-join' },
  { id: 'steps', label: 'Set up your competition in 5 steps' },
  { id: 'poster', label: 'What to put on the poster' },
  { id: 'rules', label: 'Keep it fair and above board' },
]

export default function TextToWinQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='“Text WIN to 07700 900123” asks people to remember a number, type a keyword and get both right. A QR code does it for them: scan, and a text with the keyword is ready to send. This guide covers how to run a simple text-to-win competition or text-to-join list with an SMS QR code, from setup to the poster.'
      sections={sections}
      faqs={faqs}
      about={[{ name: 'SMS', sameAs: 'https://en.wikipedia.org/wiki/SMS' }]}
      cta={{ href: '/sms-qr-code-generator', label: 'Create your SMS QR code now, free' }}
    >
      <h2 id='how'>How an SMS QR code works</h2>
      <p>
        An <Link href='/sms-qr-code-generator'>SMS QR code</Link> stores a phone number and a
        message. When someone scans it, their phone opens the messaging app with both filled in.
        They press send, and the entry arrives on your phone like any other text.
      </p>
      <ul>
        <li>
          <strong>No mistyped keywords.</strong> Every entry arrives in the same format, which makes
          counting them easy.
        </li>
        <li>
          <strong>Works on every phone.</strong> iPhones and Android phones both open their built-in
          messages app. Nothing to install.
        </li>
        <li>
          <strong>You get a real number.</strong> You can text the winner back directly.
        </li>
      </ul>

      <h2 id='ideas'>Ideas for text-to-win and text-to-join</h2>
      <ul>
        <li>
          <strong>Prize draws</strong> at a market stall, school fair or shop opening: &quot;Scan to
          enter. Winner drawn Saturday at 4pm.&quot;
        </li>
        <li>
          <strong>Quiz nights and radio-style questions:</strong> one code per answer (A, B or C) so
          people just scan their choice.
        </li>
        <li>
          <strong>Join the list</strong> for a club, class or offers: pre-fill &quot;JOIN&quot;.
        </li>
        <li>
          <strong>Vote for a favourite</strong> at a bake-off or talent show, with one code per
          entry.
        </li>
      </ul>

      <h2 id='steps'>Set up your competition in 5 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          <strong>Choose the number.</strong> A spare mobile or a business SIM keeps entries out of
          your personal messages.
        </li>
        <li>
          <strong>Pick a short keyword</strong>, like WIN or SUMMER. Adding a word per location (WIN
          MARKET, WIN SHOP) shows you where entries came from.
        </li>
        <li>
          Open the <Link href='/sms-qr-code-generator'>SMS QR code generator</Link>, enter the
          number with the country code and type the keyword as the message.
        </li>
        <li>
          <strong>Brand it and download.</strong> SVG for posters, PNG for social posts and screens.
        </li>
        <li>
          <strong>Send a test entry</strong> from a different phone and check it arrives as
          expected.
        </li>
      </ol>

      <h2 id='poster'>What to put on the poster</h2>
      <ul>
        <li>
          <strong>The prize and the deadline</strong>, in the biggest text.
        </li>
        <li>
          <strong>&quot;Scan to enter&quot;</strong> next to the code, plus the number and keyword
          in text for anyone who can&apos;t scan.
        </li>
        <li>
          <strong>&quot;Texts cost your standard network rate&quot;</strong>, so people know it
          won&apos;t cost extra.
        </li>
        <li>
          <strong>Where to find the full terms</strong>, such as a short web address.
        </li>
        <li>
          <strong>Big enough to scan from where people stand.</strong> About 10 x 10 cm for a poster
          at arm&apos;s length, more if it&apos;s on a wall across the room.
        </li>
      </ul>

      <h2 id='rules'>Keep it fair and above board</h2>
      <p>
        This isn&apos;t legal advice, but a few basics keep a small competition out of trouble.
        Check the rules where you live before running anything big.
      </p>
      <ul>
        <li>
          <strong>Use a standard-rate number.</strong> Charging for entry to a prize draw can turn
          it into a lottery, which has strict rules in the UK and many other countries.
        </li>
        <li>
          <strong>Publish simple terms:</strong> who can enter, the closing date, how the winner is
          picked and when they&apos;ll be told.
        </li>
        <li>
          <strong>Ask before you market.</strong> Only send offers to people who said yes to them.
        </li>
        <li>
          <strong>Delete entries you don&apos;t need</strong> once the winner has been contacted.
        </li>
      </ul>
      <p>
        Prefer chat? The same idea works with a{' '}
        <Link href='/whatsapp-qr-code-generator'>WhatsApp QR code</Link>. See{' '}
        <Link href='/whatsapp-qr-code-for-business'>WhatsApp QR codes for small businesses</Link>.
      </p>
    </GuidePage>
  )
}
