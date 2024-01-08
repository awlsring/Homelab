import {
  IngressRouteSpecRoutes,
  IngressRouteSpecRoutesKind,
  IngressRouteSpecRoutesMiddlewares,
  IngressRouteSpecRoutesServicesKind,
  IngressRouteSpecRoutesServicesPort,
} from "../../imports/traefik.containo.us";

export interface IService {
  name: string;
  port: number;
}

export class HomelabRoute {
  static generateRoute(
    dnsName: string,
    service: IService,
    middlewares?: IngressRouteSpecRoutesMiddlewares[],
  ): IngressRouteSpecRoutes {
    let middlewaresList = middlewares ?? [
      {
        name: "default-headers",
        namespace: "traefik-system",
      },
    ];

    return {
      kind: IngressRouteSpecRoutesKind.RULE,
      match: `Host(\`${dnsName}\`)`,
      middlewares: middlewaresList,
      services: [
        {
          name: service.name,
          kind: IngressRouteSpecRoutesServicesKind.SERVICE,
          port: IngressRouteSpecRoutesServicesPort.fromNumber(service.port),
        },
      ],
    };
  }
}
