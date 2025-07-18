{
  pkgs,
  lib,
  config,
  utilities,
  ...
}: {
  imports = [
    ./kubernetes
    ./frigate-docker.nix
    ./jellyfin.nix
    ./syncthing.nix
    ./home-assistant-docker.nix
  ];
}
