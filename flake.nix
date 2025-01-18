{
  description = "Homelab";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/release-24.05";
  };

  outputs = {
    self,
    nixpkgs,
  }: let
    allSystems = [
      "x86_64-linux"
      "aarch64-linux"
      "x86_64-darwin"
      "aarch64-darwin"
    ];

    forAllSystems = f:
      nixpkgs.lib.genAttrs allSystems (system:
        f {
          pkgs = import nixpkgs {
            inherit system;
            config.allowUnfree = true;
          };
        });
  in {
    devShells = forAllSystems ({pkgs}: {
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
