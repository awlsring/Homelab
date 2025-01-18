{
  lib,
  config,
  ...
}: let
  findMachineByHostname = hostname: machines: let
    matches = lib.filter (machine: machine.hostname == hostname) machines;
  in
    if lib.length matches == 1
    then lib.head matches
    else throw "No machine found with hostname: ${hostname}";

  machineOptions = with lib;
  with types; {
    hostname = mkOption {
      type = str;
    };

    ipv4 = mkOption {
      type = str;
    };

    os = mkOption {
      type = str;
    };

    site = mkOption {
      type = str;
    };

    tailnet = mkOption {
      type = bool;
      default = false;
    };

    description = mkOption {
      type = str;
      default = null;
    };

    subdomains = mkOption {
      type = nullOr (listOf str);
      default = null;
    };

    roles = mkOption {
      type = nullOr (listOf str);
      default = [];
    };
  };
in {
  options.machine = with lib; {
    hostname = lib.mkOption {
      type = lib.types.str;
      description = "The hostname of the system";
    };
    class = lib.mkOption {
      type = lib.types.enum ["desktop" "server"];
      default = "server";
      description = "The class of the machine";
    };
    all = mkOption {
      type = with types; listOf (submodule [{options = machineOptions;}]);
      description = "all machines";
    };
    active = mkOption {
      type = with types; submodule [{options = machineOptions;}];
      default = findMachineByHostname config.machine.hostname config.machine.all;
      description = "The host that is described by this configuration";
    };
  };

  config = {
    networking.hostName = config.machine.hostname;

    machine.all = (builtins.fromJSON (builtins.readFile ../../../inventory.json)).machines;
  };
}
