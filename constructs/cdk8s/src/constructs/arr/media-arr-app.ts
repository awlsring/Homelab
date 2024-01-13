import { Volume, VolumeMount } from "cdk8s-plus-27";
import { Construct } from "constructs";
import {
  ArrApp,
  ArrAppApplicationOption,
  ArrAppOptions,
  ConfigVolumeOptions,
} from "./arr-app";

export interface DelcaredMediaArrAppStorage {
  readonly media: Volume;
  readonly downloads?: Volume;
}

export interface DeclaredMediaArrAppProps extends ArrAppOptions {
  readonly storage: DelcaredMediaArrAppStorage;
}

export interface MediaVolumeOptions {
  readonly volume: Volume;
  readonly mountPath: string;
}

export interface ArrAppStorageOptions {
  readonly config: ConfigVolumeOptions;
  readonly media: MediaVolumeOptions;
  readonly downloads?: Volume;
}

export interface MediaArrAppProps extends ArrAppOptions {
  readonly app: ArrAppApplicationOption;
  readonly storage: ArrAppStorageOptions;
  readonly image: string;
}

export class MediaArrApp extends ArrApp {
  constructor(scope: Construct, name: string, props: MediaArrAppProps) {
    const volumeMounts: VolumeMount[] = [
      {
        volume: props.storage.media.volume,
        path: props.storage.media.mountPath,
      },
    ];

    if (props.storage.downloads) {
      volumeMounts.push({
        volume: props.storage.downloads,
        path: "/downloads",
      });
    }
    super(scope, name, {
      volumeMounts: volumeMounts,
      ...props,
    });
  }
}
