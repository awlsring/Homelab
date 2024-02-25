import { Size } from "cdk8s";
import {
  Deployment,
  EnvValue,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  SecretValue,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-27";
import { Construct } from "constructs";

const IMAGE = "ghcr.io/bluesky-social/pds";
const DIRECTORY = "/pds";
const PORT = 3000;
const PDS_DID_PLC_URL = "https://plc.directory";
const PDS_BSKY_APP_VIEW_URL = "https://api.bsky.app";
const PDS_BSKY_APP_VIEW_DID = "did:web:api.bsky.app";
const PDS_REPORT_SERVICE_URL = "https://mod.bsky.app";
const PDS_REPORT_SERVICE_DID = "did:plc:ar7c4by46qjdydhdevvrndac";
const PDS_CRAWLERS = "https://bsky.network";

export interface ApplicationProps {
  readonly hostname: string;
  /**
   * Generate with `openssl rand --hex 16` and save to a secret that is passed.
   */
  readonly jwtSecret: SecretValue;
  /**
   * Generate with `openssl rand --hex 16` and save to a secret that is passed.
   */
  readonly pdsAdminPasswordSecret: SecretValue;
  /**
   * Generate with `openssl ecparam --name secp256k1 --genkey --noout --outform DER | tail --bytes=+8 | head --bytes=32 | xxd --plain --cols 32` and save to a secret that is passed.
   */
  readonly pdsPlcRotationKeyK256PrivateKeyHex: SecretValue;
  readonly serviceHandleDomains?: string[];
  readonly disableLogging?: boolean;
}

export interface PdnsStorageProps {
  readonly size?: Size;
  readonly storageClass?: string;
}

export interface BlueskyPdsProps {
  readonly imageTag?: string;
  readonly application: ApplicationProps;
  readonly storage: PdnsStorageProps;
  readonly serviceType?: ServiceType;
}

export class BlueskyPds extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;

  constructor(scope: Construct, id: string, props: BlueskyPdsProps) {
    super(scope, id);

    const dataPvc = new PersistentVolumeClaim(this, "data-pvc", {
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.storage.size ?? Size.gibibytes(10),
      storageClassName: props.storage.storageClass ?? "default",
    });
    const dataVol = Volume.fromPersistentVolumeClaim(this, "data-vol", dataPvc);

    this.deployment = new Deployment(this, "bluesky-pds-deployment", {
      replicas: 1,
      securityContext: {
        ensureNonRoot: false,
      },
      containers: [
        {
          image: `${IMAGE}:${props.imageTag ?? "latest"}`,
          port: PORT,
          resources: {},
          envVariables: {
            PDS_HOSTNAME: EnvValue.fromValue(props.application.hostname),
            PDS_JWT_SECRET: EnvValue.fromSecretValue(
              props.application.jwtSecret,
            ),
            PDS_ADMIN_PASSWORD: EnvValue.fromSecretValue(
              props.application.pdsAdminPasswordSecret,
            ),
            PDS_PLC_ROTATION_KEY_K256_PRIVATE_KEY_HEX: EnvValue.fromSecretValue(
              props.application.pdsPlcRotationKeyK256PrivateKeyHex,
            ),
            PDS_DATA_DIRECTORY: EnvValue.fromValue(DIRECTORY),
            PDS_BLOBSTORE_DISK_LOCATION: EnvValue.fromValue(
              `${DIRECTORY}/blocks`,
            ),
            PDS_DID_PLC_URL: EnvValue.fromValue(PDS_DID_PLC_URL),
            PDS_BSKY_APP_VIEW_URL: EnvValue.fromValue(PDS_BSKY_APP_VIEW_URL),
            PDS_BSKY_APP_VIEW_DID: EnvValue.fromValue(PDS_BSKY_APP_VIEW_DID),
            PDS_REPORT_SERVICE_URL: EnvValue.fromValue(PDS_REPORT_SERVICE_URL),
            PDS_REPORT_SERVICE_DID: EnvValue.fromValue(PDS_REPORT_SERVICE_DID),
            PDS_CRAWLERS: EnvValue.fromValue(PDS_CRAWLERS),
            PDS_SERVICE_HANDLE_DOMAINS: EnvValue.fromValue(
              props.application.serviceHandleDomains?.join(",") ?? "",
            ),
            LOG_ENABLED: EnvValue.fromValue(
              props.application.disableLogging ? "false" : "true",
            ),
          },
          securityContext: {
            privileged: true,
            allowPrivilegeEscalation: true,
            ensureNonRoot: false,
            readOnlyRootFilesystem: false,
          },
          volumeMounts: [
            {
              volume: dataVol,
              path: DIRECTORY,
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
          port: PORT,
          targetPort: PORT,
        },
      ],
      selector: this.deployment,
    });
  }
}
