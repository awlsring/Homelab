import { Construct } from "constructs";
import { DeclaredMediaArrAppProps, MediaArrApp } from "./media-arr-app";

const APPLICATION_NAME = "sonarr";
const PORT = 8989;
const IMAGE = "lscr.io/linuxserver/sonarr";

export class Sonarr extends MediaArrApp {
  constructor(scope: Construct, name: string, props: DeclaredMediaArrAppProps) {
    super(scope, name, {
      ...props,
      app: {
        name: APPLICATION_NAME,
        port: PORT,
      },
      storage: {
        config: props.config,
        media: {
          volume: props.storage.media,
          mountPath: "/tv",
        },
        downloads: props.storage.downloads,
      },
      image: IMAGE,
    });
  }
}
