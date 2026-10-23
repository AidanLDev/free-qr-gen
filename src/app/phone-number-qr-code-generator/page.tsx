import ToolPage, { toolPageMetadata } from '../components/ToolPage'

export const metadata = toolPageMetadata('phone')

export default function PhoneQRCodePage() {
  return <ToolPage type='phone' />
}
