{
  description = "Homelab";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    systems.url = "github:nix-systems/default";

    sops-nix.url = "github:Mic92/sops-nix";

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
          ./machines/dominaria
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
          kubectl
        ];
      };
    });
  };
}
