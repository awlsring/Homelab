import { Size } from "cdk8s";
import {
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Volume,
} from "cdk8s-plus-minus";
import { Construct } from "constructs";

export interface PersistentVolumeClaimOptions {
  readonly storageClass?: string;
  readonly size?: Size;
}

export interface PersistantVolumeProps {
  readonly storageClass?: string;
  readonly accessModes?: PersistentVolumeAccessMode[];
  readonly size: Size;
}

/**
 * Creates a persistant volume claim and volume
 */
export class PersistantVolume extends Construct {
  readonly claim: PersistentVolumeClaim;
  readonly volume: Volume;

  constructor(scope: Construct, name: string, props: PersistantVolumeProps) {
    super(scope, name);

    this.claim = new PersistentVolumeClaim(this, "pvc", {
      accessModes: props.accessModes ?? [
        PersistentVolumeAccessMode.READ_WRITE_ONCE,
      ],
      storage: props.size ?? Size.gibibytes(1),
      storageClassName: props.storageClass ?? "default",
    });
    this.volume = Volume.fromPersistentVolumeClaim(this, "volume", this.claim);
  }
}
