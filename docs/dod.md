# Definition of done

## Before merge

- Content images are compressed and converted into .webp format
- Unit tests pass locally `pnpm test`
- E2e tests pass locally `pnpm test:e2e`
- Format & Lint checks pass
- Code builds successfully locally
- Existing tests updated if changing an existing feature
- New tests added if creating a new feature
- Appropriate documentation has been updated if updating a feature that has documentation already
- New docs added for new features, and an ADR for significant decisions
- No QR content or logos are to be sent to a server, respect user's privacy
- QR Code changes/features are tested with real-devices
- Add new pages to the sitemap
- Check FE changes at mobile and desktop widths
- New env vars must be wired up correctly, via GitHub secrets, deploy.yml, sst.config.ts & docs/development.md
- Add any shortcuts taken to docs/tech-debt.md

## After merge

- Check the deploy succeeded
- Live site smoke-test
