{
  config,
  lib,
  configJson,
  ...
}: let
  inherit (lib.types) str listOf submodule;

  hasNetworkConfig = config.machine.active.network != null;

  network =
    if hasNetworkConfig
    then config.machine.active.network
    else {};

  interfaces = network.interfaces or [];

  configureInterface = interface:
    lib.optionalAttrs (interface ? staticIpv4) {
      ipv4.addresses = [
        {
          address = interface.staticIpv4;
          prefixLength = 24;
        }
      ];
    };

  networkInterfaces = builtins.listToAttrs (map (iface: {
      name = iface.interface;
      value = configureInterface iface;
    })
    interfaces);
in
  lib.mkIf hasNetworkConfig {
    networking = {
      interfaces = networkInterfaces;

      nameservers = [
        "1.1.1.1"
        "10.10.10.10"
        "100.100.100.100"
      ];
    };
  }
