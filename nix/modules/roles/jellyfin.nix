# https://nixos.wiki/wiki/Jellyfin
{
  config,
  pkgs,
  lib,
  ...
}: let
  isIntelCPU =
    lib.hasAttrByPath ["machine" "active" "hardware" "cpu" "make"] config
    && config.machine.active.hardware.cpu != null
    && config.machine.active.hardware.cpu.make or null == "Intel";
in {
  options = {
    jellyfin = {
      enable = lib.mkEnableOption "enables jellyfin";
      jellyseerr = lib.mkEnableOption "Enable Jellyseer";
    };
  };

  config = lib.mkIf config.jellyfin.enable {
    # Jellyfin
    services.jellyfin = {
      enable = true;
      openFirewall = true;
    };
    environment.systemPackages = with pkgs; [
      jellyfin
      jellyfin-web
      jellyfin-ffmpeg
    ];

    # Intel Transcoding
    nixpkgs.config.packageOverrides = pkgs: {
      vaapiIntel = lib.mkIf isIntelCPU {
        vaapiIntel = pkgs.vaapiIntel.override {
          enableHybridCodec = true;
        };
      };
    };

    hardware.graphics = lib.mkIf isIntelCPU {
      enable = true;
      extraPackages = with pkgs; [
        intel-media-driver
        intel-vaapi-driver # previously vaapiIntel
        vaapiVdpau
        libvdpau-va-gl
        intel-compute-runtime # OpenCL filter support (hardware tonemapping and subtitle burn-in)
        vpl-gpu-rt # QSV on 11th gen or newer
      ];
    };

    # Jellyseerr
    services.jellyseerr = lib.mkIf config.jellyfin.jellyseerr {
      enable = true;
      openFirewall = true;
    };
  };
}
