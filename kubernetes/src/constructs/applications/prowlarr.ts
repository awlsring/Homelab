import { Duration } from "cdk8s";
import { Probe } from "cdk8s-plus-31";
import { Construct } from "constructs";
import { ArrApp, ArrAppOptions } from "./arr-app";

const APPLICATION_NAME = "prowlarr";
const PORT = 9696;
const IMAGE = "lscr.io/linuxserver/prowlarr";

export class Prowlarr extends ArrApp {
  constructor(scope: Construct, name: string, props: ArrAppOptions) {
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
      }
    );
    super(scope, name, {
      app: {
        name: APPLICATION_NAME,
        port: PORT,
      },
      probe: props.probe ?? {
        liveness,
      },
      image: IMAGE,
      ...props,
    });
  }
}
