import {
  Annotation,
  ExternalIngress,
  HomelabChart,
  HomelabChartProps,
} from "cdk8s-constructs";
import { Construct } from "constructs";

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
    props: ExternalIngressChartProps,
  ) {
    super(scope, name, props);

    props.targets.forEach((target) => {
      this.createExternalIngress(props.ingressClass, props.certIssuer, target);
    });
  }

  private createExternalIngress(
    ingress: string,
    certIssuer: string,
    target: ExternalIngressTarget,
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
