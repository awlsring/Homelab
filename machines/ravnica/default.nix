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

  kubernetes = {
    enable = true;
    role = "server";
  };

  # Override k3s settings to configure this to launch as the first server
  services.k3s.clusterInit = true;
  services.k3s.serverAddr = lib.mkForce "";
}
