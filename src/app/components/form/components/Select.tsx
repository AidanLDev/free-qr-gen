import { ISelectProps } from '@/app/types'
import React from 'react'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { Tooltip } from 'react-tooltip'

export default function Select({
  label,
  options,
  value,
  setValue,
  className = '',
  tooltip,
  tooltipType,
}: ISelectProps) {
  const SelectLabel = (
    <label htmlFor={label} className='mb-2 block dark:text-white'>
      {label}
    </label>
  )
  return (
    <div className={`relative ${className}`}>
      {tooltip ? (
        <>
          <Tooltip
            variant={tooltipType}
            id={`${label}-tooltip`}
            content={tooltip}
            place='top'
            style={{
              maxWidth: '400px',
              whiteSpace: 'normal',
            }}
            className='custom-tooltip'
          />
          <div
            data-tooltip-id={`${label}-tooltip`}
            className='flex items-center justify-center gap-4'
          >
            {SelectLabel}
            <IoInformationCircleOutline className='mb-[7px]' />
          </div>
        </>
      ) : (
        SelectLabel
      )}
      <select
        id={label}
        value={value ?? ''}
        onChange={(e) => setValue(e.target.value)}
        className='ark:bg-dark:border-gray-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-black focus:border-primary focus:ring-primary dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary'
      >
        <option value='' disabled>
          {`Please select ${label}`}
        </option>
        {Object.entries(options).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}
