import Link from 'next/link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-code-for-customer-feedback'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'Should feedback go to email or a review site?',
    answer:
      'Both have a place. Email is private, so customers tell you what went wrong. A review site is public and helps you win new customers. Many businesses offer both, labelled clearly.',
  },
  {
    question: 'Can feedback be anonymous with an email QR code?',
    answer:
      'No. The email comes from the customer’s own address. If you want anonymous feedback, link a QR code to a survey form that does not collect names or emails.',
  },
  {
    question: 'What should the pre-filled subject say?',
    answer:
      'Something you can filter on, like “Feedback: Market Street shop”. Use a different subject for each location or channel so you can see where feedback comes from.',
  },
  {
    question: 'Does the email send automatically when scanned?',
    answer:
      'No. Scanning opens a new email with your address and subject filled in. The customer writes their feedback and chooses whether to send it.',
  },
]

const sections = [
  { id: 'why', label: 'Why ask for feedback with a QR code' },
  { id: 'which-code', label: 'Email, survey or review page?' },
  { id: 'steps', label: 'Make a feedback QR code in 4 steps' },
  { id: 'wording', label: 'Wording that gets replies' },
  { id: 'where', label: 'Where to put it' },
]

export default function CustomerFeedbackQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='Plenty of customers who have a problem never tell you. They just don’t come back. A QR code on the receipt, table or packaging gives them an easy, private way to speak up, and gives happy customers a nudge to leave a review. This guide covers which kind of code to use and how to word it so people actually reply.'
      sections={sections}
      faqs={faqs}
      about={[
        {
          name: 'Customer satisfaction',
          sameAs: 'https://en.wikipedia.org/wiki/Customer_satisfaction',
        },
      ]}
      cta={{ href: '/email-qr-code-generator', label: 'Create your feedback QR code now, free' }}
    >
      <h2 id='why'>Why ask for feedback with a QR code</h2>
      <ul>
        <li>
          <strong>It catches people in the moment.</strong> A code on the table or receipt asks
          while the experience is fresh, not days later in an email they won&apos;t open.
        </li>
        <li>
          <strong>It&apos;s private.</strong> Customers who would never complain to a member of
          staff will often write a short email.
        </li>
        <li>
          <strong>Nothing to set up.</strong> An email code needs no survey software, no account and
          no subscription.
        </li>
      </ul>

      <h2 id='which-code'>Email, survey or review page?</h2>
      <ul>
        <li>
          <strong>Email</strong> is the simplest. An{' '}
          <Link href='/email-qr-code-generator'>email QR code</Link> opens a new message to your
          feedback address with the subject already filled in. You get a real reply you can answer,
          and you can fix the problem.
        </li>
        <li>
          <strong>A survey</strong> works if you want the same questions answered by everyone, or
          anonymous answers. Make the survey with a form tool, then point a{' '}
          <Link href='/'>link QR code</Link> at it.
        </li>
        <li>
          <strong>A review page</strong>, such as your Google or Tripadvisor review link, is for
          happy customers. A link QR code takes them straight to the review box.
        </li>
      </ul>
      <p>
        A common setup is two codes side by side, with a clear gap between them: &quot;Something not
        right? Tell us privately&quot; with an email code, and &quot;Enjoyed your visit? Leave us a
        review&quot; with a review link.
      </p>

      <h2 id='steps'>Make a feedback QR code in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          Open the <Link href='/email-qr-code-generator'>email QR code generator</Link> and enter
          the address you want feedback sent to. A shared inbox like feedback@ is easier to manage
          than a personal address.
        </li>
        <li>
          <strong>Add a subject</strong> such as &quot;Feedback: Market Street shop&quot;, and
          optionally a starter message like &quot;My visit on [date]:&quot;.
        </li>
        <li>
          <strong>Brand it</strong> with your colours and logo, keeping the code dark on a light
          background.
        </li>
        <li>
          <strong>Download and test.</strong> Scan it on your phone and check the email opens with
          the right address and subject.
        </li>
      </ol>

      <h2 id='wording'>Wording that gets replies</h2>
      <ul>
        <li>
          <strong>Ask a question, not a favour.</strong> &quot;How did we do?&quot; works better
          than &quot;Please give us feedback&quot;.
        </li>
        <li>
          <strong>Say who reads it.</strong> &quot;Goes straight to the owner&quot; tells people
          their email won&apos;t vanish.
        </li>
        <li>
          <strong>Keep the pre-filled message short.</strong> A line to start them off is enough. A
          long template feels like a form.
        </li>
        <li>
          <strong>Reply to every email.</strong> A quick personal reply turns a complaint into a
          customer who comes back.
        </li>
      </ul>

      <h2 id='where'>Where to put it</h2>
      <ul>
        <li>
          <strong>Receipts and invoices</strong>, printed at the bottom.
        </li>
        <li>
          <strong>Table stands and counters</strong> in cafés, restaurants and shops. Pair it with a{' '}
          <Link href='/qr-code-for-restaurant-menu'>menu QR code</Link> on the same stand.
        </li>
        <li>
          <strong>Packaging and delivery notes</strong>, for online orders. See{' '}
          <Link href='/qr-codes-on-product-packaging'>QR codes on product packaging</Link>.
        </li>
        <li>
          <strong>Hotel rooms and holiday lets</strong>, in the welcome book, so guests tell you
          about the broken kettle before they write a review.
        </li>
      </ul>
    </GuidePage>
  )
}
