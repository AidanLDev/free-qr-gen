import { defineConfig } from '@playwright/test'

// Set PORT to run several checkouts (e.g. git worktrees) side by side. Without it, a run would
// reuse whichever dev server already holds :3000 and test that checkout's code instead.
const port = Number(process.env.PORT) || 3000
const baseURL = `http://localhost:${port}`

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 30_000,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    baseURL,
    headless: true,
    actionTimeout: 0,
    trace: 'on-first-retry',
  },
  webServer: {
    // Try pnpm if available, otherwise fall back to npm
    command: `sh -c "command -v pnpm >/dev/null 2>&1 && pnpm dev --port ${port} || npm run dev -- --port ${port}"`,
    url: baseURL,
    reuseExistingServer: true,
    timeout: 120_000,
  },
})
