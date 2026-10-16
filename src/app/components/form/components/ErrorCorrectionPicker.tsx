import React from 'react'
import { IErrorCorrectionPickerProps } from '@/app/types'
import { errorCorrectionLevelOptions } from '@/app/constants/constants'

export default function ErrorCorrectionPicker({ value, setValue }: IErrorCorrectionPickerProps) {
  return (
    <fieldset>
      <legend className='field-label'>Error correction</legend>
      <div className='grid grid-cols-4 gap-1 rounded-lg border border-neutral-700 bg-neutral-950 p-1'>
        {errorCorrectionLevelOptions.map((option) => {
          const checked = option.value === value
          return (
            <label
              key={option.value}
              title={`${option.label}: recovers up to ${option.recovery} damage`}
              className={`cursor-pointer rounded-md py-2 text-center transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary ${
                checked
                  ? 'bg-primary text-neutral-950'
                  : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
              }`}
            >
              <input
                type='radio'
                name='error-correction'
                value={option.value}
                checked={checked}
                onChange={() => setValue(option.value)}
                className='sr-only'
              />
              <span className='block text-sm font-semibold'>{option.label}</span>
              <span className='block text-xs opacity-75'>{option.recovery}</span>
            </label>
          )
        })}
      </div>
      <p className='field-hint'>
        How much of the code can be damaged or covered and still scan. Higher levels make a denser
        code.
      </p>
    </fieldset>
  )
}
