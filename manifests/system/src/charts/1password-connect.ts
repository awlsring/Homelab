import { Helm } from "cdk8s";
import { HomelabChart, HomelabChartProps, ServiceType } from "cdk8s-constructs";
import { Construct } from "constructs";

const ONEPASSWORD_NAMESPACE = "1password-connect";
const APPLICATION_NAME = "onepassword-connect";

export interface OnePasswordConnectChartProps extends HomelabChartProps {
  readonly serviceType: ServiceType;
}

/*
 * Preconfigured with the following secrets
 * op-credentials: The contents of the 1password-credentials.json
 * onepassword-token: The 1password token issued from secrets automation on 1password website
 *
 */
export class OnePasswordConnectChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props: OnePasswordConnectChartProps,
  ) {
    super(scope, name, props);
    new Helm(this, "helm", {
      chart: "1password/connect",
      helmFlags: ["--namespace", ONEPASSWORD_NAMESPACE],
      values: {
        connect: {
          applicationName: APPLICATION_NAME,
          serviceType: props.serviceType,
        },
        operator: {
          create: true,
        },
      },
    });

    if (props.tls) {
      this.configureTraefikTls(
        props.tls.name,
        props.tls.certIssuerName,
        props.tls.dnsNames,
        {
          name: props.tls.name,
          port: 8080,
        },
      );
    }
  }
}
