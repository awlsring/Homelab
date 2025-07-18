{
  inputs,
  lib,
  config,
  pkgs,
  utilities,
  configJson,
  nixosModules,
  ...
}: let
  hostname = "innistrad";

  # NFS Media Share
  localMount = "mnt/media";
  mountPath = utilities.storage.getNfsMountPath configJson.storage "media";
  nfsServer = utilities.machines.getMachineIPv4 config.machine.all (utilities.storage.getNfsMachine configJson.storage "media");
in {
  imports = [
    nixosModules.default
    ./hardware-configuration.nix
    ./access.nix
  ];

  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  machine.hostname = hostname;

  # media mount
  fileSystems."${localMount}" = {
    device = "${nfsServer}:${mountPath}";
    fsType = "nfs";
  };

  # media server sync
  syncthing.enable = true;

  # media server
  jellyfin = {
    enable = true;
    jellyseerr = true;
  };

  frigate = {
    enable = true;
    settings = {
      mqtt.enabled = true;
      detectors.coral = {
        type = "edgetpu";
        device = "usb";
      };
      birdseye = {
        enabled = true;
        mode = "motion";
      };
      detect = {
        enabled = true;
        fps = 5;
      };
      record = {
        enabled = true;
        retain = {
          days = 5;
          mode = "all";
        };
        preview.quality = "low";
      };
      snapshots.enabled = true;
      objects.track = [
        "person"
        "mouse"
      ];
      go2rtc = {
        streams = {
          FrontPorch = [
            "rtsp://camera:{FRIGATE_WYZE_RTSP_PASSWORD}@10.0.30.252/live"
            "ffmpeg:FrontPorch#audio=opus"
          ];
          Kitchen = [
            "rtsp://camera:{FRIGATE_WYZE_RTSP_PASSWORD}@10.0.30.245/live"
            "ffmpeg:Kitchen#audio=opus"
          ];
          LivingRoom = [
            "rtsp://admin:{FRIGATE_RTSP_PASSWORD}@10.0.30.50"
            "ffmpeg:LivingRoom#audio=opus"
          ];
          LivingRoomSub = [
            "rtsp://admin:{FRIGATE_RTSP_PASSWORD}@10.0.30.50:554/h264Preview_01_sub"
            "ffmpeg:LivingRoomSub#audio=opus"
          ];
        };
      };
      cameras = {
        FrontPorch = {
          ffmpeg = {
            output_args = {
              record = "preset-record-generic-audio-copy";
            };
            inputs = [
              {
                path = rtsp://localhost:8554/FrontPorch;
                input_args = "preset-rtsp-restream";
                roles = ["detect" "record"];
              }
            ];
          };
          motion.mask = [
            "741,901,1920,853,1920,235,1424,228,1038,208,249,174,208,426,193,756"
          ];
        };
        Kitchen = {
          ffmpeg = {
            output_args = {
              record = "preset-record-generic-audio-copy";
            };
            inputs = [
              {
                path = rtsp://localhost:8554/Kitchen;
                input_args = "preset-rtsp-restream";
                roles = ["detect" "record"];
              }
            ];
          };
        };
        LivingRoom = {
          ffmpeg = {
            output_args = {
              record = "preset-record-generic-audio-copy";
            };
            inputs = [
              {
                path = rtsp://127.0.0.1:8554/LivingRoom;
                input_args = "preset-rtsp-restream";
                roles = ["record"];
              }
              {
                path = rtsp://127.0.0.1:8554/LivingRoomSub;
                input_args = "preset-rtsp-restream";
                roles = ["detect"];
              }
            ];
          };
          live = {
            stream_name = "LivingRoomSub";
          };
          detect = {
            width = 640;
            height = 480;
          };
        };
        # Office = {
        #   ffmpeg = {
        #     inputs = [
        #       {
        #         path = "rtsp://admin:{FRIGATE_RTSP_PASSWORD}@10.0.30.106:554/cam/realmonitor?channel=1&subtype=0";
        #         roles = ["record"];
        #       }
        #       {
        #         path = "rtsp://admin:{FRIGATE_RTSP_PASSWORD}@10.0.30.106:554/cam/realmonitor?channel=1&subtype=1";
        #         roles = ["detect"];
        #       }
        #     ];
        #   };
        # };
        # Bedroom = {
        #   ffmpeg = {
        #     inputs = [
        #       {
        #         path = "rtsp://frigate:{FRIGATE_WYZE_RTSP_PASSWORD}@10.0.30.190/live";
        #         roles = ["detect" "record"];
        #       }
        #     ];
        #   };
        # };
      };
    };
  };

  home-assistant = {
    enable = true;
  };
}
