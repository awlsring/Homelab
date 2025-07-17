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

  # DNS Names
  jellyfinDomain = "jellyfin.us-drig-1.drigs.org";
  jellyfinPublic = "jellyfin.drigs.org";
  jellySeerDomain = "requests.us-drig-1.drigs.org";
  jellySeerPublic = "requests.drigs.org";
in {
  imports = [
    nixosModules.default
    ./hardware-configuration.nix
  ];

  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  machine.hostname = hostname;

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

  # reverse proxy
  services.nginx = {
    enable = true;
    recommendedGzipSettings = true;
    recommendedOptimisation = true;
    recommendedProxySettings = true;
    recommendedTlsSettings = true;
    virtualHosts = {
      ${jellyfinDomain} = {
        useACMEHost = jellyfinDomain;
        forceSSL = true;
        locations."/".proxyPass = "http://127.0.0.1:8096";
        extraConfig = ''
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection $http_connection;
        '';
      };
      ${jellyfinPublic} = {
        useACMEHost = jellyfinPublic;
        forceSSL = true;
        locations."/".proxyPass = "http://127.0.0.1:8096";
        extraConfig = ''
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection $http_connection;
        '';
      };
      ${jellySeerDomain} = {
        useACMEHost = jellySeerDomain;
        forceSSL = true;
        locations."/".proxyPass = "http://127.0.0.1:5055";
      };
      ${jellySeerPublic} = {
        useACMEHost = jellySeerDomain;
        forceSSL = true;
        locations."/".proxyPass = "http://127.0.0.1:5055";
      };
    };
  };

  # certs
  sops.secrets."cloudflare/drigs/token" = {};
  security.acme = {
    acceptTerms = true;
    defaults = {
      email = "services@matthewrawlings.com";
      environmentFile = config.sops.secrets."cloudflare/drigs/token".path;
      dnsProvider = "cloudflare";
      dnsResolver = "1.1.1.1:53";
      dnsPropagationCheck = true;
      group = config.services.nginx.group;
    };
    certs = {
      ${jellyfinDomain} = {
        domain = jellyfinDomain;
      };
      ${jellyfinPublic} = {
        domain = jellyfinPublic;
      };
      ${jellySeerDomain} = {
        domain = jellySeerDomain;
      };
      ${jellySeerPublic} = {
        domain = jellySeerPublic;
      };
    };
  };

  networking.firewall.allowedTCPPorts = [80 443];
}
