# Contributing to free-qr-gen

Thanks for your interest in contributing! This document explains the typical contribution workflow and how to get your changes merged quickly.

Getting started

- Fork the repository and open a branch from `main`.
- Branch naming:
  - Features: `feature/short-description`
  - Fixes: `fix/short-description`
  - Chores: `chore/short-description`
- Use Conventional Commits for commit messages (e.g., `feat: add download button`, `fix: correct QR size`).

Local development

```bash
pnpm install
pnpm dev
```

See [docs/development.md](docs/development.md) for all the scripts, and [docs/](docs/README.md) for how the project fits together.

Environment variables

You don't need any to work on the generator, tool pages or guides. `EMAIL_PASSWORD` (the SMTP password) is only needed to test the feedback form. The full list is in [docs/development.md](docs/development.md#environment-variables).

Pull request process

1. Open an issue describing the change (unless it is a small typo). The feature template asks for acceptance criteria.
2. Create a branch with a descriptive name and a clear commit history.
3. Before opening the PR, run the same checks as CI:

   ```bash
   pnpm format && pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e
   ```

4. Open a pull request. The template walks you through the [definition of done](docs/dod.md), the checklist every change is held to.

Code style and testing

- Formatting rules are in `.prettierrc`. Please run your editor’s format on save, or `pnpm format`. A pre-commit hook formats staged files too.
- Add or update unit tests next to the code you change (`Foo.tsx` → `Foo.test.tsx`). See [docs/testing.md](docs/testing.md).

Security

- Do not include credentials or private keys in commits. If you discover a security issue, report it privately to `dev@aidanlowson.com`.

Thanks for contributing — we appreciate improvements of all sizes!
