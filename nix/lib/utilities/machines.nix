{
  lib,
  types,
  ...
}: let
  archToSystem = {
    "x86" = "x86_64-linux";
    "aarch64" = "aarch64-linux";
    "armv7" = "armv7l-linux";
  };

  # Get the system name for a given architecture
  getSystemForArch = arch:
    if builtins.hasAttr arch archToSystem
    then archToSystem.${arch}
    else "x86_64-linux";

  # Find a machine by hostname
  findMachineByHostname = machines: hostname: let
    matchingMachines = builtins.filter (machine: machine.hostname == hostname) (builtins.attrValues machines);
  in
    if builtins.length matchingMachines == 1
    then builtins.head matchingMachines
    else throw "ERROR: No machine found with hostname '${hostname}' in provided machine list.";

  # Get the IPv4 address of a machine by hostname
  getMachineIPv4 = machines: hostname: let
    machine = findMachineByHostname machines hostname;
  in
    machine.ipv4;
in {
  inherit getSystemForArch findMachineByHostname getMachineIPv4;
}
