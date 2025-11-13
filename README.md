# free-qr-gen

Generate and download QR codes quickly — a lightweight Next.js + TypeScript app (deployed with SST) that includes feedback and a newsletter subscription endpoint backed by AWS.

[![License](https://img.shields.io/github/license/AidanLDev/free-qr-gen?style=flat-square)](./LICENSE) [![CI](https://github.com/AidanLDev/free-qr-gen/actions/workflows/ci.yml/badge.svg)](https://github.com/AidanLDev/free-qr-gen/actions)

Quick links

- Source: repository root
- Docs: `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `LICENSE`

Features

- Generate customizable QR codes in the browser
- Download SVG/PNG output
- Feedback form that sends email via `nodemailer`
- Newsletter subscribe endpoint (DynamoDB via `@aws-sdk/client-dynamodb`)
- Support links (BuyMeACoffee and support page)

Quick start

1. Install dependencies (recommended: `pnpm`):

```bash
pnpm install
```

2. Run the dev server:

```bash
pnpm dev
```

3. Build for production:

```bash
pnpm build
```

Environment variables

- `EMAIL_PASSWORD` — SMTP password used by the feedback route (set locally or in CI / hosting)
- `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION` — required for SST deploy and the subscribe route when using DynamoDB
- `HOSTED_ZONE_ID` — if using hosted DNS configuration in SST

Repository layout

- `src/app/` — Next.js app router pages and layout
- `src/components/` — UI components including QR renderer
- `src/api/` — API routes (feedback, subscribe)
- `sst.config.ts` — SST deployment configuration

Contributing
Please read `CONTRIBUTING.md` for how to contribute, branch naming, and PR guidance.

License
This project is licensed under the MIT License — see the `LICENSE` file for details.

Contact & Support

- Author: Aidan Lowson — `dev@aidanlowson.com`
- Support: BuyMeACoffee link is used in the app UI (see `src/components/BuyMeACoffeeButton`)

Notes

- The repo is currently configured with `private: true` in `package.json` to prevent accidental npm publishing. Remove or change this before publishing to the npm registry.
  This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
