import { Helm } from "cdk8s";
import {
  CertIssuer,
  CertIssuerProps,
  HomelabChart,
  HomelabChartProps,
} from "cdk8s-constructs";
import { Construct } from "constructs";

const CERT_MANAGER_NAMESPACE = "cert-manager";

export interface CertManagerChartProps
  extends Omit<HomelabChartProps, "namespace"> {
  readonly replicas?: number;
  readonly certIssuers: CertIssuerProps[];
}

export class CertManagerChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: CertManagerChartProps) {
    super(scope, name, {
      ...props,
      namespace: CERT_MANAGER_NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "helm", {
      chart: "jetstack/cert-manager",
      helmFlags: ["--namespace", CERT_MANAGER_NAMESPACE],
      values: {
        installCRDs: true,
        replicaCount: props.replicas ?? 1,
        prometheus: {
          enabled: true,
          servicemonitor: {
            enabled: true,
          },
        },
      },
    });

    props?.certIssuers.forEach((issuer) => {
      new CertIssuer(this, issuer.name, issuer);
    });
  }
}
