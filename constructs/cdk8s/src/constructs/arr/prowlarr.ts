import { Construct } from "constructs";
import { ArrApp, ArrAppOptions } from "./arr-app";

const APPLICATION_NAME = "prowlarr";
const PORT = 9696;
const IMAGE = "lscr.io/linuxserver/prowlarr";

export class ProwlarrArrApp extends ArrApp {
  constructor(scope: Construct, name: string, props: ArrAppOptions) {
    super(scope, name, {
      app: {
        name: APPLICATION_NAME,
        port: PORT,
      },
      image: IMAGE,
      ...props,
    });
  }
}
