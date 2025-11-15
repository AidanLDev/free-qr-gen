import { IButtonProps } from '@/app/types'
import React from 'react'

export default function Button({
  label,
  onClick,
  variant = 'primary',
  fullWidth,
  className,
  disable,
}: IButtonProps) {
  const style = variant === 'primary' ? 'border-white bg-primaryDark ' : 'border-secondary '
  return (
    <button
      onClick={onClick}
      className={`text-md duration-800 rounded-xl border-2 p-2 font-bold transition-all hover:brightness-90 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:hover:brightness-100 ${style} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      type='submit'
      disabled={disable}
    >
      {label}
    </button>
  )
}
