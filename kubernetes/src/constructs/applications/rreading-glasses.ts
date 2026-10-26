import { Duration, Size } from "cdk8s";
import {
  Cpu,
  EnvValue,
  Probe,
  Protocol,
  Secret,
  Service,
} from "cdk8s-plus-31";
import { Construct } from "constructs";
import { Cluster } from "../cnpg/cluster";
import { HomelabDeployment } from "../homelab/deployment";

const APPLICATION_NAME = "rreading-glasses";
const IMAGE = "blampe/rreading-glasses";
const DEFAULT_IMAGE_TAG =
  "latest@sha256:3db72f5af4674ad41a0a5e04d61d3a6322afa0f11923935786344c11b55ef8ae";
const PORT = 8788;
const DATABASE_NAME = "rreading-glasses";
const DATABASE_USER = "rreading-glasses";

export interface RreadingGlassesProps {
  readonly storageClass: string;
  readonly imageTag?: string;
}

export class RreadingGlasses extends Construct {
  readonly service: Service;

  constructor(scope: Construct, name: string, props: RreadingGlassesProps) {
    super(scope, name);

    const database = new Cluster(this, "database", {
      instances: 1,
      storage: {
        storageClass: props.storageClass,
        size: Size.gibibytes(5),
      },
      database: {
        database: DATABASE_NAME,
        username: DATABASE_USER,
      },
    });
    const databaseCredentials = Secret.fromSecretName(
      this,
      "database-credentials",
      `${database.resourceName()}-app`
    );

    const healthProbe = Probe.fromHttpGet("/health", {
      port: PORT,
      failureThreshold: 5,
      periodSeconds: Duration.seconds(10),
      timeoutSeconds: Duration.seconds(5),
    });
    const deployment = new HomelabDeployment(this, "deployment", {
      replicas: 1,
      containers: [
        {
          name: APPLICATION_NAME,
          image: `${IMAGE}:${props.imageTag ?? DEFAULT_IMAGE_TAG}`,
          command: ["/main", "serve"],
          args: ["--upstream=www.goodreads.com"],
          ports: [{ name: "http", number: PORT }],
          envVariables: {
            POSTGRES_HOST: EnvValue.fromValue(database.readWriteService()),
            POSTGRES_DATABASE: EnvValue.fromValue(DATABASE_NAME),
            POSTGRES_USER: EnvValue.fromValue(DATABASE_USER),
            POSTGRES_PASSWORD: EnvValue.fromSecretValue({
              secret: databaseCredentials,
              key: "password",
            }),
          },
          resources: {
            cpu: {
              request: Cpu.millis(50),
              limit: Cpu.millis(500),
            },
            memory: {
              request: Size.mebibytes(64),
              limit: Size.mebibytes(256),
            },
          },
          startup: Probe.fromHttpGet("/health", {
            port: PORT,
            failureThreshold: 30,
            periodSeconds: Duration.seconds(5),
            timeoutSeconds: Duration.seconds(5),
          }),
          readiness: healthProbe,
          liveness: healthProbe,
          securityContext: {
            ensureNonRoot: false,
            readOnlyRootFilesystem: false,
          },
        },
      ],
    });

    this.service = new Service(this, "service", {
      selector: deployment,
      ports: [
        {
          name: "http",
          port: PORT,
          protocol: Protocol.TCP,
        },
      ],
    });
  }
}
