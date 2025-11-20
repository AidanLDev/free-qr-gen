import { NextRequest, NextResponse } from 'next/server'

class SentryExampleAPIError extends Error {
  constructor(message: string | undefined) {
    super(message)
    this.name = 'SentryExampleAPIError'
  }
}
// A faulty API route to test Sentry's error monitoring
export function GET(request: NextRequest) {
  // Access request to make this route dynamic without using 'dynamic' export
  const headers = request.headers
  throw new SentryExampleAPIError('This error is raised on the backend called by the example page.')
  return NextResponse.json({ data: 'Testing Sentry Error...' })
}
