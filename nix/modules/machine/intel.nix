{
  config,
  lib,
  pkgs,
  ...
}: let
  isIntelCPU =
    lib.hasAttrByPath ["machine" "active" "hardware" "cpu" "make"] config
    && config.machine.active.hardware.cpu != null
    && config.machine.active.hardware.cpu.make or null == "Intel";
in
  lib.mkIf isIntelCPU {
    nixpkgs.config.packageOverrides = pkgs: {
      vaapiIntel = pkgs.vaapiIntel.override {
        enableHybridCodec = true;
      };
    };

    hardware.graphics = {
      enable = true;
      extraPackages = with pkgs; [
        intel-media-driver
        intel-vaapi-driver
        vaapiVdpau
        libvdpau-va-gl
        intel-compute-runtime
        vpl-gpu-rt
        intel-media-sdk
      ];
    };

    # Enable VAAPI and set environment variables
    environment.variables = {
      LIBVA_DRIVER_NAME = "iHD";
      VDPAU_DRIVER = "va_gl";
    };
  }
