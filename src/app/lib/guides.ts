import { QrType } from '../types'

export interface IGuide {
  path: string
  // Kept under ~60 characters with the " | Free QR Gen" suffix so it isn't truncated in results
  title: string
  description: string
  // Short link text for the footer, tool pages and breadcrumbs
  hubLabel: string
  // Bump `updated` when the content changes; the sitemap reads it from here
  published: string
  updated: string
  // Generators the guide uses, main one first. The guides hub groups by the first, and each
  // tool page links to every guide that lists its type. Empty for general guides.
  types: QrType[]
}

export const guides: IGuide[] = [
  {
    path: '/what-is-a-qr-code',
    title: 'What is a QR code? History, inventor and how they work',
    description:
      'Learn what a QR code is, how Masahiro Hara invented it at Denso Wave in 1994, how QR codes store data, and where to read and watch more.',
    hubLabel: 'What is a QR code?',
    published: '2026-10-18',
    updated: '2026-10-19',
    types: [],
  },
  {
    path: '/why-did-my-qr-code-stop-working',
    title: 'QR code stopped working? 7 causes and fixes',
    description:
      'QR code not working any more? Find out why: expired free trials, dynamic codes, broken links and printing problems. Plus how to make a code that never expires.',
    hubLabel: 'Why QR codes stop working',
    published: '2026-10-23',
    updated: '2026-10-23',
    types: [],
  },
  {
    path: '/qr-code-for-restaurant-menu',
    title: 'How to make a QR code for your restaurant menu',
    description:
      'Make a free QR code for your restaurant menu in 5 steps: put your menu online, add your logo and colours, test it and print it for your tables.',
    hubLabel: 'Restaurant menu QR codes',
    published: '2026-10-19',
    updated: '2026-10-23',
    types: ['url'],
  },
  {
    path: '/how-to-share-wifi-with-a-qr-code',
    title: 'How to share your WiFi with a QR code',
    description:
      'Let guests join your WiFi by scanning a QR code. A step-by-step guide for homes, holiday lets, cafés and offices, with printing tips and how to keep your network safe.',
    hubLabel: 'Share WiFi with a QR code',
    published: '2026-10-23',
    updated: '2026-10-23',
    types: ['wifi'],
  },
  {
    path: '/qr-code-for-business-cards',
    title: 'How to put a QR code on your business card',
    description:
      'Add a QR code to your business card that saves your details to any phone in one scan. What to include, what size to print it and where it goes on the card.',
    hubLabel: 'QR codes on business cards',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['vcard', 'url'],
  },
  {
    path: '/qr-code-on-your-cv',
    title: 'Should you put a QR code on your CV?',
    description:
      'When a QR code on your CV helps and when it gets in the way. Link to a portfolio or save your contact details, plus where to put it and how big to print it.',
    hubLabel: 'QR codes on a CV',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['vcard', 'url'],
  },
  {
    path: '/qr-codes-for-trade-shows-and-conferences',
    title: 'QR codes for trade shows and conferences',
    description:
      'Collect more leads at events with QR codes on badges, stands and banners: which code to use for contacts, enquiries and follow-ups, and how big to print.',
    hubLabel: 'QR codes for trade shows',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['vcard', 'whatsapp', 'email'],
  },
  {
    path: '/whatsapp-qr-code-for-business',
    title: 'WhatsApp QR codes for small businesses',
    description:
      'Take orders, bookings and enquiries on WhatsApp with a QR code. Pre-filled messages that work, where to put the code, and when SMS or a call works better.',
    hubLabel: 'WhatsApp QR codes for business',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['whatsapp', 'sms', 'phone'],
  },
  {
    path: '/qr-codes-for-salons-and-beauty-businesses',
    title: 'QR codes for salons and beauty businesses',
    description:
      'Fill your diary with QR codes for bookings, directions, aftercare and reviews. Ideas for hair salons, barbers, nail bars and beauty therapists.',
    hubLabel: 'QR codes for salons',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['whatsapp', 'location', 'text', 'url'],
  },
  {
    path: '/qr-code-for-customer-feedback',
    title: 'Get customer feedback with a QR code',
    description:
      'Collect feedback with a QR code on receipts, tables and packaging: when to open an email, when to link a review page, and wording that gets replies.',
    hubLabel: 'Customer feedback QR codes',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['email', 'url'],
  },
  {
    path: '/qr-codes-on-product-packaging',
    title: 'QR codes on product packaging: what to add',
    description:
      'Use QR codes on product packaging for support, returns, manuals and setup steps. Which type of code to use, where to print it and how to keep it scannable.',
    hubLabel: 'QR codes on packaging',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['email', 'text', 'url'],
  },
  {
    path: '/text-to-win-competition-qr-code',
    title: 'Run a text-to-win competition with a QR code',
    description:
      'Make entering your text-to-win competition as easy as a scan. How SMS QR codes pre-fill the keyword, who pays for the text, and what to put on the poster.',
    hubLabel: 'Text-to-win competitions',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['sms', 'whatsapp'],
  },
  {
    path: '/qr-code-for-appointment-requests',
    title: 'Let customers text to book with a QR code',
    description:
      'Take appointment requests by text with a QR code that starts the message for them. Ideas for tradespeople, clinics and studios, and how to word the message.',
    hubLabel: 'Text-to-book QR codes',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['sms', 'phone', 'whatsapp'],
  },
  {
    path: '/qr-codes-for-vans-and-shop-signs',
    title: 'QR codes for vans and shop signs',
    description:
      'Turn your van or shop sign into enquiries with a QR code people can scan from the street. How big to print it, where to put it and which code to choose.',
    hubLabel: 'QR codes for vans and signs',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['phone', 'whatsapp', 'vcard'],
  },
  {
    path: '/qr-code-for-pet-tags',
    title: 'How to make a QR code pet tag',
    description:
      'Make a free QR code pet tag that lets whoever finds your pet call you in one scan. What to put on it, how small you can print it, and how to keep it readable.',
    hubLabel: 'QR code pet tags',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['phone', 'text'],
  },
  {
    path: '/qr-code-for-sale-signs',
    title: 'Add a QR code to your "For Sale" sign',
    description:
      'Put a QR code on a "For Sale" sign for a car, house or garage sale so buyers can call or text you in one scan. What to use, what size to print and where.',
    hubLabel: 'QR codes for "For Sale" signs',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['phone', 'sms', 'location'],
  },
  {
    path: '/qr-code-treasure-hunt',
    title: 'How to make a QR code treasure hunt',
    description:
      'Plan a QR code treasure hunt for kids, parties or team days. Hide clues in text codes that work with no signal and print codes that survive outdoors.',
    hubLabel: 'QR code treasure hunts',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['text', 'location'],
  },
  {
    path: '/qr-codes-for-inventory-and-asset-labels',
    title: 'QR codes for inventory and asset labels',
    description:
      'Label stock, tools and equipment with QR codes that work offline. What to store in each code, label sizes and materials, and when a link works better.',
    hubLabel: 'Inventory and asset labels',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['text', 'url'],
  },
  {
    path: '/emergency-contact-qr-code',
    title: 'How to make an emergency contact QR code',
    description:
      'Make an emergency contact (ICE) QR code for a child, cyclist or older relative. What to include, what to leave out, and where to put it so it gets found.',
    hubLabel: 'Emergency contact QR codes',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['text', 'vcard', 'phone'],
  },
  {
    path: '/qr-code-for-wedding-invitations',
    title: 'How to add a QR code to wedding invitations',
    description:
      'Add QR codes to your wedding invitations for venue directions, RSVPs and your wedding website. Which code to use for each, plus size and design tips for print.',
    hubLabel: 'QR codes on wedding invitations',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['location', 'email', 'url'],
  },
  {
    path: '/qr-codes-for-holiday-lets',
    title: 'QR codes for holiday lets and Airbnbs',
    description:
      'Make a welcome book guests can scan: WiFi, directions to the door, a WhatsApp chat with the host and house rules. QR code ideas for holiday lets and Airbnbs.',
    hubLabel: 'QR codes for holiday lets',
    published: '2026-10-24',
    updated: '2026-10-24',
    types: ['location', 'wifi', 'whatsapp'],
  },
]

export function getGuide(path: string): IGuide {
  const guide = guides.find((g) => g.path === path)
  if (!guide) throw new Error(`No guide registered for ${path}`)
  return guide
}
