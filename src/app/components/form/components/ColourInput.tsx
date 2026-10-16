'use client'

import React, { useCallback, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { IColourInputProps } from '@/app/types'
import useClickOutside from '@/app/hooks/useClickOutside'

// ChromePicker depends on browser globals - only render on client
const ChromePicker = dynamic(() => import('react-color').then((mod) => mod.ChromePicker), {
  ssr: false,
})

export default function ColourInput({ id, label, value, setValue }: IColourInputProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const close = useCallback(() => setOpen(false), [])
  useClickOutside(containerRef, close)

  return (
    <div
      ref={containerRef}
      className='relative'
      onKeyDown={(e) => {
        if (e.key === 'Escape') close()
      }}
    >
      <label htmlFor={id} className='field-label'>
        {label}
      </label>
      <div className='flex gap-2'>
        <button
          type='button'
          aria-label={`Open ${label.toLowerCase()} picker`}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className='h-[46px] w-12 shrink-0 rounded-lg border border-neutral-600 shadow-inner transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900'
          style={{ background: value }}
        />
        <input
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          spellCheck={false}
          autoComplete='off'
          className='input font-mono uppercase'
        />
      </div>
      {open && (
        <div className='absolute left-0 top-full z-20 mt-2 overflow-hidden rounded-lg shadow-2xl shadow-black/60 [color-scheme:light]'>
          <ChromePicker color={value} onChange={(colour) => setValue(colour.hex)} disableAlpha />
        </div>
      )}
    </div>
  )
}
