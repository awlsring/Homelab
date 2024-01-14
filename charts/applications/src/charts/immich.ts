import { Size } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
  HomelabIngressOptions,
  Immich,
} from "cdk8s-constructs";
import { Volume } from "cdk8s-plus-27";
import { Construct } from "constructs";

export interface ImmichChartProps extends HomelabChartProps {
  readonly ingress: HomelabIngressOptions;
  readonly database: {
    readonly username: string;
    readonly database: string;
    readonly passwordSecret: string;
    readonly storageClass: string;
  };
  readonly mediaStorage: {
    readonly server: string;
    readonly serverPath: string;
    readonly mountPath: string;
  };
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
      server: props.mediaStorage.server,
      path: props.mediaStorage.serverPath,
    });

    new Immich(this, "app", {
      uploadShare: nfsPhotos,
      serverOptions: {
        ingress: props.ingress,
      },
      microservicesOptions: {},
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
