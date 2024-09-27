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
  errorCorrectionLevel,
}: IQrCodeSvgProps) {
  const qrImageSettings = imageSettings ? imageSettings : undefined
  const displaySize = size && (size > 300 || size < 300) ? 300 : size // Limit the display size

  return (
    <div
      ref={svgRef}
      className="self-center max-w-[500px] max-h-[500px]"
      style={{ width: `${displaySize}px`, height: `${displaySize}px` }}
    >
      <QRCodeSVG
        value={url}
        size={size || 128} // Set to full size for download
        bgColor={bgColour || '#ffffff'}
        fgColor={fgColour || '#000000'}
        imageSettings={qrImageSettings}
        style={{ width: '100%', height: '100%' }} // Force full size for container
        level={errorCorrectionLevel}
        marginSize={4}
      />
    </div>
  )
}
