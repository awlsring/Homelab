import { Construct } from "constructs";
import { HomelabStack, HomelabStackProps } from "./homelab-stack";
import { GithubProvider } from '@cdktf/provider-github/lib/provider';
import { Job, Workflow } from "@awlsring/cdktf-github-actions";

export interface GithubWorkflowsStackProps extends HomelabStackProps {
  repoName: string;
  githubToken: string;
}

export class GithubWorkflowsStack extends HomelabStack {
  constructor(scope: Construct, name: string, props: GithubWorkflowsStackProps) {
    super(scope, name, props);

    new GithubProvider(this, "provider", {
      token: props.githubToken,
    });

    new Job(this, 'build-job', {
      steps: [
        {
          name: 'echo hello',
          run: 'echo "Hello"',
        },
      ],
    });

    new Workflow(this, "proxmox-test", {
      repoName: props.repoName,
    });

  }
}