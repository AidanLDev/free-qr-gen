import { test, expect } from '@playwright/test'

test('home shows main heading', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Welcome! Generate a free QR Code',
    })
  ).toBeVisible()
})
