import { ApiObject } from "cdk8s";
import { Construct } from "constructs";
import {
  ClusterSpecBackup,
  ClusterSpecBackupBarmanObjectStoreWalCompression,
  ClusterSpecBootstrapInitdb,
  ClusterSpecPostgresql,
  ClusterSpecPrimaryUpdateStrategy,
  Cluster as L1Cluster,
} from "../../imports/clusters-postgresql.cnpg.io";
import { SizeToString } from "../kube/conversion";
import { PersistentVolumeClaimOptions } from "../homelab/storage";
import { Protocol, Service, ServiceType } from "cdk8s-plus-31";
import { ClusterPrimaryPodSelector } from "./read-write-pod-selector";
import { SecretReference } from "../secrets/secret-reference";
import { CronSchedule, ScheduledBackup } from "./scheduled-backup";

export const DEFAULT_PG_PORT = 5432;
export const DEFAULT_INSTANCE_COUNT = 3;

// TODO: support dashboard creation with https://raw.githubusercontent.com/cloudnative-pg/cloudnative-pg/main/docs/src/samples/monitoring/grafana-configmap.yaml

export interface ExposeWithPrimaryServiceOptions {
  readonly serviceType?: ServiceType;
}

export enum PrimaryUpdateStrategy {
  UNSUPERVISED = "unsupervised",
  SUPERVISED = "supervised",
}

export interface ClusterDatabaseOptions {
  readonly database?: string;
  readonly username?: string;
  readonly password?: SecretReference;
  readonly initCommands?: string[];
  readonly postInitApplicationSql?: string[];
}

export interface ClusterBackupCredentials {
  readonly accessKeyId: SecretReference;
  readonly secretAccessKey: SecretReference;
}

export interface ClusterBackupOptions {
  readonly destinationPath: string;
  readonly endpoint: string;
  readonly credentials: ClusterBackupCredentials;
  readonly walCompression?: ClusterSpecBackupBarmanObjectStoreWalCompression;
  readonly retentionPolicy?: string;
}

export interface ClusterProps {
  readonly instances?: number;
  readonly storage: PersistentVolumeClaimOptions;
  /**
   * @default PrimaryUpdateStrategy.UNSUPERVISED
   */
  readonly updateStrategy?: PrimaryUpdateStrategy;
  readonly image?: string;
  readonly enableMonitoring?: boolean;
  readonly database?: ClusterDatabaseOptions;
  readonly backup?: ClusterBackupOptions;
  readonly sharedPreloadLibraries?: string[];
}

export class Cluster extends Construct {
  protected readonly apiObject: ApiObject;
  constructor(scope: Construct, name: string, props: ClusterProps) {
    super(scope, name);
    this.apiObject = new L1Cluster(this, `resource`, {
      metadata: {},
      spec: {
        backup: this.makeBackup(props),
        bootstrap: {
          initdb: this.formInitdbField(props.database),
        },
        postgresql: this.formPostgresqlField(props),
        storage: props.storage ? this.makeStorage(props.storage) : undefined,
        instances: props.instances ?? DEFAULT_INSTANCE_COUNT,
        imageName: props.image,
        monitoring: {
          enablePodMonitor: props.enableMonitoring,
        },
        externalClusters: [],
        primaryUpdateStrategy: props.updateStrategy
          ? this.genToDefinedUpgradeStrategy(props.updateStrategy)
          : ClusterSpecPrimaryUpdateStrategy.UNSUPERVISED,
      },
    });
  }

  readService(): string {
    return `${this.apiObject.name}-r`;
  }

  writeService(): string {
    return `${this.apiObject.name}-w`;
  }

  readWriteService(): string {
    return `${this.apiObject.name}-rw`;
  }

  createScheduledBackup(id: string, schedule: CronSchedule): ScheduledBackup {
    return new ScheduledBackup(this, id, {
      cluster: this,
      schedule: schedule,
    });
  }

  exposeWithPrimaryService(options?: ExposeWithPrimaryServiceOptions): Service {
    const selector = new ClusterPrimaryPodSelector(
      this,
      "primary-selector",
      this.apiObject.name
    );
    return new Service(this, "service", {
      selector: selector,
      type: options?.serviceType ?? ServiceType.CLUSTER_IP,
      ports: [
        {
          name: "postgresql",
          port: DEFAULT_PG_PORT,
          targetPort: DEFAULT_PG_PORT,
          protocol: Protocol.TCP,
        },
      ],
    });
  }

  private formPostgresqlField(options: ClusterProps): ClusterSpecPostgresql {
    const rec: Record<string, any> = {};
    if (options.sharedPreloadLibraries) {
      rec.sharedPreloadLibraries = options.sharedPreloadLibraries;
    }
    return rec;
  }

  private formInitdbField(
    options?: ClusterDatabaseOptions
  ): ClusterSpecBootstrapInitdb | undefined {
    if (!options) {
      return undefined;
    }
    const rec: Record<string, any> = {};
    if (options.database) {
      rec.database = options.database;
    }
    if (options.username) {
      rec.owner = options.username;
    }

    if (options.password) {
      rec.secret = {
        name: options.password.name,
      };
    }

    if (options.initCommands) {
      rec.postInitSql = options.initCommands;
    }

    if (options.postInitApplicationSql) {
      rec.postInitApplicationSql = options.postInitApplicationSql;
    }

    return rec;
  }

  private makeStorage(options: PersistentVolumeClaimOptions) {
    return {
      storageClass: options.storageClass,
      size: options.size ? SizeToString(options.size) : undefined,
    };
  }

  private makeBackup(options: ClusterProps): ClusterSpecBackup | undefined {
    if (!options.backup) {
      return undefined;
    }
    return {
      barmanObjectStore: {
        destinationPath: options.backup.destinationPath,
        endpointUrl: options.backup.endpoint,
        s3Credentials: {
          accessKeyId: {
            key: options.backup.credentials.accessKeyId.key ?? "accessKeyId",
            name: options.backup.credentials.accessKeyId.name,
          },
          secretAccessKey: {
            key:
              options.backup.credentials.secretAccessKey.key ??
              "secretAccessKey",
            name: options.backup.credentials.secretAccessKey.name,
          },
        },
        wal: {
          compression: options.backup.walCompression,
        },
      },
      retentionPolicy: options.backup.retentionPolicy ?? "14d",
    };
  }

  private genToDefinedUpgradeStrategy(
    s: PrimaryUpdateStrategy
  ): ClusterSpecPrimaryUpdateStrategy {
    switch (s) {
      case PrimaryUpdateStrategy.UNSUPERVISED:
        return ClusterSpecPrimaryUpdateStrategy.UNSUPERVISED;
      case PrimaryUpdateStrategy.SUPERVISED:
        return ClusterSpecPrimaryUpdateStrategy.SUPERVISED;
    }
  }
}
