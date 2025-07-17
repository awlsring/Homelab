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
    ./jellyfin.nix
    ./syncthing.nix
  ];
}
