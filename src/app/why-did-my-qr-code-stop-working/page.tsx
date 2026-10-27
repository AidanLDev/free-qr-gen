import { format, parseISO } from 'date-fns'
import Link from '@/app/components/Link'
import React from 'react'
import ContentPage from '../components/ContentPage'
import JsonLd, { faqPageJsonLd } from '../components/JsonLd'
import { siteUrl } from '../constants/constants'
import { getGuide } from '../lib/guides'
import { ogImage, pageMetadata } from '../lib/metadata'

const path = '/why-did-my-qr-code-stop-working'
// Title, description and dates live in lib/guides.ts
const { title, description, published, updated } = getGuide(path)

export const metadata = pageMetadata({ title, description, path, type: 'article' })

const faqs = [
  {
    question: 'Do QR codes expire?',
    answer:
      'A QR code itself cannot expire. It is just a pattern of squares. Static codes, which store your link directly, work forever. Dynamic codes store a short redirect link instead, and that redirect can be switched off when a free trial ends or a subscription lapses.',
  },
  {
    question: 'How do I know if my QR code is static or dynamic?',
    answer:
      'Scan it and look at the link your phone shows before you open it. If it is your own web address, the code is static. If it is a short link on the QR code company’s domain, the code is dynamic and depends on that company.',
  },
  {
    question: 'Can I fix a dynamic QR code that has been deactivated?',
    answer:
      'Only the company that made it can switch the redirect back on, usually by renewing the subscription. Otherwise, the printed codes need replacing. Make the replacements static so it cannot happen again.',
  },
  {
    question: 'Can I change where a static QR code points?',
    answer:
      'Not the code itself, but you can change the page it points to. Point the code at a page on your own website, such as yoursite.com/menu, and update that page whenever you like.',
  },
  {
    question: 'Are Free QR Gen codes static?',
    answer:
      'Yes. Every code is static: the link or details are stored in the code itself, with no redirect, no sign-up and no expiry date.',
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
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Free QR Gen', item: siteUrl },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Why QR codes stop working',
          item: `${siteUrl}${path}`,
        },
      ],
    },
    faqPageJsonLd(faqs),
  ],
}

const sections = [
  { id: 'check-first', label: 'Check this first' },
  { id: 'static-vs-dynamic', label: 'Static vs dynamic QR codes' },
  { id: 'causes', label: '7 reasons a QR code stops working' },
  { id: 'fix', label: 'How to fix it' },
  { id: 'never-again', label: 'How to make a QR code that never expires' },
  { id: 'faq', label: 'Frequently asked questions' },
]

export default function WhyQRCodeStoppedWorkingPage() {
  return (
    <ContentPage
      title='Why did my QR code stop working?'
      intro='A QR code that worked last month and now shows an error page, an “expired” message or nothing at all is frustrating, especially when it is already printed on hundreds of menus, flyers or business cards. Here is how to work out why, how to fix it, and how to make sure it never happens again.'
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

      <h2 id='check-first'>Check this first</h2>
      <p>
        Scan the code with your phone&apos;s camera and look closely at the link it shows{' '}
        <strong>before</strong> you tap it.
      </p>
      <ul>
        <li>
          <strong>It shows your own web address</strong>, like yourcafe.com/menu. The code is fine.
          The problem is the page it points to, or the way the code is printed. Jump to{' '}
          <a href='#causes'>the causes below</a>.
        </li>
        <li>
          <strong>It shows a short link on someone else&apos;s domain</strong>, usually the website
          you made the code on. You have a <strong>dynamic</strong> code, and the most likely cause
          is that the company behind it has switched the redirect off.
        </li>
        <li>
          <strong>Nothing happens at all.</strong> The phone cannot read the code. That points to a
          printing or design problem.
        </li>
      </ul>

      <h2 id='static-vs-dynamic'>Static vs dynamic QR codes</h2>
      <p>
        This is the single biggest reason QR codes &quot;expire&quot;, and most people never know
        which kind they made.
      </p>
      <h3>Static QR codes</h3>
      <p>
        A static code stores your link directly in the pattern of squares. A phone reads it and goes
        straight to your page. Nothing sits in the middle, so there is nothing that can be switched
        off. A static code works for as long as the page it points to exists.
      </p>
      <h3>Dynamic QR codes</h3>
      <p>
        A dynamic code stores a short link that belongs to the QR code company. When someone scans
        it, they go to the company&apos;s server first, which then forwards them to your page. That
        lets you change the destination and count scans, but it also means your code only works
        while that company keeps forwarding.
      </p>
      <p>
        Many QR code websites create dynamic codes by default, often on a free trial. When the trial
        ends or a subscription isn&apos;t renewed, the forwarding stops, and every printed code
        shows an error or an upgrade page instead of your content.{' '}
        <Link href='/what-is-a-qr-code'>How QR codes work</Link> explains the technology in more
        detail.
      </p>
      <div className='card mb-4 overflow-x-auto !p-0'>
        <table className='w-full text-left text-sm'>
          <thead className='border-b border-neutral-800 text-white'>
            <tr>
              <th className='p-3 font-semibold'></th>
              <th className='p-3 font-semibold'>Static</th>
              <th className='p-3 font-semibold'>Dynamic</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-neutral-800'>
            <tr>
              <td className='p-3 font-medium text-white'>Can it expire?</td>
              <td className='p-3'>No</td>
              <td className='p-3'>Yes, if the service stops forwarding</td>
            </tr>
            <tr>
              <td className='p-3 font-medium text-white'>Change the destination later?</td>
              <td className='p-3'>Change the page, not the code</td>
              <td className='p-3'>Yes, while subscribed</td>
            </tr>
            <tr>
              <td className='p-3 font-medium text-white'>Scan counting</td>
              <td className='p-3'>Through your own analytics</td>
              <td className='p-3'>Built in</td>
            </tr>
            <tr>
              <td className='p-3 font-medium text-white'>Cost</td>
              <td className='p-3'>Free</td>
              <td className='p-3'>Usually a monthly subscription</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id='causes'>7 reasons a QR code stops working</h2>
      <h3>1. A free trial or subscription ended</h3>
      <p>
        The most common cause for dynamic codes. The code itself is fine, but the redirect behind it
        has been turned off.
      </p>
      <h3>2. The page it points to moved or was deleted</h3>
      <p>
        A website redesign, a renamed page or a new menu PDF uploaded under a different name all
        break the link. File-sharing services often create a brand new link every time you upload a
        new version.
      </p>
      <h3>3. Sharing settings changed</h3>
      <p>
        Codes pointing to Google Drive, Dropbox or OneDrive files stop working for the public if the
        file is set back to private. Check the file is shared with &quot;Anyone with the link&quot;.
      </p>
      <h3>4. The domain expired</h3>
      <p>
        If the website&apos;s domain name wasn&apos;t renewed, every link on it, and every QR code
        pointing to it, stops working at once.
      </p>
      <h3>5. It&apos;s printed too small or too low in contrast</h3>
      <p>
        A code should be at least a tenth of the distance it is scanned from, and never smaller than
        2 x 2 cm. Pale colours, a light code on a dark background, glossy lamination and busy
        backgrounds can all stop phones reading it.
      </p>
      <h3>6. The margin was cropped or the logo is too big</h3>
      <p>
        Scanners need the empty border around the code to find it. A large logo can hide more of the
        code than error correction can recover. Keep logos to around 20% of the code&apos;s width
        and use High error correction.
      </p>
      <h3>7. It&apos;s damaged</h3>
      <p>
        Scratches, fading, creases and dirt build up on codes outdoors and on tables. Error
        correction can only fill in so much.
      </p>

      <h2 id='fix'>How to fix it</h2>
      <ul>
        <li>
          <strong>Dynamic code switched off:</strong> renewing with the original company is the only
          way to bring the printed codes back. If you would rather not pay, replace the codes with
          static ones.
        </li>
        <li>
          <strong>Broken link:</strong> put the page back at the same address, or set up a redirect
          from the old address to the new one on your website. The printed codes will start working
          again straight away.
        </li>
        <li>
          <strong>Printing or design problem:</strong> make a new code with dark-on-light colours, a
          smaller logo and High error correction, print it bigger on matt paper, and test it on an
          iPhone and an Android phone before printing the rest.
        </li>
      </ul>

      <h2 id='never-again'>How to make a QR code that never expires</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          <strong>Use a static code.</strong> Every code made with the{' '}
          <Link href='/'>Free QR Gen generator</Link> is static, with no sign-up, no trial and no
          expiry date.
        </li>
        <li>
          <strong>Point it at an address you control</strong>, like yoursite.com/menu, rather than a
          file-sharing link. You get the main benefit of a dynamic code, changing what people see,
          without paying anyone or depending on another company.
        </li>
        <li>
          <strong>Track scans yourself</strong> if you need to, by adding a tag such as
          ?utm_source=qr-poster to the link and checking your website analytics.
        </li>
        <li>
          <strong>Test before you print</strong>, at the final size, in the place it will be used.
        </li>
      </ol>
      <p>
        Not every code needs a link either. <Link href='/wifi-qr-code-generator'>WiFi</Link>,{' '}
        <Link href='/vcard-qr-code-generator'>contact card</Link> and{' '}
        <Link href='/text-qr-code-generator'>text</Link> QR codes store everything in the code
        itself, so they work even with no internet connection.
      </p>

      <h2 id='faq'>Frequently asked questions</h2>
      {faqs.map(({ question, answer }) => (
        <React.Fragment key={question}>
          <h3>{question}</h3>
          <p>{answer}</p>
        </React.Fragment>
      ))}

      <p className='mt-10'>
        <Link href='/'>Make a free QR code that never expires →</Link>
      </p>

      <p className='mt-10 text-sm text-neutral-500'>
        QR Code is a registered trademark of DENSO WAVE INCORPORATED.
      </p>
    </ContentPage>
  )
}
