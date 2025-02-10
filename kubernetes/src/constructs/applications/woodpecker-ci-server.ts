import {
  Deployment,
  DeploymentStrategy,
  EnvValue,
  // Probe,
  Protocol,
  SecretValue,
  Service,
} from "cdk8s-plus-31";
import { Construct } from "constructs";

export interface WoodpeckerCIServerPostgresOptions {
  readonly hostname: string;
  readonly user: string;
  readonly passwordSecret: SecretValue;
  readonly database: string;
}

export interface WoodpeckerCIServerProps {
  readonly imageTag: string;
  readonly address: string;
  readonly storageClass: string;
  readonly secret: SecretValue;
  readonly database: WoodpeckerCIServerPostgresOptions;
  readonly replicas?: number;
  readonly forgeSecrets: {
    [key: string]: EnvValue;
  };
}

export class WoodpeckerCIServer extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;

  constructor(scope: Construct, id: string, props: WoodpeckerCIServerProps) {
    super(scope, id);

    this.deployment = new Deployment(this, "deployment", {
      replicas: props.replicas ?? 1,
      securityContext: {
        fsGroup: 1000,
      },
      strategy: DeploymentStrategy.rollingUpdate(),
      containers: [
        {
          name: "server",
          image: `docker.io/woodpeckerci/woodpecker-server:${props.imageTag}`,
          envVariables: {
            ...props.forgeSecrets,
            WOODPECKER_ADMIN: EnvValue.fromValue("woodpecker,admin"),
            WOODPECKER_HOST: EnvValue.fromValue(props.address),
            WOODPECKER_AGENT_SECRET: EnvValue.fromSecretValue(props.secret),
            WOODPECKER_DATABASE_DRIVER: EnvValue.fromValue("postgres"),
            POSTGRES_PASSWORD: EnvValue.fromSecretValue(
              props.database.passwordSecret
            ),
            WOODPECKER_DATABASE_DATASOURCE: EnvValue.fromValue(
              `postgresql://${props.database.user}:$(POSTGRES_PASSWORD)@${props.database.hostname}:5432/${props.database.database}`
            ),
          },
          // liveness: Probe.fromHttpGet("/healthz", {
          //   port: 80,
          // }),
          // readiness: Probe.fromHttpGet("/healthz", {
          //   port: 80,
          // }),
          resources: {},
          securityContext: {
            user: 1000,
            group: 1000,
          },
          ports: [
            { number: 8000, name: "http", protocol: Protocol.TCP },
            { number: 9000, name: "grpc", protocol: Protocol.TCP },
          ],
        },
      ],
    });

    const serviceCommonProps = {
      ports: [
        {
          name: "http",
          port: 80,
          targetPort: 8000,
          protocol: Protocol.TCP,
        },
        {
          name: "grpc",
          port: 9000,
          protocol: Protocol.TCP,
        },
      ],
      selector: this.deployment,
    };

    this.service = new Service(this, "service", {
      ...serviceCommonProps,
    });
  }
}
