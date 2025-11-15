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
}: ITextInput) {
  return (
    <div className={`${containerClassName ? containerClassName : ''} flex flex-col gap-1`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`${
          inputClassName ? inputClassName : ''
        } rounded-md px-1 py-2 text-black focus-within:border-primary focus-within:outline-primary focus:border-primary focus:outline-primary`}
        type={type}
        onFocus={() => setFocus && setFocus(true)}
        onBlur={() => setFocus && setFocus(false)}
        placeholder={placeholder}
      />
    </div>
  )
}
