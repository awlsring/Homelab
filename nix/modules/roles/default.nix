{
  pkgs,
  lib,
  config,
  utilities,
  ...
}: {
  imports = [
    ./kubernetes
    ./frigate.nix
  ];
}
