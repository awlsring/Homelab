import { Construct } from "constructs";
import { Annotation } from "../constructs/annotations/annotation";
import {
  HomelabChart,
  HomelabChartProps,
} from "../constructs/charts/homelab-chart";
import { ExternalIngress } from "../constructs/external-ingress/external-ingress";

export interface ExternalIngressTarget {
  readonly name: string;
  readonly address: string;
  readonly hostname: string;
  readonly port: number;
  readonly servicePort?: number;
  readonly ingressAnnotations?: Annotation[];
  readonly certIssuerOverride?: string;
  readonly ingressClassOverride?: string;
}

export interface ExternalIngressChartProps extends HomelabChartProps {
  readonly certIssuer: string;
  readonly ingressClass: string;
  readonly targets: ExternalIngressTarget[];
}

export class ExternalIngressChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props: ExternalIngressChartProps
  ) {
    super(scope, name, props);

    props.targets.forEach((target) => {
      this.createExternalIngress(props.ingressClass, props.certIssuer, target);
    });
  }

  private createExternalIngress(
    ingress: string,
    certIssuer: string,
    target: ExternalIngressTarget
  ) {
    new ExternalIngress(this, target.name, {
      address: target.address,
      hostname: target.hostname,
      port: target.port,
      ingressClassName: target.ingressClassOverride ?? ingress,
      certIssuer: target.certIssuerOverride ?? certIssuer,
      servicePort: target.servicePort,
      ingressAnnotations: target.ingressAnnotations,
    });
  }
}
