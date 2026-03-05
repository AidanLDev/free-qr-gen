export async function register() {
  // Sentry server-side disabled due to OpenTelemetry "Cannot set property logger" crash on Node.js 22.0.0
  // Re-enable after updating Node.js to >= 22.11 or when Sentry fixes the compatibility issue
}

export function onRequestError(
  ...args: Parameters<typeof import('@sentry/nextjs').captureRequestError>
) {
  import('@sentry/nextjs').then((Sentry) => {
    Sentry.captureRequestError(...args)
  })
}
