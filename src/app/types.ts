// Interfaces

import { Dispatch, MutableRefObject, SetStateAction } from 'react'

export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H'

export type TooltipVarient =
  | 'dark'
  | 'light'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'

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
  type?: 'submit'
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
}

export interface IColourPickerProps {
  onChange: ((newColor: string) => void) | undefined
  color: string
}

export interface IImageUpload {
  handleImageUpload: (param: any) => void
  setRemoveImage: () => void
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

export interface ISelectProps {
  label: string
  options: Record<string, string>
  value: string
  setValue: Dispatch<SetStateAction<string>>
  className?: string
  tooltip?: string
  tooltipType?: TooltipVarient
}
