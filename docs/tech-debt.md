# Known issues and tech debt

Things that are known to be off, with enough context to fix them. Remove an entry once it's fixed. Turn an entry into a GitHub issue when someone picks it up.

## Feedback route (`src/app/api/send-feedback/route.ts`)

- **User input goes into the email HTML unescaped.** `feedback` is interpolated straight into the HTML body, so someone could inject markup into the emails you receive. Escape it, or send plain text only.
- **TLS certificate checks are off** (`rejectUnauthorized: false`). Check whether privateemail.com still needs this; if not, remove it.
- **Failures return HTTP 200.** Both the success and failure paths return 200 with a message, so the client can't tell them apart from the status code. Return a 5xx on failure.
- **Also exported as `GET`.** Only `POST` is needed. A `GET` has no body, so `req.json()` throws before the `try` and the route returns a 500.
- **No input validation or rate limiting**, so the form can be used to spam the inbox.

## Leftovers from the removed newsletter

The newsletter subscribe route was removed (commit `b0e4ba0`), but these remain:

- the `@aws-sdk/client-dynamodb` dependency in `package.json`,
- the DynamoDB IAM permission on `NewsLetterSubscribers` in `sst.config.ts` (it also hard-codes the AWS account ID).

## Sentry

- **Server-side Sentry is disabled.** `src/instrumentation.ts` doesn't load the server/edge config, because of an OpenTelemetry crash on Node.js 22.0.0. CI now uses a later Node 22 release, so it may be safe to turn back on (the comment suggests ≥ 22.11). `sentry.server.config.ts` also sets `integrations: []` as a second workaround.
- **`tracesSampleRate: 1` and `sendDefaultPii: true`** in all Sentry configs. Sampling every trace can get expensive as traffic grows, and sending PII should be weighed against the site's privacy messaging.
- **`automaticVercelMonitors: true`** in `next.config.ts` does nothing on AWS.
- **`*_SENTRY_DNS` should be `*_SENTRY_DSN`.** Renaming means updating the GitHub secrets, `deploy.yml`, `sst.config.ts` and the Sentry configs together.

## CI and tooling

- **pnpm 8** is pinned. pnpm 8 is end-of-life.
- **`.eslintrc.json`** sits next to `eslint.config.mjs`. ESLint 9 ignores the old format, so it can probably be deleted.
- **The definition of done lives in two places**, `docs/dod.md` and the checklist in `.github/PULL_REQUEST_TEMPLATE.md`, which have to be kept in sync by hand.

## Docs and content

- **`/qr-code-for-restaurant-menu` doesn't use `GuidePage`**, so it builds its own layout and structured data. Moving it onto `GuidePage` would make it consistent with the other guides.
- **The footer's "Resources" list is hard-coded** in `Footer.tsx`, separately from `lib/guides.ts`.
