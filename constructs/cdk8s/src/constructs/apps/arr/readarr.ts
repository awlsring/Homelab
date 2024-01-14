import { Duration } from "cdk8s";
import { Probe } from "cdk8s-plus-27";
import { Construct } from "constructs";
import { DeclaredMediaArrAppProps, MediaArrApp } from "./media-arr-app";

const APPLICATION_NAME = "readarr";
const PORT = 8787;
const IMAGE = "lscr.io/linuxserver/readarr";

export class Readarr extends MediaArrApp {
  constructor(scope: Construct, name: string, props: DeclaredMediaArrAppProps) {
    const liveness = Probe.fromCommand(
      [
        "/usr/bin/env",
        "bash",
        "-c",
        `API_KEY=$(awk -F'[<>]' '/ApiKey/{print $3}' /config/config.xml) && curl --fail localhost:${PORT}/api/v1/system/status?apiKey=$API_KEY`,
      ],
      {
        failureThreshold: 5,
        initialDelaySeconds: Duration.seconds(60),
        periodSeconds: Duration.seconds(10),
        successThreshold: 1,
        timeoutSeconds: Duration.seconds(10),
      },
    );
    super(scope, name, {
      ...props,
      app: {
        name: APPLICATION_NAME,
        port: PORT,
      },
      imageTag: props.imageTag ?? "develop",
      storage: {
        config: props.config,
        media: props.storage.media,
        downloads: props.storage.downloads,
      },
      probe: props.probe ?? {
        liveness,
      },
      image: IMAGE,
    });
  }
}
