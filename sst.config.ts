import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import { domainName } from "@/app/constants/constants";

export default {
  config(_input) {
    return {
      name: "free-qr-gen",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const hostedZone = route53.HostedZone.fromHostedZoneAttributes(
        stack,
        "HostedZone",
        {
          hostedZoneId: process.env.HOSTED_ZONE_ID!,
          zoneName: domainName,
        }
      );

      // Create an ACM certificate for the domain
      const certificate = new acm.Certificate(stack, "SiteCertificate", {
        domainName,
        validation: acm.CertificateValidation.fromDns(hostedZone),
      });

      const site = new NextjsSite(stack, "site", {
        customDomain: {
          domainName,
          hostedZone: domainName,
          cdk: {
            certificate,
          },
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
