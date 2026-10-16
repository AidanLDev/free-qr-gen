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
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight || '40'}px`
    }
  }

  useEffect(() => {
    autoHeight()
  }, [value])

  return (
    <div className={containerClassName ?? ''}>
      <label htmlFor={id} className='field-label'>
        {label}
      </label>
      <textarea
        ref={textareaRef}
        className={`input min-h-24 resize-none ${inputClassName ?? ''}`}
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
