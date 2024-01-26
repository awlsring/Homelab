import { Size } from "cdk8s";
import {
  Cluster,
  HomelabChart,
  HomelabChartProps,
  HomelabIngress,
  HomelabIngressOptions,
  OnepasswordSecretPassword,
  PersistentVolumeClaimOptions,
  SecretStore,
  SecretStoreType,
  Tandoor,
  TandoorDatabaseEngine,
} from "cdk8s-constructs";
import {
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Volume,
} from "cdk8s-plus-27";
import { Construct } from "constructs";

export interface TandoorChartProps extends HomelabChartProps {
  readonly timezone?: string;
  readonly imageTag?: string;
  readonly enableSignUp?: boolean;
  readonly enableMetrics?: boolean;
  readonly secretStore: string;
  readonly storage: {
    readonly staticFiles: PersistentVolumeClaimOptions;
    readonly mediaFiles: PersistentVolumeClaimOptions;
  };
  readonly ingress: HomelabIngressOptions;
}

export class TandoorChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: TandoorChartProps) {
    super(scope, name, props);

    const staticFilesVolume = new PersistentVolumeClaim(this, "static", {
      storageClassName: props.storage.staticFiles.storageClass,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.storage.staticFiles.size ?? Size.gibibytes(5),
    });
    const staticVol = Volume.fromPersistentVolumeClaim(
      this,
      "static-vol",
      staticFilesVolume,
    );

    const mediaFilesVolume = new PersistentVolumeClaim(this, "media", {
      storageClassName: props.storage.mediaFiles.storageClass,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.storage.mediaFiles.size ?? Size.gibibytes(5),
    });
    const mediaVol = Volume.fromPersistentVolumeClaim(
      this,
      "media-vol",
      mediaFilesVolume,
    );

    const secretStore = SecretStore.fromName(
      this,
      props.secretStore,
      SecretStoreType.CLUSTER,
    );

    const dbSecret = new OnepasswordSecretPassword(this, "database-secret", {
      store: secretStore,
      secretKey: "tandoor-database-pass",
    });
    const dbKubeSecret = dbSecret.asSecret();

    const secret = new OnepasswordSecretPassword(this, "secret-key", {
      store: secretStore,
      secretKey: "tandoor-secret-key",
    });

    const cluster = new Cluster(this, "cluster", {
      instances: 1,
      storage: {
        storageClass: "ceph-block",
        size: Size.gibibytes(5),
      },
      database: {
        database: "tandoor",
        username: "tandoor",
        password: {
          name: dbKubeSecret.name,
        },
      },
    });
    const dbService = cluster.exposeWithPrimaryService();

    const app = new Tandoor(this, "app", {
      secretKey: secret.asSecret(),
      staticFilesVolume: staticVol,
      mediaFilesVolume: mediaVol,
      database: {
        engine: TandoorDatabaseEngine.POSTGRES,
        host: dbService.name,
        user: "tandoor",
        password: dbKubeSecret,
        database: "tandoor",
      },
    });

    if (props.ingress) {
      new HomelabIngress(this, "ingress", {
        ingressClassName: props.ingress.ingressClass,
        service: app.service,
        port: 80,
        hostname: props.ingress.hostname,
        certIssuer: props.ingress.certIssuer,
      });
    }
  }
}
