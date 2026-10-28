# CLAUDE.md

Free QR Gen ([freeqrgen.net](https://freeqrgen.net)) is a free QR code generator. It's a Next.js 16 App Router site deployed to AWS with SST. QR codes are generated **entirely in the browser**. The server only renders pages and sends feedback emails.

@AGENTS.md

## Definition of done

Every new feature or change to an existing one must meet the definition of done before you call it finished. Go through it at the end of each task and tell the user which items you checked and which you couldn't (for example a review by a maintainer).

@docs/dod.md

## Commands

```bash
pnpm dev            # dev server on :3000
pnpm lint           # ESLint
pnpm typecheck      # TypeScript only, much faster than a full build
pnpm format         # Prettier, rewrites files (CI runs format:check)
pnpm build          # production build (webpack, needed for the Sentry plugin)
pnpm test           # Vitest unit tests (seconds); use while working
pnpm test:e2e       # Playwright; reuses a server already on PORT (default 3000)
```

Before saying a change is done, run `pnpm format && pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e`. CI runs all of these on every PR.

If other checkouts or worktrees may be running a dev server, run the E2E tests on a port of your own (`PORT=3100 pnpm test:e2e`). Otherwise Playwright reuses whatever server is on port 3000 and tests the wrong code.

Never run `pnpm deploy` or `pnpm refresh`. Every merge to `main` deploys to production through GitHub Actions.

## Where things live

- `src/app/lib/qrTypes.ts`: config for each QR type (route, label, icon, form fields, validation)
- `src/app/lib/qrPayloads.ts`: encoders that turn form values into the QR payload string
- `src/app/lib/toolPageContent.ts`: copy, steps and FAQs for each tool page
- `src/app/lib/guides.ts`: registry of guides (title, description, dates, related types)
- `src/app/lib/metadata.ts`: `pageMetadata()`, used for every page's metadata
- `src/app/components/ToolPage.tsx`, `GuidePage.tsx`: shared page layouts
- `src/app/components/form/QRInfoForm.tsx`, `QRPreview.tsx`: the generator form and the download logic
- `*.test.ts(x)` next to the code: Vitest unit tests. Add or update one whenever you add or change a component or `lib/` function. See [docs/testing.md](docs/testing.md) for the mocks and quirks
- `tests/e2e/`: Playwright tests, which loop over the `lib/` data

Read [docs/architecture.md](docs/architecture.md) for the full picture.

## Rules

- **Keep QR generation client side.** Never send QR content, form values or uploaded logos to a server, and never add a redirect or tracking link to a code. The site promises users their WiFi passwords never leave the browser and their codes never expire. See [ADR 0001](docs/adr/0001-static-client-side-qr-codes.md).
- **The QR type config drives the site.** Tabs, the footer, the sitemap and tests read `qrTypes`. To add a type, follow [docs/how-to/add-a-qr-type.md](docs/how-to/add-a-qr-type.md): `types.ts` → `qrTypes.ts` → `qrPayloads.ts` → `toolPageContent.ts` → route folder → `tools.spec.ts`.
- **Encoders return `null`** until the required fields are present and valid. Escape payloads to their format's rules (see `escapeWifi`, `escapeVCard`).
- **Guides:** register them in `lib/guides.ts` first (`getGuide` throws for an unknown path), then build the page with `GuidePage`. Follow [docs/how-to/add-a-guide.md](docs/how-to/add-a-guide.md). Link to at least one generator from the body.
- **Metadata:** always use `pageMetadata()`, `toolPageMetadata()` or `guideMetadata()`. Don't set `openGraph` by hand, because child routes replace the layout's rather than merging with it. Keep tool titles to ~45 characters and guide titles to ~60 including the ` | Free QR Gen` suffix. See [docs/seo.md](docs/seo.md).
- **Sitemap dates:** when content changes meaningfully, bump the guide's `updated` in `lib/guides.ts`, or `toolsUpdated` in `src/app/sitemap.ts` for tool pages.
- **Images:** content images go in `public/guide-images/<guide>/` as compressed `.webp` files, shown with `ArticleFigure` with real `width`/`height` and descriptive `alt` text. Never give a `public/` folder the same name as a route: on AWS the folder takes over the page (see [docs/architecture.md](docs/architecture.md#directory-layout)).
- **Accessibility:** every input needs a label, because tests select elements by role and accessible name. Keep things keyboard usable.
- **Don't call `/api/send-feedback`** in tests or by hand. It sends a real email.
- **New env vars** need adding in four places: GitHub secrets (tell the user), `.github/workflows/deploy.yml`, `sst.config.ts` and [docs/development.md](docs/development.md). The Sentry variables are spelled `*_SENTRY_DNS` on purpose; keep it that way.
- **Don't edit the generated block in `AGENTS.md`.** `next dev` rewrites it.

## Style

- Prettier: no semicolons, single quotes (including JSX attributes), 100-character lines, trailing commas. Tailwind classes are sorted automatically.
- British English in user-facing copy and identifiers (`colour`, `organisation`, `bgColour`). The locale is `en-GB`.
- Comments explain _why_, not _what_. Match the short, plain style in `lib/qrPayloads.ts`.
- Shared Tailwind component classes (`card`, `input`, `field-label`, `field-hint`, `field-warning`, `section-title`) are in `src/app/globals.css`. Reuse them before adding new ones.
- `@/` maps to `src/`.
- Import `Link` from `@/app/components/Link`, not `next/link`, so slow navigations show the progress bar. ESLint enforces this.

## Docs

Update docs in the same change as the code:

- Behaviour or architecture changed → [docs/architecture.md](docs/architecture.md) or the relevant doc in [docs/](docs/README.md)
- Significant or hard-to-reverse decision → a new ADR in [docs/adr/](docs/adr/README.md)
- Workaround or known issue introduced, or one fixed → [docs/tech-debt.md](docs/tech-debt.md)

## Git

- Work on your own branch off `main`: `feature/…`, `fix/…` or `chore/…`. Never commit to `main`.
- Commit messages use Conventional Commits (`feat: …`, `fix: …`, `docs: …`). Commit as you go on your branch.
- Push with an explicit branch name: `git push -u origin feature/my-change`. Bare `git push`, `git push … HEAD` and any push to `main` are blocked in `.claude/settings.json`.
- Open a pull request with `gh pr create`, filling in `.github/PULL_REQUEST_TEMPLATE.md`. Say which definition-of-done items you checked and which you couldn't.
- **Never merge a pull request.** Merging to `main` deploys to production, so a human merges. `gh pr merge` is blocked in `.claude/settings.json`.
