import { NextRequest, NextResponse } from 'next/server'

async function handler(req: NextRequest) {
  const body = await req.json()
  const { feedback } = body
  console.log('feedback: ', feedback)
  try {
    return NextResponse.json({
      message: 'Successfully sent feedback',
    })
  } catch (err) {
    return NextResponse.json({
      message: 'Failed to send feedback',
    })
  }
}

export { handler as GET, handler as POST }
