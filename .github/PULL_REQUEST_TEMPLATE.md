<!--- Provide a general summary of your changes in the Title above -->

## What/Why

A short description of what changed and why. Link to the issue if one exists (`Closes #123`).

## How to test

Steps to reproduce or verify the changes locally.

## Definition of done

<!-- Mirrors docs/dod.md; keep the two in sync. Tick what applies, and strike through (~~like this~~) or explain anything that doesn't. -->

**Checks** (`pnpm format && pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e`)

- [ ] Format, lint and typecheck pass
- [ ] Unit tests pass (`pnpm test`)
- [ ] E2E tests pass locally (`pnpm test:e2e`)
- [ ] Builds locally (`pnpm build`)

**Tests**

- [ ] Existing tests updated for changed features
- [ ] New tests added for new features

**Product**

- [ ] No QR content or logos are sent to a server
- [ ] QR code changes tested on real iOS and Android devices
- [ ] Front-end changes checked at mobile and desktop widths
- [ ] New pages added to the sitemap
- [ ] Content images compressed and converted to `.webp`

**Docs and config**

- [ ] Existing docs updated; new docs for new features; an ADR for significant decisions
- [ ] New env vars wired up in GitHub secrets, `deploy.yml`, `sst.config.ts` and `docs/development.md`
- [ ] Shortcuts taken are recorded in `docs/tech-debt.md`
- [ ] No secrets or credentials included

<!-- After merge: check the deploy succeeded and smoke-test the live site. -->
