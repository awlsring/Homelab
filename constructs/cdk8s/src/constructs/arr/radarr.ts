import { Construct } from "constructs";
import { DeclaredMediaArrAppProps, MediaArrApp } from "./media-arr-app";

const APPLICATION_NAME = "radarr";
const PORT = 7878;
const IMAGE = "lscr.io/linuxserver/radarr";

export class Radarr extends MediaArrApp {
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
          mountPath: "/movies",
        },
        downloads: props.storage.downloads,
      },
      image: IMAGE,
    });
  }
}
