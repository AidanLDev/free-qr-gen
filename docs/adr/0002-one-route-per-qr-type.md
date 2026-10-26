# 0002. One route per QR type, not in-page tabs

- **Status:** Accepted
- **Date:** 2026-10-26 (written down after the fact; describes how the app already works)

## Context

The generator supports several QR types (URL, WiFi, contact, email, SMS, phone, WhatsApp, text, location). People search for these separately ("wifi qr code generator", "whatsapp qr code"). Client-side tabs on a single page would give search engines one page to index for all of them.

## Decision

- Each QR type has its own route (`/wifi-qr-code-generator`, …). The URL generator is the home page.
- `QRTypeTabs` renders real `<Link>`s to those routes, styled as tabs.
- Each tool page has its own title, description, steps, FAQs and structured data from `lib/toolPageContent.ts`, rendered through the shared `ToolPage` component.
- Style settings (colours, logo, size, error correction) live in `QRStyleProvider` in the root layout, so they carry over when switching between types.

## Consequences

- Each type can rank for its own searches and has its own content and FAQs.
- A new type needs a route folder and a content entry, as well as the config and encoder (see [Add a new QR code type](../how-to/add-a-qr-type.md)).
- Switching type is a client-side navigation. Form field values are reset, while style settings are kept.

## Alternatives considered

- **Single page with client-side tabs** – simpler, but only one indexable page and one set of metadata.
- **Query parameter per type (`/?type=wifi`)** – weaker for SEO and awkward for canonical URLs.
