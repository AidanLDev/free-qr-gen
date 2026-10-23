'use client'

import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { ErrorCorrectionLevel } from '@/app/types'

interface IQRStyle {
  size: number
  setSize: Dispatch<SetStateAction<number>>
  backgroundColour: string
  setBackgroundColour: Dispatch<SetStateAction<string>>
  foregroundColour: string
  setForegroundColour: Dispatch<SetStateAction<string>>
  imgSrc?: string
  setImgSrc: Dispatch<SetStateAction<string | undefined>>
  imgWidth: number
  setImgWidth: Dispatch<SetStateAction<number>>
  imgHeight: number
  setImgHeight: Dispatch<SetStateAction<number>>
  errorCorrectionLevel: ErrorCorrectionLevel
  setErrorCorrectionLevel: Dispatch<SetStateAction<ErrorCorrectionLevel>>
}

const QRStyleContext = createContext<IQRStyle | null>(null)

// Lives in the root layout so colours, logo and size carry over when switching QR types
export function QRStyleProvider({ children }: { children: React.ReactNode }) {
  const [size, setSize] = useState(300)
  const [backgroundColour, setBackgroundColour] = useState('#FFFFFF')
  const [foregroundColour, setForegroundColour] = useState('#000000')
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined)
  const [imgWidth, setImgWidth] = useState(48)
  const [imgHeight, setImgHeight] = useState(48)
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<ErrorCorrectionLevel>('M')

  return (
    <QRStyleContext.Provider
      value={{
        size,
        setSize,
        backgroundColour,
        setBackgroundColour,
        foregroundColour,
        setForegroundColour,
        imgSrc,
        setImgSrc,
        imgWidth,
        setImgWidth,
        imgHeight,
        setImgHeight,
        errorCorrectionLevel,
        setErrorCorrectionLevel,
      }}
    >
      {children}
    </QRStyleContext.Provider>
  )
}

export function useQRStyle() {
  const context = useContext(QRStyleContext)
  if (!context) throw new Error('useQRStyle must be used inside QRStyleProvider')
  return context
}
