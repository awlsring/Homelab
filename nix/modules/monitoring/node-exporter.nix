{
  config,
  pkgs,
  lib,
  ...
}: let
  cfg = config.monitoring.node-exporter;
in {
  options.monitoring.node-exporter = {
    enable = lib.mkEnableOption "enables prometheus node exporter";
    port = lib.mkOption {
      type = lib.types.int;
      default = 9090;
      description = "The port to listen on";
    };
    collectors = lib.mkOption {
      type = lib.types.listOf lib.types.str;
      default = [
        "cpu"
        "filesystem"
        "meminfo"
        "netstat"
        "netdev"
        "systemd"
        "diskstats"
        "processes"
        "loadavg"
        "time"
      ];
      description = "The collectors to enable";
    };
    dontOpenFirewall = lib.mkOption {
      type = lib.types.bool;
      default = false;
      description = "Don't open the firewall for the node exporter";
    };
  };

  config = lib.mkIf cfg.enable {
    services.prometheus.exporters.node = {
      enable = true;
      enabledCollectors = cfg.collectors;
      port = cfg.port;
      openFirewall = !cfg.dontOpenFirewall;
    };
  };
}
