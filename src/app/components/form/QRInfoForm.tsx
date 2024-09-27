'use client'

import React, {
  useState,
  useRef,
  MutableRefObject,
  useCallback,
  useEffect,
} from 'react'
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
  const [backgroundColour, setBackgroundColour] = useState('white')
  const [foregroundColour, setForegroundColour] = useState('black')
  const [bgPickerOpen, setBgPickerOpen] = useState(false)
  const [fgPickerOpen, setFgPickerOpen] = useState(false)
  const [imgSettings, setImgSettings] = useState<IImageSettings | undefined>(
    undefined
  )
  const [imgWidth, setImgWidth] = useState(48)
  const [imgHeight, setImgHeight] = useState(48)

  const bgPickerRef = useRef<HTMLDivElement>(null)
  const fgPickerRef = useRef<HTMLDivElement>(null)
  const fgPickerContainerRef = useRef<HTMLDivElement>(null)
  const bgPickerContainerRef = useRef<HTMLDivElement>(null)

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
      if (file.size > 10048576) {
        toast('File is too large, must be smaller than 10MB', { type: 'error' })
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        if (reader && reader.result && typeof reader.result === 'string') {
          setImgSettings({
            height: imgHeight,
            width: imgWidth,
            src: reader.result,
            excavate: true,
          })
        }
      }
      reader.readAsDataURL(file)
    }
  }
  const collapseHeader = (
    <div className="flex justify-center p-2">
      <span className="text-2xl font-semibold w-full">
        Customise your code!
      </span>
      <div
        className={`transform transition-transform duration-500 pt-[6px] ${
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
        label="Size (px)"
        min={1}
        max={10000}
        value={size}
        setValue={setSize}
      />
      <div className="flex flex-col gap-4">
        <div
          onClick={() => setBgPickerOpen((prevState) => !prevState)}
          ref={bgPickerContainerRef}
        >
          <TextInput
            id="bgColour"
            label="Background Colour"
            setValue={setBackgroundColour}
            value={backgroundColour}
          />
        </div>
        <div
          className={`chrome-picker-wrapper ${bgPickerOpen ? 'open' : ''}`}
          ref={bgPickerRef}
        >
          <ChromePicker
            color={backgroundColour}
            onChange={(colourRes) => handleColorChange(colourRes, 'bg')}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div
          onClick={(e) => {
            e.stopPropagation()
            setFgPickerOpen((prevState) => !prevState)
          }}
          className="color-picker-container"
          ref={fgPickerContainerRef}
        >
          <TextInput
            id="fgColour"
            label="Foreground Colour"
            setValue={setForegroundColour}
            value={foregroundColour}
          />
        </div>
        <div
          className={`chrome-picker-wrapper ${fgPickerOpen ? 'open' : ''}`}
          ref={fgPickerRef}
        >
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
      {imgSettings && (
        <>
          <div>
            <NumberInput
              id="imgHeight"
              label="Logo Height (px)"
              value={imgHeight}
              setValue={setImgHeight}
              max={size}
              min={1}
            />
          </div>
          <div>
            <NumberInput
              id="imgWidth"
              label="Logo Width (px)"
              value={imgWidth}
              setValue={setImgWidth}
              max={size}
              min={1}
            />
          </div>
        </>
      )}
    </div>
  )

  useEffect(() => {
    setImgSettings((prevSettings) => {
      if (prevSettings) {
        return {
          ...prevSettings,
          height: imgHeight,
          width: imgWidth,
        }
      } else {
        return undefined
      }
    })
  }, [imgHeight, imgWidth])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        bgPickerRef.current &&
        !bgPickerRef.current.contains(event.target as Node) &&
        bgPickerContainerRef.current &&
        !bgPickerContainerRef.current.contains(event.target as Node)
      ) {
        setBgPickerOpen(false)
      }
      if (
        fgPickerRef.current &&
        !fgPickerRef.current.contains(event.target as Node) &&
        fgPickerContainerRef.current &&
        !fgPickerContainerRef.current.contains(event.target as Node)
      ) {
        setFgPickerOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [bgPickerRef, setBgPickerOpen, fgPickerOpen, setFgPickerOpen])

  return (
    <div className="flex justify-evenly gap-8 flex-col sm:flex-row">
      <div className="sm:w-1/2 w-full text-center mt-4">
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
      <div
        className={`sm:w-1/2 w-full mb-12  ${url ? 'flex flex-col gap-8' : ''}`}
      >
        <TextInput
          id="url-input"
          label="QR Code URL"
          value={url}
          setValue={setUrl}
          containerClassName="pb-2 text-center"
          placeholder="e.g. google.com"
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
