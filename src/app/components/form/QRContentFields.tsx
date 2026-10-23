import React, { Dispatch, SetStateAction, useState } from 'react'
import TextInput from './components/TextInput'
import TextArea from './components/TextArea'
import { QrField } from '@/app/lib/qrTypes'
import { QrFieldValues, QrType } from '@/app/types'

export default function QRContentFields({
  type,
  fields,
  values,
  setValues,
}: {
  type: QrType
  fields: QrField[]
  values: QrFieldValues
  setValues: Dispatch<SetStateAction<QrFieldValues>>
}) {
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const setter =
    (id: string): Dispatch<SetStateAction<string>> =>
    (action) =>
      setValues((prev) => ({
        ...prev,
        [id]: typeof action === 'function' ? action(prev[id] ?? '') : action,
      }))

  const focusSetter =
    (id: string): Dispatch<SetStateAction<boolean>> =>
    (focused) =>
      setFocusedField((prev) => (focused === true ? id : prev === id ? null : prev))

  const visibleFields = fields.filter(({ showIf }) => !showIf || showIf(values))
  // Longer forms (like the contact card) fit better in two columns
  const twoColumn = visibleFields.length > 4

  return (
    <div className={`grid gap-4 ${twoColumn ? 'sm:grid-cols-2' : ''}`}>
      {visibleFields.map((field) => {
        const id = `${type}-${field.id}`
        const value = values[field.id] ?? ''
        // Only nag about an invalid value once the user has finished typing
        const error =
          value && focusedField !== field.id && field.validate ? field.validate(value) : undefined
        const fullWidth = twoColumn && field.kind === 'textarea' ? 'sm:col-span-2' : ''

        if (field.kind === 'select') {
          return (
            <div key={field.id} className={fullWidth}>
              <label htmlFor={id} className='field-label'>
                {field.label}
              </label>
              <select
                id={id}
                className='input'
                value={value}
                onChange={(e) => setter(field.id)(e.target.value)}
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {field.hint && <p className='field-hint'>{field.hint}</p>}
            </div>
          )
        }

        if (field.kind === 'checkbox') {
          return (
            <label
              key={field.id}
              htmlFor={id}
              className='flex cursor-pointer items-center gap-2 text-sm text-neutral-300'
            >
              <input
                id={id}
                type='checkbox'
                className='h-4 w-4 accent-primary'
                checked={value === 'true'}
                onChange={(e) => setter(field.id)(String(e.target.checked))}
              />
              {field.label}
            </label>
          )
        }

        const inputProps = {
          id,
          label: field.label,
          value,
          setValue: setter(field.id),
          setFocus: focusSetter(field.id),
          placeholder: field.placeholder,
          error,
        }
        return (
          <div key={field.id} className={fullWidth}>
            {field.kind === 'textarea' ? (
              <TextArea {...inputProps} />
            ) : (
              <TextInput
                {...inputProps}
                type={field.inputType}
                inputClassName={type === 'url' ? 'text-lg' : undefined}
              />
            )}
            {field.hint && !error && <p className='field-hint'>{field.hint}</p>}
          </div>
        )
      })}
    </div>
  )
}
