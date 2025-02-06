{
  inputs,
  lib,
  config,
  pkgs,
  nixosModules,
  ...
}: let
  hostname = "ravnica";
in {
  imports = [
    nixosModules.default
    ./disk-configuration.nix
    ./hardware-configuration.nix
  ];

  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  machine.hostname = hostname;

  # TODO: determine this better
  services.k3s.clusterInit = true;
  services.k3s.serverAddr = lib.mkForce "";
}
