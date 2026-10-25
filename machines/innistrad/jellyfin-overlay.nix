# Temporary Jellyfin 12.3 source and dependency locks.
final: prev: {
  jellyfin = prev.jellyfin.override {
    # Set the lock before buildDotnetModule expands it into buildInputs.
    buildDotnetModule = args:
      prev.buildDotnetModule (attrs:
        (args attrs)
        // {
          version = "12.3";
          src = prev.fetchFromGitHub {
            owner = "jellyfin";
            repo = "jellyfin";
            tag = "v12.3";
            hash = "sha256-J7DwIoCl+KWLvCmYaoReeSzED6ewgCNN+41aN+f1xO0=";
          };
          nugetDeps = ./jellyfin-nuget-deps.json;
        });
  };
  jellyfin-web = prev.jellyfin-web.override {
    buildNpmPackage = args:
      prev.buildNpmPackage (attrs:
        (args attrs)
        // {
          version = "12.3";
          src = prev.fetchFromGitHub {
            owner = "jellyfin";
            repo = "jellyfin-web";
            tag = "v12.3";
            hash = "sha256-VBCHgduimq25vFYUzDrEwuq6cIUcLqFzqGukOnF74Yg=";
          };
          npmDepsHash = "sha256-JkIh3fm3LGks28hzNwwzaoEZB6qwbUIZihBP9ZToofc=";
        });
  };
}
