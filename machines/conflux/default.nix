{
  inputs,
  lib,
  config,
  pkgs,
  nixosModules,
  modulesPath,
  ...
}: let
  hostname = "conflux";
in {
  imports = [
    nixosModules.default
    ./disk-configuration.nix
    ./hardware-configuration.nix
    (modulesPath + "/installer/scan/not-detected.nix")
    (modulesPath + "/profiles/qemu-guest.nix")
  ];

  boot.loader.grub = {
    efiSupport = true;
    efiInstallAsRemovable = true;
  };

  machine = {
    hostname = hostname;
    class = "server";
  };
}
