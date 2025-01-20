{lib}: let
  inherit (lib.types) str attrsOf submodule;

  nfsMount = submodule {
    options = {
      machine = lib.mkOption {
        type = str;
        description = "NFS server machine name";
      };
      mountPath = lib.mkOption {
        type = str;
        description = "Path where NFS is mounted";
      };
    };
  };

  bucket = submodule {
    options = {
      provider = lib.mkOption {
        type = str;
        description = "Cloud storage provider (e.g., b2, s3)";
      };
    };
  };
in {
  inherit nfsMount bucket;

  storageConfig = submodule {
    options = {
      nfs = lib.mkOption {
        type = attrsOf nfsMount;
        description = "NFS mount points";
      };
      buckets = lib.mkOption {
        type = attrsOf bucket;
        description = "Cloud storage bucket configurations";
      };
    };
  };
}
