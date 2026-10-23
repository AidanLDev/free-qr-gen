import ToolPage, { toolPageMetadata } from '../components/ToolPage'

export const metadata = toolPageMetadata('vcard')

export default function VCardQRCodePage() {
  return <ToolPage type='vcard' />
}
