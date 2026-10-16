// Interfaces

import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from 'react'

export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H'

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
  url: string
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
}

export interface IErrorCorrectionPickerProps {
  value: ErrorCorrectionLevel
  setValue: Dispatch<SetStateAction<ErrorCorrectionLevel>>
}

export interface IQrPreviewProps {
  url?: string
  size: number
  bgColour: string
  fgColour: string
  imageSettings?: IImageSettings
  errorCorrectionLevel: ErrorCorrectionLevel
}
