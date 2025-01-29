{
  lib,
  config,
  pkgs,
  utilities,
  configJson,
  ...
}: {
  services.openiscsi = {
    enable = true;
    name = "iqn.2020-08.org.linux-iscsi.initiatorhost:${config.networking.hostName}";
  };
  systemd.tmpfiles.rules = [
    "L+ /usr/local/bin - - - - /run/current-system/sw/bin/"
  ];
  services.target.enable = true;
  boot.kernelModules = ["nbd" "iscsi_tcp"];

  boot.supportedFilesystems = [
    "ext4"
    "btrfs"
    "xfs"
    "ntfs"
    "fat"
    "vfat"
    "exfat"
    "nfs"
  ];
  services.rpcbind.enable = true;
}
