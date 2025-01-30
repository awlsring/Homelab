import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { Include } from "cdk8s";
import { Construct } from "constructs";
import { spawnSync } from "child_process";

const MAX_BUFFER = 10 * 1024 * 1024;

export const _child_process = {
  spawnSync: spawnSync,
};

export interface KustomizeProps {
  readonly url: string;
}

export class Kustomize extends Include {
  constructor(scope: Construct, name: string, props: KustomizeProps) {
    const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdk8s-kustomize-"));

    const args = new Array<string>();
    args.push("kustomize");
    args.push(props.url);

    const outputFile = renderTemplate(workdir, "kubectl", args);
    super(scope, name, { url: outputFile });
  }
}

function renderTemplate(workdir: string, prog: string, args: string[]) {
  const kustomize = _child_process.spawnSync(prog, args, {
    maxBuffer: MAX_BUFFER,
  });

  if (kustomize.error) {
    const err = kustomize.error.message;
    if (err.includes("ENOENT")) {
      throw new Error(
        `unable to execute '${prog}' to render chart. Is it installed on your system?`
      );
    }

    throw new Error(`error while rendering a chart: ${err}`);
  }

  if (kustomize.status !== 0) {
    throw new Error(kustomize.stderr.toString());
  }

  const outputFile = path.join(workdir, "chart.yaml");
  const stdout = kustomize.stdout;
  fs.writeFileSync(outputFile, stdout);
  return outputFile;
}
