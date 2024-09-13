import { SSTConfig } from 'sst'
import { NextjsSite } from 'sst/constructs'
import * as route53 from 'aws-cdk-lib/aws-route53'
import * as acm from 'aws-cdk-lib/aws-certificatemanager'
import { domainName } from '@/app/constants/constants'

export default {
  config(_input) {
    return {
      name: 'free-qr-gen',
      region: 'us-east-1',
    }
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const hostedZone = route53.HostedZone.fromHostedZoneAttributes(
        stack,
        'HostedZone',
        {
          hostedZoneId: process.env.HOSTED_ZONE_ID!,
          zoneName: domainName,
        }
      )

      // Create an ACM certificate for the domain
      const certificate = new acm.Certificate(stack, 'SiteCertificate', {
        domainName,
        subjectAlternativeNames: [`www.${domainName}`],
        validation: acm.CertificateValidation.fromDns(hostedZone),
      })

      const site = new NextjsSite(stack, 'site', {
        customDomain: {
          domainName,
          domainAlias: `www.${domainName}`,
          hostedZone: domainName,
          cdk: {
            certificate: certificate,
          },
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

      stack.addOutputs({
        SiteUrl: site.url,
      })
    })
  },
} satisfies SSTConfig
/*
// PORTFOLIO EXAMPLE
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'portfolio',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    }
  },
  async run() {
    new sst.aws.Nextjs('MyWeb', {
      domain: {
        name: 'aidanlowson.com',
        aliases: ['www.aidanlowson.com'],
        cert: 'arn:aws:acm:us-east-1:136597286325:certificate/7634b5c3-5a42-46e4-9e83-c1ee57b6f1c2',
      },
      environment: {
        MY_AWS_ACCESS_KEY_ID: process.env.MY_AWS_ACCESS_KEY_ID!,
        MY_AWS_SECRET_ACCESS_KEY: process.env.MY_AWS_SECRET_ACCESS_KEY!,
      },
    })
  },
})

*/
/*
        environment: {
          HOSTED_ZONE_ID: process.env.HOSTED_ZONE_ID!,
          BASE_URL: 'https://freeqrgen.net',
          EMAIL_PASSWORD: process.env.EMAIL_PASSWORD!,
          MY_AWS_ACCESS_KEY_ID: process.env.MY_AWS_ACCESS_KEY_ID!,
          MY_AWS_SECRET_ACCESS_KEY: process.env.MY_AWS_SECRET_ACCESS_KEY!,
          MY_AWS_ACCOUNT_ID: process.env.MY_AWS_ACCOUNT_ID!,
        },
*/
