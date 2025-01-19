import { Size } from "cdk8s";
import { Volume } from "cdk8s-plus-31";
import { Construct } from "constructs";
import { HomelabChart, HomelabChartProps } from "../../constructs/charts/homelab-chart";
import { HomelabIngressOptions } from "../../constructs/homelab/ingress";
import { Immich, ImmichPhotoVolumeOptions } from "../../constructs/applications/immich";

export interface ImmichChartProps extends HomelabChartProps {
  readonly ingress: HomelabIngressOptions;
  readonly database: {
    readonly username: string;
    readonly database: string;
    readonly passwordSecret: string;
    readonly storageClass: string;
  };
  readonly uploadStorage: {
    readonly server: string;
    readonly serverPath: string;
  };
  readonly externalCollections: {
    readonly server: string;
    readonly serverPath: string;
    readonly name: string;
  }[];
  readonly machineLearning: {
    readonly cache: {
      readonly storageClass: string;
      readonly size?: Size;
    };
  };
}

export class ImmichChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: ImmichChartProps) {
    super(scope, name, props);

    const nfsPhotos = Volume.fromNfs(this, "nfs-vol", "media", {
      server: props.uploadStorage.server,
      path: props.uploadStorage.serverPath,
    });

    const externalCollections: ImmichPhotoVolumeOptions[] =
      props.externalCollections.map((collection) => {
        const vol = Volume.fromNfs(this, collection.server, collection.name, {
          server: collection.server,
          path: collection.serverPath,
        });
        return {
          name: collection.name,
          volume: vol,
        };
      });

    new Immich(this, "app", {
      uploadShare: nfsPhotos,
      photoCollectionShares: externalCollections,
      monitoring: true,
      serverOptions: {
        ingress: props.ingress,
      },
      redisOptions: {
        create: true,
      },
      machineLearningOptions: {
        cache: {
          storageClass: props.machineLearning.cache.storageClass,
          size: props.machineLearning.cache.size,
        },
      },
      postgresOptions: {
        database: props.database.database,
        user: props.database.username,
        passwordSecret: props.database.passwordSecret,
        storageClass: props.database.storageClass,
      },
    });
  }
}
