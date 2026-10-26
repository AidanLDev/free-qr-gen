import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it } from 'vitest'
import QRContentFields from './QRContentFields'
import { qrTypes } from '@/app/lib/qrTypes'
import { QrFieldValues, QrType } from '@/app/types'

function Harness({ type }: { type: QrType }) {
  const [values, setValues] = useState<QrFieldValues>(qrTypes[type].defaults ?? {})
  return (
    <>
      <QRContentFields
        type={type}
        fields={qrTypes[type].fields}
        values={values}
        setValues={setValues}
      />
      <output>{JSON.stringify(values)}</output>
    </>
  )
}

const values = () => JSON.parse(screen.getByRole('status').textContent ?? '{}')

describe('QRContentFields', () => {
  it('renders a labelled control for every field', () => {
    render(<Harness type='vcard' />)
    for (const { label } of qrTypes.vcard.fields) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
  })

  it('stores values by field id', async () => {
    render(<Harness type='email' />)
    await userEvent.type(screen.getByRole('textbox', { name: 'Send to' }), 'a@b.co')
    await userEvent.type(screen.getByRole('textbox', { name: 'Message (optional)' }), 'Hi')
    expect(values()).toEqual({ to: 'a@b.co', body: 'Hi' })
  })

  it('handles selects, checkboxes and conditional fields', async () => {
    render(<Harness type='wifi' />)

    const security = screen.getByRole('combobox', { name: 'Security' })
    expect(security).toHaveValue('WPA')
    expect(screen.getByRole('textbox', { name: 'Password' })).toBeInTheDocument()

    await userEvent.selectOptions(security, 'nopass')
    expect(screen.queryByRole('textbox', { name: 'Password' })).not.toBeInTheDocument()

    await userEvent.click(screen.getByRole('checkbox', { name: 'Hidden network' }))
    expect(values()).toMatchObject({ security: 'nopass', hidden: 'true' })
  })

  it('only shows a validation error once the user leaves the field', async () => {
    render(<Harness type='url' />)
    const input = screen.getByRole('textbox', { name: 'QR Code URL' })

    await userEvent.type(input, 'not a url')
    expect(input).toHaveAttribute('aria-invalid', 'false')

    await userEvent.tab()
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAccessibleDescription('Enter a valid URL, for example google.com')
  })

  it('swaps the hint for the error', async () => {
    render(<Harness type='phone' />)
    expect(screen.getByText(/Include the country code/)).toBeInTheDocument()

    await userEvent.type(screen.getByRole('textbox', { name: 'Phone number' }), 'abc')
    await userEvent.tab()
    expect(screen.queryByText(/Include the country code/)).not.toBeInTheDocument()
    expect(screen.getByText(/Enter a valid phone number/)).toBeInTheDocument()
  })
})
