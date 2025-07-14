import { Size } from "cdk8s";
import {
  Cpu,
  Deployment,
  EnvValue,
  Protocol,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-31";
import { Construct } from "constructs";

const IMAGE = "ghcr.io/rtuszik/photon-docker";

export interface PhotonProps {
  readonly imageTag?: string;
  readonly dataVolume: Volume;
}

/**
 * https://github.com/komoot/photon
 * https://github.com/rtuszik/photon-docker/blob/main/docker-compose.yml
 */
export class Photon extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;

  constructor(scope: Construct, id: string, props: PhotonProps) {
    super(scope, id);

    const image = `${IMAGE}:${props.imageTag ?? "latest"}`;

    this.deployment = new Deployment(this, "deployment", {
      replicas: 1,
      containers: [
        {
          name: "searxng",
          image: image,
          ports: [{ number: 2322, protocol: Protocol.TCP }],
          envVariables: {
            UPDATE_STRATEGY: EnvValue.fromValue("PARALLEL"),
            UPDATE_INTERVAL: EnvValue.fromValue("30d"),
            LOG_LEVEL: EnvValue.fromValue("INFO"),
          },
          resources: {
            cpu: {
              request: Cpu.millis(100),
              limit: Cpu.millis(2000),
            },
            memory: {
              request: Size.mebibytes(256),
              limit: Size.gibibytes(4),
            },
          },
          securityContext: {
            ensureNonRoot: false,
            privileged: true,
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: true,
          },
          volumeMounts: [
            {
              volume: props.dataVolume,
              path: "/photon/photon_data",
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
          port: 2322,
          protocol: Protocol.TCP,
        },
      ],
      selector: this.deployment,
    });
  }
}
