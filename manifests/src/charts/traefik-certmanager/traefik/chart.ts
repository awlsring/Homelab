import { Chart, ChartProps, Helm, JsonPatch } from 'cdk8s';
import { Namespace, ServiceType } from 'cdk8s-plus-25';
import { Container } from 'cdk8s-plus-25/lib/imports/k8s';
import { Construct } from 'constructs';
import { Middleware } from '../../../imports/traefik-traefik.containo.us';

export interface TraefikChartProps extends ChartProps {
  replicas: number;
  createNamespace?: boolean;
  dashboard?: DashboardOptions;
  additionalContainers?: Container[];
}

export interface DashboardOptions {
  domainName: string;
  issuerName: string;
  ingressClass: string;
  auth?: {
    username: string;
    password: string;
  };
}

export class TraefikChart extends Chart {
  readonly defaultHeaders: Middleware;
  constructor(scope: Construct, name: string, props: TraefikChartProps) {
    super(scope, name, props);

    if (props.createNamespace) {
      new Namespace(this, 'namespace', {
        metadata: {
          name: this.namespace,
        },
      });
    }

    const additionalContainers = [];
    if (props.additionalContainers) {
      additionalContainers.push(...props.additionalContainers);
    }

    const ingressClass = 'traefik-external';
    const traefik = new Helm(this, 'helm', {
      chart: 'traefik/traefik',
      helmFlags: [
        '--namespace', this.namespace!,
      ],
      values: {
        deployment: {
          enabled: true,
          replicas: props.replicas,
          annotations: {},
          podAnnotations: {},
          additionalContainers: additionalContainers,
          initContainers: [],
        },
        ports: {
          web: {
            redirectTo: 'websecure',
          },
          websecure: {
            tls: {
              enabled: true,
            },
          },
        },
        logs: {
          general: {
            level: 'DEBUG',
          },
        },
        ingressRoute: {
          dashboard: {
            enabled: props.dashboard ? true : false,
          },
        },
        providers: {
          kubernetesCRD: {
            enabled: true,
            ingressClass: ingressClass,
            allowCrossNamespace: true,
            allowExternalNameServices: true,
          },
          kubernetesIngress: {
            enabled: true,
            allowCrossNamespace: false,
            allowExternalNameServices: true,
          },
        },
        rbac: {
          enabled: true,
        },
        service: {
          enabled: true,
          namespace: 'traefik-service',
          type: ServiceType.LOAD_BALANCER,
        },
        additionalArguments: [
          '--serversTransport.insecureSkipVerify=true',
        ],
      },
    });

    // make sure service has "traefik-system"
    traefik.apiObjects.forEach(a => {
      if (a.kind == 'List') {
        a.addJsonPatch(JsonPatch.add('/items/0/metadata/namespace', 'traefik-system'));
      }
    });

    this.defaultHeaders = new Middleware(this, 'default-headers', {
      metadata: {
        name: 'default-headers',
        namespace: 'traefik-system',
      },
      spec: {
        headers: {
          browserXssFilter: true,
          contentTypeNosniff: true,
          forceStsHeader: true,
          stsIncludeSubdomains: true,
          stsPreload: true,
          stsSeconds: 1552000,
          customFrameOptionsValue: 'SAMEORIGIN',
          customRequestHeaders: {
            'X-Forwarded-Proto': 'https',
          },
        },
      },
    });
  }
}