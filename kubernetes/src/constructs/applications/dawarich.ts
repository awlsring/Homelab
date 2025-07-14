import { Duration, Size } from "cdk8s";
import {
  ContainerPort,
  ContainerProps,
  Cpu,
  Deployment,
  EnvValue,
  Probe,
  Protocol,
  SecretValue,
  Service,
  ServiceAccount,
  ServicePort,
  ServiceType,
} from "cdk8s-plus-31";
import { Construct } from "constructs";
import { ServiceMonitor } from "../prometheus/service-monitor";

const IMAGE = "freikin/dawarich";

export interface DawarichValkeyOptions {
  readonly url?: string;
  readonly hostname: string;
  readonly port?: number;
  readonly dbIndex?: number;
  readonly user?: string;
  readonly socket?: string;
}

export interface DawarichPostgresOptions {
  readonly hostname: string;
  readonly user: string;
  readonly passwordSecret: SecretValue;
  readonly database: string;
  readonly port?: number;
}

export interface DawarichReverseGeocodingOptions {
  readonly photonAddress?: string;
  readonly photonApiKey?: SecretValue;
  readonly geoapifyApiKey?: SecretValue;
}

export interface DawarichProps {
  readonly imageTag: string;
  readonly postgres: DawarichPostgresOptions;
  readonly valkey: DawarichValkeyOptions;
  readonly hostname: string;
  readonly monitoringEnabled?: boolean;
  readonly secretKeyBase: SecretValue;
  readonly reverseGeocoding?: DawarichReverseGeocodingOptions;
}

export class Dawarich extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;
  readonly serviceAccount: ServiceAccount;

  private createWebContainer(props: DawarichProps): ContainerProps {
    const environment: Record<string, EnvValue> = {
      RAILS_ENV: EnvValue.fromValue("production"),
      REDIS_URL: EnvValue.fromValue(
        `redis://${props.valkey.hostname}:${props.valkey.port ?? 6379}`
      ),
      DATABASE_HOST: EnvValue.fromValue(props.postgres.hostname),
      DATABASE_PORT: EnvValue.fromValue(
        props.postgres.port ? props.postgres.port.toString() : "5432"
      ),
      DATABASE_USERNAME: EnvValue.fromValue(props.postgres.user),
      DATABASE_PASSWORD: EnvValue.fromSecretValue(
        props.postgres.passwordSecret
      ),
      DATABASE_NAME: EnvValue.fromValue(props.postgres.database),
      APPLICATION_HOSTS: EnvValue.fromValue(
        ["localhost", props.hostname].join(",")
      ),
      TIME_ZONE: EnvValue.fromValue("America/Los_Angeles"),
      APPLICATION_PROTOCOL: EnvValue.fromValue("http"),
      SELF_HOSTED: EnvValue.fromValue("true"),
      STORE_GEODATA: EnvValue.fromValue("true"),
      DISTANCE_UNIT: EnvValue.fromValue("mi"),
      SECRET_KEY_BASE: EnvValue.fromSecretValue(props.secretKeyBase),
    };

    if (props.reverseGeocoding?.photonAddress) {
      environment["PHOTON_API_HOST"] = EnvValue.fromValue(
        props.reverseGeocoding.photonAddress
      );
    } else if (props.reverseGeocoding?.photonApiKey) {
      environment["PHOTON_API_KEY"] = EnvValue.fromSecretValue(
        props.reverseGeocoding.photonApiKey
      );
    } else if (props.reverseGeocoding?.geoapifyApiKey) {
      environment["GEOAPIFY_API_KEY"] = EnvValue.fromSecretValue(
        props.reverseGeocoding.geoapifyApiKey
      );
    }

    const ports: ContainerPort[] = [{ number: 3000, protocol: Protocol.TCP }];

    if (props.monitoringEnabled) {
      environment["PROMETHEUS_EXPORTER_HOST"] = EnvValue.fromValue("0.0.0.0");
      environment["PROMETHEUS_EXPORTER_PORT"] = EnvValue.fromValue("9394");
      environment["PROMETHEUS_EXPORTER_ENABLED"] = EnvValue.fromValue("true");
      ports.push({ number: 9394, name: "metrics", protocol: Protocol.TCP });
    }

    return {
      name: "web",
      image: `${IMAGE}:${props.imageTag}`,
      ports: ports,
      command: ["web-entrypoint.sh"],
      args: ["bin/rails", "server", "-p", "3000", "-b", "::"],
      envVariables: environment,
      liveness: Probe.fromHttpGet("/api/v1/health", {
        port: 3000,
        failureThreshold: 3,
        initialDelaySeconds: Duration.seconds(30),
        periodSeconds: Duration.seconds(10),
        timeoutSeconds: Duration.seconds(5),
      }),
      readiness: Probe.fromHttpGet("/api/v1/health", {
        port: 3000,
        failureThreshold: 3,
        initialDelaySeconds: Duration.seconds(30),
        periodSeconds: Duration.seconds(10),
        timeoutSeconds: Duration.seconds(5),
      }),
      securityContext: {
        ensureNonRoot: false,
        privileged: true,
        readOnlyRootFilesystem: false,
        allowPrivilegeEscalation: true,
      },
      resources: {
        cpu: {
          request: Cpu.millis(200),
          limit: Cpu.millis(2000),
        },
        memory: {
          request: Size.mebibytes(256),
          limit: Size.gibibytes(2),
        },
      },
    };
  }

  private createWorkerContainer(props: DawarichProps): ContainerProps {
    const environment: Record<string, EnvValue> = {
      RAILS_ENV: EnvValue.fromValue("production"),
      REDIS_URL: EnvValue.fromValue(
        `redis://${props.valkey.hostname}:${props.valkey.port ?? 6379}`
      ),
      DATABASE_HOST: EnvValue.fromValue(props.postgres.hostname),
      DATABASE_PORT: EnvValue.fromValue(
        props.postgres.port ? props.postgres.port.toString() : "5432"
      ),
      DATABASE_USERNAME: EnvValue.fromValue(props.postgres.user),
      DATABASE_PASSWORD: EnvValue.fromSecretValue(
        props.postgres.passwordSecret
      ),
      DATABASE_NAME: EnvValue.fromValue(props.postgres.database),
      APPLICATION_HOSTS: EnvValue.fromValue(
        ["localhost", props.hostname].join(",")
      ),
      TIME_ZONE: EnvValue.fromValue("America/Los_Angeles"),
      APPLICATION_PROTOCOL: EnvValue.fromValue("http"),
      SELF_HOSTED: EnvValue.fromValue("true"),
      STORE_GEODATA: EnvValue.fromValue("true"),
      DISTANCE_UNIT: EnvValue.fromValue("mi"),
      BACKGROUND_PROCESSING_CONCURRENCY: EnvValue.fromValue("10"),
      SECRET_KEY_BASE: EnvValue.fromSecretValue(props.secretKeyBase),
    };

    if (props.reverseGeocoding?.photonAddress) {
      environment["PHOTON_API_HOST"] = EnvValue.fromValue(
        props.reverseGeocoding.photonAddress
      );
    } else if (props.reverseGeocoding?.photonApiKey) {
      environment["PHOTON_API_KEY"] = EnvValue.fromSecretValue(
        props.reverseGeocoding.photonApiKey
      );
    } else if (props.reverseGeocoding?.geoapifyApiKey) {
      environment["GEOAPIFY_API_KEY"] = EnvValue.fromSecretValue(
        props.reverseGeocoding.geoapifyApiKey
      );
    }

    return {
      name: "worker",
      image: `${IMAGE}:${props.imageTag}`,
      command: ["sidekiq-entrypoint.sh"],
      args: ["bundle", "exec", "sidekiq"],
      envVariables: environment,
      securityContext: {
        ensureNonRoot: false,
        privileged: true,
        readOnlyRootFilesystem: false,
        allowPrivilegeEscalation: true,
      },
      resources: {
        cpu: {
          request: Cpu.millis(100),
          limit: Cpu.millis(2000),
        },
        memory: {
          request: Size.mebibytes(128),
          limit: Size.gibibytes(2),
        },
      },
    };
  }

  constructor(scope: Construct, id: string, props: DawarichProps) {
    super(scope, id);

    this.serviceAccount = new ServiceAccount(this, "service-account", {
      automountToken: true,
    });

    this.deployment = new Deployment(this, "deployment", {
      replicas: 1,
      serviceAccount: this.serviceAccount,
      automountServiceAccountToken: true,
      containers: [
        this.createWebContainer(props),
        this.createWorkerContainer(props),
      ],
    });

    if (props.monitoringEnabled) {
      new ServiceMonitor(this, "service-monitor", {
        matchLabels: {
          "dawarich/monitoring": "true",
        },
        endpoints: [
          {
            port: "metrics",
          },
        ],
      });
    }

    const servicePorts: ServicePort[] = [
      {
        name: "http",
        port: 3000,
        targetPort: 3000,
        protocol: Protocol.TCP,
      },
    ];

    if (props.monitoringEnabled) {
      servicePorts.push({
        name: "metrics",
        port: 9394,
        targetPort: 9394,
        protocol: Protocol.TCP,
      });
    }

    this.service = new Service(this, "service", {
      metadata: {
        labels: {
          "dawarich/monitoring": props.monitoringEnabled ? "true" : "false",
        },
      },
      type: ServiceType.CLUSTER_IP,
      ports: [
        {
          name: "http",
          port: 3000,
          protocol: Protocol.TCP,
        },
      ],
      selector: this.deployment,
    });
  }
}
