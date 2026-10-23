import { IFaq, IStep, QrType } from '../types'

export interface IToolPageContent {
  // Kept under ~45 characters so the " | Free QR Gen" suffix isn't truncated in results
  title: string
  description: string
  // Highlighted part of the h1: "Free <name> Generator"
  name: string
  // Sentence-case heading for the how-to steps
  stepsHeading: string
  subtitle: string
  steps: IStep[]
  sections: { heading: string; intro?: string; items: { title: string; body: string }[] }[]
  faqs: IFaq[]
  related: { href: string; label: string }[]
}

const neverExpires: IFaq = {
  question: 'Does the QR code expire?',
  answer:
    'No. Everything is stored in the code itself rather than behind a redirect link, so there is no subscription to lapse and nothing to switch off. It works for as long as the details in it are correct.',
}

export const toolPageContent: Record<Exclude<QrType, 'url'>, IToolPageContent> = {
  wifi: {
    title: 'WiFi QR Code Generator: Free, No Sign-Up',
    description:
      'Make a free WiFi QR code so guests can join your network by pointing their camera at it. Add your logo and colours. Your password never leaves your browser.',
    name: 'WiFi QR Code',
    stepsHeading: 'How to make a WiFi QR code',
    subtitle: 'Let guests join your WiFi with one scan. No typing, no spelling out passwords.',
    steps: [
      {
        title: 'Enter your network',
        body: 'Type your network name (SSID) and password exactly as they appear on your router, including capitals.',
      },
      {
        title: 'Pick the security type',
        body: 'Most networks use WPA2 or WPA3, which is the default. Choose None for open guest networks.',
      },
      {
        title: 'Download and print',
        body: 'Save it as a PNG or SVG, then print it for a fridge, reception desk or welcome book.',
      },
    ],
    sections: [
      {
        heading: 'Where a WiFi QR code saves time',
        items: [
          {
            title: 'Holiday lets and Airbnbs',
            body: 'Put it in the welcome book or on the fridge so guests are online before they unpack, without messaging you for the password.',
          },
          {
            title: 'Cafés, pubs and restaurants',
            body: 'A small code on each table or by the till stops staff spelling out the password all day.',
          },
          {
            title: 'Offices and meeting rooms',
            body: 'Share the guest network with visitors without writing the password on a whiteboard.',
          },
          {
            title: 'At home',
            body: 'Friends and family can join with their camera, and you never have to dig out the router sticker again.',
          },
        ],
      },
      {
        heading: 'Your password stays private',
        intro:
          'This generator runs entirely in your browser. Your network name and password are turned into a QR code on your own device and are never sent to, or stored on, our servers. Anyone who scans the printed code can see the password though, so only put it where you would happily share the password itself.',
        items: [],
      },
    ],
    faqs: [
      {
        question: 'Which phones can scan a WiFi QR code?',
        answer:
          'iPhones running iOS 11 or later and most Android phones from the last several years can join straight from the built-in camera app. Older Android phones can use Google Lens or a QR scanner app.',
      },
      {
        question: 'Is it safe to put my WiFi password in a QR code?',
        answer:
          'The code is generated in your browser and the password is never uploaded. Once printed, anyone who scans it can join and see the password, so for public spaces use a separate guest network rather than your main one.',
      },
      {
        question: 'What happens if I change my WiFi password?',
        answer:
          'The old code stops working, because the password is stored in the code itself. Make a new code with the new password and replace the printed one.',
      },
      {
        question: 'Does it work with hidden networks?',
        answer:
          'Yes. Tick Hidden network so phones know to look for a network that is not broadcasting its name.',
      },
      {
        question: 'Which security type should I choose?',
        answer:
          'Choose WPA / WPA2 / WPA3 for almost every modern router. Only choose WEP if your router is very old and set to WEP, and None if your network has no password.',
      },
    ],
    related: [
      { href: '/how-to-share-wifi-with-a-qr-code', label: 'How to share WiFi with a QR code' },
    ],
  },
  vcard: {
    title: 'vCard QR Code Generator: Free Contact QR',
    description:
      'Create a free vCard QR code that saves your name, number, email and website to someone’s phone in one scan. Perfect for business cards. Add your logo, no sign-up.',
    name: 'vCard QR Code',
    stepsHeading: 'How to make a vCard QR code',
    subtitle: 'Share your contact details in one scan. Ideal for business cards, CVs and stands.',
    steps: [
      {
        title: 'Add your details',
        body: 'Fill in the fields you want to share. Only a name or company is required, so leave out anything you would rather keep private.',
      },
      {
        title: 'Style it',
        body: 'Match your brand colours and add your logo, then check the preview still scans.',
      },
      {
        title: 'Download',
        body: 'Use SVG for printed business cards so it stays sharp, or PNG for email signatures and slides.',
      },
    ],
    sections: [
      {
        heading: 'Tips for a contact QR code that scans first time',
        items: [
          {
            title: 'Fewer fields, easier scanning',
            body: 'Every field adds data, and more data means smaller squares. A name, phone, email and website is plenty for a business card.',
          },
          {
            title: 'Print it at least 2 cm wide',
            body: 'Contact codes are denser than link codes. On a business card, give the code at least 2 x 2 cm and keep a clear margin around it.',
          },
          {
            title: 'Go easy on the logo',
            body: 'A logo hides part of an already dense code. If you add one, keep it small and set error correction to Quartile or High.',
          },
          {
            title: 'Test it on two phones',
            body: 'Scan the printed card with an iPhone and an Android phone and check every field lands in the right place.',
          },
        ],
      },
      {
        heading: 'Where to use a contact QR code',
        items: [
          {
            title: 'Business cards',
            body: 'Nobody has to type your number in. They scan, tap Add contact and you are saved.',
          },
          {
            title: 'Conference badges and stands',
            body: 'Visitors can grab your details without queuing for a card.',
          },
          {
            title: 'CVs and portfolios',
            body: 'Make it effortless for a recruiter to save your details.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'What is a vCard QR code?',
        answer:
          'vCard is the standard format phones use for contact cards. A vCard QR code stores your details in that format, so scanning it offers to add you straight to the phone’s contacts.',
      },
      {
        question: 'Does it work on iPhone and Android?',
        answer:
          'Yes. The iPhone camera shows a prompt to add the contact, and Android phones show the same through the camera or Google Lens.',
      },
      {
        question: 'Can I update my details after printing?',
        answer:
          'No. Your details are stored in the code itself, which is why it never expires and never tracks anyone. If your details change, make a new code. If you want details you can edit, link a URL code to a page you control instead.',
      },
      {
        question: 'Are my contact details uploaded anywhere?',
        answer:
          'No. The code is created in your browser and nothing you type is sent to our servers.',
      },
      neverExpires,
    ],
    related: [{ href: '/what-is-a-qr-code', label: 'What is a QR code?' }],
  },
  email: {
    title: 'Email QR Code Generator: Free & Simple',
    description:
      'Make a free email QR code that opens a new email with the address, subject and message already filled in. Add your logo and colours. No sign-up, no expiry.',
    name: 'Email QR Code',
    stepsHeading: 'How to make an email QR code',
    subtitle: 'Open a ready-to-send email with one scan: address, subject and message filled in.',
    steps: [
      {
        title: 'Enter the address',
        body: 'Add the email address you want messages sent to.',
      },
      {
        title: 'Pre-fill the email',
        body: 'Optionally add a subject and message. People can still edit them before sending.',
      },
      {
        title: 'Download',
        body: 'Save it as a PNG or SVG and put it on posters, packaging or feedback cards.',
      },
    ],
    sections: [
      {
        heading: 'Ideas for email QR codes',
        items: [
          {
            title: 'Customer feedback',
            body: 'Pre-fill the subject with “Feedback” so every reply lands in the right folder.',
          },
          {
            title: 'Enquiries and quotes',
            body: 'Put a code on a van, flyer or shop window that starts an enquiry email in one scan.',
          },
          {
            title: 'Event RSVPs',
            body: 'Pre-fill “I’ll be there” so guests can reply without typing anything.',
          },
          {
            title: 'Support and returns',
            body: 'Add a code to packaging that opens an email to your support address with the order subject ready.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'What happens when someone scans an email QR code?',
        answer:
          'Their phone opens its default email app with a new message to your address. Any subject or message you added is already filled in, ready to send.',
      },
      {
        question: 'Is the email sent automatically?',
        answer:
          'No. The person scanning always sees the email first and chooses whether to send it.',
      },
      {
        question: 'Can I add more than one recipient?',
        answer:
          'The code is designed for one address. If you need several people to receive messages, use a shared inbox or a group address.',
      },
      neverExpires,
    ],
    related: [{ href: '/sms-qr-code-generator', label: 'SMS QR code generator' }],
  },
  sms: {
    title: 'SMS QR Code Generator: Free Text Message QR',
    description:
      'Create a free SMS QR code that opens a text message to your number with the message already written. Great for competitions, opt-ins and bookings. No sign-up.',
    name: 'SMS QR Code',
    stepsHeading: 'How to make an SMS QR code',
    subtitle: 'Start a text message to your number, with the words already written.',
    steps: [
      {
        title: 'Enter the number',
        body: 'Use the full number with the country code, like +44 for the UK, so it works for everyone.',
      },
      {
        title: 'Write the message',
        body: 'Add a keyword or short message. People can edit it before they send.',
      },
      {
        title: 'Download',
        body: 'Save it as a PNG or SVG for posters, packaging or flyers.',
      },
    ],
    sections: [
      {
        heading: 'Ideas for SMS QR codes',
        items: [
          {
            title: 'Text-to-enter competitions',
            body: 'Pre-fill the entry keyword so nobody gets it wrong.',
          },
          {
            title: 'Appointment and booking requests',
            body: 'A code in the window that starts “I’d like to book…” to your business mobile.',
          },
          {
            title: 'Opt-ins and alerts',
            body: 'Let customers text a keyword like JOIN to sign up for updates.',
          },
          {
            title: 'Emergency and contact cards',
            body: 'A quick way to message a carer, landlord or site manager.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Is the text sent automatically when scanned?',
        answer:
          'No. The phone opens its messaging app with the number and message filled in, and the person chooses whether to press send.',
      },
      {
        question: 'Who pays for the text?',
        answer:
          'The person sending it, at their normal rate, which is usually free with a mobile plan. Use a standard number, not a premium-rate one.',
      },
      {
        question: 'Does it work on iPhone and Android?',
        answer: 'Yes. Both open the built-in messaging app from the camera.',
      },
      neverExpires,
    ],
    related: [
      { href: '/whatsapp-qr-code-generator', label: 'WhatsApp QR code generator' },
      { href: '/phone-number-qr-code-generator', label: 'Phone number QR code generator' },
    ],
  },
  phone: {
    title: 'Phone Number QR Code Generator: Free',
    description:
      'Make a free QR code that calls your phone number when scanned. Add your logo and colours and download a PNG or SVG. No sign-up, no watermark, never expires.',
    name: 'Phone Number QR Code',
    stepsHeading: 'How to make a QR code for your phone number',
    subtitle: 'One scan to call you. No dialling, no wrong numbers.',
    steps: [
      {
        title: 'Enter your number',
        body: 'Include the country code, like +44 or +1, so the call connects from anywhere.',
      },
      {
        title: 'Brand it',
        body: 'Set your colours and logo so people know whose number it is.',
      },
      {
        title: 'Download',
        body: 'Use it on vans, signs, flyers, business cards or “for sale” boards.',
      },
    ],
    sections: [
      {
        heading: 'Where a call QR code works well',
        items: [
          {
            title: 'Vans and shop signs',
            body: 'People scan from the street rather than trying to remember a number.',
          },
          {
            title: 'Property and car sale boards',
            body: 'A code next to the number gets more calls from passers-by.',
          },
          {
            title: 'Equipment and machines',
            body: 'Put a code on equipment so anyone can call the right support line when it breaks.',
          },
          {
            title: 'Pet tags and lost property labels',
            body: 'Whoever finds it can call you straight away.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Does scanning the code start the call straight away?',
        answer:
          'No. The phone shows the number and asks the person to confirm before it dials, so nobody calls by accident.',
      },
      {
        question: 'Should I include the country code?',
        answer:
          'Yes. With the country code, like +44 7700 900123, the call works from any phone, including visitors from abroad.',
      },
      {
        question: 'Can I use a landline number?',
        answer: 'Yes. Any number you can dial from a mobile works.',
      },
      neverExpires,
    ],
    related: [
      { href: '/vcard-qr-code-generator', label: 'Contact (vCard) QR code generator' },
      { href: '/sms-qr-code-generator', label: 'SMS QR code generator' },
    ],
  },
  whatsapp: {
    title: 'WhatsApp QR Code Generator: Free',
    description:
      'Create a free WhatsApp QR code that opens a chat with your number, with a message already written. Ideal for small businesses. Add your logo, no sign-up.',
    name: 'WhatsApp QR Code',
    stepsHeading: 'How to make a WhatsApp QR code',
    subtitle: 'Open a WhatsApp chat with you in one scan, with a message ready to send.',
    steps: [
      {
        title: 'Enter your WhatsApp number',
        body: 'Use the full international number, like +44 7700 900123. Without the country code WhatsApp cannot find you.',
      },
      {
        title: 'Add a starter message',
        body: 'Pre-fill something like “Hi, I’d like a quote” so customers know what to say.',
      },
      {
        title: 'Download and share',
        body: 'Put it on your shop window, menu, packaging or social posts.',
      },
    ],
    sections: [
      {
        heading: 'How small businesses use WhatsApp QR codes',
        items: [
          {
            title: 'Orders and bookings',
            body: 'Takeaways, salons and tradespeople take orders and appointments over chat.',
          },
          {
            title: 'Customer support',
            body: 'A code on packaging or receipts gets customers to you without hunting for a number.',
          },
          {
            title: 'Quotes and enquiries',
            body: 'Pre-fill “Hi, I’d like a quote for…” so you get the details you need up front.',
          },
          {
            title: 'Events and groups',
            body: 'Let attendees message the organiser in one scan.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Does it work with WhatsApp Business?',
        answer: 'Yes. It works with both personal and WhatsApp Business numbers.',
      },
      {
        question: 'What if the person scanning does not have WhatsApp?',
        answer:
          'The code opens a wa.me link, so they land on a WhatsApp web page that offers to install the app or continue in the browser.',
      },
      {
        question: 'Why do I need the country code?',
        answer:
          'WhatsApp links only work with full international numbers. Leave out any leading 0 on the local number, so a UK number 07700 900123 becomes +44 7700 900123.',
      },
      {
        question: 'Does the message send automatically?',
        answer: 'No. It appears in the chat box and the person chooses whether to send it.',
      },
      neverExpires,
    ],
    related: [{ href: '/sms-qr-code-generator', label: 'SMS QR code generator' }],
  },
  text: {
    title: 'Text QR Code Generator: Free Plain Text',
    description:
      'Turn any text into a free QR code that shows your message when scanned, with no internet needed. Add your logo and colours. No sign-up, no watermark.',
    name: 'Text QR Code',
    stepsHeading: 'How to make a text QR code',
    subtitle: 'Show a message, code or instructions when scanned. Works offline.',
    steps: [
      {
        title: 'Type your text',
        body: 'A short message, serial number, instructions or anything else. Shorter is easier to scan.',
      },
      {
        title: 'Style it',
        body: 'Set your colours and add a logo if you like.',
      },
      {
        title: 'Download',
        body: 'Save it as a PNG or SVG and print it wherever it is needed.',
      },
    ],
    sections: [
      {
        heading: 'Ideas for text QR codes',
        items: [
          {
            title: 'Treasure hunts and escape rooms',
            body: 'Hide clues that only appear when scanned.',
          },
          {
            title: 'Labels and inventory',
            body: 'Store a serial number, part code or storage note that works without a network.',
          },
          {
            title: 'Instructions',
            body: 'Put setup steps or safety notes on equipment.',
          },
          {
            title: 'Messages and gifts',
            body: 'Hide a note inside a card or on a gift tag.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Do text QR codes need the internet?',
        answer:
          'No. The text is stored in the code itself, so the phone shows it straight away, even with no signal.',
      },
      {
        question: 'How much text can a QR code hold?',
        answer:
          'Up to around 2,900 characters in theory, but codes get very dense well before that. Keep it to a few hundred characters so it scans quickly, or put longer content on a web page and use a URL code.',
      },
      {
        question: 'Can I use emoji and other languages?',
        answer:
          'Yes. Text is stored as UTF-8, so emoji and non-Latin scripts work, though they take up more space than plain letters.',
      },
      neverExpires,
    ],
    related: [{ href: '/what-is-a-qr-code', label: 'What is a QR code?' }],
  },
  location: {
    title: 'Location QR Code Generator: Google Maps',
    description:
      'Make a free location QR code that opens your address in Google Maps when scanned. Perfect for invitations, venues and shop signs. Add your logo, no sign-up.',
    name: 'Location QR Code',
    stepsHeading: 'How to make a location QR code',
    subtitle: 'Open an address or pin in Google Maps with one scan, ready for directions.',
    steps: [
      {
        title: 'Enter the location',
        body: 'Type an address, a business name or GPS coordinates, the same way you would search in Google Maps.',
      },
      {
        title: 'Check and style',
        body: 'Scan the preview to check it lands on the right spot, then add your colours and logo.',
      },
      {
        title: 'Download',
        body: 'Add it to invitations, flyers, tickets or signs.',
      },
    ],
    sections: [
      {
        heading: 'Where a location QR code helps',
        items: [
          {
            title: 'Wedding and party invitations',
            body: 'Guests get directions to the venue without typing the address.',
          },
          {
            title: 'Event tickets and posters',
            body: 'Point people to the entrance or the car park, not just the postcode.',
          },
          {
            title: 'Holiday lets',
            body: 'Share the exact spot of the key safe, parking or nearest shop.',
          },
          {
            title: 'Hard-to-find businesses',
            body: 'Use coordinates for places postcodes do not reach, like farm shops or campsites.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Does it work on iPhone?',
        answer:
          'Yes. The code opens a Google Maps link, which opens the Google Maps app if it is installed and the Google Maps website if not.',
      },
      {
        question: 'Should I use an address or coordinates?',
        answer:
          'An address or business name is easiest for most places. Use coordinates, like 51.5055, -0.0754, for a precise spot such as a field entrance or a meeting point.',
      },
      {
        question: 'How do I find the coordinates for a place?',
        answer:
          'In Google Maps, press and hold the spot on the map. The coordinates appear at the top of the screen or in the search box, ready to copy.',
      },
      neverExpires,
    ],
    related: [{ href: '/qr-code-for-restaurant-menu', label: 'QR codes for restaurant menus' }],
  },
}
