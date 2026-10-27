import Link from '@/app/components/Link'
import React from 'react'
import ContentPage from '../components/ContentPage'
import JsonLd from '../components/JsonLd'
import { siteUrl } from '../constants/constants'
import { pageMetadata } from '../lib/metadata'

const title = 'About Free QR Gen'
const description =
  'Free QR Gen is a free, no sign-up QR code generator. Customise colours, add your logo and download as PNG or SVG with no watermarks.'

export const metadata = pageMetadata({ title: 'About', description, path: '/about' })

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: title,
  description,
  url: `${siteUrl}/about`,
  mainEntity: {
    '@type': 'WebApplication',
    name: 'Free QR Gen',
    url: siteUrl,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    author: { '@type': 'Person', name: 'Aidan Lowson' },
  },
}

export default function AboutPage() {
  return (
    <ContentPage
      title={title}
      intro='A simple, free QR code generator that does one job well, without accounts, paywalls or watermarks.'
    >
      <JsonLd data={aboutJsonLd} />

      <h2>Why this site exists</h2>
      <p>
        Plenty of QR code generators make you sign up, stamp a watermark on your code, or quietly
        route your link through their own servers so it stops working when a free trial ends. Free
        QR Gen was built to be the opposite: paste a link, make it look how you want, and download
        it. That&apos;s it.
      </p>

      <h2>What you can do</h2>
      <ul>
        <li>
          <strong>Generate a QR code for any link</strong>: your website, a menu, a portfolio, a
          social profile or a feedback form.
        </li>
        <li>
          <strong>Pick your colours</strong> for the code and its background to match your brand.
        </li>
        <li>
          <strong>Add your logo</strong> to the centre of the code and adjust its size.
        </li>
        <li>
          <strong>Choose an error correction level</strong> so your code still scans if it&apos;s
          partly covered or damaged.
        </li>
        <li>
          <strong>Download as PNG or SVG</strong> at the size you need, from a social post to a
          printed poster.
        </li>
      </ul>

      <h2>Your codes are yours</h2>
      <p>
        The QR codes made here are <strong>static</strong>: your link is encoded directly into the
        pattern rather than sent through a redirect service. That means there&apos;s nothing to
        expire, no subscription keeping your code alive, and it will keep working for as long as the
        page it points to exists. The code is generated right in your browser.
      </p>

      <h2>New to QR codes?</h2>
      <p>
        If you&apos;re curious about how they work, or who invented them, read{' '}
        <Link href='/what-is-a-qr-code'>What is a QR code?</Link> for a short history, a look at how
        they work, and tips for making codes that scan reliably.
      </p>

      <h2>Who&apos;s behind it</h2>
      <p>
        Free QR Gen is built and maintained by Aidan Lowson. The project is open source under the
        MIT licence, and you can find the code on{' '}
        <a
          href='https://github.com/AidanLDev/free-qr-gen'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
        .
      </p>
      <p>Found a bug or have an idea? Use the feedback link at the bottom of the page.</p>

      <p className='mt-10'>
        <Link href='/'>Create your free QR code →</Link>
      </p>
    </ContentPage>
  )
}
