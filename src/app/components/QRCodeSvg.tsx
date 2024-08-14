import React from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { IQrCodeSvgProps } from '@/app/types'

export default function QRCodeSvg({
  url,
  size,
  bgColour,
  fgColour,
  imageSettings,
  svgRef,
}: IQrCodeSvgProps) {
  const qrImageSettings = imageSettings ? imageSettings : undefined
  const displaySize = size && size > 300 ? 300 : size // Limit the display size
  return (
    <div
      ref={svgRef}
      className="self-center max-w-[500px] max-h-[500px]"
      style={{ width: `${displaySize}px`, height: `${displaySize}px` }}
    >
      <QRCodeSVG
        value={url}
        size={size || 128}
        bgColor={bgColour || '#ffffff'}
        fgColor={fgColour || '#000000'}
        imageSettings={qrImageSettings}
        includeMargin
        style={{
          transform: displaySize && size ? `scale(${displaySize / size})` : '',
          transformOrigin: '0 0',
        }}
      />
    </div>
  )
}
