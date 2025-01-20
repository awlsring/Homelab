{
  description = "Homelab";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    systems.url = "github:nix-systems/default";

    sops-nix.url = "github:Mic92/sops-nix";

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
    srvos,
    disko,
  } @ inputs: let
    inherit (self) outputs;
    lib = nixpkgs.lib;

    forAllSystems = f:
      nixpkgs.lib.genAttrs (import systems) (system:
        f {
          pkgs = import nixpkgs {
            inherit system;
            config.allowUnfree = true;
          };
          inherit system;
        });

    nixosModules.default = {pkgs, ...} @ args: {
      imports = [
        (
          import ./nix/modules inputs {
            inherit disko sops-nix;
          }
        )
      ];
    };
  in {
    inherit lib;

    overlays = import ./nix/overlays {inherit inputs;};
    packages = forAllSystems (pkgs: import ./nix/pkgs {inherit pkgs;});
    formatter = forAllSystems (pkgs: pkgs.alejandra);

    nixosModules = nixosModules;

    nixosConfigurations = {
      # Dominaria
      dominaria = nixpkgs.lib.nixosSystem {
        system = "x86_64-linux";
        specialArgs = {
          inherit inputs outputs nixosModules;
        };
        modules = [
          srvos.nixosModules.server
          ./machines/dominaria
        ];
      };

      conflux = nixpkgs.lib.nixosSystem {
        system = "x86_64-linux";
        specialArgs = {
          inherit inputs outputs nixosModules;
        };
        modules = [
          srvos.nixosModules.server
          srvos.nixosModules.hardware-hetzner-cloud
          ./machines/conflux
        ];
      };
    };

    devShells = forAllSystems ({
      pkgs,
      system,
      ...
    }: {
      default = pkgs.mkShell {
        shellHook = ''
          export TERRAFORM_BINARY_NAME=tofu;
          export KUBECONFIG=$HOME/.kube/config;
          export SOPS_AGE_KEY_FILE=~/.config/sops/age/keys.txt
        '';
        packages = with pkgs; [
          fluxcd
          sops
          just
          nodejs_22
          yarn
          direnv
          nodePackages.cdktf-cli
          opentofu
          nodePackages.cdk8s-cli
          kubernetes-helm
          k9s
          kubectl
          kubectl-cnpg
        ];
      };
    });
  };
}
