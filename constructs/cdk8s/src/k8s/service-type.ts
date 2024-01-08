export enum ServiceType {
  /**
   * Exposes the Service on a cluster-internal IP.
   * Choosing this value makes the Service only reachable from within the cluster.
   * This is the default ServiceType
   */
  CLUSTER_IP = "ClusterIP",
  /**
   * Exposes the Service on each Node's IP at a static port (the NodePort).
   * A ClusterIP Service, to which the NodePort Service routes, is automatically created.
   * You'll be able to contact the NodePort Service, from outside the cluster,
   * by requesting <NodeIP>:<NodePort>.
   */
  NODE_PORT = "NodePort",
  /**
   * Exposes the Service externally using a cloud provider's load balancer.
   * NodePort and ClusterIP Services, to which the external load balancer routes,
   * are automatically created.
   */
  LOAD_BALANCER = "LoadBalancer",
  /**
   * Maps the Service to the contents of the externalName field (e.g. foo.bar.example.com), by returning a CNAME record with its value.
   * No proxying of any kind is set up.
   *
   * > Note: You need either kube-dns version 1.7 or CoreDNS version 0.0.8 or higher to use the ExternalName type.
   */
  EXTERNAL_NAME = "ExternalName",
}
