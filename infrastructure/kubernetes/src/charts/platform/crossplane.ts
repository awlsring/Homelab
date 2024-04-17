// import { HelmChart, S3Provider, Bucket } from "cdk8s-constructs";
// import { Construct } from "constructs";

// const NAMESPACE = "crossplane-system";

// export interface CrossplaneChartProps {}

// export class CrossplaneChart extends HelmChart {
//   constructor(scope: Construct, name: string, props?: CrossplaneChartProps) {
//     super(scope, name, {
//       ...props,
//       namespace: NAMESPACE,
//       repository: "crossplane-stable",
//       chart: "crossplane",
//       flags: ["--namespace", NAMESPACE, "--include-crds"],
//     });

//     new S3Provider(this, "s3", {
//       credentialSecretRef: {
//         namespace: "crossplane-system",
//         name: "aws-creds",
//         key: "credentials",
//       },
//     });

//     new Bucket(this, "bucket", {
//       metadata: {
//         annotations: {},
//         namespace: "crossplane-system",
//         name: "example-bucket",
//       },
//       spec: {
//         forProvider: {
//           locationConstraint: "us-west-2",
//         },
//         providerConfigRef: {
//           name: "s3",
//         },
//       },
//     });
//   }
// }
