import { Construct } from "constructs";
import { DeclaredMediaArrAppProps, MediaArrApp } from "./media-arr-app";

const APPLICATION_NAME = "readarr";
const PORT = 8787;
const IMAGE = "lscr.io/linuxserver/readarr";

export class Readarr extends MediaArrApp {
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
          mountPath: "/books",
        },
        downloads: props.storage.downloads,
      },
      image: IMAGE,
    });
  }
}
