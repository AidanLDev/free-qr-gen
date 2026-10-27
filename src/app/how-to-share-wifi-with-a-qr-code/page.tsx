import { format, parseISO } from 'date-fns'
import Link from '@/app/components/Link'
import React from 'react'
import ContentPage from '../components/ContentPage'
import JsonLd, { faqPageJsonLd } from '../components/JsonLd'
import { siteUrl } from '../constants/constants'
import { getGuide } from '../lib/guides'
import { ogImage, pageMetadata } from '../lib/metadata'

const path = '/how-to-share-wifi-with-a-qr-code'
// Title, description and dates live in lib/guides.ts
const { title, description, published, updated } = getGuide(path)

export const metadata = pageMetadata({ title, description, path, type: 'article' })

const faqs = [
  {
    question: 'Can iPhones scan WiFi QR codes?',
    answer:
      'Yes. iPhones running iOS 11 or later read WiFi QR codes straight from the Camera app and show a prompt to join the network.',
  },
  {
    question: 'Can Android phones scan WiFi QR codes?',
    answer:
      'Yes. Most Android phones join from the camera app or Google Lens. You can also scan from the WiFi settings screen on many phones, using the QR icon next to Add network.',
  },
  {
    question: 'What happens if I change my WiFi password?',
    answer:
      'Printed codes stop working, because the old password is stored in them. Make a new code with the new password and swap the printed copies.',
  },
  {
    question: 'Can I share WiFi with a QR code without printing it?',
    answer:
      'Yes. Save the PNG to your phone and show it on screen, or add it to a digital welcome guide or booking confirmation email.',
  },
  {
    question: 'Is it free?',
    answer:
      'Yes. Free QR Gen is free with no sign-up and no watermark, and WiFi codes never expire.',
  },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: title,
      description,
      url: `${siteUrl}${path}`,
      mainEntityOfPage: `${siteUrl}${path}`,
      inLanguage: 'en-GB',
      datePublished: published,
      dateModified: updated,
      image: ogImage.url,
      author: { '@type': 'Person', name: 'Aidan Lowson', url: `${siteUrl}/about` },
      publisher: {
        '@type': 'Organization',
        name: 'Free QR Gen',
        url: siteUrl,
        logo: { '@type': 'ImageObject', url: `${siteUrl}/FreeQRGenLogo.png` },
      },
      about: [
        { '@type': 'Thing', name: 'QR code', sameAs: 'https://en.wikipedia.org/wiki/QR_code' },
        { '@type': 'Thing', name: 'Wi-Fi', sameAs: 'https://en.wikipedia.org/wiki/Wi-Fi' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Free QR Gen', item: siteUrl },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Share WiFi with a QR code',
          item: `${siteUrl}${path}`,
        },
      ],
    },
    faqPageJsonLd(faqs),
  ],
}

const sections = [
  { id: 'why', label: 'Why share WiFi with a QR code' },
  { id: 'what-you-need', label: 'What you need' },
  { id: 'steps', label: 'Make your WiFi QR code in 4 steps' },
  { id: 'sign', label: 'Make a WiFi sign that works' },
  { id: 'where', label: 'Where to put it' },
  { id: 'security', label: 'Keep your network safe' },
  { id: 'faq', label: 'Frequently asked questions' },
]

export default function ShareWifiQRCodePage() {
  return (
    <ContentPage
      title='How to share your WiFi with a QR code'
      intro='Spelling out a long WiFi password, or turning the router over to read the sticker, gets old fast. A WiFi QR code lets anyone join your network by pointing their phone camera at it. This guide covers making one for free, printing a sign that works, and keeping your network secure.'
    >
      <JsonLd data={articleJsonLd} />

      <p className='!mb-0 mt-4 text-sm text-neutral-500'>
        By <Link href='/about'>Aidan Lowson</Link> · Updated{' '}
        <time dateTime={updated}>{format(parseISO(updated), 'd MMMM yyyy')}</time>
      </p>

      <nav aria-label='On this page' className='card mt-8'>
        <p className='section-title mb-3'>On this page</p>
        <ul className='!mb-0 !list-none !space-y-1.5 !pl-0'>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <h2 id='why'>Why share WiFi with a QR code</h2>
      <ul>
        <li>
          <strong>No typos.</strong> Long, random passwords are the secure choice, and the most
          annoying to type. A QR code types it perfectly every time.
        </li>
        <li>
          <strong>No interruptions.</strong> Guests, customers and visitors help themselves instead
          of asking you or your staff.
        </li>
        <li>
          <strong>It works on almost every phone.</strong> iPhones and most Android phones can join
          straight from the camera app, with no extra app to install.
        </li>
      </ul>

      <h2 id='what-you-need'>What you need</h2>
      <ul>
        <li>
          <strong>Your network name (SSID)</strong>, exactly as it appears in your phone&apos;s WiFi
          list, including capitals and spaces.
        </li>
        <li>
          <strong>Your WiFi password.</strong> It&apos;s usually on a sticker on the router if you
          have never changed it.
        </li>
        <li>
          <strong>Your security type.</strong> Almost every router today uses WPA2 or WPA3. If you
          don&apos;t know, it&apos;s almost certainly one of those.
        </li>
      </ul>

      <h2 id='steps'>Make your WiFi QR code in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          Open the <Link href='/wifi-qr-code-generator'>free WiFi QR code generator</Link>.
        </li>
        <li>
          Enter your <strong>network name</strong> and <strong>password</strong>, and leave security
          on WPA / WPA2 / WPA3 unless your router says otherwise. Tick{' '}
          <strong>Hidden network</strong> only if your network doesn&apos;t show up in the WiFi
          list.
        </li>
        <li>
          <strong>Add your style</strong> if you want to: brand colours for a café, or a logo for a
          holiday let. Keep the code dark on a light background so every phone can read it.
        </li>
        <li>
          <strong>Download</strong> a PNG to print at home, or an SVG for a professional printer.
          Then scan it with your own phone to check it joins.
        </li>
      </ol>
      <p>
        The code is created entirely in your browser. Your network name and password are never sent
        to our servers.
      </p>

      <h2 id='sign'>Make a WiFi sign that works</h2>
      <ul>
        <li>
          <strong>Say what it is.</strong> A heading like &quot;Scan to join our WiFi&quot; tells
          people what the code does.
        </li>
        <li>
          <strong>Print the details underneath too.</strong> Add the network name and password in
          text for laptops, older phones and anyone who&apos;d rather type.
        </li>
        <li>
          <strong>Print it at least 3 x 3 cm</strong> for a table or fridge. For a wall sign read
          from a couple of metres away, go for 15 x 15 cm or more.
        </li>
        <li>
          <strong>Use matt paper or a matt frame.</strong> Glossy lamination reflects lights and
          makes the code harder to scan.
        </li>
      </ul>

      <h2 id='where'>Where to put it</h2>
      <ul>
        <li>
          <strong>Holiday lets and Airbnbs:</strong> the welcome book, the fridge or by the front
          door. You can also put the image in your check-in message.
        </li>
        <li>
          <strong>Cafés and restaurants:</strong> table stands, the counter, or on the back of the
          menu. Pair it with a{' '}
          <Link href='/qr-code-for-restaurant-menu'>QR code for your menu</Link>.
        </li>
        <li>
          <strong>Offices:</strong> reception, meeting rooms and the kitchen, for the guest network.
        </li>
        <li>
          <strong>At home:</strong> inside a kitchen cupboard door or on the router itself.
        </li>
      </ul>

      <h2 id='security'>Keep your network safe</h2>
      <p>
        A WiFi QR code is exactly as private as the password written on a note: anyone who can scan
        it can join, and many phones can show the password once connected. So:
      </p>
      <ul>
        <li>
          <strong>Use a guest network in public places.</strong> Most routers can run a separate
          guest network that keeps visitors away from your own devices. Share that one, not your
          main network.
        </li>
        <li>
          <strong>Change the password after a change of staff or tenants</strong>, then print a new
          code. The old one stops working as soon as the password changes.
        </li>
        <li>
          <strong>Keep codes for private networks private.</strong> Don&apos;t put your home
          network&apos;s code in a window or a public post.
        </li>
      </ul>

      <h2 id='faq'>Frequently asked questions</h2>
      {faqs.map(({ question, answer }) => (
        <React.Fragment key={question}>
          <h3>{question}</h3>
          <p>{answer}</p>
        </React.Fragment>
      ))}

      <p className='mt-10'>
        <Link href='/wifi-qr-code-generator'>Create your WiFi QR code now, free →</Link>
      </p>

      <p className='mt-10 text-sm text-neutral-500'>
        QR Code is a registered trademark of DENSO WAVE INCORPORATED.
      </p>
    </ContentPage>
  )
}
