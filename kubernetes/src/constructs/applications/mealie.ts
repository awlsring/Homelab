import { Duration } from "cdk8s";
import {
  Cpu,
  Deployment,
  DeploymentStrategy,
  EnvValue,
  ISecret,
  Probe,
  Protocol,
  SecretValue,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-31";
import { Construct } from "constructs";

const IMAGE = "ghcr.io/mealie-recipes/mealie";
const PORT = 9000;

export enum MealieDatabaseEngine {
  POSTGRES = "postgres",
}

export interface MealieAIOptions {
  readonly apiKey: SecretValue;
}

export interface MealieDatabaseOptions {
  readonly engine: MealieDatabaseEngine;
  readonly host: string;
  readonly port?: number;
  readonly user: string;
  readonly password: ISecret;
  readonly database: string;
}

export interface MealieProps {
  readonly database: MealieDatabaseOptions;
  readonly dataVolume: Volume;
  readonly hostname: string;
  readonly imageTag: string;
  readonly ai?: MealieAIOptions;
  readonly timezone?: string;
  readonly enableSignUp?: boolean;
  readonly enableMetrics?: boolean;
  readonly serviceType?: ServiceType;
}

export class Mealie extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;

  constructor(scope: Construct, name: string, props: MealieProps) {
    super(scope, name);

    const env: Record<string, any> = {
      PUID: EnvValue.fromValue("1000"),
      PGID: EnvValue.fromValue("1000"),
      TIMEZONE: EnvValue.fromValue(props.timezone ?? "Etc/UTC"),
      BASE_URL: EnvValue.fromValue(props.hostname),
      DB_ENGINE: EnvValue.fromValue(props.database.engine),
      POSTGRES_SERVER: EnvValue.fromValue(props.database.host),
      POSTGRES_PORT: EnvValue.fromValue(`${props.database.port ?? 5432}`),
      POSTGRES_USER: EnvValue.fromValue(props.database.user),
      POSTGRES_PASSWORD: EnvValue.fromSecretValue({
        secret: props.database.password,
        key: "password",
      }),
      POSTGRES_DB: EnvValue.fromValue(props.database.database),
      ALLOW_SIGNUP: EnvValue.fromValue(props.enableSignUp ? "true" : "false"),
    };

    if (props.ai) {
      env.OPENAI_API_KEY = EnvValue.fromSecretValue(props.ai.apiKey);
    }

    const volumeMounts = [
      {
        path: "/app/data",
        volume: props.dataVolume,
      },
    ];

    this.deployment = new Deployment(this, "deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      containers: [
        {
          name: "mealie",
          image: `${IMAGE}:${props.imageTag}`,
          envVariables: env,
          volumeMounts: volumeMounts,
          securityContext: {
            ensureNonRoot: false,
            privileged: true,
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: true,
          },
          resources: {
            cpu: {
              limit: Cpu.millis(1000),
            },
          },
          ports: [
            {
              number: PORT,
              name: "http",
              protocol: Protocol.TCP,
            },
          ],
          liveness: Probe.fromHttpGet("/api/app/about", {
            port: PORT,
            initialDelaySeconds: Duration.seconds(10),
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(1),
            failureThreshold: 3,
          }),
          readiness: Probe.fromHttpGet("/api/app/about", {
            port: PORT,
            failureThreshold: 3,
            initialDelaySeconds: Duration.seconds(10),
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(1),
          }),
          startup: Probe.fromHttpGet("/api/app/about", {
            port: PORT,
            failureThreshold: 30,
            initialDelaySeconds: Duration.seconds(10),
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(1),
          }),
        },
      ],
    });

    this.service = new Service(this, "service", {
      type: props.serviceType ?? ServiceType.CLUSTER_IP,
      ports: [
        {
          name: "http",
          port: PORT,
          targetPort: PORT,
        },
      ],
      selector: this.deployment,
    });
  }
}
