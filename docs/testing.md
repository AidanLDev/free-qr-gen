# Testing

There are two kinds of test:

| Kind     | Tool                                                                                   | Where                                     | Speed                    |
| -------- | -------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------ |
| **Unit** | [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com) in jsdom | `*.test.ts(x)` next to the code in `src/` | Seconds, no browser      |
| **E2E**  | [Playwright](https://playwright.dev) against a real dev server                         | `tests/e2e/`                              | About a minute, Chromium |

Unit tests are the quick check while you work. E2E tests prove the pages work together in a real browser.

## Unit tests

```bash
pnpm test         # run once
pnpm test:watch   # re-run on save
pnpm vitest run src/app/lib/qrPayloads.test.ts   # one file
```

Config is in `vitest.config.mts`. `vitest.setup.ts` adds the [jest-dom](https://github.com/testing-library/jest-dom) matchers (`toBeInTheDocument`, `toHaveAttribute`…) and cleans up between tests.

### What's covered

- **`lib/`**: every QR payload encoder (escaping, phone formats, required fields), the colour contrast and email helpers, `pageMetadata`, plus `content.test.ts`. That last file checks the content registries: every QR type and guide has a route folder, paths are unique, guide dates are valid, and tool titles fit in search results.
- **Every component in `components/`** and the `useClickOutside` hook: rendering, accessible names, user interactions and the structured data each page outputs.

### Writing unit tests

- Put the test next to the file it covers: `Foo.tsx` → `Foo.test.tsx`.
- Find elements by role and accessible name (`getByRole('textbox', { name: 'Phone number' })`), and drive them with `@testing-library/user-event`, as a user would.
- Import `describe`, `it`, `expect` and `vi` from `vitest` (globals are off).
- Mocks the tests already use:
  - `vi.mock('react-toastify', () => ({ toast: vi.fn() }))` to check toast messages.
  - `vi.mock('next/dynamic', …)` to replace the `react-color` picker, which needs browser APIs jsdom lacks.
  - `vi.stubGlobal('fetch', …)` for anything that calls the API. Never let a test send real feedback email.
- Components that use `useQRStyle()` (`QRInfoForm`, `ToolPage`) must be rendered inside `<QRStyleProvider>`.
- Vitest can't render `async` Server Components. Cover those with E2E tests.
- jsdom has quirks: no `<canvas>` (so PNG download isn't unit tested), and its `XMLSerializer` writes `xmlns` twice on SVGs, which real browsers don't (see `QRPreview.test.tsx`).

## E2E tests

```bash
pnpm exec playwright install chromium   # first time only
pnpm test:e2e                            # headless
pnpm test:e2e-open                       # Playwright UI mode
PORT=3100 pnpm test:e2e                  # on another port
```

Playwright starts `pnpm dev` on `PORT` (default 3000), or reuses a server already listening on that port. An HTML report is written to `playwright-report/`.

**Running several checkouts at once** (for example git worktrees for parallel agents): give each one its own `PORT`. Otherwise one checkout's tests reuse another's dev server on port 3000 and test the wrong code.

### In Docker

`tests/e2e/run-playwright-docker.sh` runs the suite inside the official Playwright image. Use it if browsers won't install on your machine. It starts the Docker daemon if needed (this may ask for `sudo`). Set `SKIP_INSTALLS=1` to skip the dependency install step on repeat runs.

Keep the image tag in that script in step with the `@playwright/test` version in `package.json`.

### What's covered

| File             | Covers                                                                                                                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `home.spec.ts`   | Home page heading, footer links to the about page and key guides                                                                                                                      |
| `tools.spec.ts`  | Every QR type page: heading, active tab, filling the form enables download and renders a code. Also: colours carry over between types, and open WiFi networks hide the password field |
| `guides.spec.ts` | Guides hub lists every guide; every guide has its title, `Article` JSON-LD and a link to a generator                                                                                  |

`guides.spec.ts` loops over `lib/guides.ts`, and the tool tests import `lib/qrTypes.ts`. A new guide is therefore tested automatically. A new QR type needs an entry in the `tools` array in `tools.spec.ts`.

## Where the tests run

- **Pull requests and pushes to `main` (`ci.yml`):** format check, lint, unit tests, build, E2E tests.
- **Deploy (`deploy.yml`):** unit and E2E tests run again before `sst deploy`, and a failure blocks the deploy.

## General rules

- Drive tests from the data in `src/app/lib/` where possible, so new content gets covered without new test code.
- Don't call external services. The feedback route sends a real email.
