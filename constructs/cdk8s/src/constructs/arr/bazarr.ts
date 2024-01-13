import { Volume, VolumeMount } from "cdk8s-plus-27";
import { Construct } from "constructs";
import { ArrApp, ArrAppOptions } from "./arr-app";

const APPLICATION_NAME = "bazarr";
const PORT = 6767;
const IMAGE = "lscr.io/linuxserver/bazarr";

export interface BazarrStorageApp {
  readonly movies?: Volume;
  readonly tv?: Volume;
}

export interface BazarrAppProps extends ArrAppOptions {
  readonly storage: BazarrStorageApp;
}

export class BazarrApp extends ArrApp {
  constructor(scope: Construct, name: string, props: BazarrAppProps) {
    const volumeMounts: VolumeMount[] = [];
    if (props.storage.movies) {
      volumeMounts.push({
        volume: props.storage.movies,
        path: "/movies",
      });
    }
    if (props.storage.tv) {
      volumeMounts.push({
        volume: props.storage.tv,
        path: "/tv",
      });
    }
    super(scope, name, {
      app: {
        name: APPLICATION_NAME,
        port: PORT,
      },
      image: IMAGE,
      volumeMounts: volumeMounts,
      ...props,
    });
  }
}
