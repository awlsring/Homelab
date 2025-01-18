{
  inputs,
  lib,
  config,
  pkgs,
  nixosModules,
  ...
}: let
  hostname = "dominaria";
in {
  imports = [
    nixosModules.default
    ./disk-configuration.nix
    ./hardware-configuration.nix
  ];

  machine = {
    hostname = hostname;
    class = "server";
  };

  # Graphics
  hardware.graphics.enable = true;

  # Enable nvidia drivers
  services.xserver.videoDrivers = ["nvidia"];
  hardware.nvidia = {
    modesetting.enable = true;
    open = false;
    nvidiaSettings = true;
    package = config.boot.kernelPackages.nvidiaPackages.stable;
  };

  boot.loader.grub = {
    efiSupport = true;
    efiInstallAsRemovable = true;
  };
}
