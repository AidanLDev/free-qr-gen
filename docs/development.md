# Development

## Prerequisites

- **Node.js 22** (the version CI uses)
- **pnpm 8** (pinned by `packageManager` in `package.json`; `corepack enable` will pick it up)
- Docker, only if you want to run the end-to-end tests in a container

## Setup

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. Installing also sets up the Husky pre-commit hook.

You don't need any environment variables to work on the generator, the tool pages or the guides. They are only needed for the feedback form and Sentry.

## Environment variables

Put local values in `.env.local` (git-ignored). Production values are GitHub Actions secrets, passed into the app by `sst.config.ts`.

| Variable                                                   | Needed for                                | Notes                                                                |
| ---------------------------------------------------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| `EMAIL_PASSWORD`                                           | Feedback form (`/api/send-feedback`)      | SMTP password for `dev@aidanlowson.com`                              |
| `NEXT_PUBLIC_SENTRY_DNS`                                   | Client-side Sentry                        | The Sentry DSN. The `DNS` spelling is historical; keep it consistent |
| `SENTRY_DNS`                                               | Server/edge Sentry                        | Same DSN                                                             |
| `SENTRY_AUTH_TOKEN`                                        | Uploading source maps during `pnpm build` | Deploy only                                                          |
| `HOSTED_ZONE_ID`                                           | SST deploy                                | Route 53 hosted zone for `freeqrgen.net`                             |
| `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION` | SST deploy                                | Deploy only                                                          |

## Scripts

### Running the app

| Command        | What it does                                                   |
| -------------- | -------------------------------------------------------------- |
| `pnpm dev`     | Dev server with Turbopack on http://localhost:3000             |
| `pnpm nextDev` | Dev server without Turbopack (useful if Turbopack misbehaves)  |
| `pnpm build`   | Production build (uses webpack, as the Sentry plugin requires) |
| `pnpm start`   | Serve a production build (run `pnpm build` first)              |

Use `pnpm dev --port 3100` to run a second dev server alongside the first.

### Code quality

| Command             | What it does                                                          |
| ------------------- | --------------------------------------------------------------------- |
| `pnpm lint`         | ESLint                                                                |
| `pnpm typecheck`    | TypeScript check only (`tsc --noEmit`), much faster than `pnpm build` |
| `pnpm format`       | Prettier: rewrite all files                                           |
| `pnpm format:check` | Prettier: check only (what CI runs)                                   |

### Tests

See [testing](testing.md) for what each suite covers and how to write tests.

| Command                              | What it does                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------- |
| `pnpm test`                          | Vitest unit tests, run once (a few seconds)                                           |
| `pnpm test:watch`                    | Vitest in watch mode, re-running on save                                              |
| `pnpm vitest run <path>`             | Unit tests for one file or folder, e.g. `pnpm vitest run src/app/lib`                 |
| `pnpm test:e2e`                      | Playwright E2E tests; starts a dev server on `PORT` (default 3000) if none is running |
| `PORT=3100 pnpm test:e2e`            | E2E tests on another port, so parallel checkouts don't test each other's code         |
| `pnpm test:e2e-open`                 | Playwright UI mode                                                                    |
| `tests/e2e/run-playwright-docker.sh` | E2E tests inside the official Playwright Docker image                                 |

### Deployment

You shouldn't normally need these: every merge to `main` deploys through GitHub Actions. See [deployment](deployment.md).

| Command        | What it does                                               |
| -------------- | ---------------------------------------------------------- |
| `pnpm deploy`  | Deploy to production with SST (skips the CI and E2E gates) |
| `pnpm refresh` | `sst refresh` for the production stage                     |

## Before opening a pull request

Run the same checks as CI:

```bash
pnpm format && pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e
```

Then go through the [definition of done](dod.md). The pull request template has it as a checklist.

If you add, remove or upgrade a dependency, commit the updated `pnpm-lock.yaml`. CI and deploy both install with `--frozen-lockfile`, so a lockfile that's out of date fails the PR.

## Working with Claude Code

`.claude/settings.json` holds shared permission rules for Claude Code agents working in this repo:

- **Allowed without asking:** `pnpm install`, `lint`, `format`, `build`, the unit and E2E test scripts, and `git`.
- **Always blocked:** `pnpm deploy`, `pnpm refresh`, running `sst` directly, and pushing to `main`. Bare `git push` and `git push … HEAD` are blocked too, because they push whatever branch is checked out, which could be `main`. Agents push with an explicit branch name instead, e.g. `git push -u origin feature/my-change`.

These rules are a convenience, not a security boundary. A determined command can get around them, so `main` is also protected on GitHub. Put personal overrides in `.claude/settings.local.json`, which is git-ignored.

Project instructions for agents are in [CLAUDE.md](../CLAUDE.md).

## Code style

- **Prettier** (`.prettierrc`): no semicolons, single quotes (including JSX), 2-space indent, 100-character lines, trailing commas, Tailwind class sorting.
- **Pre-commit hook:** `lint-staged` runs Prettier on staged JS/TS/JSON/CSS/Markdown files.
- **CI** fails on unformatted files, lint errors, failing unit or E2E tests, or a broken build.
- **Imports:** `@/` maps to `src/`. Existing code uses both `@/app/...` and relative paths.
- **Comments** explain _why_, not what. See `lib/qrPayloads.ts` for the house style.
- **British English** in user-facing copy (`colour`, `organisation`, `en-GB` locale). Code identifiers follow the same spelling (`bgColour`, `QRStyleProvider`).
- **Images** go in as `.webp` and compressed (see the [definition of done](dod.md)).

## Branches and commits

See [CONTRIBUTING.md](../CONTRIBUTING.md): branch from `main` as `feature/…`, `fix/…` or `chore/…`, and use Conventional Commit messages.

## Common tasks

- [Add a new QR code type](how-to/add-a-qr-type.md)
- [Add a new guide](how-to/add-a-guide.md)
- Change page titles, metadata or structured data: [SEO](seo.md)
