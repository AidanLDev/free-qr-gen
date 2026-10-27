import Link from '@/app/components/Link'
import React from 'react'
import ContentPage from '../components/ContentPage'
import JsonLd from '../components/JsonLd'
import { siteUrl } from '../constants/constants'
import { getGuide } from '../lib/guides'
import { pageMetadata } from '../lib/metadata'

const path = '/what-is-a-qr-code'
// Title and description live in lib/guides.ts
const { title, description } = getGuide(path)

export const metadata = pageMetadata({
  title,
  description,
  path,
  type: 'article',
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  url: `${siteUrl}${path}`,
  image: `${siteUrl}/FreeQRGenCoverImage.png`,
  author: { '@type': 'Person', name: 'Aidan Lowson' },
  publisher: { '@type': 'Organization', name: 'Free QR Gen', url: siteUrl },
  about: [
    { '@type': 'Thing', name: 'QR code', sameAs: 'https://en.wikipedia.org/wiki/QR_code' },
    {
      '@type': 'Person',
      name: 'Masahiro Hara',
      sameAs: 'https://en.wikipedia.org/wiki/Masahiro_Hara',
    },
  ],
}

const timeline = [
  { year: '1994', event: 'Denso Wave announces the QR code.' },
  { year: '1997', event: 'Approved as an AIM (Automatic Identification Manufacturers) standard.' },
  { year: '1999', event: 'Becomes a Japanese Industrial Standard (JIS).' },
  { year: '2000', event: 'Approved as an international standard, ISO/IEC 18004.' },
  { year: '2002', event: 'Mobile phones with built-in QR readers go on sale in Japan.' },
  { year: '2014', event: 'The QR code team wins the European Inventor Award Popular Prize.' },
  { year: '2017', event: "Apple's iOS 11 lets the iPhone camera scan QR codes directly." },
  { year: '2020', event: 'The COVID-19 pandemic brings QR menus and check-ins to everyday life.' },
]

const resources: { href: string; label: string; source: string; kind: 'Read' | 'Watch' }[] = [
  {
    href: 'https://www.youtube.com/watch?v=w5ebcowAJD8',
    label: 'I built a QR code with my bare hands to see how it works',
    source: 'Veritasium (YouTube)',
    kind: 'Watch',
  },
  {
    href: 'https://www.qrcode.com/en/history/',
    label: 'History of QR Code',
    source: 'Denso Wave, the inventors',
    kind: 'Read',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Masahiro_Hara',
    label: 'Masahiro Hara',
    source: 'Wikipedia',
    kind: 'Read',
  },
  {
    href: 'https://en.wikipedia.org/wiki/QR_code',
    label: 'QR code',
    source: 'Wikipedia',
    kind: 'Read',
  },
  {
    href: 'https://www.theguardian.com/technology/2020/dec/11/qr-code-inventor-relish-its-role-in-tackling-covid',
    label:
      "'I'm pleased it is being used for people's safety': QR code inventor relishes its role in tackling Covid",
    source: 'The Guardian',
    kind: 'Read',
  },
  {
    href: 'https://spectrum.ieee.org/how-a-board-game-and-skyscrapers-inspired-the-development-of-the-qr-code',
    label: 'How a board game and skyscrapers inspired the development of the QR code',
    source: 'IEEE Spectrum',
    kind: 'Read',
  },
  {
    href: 'https://www.denso-am.eu/news/20140617_qr-code-development-team-wins-european-inventor-award',
    label: 'QR Code development team wins the European Inventor Award',
    source: 'DENSO',
    kind: 'Read',
  },
  {
    href: 'https://www.qrcode.com/en/about/version.html',
    label: 'QR code versions and data capacity',
    source: 'Denso Wave',
    kind: 'Read',
  },
]

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}

export default function WhatIsAQRCodePage() {
  return (
    <ContentPage
      title='What is a QR code?'
      intro='The little black-and-white squares are everywhere, from restaurant menus to train tickets. Here is where they came from, how they work and how to make one that scans every time.'
    >
      <JsonLd data={articleJsonLd} />

      <nav aria-label='On this page' className='card mt-8'>
        <p className='section-title mb-3'>On this page</p>
        <ul className='!mb-0 !list-none !space-y-1.5 !pl-0'>
          <li>
            <a href='#what-is-a-qr-code'>What a QR code is</a>
          </li>
          <li>
            <a href='#who-invented-the-qr-code'>Who invented the QR code?</a>
          </li>
          <li>
            <a href='#timeline'>A short timeline</a>
          </li>
          <li>
            <a href='#how-qr-codes-work'>How QR codes work</a>
          </li>
          <li>
            <a href='#tips'>Tips for QR codes that scan reliably</a>
          </li>
          <li>
            <a href='#learn-more'>Where to read and watch more</a>
          </li>
        </ul>
      </nav>

      <h2 id='what-is-a-qr-code'>What a QR code is</h2>
      <p>
        A QR code is a two-dimensional barcode. &quot;QR&quot; stands for{' '}
        <strong>Quick Response</strong>, because it was designed to be read fast. A traditional
        barcode stores information in one direction, as a row of lines. A QR code stores it both
        horizontally and vertically in a grid of small squares called <strong>modules</strong>, so
        it can hold far more data in the same space.
      </p>
      <p>
        Point a phone camera at one and it decodes the pattern into text, most often a web address,
        but it can also hold contact details, Wi-Fi credentials or plain text.
      </p>

      <h2 id='who-invented-the-qr-code'>Who invented the QR code?</h2>
      <p>
        The QR code was invented by{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Masahiro_Hara'>
          Masahiro Hara
        </ExternalLink>
        , a Japanese engineer who led the development team at Denso Wave, then part of Denso, a
        Toyota Group company. It was released in <strong>1994</strong>.
      </p>
      <p>
        The problem was on the factory floor. Car parts were tracked with barcodes, and a single box
        of components could carry around ten of them, each scanned one by one. Barcodes also held
        only about 20 characters and could not store Japanese Kanji and Kana characters. Hara&apos;s
        team set out to build a code that held much more data and could be read much faster.
      </p>
      <p>
        Hara has said the idea came to him while playing the board game <strong>Go</strong>, where
        black and white stones sit on a grid. That grid of black and white became the basis of the
        QR code. The result held around 7,000 numbers, could store Kanji, and could be read more
        than ten times faster than other codes.
      </p>
      <p>
        One clever detail is the three large squares in the corners, called{' '}
        <strong>finder patterns</strong>. They let a scanner find the code and work out its angle
        from any direction. To make sure nothing else would be mistaken for them, the team surveyed
        a wide range of printed materials to find the black-and-white ratio least likely to appear
        by chance. They settled on <strong>1:1:3:1:1</strong>.
      </p>
      <p>
        Denso Wave holds the patent but chose not to enforce it, and published the specification so
        anyone could use QR codes free of charge. That decision is a big part of why QR codes are
        everywhere today, including on free tools like this one.
      </p>

      <h2 id='timeline'>A short timeline</h2>
      <ol className='mb-4 space-y-3 border-l border-neutral-800 pl-5'>
        {timeline.map(({ year, event }) => (
          <li key={year} className='relative'>
            <span className='absolute -left-[1.6rem] top-2 h-2 w-2 rounded-full bg-primary' />
            <span className='mr-2 font-semibold text-white'>{year}</span>
            {event}
          </li>
        ))}
      </ol>
      <p>
        Denso Wave has also created variations such as <strong>Micro QR</strong> for very small
        spaces, <strong>iQR</strong> for rectangular codes, and <strong>Frame QR</strong>, which
        leaves room for an image in the middle.
      </p>

      <h2 id='how-qr-codes-work'>How QR codes work</h2>
      <p>Every QR code is built from a few parts that tell the scanner how to read it:</p>
      <ul>
        <li>
          <strong>Finder patterns</strong>: the three large squares in the corners, used to locate
          and orient the code.
        </li>
        <li>
          <strong>Alignment patterns</strong>: smaller squares that help correct for distortion when
          a code is printed on a curved surface or scanned at an angle.
        </li>
        <li>
          <strong>Timing patterns</strong>: alternating lines of modules that help the scanner work
          out the size of the grid.
        </li>
        <li>
          <strong>Quiet zone</strong>: the empty margin around the code that separates it from its
          surroundings.
        </li>
        <li>
          <strong>Data and error correction</strong>: the rest of the grid, holding your content
          plus extra recovery data.
        </li>
      </ul>

      <h3>Sizes and capacity</h3>
      <p>
        QR codes come in 40 &quot;versions&quot;. Version 1 is a 21 x 21 grid of modules and version
        40 is 177 x 177. The largest codes can hold up to 7,089 numbers or 4,296 letters and
        numbers. The more data you put in, the denser the grid, which is why short links make
        cleaner codes.
      </p>

      <h3>Error correction</h3>
      <p>
        QR codes use Reed–Solomon error correction, so they can still be read when part of the code
        is dirty, damaged or covered. There are four levels:
      </p>
      <ul>
        <li>
          <strong>L (Low)</strong>: about 7% of the code can be restored
        </li>
        <li>
          <strong>M (Medium)</strong>: about 15%
        </li>
        <li>
          <strong>Q (Quartile)</strong>: about 25%
        </li>
        <li>
          <strong>H (High)</strong>: about 30%
        </li>
      </ul>
      <p>
        That spare capacity is also what lets you place a logo in the middle of a QR code: the logo
        covers some modules, and error correction fills in the gaps. You can pick the level when you{' '}
        <Link href='/'>create your QR code</Link>.
      </p>

      <h2 id='tips'>Tips for QR codes that scan reliably</h2>
      <ul>
        <li>
          <strong>Keep strong contrast.</strong> A dark code on a light background is the safest
          choice. Some scanners struggle with light codes on dark backgrounds.
        </li>
        <li>
          <strong>Leave a margin.</strong> Don&apos;t crop the quiet zone or place text right up
          against the code.
        </li>
        <li>
          <strong>Use higher error correction with a logo.</strong> Q or H gives the scanner more
          room to recover the modules your logo covers.
        </li>
        <li>
          <strong>Don&apos;t make the logo too big.</strong> If it covers too much of the code, it
          won&apos;t scan, whatever the error correction level.
        </li>
        <li>
          <strong>Print it big enough.</strong> Make the code larger when people will scan it from
          further away, such as on a poster.
        </li>
        <li>
          <strong>Test before you print.</strong> Scan it with a couple of different phones first.
        </li>
      </ul>
      <p>
        Making one for a café or restaurant? Follow our step-by-step guide to{' '}
        <Link href='/qr-code-for-restaurant-menu'>making a QR code for your restaurant menu</Link>.
      </p>

      <h2 id='learn-more'>Where to read and watch more</h2>
      <ul className='!list-none !space-y-3 !pl-0'>
        {resources.map(({ href, label, source, kind }) => (
          <li key={href} className='card !p-4'>
            <span className='section-title mr-2'>{kind}</span>
            <ExternalLink href={href}>{label}</ExternalLink>
            <span className='block text-sm text-neutral-500'>{source}</span>
          </li>
        ))}
      </ul>

      <p className='mt-10'>
        <Link href='/'>Ready to make your own? Create a free QR code →</Link>
      </p>

      <p className='mt-10 text-sm text-neutral-500'>
        QR Code is a registered trademark of DENSO WAVE INCORPORATED.
      </p>
    </ContentPage>
  )
}
