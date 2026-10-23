import { test, expect, Page } from '@playwright/test'

const tools: { path: string; heading: string; tab: string; fill: (page: Page) => Promise<void> }[] =
  [
    {
      path: '/wifi-qr-code-generator',
      heading: 'Free WiFi QR Code Generator',
      tab: 'WiFi',
      fill: async (page) => {
        await page.getByRole('textbox', { name: 'Network name (SSID)' }).fill('Cafe Guest')
        await page.getByRole('textbox', { name: 'Password' }).fill('correct-horse')
      },
    },
    {
      path: '/vcard-qr-code-generator',
      heading: 'Free vCard QR Code Generator',
      tab: 'Contact',
      fill: async (page) => {
        await page.getByRole('textbox', { name: 'First name' }).fill('Jane')
      },
    },
    {
      path: '/email-qr-code-generator',
      heading: 'Free Email QR Code Generator',
      tab: 'Email',
      fill: async (page) => {
        await page.getByRole('textbox', { name: 'Send to' }).fill('hello@example.com')
      },
    },
    {
      path: '/sms-qr-code-generator',
      heading: 'Free SMS QR Code Generator',
      tab: 'SMS',
      fill: async (page) => {
        await page.getByRole('textbox', { name: 'Phone number' }).fill('+44 7700 900123')
      },
    },
    {
      path: '/phone-number-qr-code-generator',
      heading: 'Free Phone Number QR Code Generator',
      tab: 'Phone',
      fill: async (page) => {
        await page.getByRole('textbox', { name: 'Phone number' }).fill('+44 7700 900123')
      },
    },
    {
      path: '/whatsapp-qr-code-generator',
      heading: 'Free WhatsApp QR Code Generator',
      tab: 'WhatsApp',
      fill: async (page) => {
        await page.getByRole('textbox', { name: 'WhatsApp number' }).fill('+44 7700 900123')
      },
    },
    {
      path: '/text-qr-code-generator',
      heading: 'Free Text QR Code Generator',
      tab: 'Text',
      fill: async (page) => {
        await page.getByRole('textbox', { name: 'Text', exact: true }).fill('Hello there')
      },
    },
    {
      path: '/location-qr-code-generator',
      heading: 'Free Location QR Code Generator',
      tab: 'Location',
      fill: async (page) => {
        await page
          .getByRole('textbox', { name: 'Address, place name or coordinates' })
          .fill('Tower Bridge, London')
      },
    },
  ]

for (const { path, heading, tab, fill } of tools) {
  test(`${path} generates a QR code`, async ({ page }) => {
    await page.goto(path)
    await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible()
    await expect(
      page.getByRole('navigation', { name: 'QR code type' }).getByRole('link', { name: tab }),
    ).toHaveAttribute('aria-current', 'page')

    const download = page.getByRole('button', { name: 'Download PNG' })
    await expect(download).toBeDisabled()
    await fill(page)
    await expect(download).toBeEnabled()
    // qrcode.react renders the code as an <svg role='img'>
    await expect(
      page.getByRole('region', { name: 'QR code preview' }).locator('svg[role="img"]'),
    ).toBeVisible()
  })
}

test('colours carry over when switching QR type', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('textbox', { name: 'Foreground colour' }).fill('#123456')
  await page
    .getByRole('navigation', { name: 'QR code type' })
    .getByRole('link', { name: 'WiFi' })
    .click()
  await expect(page).toHaveURL('/wifi-qr-code-generator')
  await expect(page.getByRole('textbox', { name: 'Foreground colour' })).toHaveValue('#123456')
})

test('open WiFi networks hide the password field', async ({ page }) => {
  await page.goto('/wifi-qr-code-generator')
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible()
  await page.getByRole('combobox', { name: 'Security' }).selectOption('nopass')
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeHidden()
  await page.getByRole('textbox', { name: 'Network name (SSID)' }).fill('Open Network')
  await expect(page.getByRole('button', { name: 'Download PNG' })).toBeEnabled()
})
