import Link from '@/app/components/Link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-codes-on-product-packaging'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'How small can a QR code be on packaging?',
    answer:
      'About 2 x 2 cm for a short link, printed crisply. Codes holding more data, like a block of text, need to be bigger. Always print a proof on the real material and scan it.',
  },
  {
    question: 'Can I change where the code goes after the packaging is printed?',
    answer:
      'Only if the code points at a link you control. Use a page on your own website, like yoursite.com/setup, and update that page whenever you need to.',
  },
  {
    question: 'Does the QR code need to be black?',
    answer:
      'No, but it needs strong contrast: a dark colour on a light background. Avoid printing it on clear film over a busy product photo.',
  },
  {
    question: 'Will the codes expire?',
    answer:
      'No. Codes made with Free QR Gen are static, so there is no subscription to keep paying for every box you have already shipped.',
  },
  {
    question: 'Can I see how many customers scanned the code?',
    answer:
      'Not from the code itself. If you link to your own website, your website analytics show visits to that page, which is a good stand-in.',
  },
]

const sections = [
  { id: 'why', label: 'What a code on the box can do' },
  { id: 'ideas', label: 'Ideas for packaging QR codes' },
  { id: 'which-code', label: 'Which type of code to use' },
  { id: 'steps', label: 'Add a QR code to your packaging in 4 steps' },
  { id: 'print', label: 'Printing tips for packaging' },
]

export default function PackagingQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='Packaging has room for a logo, a few lines of text and the legal small print. A QR code adds everything else: setup videos, manuals, returns and a direct line to your support team. This guide covers what small brands put behind packaging codes, which type of code to use, and how to print one that scans on curved, shiny or tiny surfaces.'
      sections={sections}
      faqs={faqs}
      about={[
        {
          name: 'Packaging',
          sameAs: 'https://en.wikipedia.org/wiki/Packaging',
        },
      ]}
      cta={{ href: '/', label: 'Create your packaging QR code now, free' }}
    >
      <h2 id='why'>What a code on the box can do</h2>
      <ul>
        <li>
          <strong>Cut support requests.</strong> A setup guide or video one scan away answers the
          questions that would otherwise arrive by email.
        </li>
        <li>
          <strong>Keep customers coming back.</strong> A code that leads to reordering or a
          newsletter keeps you in touch after the sale.
        </li>
        <li>
          <strong>Save space.</strong> Long instructions, recipes and care guides can live behind
          the code instead of on the box. Anything the law requires on the pack, like ingredients,
          allergens and safety warnings, must stay printed on it.
        </li>
      </ul>

      <h2 id='ideas'>Ideas for packaging QR codes</h2>
      <ul>
        <li>
          <strong>Setup and instructions</strong>: a manual, a video or a quick-start page.
        </li>
        <li>
          <strong>Support and returns</strong>: an email to your support inbox with &quot;Help with
          my order&quot; as the subject.
        </li>
        <li>
          <strong>Reorder</strong>: a link to the product page, for things customers run out of.
        </li>
        <li>
          <strong>Feedback and reviews</strong>: see our guide to{' '}
          <Link href='/qr-code-for-customer-feedback'>
            getting customer feedback with a QR code
          </Link>
          .
        </li>
        <li>
          <strong>Care and recycling</strong>: how to wash it, refill it or dispose of the
          packaging.
        </li>
        <li>
          <strong>The story behind the product</strong>: the maker, the farm or the materials.
        </li>
      </ul>

      <h2 id='which-code'>Which type of code to use</h2>
      <ul>
        <li>
          <strong>A link to your own website</strong> is the best choice for most packaging. Make it
          with the <Link href='/'>URL QR code generator</Link>. Use a page you can update, like
          yoursite.com/setup, so you never have to reprint boxes when the instructions change.
        </li>
        <li>
          <strong>An email code</strong> from the{' '}
          <Link href='/email-qr-code-generator'>email QR code generator</Link> for support and
          returns, so customers reach a person with the subject already filled in.
        </li>
        <li>
          <strong>A text code</strong> from the{' '}
          <Link href='/text-qr-code-generator'>text QR code generator</Link> for short information
          that must work offline, such as a batch number, a warranty code or a few lines of
          instructions. Keep it to a few sentences so the code stays small.
        </li>
      </ul>

      <h2 id='steps'>Add a QR code to your packaging in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          <strong>Build the destination first</strong> and check it on a phone. A setup page that is
          hard to read on mobile wastes the scan.
        </li>
        <li>
          <strong>Make the code</strong> with your brand colours, keeping it dark on a light
          background. Add your logo with error correction set to Quartile or High.
        </li>
        <li>
          <strong>Download an SVG</strong> and send it to your designer or printer. It stays sharp
          at any size.
        </li>
        <li>
          <strong>Print a proof on the real material</strong> and scan it on two or three phones
          before the full run.
        </li>
      </ol>

      <h2 id='print'>Printing tips for packaging</h2>
      <ul>
        <li>
          <strong>Avoid tight curves.</strong> On a bottle or tube, put the code on the flattest
          part or keep it small enough that it barely wraps.
        </li>
        <li>
          <strong>Watch out for shine.</strong> Gloss lamination, foil and clear film reflect light.
          Print the code on a matt panel if you can.
        </li>
        <li>
          <strong>Keep away from folds and seams</strong>, where the code gets creased or cut.
        </li>
        <li>
          <strong>Say what it does.</strong> &quot;Scan for setup video&quot; tells customers why
          they should bother.
        </li>
        <li>
          <strong>Avoid redirect services.</strong> Packaging lives for years, and a code from a
          trial that expires is printed on every box. Read{' '}
          <Link href='/why-did-my-qr-code-stop-working'>why QR codes stop working</Link>.
        </li>
      </ul>
    </GuidePage>
  )
}
