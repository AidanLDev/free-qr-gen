import { INumberInputProps } from '@/app/types'
import React, { useState } from 'react'

export default function NumberInput({
  min,
  max,
  id,
  label,
  value,
  setValue,
  inputClassName,
  containerClassName,
  setFocus,
  suffix,
}: INumberInputProps) {
  // Keep a local draft so the field can be cleared/retyped; only commit values within range
  const [draft, setDraft] = useState(String(value))
  const [prevValue, setPrevValue] = useState(value)
  if (value !== prevValue) {
    setPrevValue(value)
    setDraft(String(value))
  }

  return (
    <div className={containerClassName ?? ''}>
      <label htmlFor={id} className='field-label'>
        {label}
      </label>
      <div className='relative'>
        <input
          id={id}
          value={draft}
          onChange={(e) => {
            setDraft(e.target.value)
            const next = Number(e.target.value)
            if (e.target.value === '' || Number.isNaN(next)) return
            if ((min !== undefined && next < min) || (max !== undefined && next > max)) return
            setValue(next)
          }}
          className={`input ${suffix ? 'pr-10' : ''} ${inputClassName ?? ''}`}
          type='number'
          inputMode='numeric'
          onFocus={() => setFocus && setFocus(true)}
          onBlur={() => {
            setDraft(String(value))
            setFocus && setFocus(false)
          }}
          min={min}
          max={max}
        />
        {suffix && (
          <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-neutral-500'>
            {suffix}
          </span>
        )}
      </div>
    </div>
  )
}
