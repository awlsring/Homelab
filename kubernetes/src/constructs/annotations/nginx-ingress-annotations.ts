import { Annotation } from "./annotation";

const BASE_NGINX_KEY = "nginx.ingress.kubernetes.io";

export class NginxIngressAnnotations {
  static backendProtocolHTTPS(): Annotation {
    return {
      key: `${BASE_NGINX_KEY}/backend-protocol`,
      value: "HTTPS",
    };
  }
  static corsAllowHeaders(headers: string[]): Annotation {
    return {
      key: `${BASE_NGINX_KEY}/cors-allow-headers`,
      value: headers.join(", "),
    };
  }
  static corsAllowMethods(methods: string[]): Annotation {
    return {
      key: `${BASE_NGINX_KEY}/cors-allow-methods`,
      value: methods.join(", "),
    };
  }
  static corsAllowOrigin(origin: string): Annotation {
    return {
      key: `${BASE_NGINX_KEY}/cors-allow-origin`,
      value: origin,
    };
  }
  static corsEnabled(): Annotation {
    return {
      key: `${BASE_NGINX_KEY}/enable-cors`,
      value: "true",
    };
  }
  static proxyBodySize(size: string): Annotation {
    return {
      key: `${BASE_NGINX_KEY}/proxy-body-size`,
      value: size,
    };
  }
  static appRoot(target: string): Annotation {
    return {
      key: `${BASE_NGINX_KEY}/app-root`,
      value: target,
    };
  }
  static serverSnippets(snippets: string[]): Annotation {
    return {
      key: `${BASE_NGINX_KEY}/server-snippet`,
      value: snippets.join("\n"),
    };
  }
}
