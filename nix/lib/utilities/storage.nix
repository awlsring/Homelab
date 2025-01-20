{
  lib,
  types,
  ...
}: {
  # Get the mount path for a given nfs key
  getNfsMountPath = storage: key:
    if builtins.hasAttr key storage.nfs
    then storage.nfs.${key}.mountPath
    else throw "ERROR: No NFS storage found for key '${key}'.";

  # Get the machine that provides a given nfs mount
  getNfsMachine = storage: key:
    if builtins.hasAttr key storage.nfs
    then storage.nfs.${key}.machine
    else throw "ERROR: No machine found for NFS storage key '${key}'.";
}
