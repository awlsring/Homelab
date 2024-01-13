// import { Size } from "cdk8s";
// import { HomelabChart, HomelabChartProps } from "cdk8s-constructs";
// import { Volume } from "cdk8s-plus-27";
// import { Construct } from "constructs";

// const IMAGE = "lscr.io/linuxserver/radarr";
// const DEFAULT_IMAGE_TAG = "latest";
// const DEFAULT_TIME_ZONE = "Etc/UTC";
// const PUID = 1000;
// const PGID = 1000;
// const FSGRP = 1000;
// const DEFAULT_PORT = 7878;

// export interface AppPorts {
//   name: string;
//   port: number;
// }

// export interface AppProps {
//   name: string;
//   image: string;
//   port: number;
//   media?: {
//     mountPath?: string;
//   };
//   extraPorts?: AppPorts[];
//   serviceType?: string;
//   extraEnvs?: EnvVar[];
//   resources?: ResourceRequirements;
// }

// export interface AppDeploymentProps {
//   name: string;
//   image: string;
//   env: EnvVar[];
//   ports: AppPorts[];
//   mediaVolume: Volume;
//   configVolume: Volume;
//   mountPath?: string;
//   resources?: ResourceRequirements;
// }
// export interface AppServiceProps {
//   name: string;
//   type?: string;
//   ports?: AppPorts[];
// }

// export interface RadarrChartProps extends HomelabChartProps {
//   readonly certIssuer: ClusterIssuer;
//   readonly nfsServer: string;
//   readonly configSize?: Size;
//   readonly dnsDomain: string;
//   readonly mediaStorage: {
//     readonly server: string;
//     readonly serverPath: string;
//     readonly mountPath: string;
//   };
// }

// /**
//  * A stack to deploy server arr charts
//  */
// export class RadarrgChart extends HomelabChart {
//   constructor(scope: Construct, name: string, props: RadarrChartProps) {
//     super(scope, name, props);

//     const mediaVol = Volume.fromNfs(this, "nfs-vol", "media", {
//       server: props.mediaStorage.server,
//       path: props.mediaStorage.serverPath,
//     });
//   }
// }
