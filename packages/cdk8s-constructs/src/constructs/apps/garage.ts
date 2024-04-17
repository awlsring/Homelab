import { Size } from "cdk8s";
import {
  ConfigMap,
  Deployment,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-27";
import { Construct } from "constructs";
import { PersistentVolumeClaimOptions } from "../homelab/storage";

const IMAGE = "dxflrs/garage";
const DEFAULT_TAG = "latest";

// PORTS
const S3_API_PORT = 3900;
const RPC_API_PORT = 3901;
const S3_WEB_PORT = 3902;
const ADMIN_PORT = 3903;
const K2V_API_PORT = 3904;

const DATA_DIRECTORY = "/var/lib/garage/data";
const METADATA_DIRECTORY = "/var/lib/garage/meta";
const CFG_DIRECTORY = "/etc/garage.toml";
const CFG_FILE_NAME = "garage.toml";

export interface GarageProps {
  readonly metadataStorage: PersistentVolumeClaimOptions;
  readonly dataStorage: PersistentVolumeClaimOptions;
  readonly secretKey: string;
  readonly imageTag?: string;
  readonly serviceType?: ServiceType;
}

export class Garage extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;

  constructor(scope: Construct, id: string, props: GarageProps) {
    super(scope, id);

    const cfg = new ConfigMap(this, "config", {
      data: {
        "garage.toml": [
          "metadata_dir = '/var/lib/garage/meta'",
          "data_dir = '/var/lib/garage/data'",
          "db_engine = 'lmdb'",
          "replication_mode = '3'",
          `rpc_bind_addr = '[::]:${RPC_API_PORT}'`,
          `rpc_secret = '${props.secretKey}'`,
          "",
          "[s3_api]",
          "s3_region = 'garage'",
          `api_bind_addr = '[::]:${S3_API_PORT}'`,
          "root_domain = '.s3.garage.localhost'",
          "",
          "[s3_web]",
          `bind_addr = '[::]:${S3_WEB_PORT}'`,
          "root_domain = '.web.garage.localhost'",
          "index = 'index.html'",
          "",
          "[admin]",
          `api_bind_addr = '[::]:${ADMIN_PORT}'`,
          "",
          "[k2v_api]",
          `api_bind_addr = '[::]:${K2V_API_PORT}'`,
        ].join("\n"),
      },
    });

    const cfgVol = Volume.fromConfigMap(this, "config-vol", cfg, {});

    const dataPvc = new PersistentVolumeClaim(this, "data-pvc", {
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.dataStorage.size ?? Size.gibibytes(10),
      storageClassName: props.dataStorage.storageClass ?? "default",
    });
    const dataVol = Volume.fromPersistentVolumeClaim(this, "data-vol", dataPvc);

    const metadataPvc = new PersistentVolumeClaim(this, "metadata-pvc", {
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.metadataStorage.size ?? Size.gibibytes(10),
      storageClassName: props.dataStorage.storageClass ?? "default",
    });
    const metadataVol = Volume.fromPersistentVolumeClaim(
      this,
      "metadata-vol",
      metadataPvc,
    );

    this.deployment = new Deployment(this, "deployment", {
      replicas: 1,
      securityContext: {
        ensureNonRoot: false,
      },
      containers: [
        {
          image: `${IMAGE}:${props.imageTag ?? DEFAULT_TAG}`,
          ports: [
            {
              number: S3_API_PORT,
              name: "s3-api",
            },
            {
              number: RPC_API_PORT,
              name: "rpc",
            },
            {
              number: S3_WEB_PORT,
              name: "s3-web",
            },
            {
              number: ADMIN_PORT,
              name: "admin",
            },
            {
              number: K2V_API_PORT,
              name: "k2v-api",
            },
          ],
          resources: {},
          envVariables: {},
          securityContext: {
            privileged: true,
            allowPrivilegeEscalation: true,
            ensureNonRoot: false,
            readOnlyRootFilesystem: false,
          },
          volumeMounts: [
            {
              volume: dataVol,
              path: DATA_DIRECTORY,
            },
            {
              volume: metadataVol,
              path: METADATA_DIRECTORY,
            },
            {
              volume: cfgVol,
              path: CFG_DIRECTORY,
              subPath: CFG_FILE_NAME,
            },
          ],
        },
      ],
    });

    this.service = new Service(this, "service", {
      type: props.serviceType ?? ServiceType.CLUSTER_IP,
      ports: [
        {
          name: "s3-api",
          port: S3_API_PORT,
          targetPort: S3_API_PORT,
        },
        {
          name: "rpc",
          port: RPC_API_PORT,
          targetPort: RPC_API_PORT,
        },
        {
          name: "s3-web",
          port: S3_WEB_PORT,
          targetPort: S3_WEB_PORT,
        },
        {
          name: "admin",
          port: ADMIN_PORT,
          targetPort: ADMIN_PORT,
        },
        {
          name: "k2v-api",
          port: K2V_API_PORT,
          targetPort: K2V_API_PORT,
        },
      ],
      selector: this.deployment,
    });
  }
}
