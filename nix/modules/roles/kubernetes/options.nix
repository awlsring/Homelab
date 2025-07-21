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
    kubernetes = {
      enable = lib.mkEnableOption "enables kubernetes";
      role = lib.mkOption {
        default = "server";
        type = lib.types.enum [
          "server"
          "worker"
        ];
      };
    };
  };
}
