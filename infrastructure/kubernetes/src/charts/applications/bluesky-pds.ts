import {
  BlueskyPds,
  CloudflareClusterTunnel,
  HomelabChart,
  HomelabChartProps,
  OnepasswordSecretPassword,
  PersistentVolumeClaimOptions,
  SecretStore,
  SecretStoreType,
} from "cdk8s-constructs";
import { Construct } from "constructs";

export interface BlueskyPdsChartProps extends HomelabChartProps {
  readonly imageTag: string;
  readonly secretStore: string;
  readonly hostname: string;
  readonly storage: PersistentVolumeClaimOptions;
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
      SecretStoreType.CLUSTER,
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
      },
    );

    const plcRotationKeyHex = new OnepasswordSecretPassword(
      this,
      "plc-rotation-key",
      {
        store: secretStore,
        secretKey: "bluesky-pds-plc-rotation-key",
      },
    );

    const bluesky = new BlueskyPds(this, "app", {
      imageTag: props.imageTag,
      application: {
        serviceHandleDomains: [".drigs.org"],
        hostname: props.hostname,
        jwtSecret: jwtSecret.asSecretValue(),
        pdsAdminPasswordSecret: adminPassword.asSecretValue(),
        pdsPlcRotationKeyK256PrivateKeyHex: plcRotationKeyHex.asSecretValue(),
      },
      storage: props.storage,
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
