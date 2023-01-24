import { Chart, ChartProps } from "cdk8s";
import { Namespace, Service, ServiceType } from "cdk8s-plus-25";
import { Construct } from "constructs";
import { ClusterIssuer } from "../../../imports/certmanager-cert-manager.io";
import { Middleware } from "../../../imports/traefik-traefik.containo.us";
import { GenerateCertForService, GenerateGenericRoute, GenerateIngressRoute } from "../../service-utils/service-utils";

export interface ClusterExternalIngressChartProps extends ChartProps {
  createNamespace: boolean
  namespace: string,
  defaultHeaders: Middleware,
  certIssuer: ClusterIssuer
}

export interface MakeGenericProps {
  name: string
  namespace: string,
  ip: string
  port: number
  certIssuer: ClusterIssuer
  dnsName: string
}

export class ClusterExternalIngressChart extends Chart {
  constructor(scope: Construct, name: string, props: ClusterExternalIngressChartProps) {
    super(scope, name, props)

    if (props.createNamespace) {
      new Namespace(this, "namespace", {
        metadata: {
          name: this.namespace
        }
      })
    }

    const domain = "awlsring-sea.drigs.org"
    
    this.makePihole(props)
    this.makeJellyfin(props)
    this.makeSynology(props)
    this.makeGeneric({
      name: "ui",
      namespace: props.namespace,
      certIssuer: props.certIssuer,
      ip: "10.0.10.1",
      port: 443,
      dnsName: `ui.${domain}`
    })
  }

  makeGeneric(props: MakeGenericProps) {
    const service = new Service(this, props.name, {
      type: ServiceType.EXTERNAL_NAME,
      externalName: props.ip,
      ports: [
        {
          name: props.name,
          port: props.port,
          targetPort: props.port
        }
      ]
    })

    GenerateCertForService(this, {
      name: `${props.name}-cert`,
      namespace: props.namespace,
      issuer: props.certIssuer,
      commonName: props.dnsName
    })

    GenerateIngressRoute(this, {
      name: `${props.name}-route`,
      namespace: props.namespace,
      routes: [
        GenerateGenericRoute(
          props.dnsName,
          {
            name: service.name,
            port: service.ports[0].port
          },
        )
      ],
      certName: `${props.name}-cert`
    })
  }

  makeJellyfin(props: ClusterExternalIngressChartProps) {
    const jellyfin = new Service(this, "jellyfin", {
      type: ServiceType.EXTERNAL_NAME,
      externalName: "10.0.10.150",
      ports: [
        {
          name: "jellyfin",
          port: 8096,
          targetPort: 8096
        }
      ]
    })

    const dnsNames = [
      "fin.drigs.org",
      "fin.awlsring-sea.drigs.org",
      "jellyfin.drigs.org"
    ]

    dnsNames.forEach(dnsName => {
      GenerateCertForService(this, {
        name: `${dnsName}-cert`,
        namespace: props.namespace,
        issuer: props.certIssuer,
        commonName: dnsName
      })
  
      GenerateIngressRoute(this, {
        name: `${dnsName}-route`,
        namespace: props.namespace,
        routes: [
          GenerateGenericRoute(
            dnsName,
            {
              name: jellyfin.name,
              port: jellyfin.ports[0].port
            },
          )
        ],
        certName: `${dnsName}-cert`
      })
    })
  }

  makeUi(props: ClusterExternalIngressChartProps) {
    const ui = new Service(this, "ui", {
      type: ServiceType.EXTERNAL_NAME,
      externalName: "10.0.10.1",
      ports: [
        {
          name: "ui",
          port: 443,
          targetPort: 443
        }
      ]
    })
    const dns = "ui.awlsring-sea.drigs.org"
    GenerateCertForService(this, {
      name: "ui-cert",
      namespace: props.namespace,
      issuer: props.certIssuer,
      commonName: dns
    })

    GenerateIngressRoute(this, {
      name: "ui-route",
      namespace: props.namespace,
      routes: [
        GenerateGenericRoute(
          dns,
          {
            name: ui.name,
            port: ui.ports[0].port
          },
        )
      ],
      certName: "ui-cert"
    })
  }

  makeSynology(props: ClusterExternalIngressChartProps) {
    const synology = new Service(this, "synology", {
      type: ServiceType.EXTERNAL_NAME,
      externalName: "10.0.100.100",
      ports: [
        {
          name: "synology",
          port: 5000,
          targetPort: 5000
        }
      ]
    })
    const dns = "tolaria.awlsring-sea.drigs.org"
    GenerateCertForService(this, {
      name: "tolaria-cert",
      namespace: props.namespace,
      issuer: props.certIssuer,
      commonName: dns
    })

    GenerateIngressRoute(this, {
      name: "tolaria-route",
      namespace: props.namespace,
      routes: [
        GenerateGenericRoute(
          dns,
          {
            name: synology.name,
            port: synology.ports[0].port
          },
        )
      ],
      certName: "tolaria-cert"
    })
  }

  makePihole(props: ClusterExternalIngressChartProps) {
    const pihole = new Service(this, "pihole-service", {
      type: ServiceType.EXTERNAL_NAME,
      externalName: "10.10.10.10",
      ports: [
        {
          name: "pihole",
          port: 80,
          targetPort: 80
        }
      ]
    })

    const prefix = new Middleware(this, "pihole-prefix", {
      metadata: {},
      spec: {
        addPrefix: {
          prefix: "/admin"
        }
      }
    })

    const dns = "dns.awlsring-sea.drigs.org"
    GenerateCertForService(this, {
      name: "pihole-cert",
      namespace: props.namespace,
      issuer: props.certIssuer,
      commonName: dns
    })

    const route = GenerateGenericRoute(
      dns,
      {
        name: pihole.name,
        port: pihole.ports[0].port
      },
      [{ name: prefix.name }, {
        name: "default-headers",
        namespace: "traefik-system"
      }]
    )
    
    GenerateIngressRoute(this, {
      name: "pihole-route",
      namespace: props.namespace,
      routes: [ route ],
      certName: "pihole-cert"
    })
  }
}