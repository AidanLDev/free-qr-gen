import React from 'react'
import Image from 'next/image'
import { MdOutlineFileUpload } from 'react-icons/md'
import { IImageUpload } from '@/app/types'

export default function ImageUpload({ src, onFileSelected, onRemove }: IImageUpload) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) onFileSelected(file)
    // Reset so selecting the same file again still fires onChange
    event.target.value = ''
  }

  return (
    <div>
      {src ? (
        <div className='flex items-center gap-4 rounded-lg border border-neutral-700 bg-neutral-950 p-3'>
          <div className='flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-1'>
            <Image
              src={src}
              alt='Uploaded logo'
              width={56}
              height={56}
              unoptimized
              className='h-full w-full object-contain'
            />
          </div>
          <div className='flex flex-1 flex-wrap items-center gap-x-4 gap-y-1 text-sm'>
            <label htmlFor='image-upload' className='link-style'>
              Replace
            </label>
            <button
              type='button'
              onClick={onRemove}
              className='font-medium text-red-400 transition-colors hover:text-red-300'
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <label
          htmlFor='image-upload'
          className='flex cursor-pointer items-center gap-4 rounded-lg border border-dashed border-neutral-700 bg-neutral-950 p-4 transition-colors hover:border-primary has-[:focus-visible]:border-primary'
        >
          <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-neutral-800 text-primary'>
            <MdOutlineFileUpload size={22} />
          </span>
          <span className='flex flex-col text-sm'>
            <span className='font-medium text-neutral-100'>Upload a logo</span>
            <span className='text-neutral-500'>PNG, JPG or SVG, up to 10MB</span>
          </span>
        </label>
      )}
      <input
        id='image-upload'
        type='file'
        accept='image/*'
        onChange={handleFileChange}
        className='sr-only'
      />
    </div>
  )
}
