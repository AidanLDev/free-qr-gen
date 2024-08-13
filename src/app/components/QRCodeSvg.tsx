import React from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { IQrCodeSvgProps } from '@/app/types'

export default function QRCodeSvg({
  url,
  size,
  bgColour,
  fgColour,
  image,
  imageSettings,
  svgRef,
}: IQrCodeSvgProps) {
  const qrImageSettings = image && imageSettings ? imageSettings : undefined
  return (
    <div ref={svgRef} className="self-center">
      <QRCodeSVG
        value={url}
        size={size || 128}
        bgColor={bgColour || '#ffffff'}
        fgColor={fgColour || '#000000'}
        imageSettings={qrImageSettings}
        includeMargin
      />
    </div>
  )
}
