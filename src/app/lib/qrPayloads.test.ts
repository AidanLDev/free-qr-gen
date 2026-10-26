import { describe, expect, it } from 'vitest'
import { encodeQrValue, isValidPhone, withScheme } from './qrPayloads'

describe('isValidPhone', () => {
  it.each(['+44 7700 900123', '07700900123', '+1 (555) 123-4567', '555.123.4567'])(
    'accepts %s',
    (phone) => expect(isValidPhone(phone)).toBe(true),
  )

  it.each(['', '1234', 'call me', '+44 7700 abc'])('rejects %s', (phone) =>
    expect(isValidPhone(phone)).toBe(false),
  )
})

describe('withScheme', () => {
  it('adds https:// when there is no scheme', () => {
    expect(withScheme('google.com')).toBe('https://google.com')
  })

  it('keeps an existing scheme', () => {
    expect(withScheme('http://google.com')).toBe('http://google.com')
    expect(withScheme('mailto:a@b.com')).toBe('mailto:a@b.com')
  })
})

describe('url', () => {
  it('returns null for an invalid URL', () => {
    expect(encodeQrValue('url', { url: 'not a url' })).toBeNull()
  })

  it('trims and adds a scheme', () => {
    expect(encodeQrValue('url', { url: '  example.com/menu ' })).toBe('https://example.com/menu')
  })
})

describe('wifi', () => {
  it('needs a network name', () => {
    expect(encodeQrValue('wifi', { ssid: ' ', password: 'secret' })).toBeNull()
  })

  it('needs a password unless the network is open', () => {
    expect(encodeQrValue('wifi', { ssid: 'Home', security: 'WPA' })).toBeNull()
    expect(encodeQrValue('wifi', { ssid: 'Cafe', security: 'nopass' })).toBe(
      'WIFI:T:nopass;S:Cafe;;',
    )
  })

  it('defaults to WPA and adds the hidden flag', () => {
    expect(encodeQrValue('wifi', { ssid: 'Home', password: 'pw', hidden: 'true' })).toBe(
      'WIFI:T:WPA;S:Home;P:pw;H:true;;',
    )
  })

  it('escapes special characters', () => {
    expect(encodeQrValue('wifi', { ssid: 'My;Net', password: 'a:b,c\\d"e' })).toBe(
      'WIFI:T:WPA;S:My\\;Net;P:a\\:b\\,c\\\\d\\"e;;',
    )
  })
})

describe('vcard', () => {
  it('needs a name or company', () => {
    expect(encodeQrValue('vcard', { phone: '+44 7700 900123' })).toBeNull()
    expect(encodeQrValue('vcard', { organisation: 'Acme' })).toContain('FN:Acme')
  })

  it('returns null when an optional field is invalid', () => {
    expect(encodeQrValue('vcard', { firstName: 'Jane', email: 'nope' })).toBeNull()
    expect(encodeQrValue('vcard', { firstName: 'Jane', phone: '12' })).toBeNull()
    expect(encodeQrValue('vcard', { firstName: 'Jane', website: 'nope' })).toBeNull()
  })

  it('builds a full vCard 3.0', () => {
    expect(
      encodeQrValue('vcard', {
        firstName: 'Jane',
        lastName: 'Smith',
        phone: '+44 (0) 7700 900123',
        email: 'jane@example.com',
        organisation: 'Acme, Ltd',
        jobTitle: 'Designer',
        website: 'example.com',
        address: '1 High Street\nLondon',
      }),
    ).toBe(
      [
        'BEGIN:VCARD',
        'VERSION:3.0',
        'N:Smith;Jane;;;',
        'FN:Jane Smith',
        'ORG:Acme\\, Ltd',
        'TITLE:Designer',
        'TEL;TYPE=CELL:+447700900123',
        'EMAIL:jane@example.com',
        'URL:https://example.com',
        'ADR:;;1 High Street\\nLondon;;;;',
        'END:VCARD',
      ].join('\n'),
    )
  })
})

describe('email', () => {
  it('needs a valid address', () => {
    expect(encodeQrValue('email', { to: 'nope' })).toBeNull()
  })

  it('builds a mailto link with encoded subject and body', () => {
    expect(encodeQrValue('email', { to: 'hi@example.com' })).toBe('mailto:hi@example.com')
    expect(encodeQrValue('email', { to: 'hi@example.com', subject: 'Hi & bye', body: 'a b' })).toBe(
      'mailto:hi@example.com?subject=Hi%20%26%20bye&body=a%20b',
    )
  })
})

describe('sms', () => {
  it('needs a valid phone number', () => {
    expect(encodeQrValue('sms', { phone: 'abc' })).toBeNull()
  })

  it('normalises the number and keeps the message', () => {
    expect(encodeQrValue('sms', { phone: '+44 7700-900123', message: 'WIN' })).toBe(
      'SMSTO:+447700900123:WIN',
    )
    expect(encodeQrValue('sms', { phone: '07700900123' })).toBe('SMSTO:07700900123:')
  })
})

describe('phone', () => {
  it('builds a tel: link', () => {
    expect(encodeQrValue('phone', { phone: '+44 (0) 7700 900123' })).toBe('tel:+447700900123')
    expect(encodeQrValue('phone', { phone: '' })).toBeNull()
  })
})

describe('whatsapp', () => {
  it('uses digits only, without + or leading zeros', () => {
    expect(encodeQrValue('whatsapp', { phone: '+44 7700 900123' })).toBe(
      'https://wa.me/447700900123',
    )
    expect(encodeQrValue('whatsapp', { phone: '0044 7700 900123' })).toBe(
      'https://wa.me/447700900123',
    )
  })

  it('encodes a pre-filled message', () => {
    expect(encodeQrValue('whatsapp', { phone: '+1 555 123 4567', message: 'Book a table?' })).toBe(
      'https://wa.me/15551234567?text=Book%20a%20table%3F',
    )
  })
})

describe('text', () => {
  it('keeps the text as typed but rejects blank text', () => {
    expect(encodeQrValue('text', { text: '  ' })).toBeNull()
    expect(encodeQrValue('text', { text: ' Clue 1 \n' })).toBe(' Clue 1 \n')
  })
})

describe('location', () => {
  it('builds a Google Maps search link', () => {
    expect(encodeQrValue('location', { query: 'Tower Bridge, London' })).toBe(
      'https://www.google.com/maps/search/?api=1&query=Tower%20Bridge%2C%20London',
    )
    expect(encodeQrValue('location', { query: '' })).toBeNull()
  })
})
