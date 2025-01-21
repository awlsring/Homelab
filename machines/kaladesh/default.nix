{
  inputs,
  lib,
  config,
  pkgs,
  nfsServer,
  remoteDir,
  localDir,
  nixosModules,
  ...
}: let
  hostname = "kaladesh";
in {
  imports = [
    nixosModules.default
    ./disk-configuration.nix
    ./hardware-configuration.nix
  ];

  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  machine = {
    hostname = hostname;
    class = "server";
  };
}
