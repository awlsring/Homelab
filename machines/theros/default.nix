{
  inputs,
  lib,
  config,
  pkgs,
  nixosModules,
  ...
}: let
  hostname = "theros";
in {
  imports = [
    nixosModules.default
    ./disk-configuration.nix
    ./hardware-configuration.nix
  ];

  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  machine.hostname = hostname;
}
