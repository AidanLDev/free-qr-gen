import Link from '@/app/components/Link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-code-for-pet-tags'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'Does a QR code pet tag replace a microchip?',
    answer:
      'No. A microchip needs a scanner at a vet or rescue centre. A QR tag lets anyone with a phone contact you straight away. Use both. In the UK, dogs must also wear a tag with the owner’s name and address in public.',
  },
  {
    question: 'How small can the QR code be on a pet tag?',
    answer:
      'A phone number code is very short, so it can be printed at around 1.5 to 2 cm square on a quality tag. Test the finished tag before your pet wears it.',
  },
  {
    question: 'What if the finder’s phone cannot scan QR codes?',
    answer:
      'Always engrave your phone number in plain text on the tag as well. The QR code makes calling easier, but the number is the backup.',
  },
  {
    question: 'Does the tag need a subscription?',
    answer:
      'Not if you make it here. The number is stored in the code itself, so there is no account, no monthly fee and nothing to expire.',
  },
  {
    question: 'What if I change my phone number?',
    answer:
      'The tag will keep calling the old number, so make a new code and order a new tag. Update your microchip details at the same time.',
  },
]

const sections = [
  { id: 'why', label: 'Why a QR code on a pet tag helps' },
  { id: 'which-code', label: 'What to put in the code' },
  { id: 'privacy', label: 'What to leave out' },
  { id: 'steps', label: 'Make a QR code pet tag in 4 steps' },
  { id: 'tags', label: 'Getting the tag made' },
]

export default function PetTagQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='When someone finds a lost dog or cat, the quickest way home is a call to the owner. A QR code on the tag means the finder doesn’t have to squint at tiny engraving or type a number with a nervous dog on a lead. They scan, and their phone offers to call you. Here is how to make one for free, without a subscription.'
      sections={sections}
      faqs={faqs}
      about={[{ name: 'Pet tag', sameAs: 'https://en.wikipedia.org/wiki/Pet_tag' }]}
      cta={{
        href: '/phone-number-qr-code-generator',
        label: 'Create your pet tag QR code now, free',
      }}
    >
      <h2 id='why'>Why a QR code on a pet tag helps</h2>
      <ul>
        <li>
          <strong>Faster contact.</strong> One scan brings up your number, ready to call. No
          mistyped digits.
        </li>
        <li>
          <strong>No vet visit needed.</strong> A microchip has to be read by a scanner. A QR code
          works with any phone, at any time of day.
        </li>
        <li>
          <strong>No subscription.</strong> Many &quot;smart&quot; pet tags rely on a paid profile
          page. A phone number code works on its own, for good.
        </li>
      </ul>

      <h2 id='which-code'>What to put in the code</h2>
      <ul>
        <li>
          <strong>Your phone number (best for most pets).</strong> A{' '}
          <Link href='/phone-number-qr-code-generator'>phone number QR code</Link> stores only your
          number, so it&apos;s small and easy to scan on a tiny tag. Scanning it offers to call you.
        </li>
        <li>
          <strong>A short note for pets with medical needs.</strong> A{' '}
          <Link href='/text-qr-code-generator'>text QR code</Link> can hold a few lines, like
          &quot;Please call 07700 900123. I&apos;m Biscuit, I&apos;m diabetic and I need my
          insulin.&quot; It shows on the finder&apos;s phone with no internet needed. Put the phone
          number first in case the phone shows only a preview.
        </li>
      </ul>
      <p>Keep text codes short. More text means smaller squares, and a tag has very little room.</p>

      <h2 id='privacy'>What to leave out</h2>
      <ul>
        <li>
          <strong>Your full home address</strong> in the code. It adds a lot of data to a tiny code,
          and your phone number is enough to get your pet home. Where the law asks for an address,
          engrave it in text.
        </li>
        <li>
          <strong>Your pet&apos;s name, if you&apos;re worried about theft.</strong> Some owners
          prefer the name off the tag, so strangers can&apos;t call the pet over.
        </li>
        <li>
          <strong>Anything that could change often.</strong> Once the tag is engraved, the code
          can&apos;t be edited.
        </li>
      </ul>

      <h2 id='steps'>Make a QR code pet tag in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          Open the{' '}
          <Link href='/phone-number-qr-code-generator'>phone number QR code generator</Link> and
          enter your mobile with the country code, so it works if your pet is found by a visitor
          from abroad.
        </li>
        <li>
          <strong>Keep it black on white</strong>, with no logo. Tags are small and get scratched,
          so give the code every chance.
        </li>
        <li>
          <strong>Set error correction to High.</strong> The code can then still be read with a bit
          of wear.
        </li>
        <li>
          <strong>Download an SVG</strong> for the engraver or printer, and a PNG to test with. Scan
          the PNG from your screen to check it calls your number.
        </li>
      </ol>

      <h2 id='tags'>Getting the tag made</h2>
      <ul>
        <li>
          <strong>Choose a printed or enamel-filled tag</strong> over plain laser engraving on shiny
          metal. High contrast scans best.
        </li>
        <li>
          <strong>Go for at least 2.5 cm across</strong> for dogs, so the code can be at least 1.5
          to 2 cm square.
        </li>
        <li>
          <strong>Engrave your number in text on the back</strong>, plus anything the law requires
          where you live. In the UK, a dog&apos;s tag needs the owner&apos;s name and address.
        </li>
        <li>
          <strong>Check it every few months.</strong> If it&apos;s scratched or faded, scan it. If
          it won&apos;t read, replace it.
        </li>
      </ul>
      <p>
        The same idea works for people too: see{' '}
        <Link href='/emergency-contact-qr-code'>how to make an emergency contact QR code</Link>.
      </p>
    </GuidePage>
  )
}
