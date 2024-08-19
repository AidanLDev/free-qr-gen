'use client'

import React, { useState, useRef, MutableRefObject, useCallback } from 'react'
import TextInput from '@/app/components/form/TextInput'
import QRCodeSvg from '../QRCodeSvg'
import Button from './Button'
import { toast } from 'react-toastify'
import Collapsible from 'react-collapsible'
import { FaChevronDown } from 'react-icons/fa'
import NumberInput from './NumberInput'
import { ChromePicker, ColorResult } from 'react-color'
import { IImageSettings } from '@/app/types'
import ImageUpload from './ImageUpload'
import { urlRegex } from '@/app/constants/constants'

export default function QRInfoForm() {
  const [url, setUrl] = useState('')
  const svgRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [size, setSize] = useState(300)
  const [backgroundColour, setBackgroundColour] = useState('#FFF')
  const [foregroundColour, setForegroundColour] = useState('#000')
  const [bgPickerOpen, setBgPickerOpen] = useState(false)
  const [fgPickerOpen, setFgPickerOpen] = useState(false)
  const [imgSettings, setImgSettings] = useState<IImageSettings | undefined>(
    undefined
  )

  const handleDownloadQrCode = () => {
    if (!svgRef) {
      return
    }
    const svg = svgRef.current?.querySelector('svg')
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (!svg) {
      console.error('no svg')
      return
    }

    if (!context) {
      console.error('no context')
      return
    }

    if (!size) {
      console.error('no size')
      return
    }

    // Set the canvas size to the full QR code size
    canvas.width = size
    canvas.height = size

    const svgData = new XMLSerializer().serializeToString(svg)
    const img = new Image()

    img.onload = () => {
      context.drawImage(img, 0, 0, size, size)

      const pngDataUrl = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.href = pngDataUrl
      downloadLink.download = 'qrcode.png'
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
      toast('Downloading QR Code', { type: 'success' })
    }
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`
  }

  const handleColorChange = useCallback(
    (color: ColorResult, type: 'fg' | 'bg') => {
      if (type === 'fg') {
        setForegroundColour(color.hex)
      } else if (type === 'bg') {
        setBackgroundColour(color.hex)
      }
    },
    []
  )

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]
      if (file.size > 3048576) {
        toast('File is too large, must be smaller than 3MB', { type: 'error' })
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        if (reader && reader.result && typeof reader.result === 'string') {
          setImgSettings({
            height: 24,
            width: 24,
            src: reader.result,
            excavate: true,
          })
        }
      }
      reader.readAsDataURL(file)
    }
  }
  const collapseHeader = (
    <div className="flex justify-between p-2">
      Customise your code!
      <div
        className={`transform transition-transform duration-500 ${
          isOptionsOpen ? 'rotate-180' : ''
        }`}
      >
        <FaChevronDown />
      </div>
    </div>
  )

  const customstaiseForm = (
    <div className="flex flex-col gap-6 p-4">
      <NumberInput
        id="size"
        label="size"
        min={1}
        max={10000}
        value={size}
        setValue={setSize}
      />
      <div className="flex flex-col gap-4">
        <div onClick={() => setBgPickerOpen((prevState) => !prevState)}>
          <TextInput
            id="bgColour"
            label="Background Colour"
            setValue={setBackgroundColour}
            value={backgroundColour}
          />
        </div>
        <div className={`chrome-picker-wrapper ${bgPickerOpen ? 'open' : ''}`}>
          <ChromePicker
            color={backgroundColour}
            onChange={(colourRes) => handleColorChange(colourRes, 'bg')}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div
          onClick={() => setFgPickerOpen((prevState) => !prevState)}
          className="color-picker-container"
        >
          <TextInput
            id="fgColour"
            label="Foreground Colour"
            setValue={setForegroundColour}
            value={foregroundColour}
          />
        </div>
        <div className={`chrome-picker-wrapper ${fgPickerOpen ? 'open' : ''}`}>
          <ChromePicker
            color={foregroundColour}
            onChange={(colourRes) => handleColorChange(colourRes, 'fg')}
          />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">QR Code Logo</h2>
        <ImageUpload
          handleImageUpload={handleImageUpload}
          setRemoveImage={setImgSettings}
        />
      </div>
    </div>
  )

  return (
    <div className="flex justify-evenly gap-8 flex-col sm:flex-row">
      <div className="sm:w-1/2 w-full text-center">
        <Collapsible
          trigger={collapseHeader}
          triggerClassName="trigger-closed"
          triggerOpenedClassName="trigger-open"
          onOpening={() => setIsOptionsOpen(true)}
          onClosing={() => setIsOptionsOpen(false)}
        >
          {customstaiseForm}
        </Collapsible>
      </div>
      <div className={`sm:w-1/2 w-full mb-12  ${url ? 'flex flex-col gap-8' : ''}`}>
        <TextInput
          id="url-input"
          label="Choose URL for your QR code to link to (e.g. your-business.com)"
          value={url}
          setValue={setUrl}
          containerClassName="py-2"
        />
        {url && !url.match(urlRegex) && (
          <span className="text-secondary">
            Please enter a valid url, for example, google.com
          </span>
        )}
        {url && url.match(urlRegex) && (
          <QRCodeSvg
            url={url}
            svgRef={svgRef}
            size={size}
            fgColour={foregroundColour}
            bgColour={backgroundColour}
            imageSettings={imgSettings}
          />
        )}
        {url && url.match(urlRegex) && (
          <Button label="Download QR Code" onClick={handleDownloadQrCode} />
        )}
      </div>
    </div>
  )
}
