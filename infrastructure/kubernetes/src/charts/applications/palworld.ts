import { Size } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
  OnepasswordSecretPassword,
  Palworld,
  PalworldProps,
  PersistentVolumeClaimOptions,
  SecretStore,
  SecretStoreType,
} from "cdk8s-constructs";
import {
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Volume,
} from "cdk8s-plus-27";
import { Construct } from "constructs";

export interface PalworldChartProps
  extends Omit<
      PalworldProps,
      "serverData" | "serverPassword" | "serverAdminPassword"
    >,
    HomelabChartProps {
  readonly secretStore: string;
  readonly serverData: PersistentVolumeClaimOptions;
}

export class PalworldChart extends HomelabChart {
  constructor(scope: Construct, id: string, props: PalworldChartProps) {
    super(scope, id, props);

    const serverData = new PersistentVolumeClaim(this, "media", {
      storageClassName: props.serverData.storageClass,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.serverData.size ?? Size.gibibytes(20),
    });
    const serverDataVol = Volume.fromPersistentVolumeClaim(
      this,
      "server-vol",
      serverData,
    );

    const secretStore = SecretStore.fromName(
      this,
      props.secretStore,
      SecretStoreType.CLUSTER,
    );

    const serverPass = new OnepasswordSecretPassword(this, "server-secret", {
      store: secretStore,
      secretKey: "palworld-server-pass",
    });

    const adminPassword = new OnepasswordSecretPassword(
      this,
      "admin-password",
      {
        store: secretStore,
        secretKey: "palworld-admin-pass",
      },
    );

    new Palworld(this, "app", {
      ...props,
      serverData: serverDataVol,
      serverPassword: serverPass.asSecret(),
      serverAdminPassword: adminPassword.asSecret(),
    });
  }
}
