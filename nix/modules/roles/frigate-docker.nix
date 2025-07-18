{
  pkgs,
  lib,
  config,
  utilities,
  configJson,
  ...
}: let
  inherit
    (lib)
    any
    attrValues
    converge
    elem
    filterAttrsRecursive
    mkDefault
    mkEnableOption
    mkOption
    optionals
    types
    ;

  localMount = "/mnt/frigate";
  mountPath = utilities.storage.getNfsMountPath configJson.storage "security";
  nfsServer = utilities.machines.getMachineIPv4 config.machine.all (utilities.storage.getNfsMachine configJson.storage "security");

  cfg = config.frigate;
  format = pkgs.formats.yaml {};

  # Filter out null values from the configuration
  filteredConfig = converge (filterAttrsRecursive (_: v: !elem v [null])) cfg.settings;

  cameraFormat = with types;
    submodule {
      freeformType = format.type;
      options = {
        ffmpeg = {
          inputs = mkOption {
            description = ''
              List of inputs for this camera.
            '';
            type = listOf (submodule {
              freeformType = format.type;
              options = {
                path = mkOption {
                  type = str;
                  example = "rtsp://192.0.2.1:554/rtsp";
                  description = ''
                    Stream URL
                  '';
                };
                roles = mkOption {
                  type = listOf (enum [
                    "audio"
                    "detect"
                    "record"
                  ]);
                  example = [
                    "detect"
                    "record"
                  ];
                  description = ''
                    List of roles for this stream
                  '';
                };
              };
            });
          };
        };
      };
    };
in {
  options = {
    frigate = {
      enable = lib.mkEnableOption "enables frigate";

      settings = mkOption {
        type = types.submodule {
          freeformType = format.type;
          options = {
            cameras = mkOption {
              type = types.attrsOf cameraFormat;
              default = {};
              description = ''
                Attribute set of cameras configurations.

                https://docs.frigate.video/configuration/cameras
              '';
            };

            database = {
              path = mkOption {
                type = types.path;
                default = "/media/frigate/frigate.db";
                description = ''
                  Path to the SQLite database used
                '';
              };
            };

            mqtt = {
              enabled = mkEnableOption "MQTT support";

              host = mkOption {
                type = types.nullOr types.str;
                default = "localhost";
                example = "mqtt.example.com";
                description = ''
                  MQTT server hostname
                '';
              };

              port = mkOption {
                type = types.int;
                default = 1883;
                description = ''
                  MQTT server port
                '';
              };
            };

            record = {
              enabled = mkOption {
                type = types.bool;
                default = true;
                description = ''
                  Enable recording
                '';
              };
            };

            snapshots = {
              enabled = mkOption {
                type = types.bool;
                default = true;
                description = ''
                  Enable snapshots
                '';
              };
            };
          };
        };
        default = {};
        description = ''
          Frigate configuration as a nix attribute set.

          See the project documentation for how to configure frigate.
          - [Creating a config file](https://docs.frigate.video/guides/getting_started)
          - [Configuration reference](https://docs.frigate.video/configuration/index)
        '';
      };
    };
  };

  config = lib.mkIf config.frigate.enable {
    virtualisation = {
      containers.enable = true;
      podman = {
        enable = true;
        autoPrune.enable = true;
        dockerCompat = true;
        defaultNetwork.settings = {
          dns_enabled = true;
        };
      };
    };

    fileSystems."${localMount}" = {
      device = "${nfsServer}:${mountPath}";
      fsType = "nfs";
    };

    services.mosquitto = {
      enable = true;
      listeners = [
        {
          acl = ["pattern readwrite #"];
          omitPasswordAuth = true;
          settings.allow_anonymous = true;
        }
      ];
    };

    sops.secrets = {
      "frigate/plus-key" = {};
      "frigate/rtsp-password" = {};
      "frigate/rtsp-password-wyze" = {};
    };

    systemd.tmpfiles.rules = [
      "d /var/lib/frigate/config 0755 root root -"
    ];

    # Create the frigate configuration file
    environment.etc."frigate/config.yml" = lib.mkIf (cfg.settings != {}) {
      source = format.generate "config.yml" filteredConfig;
      mode = "0644";
    };

    virtualisation.oci-containers.containers."frigate" = {
      autoStart = true;
      image = "ghcr.io/blakeblackshear/frigate:stable";
      environmentFiles = [
        config.sops.secrets."frigate/plus-key".path
        config.sops.secrets."frigate/rtsp-password".path
        config.sops.secrets."frigate/rtsp-password-wyze".path
      ];
      devices = [
        "/dev/bus/usb:/dev/bus/usb:rwm"
      ];
      labels = {
        "io.containers.autoupdate" = "registry";
      };
      volumes =
        [
          "/etc/localtime:/etc/localtime:ro"
          "/var/lib/frigate/config:/config:rw"
          "${localMount}:/media/frigate:rw"
        ]
        ++ optionals (cfg.settings != {}) [
          "/etc/frigate/config.yml:/config/config.yml:rw"
        ];
      ports = [
        "8971:8971"
        "5000:5000"
        "1984:1984"
        "8554:8554"
        "8555:8555/tcp"
        "8555:8555/udp"
      ];
      log-driver = "journald";
      extraOptions = [
        "--tmpfs=/tmp/cache:size=1000000000"
        "--network-alias=frigate"
        "--network=frigate_default"
        "--privileged"
      ];
    };
    systemd.services."podman-frigate" = {
      serviceConfig = {
        Restart = lib.mkOverride 500 "always";
        StateDirectory = "frigate/config";
      };
      after = [
        "podman-network-frigate_default.service"
      ];
      requires = [
        "podman-network-frigate_default.service"
      ];
      partOf = [
        "podman-compose-frigate-root.target"
      ];
      wantedBy = [
        "podman-compose-frigate-root.target"
      ];
    };

    systemd.services."podman-network-frigate_default" = {
      path = [pkgs.podman];
      serviceConfig = {
        Type = "oneshot";
        RemainAfterExit = true;
        ExecStop = "podman network rm -f frigate_default";
      };
      script = ''
        podman network inspect frigate_default || podman network create frigate_default
      '';
      partOf = ["podman-compose-frigate-root.target"];
      wantedBy = ["podman-compose-frigate-root.target"];
    };

    systemd.targets."podman-compose-frigate-root" = {
      unitConfig = {
        Description = "Root target";
      };
      wantedBy = ["multi-user.target"];
    };

    networking.firewall.allowedTCPPorts = [
      8971
      5000
      1984
      8554
      8555
    ];
  };
}
