import { urlRegex } from '../constants/constants'
import { QrFieldValues, QrType } from '../types'
import { validateEmail } from './helpers'

// Turns the form values for each QR type into the text stored in the code.
// Every encoder returns null until the required fields are filled in and valid.

export const isValidPhone = (phone: string): boolean =>
  /^\+?[\d\s().-]+$/.test(phone.trim()) && phone.replace(/\D/g, '').length >= 5

// Drops formatting, including the UK-style "(0)" in "+44 (0) 7700 900123"
const normalisePhone = (phone: string) => phone.replace(/\(0\)/g, '').replace(/[\s().-]/g, '')

const trimmed = (values: QrFieldValues, key: string) => (values[key] ?? '').trim()

// Without a scheme some phone cameras treat the code as plain text instead of a link
export const withScheme = (url: string) =>
  /^[a-z][a-z\d+.-]*:/i.test(url) ? url : `https://${url}`

// WiFi strings use backslash escapes for \ ; , : and "
const escapeWifi = (value: string) => value.replace(/([\\;,:"])/g, '\\$1')

// vCard 3.0 text values escape \ , ; and newlines
const escapeVCard = (value: string) =>
  value
    .replace(/\\/g, '\\\\')
    .replace(/([,;])/g, '\\$1')
    .replace(/\r?\n/g, '\\n')

const encodeUrl = (values: QrFieldValues) => {
  const url = trimmed(values, 'url')
  return urlRegex.test(url) ? withScheme(url) : null
}

const encodeWifi = (values: QrFieldValues) => {
  const ssid = values.ssid ?? ''
  const security = values.security || 'WPA'
  const password = values.password ?? ''
  if (!ssid.trim()) return null
  if (security !== 'nopass' && !password) return null
  const parts = [`T:${security}`, `S:${escapeWifi(ssid)}`]
  if (security !== 'nopass') parts.push(`P:${escapeWifi(password)}`)
  if (values.hidden === 'true') parts.push('H:true')
  return `WIFI:${parts.join(';')};;`
}

const encodeVCard = (values: QrFieldValues) => {
  const first = trimmed(values, 'firstName')
  const last = trimmed(values, 'lastName')
  const org = trimmed(values, 'organisation')
  const phone = trimmed(values, 'phone')
  const email = trimmed(values, 'email')
  const website = trimmed(values, 'website')
  if (!first && !last && !org) return null
  if (phone && !isValidPhone(phone)) return null
  if (email && !validateEmail(email)) return null
  if (website && !urlRegex.test(website)) return null

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${escapeVCard(last)};${escapeVCard(first)};;;`,
    `FN:${escapeVCard([first, last].filter(Boolean).join(' ') || org)}`,
  ]
  if (org) lines.push(`ORG:${escapeVCard(org)}`)
  const title = trimmed(values, 'jobTitle')
  if (title) lines.push(`TITLE:${escapeVCard(title)}`)
  if (phone) lines.push(`TEL;TYPE=CELL:${normalisePhone(phone)}`)
  if (email) lines.push(`EMAIL:${email}`)
  if (website) lines.push(`URL:${withScheme(website)}`)
  const address = trimmed(values, 'address')
  if (address) lines.push(`ADR:;;${escapeVCard(address)};;;;`)
  lines.push('END:VCARD')
  return lines.join('\n')
}

const encodeEmail = (values: QrFieldValues) => {
  const to = trimmed(values, 'to')
  if (!validateEmail(to)) return null
  const params = (['subject', 'body'] as const)
    .filter((key) => trimmed(values, key))
    .map((key) => `${key}=${encodeURIComponent(trimmed(values, key))}`)
  return `mailto:${to}${params.length ? `?${params.join('&')}` : ''}`
}

const encodeSms = (values: QrFieldValues) => {
  const phone = trimmed(values, 'phone')
  if (!isValidPhone(phone)) return null
  return `SMSTO:${normalisePhone(phone)}:${values.message ?? ''}`
}

const encodePhone = (values: QrFieldValues) => {
  const phone = trimmed(values, 'phone')
  return isValidPhone(phone) ? `tel:${normalisePhone(phone)}` : null
}

const encodeWhatsApp = (values: QrFieldValues) => {
  const phone = trimmed(values, 'phone')
  if (!isValidPhone(phone)) return null
  // wa.me wants the full international number as digits only, with no + or leading zeros
  const digits = normalisePhone(phone).replace(/\D/g, '').replace(/^0+/, '')
  const message = trimmed(values, 'message')
  return `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ''}`
}

const encodeText = (values: QrFieldValues) => (values.text?.trim() ? values.text : null)

const encodeLocation = (values: QrFieldValues) => {
  const query = trimmed(values, 'query')
  if (!query) return null
  // A Google Maps link opens on every phone, unlike geo: URIs which iPhones ignore
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

const encoders: Record<QrType, (values: QrFieldValues) => string | null> = {
  url: encodeUrl,
  wifi: encodeWifi,
  vcard: encodeVCard,
  email: encodeEmail,
  sms: encodeSms,
  phone: encodePhone,
  whatsapp: encodeWhatsApp,
  text: encodeText,
  location: encodeLocation,
}

export const encodeQrValue = (type: QrType, values: QrFieldValues): string | null =>
  encoders[type](values)
