import Link from 'next/link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-code-for-sale-signs'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'Should a For Sale sign QR code call or text me?',
    answer:
      'Texting suits private sellers best: buyers can ask a question without committing to a call, and you can reply when it suits you. A call code is better if you want to arrange viewings quickly.',
  },
  {
    question: 'Can I use the same QR code on the advert and the sign?',
    answer:
      'Yes, but a different pre-filled message for each, like “I saw your sign” and “I saw your advert”, shows you where buyers came from.',
  },
  {
    question: 'What size should the QR code be on a car window sign?',
    answer:
      'About 8 to 10 cm square for an A4 sign in a car window, which people scan from a metre or two away. Bigger for a garden board read from the pavement.',
  },
  {
    question: 'What happens to the code when the item is sold?',
    answer:
      'Nothing. It keeps working, so take the sign down once you have sold, or you will keep getting texts.',
  },
]

const sections = [
  { id: 'why', label: 'Why add a QR code to a For Sale sign' },
  { id: 'which-code', label: 'Call, text or link?' },
  { id: 'ideas', label: 'Ideas for cars, homes and garage sales' },
  { id: 'steps', label: 'Make your sign in 4 steps' },
  { id: 'safety', label: 'Staying safe as a private seller' },
]

export default function ForSaleSignQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='Someone walks past your car, your house or your garage sale and is interested, but they’re on their way somewhere. If they have to write down your number, most won’t. A QR code on your “For Sale” sign lets them call or text you in one scan, with a message already written. Here is how to make one for free.'
      sections={sections}
      faqs={faqs}
      cta={{ href: '/sms-qr-code-generator', label: 'Create your For Sale QR code now, free' }}
    >
      <h2 id='why'>Why add a QR code to a For Sale sign</h2>
      <ul>
        <li>
          <strong>Catch interest on the spot.</strong> A scan takes seconds, even at a bus stop or
          from a car window.
        </li>
        <li>
          <strong>No wrong numbers.</strong> Handwritten numbers on signs are easy to misread.
        </li>
        <li>
          <strong>Know where buyers came from.</strong> A pre-filled message like &quot;I saw the
          sign on your car&quot; tells you at a glance.
        </li>
      </ul>

      <h2 id='which-code'>Call, text or link?</h2>
      <ul>
        <li>
          <strong>Text:</strong> an <Link href='/sms-qr-code-generator'>SMS QR code</Link> with a
          message like &quot;Hi, is the car still for sale?&quot;. Easy for shy buyers, and you can
          answer when it suits you.
        </li>
        <li>
          <strong>Call:</strong> a{' '}
          <Link href='/phone-number-qr-code-generator'>phone number QR code</Link> for buyers who
          want to talk now.
        </li>
        <li>
          <strong>Link:</strong> a <Link href='/'>URL QR code</Link> to your full online listing,
          with photos, price and history.
        </li>
      </ul>

      <h2 id='ideas'>Ideas for cars, homes and garage sales</h2>
      <ul>
        <li>
          <strong>Cars:</strong> a sign in the rear side window with the price, mileage and a text
          code. Link a second code to the online advert with photos and service history.
        </li>
        <li>
          <strong>Private house sales and lettings:</strong> a garden board with a call code for
          viewings, and a link to the listing.
        </li>
        <li>
          <strong>Garage and yard sales:</strong> a{' '}
          <Link href='/location-qr-code-generator'>location QR code</Link> on posters around the
          area that opens directions to the sale in Google Maps.
        </li>
        <li>
          <strong>Boats, caravans and bikes</strong> parked at marinas, sites and clubs where you
          aren&apos;t around to answer questions.
        </li>
      </ul>

      <h2 id='steps'>Make your sign in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          <strong>Make the code</strong> with your number and country code, plus a pre-filled
          message that names the item.
        </li>
        <li>
          <strong>Keep it black on white.</strong> No logo needed.
        </li>
        <li>
          <strong>Download a PNG</strong> and add it to your sign with the price and a short label
          like &quot;Scan to text me&quot;. Write your number underneath too.
        </li>
        <li>
          <strong>Print it on matt paper</strong> and scan it through the glass or from the pavement
          before you put it up.
        </li>
      </ol>

      <h2 id='safety'>Staying safe as a private seller</h2>
      <ul>
        <li>
          <strong>Use a number you don&apos;t mind sharing.</strong> Everyone who scans sees it. A
          second SIM or a free virtual number keeps your main number private.
        </li>
        <li>
          <strong>Don&apos;t put your address in the code</strong> for a car or bike sale. Arrange
          where to meet by text once you&apos;ve talked.
        </li>
        <li>
          <strong>Don&apos;t hand over the item until the money is in your account.</strong> Check
          your banking app yourself rather than trusting a payment screenshot or an offer to
          overpay.
        </li>
        <li>
          <strong>Take the sign down once it&apos;s sold.</strong> The code keeps working forever.
        </li>
      </ul>
      <p>
        Selling as a business? Read{' '}
        <Link href='/qr-codes-for-vans-and-shop-signs'>QR codes for vans and shop signs</Link>.
      </p>
    </GuidePage>
  )
}
