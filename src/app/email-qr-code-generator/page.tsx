import ToolPage, { toolPageMetadata } from '../components/ToolPage'

export const metadata = toolPageMetadata('email')

export default function EmailQRCodePage() {
  return <ToolPage type='email' />
}
