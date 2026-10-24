import Link from 'next/link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-codes-for-inventory-and-asset-labels'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'Should an asset label QR code hold text or a link?',
    answer:
      'Text if you need it to work offline or you do not have an inventory system. A link if each asset has its own page in a system, where you can see its history and update it.',
  },
  {
    question: 'How small can an inventory QR code be?',
    answer:
      'A code holding a short ID, like TOOL-0042, can be printed at around 1.5 cm square on a good label printer. Codes holding more text need to be bigger.',
  },
  {
    question: 'Can I make hundreds of labels at once here?',
    answer:
      'Free QR Gen makes one code at a time, which suits a few dozen labels. For hundreds, use label printer software or a spreadsheet add-on that turns a column of IDs into QR codes.',
  },
  {
    question: 'Do I need a special scanner?',
    answer:
      'No. Any smartphone camera reads them. Handheld barcode scanners that support 2D codes also read QR codes, if you want to scan straight into a spreadsheet.',
  },
]

const sections = [
  { id: 'why', label: 'Why QR codes beat plain labels' },
  { id: 'what-to-store', label: 'What to store in each code' },
  { id: 'steps', label: 'Make an asset label in 4 steps' },
  { id: 'labels', label: 'Label sizes and materials' },
  { id: 'scaling', label: 'When you outgrow one-at-a-time codes' },
]

export default function InventoryLabelQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='Whether it is a garage full of tools, a school’s laptops or the stock room of a small shop, labels only help if people can read and use them. A QR code on each label can hold an ID, a description and where the item belongs, readable by any phone, even with no signal. This guide covers what to put in the code and how to print labels that last.'
      sections={sections}
      faqs={faqs}
      about={[{ name: 'Asset tracking', sameAs: 'https://en.wikipedia.org/wiki/Asset_tracking' }]}
      cta={{ href: '/text-qr-code-generator', label: 'Create your label QR code now, free' }}
    >
      <h2 id='why'>Why QR codes beat plain labels</h2>
      <ul>
        <li>
          <strong>More information in less space.</strong> A small code can hold the ID, name,
          location and date in a space that would fit one line of text.
        </li>
        <li>
          <strong>No typing errors.</strong> Scanning copies the ID exactly, so it matches your
          spreadsheet every time.
        </li>
        <li>
          <strong>Works offline.</strong> A <Link href='/text-qr-code-generator'>text QR code</Link>{' '}
          stores the details in the code, so it reads in a basement, a van or a warehouse with no
          WiFi.
        </li>
      </ul>

      <h2 id='what-to-store'>What to store in each code</h2>
      <p>Keep it short and consistent. A simple format that works for most small teams:</p>
      <ul>
        <li>
          <strong>ID:</strong> TOOL-0042
        </li>
        <li>
          <strong>Item:</strong> Cordless drill, 18V
        </li>
        <li>
          <strong>Home:</strong> Van 2, shelf B
        </li>
        <li>
          <strong>Owner or contact:</strong> Workshop, 07700 900123
        </li>
      </ul>
      <p>
        Put the ID first, on its own line, so it&apos;s easy to copy. Leave out anything that
        changes often, like who has it today. That belongs in your spreadsheet, not the label.
      </p>
      <p>
        If you already have an inventory system with a page per item, use a{' '}
        <Link href='/'>link QR code</Link> to that page instead. The label never changes, and the
        page always shows the latest details.
      </p>

      <h2 id='steps'>Make an asset label in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          Open the <Link href='/text-qr-code-generator'>text QR code generator</Link> and type the
          details in your chosen format.
        </li>
        <li>
          <strong>Keep it black on white</strong>, with no logo. Labels are small, and every bit of
          contrast helps.
        </li>
        <li>
          <strong>Choose error correction</strong>: Medium for indoor items, High for tools and
          outdoor kit that will get scuffed. Higher levels make the code a little denser.
        </li>
        <li>
          <strong>Download a PNG or SVG</strong> sized for your label, print a test and scan it.
        </li>
      </ol>

      <h2 id='labels'>Label sizes and materials</h2>
      <ul>
        <li>
          <strong>Print the ID in text next to the code</strong>, so people can still read it if the
          code gets damaged.
        </li>
        <li>
          <strong>Give a short ID code at least 1.5 cm</strong> and a few lines of text at least 2.5
          cm.
        </li>
        <li>
          <strong>Indoors:</strong> paper labels from a thermal or inkjet label printer are fine.
        </li>
        <li>
          <strong>Tools and outdoor equipment:</strong> polyester or vinyl labels, or laminated
          tape. Thermal paper fades in sunlight and heat.
        </li>
        <li>
          <strong>Stick it on a flat, clean surface</strong> that isn&apos;t handled much, like the
          side of a case rather than the grip.
        </li>
      </ul>

      <h2 id='scaling'>When you outgrow one-at-a-time codes</h2>
      <p>
        Making codes one by one here is quick for a few dozen items. Past that, look at label
        printer software or a spreadsheet add-on that generates a QR code for every row. Use the
        same text format so old and new labels match.
      </p>
      <p>
        Labelling products you sell instead? See{' '}
        <Link href='/qr-codes-on-product-packaging'>QR codes on product packaging</Link>.
      </p>
    </GuidePage>
  )
}
