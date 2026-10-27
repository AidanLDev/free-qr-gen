import { format, parseISO } from 'date-fns'
import Link from '@/app/components/Link'
import React from 'react'
import ArticleFigure from '../components/ArticleFigure'
import ContentPage from '../components/ContentPage'
import JsonLd from '../components/JsonLd'
import { siteUrl } from '../constants/constants'
import { getGuide } from '../lib/guides'
import { pageMetadata } from '../lib/metadata'

const path = '/qr-code-for-restaurant-menu'
// Title, description and dates live in lib/guides.ts
const { title, description, published, updated } = getGuide(path)

// Images live in /public/guide-images/restaurant-qr-code/
const imageDir = '/guide-images/restaurant-qr-code'

const images = {
  hero: {
    src: `${imageDir}/hero-table-qr-menu.webp`,
    alt: 'A warmly lit restaurant table by a window, with a QR code menu card in a stand',
    width: 1199,
    height: 900,
  },
  menuOnline: {
    src: `${imageDir}/menu-online.webp`,
    alt: 'A diner holding a phone showing a restaurant menu web page at a wooden table',
    width: 1264,
    height: 848,
    caption:
      'The Copper Pot keeps its menu on a mobile-friendly web page, with bookings and directions one tap away.',
  },
  generator: {
    src: `${imageDir}/generator-menu-url.webp`,
    alt: 'Free QR Gen with a menu link entered, a dark green code on a cream background and a copper pot logo in the centre',
    width: 2400,
    height: 1600,
    caption: 'Paste your menu link, then set your brand colours and logo.',
  },
  download: {
    src: `${imageDir}/download-png-svg.webp`,
    alt: 'Free QR Gen download size presets with Download PNG and SVG buttons',
    width: 2400,
    height: 1200,
    caption: 'Choose a size, then download as PNG or SVG.',
  },
  testing: {
    src: `${imageDir}/testing-scan.webp`,
    alt: 'A phone camera scanning a QR code on a wooden table stand in a restaurant',
    width: 1264,
    height: 848,
    caption: 'Test the printed code at the table, in your own lighting, before you print the rest.',
  },
  placements: {
    src: `${imageDir}/placement-ideas.webp`,
    alt: 'Restaurant QR codes on a table stand, a front window, a receipt and a counter stand by the till',
    width: 1376,
    height: 768,
    caption: 'Put your code wherever people wait: the table, the window, the receipt and the till.',
  },
}

export const metadata = pageMetadata({
  title,
  description,
  path,
  type: 'article',
  image: {
    url: `${siteUrl}${images.hero.src}`,
    width: images.hero.width,
    height: images.hero.height,
    alt: images.hero.alt,
  },
})

const faqs = [
  {
    question: 'Is it free to make a QR code for my restaurant menu?',
    answer:
      'Yes. Free QR Gen is completely free, with no sign-up and no watermark. You can add your logo, choose your colours and download your code as a PNG or SVG.',
  },
  {
    question: 'Will my menu QR code expire?',
    answer:
      'No. Codes made with Free QR Gen are static: the link is stored in the code itself, so it keeps working for good. It will only stop working if the page it points to goes offline.',
  },
  {
    question: 'Can I change my menu without reprinting the QR code?',
    answer:
      'Yes, as long as the code points at a link that stays the same, such as a page on your website or a PDF you replace at the same address. Update the menu at that link and every printed code shows the new version.',
  },
  {
    question: 'What size should a menu QR code be printed?',
    answer:
      'At least 2 x 2 cm, and bigger the further away people scan from. A good rule is a tenth of the scanning distance: around 3 x 3 cm on a table, and 20 x 20 cm for a window read from 2 metres away.',
  },
  {
    question: 'Should I use a PDF or a web page for my menu?',
    answer:
      'A web page is usually better: it loads faster on mobile, fits any screen and can show up in Google searches. A PDF is fine if you already have one, as long as it is small and readable without zooming.',
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
      image: Object.values(images).map(({ src }) => `${siteUrl}${src}`),
      author: { '@type': 'Person', name: 'Aidan Lowson', url: `${siteUrl}/about` },
      publisher: {
        '@type': 'Organization',
        name: 'Free QR Gen',
        url: siteUrl,
        logo: { '@type': 'ImageObject', url: `${siteUrl}/FreeQRGenLogo.png` },
      },
      about: [
        { '@type': 'Thing', name: 'QR code', sameAs: 'https://en.wikipedia.org/wiki/QR_code' },
        { '@type': 'Thing', name: 'Menu', sameAs: 'https://en.wikipedia.org/wiki/Menu' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Free QR Gen', item: siteUrl },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Restaurant menu QR codes',
          item: `${siteUrl}${path}`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
}

const sections = [
  { id: 'why', label: 'Why restaurants use QR codes' },
  { id: 'what-you-need', label: 'What you need before you start' },
  { id: 'step-1', label: 'Step 1: Put your menu online' },
  { id: 'step-2', label: 'Step 2: Create your QR code' },
  { id: 'step-3', label: 'Step 3: Download the right file' },
  { id: 'step-4', label: 'Step 4: Test it before you print' },
  { id: 'step-5', label: 'Step 5: Print it and place it' },
  { id: 'more-ideas', label: 'More ways to use QR codes in your restaurant' },
  { id: 'mistakes', label: 'Common mistakes to avoid' },
  { id: 'faq', label: 'Frequently asked questions' },
]

export default function RestaurantMenuQRCodePage() {
  return (
    <ContentPage
      title='How to make a QR code for your restaurant menu'
      intro='A QR code menu lets diners pull up your menu on their own phone in seconds. Whether you run a restaurant, café, pub or food truck, this guide takes you from getting your menu online to printing a branded code for your tables, all for free.'
    >
      <JsonLd data={articleJsonLd} />

      <p className='!mb-0 mt-4 text-sm text-neutral-500'>
        By <Link href='/about'>Aidan Lowson</Link> · Updated{' '}
        <time dateTime={updated}>{format(parseISO(updated), 'd MMMM yyyy')}</time>
      </p>

      <ArticleFigure {...images.hero} priority />

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

      <h2 id='why'>Why restaurants use QR codes</h2>
      <p>
        QR code menus, sometimes called digital or contactless menus, went mainstream{' '}
        <Link href='/what-is-a-qr-code#timeline'>during the COVID-19 pandemic</Link>, and they stuck
        around because they make life easier for restaurants and diners alike:
      </p>
      <ul>
        <li>
          <strong>Change your menu without reprinting.</strong> Update a price, add a special or
          take a dish off, and every table sees it straight away.
        </li>
        <li>
          <strong>Save on printing.</strong> Paper menus get stained, torn and out of date. A
          printed QR code lasts for months.
        </li>
        <li>
          <strong>Let diners browse while they wait.</strong> Guests can read the menu as soon as
          they sit down, or before they even walk in.
        </li>
        <li>
          <strong>Keep the details in one place.</strong> Allergens, dietary labels and photos fit
          far more easily on a web page than on a laminated card.
        </li>
      </ul>
      <p>
        QR codes work best alongside paper menus, not instead of them. Some guests don&apos;t have a
        smartphone, or would rather not use one at dinner, so keep a few printed copies to hand.
      </p>

      <h2 id='what-you-need'>What you need before you start</h2>
      <ul>
        <li>
          <strong>A link to your menu.</strong> If you don&apos;t have one yet, step 1 covers the
          options.
        </li>
        <li>
          <strong>Your logo</strong> (optional). A square PNG of around 1000 x 1000 px works best.
        </li>
        <li>
          <strong>Your brand colours</strong> as hex codes, such as #1F2A2A. You&apos;ll find them
          in your brand guidelines, or ask whoever designed your logo.
        </li>
        <li>
          <strong>A couple of phones for testing</strong>, ideally one iPhone and one Android.
        </li>
      </ul>

      <h2 id='step-1'>Step 1: Put your menu online</h2>
      <p>
        A QR code is a shortcut to a link, so your menu first needs to live somewhere online. The
        most common options are:
      </p>
      <ul>
        <li>
          <strong>A page on your own website.</strong> The best choice: it loads quickly, fits any
          screen, and the dishes on it can show up when people search Google.
        </li>
        <li>
          <strong>A PDF.</strong> Quick if you already have a designed menu. Compress it so it loads
          fast on mobile data, and check the text is readable without zooming.
        </li>
        <li>
          <strong>A Google Doc or Canva design.</strong> Free and easy to edit. Set sharing to
          &quot;Anyone with the link&quot;, or diners will see an access request instead of your
          menu.
        </li>
        <li>
          <strong>Your ordering or booking platform</strong>, if it already shows your menu.
        </li>
      </ul>
      <ArticleFigure {...images.menuOnline} />

      <h3>Use a link that won&apos;t change</h3>
      <p>
        A QR code points at one exact address, permanently. If that address stays the same when you
        update the menu, like <strong>yourrestaurant.com/menu</strong>, you can change dishes and
        prices without ever reprinting the code. Watch out for file-sharing services that create a
        new link every time you upload a new version.
      </p>
      <p>
        Shorter links are better too. The more characters in the link, the denser the QR code, and
        dense codes are harder to scan when printed small. If you want to count scans, you can add a
        tracking tag such as <strong>?utm_source=qr-table</strong> to the end of the link and see
        the visits in your analytics. Just keep in mind it makes the code a little denser.
      </p>

      <h2 id='step-2'>Step 2: Create your QR code</h2>
      <ol className='mb-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary'>
        <li>
          Open the <Link href='/'>Free QR Gen generator</Link> and paste your menu link into the{' '}
          <strong>QR Code URL</strong> box. The preview updates as you type.
        </li>
        <li>
          <strong>Set your colours.</strong> Use your darkest brand colour for the code and a light
          one for the background. The generator warns you if the contrast is too low, or if the code
          is light on a dark background, which some scanner apps can&apos;t read.
        </li>
        <li>
          <strong>Upload your logo</strong>, then set the logo width and height. Keep it to around
          20% of the download size, for example 200 x 200 px on a 1024 px code. The logo
          doesn&apos;t resize with the code, so update it if you change the download size.
        </li>
        <li>
          <strong>Set error correction to High.</strong> Your logo covers part of the code, and
          error correction is what lets a phone fill in the gaps. There&apos;s more on this in{' '}
          <Link href='/what-is-a-qr-code#how-qr-codes-work'>how QR codes work</Link>.
        </li>
      </ol>
      <ArticleFigure {...images.generator} />

      <h2 id='step-3'>Step 3: Download the right file</h2>
      <p>Pick a size, then download. The right format depends on where the code is going:</p>
      <ul>
        <li>
          <strong>SVG for anything printed.</strong> SVG is a vector format, so it stays perfectly
          sharp at any size, from a table sticker to a window poster. Most printers and design
          tools, including Canva, accept it.
        </li>
        <li>
          <strong>PNG for screens</strong>, such as your website, social posts or an online menu. If
          you need a PNG for print, choose 2048 px so it stays crisp.
        </li>
      </ul>
      <p>Both are free, with no watermark, and the code never expires.</p>
      <ArticleFigure {...images.download} />

      <h2 id='step-4'>Step 4: Test it before you print</h2>
      <p>
        Never send a QR code to the printer without testing it. A code that scans on screen can
        still fail on paper, especially once you add brand colours and a logo.
      </p>
      <ul>
        <li>Print one copy at the final size, on the same paper or card you&apos;ll use.</li>
        <li>Scan it with the normal camera app on both an iPhone and an Android phone.</li>
        <li>
          Test it where it will be used: at the table, in your restaurant&apos;s lighting, from
          where a seated diner would hold their phone.
        </li>
        <li>Check the link opens the right menu, and that it&apos;s the current one.</li>
      </ul>
      <p>
        If it&apos;s slow to scan, make the code bigger, make the logo smaller or increase the
        contrast between the two colours.
      </p>
      <ArticleFigure {...images.testing} />

      <h2 id='step-5'>Step 5: Print it and place it</h2>
      <h3>How big to print it</h3>
      <p>
        A good rule of thumb is that a QR code should be at least a tenth of the distance it&apos;s
        scanned from. A diner scanning from 30 cm away needs a code of at least 3 x 3 cm. For a
        window sticker read from 2 metres away, go for 20 x 20 cm. Never go below 2 x 2 cm.
      </p>

      <h3>Where to put it</h3>
      <ul>
        <li>
          <strong>On every table</strong>, in a table tent, stand or sticker. This is where most
          scans happen.
        </li>
        <li>
          <strong>In the front window</strong>, so passers-by can check the menu before they come
          in.
        </li>
        <li>
          <strong>At the till or counter</strong>, for takeaway customers waiting to order.
        </li>
        <li>
          <strong>On receipts and takeaway bags</strong>, so customers can find you again.
        </li>
      </ul>
      <ArticleFigure {...images.placements} />

      <h3>Make it easy to scan</h3>
      <ul>
        <li>
          <strong>Say what it&apos;s for.</strong> A code on its own doesn&apos;t tell anyone what
          they&apos;ll get. Add a short line next to it, like &quot;Scan for our menu&quot;.
        </li>
        <li>
          <strong>Leave a clear margin.</strong> Don&apos;t let text, borders or the edge of the
          card touch the code.
        </li>
        <li>
          <strong>Choose a matt finish.</strong> Glossy card and lamination reflect lights, which
          can stop a phone reading the code.
        </li>
      </ul>

      <h2 id='more-ideas'>More ways to use QR codes in your restaurant</h2>
      <p>The same steps work for any link. A few ideas once your menu code is sorted:</p>
      <ul>
        <li>
          <strong>Google reviews.</strong> Link to your review form from receipts or by the door.
          You&apos;ll find the link in your Google Business Profile.
        </li>
        <li>
          <strong>Bookings.</strong> Put your booking page on the front window and takeaway bags.
        </li>
        <li>
          <strong>Social media.</strong> Point diners to your Instagram or TikTok.
        </li>
        <li>
          <strong>Allergen and nutrition information</strong> on its own page, for guests who need
          the detail.
        </li>
        <li>
          <strong>Guest WiFi.</strong> A <Link href='/wifi-qr-code-generator'>WiFi QR code</Link> on
          each table lets diners join without asking for the password.
        </li>
        <li>
          <strong>WhatsApp orders.</strong> A{' '}
          <Link href='/whatsapp-qr-code-generator'>WhatsApp QR code</Link> on takeaway menus opens a
          chat with you, ready to order.
        </li>
        <li>
          <strong>Feedback forms and loyalty sign-ups.</strong>
        </li>
      </ul>
      <p>Codes made with Free QR Gen never expire, so make as many as you like.</p>

      <h2 id='mistakes'>Common mistakes to avoid</h2>
      <ul>
        <li>
          <strong>Low contrast.</strong> Pale colours, or a light code on a dark background, can
          fail on some phones. Keep the code dark and the background light.
        </li>
        <li>
          <strong>A logo that&apos;s too big.</strong> Even High error correction can only recover
          so much. Keep the logo to around 20% of the code&apos;s width.
        </li>
        <li>
          <strong>Printing too small.</strong> Stick to the one-tenth rule, and never go below 2 x 2
          cm.
        </li>
        <li>
          <strong>Cropping the margin.</strong> Scanners need the empty border around the code to
          find it.
        </li>
        <li>
          <strong>Linking to something that moves.</strong> If the page or file behind the code is
          deleted or renamed, every printed code breaks at once.
        </li>
        <li>
          <strong>Slow or desktop-only menus.</strong> A huge PDF, or a page diners have to zoom
          into, is frustrating on mobile data.
        </li>
        <li>
          <strong>Paying for codes that can expire.</strong> Some paid generators make
          &quot;dynamic&quot; codes that redirect through their servers and stop working if you
          cancel your subscription. A static code links straight to your menu and keeps working for
          as long as your menu link does.
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
        <Link href='/'>Create your restaurant menu QR code now, free →</Link>
      </p>

      <p className='mt-10 text-sm text-neutral-500'>
        QR Code is a registered trademark of DENSO WAVE INCORPORATED.
      </p>
    </ContentPage>
  )
}
