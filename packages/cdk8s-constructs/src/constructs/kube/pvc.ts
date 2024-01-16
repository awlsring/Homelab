/**
 * Access Modes.
 */
export declare enum PersistentVolumeAccessMode {
  /**
   * The volume can be mounted as read-write by a single node.
   * ReadWriteOnce access mode still can allow multiple pods to access
   * the volume when the pods are running on the same node.
   */
  READ_WRITE_ONCE = "ReadWriteOnce",
  /**
   * The volume can be mounted as read-only by many nodes.
   */
  READ_ONLY_MANY = "ReadOnlyMany",
  /**
   * The volume can be mounted as read-write by many nodes.
   */
  READ_WRITE_MANY = "ReadWriteMany",
  /**
   * The volume can be mounted as read-write by a single Pod.
   * Use ReadWriteOncePod access mode if you want to ensure that
   * only one pod across whole cluster can read that PVC or write to it.
   * This is only supported for CSI volumes and Kubernetes version 1.22+.
   */
  READ_WRITE_ONCE_POD = "ReadWriteOncePod",
}

export enum PersistentVolumeMode {
  /**
   * Volume is ounted into Pods into a directory.
   * If the volume is backed by a block device and the device is empty,
   * Kubernetes creates a filesystem on the device before mounting it
   * for the first time.
   */
  FILE_SYSTEM = "Filesystem",

  /**
   * Use a volume as a raw block device. Such volume is presented into a Pod as a block device,
   * without any filesystem on it. This mode is useful to provide a Pod the fastest possible way
   * to access a volume, without any filesystem layer between the Pod
   * and the volume. On the other hand, the application running in
   * the Pod must know how to handle a raw block device
   */
  BLOCK = "Block",
}
