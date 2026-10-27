import Link from '@/app/components/Link'
import React from 'react'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-code-treasure-hunt'

export const metadata = guideMetadata(path)

const faqs = [
  {
    question: 'Do QR code treasure hunts need the internet?',
    answer:
      'Not if you use text QR codes. The clue is stored in the code, so it shows with no signal at all. Location codes and links do need a connection to open the map or page.',
  },
  {
    question: 'Which phones can play?',
    answer:
      'Any smartphone with a camera that reads QR codes, which is almost all iPhones and Android phones from the last several years. If a camera only shows a preview of the text, tap it or use a free scanner app to see the whole clue.',
  },
  {
    question: 'How do I stop players skipping ahead?',
    answer:
      'Hide each code where the previous clue says, and do not number the codes on the outside. Players only find the next code by solving the clue in front of them.',
  },
  {
    question: 'How long should each clue be?',
    answer:
      'A sentence or two. Short text makes a small, easy-to-scan code. If you need a long story, split it across several codes.',
  },
]

const sections = [
  { id: 'why', label: 'Why use QR codes for a treasure hunt' },
  { id: 'plan', label: 'Plan your hunt' },
  { id: 'steps', label: 'Make your clues in 4 steps' },
  { id: 'ideas', label: 'Hunt ideas by age and occasion' },
  { id: 'hiding', label: 'Printing and hiding the codes' },
]

export default function TreasureHuntQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='A QR code treasure hunt hides each clue inside a code, so players have to find it and scan it to know where to go next. It works for a child’s birthday in the garden, a school trip, a team-building day or a night in an escape room. This guide shows how to plan one, make the clues for free and hide codes that survive the weather.'
      sections={sections}
      faqs={faqs}
      about={[{ name: 'Scavenger hunt', sameAs: 'https://en.wikipedia.org/wiki/Scavenger_hunt' }]}
      cta={{ href: '/text-qr-code-generator', label: 'Create your treasure hunt clues now, free' }}
    >
      <h2 id='why'>Why use QR codes for a treasure hunt</h2>
      <ul>
        <li>
          <strong>Clues stay secret.</strong> Nobody can read ahead, because the clue only appears
          when the code is scanned.
        </li>
        <li>
          <strong>Works with no signal.</strong> A{' '}
          <Link href='/text-qr-code-generator'>text QR code</Link> stores the clue in the code
          itself, which is perfect for parks, woods and basements.
        </li>
        <li>
          <strong>Easy to reset.</strong> Print another set and you can run the same hunt again next
          year.
        </li>
      </ul>

      <h2 id='plan'>Plan your hunt</h2>
      <ul>
        <li>
          <strong>Walk the route first</strong> and pick 6 to 10 hiding spots. Fewer for young
          children, more for adults.
        </li>
        <li>
          <strong>Write each clue to point to the next spot</strong>, ending at the prize. Write
          them in a list before you make any codes.
        </li>
        <li>
          <strong>Decide how players scan.</strong> One phone per team keeps groups together, and
          means you need fewer phones for children.
        </li>
        <li>
          <strong>Ask permission</strong> before hiding anything in shops, churches, parks or other
          people&apos;s property.
        </li>
      </ul>

      <h2 id='steps'>Make your clues in 4 steps</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          Open the <Link href='/text-qr-code-generator'>text QR code generator</Link> and type your
          first clue, like &quot;I&apos;m cold inside, but hold your favourite snack. Look in the
          freezer.&quot;
        </li>
        <li>
          <strong>Download a PNG</strong> and give it a name you&apos;ll recognise, like
          clue-1-freezer.png. Then type the next clue and repeat.
        </li>
        <li>
          <strong>For a stop out in the world</strong>, make a{' '}
          <Link href='/location-qr-code-generator'>location QR code</Link> that opens the spot in
          Google Maps. Coordinates work well for a particular tree or bench.
        </li>
        <li>
          <strong>Scan every code in order</strong> before you print, to check the clues make sense
          and the trail ends at the prize.
        </li>
      </ol>

      <h2 id='ideas'>Hunt ideas by age and occasion</h2>
      <ul>
        <li>
          <strong>Young children:</strong> short picture clues (&quot;Look under the 🛁&quot;) and a
          grown-up holding the phone. Emoji work in text codes.
        </li>
        <li>
          <strong>Birthday parties:</strong> end at the cake or the party bags, with one clue per
          guest so everyone gets a turn scanning.
        </li>
        <li>
          <strong>Schools and clubs:</strong> make each code a question, like a maths problem or a
          history fact, and its answer points to the next spot.
        </li>
        <li>
          <strong>Team days and stag or hen parties:</strong> a city route with location codes, with
          challenges like taking a team photo at each stop.
        </li>
        <li>
          <strong>Escape rooms:</strong> hide a code inside a locked box, behind a picture or on the
          back of a jigsaw, so it can only be scanned once the puzzle is solved.
        </li>
        <li>
          <strong>Easter egg hunts:</strong> a code on each egg with the next hiding place.
        </li>
      </ul>

      <h2 id='hiding'>Printing and hiding the codes</h2>
      <ul>
        <li>
          <strong>Print each code at least 4 x 4 cm</strong>, larger if players scan from a
          distance. Leave a white border around it.
        </li>
        <li>
          <strong>Use matt laminating pouches or a clear freezer bag</strong> outdoors. Glossy
          lamination reflects the sun and makes codes hard to scan.
        </li>
        <li>
          <strong>Set error correction to High</strong>, so a code still scans if it gets a bit
          muddy or creased.
        </li>
        <li>
          <strong>Hide codes at a child&apos;s height</strong> for young players, and never near
          roads or water.
        </li>
        <li>
          <strong>Keep a master list</strong> of where each code is hidden, so you can collect them
          all afterwards.
        </li>
      </ul>
    </GuidePage>
  )
}
