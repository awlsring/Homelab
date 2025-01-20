{lib}: let
  inherit (lib.types) str enum bool attrsOf listOf nullOr submodule;
  cpuConfig = submodule {
    options = {
      make = lib.mkOption {
        type = enum ["Intel" "AMD"];
        description = "CPU manufacturer (e.g., Intel, AMD)";
      };
      model = lib.mkOption {
        type = str;
        description = "CPU model";
      };
    };
  };

  ramConfig = submodule {
    options = {
      total = lib.mkOption {
        type = str;
        description = "Total RAM size (e.g., 16GB, 64GB)";
      };
      type = lib.mkOption {
        type = enum ["DDR3" "DDR4" "DDR5"];
        description = "RAM type (e.g., DDR4, DDR5)";
        default = null;
      };
      formFactor = lib.mkOption {
        type = enum ["SODIMM" "DIMM" "RDIMM" "UDIMM"];
        description = "RAM form factor";
        default = null;
      };
    };
  };

  diskConfig = submodule {
    options = {
      size = lib.mkOption {
        type = str;
        description = "Disk size (e.g., 512GB, 8TB)";
      };
      type = lib.mkOption {
        type = enum ["NVME" "SSD" "HDD"];
        description = "Disk type (e.g., NVME, SSD, HDD)";
      };
      model = lib.mkOption {
        type = str;
        description = "Disk model name";
        default = null;
      };
    };
  };

  hardwareConfig = submodule {
    options = {
      cpu = lib.mkOption {
        type = cpuConfig;
        description = "CPU details";
        default = null;
      };
      ram = lib.mkOption {
        type = ramConfig;
        description = "RAM details";
        default = null;
      };
      disks = lib.mkOption {
        type = attrsOf diskConfig;
        description = "List of attached disks";
        default = [];
      };
    };
  };

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
      hardware = lib.mkOption {
        type = nullOr hardwareConfig;
        default = null;
        description = "Hardware specifications (CPU, RAM, Disks)";
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
