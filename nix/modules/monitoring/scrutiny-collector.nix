{
  config,
  inputs,
  pkgs,
  lib,
  ...
}: {
  options = {
    "scrutiny-collector" = {
      enable = lib.mkEnableOption "enables scrutiny collector";
      endpoint = lib.mkOption {
        type = lib.types.str;
        description = "The endpoint to put metrics to.";
      };
      schedule = lib.mkOption {
        type = lib.types.str;
        default = "*:0/15";
        description = "The endpoint to put metrics to.";
      };
    };
  };

  config = lib.mkIf config."scrutiny-collector".enable {
    services.scrutiny.collector = {
      enable = true;
      schedule = config."scrutiny-collector".schedule;
      settings = {
        api.endpoint = config."scrutiny-collector".endpoint;
      };
    };
  };
}
