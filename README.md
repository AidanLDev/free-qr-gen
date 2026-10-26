# Free QR Gen

[![License](https://img.shields.io/github/license/AidanLDev/free-qr-gen?style=flat-square)](./LICENSE) [![CI](https://github.com/AidanLDev/free-qr-gen/actions/workflows/ci.yml/badge.svg)](https://github.com/AidanLDev/free-qr-gen/actions)

**[freeqrgen.net](https://freeqrgen.net)**: a free QR code generator with your own colours and logo. No sign-up, no watermarks, and codes that never expire.

QR codes are generated entirely in the browser. What you put in a code (including WiFi passwords) is never sent to a server, and there is no redirect link that can stop working.

## Features

- **Nine QR code types**, each with its own page: URL, WiFi, contact card (vCard), email, SMS, phone, WhatsApp, plain text and location
- **Custom styling:** foreground and background colours, logo upload, error correction level and download size, with warnings when a choice might stop a code scanning
- **PNG and SVG downloads** at any size
- **Guides** on using QR codes for menus, business cards, pet tags, holiday lets and more

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS · [`qrcode.react`](https://github.com/zpao/qrcode.react) · deployed to AWS with [SST](https://sst.dev) · Sentry · Vitest · Playwright

## Getting started

You need Node.js 22 and pnpm 8 (`corepack enable` will pick up the pinned version).

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

You don't need any environment variables to work on the generator or the content pages. They're only needed for the feedback form and Sentry: see [docs/development.md](docs/development.md#environment-variables).

### Useful scripts

| Command              | What it does                    |
| -------------------- | ------------------------------- |
| `pnpm dev`           | Start the dev server            |
| `pnpm build`         | Production build                |
| `pnpm lint`          | ESLint                          |
| `pnpm typecheck`     | TypeScript check                |
| `pnpm format`        | Format everything with Prettier |
| `pnpm test`          | Run the Vitest unit tests       |
| `pnpm test:e2e`      | Run the Playwright E2E tests    |
| `pnpm test:e2e-open` | Playwright UI mode              |

Merges to `main` deploy to production automatically once the tests pass. See [docs/deployment.md](docs/deployment.md).

## Project structure

```
src/app/
  page.tsx                  Home page (the URL generator)
  <type>-qr-code-generator/ One page per QR type
  <guide-slug>/             One page per guide
  components/               UI, including the generator form and preview
  lib/                      QR type config, payload encoders, guides, metadata
  api/send-feedback/        Feedback form email route
  **/*.test.ts(x)           Vitest unit tests, next to the code they cover
tests/e2e/                  Playwright tests
docs/                       Project documentation
sst.config.ts               AWS infrastructure
```

## Documentation

Full docs are in [`docs/`](docs/README.md):

- [Architecture](docs/architecture.md): how the app fits together
- [Development](docs/development.md): setup, env vars, scripts, code style
- [Testing](docs/testing.md) and [Deployment](docs/deployment.md)
- How-tos: [add a QR code type](docs/how-to/add-a-qr-type.md), [add a guide](docs/how-to/add-a-guide.md)

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) and the [definition of done](docs/dod.md) before opening a pull request, and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Please report security issues privately to dev@aidanlowson.com rather than in a public issue.

## License

[MIT](LICENSE) © Aidan Lowson

QR Code is a registered trademark of DENSO WAVE INCORPORATED.
