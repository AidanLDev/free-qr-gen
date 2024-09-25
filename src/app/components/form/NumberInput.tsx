import { INumberInputProps } from '@/app/types'
import React from 'react'

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
}: INumberInputProps) {
  return (
    <div
      className={`${
        containerClassName ? containerClassName : ''
      } flex flex-col gap-1`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onChange={(e) => {
          if (min && max) {
            if (Number(e.target.value) > max || Number(e.target.value) < min) {
              return
            }
          }
          setValue(Number(e.target.value))
        }}
        className={`${
          inputClassName ? inputClassName : ''
        } text-black px-1 py-2 rounded-md focus:border-primary focus:outline-primary focus-within:border-primary focus-within:outline-primary`}
        type="number"
        inputMode="numeric"
        pattern="[0-9]"
        onFocus={() => setFocus && setFocus(true)}
        onBlur={() => setFocus && setFocus(false)}
        min={min}
        max={max}
      />
    </div>
  )
}
