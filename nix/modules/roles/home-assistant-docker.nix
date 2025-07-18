{
  pkgs,
  lib,
  config,
  utilities,
  configJson,
  ...
}: let
in {
  options = {
    home-assistant = {
      enable = lib.mkEnableOption "enables home-assistant";
    };
  };

  config = lib.mkIf config.home-assistant.enable {
    virtualisation = {
      containers.enable = true;
      podman = {
        enable = true;
        autoPrune.enable = true;
        dockerCompat = true;
        defaultNetwork.settings = {
          dns_enabled = true;
        };
      };
    };

    systemd.tmpfiles.rules = [
      "d /var/lib/home-assistant/config 0755 root root -"
    ];

    virtualisation.oci-containers.containers."home-assistant" = {
      autoStart = true;
      image = "ghcr.io/home-assistant/home-assistant:stable";
      environment.TZ = "America/Los_Angeles";
      volumes = [
        "/run/dbus:/run/dbus:ro"
        "/var/lib/home-assistant/config:/config"
        "/etc/localtime:/etc/localtime:ro"
      ];
      labels = {
        "io.containers.autoupdate" = "registry";
      };
      log-driver = "journald";
      extraOptions = [
        "--network=host"
        "--privileged"
      ];
    };

    networking.firewall.allowedTCPPorts = [8123];
  };
}
