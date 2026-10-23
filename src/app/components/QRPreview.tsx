'use client'

import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import { MdOutlineFileDownload, MdQrCode2 } from 'react-icons/md'
import QRCodeSvg from './QRCodeSvg'
import Button from './form/components/Button'
import { IQrPreviewProps } from '@/app/types'

const triggerDownload = (href: string, filename: string) => {
  const downloadLink = document.createElement('a')
  downloadLink.href = href
  downloadLink.download = filename
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}

export default function QRPreview({
  value,
  placeholder,
  filename,
  size,
  bgColour,
  fgColour,
  imageSettings,
  errorCorrectionLevel,
}: IQrPreviewProps) {
  const svgRef = useRef<HTMLDivElement | null>(null)

  // Serialise the rendered SVG at its full size, without the preview's 100% sizing
  const getSvgMarkup = () => {
    const svg = svgRef.current?.querySelector('svg')
    if (!svg) {
      console.error('no svg')
      return null
    }
    const clone = svg.cloneNode(true) as SVGSVGElement
    clone.removeAttribute('style')
    clone.setAttribute('width', String(size))
    clone.setAttribute('height', String(size))
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    return new XMLSerializer().serializeToString(clone)
  }

  const handleDownloadPng = () => {
    const svgData = getSvgMarkup()
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (!svgData || !context) return

    canvas.width = size
    canvas.height = size

    const img = new Image()
    img.onload = () => {
      context.drawImage(img, 0, 0, size, size)
      triggerDownload(canvas.toDataURL('image/png'), `${filename}.png`)
      toast('Downloading QR Code', { type: 'success' })
    }
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgData)}`
  }

  const handleDownloadSvg = () => {
    const svgData = getSvgMarkup()
    if (!svgData) return
    const blobUrl = URL.createObjectURL(new Blob([svgData], { type: 'image/svg+xml' }))
    triggerDownload(blobUrl, `${filename}.svg`)
    URL.revokeObjectURL(blobUrl)
    toast('Downloading QR Code', { type: 'success' })
  }

  return (
    <section aria-label='QR code preview' className='card flex flex-col items-center gap-5'>
      <div className='flex w-full items-center justify-between'>
        <h2 className='section-title'>Preview</h2>
        {value && (
          <span className='text-xs text-neutral-500'>
            {size} x {size} px
          </span>
        )}
      </div>

      <div className='aspect-square w-full max-w-[280px]'>
        {value ? (
          <div className='h-full w-full overflow-hidden rounded-xl shadow-lg shadow-black/40'>
            <QRCodeSvg
              value={value}
              svgRef={svgRef}
              size={size}
              fgColour={fgColour}
              bgColour={bgColour}
              imageSettings={imageSettings}
              errorCorrectionLevel={errorCorrectionLevel}
            />
          </div>
        ) : (
          <div className='flex h-full w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-neutral-800 p-6 text-center'>
            <MdQrCode2 className='text-neutral-700' size={72} />
            <p className='text-sm text-neutral-500'>{placeholder}</p>
          </div>
        )}
      </div>

      <div className='grid w-full grid-cols-[1fr_auto] gap-2'>
        <Button
          label='Download PNG'
          icon={<MdOutlineFileDownload size={20} />}
          onClick={handleDownloadPng}
          disable={!value}
          fullWidth
        />
        <Button label='SVG' variant='secondary' onClick={handleDownloadSvg} disable={!value} />
      </div>
    </section>
  )
}
