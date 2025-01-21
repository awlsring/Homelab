{
  pkgs,
  lib,
  config,
  utilities,
  ...
}: {
  imports = [
    ./frigate.nix
  ];
}
