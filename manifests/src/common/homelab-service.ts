import { Service, ServiceProps } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { HomelabCertificate } from './homelab-certificate';
import { HomelabRoute } from './homelab-route';
import { HomelabTraefikIngressRoute } from './homelab-traefik-ingress';
import { Label } from './label';
import { PrometheusServiceMonitor } from './prometheus-service-monitor';
import { ClusterIssuer } from '../imports/certmanager-cert-manager.io';
import { Middleware } from '../imports/traefik-traefik.containo.us';

export interface CreateSSLCertificateProps {
  readonly name: string;
  readonly dnsNames: string[];
  readonly issuer: ClusterIssuer;
}

export interface ExposeTraefikIngressRouteProps {
  readonly dnsNames: string[];
  readonly middlewares?: Middleware[];
  readonly certificate?: HomelabCertificate;
}

export interface AddServiceMonitorProps {
  readonly matchedLabel: Label;
  readonly port?: string;
  readonly targetPort?: number;
}

export class HomelabService extends Service {
  constructor(scope: Construct, name: string, props: ServiceProps) {
    super(scope, name, props);
  }

  exposeViaTraefikIngressRoute(props: ExposeTraefikIngressRouteProps): HomelabTraefikIngressRoute {
    const routes = props.dnsNames.map((dnsName) => {
      return HomelabRoute.generateRoute(dnsName, this, props.middlewares);
    });

    return new HomelabTraefikIngressRoute(this, `${this.name}-traefik-route`, {
      routes: routes,
      certificate: props.certificate,
    });
  }

  createSSLCertificate(props: CreateSSLCertificateProps): HomelabCertificate {
    const certName = `${props.name}-cert`;
    return new HomelabCertificate(this, certName, {
      name: certName,
      dnsNames: props.dnsNames,
      issuer: props.issuer,
    });
  }

  addServiceMonitor(props: AddServiceMonitorProps): PrometheusServiceMonitor {
    if (this.metadata.getLabel(props.matchedLabel.key) == undefined) {
      this.metadata.addLabel(...props.matchedLabel.toKeyValue());
    }

    return new PrometheusServiceMonitor(this, 'service-monitor', {
      service: this,
      port: props.port,
      targetPort: props.targetPort,
      matchLabel: props.matchedLabel.toRecord(),
    });
  }
}