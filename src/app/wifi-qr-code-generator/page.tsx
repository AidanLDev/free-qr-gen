import ToolPage, { toolPageMetadata } from '../components/ToolPage'

export const metadata = toolPageMetadata('wifi')

export default function WifiQRCodePage() {
  return <ToolPage type='wifi' />
}
