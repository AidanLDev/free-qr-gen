# Add a new QR code type

Most of the site is generated from the QR type config, so a new type needs changes in a handful of files. The example below adds a hypothetical `event` (calendar event) type.

## 1. Add the type name

`src/app/types.ts`:

```ts
export type QrType = 'url' | 'wifi' | … | 'location' | 'event'
```

TypeScript will now point to every `Record<QrType, …>` that needs a new entry.

## 2. Describe the form

`src/app/lib/qrTypes.ts`: add an entry to `qrTypes`.

```ts
event: {
  path: '/event-qr-code-generator',
  label: 'Event',
  icon: MdEvent,
  previewPlaceholder: 'Enter an event title to generate your QR code',
  filename: 'event-qrcode',
  fields: [
    { id: 'title', label: 'Event title' },
    { id: 'start', label: 'Starts', inputType: 'datetime-local' },
    …
  ],
},
```

- `kind` can be `'text'` (default), `'textarea'`, `'select'` (with `options`) or `'checkbox'` (stored as `'true'`/`'false'`).
- `validate` only runs once the field has a value. It returns an error message or `undefined`.
- `showIf` hides a field based on the other values (see `password` on the WiFi type).
- Put `defaults` on the config for fields that need an initial value, such as a select.
- The order of entries in `qrTypes` sets the order of the tabs and footer links.

## 3. Write the encoder

`src/app/lib/qrPayloads.ts`: add an `encodeEvent` function and register it in `encoders`.

- Return `null` until all required fields are present and valid, so the preview stays empty instead of showing a broken code.
- Follow the payload format's escaping rules. See `escapeWifi` and `escapeVCard` for examples.
- Choose formats that work on both iPhone and Android. Add a comment explaining any non-obvious choice (see `encodeLocation`).
- Scan the result with real iOS and Android phones before shipping.

## 4. Write the page content

`src/app/lib/toolPageContent.ts`: add an entry with `title` (at most ~45 characters, see [SEO](../seo.md)), `description`, `name`, `stepsHeading`, `subtitle`, `steps`, `sections`, `faqs` and `related`.

The shared `neverExpires` FAQ is there for reuse.

## 5. Add the route

`src/app/event-qr-code-generator/page.tsx`. The folder name must match `path` from step 2.

```tsx
import ToolPage, { toolPageMetadata } from '../components/ToolPage'

export const metadata = toolPageMetadata('event')

export default function EventQRCodePage() {
  return <ToolPage type='event' />
}
```

## 6. Add tests

- **Unit:** in `src/app/lib/qrPayloads.test.ts`, add a `describe` block for the new encoder. Cover the required fields returning `null`, a full payload, and any escaping. `content.test.ts` checks the route and config for you.
- **E2E:** in `tests/e2e/tools.spec.ts`, add an entry to `tools` with the path, the `<h1>` text, the tab label and a `fill` function that completes the required fields.

## 7. Check

```bash
pnpm lint && pnpm test && pnpm build && pnpm test:e2e
```

These update automatically, so you don't need to edit them: the type tabs, the footer, the sitemap and the guides hub (once a guide lists the type). If the change is significant, update `toolsUpdated` in `src/app/sitemap.ts`.
