import { ITextInput } from '@/app/types'
import React from 'react'

export default function Input({
  id,
  label,
  value,
  setValue,
  type,
  inputClassName,
  containerClassName,
  setFocus,
  placeholder,
  error,
}: ITextInput) {
  return (
    <div className={containerClassName ?? ''}>
      <label htmlFor={id} className='field-label'>
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`input ${
          error ? 'border-secondary focus:border-secondary focus:ring-secondary/30' : ''
        } ${inputClassName ?? ''}`}
        type={type}
        onFocus={() => setFocus && setFocus(true)}
        onBlur={() => setFocus && setFocus(false)}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className='field-warning'>
          {error}
        </p>
      )}
    </div>
  )
}
