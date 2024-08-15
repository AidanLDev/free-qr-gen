import React, { useRef, useEffect } from 'react'

import { ITextAreaProps } from '@/app/types'

export default function TextArea({
  id,
  label,
  value,
  setValue,
  inputClassName,
  containerClassName,
  setFocus,
}: ITextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const autoHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight || '40'
      }px`
    }
  }

  useEffect(() => {
    autoHeight()
  }, [value])

  return (
    <div className={`${containerClassName} flex flex-col gap-1`}>
      <label htmlFor={id}>{label}</label>
      <textarea
        ref={textareaRef}
        className={`${inputClassName} text-black px-1 py-2 rounded-md focus:border-primary focus:outline-primary focus-within:border-primary focus-within:outline-primary`}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          autoHeight()
        }}
        onFocus={() => setFocus && setFocus(true)}
        onBlur={() => setFocus && setFocus(false)}
        id={id}
        rows={1}
      />
    </div>
  )
}
