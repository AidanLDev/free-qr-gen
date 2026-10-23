import ToolPage, { toolPageMetadata } from '../components/ToolPage'

export const metadata = toolPageMetadata('text')

export default function TextQRCodePage() {
  return <ToolPage type='text' />
}
