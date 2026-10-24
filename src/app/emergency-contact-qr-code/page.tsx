import Link from 'next/link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/emergency-contact-qr-code'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'What is an ICE QR code?',
    answer:
      'ICE stands for In Case of Emergency. An ICE QR code holds emergency contact details, and sometimes key medical notes, so a first aider or passer-by can call the right person quickly.',
  },
  {
    question: 'Will paramedics scan a QR code?',
    answer:
      'They might, but do not rely on it. Make sure the most important details are also written in plain text next to the code, and set up the emergency info on the phone itself as well.',
  },
  {
    question: 'Is it safe to put medical information in a QR code?',
    answer:
      'Anyone who scans it can read it, so only include what a stranger needs to help in an emergency, like a serious allergy or condition. Leave out anything you would not write on the card itself.',
  },
  {
    question: 'Does it need the internet?',
    answer:
      'No. A text or contact card code stores everything in the code itself, so it reads with no signal, which matters on hills, trails and underground.',
  },
  {
    question: 'How often should I update it?',
    answer:
      'Whenever a contact or medical detail changes. The code cannot be edited once printed, so make a new one. Checking it on the same day each year is a good habit.',
  },
]

const sections = [
  { id: 'who', label: 'Who an emergency QR code is for' },
  { id: 'what-to-include', label: 'What to include, and what to leave out' },
  { id: 'which-code', label: 'Text, contact card or call?' },
  { id: 'steps', label: 'Make an emergency contact QR code in 4 steps' },
  { id: 'where', label: 'Where to put it' },
  { id: 'phone', label: 'Set up the phone’s own emergency info too' },
]

export default function EmergencyContactQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='If someone is hurt, lost or confused, the people helping them need to know who to call. An emergency contact (ICE) QR code holds that information on a card, sticker or tag, readable by any phone with no signal needed. This guide covers what to put in it, what to leave out for privacy, and where it is most likely to be found.'
      sections={sections}
      faqs={faqs}
      about={[
        {
          name: 'In case of emergency',
          sameAs: 'https://en.wikipedia.org/wiki/In_Case_of_Emergency',
        },
      ]}
      cta={{ href: '/text-qr-code-generator', label: 'Create your emergency QR code now, free' }}
    >
      <h2 id='who'>Who an emergency QR code is for</h2>
      <ul>
        <li>
          <strong>Children</strong> on school trips, at festivals or in busy places, on a wristband
          or inside a coat.
        </li>
        <li>
          <strong>Older relatives</strong>, including people living with dementia, on a card in a
          wallet or a keyring.
        </li>
        <li>
          <strong>Cyclists, runners and walkers</strong>, on a helmet sticker or a tag on a bag
          strap.
        </li>
        <li>
          <strong>People with serious allergies or conditions</strong> like epilepsy or diabetes,
          alongside a medical ID bracelet.
        </li>
      </ul>

      <h2 id='what-to-include'>What to include, and what to leave out</h2>
      <p>Include what a stranger needs in the first few minutes:</p>
      <ul>
        <li>
          <strong>One or two emergency contacts</strong>, with names, relationship and numbers
          including the country code.
        </li>
        <li>
          <strong>Serious allergies, conditions or medicines</strong>, in plain words: &quot;Severe
          peanut allergy, EpiPen in left pocket&quot;.
        </li>
        <li>
          <strong>A first name</strong>, so helpers can talk to the person by name.
        </li>
      </ul>
      <p>Leave out anything a stranger shouldn&apos;t have:</p>
      <ul>
        <li>
          <strong>Home address</strong>, especially on children&apos;s items.
        </li>
        <li>
          <strong>Health service or insurance numbers</strong>, date of birth and full medical
          history.
        </li>
      </ul>
      <p>
        Anyone who finds the card can read the code, so treat it like information written on the
        outside of the card.
      </p>

      <h2 id='which-code'>Text, contact card or call?</h2>
      <ul>
        <li>
          <strong>Text (best for most):</strong> a{' '}
          <Link href='/text-qr-code-generator'>text QR code</Link> holds the contacts and medical
          notes in a few lines that show straight away. Start with the most important line, like
          &quot;ICE: call Mum, Sarah, +44 7700 900123&quot;, in case the phone only shows a preview.
        </li>
        <li>
          <strong>Contact card:</strong> a{' '}
          <Link href='/vcard-qr-code-generator'>vCard QR code</Link> saves the emergency contact to
          the helper&apos;s phone, labelled with the name you choose, like &quot;Sarah (Mum)&quot;.
        </li>
        <li>
          <strong>One-tap call:</strong> a{' '}
          <Link href='/phone-number-qr-code-generator'>phone number QR code</Link> offers to call
          the contact in one tap. It&apos;s the simplest option for young children and people who
          may be scanned by someone in a hurry.
        </li>
      </ul>

      <h2 id='steps'>Make an emergency contact QR code in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          <strong>Write the text first</strong> in a few short lines: ICE contacts, then medical
          notes, then the person&apos;s first name.
        </li>
        <li>
          Paste it into the <Link href='/text-qr-code-generator'>text QR code generator</Link>.
          Everything is created in your browser and nothing you type is sent to our servers.
        </li>
        <li>
          <strong>Keep it black on white</strong>, and set error correction to High for items that
          get worn, like keyrings and helmets.
        </li>
        <li>
          <strong>Download, print and scan</strong> the printed copy to check every line shows.
        </li>
      </ol>

      <h2 id='where'>Where to put it</h2>
      <ul>
        <li>
          <strong>A card in a wallet or phone case</strong>, labelled &quot;In case of emergency:
          scan me&quot;.
        </li>
        <li>
          <strong>Inside a child&apos;s coat or bag</strong>, or on a wristband for days out.
        </li>
        <li>
          <strong>On a bike helmet or bag strap.</strong>
        </li>
        <li>
          <strong>On the fridge</strong> for carers, babysitters and visiting relatives.
        </li>
      </ul>
      <p>
        Always write the main contact number in plain text beside the code as well, for anyone who
        doesn&apos;t think to scan.
      </p>

      <h2 id='phone'>Set up the phone&apos;s own emergency info too</h2>
      <p>
        iPhones have a Medical ID, set up in the Health app, and most Android phones have an
        Emergency information screen in Settings. Both can be shown from the lock screen. A QR code
        complements these: it still works when the phone is lost, broken or flat, and for people who
        don&apos;t carry a phone at all.
      </p>
      <p>
        Making one for a pet? See <Link href='/qr-code-for-pet-tags'>QR code pet tags</Link>.
      </p>
    </GuidePage>
  )
}
