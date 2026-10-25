{
  inputs,
  pkgs,
  ...
}: let
  # Update the media stack independently of the host OS and container runtime.
  mediaPkgs = import inputs.media-nixpkgs {
    system = pkgs.stdenv.hostPlatform.system;
    config.allowUnfree = true;
    overlays = [(import ./jellyfin-overlay.nix)];
  };
in {
  services.nginx.package = mediaPkgs.nginx;
  nixpkgs.overlays = [
    (_: _: {
      inherit
        (mediaPkgs)
        jellyfin
        jellyfin-web
        jellyfin-ffmpeg
        seerr
        nginx
        intel-media-driver
        intel-vaapi-driver
        libva-vdpau-driver
        libvdpau-va-gl
        intel-compute-runtime
        vpl-gpu-rt
        ;
    })
  ];
}
