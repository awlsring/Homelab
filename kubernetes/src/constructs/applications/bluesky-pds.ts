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
} from "cdk8s-plus-31";
import { Construct } from "constructs";
import { PersistentVolumeClaimOptions } from "../homelab/storage";

const IMAGE = "ghcr.io/bluesky-social/pds";
const DIRECTORY = "/pds";
const PORT = 3000;
const PDS_DID_PLC_URL = "https://plc.directory";
const PDS_BSKY_APP_VIEW_URL = "https://api.bsky.app";
const PDS_BSKY_APP_VIEW_DID = "did:web:api.bsky.app";
const PDS_REPORT_SERVICE_URL = "https://mod.bsky.app";
const PDS_REPORT_SERVICE_DID = "did:plc:ar7c4by46qjdydhdevvrndac";
const PDS_CRAWLERS = "https://bsky.network";

export interface BlueskyPDSBucketStorageOptions {
  readonly bucketName: string;
  readonly region: string;
  readonly endpoint?: string;
  readonly accessKeySecret: SecretValue;
  readonly secretKeySecret: SecretValue;
  readonly forcePathStyle?: boolean;
}

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

export interface BlueskyPDSSMTPOptions {
  readonly smtpUrlSecret: SecretValue;
  readonly emailFromAddress: string;
}

export interface BlueskyPDSProps {
  readonly imageTag?: string;
  readonly application: ApplicationProps;
  readonly storage: PersistentVolumeClaimOptions;
  readonly objectStorage?: BlueskyPDSBucketStorageOptions;
  readonly smtp?: BlueskyPDSSMTPOptions;
  readonly serviceType?: ServiceType;
}

export class BlueskyPDS extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;

  private makeSMTPEnv(props: BlueskyPDSProps): Record<string, EnvValue> {
    if (props.smtp) {
      return {
        PDS_EMAIL_SMTP_URL: EnvValue.fromSecretValue(props.smtp.smtpUrlSecret),
        PDS_EMAIL_FROM_ADDRESS: EnvValue.fromValue(props.smtp.emailFromAddress),
      };
    } else {
      return {};
    }
  }

  private makeStorageEnv(props: BlueskyPDSProps): Record<string, EnvValue> {
    if (props.objectStorage) {
      return {
        PDS_BLOBSTORE_S3_BUCKET: EnvValue.fromValue(
          props.objectStorage.bucketName
        ),
        PDS_BLOBSTORE_S3_ENDPOINT: EnvValue.fromValue(
          props.objectStorage.endpoint ?? "https://s3.amazonaws.com"
        ),
        PDS_BLOBSTORE_S3_REGION: EnvValue.fromValue(props.objectStorage.region),
        PDS_BLOBSTORE_S3_ACCESS_KEY: EnvValue.fromSecretValue(
          props.objectStorage.accessKeySecret
        ),
        PDS_BLOBSTORE_S3_SECRET_KEY: EnvValue.fromSecretValue(
          props.objectStorage.secretKeySecret
        ),
        AWS_ACCESS_KEY_ID: EnvValue.fromSecretValue(
          props.objectStorage.accessKeySecret
        ),
        AWS_SECRET_ACCESS_KEY: EnvValue.fromSecretValue(
          props.objectStorage.secretKeySecret
        ),
        PDS_BLOBSTORE_S3_FORCE_PATH_STYLE: EnvValue.fromValue(
          props.objectStorage.forcePathStyle ? "true" : "false"
        ),
        PDS_BLOBSTORE_DISK_LOCATION: EnvValue.fromValue(""),
      };
    } else {
      return {
        PDS_BLOBSTORE_DISK_LOCATION: EnvValue.fromValue(`${DIRECTORY}/blocks`),
      };
    }
  }

  constructor(scope: Construct, id: string, props: BlueskyPDSProps) {
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
              props.application.jwtSecret
            ),
            PDS_ADMIN_PASSWORD: EnvValue.fromSecretValue(
              props.application.pdsAdminPasswordSecret
            ),
            PDS_PLC_ROTATION_KEY_K256_PRIVATE_KEY_HEX: EnvValue.fromSecretValue(
              props.application.pdsPlcRotationKeyK256PrivateKeyHex
            ),
            PDS_DATA_DIRECTORY: EnvValue.fromValue(DIRECTORY),
            PDS_DID_PLC_URL: EnvValue.fromValue(PDS_DID_PLC_URL),
            PDS_BSKY_APP_VIEW_URL: EnvValue.fromValue(PDS_BSKY_APP_VIEW_URL),
            PDS_BSKY_APP_VIEW_DID: EnvValue.fromValue(PDS_BSKY_APP_VIEW_DID),
            PDS_REPORT_SERVICE_URL: EnvValue.fromValue(PDS_REPORT_SERVICE_URL),
            PDS_REPORT_SERVICE_DID: EnvValue.fromValue(PDS_REPORT_SERVICE_DID),
            PDS_CRAWLERS: EnvValue.fromValue(PDS_CRAWLERS),
            PDS_SERVICE_HANDLE_DOMAINS: EnvValue.fromValue(
              props.application.serviceHandleDomains?.join(",") ?? ""
            ),
            LOG_ENABLED: EnvValue.fromValue(
              props.application.disableLogging ? "false" : "true"
            ),
            ...this.makeStorageEnv(props),
            ...this.makeSMTPEnv(props),
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
