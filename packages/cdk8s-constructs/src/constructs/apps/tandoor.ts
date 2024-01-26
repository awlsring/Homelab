import { Duration } from "cdk8s";
import {
  ConfigMap,
  ConnectionScheme,
  Deployment,
  DeploymentStrategy,
  EnvValue,
  ISecret,
  Probe,
  Protocol,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-27";
import { Construct } from "constructs";

const IMAGE = "vabene1111/recipes";
const DEFAULT_TAG = "latest";

export enum TandoorDatabaseEngine {
  POSTGRES = "django.db.backends.postgresql",
}

export interface TandoorDatabaseOptions {
  readonly engine: TandoorDatabaseEngine;
  readonly host: string;
  readonly port?: number;
  readonly user: string;
  readonly password: ISecret;
  readonly database: string;
}

export interface TandoorProps {
  readonly secretKey: ISecret;
  readonly database: TandoorDatabaseOptions;
  readonly staticFilesVolume: Volume;
  readonly mediaFilesVolume: Volume;
  readonly timezone?: string;
  readonly imageTag?: string;
  readonly enableSignUp?: boolean;
  readonly enableMetrics?: boolean;
  readonly serviceType?: ServiceType;
}

export class Tandoor extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;

  constructor(scope: Construct, name: string, props: TandoorProps) {
    super(scope, name);

    const nginxConfig = new ConfigMap(this, "nginx-config", {
      data: {
        "nginx-config": `events {
            worker_connections 1024;
          }
          http {
            include mime.types;
            server {
              listen 80;
              server_name _;
      
              client_max_body_size 16M;
      
              # serve static files
              location /static/ {
                alias /static/;
              }
              # serve media files
              location /media/ {
                alias /media/;
              }
            }
          }`,
      },
    });
    const nginxConfigVol = Volume.fromConfigMap(
      this,
      "nginx-config-vol",
      nginxConfig,
    );

    const env = {
      SECRET_KEY: EnvValue.fromSecretValue({
        secret: props.secretKey,
        key: "value",
      }),
      TIMEZONE: EnvValue.fromValue(props.timezone ?? "Etc/UTC"),
      ENABLE_METRICS: EnvValue.fromValue(props.enableMetrics ? "1" : "0"),
      DB_ENGINE: EnvValue.fromValue(props.database.engine),
      POSTGRES_HOST: EnvValue.fromValue(props.database.host),
      POSTGRES_PORT: EnvValue.fromValue(`${props.database.port ?? 5432}`),
      POSTGRES_USER: EnvValue.fromValue(props.database.user),
      POSTGRES_PASSWORD: EnvValue.fromSecretValue({
        secret: props.database.password,
        key: "value",
      }),
      POSTGRES_DB: EnvValue.fromValue(props.database.database),
      ENABLE_SIGNUP: EnvValue.fromValue(props.enableSignUp ? "1" : "0"),
    };

    const volumeMounts = [
      {
        path: "/opt/recipes/staticfiles",
        volume: props.staticFilesVolume,
        subPath: "files",
      },
      {
        path: "/opt/recipes/mediafiles",
        volume: props.mediaFilesVolume,
        subPath: "files",
      },
    ];

    this.deployment = new Deployment(this, "deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      containers: [
        {
          name: "tandoor",
          image: `${IMAGE}:${props.imageTag ?? DEFAULT_TAG}`,
          envVariables: env,
          volumeMounts: volumeMounts,
          securityContext: {
            ensureNonRoot: false,
            privileged: true,
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: true,
          },
          resources: {},
          liveness: Probe.fromHttpGet("/", {
            port: 8080,
            scheme: ConnectionScheme.HTTP,
            periodSeconds: Duration.seconds(30),
          }),
          readiness: Probe.fromHttpGet("/", {
            port: 8080,
            scheme: ConnectionScheme.HTTP,
            periodSeconds: Duration.seconds(30),
          }),
        },
        {
          name: "nginx",
          image: "nginx:latest",
          ports: [
            {
              number: 80,
              name: "http",
              protocol: Protocol.TCP,
            },
            {
              number: 8080,
              name: "gunicorn",
              protocol: Protocol.TCP,
            },
          ],
          envVariables: env,
          resources: {},
          securityContext: {
            ensureNonRoot: false,
            privileged: true,
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: true,
          },
          volumeMounts: [
            ...volumeMounts,
            {
              path: "/etc/nginx/nginx.conf",
              volume: nginxConfigVol,
              subPath: "nginx-config",
              readOnly: true,
            },
          ],
        },
      ],
    });

    this.service = new Service(this, "service", {
      type: props.serviceType ?? ServiceType.CLUSTER_IP,
      ports: [
        {
          name: "http",
          port: 80,
          targetPort: 8080,
        },
      ],
      selector: this.deployment,
    });
  }
}
