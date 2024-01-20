import { Construct } from "constructs";
import { IBackendCreator } from "./backend-producer";
import { PgBackend, TerraformBackend } from "cdktf";

export interface PostgresBackendProps {
  readonly address: string;
  readonly database: string;
  readonly user: string;
  readonly password: string;
}

export class PostgresBackendCreator implements IBackendCreator {
  constructor(private readonly props: PostgresBackendProps) {}

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
