import { Helm } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
  Middleware,
  ServiceType,
} from "cdk8s-constructs";
import { Construct } from "constructs";

const TRAEFIK_NAMESPACE = "traefik-system";

export interface TraefikV2ChartProps
  extends Omit<HomelabChartProps, "namespace"> {
  readonly replicas: number;
  readonly dashboard?: boolean;
}

export class TraefikV2Chart extends HomelabChart {
  constructor(scope: Construct, name: string, props: TraefikV2ChartProps) {
    super(scope, name, {
      ...props,
      namespace: TRAEFIK_NAMESPACE,
      createNamespace: true,
    });

    const ingressClass = "traefik-external";
    new Helm(this, "helm", {
      chart: "traefik/traefik",
      helmFlags: ["--namespace", TRAEFIK_NAMESPACE],
      values: {
        deployment: {
          enabled: true,
          replicas: props.replicas,
          annotations: {},
          podAnnotations: {},
        },
        ports: {
          web: {
            redirectTo: {
              port: "websecure",
            },
          },
          websecure: {
            tls: {
              enabled: true,
            },
          },
        },
        logs: {
          general: {
            level: "INFO",
          },
        },
        ingressRoute: {
          dashboard: {
            enabled: props.dashboard ? true : false,
            matchRule: "Host(`traefik.awlsring-sea.drigs.org`)",
            entryPoints: ["websecure"],
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
          type: ServiceType.LOAD_BALANCER,
        },
        additionalArguments: ["--serversTransport.insecureSkipVerify=true"],
      },
    });

    new Middleware(this, "default-headers", {
      name: "default-headers",
      headers: {
        browserXssFilter: true,
        contentTypeNosniff: true,
        forceStsHeader: true,
        stsIncludeSubdomains: true,
        stsPreload: true,
        stsSeconds: 1552000,
        customFrameOptionsValue: "SAMEORIGIN",
        customRequestHeaders: {
          "X-Forwarded-Proto": "https",
        },
      },
    });
  }
}
