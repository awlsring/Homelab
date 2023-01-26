import { Helm } from "cdk8s"
import { ServiceType } from "cdk8s-plus-25"
import { Construct } from "constructs"
import { HomelabChart, HomelabChartProps } from "../../common/charts"

export interface MosquittoChartProps extends HomelabChartProps {
  storageClass: string
}

export class MosquittoChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: MosquittoChartProps) {
    super(scope, name, props)
    new Helm(this, "helm", {
      chart: "t3n/mosquitto",
      helmFlags: [
        '--namespace', props.namespace
      ],
      values: {
        persistence: {
          enable: true,
          storageClass: props.storageClass,
        },
        service: {
          type: ServiceType.LOAD_BALANCER,
        }
      }
    })
  }
}