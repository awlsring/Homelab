inputs: {
  disko,
  sops-nix,
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
