import { Annotation } from "./annotation";

const BASE_KUBE_INGRESS_KEY = "ingress.kubernetes.io";
export class KubeIngressAnnotations {
  static configurationSnippet(snippet: string): Annotation {
    return {
      key: `${BASE_KUBE_INGRESS_KEY}/configuration-snippet`,
      value: snippet,
    };
  }
}
