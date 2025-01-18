import { Construct } from "constructs";
import {
  Secret,
  ISecretProvider,
  ISecretProviderFactory,
} from "./secret-provider";
import { SopsProvider } from "../../.gen/providers/sops/provider";
import { DataSopsFile } from "../../.gen/providers/sops/data-sops-file";

export class SopsSecretProviderFactory implements ISecretProviderFactory {
  constructor(private readonly props: SopsSecretProviderProps) {}
  create(scope: Construct, name: string): ISecretProvider {
    return new SopsSecretProvider(scope, name, this.props);
  }
}

export interface SopsSecretProviderProps {
  readonly sourceFile: string;
}

export class SopsSecretProvider extends Construct implements ISecretProvider {
  private readonly secretsFile: DataSopsFile;
  constructor(
    scope: Construct,
    name: string,
    props: SopsSecretProviderProps
  ) {
    super(scope, name);

    new SopsProvider(this, "sops-provider", {});

    this.secretsFile = new DataSopsFile(this, "sops-file", {
      sourceFile: props.sourceFile,
    });
  }

  retrieveSecret(name: string): Secret {
    const secret = this.secretsFile.data.lookup(name);
    return {
      value: secret,
    };
  }
}
