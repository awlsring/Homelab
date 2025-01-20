{
  config,
  lib,
  pkgs,
  ...
}: let
  cfg = config.machine;
in {
  imports = [
    ./intel.nix
    ./networking.nix
    ./tailnet.nix
    ./options.nix
    ./server.nix
  ];
}
