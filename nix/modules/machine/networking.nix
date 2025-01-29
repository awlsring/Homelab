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

  primaryInterface =
    if builtins.length interfaces > 0
    then builtins.head interfaces
    else null;

  primaryInterfaceName =
    if primaryInterface != null
    then primaryInterface.interface
    else null;
in
  lib.mkIf hasNetworkConfig {
    networking = {
      # TODO: disable this while figuring out what else should be set here.
      # interfaces = networkInterfaces;
      # defaultGateway = {
      #   interface = primaryInterfaceName;
      #   address = "10.0.10.1"; # TODO: Make this dynamic based of the primary interface IP
      # };
      # nameservers = [
      #   #   "1.1.1.1"
      #   "10.0.10.1"
      #   #   "100.100.100.100"
      # ];
    };
  }
