{
  lib,
  types,
}: let
  # Read and parse inventory
  inventoryFile = ../../inventory.json;
  rawConfig = builtins.fromJSON (builtins.readFile inventoryFile);

  validatedConfig = lib.evalModules {
    modules = [
      {
        options.configJson = lib.mkOption {
          type = lib.types.submodule {
            options = {
              storage = lib.mkOption {
                type = types.storageConfig;
                description = "Storage configuration";
              };
              sites = lib.mkOption {
                type = types.sitesConfig;
                description = "Sites configuration";
              };
              machines = lib.mkOption {
                type = lib.types.attrsOf types.machine;
                description = "Machines configuration";
              };
            };
          };
          description = "Preloaded and validated JSON configuration.";
        };
        config.configJson = rawConfig;
      }
    ];
  };
in {
  configJson = validatedConfig.config.configJson;
}
