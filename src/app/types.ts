// Interfaces

import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from 'react'

export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H'

export type QrType =
  'url' | 'wifi' | 'vcard' | 'email' | 'sms' | 'phone' | 'whatsapp' | 'text' | 'location'

export interface IFaq {
  question: string
  answer: ReactNode
  // Plain-text version for FAQPage structured data, needed when `answer` contains links
  text?: string
}

export interface IStep {
  title: string
  body: string
}

// Raw form values for the selected QR type, keyed by field id
export type QrFieldValues = Record<string, string>

export interface ITextInput {
  id: string
  label: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
  type?: string
  inputClassName?: string
  containerClassName?: string
  setFocus?: Dispatch<SetStateAction<boolean>>
  placeholder?: string
  error?: string
}

export interface IImageSettings {
  src: string
  x?: number
  y?: number
  center?: boolean
  excavate: boolean
  height: number
  width: number
}

export interface IQrCodeSvgProps {
  value: string
  size?: number
  bgColour?: string
  fgColour?: string
  imageSettings?: IImageSettings
  svgRef: MutableRefObject<HTMLDivElement | null>
  errorCorrectionLevel: ErrorCorrectionLevel
}

export interface IButtonProps {
  label: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  icon?: ReactNode
  fullWidth?: boolean
  className?: string
  disable?: boolean
}

export interface INumberInputProps {
  min?: number
  max?: number
  id: string
  label: string
  value: number
  setValue: Dispatch<SetStateAction<number>>
  inputClassName?: string
  containerClassName?: string
  setFocus?: Dispatch<SetStateAction<boolean>>
  suffix?: string
}

export interface IColourInputProps {
  id: string
  label: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

export interface IImageUpload {
  src?: string
  onFileSelected: (file: File) => void
  onRemove: () => void
}

export interface IFeedbackFormProps {
  feedbackFormOpen: boolean
  setFeedbackFormOpen: Dispatch<SetStateAction<boolean>>
}

export interface ITextAreaProps {
  id: string
  label: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
  inputClassName?: string
  containerClassName?: string
  setFocus?: Dispatch<SetStateAction<boolean>>
  placeholder?: string
  error?: string
}

export interface IErrorCorrectionPickerProps {
  value: ErrorCorrectionLevel
  setValue: Dispatch<SetStateAction<ErrorCorrectionLevel>>
}

export interface IQrPreviewProps {
  value?: string
  placeholder: string
  filename: string
  size: number
  bgColour: string
  fgColour: string
  imageSettings?: IImageSettings
  errorCorrectionLevel: ErrorCorrectionLevel
}
