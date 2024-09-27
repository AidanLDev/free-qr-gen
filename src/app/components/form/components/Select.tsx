import { ISelectProps } from '@/app/types'
import React from 'react'

export default function Select({
  label,
  options,
  value,
  setValue,
  className = '',
}: ISelectProps) {
  return (
    <div className={`relative ${className}`}>
      <label htmlFor={label} className="block mb-2 dark:text-white">
        {label}
      </label>
      <select
        id={label}
        value={value}
        defaultValue={`Please select ${label}`}
        onChange={(e) => setValue(e.target.value)}
        className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 ark:bg-dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary dark:focus:border-primary text-black"
      >
        {Object.entries(options)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
      </select>
    </div>
  )
}
