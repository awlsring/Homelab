import { Chart, ChartProps } from "cdk8s";
import { Construct } from "constructs";
import { HomelabCertificate } from "../constructs/cert-manager/homelab-certificate";
import { HomelabTraefikIngressRoute } from "../constructs/traefik/ingress-route";
import { Middleware } from "../constructs/traefik/middleware";
import { HomelabRoute, IService } from "../constructs/traefik/route";
import { Namespace } from "../constructs/kube/namespace";

export interface ConfigureTlsProps {
  readonly name: string;
  readonly certIssuerName: string;
  readonly dnsNames: string[];
  readonly middlewares?: Middleware[];
}

export interface HomelabChartProps extends ChartProps {
  readonly createNamespace?: boolean;
  readonly tls?: ConfigureTlsProps;
}

export class HomelabChart extends Chart {
  constructor(scope: Construct, name: string, props: HomelabChartProps) {
    super(scope, name, {
      ...props,
      namespace: props.namespace,
    });
    if (props.createNamespace && props.namespace) {
      new Namespace(this, "namespace", {
        name: this.namespace ?? "default",
      });
    }
  }

  configureTraefikTls(
    name: string,
    certIssuerName: string,
    dnsNames: string[],
    service: IService,
    middlewares?: Middleware[],
  ) {
    const certName = `${name}-certificate`;
    const cert = new HomelabCertificate(this, certName, {
      name: certName,
      dnsNames: dnsNames,
      issuerName: certIssuerName,
    });

    const routes = dnsNames.map((dnsName) => {
      return HomelabRoute.generateRoute(dnsName, service, middlewares);
    });

    new HomelabTraefikIngressRoute(this, `${name}-traefik-route`, {
      routes: routes,
      certificate: cert,
    });
  }
}
