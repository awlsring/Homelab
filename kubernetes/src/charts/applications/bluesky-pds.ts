import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import {
  SecretStore,
  SecretStoreType,
} from "../../constructs/external-secrets/secret-store";
import { OnepasswordSecretPassword } from "../../constructs/external-secrets/onepassword-secret-password";
import { PersistentVolumeClaimOptions } from "../../constructs/homelab/storage";
import { BlueskyPDS } from "../../constructs/applications/bluesky-pds";
import { CloudflareClusterTunnel } from "../../constructs/cloudflare/tunnel/cluster-tunnel";

export interface BlueskyPdsBucketStorageOptions {
  readonly bucketName: string;
  readonly region: string;
  readonly accessKeySecret: string;
  readonly secretKeySecret: string;
  readonly forcePathStyle?: boolean;
}

export interface BlueskyPdsChartProps extends HomelabChartProps {
  readonly imageTag: string;
  readonly secretStore: string;
  readonly hostname: string;
  readonly storage: PersistentVolumeClaimOptions;
  readonly objectStorage: {
    readonly bucketName: string;
    readonly region: string;
    readonly endpoint?: string;
    readonly forcePathStyle?: boolean;
  };
  readonly tunnel: {
    readonly email: string;
    readonly domain: string;
    readonly cloudflareSecret: string;
    readonly accountId: string;
    readonly fqdn?: string;
  };
}

export class BlueskyPdsChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: BlueskyPdsChartProps) {
    super(scope, name, props);
    const secretStore = SecretStore.fromName(
      this,
      props.secretStore,
      SecretStoreType.CLUSTER_SECRET_STORE
    );

    const jwtSecret = new OnepasswordSecretPassword(this, "jwt-secret", {
      store: secretStore,
      secretKey: "bluesky-pds-jwt-secret",
    });

    const adminPassword = new OnepasswordSecretPassword(
      this,
      "admin-password",
      {
        store: secretStore,
        secretKey: "bluesky-pds-admin-password",
      }
    );

    const blockAccessKey = new OnepasswordSecretPassword(
      this,
      "blob-access-key",
      {
        store: secretStore,
        secretKey: "bluesky-pds-blob-access-key",
      }
    );

    const blockSecretKey = new OnepasswordSecretPassword(
      this,
      "blob-secret-key",
      {
        store: secretStore,
        secretKey: "bluesky-pds-blob-secret-key",
      }
    );

    const plcRotationKeyHex = new OnepasswordSecretPassword(
      this,
      "plc-rotation-key",
      {
        store: secretStore,
        secretKey: "bluesky-pds-plc-rotation-key",
      }
    );

    const smtpUrlSecret = new OnepasswordSecretPassword(this, "smtp-url", {
      store: secretStore,
      secretKey: "bluesky-smtp-url",
    });

    const bluesky = new BlueskyPDS(this, "app", {
      imageTag: props.imageTag,
      application: {
        serviceHandleDomains: [".drigs.org"],
        hostname: props.hostname,
        jwtSecret: jwtSecret.asSecretValue(),
        pdsAdminPasswordSecret: adminPassword.asSecretValue(),
        pdsPlcRotationKeyK256PrivateKeyHex: plcRotationKeyHex.asSecretValue(),
      },
      storage: props.storage,
      smtp: {
        smtpUrlSecret: smtpUrlSecret.asSecretValue(),
        emailFromAddress: "admin@bluesky.drigs.org",
      },
      objectStorage: {
        bucketName: props.objectStorage?.bucketName,
        region: props.objectStorage?.region,
        endpoint: props.objectStorage?.endpoint,
        accessKeySecret: blockAccessKey.asSecretValue(),
        secretKeySecret: blockSecretKey.asSecretValue(),
        forcePathStyle: props.objectStorage?.forcePathStyle,
      },
    });

    const tunnel = new CloudflareClusterTunnel(this, "tunnel", {
      tunnelName: "bluesky-pds",
      email: props.tunnel.email,
      domain: props.tunnel.domain,
      cloudflareSecret: props.tunnel.cloudflareSecret,
      accountId: props.tunnel.accountId,
    });
    tunnel.bindToService(bluesky.service, {
      domainName: props.tunnel.fqdn,
    });
  }
}
