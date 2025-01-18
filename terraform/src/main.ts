import { App } from "cdktf";
// import { HomelabStackProps } from "./constructs/stacks/homelab-stack";
// import { LocalBackendFactory } from "./backend/local-backend";
// import { CloudflareDNSStack } from "./stacks/cloudflare-dns-stack";
// import { SopsSecretProviderFactory } from "./secret-provider/sops-secret-provider";
// import { NixTestStack } from "./stacks/nix-test";

const app = new App();

// const commonProps: HomelabStackProps = {
//   backendFactory: new LocalBackendFactory(),
//   secretProviderFactory: new SopsSecretProviderFactory({
//     sourceFile: `${__dirname}/../../secrets/secrets.yaml`,
//   }),
// };

app.synth();