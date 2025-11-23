/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'free-qr-gen',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
      region: 'us-east-1',
    }
  },
  async run() {
    new sst.aws.Nextjs('MyWeb', {
      domain: {
        name: 'freeqrgen.net',
        aliases: ['www.freeqrgen.net'],
      },
      environment: {
        HOSTED_ZONE_ID: process.env.HOSTED_ZONE_ID!,
        BASE_URL: 'https://freeqrgen.net',
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD!,
        NEXT_PUBLIC_SENTRY_DNS: process.env.NEXT_PUBLIC_SENTRY_DNS!,
        SENTRY_DNS: process.env.SENTRY_DNS!,
      },
      permissions: [
        {
          actions: ['dynamodb:PutItem', 'dynamodb:GetItem', 'dynamodb:Query', 'dynamodb:Scan'],
          resources: ['arn:aws:dynamodb:us-east-1:136597286325:table/NewsLetterSubscribers'],
        },
      ],
    })
  },
})
