import ToolPage, { toolPageMetadata } from '../components/ToolPage'

export const metadata = toolPageMetadata('location')

export default function LocationQRCodePage() {
  return <ToolPage type='location' />
}
