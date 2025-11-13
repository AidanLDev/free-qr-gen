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

Before opening a PR

- Run linters: `pnpm lint`
- Build locally: `pnpm build`
- Make sure you do not commit secrets or credentials. Use environment variables for any secrets.

Environment variables (for local testing of all features)

- `EMAIL_PASSWORD` — SMTP password for the feedback endpoint.
- `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION` — required for SST/DynamoDB features if you want to test subscription endpoints locally.

Pull request process

1. Open an issue describing the change (unless it is a small typo).
2. Create a branch with a descriptive name and a clear commit history.
3. Open a pull request describing what and why, with testing steps.

PR checklist

- [ ] Linked issue (if applicable)
- [ ] Linted (`pnpm lint`)
- [ ] Build passes (`pnpm build`)
- [ ] No secrets committed
- [ ] Small, focused change with tests or manual steps to verify

Code style and testing

- The project uses the formatting rules in `package.json` `prettier` section. Please run your editor’s format on save or use Prettier manually.

Security

- Do not include credentials or private keys in commits. If you discover a security issue, report it privately to `dev@aidanlowson.com`.

Thanks for contributing — we appreciate improvements of all sizes!
