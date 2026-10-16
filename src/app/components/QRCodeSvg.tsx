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
  return (
    // Rendered at full size for download, scaled down to fit the preview
    <div ref={svgRef} className='h-full w-full'>
      <QRCodeSVG
        value={url}
        size={size || 128}
        bgColor={bgColour || '#ffffff'}
        fgColor={fgColour || '#000000'}
        imageSettings={imageSettings}
        style={{ width: '100%', height: '100%' }}
        level={errorCorrectionLevel}
        marginSize={4}
      />
    </div>
  )
}
