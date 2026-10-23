import { IconType } from 'react-icons'
import { FaWhatsapp } from 'react-icons/fa'
import {
  MdContactPhone,
  MdEmail,
  MdLink,
  MdLocationOn,
  MdPhone,
  MdSms,
  MdTextFields,
  MdWifi,
} from 'react-icons/md'
import { urlRegex } from '../constants/constants'
import { QrFieldValues, QrType } from '../types'
import { validateEmail } from './helpers'
import { isValidPhone } from './qrPayloads'

export interface QrField {
  id: string
  label: string
  kind?: 'text' | 'textarea' | 'select' | 'checkbox'
  inputType?: string
  placeholder?: string
  hint?: string
  options?: { value: string; label: string }[]
  // Only runs once the field has a value; empty required fields just keep the preview blank
  validate?: (value: string) => string | undefined
  showIf?: (values: QrFieldValues) => boolean
}

export interface QrTypeConfig {
  path: string
  label: string
  icon: IconType
  previewPlaceholder: string
  filename: string
  defaults?: QrFieldValues
  fields: QrField[]
}

const urlError = (value: string) =>
  urlRegex.test(value.trim()) ? undefined : 'Enter a valid URL, for example google.com'
const emailError = (value: string) =>
  validateEmail(value.trim()) ? undefined : 'Enter a valid email address'
const phoneError = (value: string) =>
  isValidPhone(value) ? undefined : 'Enter a valid phone number, for example +44 7700 900123'

const phoneField: QrField = {
  id: 'phone',
  label: 'Phone number',
  inputType: 'tel',
  placeholder: '+44 7700 900123',
  hint: 'Include the country code so it works from abroad.',
  validate: phoneError,
}

export const qrTypes: Record<QrType, QrTypeConfig> = {
  url: {
    path: '/',
    label: 'URL',
    icon: MdLink,
    previewPlaceholder: 'Enter a URL to generate your QR code',
    filename: 'qrcode',
    fields: [
      {
        id: 'url',
        label: 'QR Code URL',
        inputType: 'url',
        placeholder: 'e.g. google.com',
        validate: urlError,
      },
    ],
  },
  wifi: {
    path: '/wifi-qr-code-generator',
    label: 'WiFi',
    icon: MdWifi,
    previewPlaceholder: 'Enter your network name and password',
    filename: 'wifi-qrcode',
    defaults: { security: 'WPA' },
    fields: [
      { id: 'ssid', label: 'Network name (SSID)', placeholder: 'e.g. MyHomeWiFi' },
      {
        id: 'security',
        label: 'Security',
        kind: 'select',
        options: [
          { value: 'WPA', label: 'WPA / WPA2 / WPA3' },
          { value: 'WEP', label: 'WEP' },
          { value: 'nopass', label: 'None (open network)' },
        ],
        hint: 'Most home and office routers use WPA2 or WPA3. Check the sticker on your router if unsure.',
      },
      {
        id: 'password',
        label: 'Password',
        placeholder: 'Your WiFi password',
        hint: 'Your password stays in your browser. It is never sent to our servers.',
        showIf: (values) => values.security !== 'nopass',
      },
      { id: 'hidden', label: 'Hidden network', kind: 'checkbox' },
    ],
  },
  vcard: {
    path: '/vcard-qr-code-generator',
    label: 'Contact',
    icon: MdContactPhone,
    previewPlaceholder: 'Enter a name to generate your contact card',
    filename: 'contact-qrcode',
    fields: [
      { id: 'firstName', label: 'First name', placeholder: 'Jane' },
      { id: 'lastName', label: 'Last name', placeholder: 'Smith' },
      { ...phoneField, hint: undefined },
      {
        id: 'email',
        label: 'Email',
        inputType: 'email',
        placeholder: 'jane@example.com',
        validate: emailError,
      },
      { id: 'organisation', label: 'Company', placeholder: 'Acme Ltd' },
      { id: 'jobTitle', label: 'Job title', placeholder: 'Designer' },
      {
        id: 'website',
        label: 'Website',
        inputType: 'url',
        placeholder: 'example.com',
        validate: urlError,
      },
      {
        id: 'address',
        label: 'Address',
        kind: 'textarea',
        placeholder: '1 High Street, London, SW1A 1AA',
      },
    ],
  },
  email: {
    path: '/email-qr-code-generator',
    label: 'Email',
    icon: MdEmail,
    previewPlaceholder: 'Enter an email address to generate your QR code',
    filename: 'email-qrcode',
    fields: [
      {
        id: 'to',
        label: 'Send to',
        inputType: 'email',
        placeholder: 'hello@example.com',
        validate: emailError,
      },
      { id: 'subject', label: 'Subject (optional)', placeholder: 'Enquiry' },
      { id: 'body', label: 'Message (optional)', kind: 'textarea' },
    ],
  },
  sms: {
    path: '/sms-qr-code-generator',
    label: 'SMS',
    icon: MdSms,
    previewPlaceholder: 'Enter a phone number to generate your QR code',
    filename: 'sms-qrcode',
    fields: [
      phoneField,
      {
        id: 'message',
        label: 'Message (optional)',
        kind: 'textarea',
        hint: 'Pre-filled in the text. People can edit it before they press send.',
      },
    ],
  },
  phone: {
    path: '/phone-number-qr-code-generator',
    label: 'Phone',
    icon: MdPhone,
    previewPlaceholder: 'Enter a phone number to generate your QR code',
    filename: 'phone-qrcode',
    fields: [phoneField],
  },
  whatsapp: {
    path: '/whatsapp-qr-code-generator',
    label: 'WhatsApp',
    icon: FaWhatsapp,
    previewPlaceholder: 'Enter your WhatsApp number to generate your QR code',
    filename: 'whatsapp-qrcode',
    fields: [
      {
        ...phoneField,
        label: 'WhatsApp number',
        hint: 'Must include the country code, for example +44 for the UK or +1 for the US.',
      },
      {
        id: 'message',
        label: 'Pre-filled message (optional)',
        kind: 'textarea',
        placeholder: 'Hi, I would like to book a table',
      },
    ],
  },
  text: {
    path: '/text-qr-code-generator',
    label: 'Text',
    icon: MdTextFields,
    previewPlaceholder: 'Enter some text to generate your QR code',
    filename: 'text-qrcode',
    fields: [{ id: 'text', label: 'Text', kind: 'textarea' }],
  },
  location: {
    path: '/location-qr-code-generator',
    label: 'Location',
    icon: MdLocationOn,
    previewPlaceholder: 'Enter an address to generate your QR code',
    filename: 'location-qrcode',
    fields: [
      {
        id: 'query',
        label: 'Address, place name or coordinates',
        placeholder: 'e.g. Tower Bridge, London or 51.5055, -0.0754',
        hint: 'Opens Google Maps, in the app if installed or in the browser if not.',
      },
    ],
  },
}

export const qrTypeList = (Object.keys(qrTypes) as QrType[]).map((type) => ({
  type,
  ...qrTypes[type],
}))
