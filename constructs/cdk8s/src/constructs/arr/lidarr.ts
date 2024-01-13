import { Construct } from "constructs";
import { DeclaredMediaArrAppProps, MediaArrApp } from "./media-arr-app";

const APPLICATION_NAME = "lidarr";
const PORT = 8686;
const IMAGE = "lscr.io/linuxserver/lidarr";

export class Lidarr extends MediaArrApp {
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
          mountPath: "/music",
        },
        downloads: props.storage.downloads,
      },
      image: IMAGE,
    });
  }
}
