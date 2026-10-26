# Add a new guide

Guides are articles, such as "How to make a QR code pet tag". Each one helps people with a real task and links to one of the generators.

## 1. Register the guide

Add an entry to `guides` in `src/app/lib/guides.ts`:

```ts
{
  path: '/qr-code-for-gym-classes',
  title: 'QR codes for gyms and fitness classes',   // ≤ ~60 chars incl. " | Free QR Gen"
  description: 'One or two sentences for search results…',
  hubLabel: 'QR codes for gyms',                    // short link text
  published: '2026-11-01',
  updated: '2026-11-01',
  types: ['url', 'whatsapp'],                       // main generator first; [] for general guides
},
```

`types` decides where the guide appears:

- **Guides hub:** grouped under the first type (general guides with `[]` go last).
- **Tool pages:** listed under "Related" on every tool page in `types`.

This entry also adds the guide to the sitemap and the E2E tests.

## 2. Create the page

`src/app/qr-code-for-gym-classes/page.tsx`. The folder must match `path`. Use `GuidePage`, which adds the byline, table of contents, FAQs, structured data and the closing call to action:

```tsx
import Link from 'next/link'
import GuidePage, { guideMetadata } from '../components/GuidePage'

const path = '/qr-code-for-gym-classes'

export const metadata = guideMetadata(path)

const faqs = [{ question: '…', answer: '…' }]

const sections = [
  { id: 'why', label: 'Why use a QR code' },
  { id: 'steps', label: 'Make one in 3 steps' },
]

export default function GymQRCodePage() {
  return (
    <GuidePage
      path={path}
      intro='Opening paragraph…'
      sections={sections}
      faqs={faqs}
      about={[{ name: 'Gym', sameAs: 'https://en.wikipedia.org/wiki/Gym' }]}
      cta={{ href: '/whatsapp-qr-code-generator', label: 'Create your QR code now, free' }}
    >
      <h2 id='why'>Why use a QR code</h2>
      {/* … */}
      <h2 id='steps'>Make one in 3 steps</h2>
      {/* … */}
    </GuidePage>
  )
}
```

- Every entry in `sections` needs an `<h2>` with a matching `id`.
- Link to at least one generator in the body. The E2E tests check for this.
- `about` adds schema.org topics (Wikipedia links) on top of "QR code".

## 3. Images (optional)

Put compressed `.webp` files in `public/guides/<guide-name>/` and show them with `ArticleFigure`, giving it real `width`/`height` and descriptive `alt` text. See `qr-code-for-restaurant-menu/page.tsx` for an example.

## 4. Optional extras

- Add it to the footer's "Resources" list in `src/app/components/Footer.tsx` if it's a flagship guide.
- Link to it from related guides.

## 5. Check

```bash
pnpm lint && pnpm test && pnpm build && pnpm test:e2e
```

`content.test.ts` checks that the route folder exists and the dates are valid.

When you edit a guide later, bump its `updated` date in `lib/guides.ts`. The byline, `dateModified` in the structured data and the sitemap all read it.
