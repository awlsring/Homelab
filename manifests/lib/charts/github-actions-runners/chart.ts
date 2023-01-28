import { Helm } from "cdk8s";
import { Construct } from "constructs";
import { HorizontalRunnerAutoscaler, HorizontalRunnerAutoscalerSpecScaleTargetRefKind, RunnerDeployment } from "../../../imports/actions-runner-controller-actions.summerwind.dev";
import { HomelabChart, HomelabChartProps } from "../../common/homelab-charts";

export interface GithubActionsRunnersChartProps extends HomelabChartProps {}

export class GithubActionsRunnersChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: GithubActionsRunnersChartProps) {
    super(scope, name, props)
    new Helm(this, "helm", {
      chart: "actions-runner-controller/actions-runner-controller",
      helmFlags: [
        '--namespace', this.namespace
      ],
      values: {
        authSecret: {
          name: "runner-github-token"
        },
      }
    })

    const runners = new RunnerDeployment(this, "runner-deployment", {
      metadata: {
        name: "homelab-runner",
      },
      spec: {
        template: {
          spec: {
            repository: "awlsring/Homelab",
          },
        },
      },
    })

    new HorizontalRunnerAutoscaler(this, "runner-autoscaler", {
      metadata: {
        name: "homelab-runner-autoscaler",
      },
      spec: {
        scaleTargetRef: {
          kind: HorizontalRunnerAutoscalerSpecScaleTargetRefKind.RUNNER_DEPLOYMENT,
          name: runners.metadata.name,
        },
        minReplicas: 0,
        maxReplicas: 5,
        metrics: [
          {
            type: "TotalNumberOfQueuedAndInProgressWorkflowRuns",
            repositoryNames: [
              "Homelab",
            ],
          }
        ]
      },
    })
  }
}