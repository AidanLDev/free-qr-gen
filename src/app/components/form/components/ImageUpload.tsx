import React, { useState } from 'react'
import Image from 'next/image'
import { IImageUpload } from '@/app/types'

export default function ImageUpload({
  handleImageUpload,
  setRemoveImage,
}: IImageUpload) {
  const [previewUrl, setPreviewUrl] = useState<string>('')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onloadend = () => {
          if (reader && reader.result && typeof reader.result === 'string') {
            setPreviewUrl(reader.result)
          }
        }
        reader.readAsDataURL(file)
        handleImageUpload(event)
      }
    }
  }

  return (
    <div className="flex flex-col items-center">
      <label
        htmlFor="image-upload"
        className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors"
      >
        {previewUrl ? (
          <Image
            src={previewUrl}
            alt="Preview"
            width={100}
            height={100}
            objectFit="contain"
          />
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="mt-2 text-sm text-primary">Upload Logo</span>
          </>
        )}
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      {previewUrl && (
        <button
          onClick={() => {
            setPreviewUrl('')
            setRemoveImage()
          }}
          className="mt-2 text-sm text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      )}
    </div>
  )
}
