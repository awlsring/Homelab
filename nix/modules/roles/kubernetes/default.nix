{
  pkgs,
  lib,
  config,
  utilities,
  ...
}: let
  roleName = "k3s";
  controlRoleName = "k3s:control";
  workerRoleName = "k3s:worker";
  roleEnabled = builtins.any (role: builtins.match ".*${roleName}.*" role != null) config.machine.active.roles;
  isWorker = builtins.elem roleName config.machine.active.roles;
  isControl = builtins.elem controlRoleName config.machine.active.roles;
  isHybrid = builtins.elem roleName config.machine.active.roles;
in {
  imports = [./longhorn.nix];

  config = lib.mkIf roleEnabled {
    sops.secrets."k3s/token" = {};

    # TODO: this will need to be different for worker nodes
    services.k3s = {
      enable = true;
      role = "server";
      token = config.sops.secrets."k3s/token".path;
      extraFlags = toString [
        "--tls-san 10.0.10.60" # make this configurable
        "--node-label \"k3s-upgrade=false\""
        "--etcd-expose-metrics"
        "--secrets-encryption"
        "--flannel-backend=none"
        "--disable-network-policy"
        "--disable servicelb"
        "--disable traefik"
        "--disable coredns"
        "--disable flannel"
        "--kubelet-arg=register-with-taints=node.cilium.io/agent-not-ready:NoExecute"
      ];
    };

    networking.firewall = {
      enable = true;
      checkReversePath = false;
      allowedTCPPorts = [
        22 # ssh
        53 # dns
        80 # http
        179 # metallb
        222 # git ssh
        443 # https
        445 # samba
        4240 # health check
        4244 # hubble server
        4245 # hubble relay
        6443 # kubernetes api
        6666 # BGP
        6667 # BGP
        8080 # reserved http
        9500 # Longhorn Engine
        9501 # Longhorn Engine
        9808 # Longhorn Instance Manager
        9962 # agent prometheus metrics
        9963 # operator prometheus metrics
        9964 # envoy prometheus metrics
        10250 # k3s metrics
        10254 # kubelet
      ];
      allowedUDPPorts = [
        53 # dns
        67 # dhcp
        179 # metallb
        8472 # VXLAN overlay
        51820 # wireguard
        10001 # unifi discovery
      ];
      allowedTCPPortRanges = [
        {
          from = 2379;
          to = 2380;
        } # etcd
        {
          from = 30000;
          to = 32767;
        } # kubernetes nodeports
      ];
      allowedUDPPortRanges = [
        {
          from = 30000;
          to = 32767;
        } # kubernetes nodeports
      ];
    };

    boot.kernel.sysctl = {
      "fs.inotify.max_user_instances" = 524288;
      "fs.inotify.max_user_watches" = 524288;
    };

    environment.systemPackages = with pkgs; [
      cilium-cli
      kubectl
      nfs-utils
      openiscsi
      openssl_3
      sops
      nfs-utils
      (writeShellScriptBin "nuke-k3s" ''
        if [ "$EUID" -ne 0 ] ; then
          echo "Please run as root"
          exit 1
        fi
        read -r -p 'Nuke k3s?, confirm with yes (y/N): ' choice
        case "$choice" in
          y|Y|yes|Yes) echo "nuke k3s...";;
          *) exit 0;;
        esac
        systemctl stop k3s-helm-bootstrap.timer || true
        systemctl stop k3s-helm-bootstrap.service || true
        systemctl stop k3s-flux2-bootstrap.timer || true
        systemctl stop k3s-flux2-bootstrap.service || true
        flux uninstall -s || true
        kubectl delete deployments --all=true -A
        kubectl delete statefulsets --all=true -A
        kubectl delete ns --all=true -A
        kubectl get ns | tail -n +2 | cut -d ' ' -f 1 | xargs -I{} kubectl delete pods --all=true --force=true -n {}
        cilium uninstall || true
        echo "wait until objects are deleted..."
        sleep 28
        systemctl stop k3s
        sleep 2
        rm -rf /var/lib/rancher/k3s/
        rm -rf /var/lib/cni/networks/cbr0/
        if [ -d /opt/k3s/data/temp ]; then
          rm -rf /opt/k3s/data/temp/*
        fi
        sync
        echo -e "\n => reboot now to complete k3s cleanup!"
        sleep 3
        reboot
      '')
    ];
  };
}
