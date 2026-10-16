import { ErrorCorrectionLevel } from '../types'

export const domainName = 'freeqrgen.net'
export const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(\S*)?$/
export const postHeader = {
  'Content-Type': 'application/json',
}
export const errorCorrectionLevelOptions: {
  value: ErrorCorrectionLevel
  label: string
  recovery: string
}[] = [
  { value: 'L', label: 'Low', recovery: '7%' },
  { value: 'M', label: 'Medium', recovery: '15%' },
  { value: 'Q', label: 'Quartile', recovery: '25%' },
  { value: 'H', label: 'High', recovery: '30%' },
]
export const sizePresets = [256, 512, 1024, 2048]
export const maxLogoFileSize = 10 * 1024 * 1024
