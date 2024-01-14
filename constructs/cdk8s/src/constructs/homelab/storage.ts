import { Size } from "cdk8s";

export interface PersistentVolumeClaimOptions {
  readonly storageClass?: string;
  readonly size?: Size;
}
