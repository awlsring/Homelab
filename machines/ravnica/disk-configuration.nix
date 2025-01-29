{lib, ...}: {
  disko.devices = {
    # 512GB Boot Disk
    disk.bootDisk = {
      device = "/dev/nvme0n1"; # Boot NVMe
      type = "disk";
      content = {
        type = "gpt";
        partitions = {
          esp = {
            name = "ESP";
            size = "500M";
            type = "EF00"; # UEFI Boot
            content = {
              type = "filesystem";
              format = "vfat";
              mountpoint = "/boot";
            };
          };
          root = {
            name = "root";
            size = "100%"; # Use the remaining space for LVM
            content = {
              type = "lvm_pv";
              vg = "pool";
            };
          };
        };
      };
    };

    # LVM Setup on Boot Disk
    lvm_vg.pool = {
      type = "lvm_vg";
      lvs = {
        root = {
          size = "50G"; # Root filesystem (NixOS)
          content = {
            type = "filesystem";
            format = "ext4";
            mountpoint = "/";
          };
        };
        var = {
          size = "100%FREE"; # Use remaining space for /var
          content = {
            type = "filesystem";
            format = "ext4";
            mountpoint = "/var";
          };
        };
      };
    };

    # 2TB NVMe Disk for Longhorn
    disk.longhornDisk = {
      device = "/dev/nvme1n1";
      type = "disk";
      content = {
        type = "gpt";
        partitions = {
          longhorn = {
            name = "longhorn";
            size = "100%";
            content = {
              type = "filesystem";
              format = "xfs";
              mountpoint = "/var/lib/longhorn";
              mountOptions = ["defaults" "noatime"];
            };
          };
        };
      };
    };
  };
}
