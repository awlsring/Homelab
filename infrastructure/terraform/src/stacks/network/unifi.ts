import { HomelabStack, HomelabStackProps } from "cdktf-constructs";
import { Construct } from "constructs";
// import { DataUnifiNetwork } from "../../gen/providers/unifi/data-unifi-network";
// import { Network } from "../../gen/providers/unifi/network";
import { UnifiProvider } from "../../gen/providers/unifi/provider";

export interface UnifiNetworkStackProps extends HomelabStackProps {
  readonly secretName: string;
}

export class UnifiNetworkStack extends HomelabStack {
  constructor(scope: Construct, name: string, props: UnifiNetworkStackProps) {
    super(scope, name, props);

    if (this.secretProvider === undefined) {
      throw new Error("Secret provider not set");
    }

    const providerSecret = this.secretProvider.retrieveSecret(props.secretName);
    new UnifiProvider(this, "provider", {
      username: providerSecret.key,
      password: providerSecret.value,
      apiUrl: "https://10.0.10.1",
      allowInsecure: true,
    });

    // new Network(this, "network-security", {
    //   name: "Test",
    //   purpose: "corporate",
    //   vlanId: 2,
    // }).importFrom("65ac007a22dbbf79ef77dd7d");

    // new DataUnifiNetwork(this, "network-test", {
    //   name: "Test",
    // });
  }
}
