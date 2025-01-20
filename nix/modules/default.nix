inputs: {
  disko,
  sops-nix,
  types,
  utils,
}: {...}: {
  imports = [
    disko.nixosModules.disko
    sops-nix.nixosModules.sops
    ./nix.nix
    ./machine
    ./monitoring
    ./roles
  ];
}
