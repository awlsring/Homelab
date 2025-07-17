{
  config,
  pkgs,
  lib,
  ...
}: {
  options = {
    syncthing = {
      enable = lib.mkEnableOption "enables syncthing";
    };
  };

  config = lib.mkIf config.syncthing.enable {
    services.syncthing = {
      enable = true;
      openDefaultPorts = true;
      guiAddress = "0.0.0.0:8384";
    };
    networking.firewall.allowedTCPPorts = [8384 21027 22000];
  };
}
