{
  config,
  lib,
  pkgs,
  ...
}: let
  cfg = config.machine;
in {
  imports = [
    ./tailnet.nix
    ./options.nix
    ./server.nix
  ];
}
