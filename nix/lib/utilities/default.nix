{
  lib,
  types,
  ...
}: {
  machines = import ./machines.nix {inherit lib types;};
  storage = import ./storage.nix {inherit lib types;};
}
