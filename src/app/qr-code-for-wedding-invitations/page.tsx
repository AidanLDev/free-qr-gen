import Link from '@/app/components/Link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-code-for-wedding-invitations'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'Is it tacky to put a QR code on a wedding invitation?',
    answer:
      'Not if it is small and useful. Many couples put it on a separate details card or the back of the invitation, so the main design stays traditional.',
  },
  {
    question: 'What size should a QR code be on an invitation?',
    answer:
      'About 2 to 2.5 cm square is plenty for a card held in the hand. Leave a clear border around it, and make it a little bigger if the code holds a long link.',
  },
  {
    question: 'Will older guests be able to use it?',
    answer:
      'Most will, since phone cameras read QR codes without an app. Still print the venue address, RSVP details and website in text, so nobody is left out.',
  },
  {
    question: 'Can I use gold or rose gold for the QR code?',
    answer:
      'Metallic foil often reflects too much light to scan. Use a dark printed colour for the code, like navy, forest green or black, and keep the foil for the rest of the design.',
  },
  {
    question: 'Will the QR code still work after the wedding?',
    answer:
      'Yes. Codes made with Free QR Gen never expire. A wedding website code works for as long as the website stays online, so guests can find your photos later.',
  },
]

const sections = [
  { id: 'why', label: 'Why add a QR code to your invitations' },
  { id: 'which-code', label: 'Directions, RSVP or wedding website' },
  { id: 'steps', label: 'Make your wedding QR codes in 4 steps' },
  { id: 'design', label: 'Design and printing tips' },
  { id: 'on-the-day', label: 'QR codes on the day' },
]

export default function WeddingInvitationQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='Wedding invitations have a lot to fit in: the venue, the timings, the RSVP and where to stay, all on one elegant card. A small QR code can carry the practical details, from directions to the venue’s car park to a ready-to-send RSVP, so the invitation itself stays beautiful. Here is which code to use for each job and how to print it so it scans.'
      sections={sections}
      faqs={faqs}
      about={[
        { name: 'Wedding invitation', sameAs: 'https://en.wikipedia.org/wiki/Wedding_invitation' },
      ]}
      cta={{ href: '/location-qr-code-generator', label: 'Create your wedding QR code now, free' }}
    >
      <h2 id='why'>Why add a QR code to your invitations</h2>
      <ul>
        <li>
          <strong>No lost guests.</strong> Countryside venues and hotels often have entrances that
          sat navs get wrong. A code can drop guests at the exact gate.
        </li>
        <li>
          <strong>Easier RSVPs.</strong> Guests reply on the spot instead of putting the card on the
          mantelpiece and forgetting.
        </li>
        <li>
          <strong>Room for everything else.</strong> Accommodation, the dress code, the gift list
          and the day&apos;s timings can live on your wedding website.
        </li>
      </ul>

      <h2 id='which-code'>Directions, RSVP or wedding website</h2>
      <ul>
        <li>
          <strong>Directions:</strong> a{' '}
          <Link href='/location-qr-code-generator'>location QR code</Link> opens the venue in Google
          Maps, ready to navigate. Use coordinates rather than the postcode if the entrance or car
          park is hard to find.
        </li>
        <li>
          <strong>RSVP by email:</strong> an{' '}
          <Link href='/email-qr-code-generator'>email QR code</Link> with the subject
          &quot;RSVP&quot; and a starter message like &quot;We&apos;d love to come! Names: … Dietary
          needs: …&quot;. Every reply lands under the same subject.
        </li>
        <li>
          <strong>Wedding website or RSVP form:</strong> a <Link href='/'>link QR code</Link> to
          your website or online RSVP form, for timings, accommodation and the gift list.
        </li>
      </ul>
      <p>
        One code per card works best. If you want two, put them on separate cards in the envelope,
        or on the front and back, each with its own label.
      </p>

      <h2 id='steps'>Make your wedding QR codes in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          <strong>Get the details right first.</strong> Check the venue pin by searching for it in
          Google Maps, and check your RSVP email address or website link.
        </li>
        <li>
          <strong>Make the code</strong> and set the colour to match your stationery, as long as it
          is dark on a light background. A small monogram in the centre works if you set error
          correction to Quartile or High.
        </li>
        <li>
          <strong>Download an SVG</strong> for your stationer or printer, so it stays crisp.
        </li>
        <li>
          <strong>Order a single proof</strong> and scan it with an iPhone and an Android phone
          before you print the full run.
        </li>
      </ol>

      <h2 id='design'>Design and printing tips</h2>
      <ul>
        <li>
          <strong>About 2 to 2.5 cm square</strong> on an invitation or details card, with a clear
          margin around it.
        </li>
        <li>
          <strong>Avoid foil, glitter and embossing on the code itself.</strong> Use flat print in a
          dark colour.
        </li>
        <li>
          <strong>Watch out for textured card.</strong> Heavy texture can break up the small
          squares. A smoother card for the details insert solves this.
        </li>
        <li>
          <strong>Label each code</strong>, like &quot;Scan for directions&quot; or &quot;Scan to
          RSVP&quot;, in your invitation font.
        </li>
        <li>
          <strong>Print the key details in text too:</strong> the venue address, RSVP date and
          website.
        </li>
      </ul>

      <h2 id='on-the-day'>QR codes on the day</h2>
      <ul>
        <li>
          <strong>Photo sharing:</strong> a link QR code on each table to a shared album, so you get
          guests&apos; photos.
        </li>
        <li>
          <strong>Guest WiFi</strong> at the venue. See{' '}
          <Link href='/how-to-share-wifi-with-a-qr-code'>how to share WiFi with a QR code</Link>.
        </li>
        <li>
          <strong>Taxis home:</strong> a{' '}
          <Link href='/phone-number-qr-code-generator'>phone number QR code</Link> for the local
          taxi firm, by the exit.
        </li>
      </ul>
    </GuidePage>
  )
}
