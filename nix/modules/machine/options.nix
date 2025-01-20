{
  lib,
  types,
  config,
  configJson,
  ...
}: {
  options.machine = with lib; {
    hostname = mkOption {
      type = lib.types.str;
      description = "The hostname of the system";
    };

    class = mkOption {
      type = lib.types.enum ["desktop" "server"];
      default = "server";
      description = "The class of the machine";
    };

    all = mkOption {
      type = lib.types.attrsOf types.machine;
      description = "All machine configurations";
    };

    active = mkOption {
      type = types.machine;
      default = config.machine.all.${config.machine.hostname};
      description = "The configuration for the current host";
    };
  };

  config = {
    networking.hostName = config.machine.hostname;
    machine.all = configJson.machines;
  };
}
