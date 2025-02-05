{
  inputs,
  lib,
  config,
  pkgs,
  nixosModules,
  ...
}: let
  hostname = "kaldheim";
in {
  imports = [
    nixosModules.default
    ./disk-configuration.nix
    ./hardware-configuration.nix
  ];

  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  machine.hostname = hostname;

  services.k3s.serverAddr = "https://10.0.10.60:6443";
}
