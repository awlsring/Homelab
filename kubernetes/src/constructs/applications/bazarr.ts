import { VolumeMount } from "cdk8s-plus-31";
import { Construct } from "constructs";
import { ArrApp, ArrAppOptions } from "./arr-app";

const APPLICATION_NAME = "bazarr";
const PORT = 6767;
const IMAGE = "lscr.io/linuxserver/bazarr";

export interface BazarrStorageApp {
  readonly movies?: VolumeMount;
  readonly tv?: VolumeMount;
}

export interface BazarrAppProps extends ArrAppOptions {
  readonly storage: BazarrStorageApp;
}

export class Bazarr extends ArrApp {
  constructor(scope: Construct, name: string, props: BazarrAppProps) {
    const volumeMounts: VolumeMount[] = [];
    if (props.storage.movies) {
      volumeMounts.push(props.storage.movies);
    }
    if (props.storage.tv) {
      volumeMounts.push(props.storage.tv);
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
