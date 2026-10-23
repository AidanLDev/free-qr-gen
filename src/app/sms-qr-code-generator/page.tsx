import ToolPage, { toolPageMetadata } from '../components/ToolPage'

export const metadata = toolPageMetadata('sms')

export default function SmsQRCodePage() {
  return <ToolPage type='sms' />
}
