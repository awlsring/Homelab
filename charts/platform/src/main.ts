import { Construct } from 'constructs';
import { App, Chart, ChartProps, ApiObject } from 'cdk8s';

export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = { }) {
    super(scope, id, props);

    const label = { app: 'hello-k8s' };



    new ApiObject(this, 'deployment', {
      apiVersion: "v1",
      kind: "Pod",
      metadata: {
          namespace: "frontend",
          name: "nginx",
          labels: label,
      },
      spec: {
          containers: [{
              name: "nginx",
              image: "nginx:1.14-alpine",
              resources: {
                  limits: {
                      memory: "20Mi",
                      cpu: 0.2,
                  },
              },
          }],
      },
    });
  }
}

const app = new App();
new MyChart(app, 'hello');
app.synth();