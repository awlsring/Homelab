{lib}: let
  inherit (lib.types) str attrsOf submodule;

  site = submodule {
    options = {
      description = lib.mkOption {
        type = str;
        description = "Description of the site";
      };
      region = lib.mkOption {
        type = str;
        description = "Geographical or logical region for the site";
      };
    };
  };
in {
  inherit site;

  sitesConfig = submodule {
    options = {
      sites = lib.mkOption {
        type = attrsOf site;
        description = "List of sites available";
      };
    };
  };
}
