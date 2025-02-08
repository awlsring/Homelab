import { Duration, Size } from "cdk8s";
import {
  Cpu,
  Deployment,
  DeploymentStrategy,
  EnvValue,
  Probe,
  Protocol,
  SecretValue,
  Service,
  ServiceAccount,
  ServiceType,
  Volume,
} from "cdk8s-plus-31";
import { Construct } from "constructs";

const IMAGE = "ghcr.io/pocket-id/pocket-id";

export interface PocketIdPostgresOptions {
  readonly hostname: string;
  readonly user: string;
  readonly passwordSecret: SecretValue;
  readonly database: string;
}

export interface PocketIdProps {
  readonly imageTag: string;
  readonly appUrl: string;
  readonly dataVolume: Volume;
  readonly database: PocketIdPostgresOptions;
}

export class PocketId extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;

  constructor(scope: Construct, id: string, props: PocketIdProps) {
    super(scope, id);
    const image = `${IMAGE}:${props.imageTag}`;

    const serviceAccount = new ServiceAccount(this, "service-account", {
      automountToken: true,
    });

    this.deployment = new Deployment(this, "deployment", {
      replicas: 1,
      serviceAccount: serviceAccount,
      automountServiceAccountToken: true,
      strategy: DeploymentStrategy.recreate(),
      containers: [
        {
          name: "pocketid",
          image: image,
          ports: [{ number: 80, protocol: Protocol.TCP }],
          envVariables: {
            PUBLIC_APP_URL: EnvValue.fromValue(props.appUrl),
            TRUST_PROXY: EnvValue.fromValue("true"),
            DB_PROVIDER: EnvValue.fromValue("postgres"),
            POSTGRES_PASSWORD: EnvValue.fromSecretValue(
              props.database.passwordSecret
            ),
            POSTGRES_CONNECTION_STRING: EnvValue.fromValue(
              `postgresql://${props.database.user}:$(POSTGRES_PASSWORD)@${props.database.hostname}:5432/${props.database.database}`
            ),
          },
          resources: {
            cpu: {
              request: Cpu.millis(200),
              limit: Cpu.millis(1000),
            },
            memory: {
              request: Size.mebibytes(256),
              limit: Size.gibibytes(1),
            },
          },
          liveness: Probe.fromHttpGet("/health", {
            port: 80,
            failureThreshold: 3,
            initialDelaySeconds: Duration.seconds(90),
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(5),
          }),
          readiness: Probe.fromHttpGet("/health", {
            port: 80,
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
          volumeMounts: [
            {
              volume: props.dataVolume,
              path: "/app/backend/data",
            },
          ],
        },
      ],
    });

    this.service = new Service(this, "service", {
      type: ServiceType.CLUSTER_IP,
      ports: [
        {
          name: "http",
          port: 80,
          protocol: Protocol.TCP,
        },
      ],
      selector: this.deployment,
    });
  }
}
