import { IButtonProps } from '@/app/types'
import React from 'react'

export default function Button({
  label,
  onClick,
  variant = 'primary',
  type = 'button',
  icon,
  fullWidth,
  className,
  disable,
}: IButtonProps) {
  const style =
    variant === 'primary'
      ? 'bg-primary text-neutral-950 hover:bg-primary/90'
      : 'border border-neutral-700 text-neutral-100 hover:bg-neutral-800'
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 disabled:cursor-not-allowed disabled:opacity-40 ${style} ${
        fullWidth ? 'w-full' : ''
      } ${className ?? ''}`}
      type={type}
      disabled={disable}
    >
      {icon}
      {label}
    </button>
  )
}
