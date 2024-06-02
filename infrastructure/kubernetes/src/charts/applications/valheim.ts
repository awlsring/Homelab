import { Size } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
  OnepasswordSecretPassword,
  PersistentVolumeClaimOptions,
  SecretStore,
  SecretStoreType,
  Valheim,
} from "cdk8s-constructs";
import {
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Volume,
} from "cdk8s-plus-27";
import { Construct } from "constructs";

export interface ValheimChartProps extends HomelabChartProps {
  readonly serverName: string;
  readonly secretStore: string;
  readonly configPersistence: PersistentVolumeClaimOptions;
  readonly serverPersistence: PersistentVolumeClaimOptions;
}

export class ValheimChart extends HomelabChart {
  constructor(scope: Construct, id: string, props: ValheimChartProps) {
    super(scope, id, props);

    const configPvc = new PersistentVolumeClaim(this, "server-config", {
      storageClassName: props.configPersistence.storageClass,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.configPersistence.size ?? Size.gibibytes(10),
    });
    const configVol = Volume.fromPersistentVolumeClaim(
      this,
      "config-vol",
      configPvc,
    );

    const serverDataPvc = new PersistentVolumeClaim(this, "server-data", {
      storageClassName: props.serverPersistence.storageClass,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.serverPersistence.size ?? Size.gibibytes(20),
    });
    const serverDataVol = Volume.fromPersistentVolumeClaim(
      this,
      "server-vol",
      serverDataPvc,
    );

    const secretStore = SecretStore.fromName(
      this,
      props.secretStore,
      SecretStoreType.CLUSTER,
    );

    const serverPass = new OnepasswordSecretPassword(this, "server-secret", {
      store: secretStore,
      secretKey: "valheim-server-password",
    });

    const supervisorPass = new OnepasswordSecretPassword(
      this,
      "supervisor-secret",
      {
        store: secretStore,
        secretKey: "valheim-supervisor-password",
      },
    );

    new Valheim(this, "app", {
      ...props,
      serverName: props.serverName,
      configVolume: configVol,
      serverVolume: serverDataVol,
      serverPassword: {
        secret: serverPass.asSecret(),
        key: "credential",
      },
      backup: {
        enable: true,
      },
      supervisorService: {
        enable: true,
        username: "supervisor",
        password: {
          secret: supervisorPass.asSecret(),
          key: "credential",
        },
      },
    });
  }
}
