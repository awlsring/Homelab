import { VolumeMount } from "cdk8s-plus-31";
import { Construct } from "constructs";
import {
  ArrApp,
  ArrAppApplicationOption,
  ArrAppOptions,
  ConfigVolumeOptions,
} from "./arr-app";

export interface DelcaredMediaArrAppStorage {
  readonly media: VolumeMount;
  readonly downloads?: VolumeMount;
}

export interface DeclaredMediaArrAppProps extends ArrAppOptions {
  readonly storage: DelcaredMediaArrAppStorage;
}

export interface ArrAppStorageOptions {
  readonly config: ConfigVolumeOptions;
  readonly media: VolumeMount;
  readonly downloads?: VolumeMount;
}

export interface MediaArrAppProps extends ArrAppOptions {
  readonly app: ArrAppApplicationOption;
  readonly storage: ArrAppStorageOptions;
  readonly image: string;
}

export class MediaArrApp extends ArrApp {
  constructor(scope: Construct, name: string, props: MediaArrAppProps) {
    const volumeMounts: VolumeMount[] = [props.storage.media];

    if (props.storage.downloads) {
      volumeMounts.push(props.storage.downloads);
    }
    super(scope, name, {
      volumeMounts: volumeMounts,
      ...props,
    });
  }
}
