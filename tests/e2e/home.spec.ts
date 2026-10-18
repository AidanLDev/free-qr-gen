import { test, expect } from '@playwright/test'

test('home shows main heading', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Free QR Code Generator',
    }),
  ).toBeVisible()
})

test('footer links to the about page', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('contentinfo').getByRole('link', { name: 'About' }).click()
  await expect(page).toHaveURL('/about')
  await expect(page.getByRole('heading', { level: 1, name: 'About Free QR Gen' })).toBeVisible()
})

test('footer links to the what is a QR code page', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('contentinfo').getByRole('link', { name: 'What is a QR code?' }).click()
  await expect(page).toHaveURL('/what-is-a-qr-code')
  await expect(page.getByRole('heading', { level: 1, name: 'What is a QR code?' })).toBeVisible()
})
