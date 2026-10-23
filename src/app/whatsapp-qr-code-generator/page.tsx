import ToolPage, { toolPageMetadata } from '../components/ToolPage'

export const metadata = toolPageMetadata('whatsapp')

export default function WhatsAppQRCodePage() {
  return <ToolPage type='whatsapp' />
}
