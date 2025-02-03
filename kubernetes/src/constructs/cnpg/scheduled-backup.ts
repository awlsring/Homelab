import { Construct } from "constructs";
import { ScheduledBackup as L1ScheduledBackup } from "../../imports/scheduledbackups-postgresql.cnpg.io";
import { Cluster } from "./cluster";
import { ApiObject } from "cdk8s";

export interface CronScheduleOptions {
  readonly minute?: string | number;
  readonly hour?: string | number;
  readonly dayOfMonth?: string | number;
  readonly month?: string | number;
  readonly dayOfWeek?: string | number;
}

export class CronSchedule {
  private minute: string;
  private hour: string;
  private dayOfMonth: string;
  private month: string;
  private dayOfWeek: string;

  constructor(options?: CronScheduleOptions) {
    this.minute = options?.minute?.toString() ?? "*";
    this.hour = options?.hour?.toString() ?? "*";
    this.dayOfMonth = options?.dayOfMonth?.toString() ?? "*";
    this.month = options?.month?.toString() ?? "*";
    this.dayOfWeek = options?.dayOfWeek?.toString() ?? "*";
  }

  toString(): string {
    return `${this.minute} ${this.hour} ${this.dayOfMonth} ${this.month} ${this.dayOfWeek}`;
  }
}

export interface ScheduledBackupProps {
  readonly cluster: Cluster;
  readonly schedule: CronSchedule;
}

export class ScheduledBackup extends Construct {
  protected readonly apiObject: ApiObject;
  constructor(scope: Construct, name: string, props: ScheduledBackupProps) {
    super(scope, name);

    this.apiObject = new L1ScheduledBackup(this, `resource`, {
      metadata: {},
      spec: {
        cluster: {
          name: props.cluster.node.id,
        },
        schedule: props.schedule.toString(),
      },
    });
  }
}
