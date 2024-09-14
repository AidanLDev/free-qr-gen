/// <reference path="./.sst/platform/config.d.ts" />
import { domainName } from './src/app/constants/constants'

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
        name: domainName,
        aliases: [`www.${domainName}`],
      },
      environment: {
        HOSTED_ZONE_ID: process.env.HOSTED_ZONE_ID!,
        BASE_URL: 'https://freeqrgen.net',
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD!,
        MY_AWS_ACCESS_KEY_ID: process.env.MY_AWS_ACCESS_KEY_ID!,
        MY_AWS_SECRET_ACCESS_KEY: process.env.MY_AWS_SECRET_ACCESS_KEY!,
        MY_AWS_ACCOUNT_ID: process.env.MY_AWS_ACCOUNT_ID!,
      },
    })
  },
})
