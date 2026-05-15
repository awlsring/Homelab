import { Duration, Size } from "cdk8s";
import {
  ConnectionScheme,
  Cpu,
  Deployment,
  EnvValue,
  Probe,
  Protocol,
  Service,
  ServiceType,
} from "cdk8s-plus-31";
import { Construct } from "constructs";

const APPLICATION_NAME = "byparr";
const IMAGE = "ghcr.io/thephaseless/byparr";
const PORT = 8191;
const DEFAULT_IMAGE_TAG = "latest";

export interface ByparrProps {
  readonly imageTag?: string;
}

export class Byparr extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;

  constructor(scope: Construct, name: string, props: ByparrProps = {}) {
    super(scope, name);

    const health = Probe.fromHttpGet("/docs", {
      port: PORT,
      scheme: ConnectionScheme.HTTP,
      initialDelaySeconds: Duration.seconds(5),
      periodSeconds: Duration.seconds(10),
      timeoutSeconds: Duration.seconds(1),
      failureThreshold: 3,
    });

    this.deployment = new Deployment(this, "deployment", {
      replicas: 1,
      securityContext: {
        ensureNonRoot: false,
      },
      containers: [
        {
          name: APPLICATION_NAME,
          image: `${IMAGE}:${props.imageTag ?? DEFAULT_IMAGE_TAG}`,
          ports: [
            {
              number: PORT,
              name: "http",
              protocol: Protocol.TCP,
            },
          ],
          envVariables: {
            PORT: EnvValue.fromValue(`${PORT}`),
          },
          securityContext: {
            ensureNonRoot: false,
            readOnlyRootFilesystem: false,
          },
          resources: {
            cpu: {
              request: Cpu.millis(100),
              limit: Cpu.millis(2000),
            },
            memory: {
              request: Size.mebibytes(512),
              limit: Size.gibibytes(2),
            },
          },
          readiness: health,
          liveness: health,
          startup: Probe.fromHttpGet("/docs", {
            port: PORT,
            scheme: ConnectionScheme.HTTP,
            initialDelaySeconds: Duration.seconds(0),
            periodSeconds: Duration.seconds(5),
            timeoutSeconds: Duration.seconds(1),
            failureThreshold: 30,
          }),
        },
      ],
    });

    this.service = new Service(this, "service", {
      metadata: {
        name: APPLICATION_NAME,
      },
      type: ServiceType.CLUSTER_IP,
      selector: this.deployment,
      ports: [
        {
          name: "http",
          port: PORT,
          targetPort: PORT,
          protocol: Protocol.TCP,
        },
      ],
    });
  }
}
