# 0001. Generate static QR codes in the browser

- **Status:** Accepted
- **Date:** 2026-10-26 (written down after the fact; describes how the app already works)

## Context

Many QR code generators make _dynamic_ codes: the code holds a short link to the provider's redirect service, which forwards to the real destination. If the subscription lapses or the provider shuts down, the redirect stops and every printed code breaks. Some QR types also contain sensitive data, such as WiFi passwords and personal contact details.

## Decision

Codes are **static** and generated **entirely in the browser**:

- Each QR type's form values are turned into the final payload by `src/app/lib/qrPayloads.ts` and rendered by `qrcode.react`.
- There is no redirect service and no server-side storage of code content or logos.
- Downloads (PNG/SVG) are produced client side.

## Consequences

- Codes never expire and work offline (text, WiFi and vCard codes need no internet at all).
- No database or per-user state is needed, which keeps hosting simple and cheap.
- The site can honestly say passwords "never leave your browser". **Any change that sends code content to a server breaks this promise and the copy that makes it** (tool page FAQs, guides).
- There's no scan analytics and no way to change a code's destination after printing. The guides point people to a URL they control (for example their own menu page) as a workaround.
- Payload formats must work on real phones without help from a server, so encoder choices matter (for example, Google Maps links rather than `geo:` URIs, which iPhones ignore).

## Alternatives considered

- **Dynamic codes with a redirect service** – enable analytics and editing, but contradict the "never expires" promise and need a backend, a database and ongoing costs.
