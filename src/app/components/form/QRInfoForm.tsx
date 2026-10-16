'use client'

import React, { useState } from 'react'
import { toast } from 'react-toastify'
import TextInput from '@/app/components/form/components/TextInput'
import NumberInput from './components/NumberInput'
import ColourInput from './components/ColourInput'
import ErrorCorrectionPicker from './components/ErrorCorrectionPicker'
import ImageUpload from './components/ImageUpload'
import QRPreview from '../QRPreview'
import { ErrorCorrectionLevel, IImageSettings } from '@/app/types'
import { maxLogoFileSize, sizePresets, urlRegex } from '@/app/constants/constants'
import { getColourContrast } from '@/app/lib/helpers'

export default function QRInfoForm() {
  const [url, setUrl] = useState('')
  const [urlFocused, setUrlFocused] = useState(false)
  const [size, setSize] = useState(300)
  const [backgroundColour, setBackgroundColour] = useState('#FFFFFF')
  const [foregroundColour, setForegroundColour] = useState('#000000')
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined)
  const [imgWidth, setImgWidth] = useState(48)
  const [imgHeight, setImgHeight] = useState(48)
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<ErrorCorrectionLevel>('M')

  const isUrlValid = urlRegex.test(url)
  // Only nag about an invalid URL once the user has finished typing
  const urlError =
    url && !isUrlValid && !urlFocused ? 'Enter a valid URL, for example google.com' : undefined

  const contrast = getColourContrast(foregroundColour, backgroundColour)
  const colourWarning = !contrast
    ? undefined
    : contrast.ratio < 3
      ? 'Low contrast between colours. Some scanners may struggle to read this code.'
      : contrast.inverted
        ? 'Light-on-dark codes aren’t supported by every scanner app.'
        : undefined

  const handleLogoSelected = (file: File) => {
    if (file.size > maxLogoFileSize) {
      toast('File is too large, must be smaller than 10MB', { type: 'error' })
      return
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setImgSrc(reader.result)
      }
    }
    reader.readAsDataURL(file)
  }

  const imageSettings: IImageSettings | undefined = imgSrc
    ? {
        height: imgHeight,
        width: imgWidth,
        src: imgSrc,
        excavate: true,
      }
    : undefined

  return (
    <div className='grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_320px] lg:grid-cols-[minmax(0,1fr)_360px]'>
      <section aria-label='QR code content' className='card'>
        <TextInput
          id='url-input'
          label='QR Code URL'
          value={url}
          setValue={setUrl}
          setFocus={setUrlFocused}
          placeholder='e.g. google.com'
          inputClassName='text-lg'
          error={urlError}
        />
      </section>

      <div className='md:sticky md:top-6 md:col-start-2 md:row-span-2 md:row-start-1'>
        <QRPreview
          url={isUrlValid ? url : undefined}
          size={size}
          fgColour={foregroundColour}
          bgColour={backgroundColour}
          imageSettings={imageSettings}
          errorCorrectionLevel={errorCorrectionLevel}
        />
      </div>

      <section aria-labelledby='customise-heading' className='card flex flex-col gap-8'>
        <h2 id='customise-heading' className='section-title'>
          Customise your code
        </h2>

        <div>
          <NumberInput
            id='size'
            label='Download size'
            suffix='px'
            min={1}
            max={10000}
            value={size}
            setValue={setSize}
          />
          <div className='mt-2 flex flex-wrap gap-2'>
            {sizePresets.map((preset) => (
              <button
                key={preset}
                type='button'
                onClick={() => setSize(preset)}
                aria-pressed={size === preset}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  size === preset
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-neutral-200'
                }`}
              >
                {preset}px
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className='grid gap-4 sm:grid-cols-2'>
            <ColourInput
              id='fgColour'
              label='Foreground colour'
              value={foregroundColour}
              setValue={setForegroundColour}
            />
            <ColourInput
              id='bgColour'
              label='Background colour'
              value={backgroundColour}
              setValue={setBackgroundColour}
            />
          </div>
          {colourWarning && (
            <p className='field-warning' role='status'>
              {colourWarning}
            </p>
          )}
        </div>

        <ErrorCorrectionPicker value={errorCorrectionLevel} setValue={setErrorCorrectionLevel} />

        <div>
          <span className='field-label'>Logo</span>
          <ImageUpload
            src={imgSrc}
            onFileSelected={handleLogoSelected}
            onRemove={() => setImgSrc(undefined)}
          />
          {imgSrc && (
            <>
              <div className='mt-4 grid grid-cols-2 gap-4'>
                <NumberInput
                  id='imgWidth'
                  label='Logo width'
                  suffix='px'
                  value={imgWidth}
                  setValue={setImgWidth}
                  max={size}
                  min={1}
                />
                <NumberInput
                  id='imgHeight'
                  label='Logo height'
                  suffix='px'
                  value={imgHeight}
                  setValue={setImgHeight}
                  max={size}
                  min={1}
                />
              </div>
              {(errorCorrectionLevel === 'L' || errorCorrectionLevel === 'M') && (
                <p className='field-warning' role='status'>
                  Logos cover part of the code. Use Quartile or High error correction so it still
                  scans.
                </p>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
