'use client'

import React, { useState, useRef, MutableRefObject } from 'react'
import TextInput from '@/app/components/form/TextInput'
import QRCodeSvg from '../QRCodeSvg'
import Button from './Button'
import { toast } from 'react-toastify'
import Collapsible from 'react-collapsible'
import { FaChevronDown } from 'react-icons/fa'
import Input from '@/app/components/form/TextInput'
import NumberInput from './NumberInput'

export default function QRInfoForm() {
  const [url, setUrl] = useState('')
  const svgRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [size, setSize] = useState(128)

  const handleDownloadQrCode = () => {
    if (!svgRef) {
      return
    }
    const svg = svgRef.current?.querySelector('svg')
    if (!svg) {
      return
    }
    const svgData = new XMLSerializer().serializeToString(svg)
    const svgBlob = new Blob([svgData], {
      type: 'image/svg+xml;charset=utf-8',
    })
    const svgUrl = URL.createObjectURL(svgBlob)

    const downloadLink = document.createElement('a')
    downloadLink.href = svgUrl
    downloadLink.download = 'qrcode.svg'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
    toast('Downloading QR Code', { type: 'success' })
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
    <div>
      <NumberInput
        id="size"
        label="size"
        min={1}
        max={1000}
        value={size}
        setValue={setSize}
      />
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
        <p></p>
      </div>
      <div
        className={`sm:w-1/2 w-full  ${
          url ? 'flex flex-col justify-center gap-8' : ''
        }`}
      >
        <TextInput
          id="url-input"
          label="Choose URL"
          value={url}
          setValue={setUrl}
          containerClassName="py-2"
        />
        {url && <QRCodeSvg url={url} svgRef={svgRef} size={size} />}
        {url && (
          <Button label="Download QR Code" onClick={handleDownloadQrCode} />
        )}
      </div>
    </div>
  )
}
