import { ApiObject } from "cdk8s";
import { Construct } from "constructs";
import { Service } from "cdk8s-plus-31";
import { EndpointPort, KubeEndpoints } from "../../imports/k8s";

export interface EndpointsProps {
  readonly service: Service;
  readonly address: string;
}

export class Endpoints extends Construct {
  protected apiObject: ApiObject;
  constructor(scope: Construct, id: string, props: EndpointsProps) {
    super(scope, id);

    this.apiObject = new KubeEndpoints(this, "resource", {
      metadata: {
        name: props.service.name,
      },
      subsets: [
        {
          addresses: [
            {
              ip: props.address,
            },
          ],
          ports: this.portsFromServce(props.service),
        },
      ],
    });
  }

  private portsFromServce(service: Service): EndpointPort[] {
    return service.ports.map((port) => {
      return {
        name: port.name,
        port: port.targetPort ?? port.port,
        protocol: port.protocol,
      };
    });
  }
}
