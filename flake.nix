{
  description = "Homelab";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    systems.url = "github:nix-systems/default";

    sops-nix.url = "github:Mic92/sops-nix";

    deploy-rs = {
      url = "github:serokell/deploy-rs";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    srvos = {
      # Use fix in issue https://github.com/nix-community/srvos/pull/601
      url = "github:nix-community/srvos/7179525bf385263afbf2bdebc75b0060e37ceb7c";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    disko = {
      url = "github:nix-community/disko";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = {
    self,
    nixpkgs,
    systems,
    sops-nix,
    deploy-rs,
    srvos,
    disko,
  } @ inputs: let
    inherit (self) outputs;
    lib = nixpkgs.lib;

    types = import ./nix/lib/types {inherit lib;};

    utilities = import ./nix/lib/utilities {inherit lib types;};

    config = import ./nix/lib/config.nix {inherit lib types;};
    configJson = config.configJson;

    nixosModules.default = {pkgs, ...} @ args: {
      imports = [
        (import ./nix/modules inputs {inherit disko sops-nix types utilities;})
      ];
    };

    # Generate NixOS configurations from inventory
    nixosConfigurations = lib.mapAttrs (
      _hostname: machine: let
        nixSystem = utilities.machines.getSystemForArch machine.arch;
      in
        nixpkgs.lib.nixosSystem {
          system = nixSystem;
          specialArgs = {
            inherit inputs outputs types utilities configJson nixosModules;
          };
          modules =
            [
              # srvos.nixosModules.server  # Temporarily disable srvos for shellcheck issues
              nixosModules.default
              ./machines/${machine.hostname}
            ]
            ++ lib.optionals (machine.site == "hetzner") [
              srvos.nixosModules.hardware-hetzner-cloud
            ];
        }
    ) (lib.filterAttrs (_name: machine: machine.os == "nixos") configJson.machines);

    forAllSystems = f:
      nixpkgs.lib.genAttrs (import systems) (system:
        f {
          pkgs = import nixpkgs {
            inherit system;
            config.allowUnfree = true;
          };
          inherit system;
        });
  in {
    inherit nixosConfigurations nixosModules;

    overlays = import ./nix/overlays {inherit inputs;};
    packages = forAllSystems (pkgs: import ./nix/pkgs {inherit pkgs;});
    formatter = forAllSystems ({pkgs, ...}: pkgs.alejandra);

    devShells = forAllSystems ({
      pkgs,
      system,
      ...
    }: {
      default = pkgs.mkShell {
        env = {
          TERRAFORM_BINARY_NAME = "tofu";
        };
        shellHook = ''
          export KUBECONFIG="$HOME/.kube/config"
          export SOPS_AGE_KEY_FILE="$HOME/.config/sops/age/keys.txt"
        '';
        packages = with pkgs; [
          fluxcd
          sops
          just
          nodejs_22
          yarn
          direnv
          # nodePackages.cdktf-cli
          opentofu
          nodePackages.cdk8s-cli
          kubernetes-helm
          k9s
          kubectl
          kubectl-cnpg
          alejandra
          commitizen
          deploy-rs.packages.${system}.default
        ];
      };
    });

    # Deploy-rs configurations - automatically create deployments for all NixOS machines
    deploy.nodes = lib.mapAttrs (
      hostname: machine: {
        hostname = machine.ipv4;
        profiles.system = {
          sshUser = machine.deploy.sshUser or "root";
          user = machine.deploy.user or "root";
          remoteBuild = machine.deploy.remoteBuild or true;
          path =
            deploy-rs.lib.${utilities.machines.getSystemForArch machine.arch}.activate.nixos
            self.nixosConfigurations.${hostname};
        };
      }
    ) (lib.filterAttrs (_name: machine: machine.os == "nixos") configJson.machines);

    # Deploy-rs checks
    checks = builtins.mapAttrs (system: deployLib: deployLib.deployChecks self.deploy) deploy-rs.lib;
  };
}
