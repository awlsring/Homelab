import { Chart, ChartProps } from 'cdk8s';
import { Namespace } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { HomelabCertificate } from './homelab-certificate';
import { HomelabRoute, IService } from './homelab-route';
import { HomelabTraefikIngressRoute } from './homelab-traefik-ingress';
import { ClusterIssuer } from '../imports/certmanager-cert-manager.io';
import { Middleware } from '../imports/traefik-traefik.containo.us';

export interface ConfigureTlsProps {
  name: string;
  certIssuer: ClusterIssuer;
  dnsNames: string[];
  middlewares?: Middleware[];
}

export interface HomelabChartProps extends ChartProps {
  namespace: string;
  createNamespace?: boolean;
  tls?: ConfigureTlsProps;
}

export class HomelabChart extends Chart {
  readonly namespace: string;
  constructor(scope: Construct, name: string, props: HomelabChartProps) {
    super(scope, name, props);
    this.namespace = props.namespace;
    if (props.createNamespace) {
      new Namespace(this, 'namespace', {
        metadata: {
          name: props.namespace,
        },
      });
    }
  }

  configureTls(
    name: string,
    certIssuer: ClusterIssuer,
    dnsNames: string[],
    service: IService,
    middlewares?: Middleware[],
  ) {
    const certName = `${name}-cert`;
    const cert = new HomelabCertificate(this, certName, {
      name: certName,
      dnsNames: dnsNames,
      issuer: certIssuer,
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