import { Names } from 'cdk8s';
import { Volume } from 'cdk8s-plus-25';
import { Construct } from 'constructs';

export interface NfsShareVolumeOptions {
  readonly name: string;
  readonly server: string;
  readonly path: string;
}

export class NfsVolume extends Construct {
  public static fromShare(scope: Construct, id: string, options: NfsShareVolumeOptions): Volume {
    const cls = Volume as any;
    return new cls(scope, id, options.name ?? Names.toDnsLabel(scope, { extra: [id] }), {
      nfs: {
        server: options.server,
        path: options.path,
      },
    });
  }
}