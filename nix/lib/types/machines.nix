{lib}: let
  inherit (lib.types) str bool attrsOf listOf nullOr submodule;
  machine = submodule {
    options = {
      hostname = lib.mkOption {
        type = str;
        description = "Machine hostname";
      };
      description = lib.mkOption {
        type = str;
        description = "Machine description";
      };
      ipv4 = lib.mkOption {
        type = str;
        description = "Machine IPv4 address";
      };
      os = lib.mkOption {
        type = str;
        description = "Operating system (e.g., NixOS, TrueNAS)";
      };
      arch = lib.mkOption {
        type = str;
        description = "System architecture (e.g., x86_64, aarch64)";
        default = "x86_64";
      };
      tailnet = lib.mkOption {
        type = bool;
        description = "Whether this machine is connected to the Tailnet";
      };
      site = lib.mkOption {
        type = str;
        description = "Associated site";
      };
      machineType = lib.mkOption {
        type = nullOr str;
        default = null;
        description = "Optional: Machine type (e.g., Hetzner instance type)";
      };
      roles = lib.mkOption {
        type = listOf str;
        default = [];
        description = "Optional: Roles assigned to this machine";
      };
    };
  };
in {
  inherit machine;

  machinesConfig = submodule {
    options = {
      machines = lib.mkOption {
        type = attrsOf machine;
        description = "All machine configurations";
      };
    };
  };
}
