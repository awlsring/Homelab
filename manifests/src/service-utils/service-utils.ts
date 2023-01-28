import { Construct } from 'constructs';
import { Certificate, ClusterIssuer } from '../imports/certmanager-cert-manager.io';
import { IngressRoute, IngressRouteSpecRoutes, IngressRouteSpecRoutesKind, IngressRouteSpecRoutesMiddlewares, IngressRouteSpecRoutesServicesKind, IngressRouteSpecRoutesServicesPort } from '../imports/traefik-traefik.containo.us';

export interface TlsExposedProps {
  name: string;
  certIssuer: ClusterIssuer;
  dnsName: string;
  service?: ServiceData;
}

export interface GenerateCertForServiceOptions {
  name: string;
  namespace: string;
  issuer: ClusterIssuer;
  commonName: string;
  dnsNames?: string[];
}

export interface GenerateIngressRouteOptions {
  name: string;
  namespace: string;
  routes: IngressRouteSpecRoutes[];
  certName: string;
  ingressClass?: ClusterIngressClass;
}

export interface GenerateCertificateAndIngressOptions {
  namespace: string;
  certIssuer: ClusterIssuer;
  service: ServiceData;
  dnsName: string;
  ingressClass?: ClusterIngressClass;
  routes?: IngressRouteSpecRoutes[];
}

export interface ServiceData {
  name: string;
  port: number;
}

export enum ClusterIngressClass {
  TRAEFIC_EXTERNAL = 'traefik-external'
}

export function GenerateCertificateAndIngress(scope: Construct, props: GenerateCertificateAndIngressOptions): [Certificate, IngressRoute] {
  const ingressClass = props.ingressClass ?? ClusterIngressClass.TRAEFIC_EXTERNAL;
  const certName = `${props.dnsName}-cert`;

  const cert = GenerateCertForService(scope, {
    name: certName,
    namespace: props.namespace,
    issuer: props.certIssuer,
    commonName: props.dnsName,
  });

  const ingressRoute = GenerateIngressRoute(scope, {
    name: `${props.dnsName}-route`,
    namespace: props.namespace,
    certName: certName,
    ingressClass: ingressClass,
    routes: props.routes ?? [GenerateGenericRoute(props.dnsName, props.service)],
  });

  return [cert, ingressRoute];
}

export function GenerateGenericRoute(
  dnsName: string, service: ServiceData, middlewares?: IngressRouteSpecRoutesMiddlewares[],
): IngressRouteSpecRoutes {
  let middlewaresList = [];
  if (middlewares) {
    middlewaresList = middlewares;
  } else {
    middlewaresList = [
      {
        name: 'default-headers',
        namespace: 'traefik-system',
      },
    ];
  }

  return {
    kind: IngressRouteSpecRoutesKind.RULE,
    match: `Host(\`${dnsName}\`)`,
    middlewares: middlewaresList,
    services: [
      {
        name: service.name,
        kind: IngressRouteSpecRoutesServicesKind.SERVICE,
        port: IngressRouteSpecRoutesServicesPort.fromNumber(service.port),
      },
    ],
  };
}

export function GenerateIngressRoute(scope: Construct, options: GenerateIngressRouteOptions): IngressRoute {
  return new IngressRoute(scope, `${options.name}-route`, {
    metadata: {
      annotations: {
        'kubernetes.io/ingress.class': options.ingressClass ?? ClusterIngressClass.TRAEFIC_EXTERNAL,
      },
    },
    spec: {
      entryPoints: [
        'websecure',
      ],
      routes: options.routes,
      tls: {
        secretName: options.certName,
      },
    },
  });
}

export function GenerateCertForService(scope: Construct, options: GenerateCertForServiceOptions): Certificate {
  const dnsNames = [options.commonName];
  if (options.dnsNames) {
    dnsNames.push(...options.dnsNames);
  }
  const cert = new Certificate(scope, `${options.name}-certificate`, {
    metadata: {
      namespace: options.namespace,
    },
    spec: {
      secretName: `${options.name}`,
      issuerRef: {
        name: options.issuer.name,
        kind: 'ClusterIssuer',
      },
      commonName: options.commonName,
      dnsNames: dnsNames,
    },
  });
  return cert;
}