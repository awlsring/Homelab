import { VolumeMount } from "cdk8s-plus-27";
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
    //     const liveness = Probe.fromCommand(
    //       [
    //         "/usr/bin/env",
    //         "bash",
    //         "-c",
    //         `API_KEY=$(grep 'apikey:' /config/config/config.yaml | awk '{print $2}' | tr -d "'" | awk '{$1=$1};1')
    // echo $API_KEY && curl --fail localhost:${PORT}/api/v1/system/health?apiKey=$API_KEY`,
    //       ],
    //       {
    //         failureThreshold: 5,
    //         initialDelaySeconds: Duration.seconds(60),
    //         periodSeconds: Duration.seconds(10),
    //         successThreshold: 1,
    //         timeoutSeconds: Duration.seconds(10),
    //       },
    //     );
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
      // probe: props.probe ?? {
      //   liveness,
      // },
      image: IMAGE,
      volumeMounts: volumeMounts,
      ...props,
    });
  }
}
