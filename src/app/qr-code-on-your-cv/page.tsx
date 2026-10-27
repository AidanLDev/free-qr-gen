import Link from '@/app/components/Link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-code-on-your-cv'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'Is it professional to put a QR code on a CV?',
    answer:
      'Yes, if it points somewhere useful, like a portfolio or a profile with more detail. Keep it small and tidy, and make sure the CV still works on its own for anyone who never scans it.',
  },
  {
    question: 'Will applicant tracking systems read the QR code?',
    answer:
      'No. Applicant tracking systems read the text of your CV, not images. Always write your links and contact details out in full as well, so nothing is lost.',
  },
  {
    question: 'What size should a QR code be on a CV?',
    answer:
      'Around 2 to 2.5 cm square is plenty for a page that is held in the hand or read on screen. Put it in the header or next to your contact details.',
  },
  {
    question: 'Does the QR code work if my CV is read on screen?',
    answer:
      'A recruiter can scan it from the screen with their phone, but most will just click a link. Add a clickable link next to the code in the PDF so both options work.',
  },
  {
    question: 'Can I change where the QR code goes after I send my CV?',
    answer:
      'Not with a static code, which is what Free QR Gen makes. Point it at a page you control, like your own website, and update the page instead of the code.',
  },
]

const sections = [
  { id: 'when', label: 'When a QR code helps and when it doesn’t' },
  { id: 'what-to-link', label: 'What to link to' },
  { id: 'steps', label: 'Add a QR code to your CV in 4 steps' },
  { id: 'placement', label: 'Where to put it and how big' },
  { id: 'checklist', label: 'Final checklist before you send' },
]

export default function CVQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='A CV has a page or two to sell you, and most of what you have made does not fit. A small QR code can lead a recruiter to your portfolio, projects or contact card in one scan. Done badly, it wastes space and looks like a gimmick. Here is how to tell which, and how to add one properly.'
      sections={sections}
      faqs={faqs}
      about={[{ name: 'Résumé', sameAs: 'https://en.wikipedia.org/wiki/R%C3%A9sum%C3%A9' }]}
      cta={{ href: '/', label: 'Create your CV QR code now, free' }}
    >
      <h2 id='when'>When a QR code helps and when it doesn&apos;t</h2>
      <p>
        A QR code earns its place when the CV is likely to be printed and you have more to show:
      </p>
      <ul>
        <li>
          <strong>Creative and technical roles.</strong> Designers, photographers, developers and
          architects can link to work that a page of text can&apos;t show.
        </li>
        <li>
          <strong>Careers fairs and interviews.</strong> A printed CV handed over in person is
          exactly where a scan beats typing a long web address.
        </li>
        <li>
          <strong>Speculative applications</strong> left with a shop, salon or restaurant, where the
          manager reads it on paper.
        </li>
      </ul>
      <p>
        It adds little if your CV is only ever uploaded to online job boards. They read the text and
        ignore images, so make sure your links are written out as text too.
      </p>

      <h2 id='what-to-link'>What to link to</h2>
      <ul>
        <li>
          <strong>Your portfolio or personal website.</strong> The most useful choice for most
          people, because it shows your work and you can keep it up to date. Use the{' '}
          <Link href='/'>free URL QR code generator</Link>.
        </li>
        <li>
          <strong>Your LinkedIn or GitHub profile</strong>, if that is where your experience and
          recommendations live.
        </li>
        <li>
          <strong>Your contact details.</strong> A{' '}
          <Link href='/vcard-qr-code-generator'>contact card (vCard) QR code</Link> lets a recruiter
          save your name, number and email in one scan, ready to call you about an interview.
        </li>
      </ul>
      <p>
        Pick one. Two or three codes on one CV look cluttered, and the recruiter has to guess which
        to scan.
      </p>

      <h2 id='steps'>Add a QR code to your CV in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          <strong>Check the destination on a phone.</strong> Your portfolio should load quickly and
          read well on a small screen, because that is where a scan lands.
        </li>
        <li>
          Paste the link into the <Link href='/'>QR code generator</Link>, or fill in the{' '}
          <Link href='/vcard-qr-code-generator'>vCard generator</Link> for a contact card.
        </li>
        <li>
          <strong>Keep it plain.</strong> Black on white, or a dark accent colour that matches your
          CV. Skip the logo: at this size it only makes the code harder to read.
        </li>
        <li>
          <strong>Download an SVG</strong> if your CV editor accepts it, so the code stays sharp
          when printed. Otherwise download a large PNG and scale it down.
        </li>
      </ol>

      <h2 id='placement'>Where to put it and how big</h2>
      <ul>
        <li>
          <strong>Top right, in the header</strong>, next to your name and contact details, keeps it
          with the other ways to reach you.
        </li>
        <li>
          <strong>Around 2 to 2.5 cm square</strong> is plenty. Any bigger and it starts taking
          space from your experience.
        </li>
        <li>
          <strong>Add a few words underneath</strong>, like &quot;Portfolio&quot; or &quot;Save my
          contact&quot;, so the reader knows what they will get.
        </li>
        <li>
          <strong>Write the link out as well.</strong> A short, readable address like
          janesmith.design next to the code covers anyone who would rather type or click.
        </li>
      </ul>

      <h2 id='checklist'>Final checklist before you send</h2>
      <ul>
        <li>
          <strong>Print a copy and scan it</strong> with your phone, from the distance someone would
          hold the page.
        </li>
        <li>
          <strong>Check the link uses your own address</strong> and not a short link from a QR site
          that might expire. See{' '}
          <Link href='/why-did-my-qr-code-stop-working'>why QR codes stop working</Link>.
        </li>
        <li>
          <strong>Make sure the page is public.</strong> Open it in a private browser window to
          check it doesn&apos;t ask for a login.
        </li>
      </ul>
      <p>
        Want the same details on a business card? Read{' '}
        <Link href='/qr-code-for-business-cards'>how to put a QR code on your business card</Link>.
      </p>
    </GuidePage>
  )
}
