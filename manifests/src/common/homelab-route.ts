import { Service } from 'cdk8s-plus-25';
import { IngressRouteSpecRoutes, IngressRouteSpecRoutesKind, IngressRouteSpecRoutesMiddlewares, IngressRouteSpecRoutesServicesKind, IngressRouteSpecRoutesServicesPort } from '../imports/traefik-traefik.containo.us';

export class HomelabRoute {
  static generateRoute(
    dnsName: string,
    service: Service,
    middlewares?: IngressRouteSpecRoutesMiddlewares[],
  ): IngressRouteSpecRoutes {
    let middlewaresList = middlewares ?? [
      {
        name: 'default-headers',
        namespace: 'traefik-system',
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