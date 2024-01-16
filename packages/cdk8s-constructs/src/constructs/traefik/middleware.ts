import { Construct } from "constructs";
import {
  MiddlewareSpecHeaders,
  Middleware as RawMiddleware,
} from "../../imports/traefik.containo.us";

export interface MiddlewareProps {
  readonly name: string;
  readonly namespace?: string;
  readonly headers?: MiddlewareSpecHeaders;
}

export class Middleware extends Construct {
  readonly name: string;
  readonly namespace: string;

  constructor(scope: Construct, name: string, props: MiddlewareProps) {
    super(scope, name);

    this.name = props.name;
    this.namespace = props.namespace ?? "default";

    new RawMiddleware(this, `${name}-middleware`, {
      metadata: {
        name: props.name,
      },
      spec: {
        headers: props.headers,
      },
    });
  }
}
