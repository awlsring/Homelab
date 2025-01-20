{lib}: {
  inherit (import ./storage.nix {inherit lib;}) storageConfig;
  inherit (import ./sites.nix {inherit lib;}) sitesConfig;
  inherit (import ./machines.nix {inherit lib;}) machinesConfig machine;
}
