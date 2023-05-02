import { Container, ContainerProps, EnvValue, Secret } from 'cdk8s-plus-25';

export interface TailscaleSidecarProps {
  version?: string;
  authKey?: string;
  authSecret?: Secret;
  userspaced?: boolean;
}

export class TailscaleSidecar extends Container {
  constructor(props: TailscaleSidecarProps) {
    if (props.authKey && props.authSecret) {
      throw new Error('Cannot specify both authKey and authSecret');
    }

    if (!props.authKey && !props.authSecret) {
      throw new Error('Must specify either authKey or authSecret');
    }

    let env: Record<string, EnvValue> = {
      TS_USERSPACE: EnvValue.fromValue(String(props.userspaced ?? true)),
    };

    if (props.authKey) {
      env.TS_AUTHKEY = EnvValue.fromValue(props.authKey);
    }

    if (props.authSecret) {
      if (!props.authSecret.getStringData('TS_AUTHKEY')) {
        throw new Error('Secret must contain TS_AUTHKEY');
      }
      env.TS_AUTHKEY = EnvValue.fromSecretValue({ secret: props.authSecret, key: 'TS_AUTHKEY' });
      env.TS_KUBE_SECRET = EnvValue.fromValue(props.authSecret.name);
    }

    const containerProps: ContainerProps = {
      image: `tailscale/tailscale:${props.version ?? 'latest'}`,
      envVariables: env,
      resources: {},
      securityContext: {
        privileged: true,
        allowPrivilegeEscalation: true,
        ensureNonRoot: false,
        readOnlyRootFilesystem: false,
      },
    };
    super(containerProps);

  }
}