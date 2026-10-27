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

test('footer links to the restaurant menu QR code guide', async ({ page }) => {
  await page.goto('/')
  await page
    .getByRole('contentinfo')
    .getByRole('link', { name: 'Restaurant menu QR codes' })
    .click()
  await expect(page).toHaveURL('/qr-code-for-restaurant-menu')
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'How to make a QR code for your restaurant menu',
    }),
  ).toBeVisible()
})

test('shows the progress bar while a slow navigation is pending', async ({ page }) => {
  await page.goto('/')
  // Hold back the page data a client-side navigation fetches so the click stays pending
  await page.route('**/about**', async (route) => {
    if (route.request().headers()['rsc']) await new Promise((resolve) => setTimeout(resolve, 1500))
    await route.continue()
  })

  const bar = page.getByTestId('navigation-progress')
  await expect(bar).not.toHaveClass(/is-pending/)
  await page.getByRole('contentinfo').getByRole('link', { name: 'About' }).click()
  await expect(bar).toHaveClass(/is-pending/)
  await expect(page).toHaveURL('/about')
  await expect(bar).not.toHaveClass(/is-pending/)
})
