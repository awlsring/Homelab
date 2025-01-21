# Thanks to this https://github.com/sini/nixos-jmanch/blob/main/modules/nixos/services/frigate.nix
{
  lib,
  config,
  pkgs,
  utilities,
  configJson,
  ...
}: let
  roleName = "frigate";
  roleEnabled = builtins.elem roleName config.machine.active.roles;

  mediaNfsMount = utilities.storage.getNfsMountPath configJson.storage "security";
  mediaMachine = utilities.storage.getNfsMachine configJson.storage "security";
  mediaServer = utilities.machines.getMachineIPv4 configJson.machines mediaMachine;
in
  lib.mkIf roleEnabled
  {
    fileSystems."/mnt/frigate" = {
      device = "${mediaServer}:/${mediaNfsMount}";
      fsType = "nfs";
    };

    services = {
      mosquitto.enable = true;
    };

    boot.extraModulePackages = with config.boot.kernelPackages; [
      gasket
    ];

    services.udev.packages = [pkgs.libedgetpu];
    users.groups.plugdev = {};

    systemd.services.frigate = {
      serviceConfig = {
        SupplementaryGroups = ["render" "video" "plugdev"]; # for access to dev/dri/*, and usb-edgetpu
      };
      environment.LD_LIBRARY_PATH = "${pkgs.libedgetpu}/lib";
    };

    services.frigate = {
      hostname = "frigate.test.us-drig-1.drigs.org";
      enable = true;
      vaapiDriver = "iHD";
      settings = {
        mqtt = {
          enabled = true;
          host = "127.0.0.1";
        };
        ffmpeg = {
          hwaccel_args = "preset-vaapi";
          input_args = "preset-rtsp-udp";
        };
        detectors = {
          coral = {
            type = "edgetpu";
            device = "usb";
          };
        };
        birdseye = {
          enabled = true;
          mode = "motion";
        };
        objects.track = ["person" "mouse"];
        cameras = {
          Front_Porch = {
            ffmpeg.inputs = [
              {
                path = "rtsp://camera:<password>@10.0.30.252/live";
                roles = ["detect" "record"];
              }
            ];
            detect = {
              width = 1920;
              height = 1080;
            };
            snapshots.enabled = true;
            record = {
              enabled = true;
              retain.days = 5;
              events.retain.default = 10;
            };
            motion.mask = ["741,901,1920,853,1920,235,1424,228,1038,208,249,174,208,426,193,756"];
          };

          Bedroom = {
            ffmpeg.inputs = [
              {
                path = "rtsp://frigate:<password>@10.0.30.190/live";
                roles = ["detect" "record"];
              }
            ];
            detect = {
              width = 1920;
              height = 1080;
            };
            snapshots.enabled = true;
            record = {
              enabled = true;
              retain.days = 5;
              events.retain.default = 0;
            };
          };

          Kitchen = {
            ffmpeg.inputs = [
              {
                path = "rtsp://camera:<password>@10.0.30.245/live";
                roles = ["detect" "record"];
              }
            ];
            detect = {
              width = 1920;
              height = 1080;
            };
            snapshots.enabled = true;
            record = {
              enabled = true;
              retain.days = 5;
              events.retain.default = 1;
            };
            motion.mask = ["264,750,253,317,669,342,676,857"];
          };

          Office = {
            ffmpeg.inputs = [
              {
                path = "rtsp://admin:<password>@10.0.30.106:554/cam/realmonitor?channel=1&subtype=0";
                roles = ["record"];
              }
              {
                path = "rtsp://admin:<password>@10.0.30.106:554/cam/realmonitor?channel=1&subtype=1";
                roles = ["detect"];
              }
            ];
            detect = {
              enabled = true;
              width = 640;
              height = 480;
            };
            snapshots.enabled = true;
            record = {
              enabled = true;
              retain.days = 5;
              events.retain.default = 1;
            };
          };

          Living_Room = {
            ffmpeg.inputs = [
              {
                path = "rtsp://admin:<password>@10.0.30.50";
                roles = ["record"];
              }
              {
                path = "rtsp://admin:<password>@10.0.30.50:554/h264Preview_01_sub";
                roles = ["detect"];
              }
            ];
            detect = {
              width = 640;
              height = 480;
            };
            record = {
              enabled = true;
              retain.days = 5;
              events.retain.default = 1;
            };
            snapshots.enabled = true;
            motion.mask = ["0,406,97,427,290,295,273,255,246,196,167,111,75,151,0,181"];
          };
        };
      };
    };

    systemd.services.frigate.serviceConfig = {
      DynamicUser = false;
      ProtectProc = "default";
      ProcSubset = "all";
      SystemCallFilter = [
        "@system-service"
        "~@privileged"
      ];
      PrivateDevices = false;
      DeviceAllow = [];
      UMask = "0027";
    };

    networking.firewall = {
      enable = true;
      allowedTCPPorts = [5000 554 443 80 2049 111];
      allowedUDPPorts = [554 123 2049 111];
    };
  }
