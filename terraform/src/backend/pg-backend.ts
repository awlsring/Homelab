import { Construct } from "constructs";
import { IBackendFactory } from "./backend-factory";
import { PgBackend, TerraformBackend } from "cdktf";

export interface PostgresBackendOptions {
  readonly address: string;
  readonly database: string;
  readonly user: string;
  readonly password: string;
}

export class PostgresBackendFactory implements IBackendFactory {
  constructor(private readonly props: PostgresBackendOptions) {}

  private makeConnectionString(): string {
    const { address, database, user, password } = this.props;
    return `postgresql://${user}:${password}@${address}/${database}`;
  }

  create(scope: Construct): TerraformBackend {
    return new PgBackend(scope, {
      connStr: this.makeConnectionString(),
      schemaName: scope.node.id,
    });
  }
}
