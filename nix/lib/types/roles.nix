{lib}: let
  inherit (lib.types) str attrsOf submodule;

  role = submodule {
    options = {
      description = lib.mkOption {
        type = str;
        description = "Description of the site";
      };
    };
  };
in {
  inherit site;

  rolesConfig = submodule {
    options = {
      roles = lib.mkOption {
        type = attrsOf role;
        description = "Roles available";
      };
    };
  };
}
