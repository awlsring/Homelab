inputs: {
  disko,
  sops-nix,
  types,
  utilities,
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
