import { Helm } from "cdk8s";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import {
  CertIssuer,
  CertIssuerProps,
} from "../../constructs/cert-manager/cert-issuer";

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
      chart: "cert-manager",
      repo: "https://charts.jetstack.io",
      version: "1.16.3",
      helmFlags: ["--namespace", CERT_MANAGER_NAMESPACE, "--include-crds"],
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
