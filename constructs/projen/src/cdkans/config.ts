import { Component, Project, YamlFile } from "projen";

export enum ImportType {
  MODULE = "module",
}

export interface ImportSpec {
  readonly type: ImportType;
  readonly namespace: string;
  readonly source: string;
}

export interface CdkAnsConfigOptions {
  readonly app?: string; // The command to run in order to synthesize the code to Terraform compatible JSON. Default "npx ts-node src/main.ts cdkans"
  readonly output?: string; // Default: 'dist'. Where the synthesized JSON should go. Also will be the working directory for Terraform operations
  readonly imports?: ImportSpec[];
}

/**
 * Represents cdktf.json file.
 */
export class CdkAnsConfig extends Component {
  /**
   * Represents the JSON file.
   */
  public readonly yaml: YamlFile;

  /**
   * App synth command
   */
  public readonly appCommand: string;

  /**
   * Name of the output directory.
   */
  public readonly cdkAnsOut: string;

  constructor(project: Project, options?: CdkAnsConfigOptions) {
    super(project);

    this.appCommand = options?.app ?? "npx ts-node src/main.ts cdkans";
    this.cdkAnsOut = options?.output ?? "dist";

    this.yaml = new YamlFile(project, "cdkans.yaml", {
      omitEmpty: true,
      obj: {
        app: this.appCommand,
        language: "typescript",
        output: this.cdkAnsOut,
        imports: options?.imports,
      },
    });

    project.gitignore.exclude(`/${this.cdkAnsOut}/`);
  }
}
