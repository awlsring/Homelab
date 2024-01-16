import { Component, JsonFile, Project } from "projen";

// interfaces from https://developer.hashicorp.com/terraform/cdktf/create-and-deploy/configuration-file#specification

export interface TerraformDependencyConstraint {
  readonly name: string; // name of the module / provider
  readonly source?: string; // path / url / registry identifier for the module / provider
  readonly version?: string; // version constraint (https://www.terraform.io/docs/language/providers/requirements.html#version-constraints)
}
type RequirementDefinition = string | TerraformDependencyConstraint;

export interface CdkTfConfigOptions {
  readonly app?: string; // The command to run in order to synthesize the code to Terraform compatible JSON. Default "npx ts-node src/main.ts"
  readonly output?: string; // Default: 'cdktf.out'. Where the synthesized JSON should go. Also will be the working directory for Terraform operations
  readonly codeMakerOutput?: string; // Default: '.gen'. Path where generated provider bindings will be rendered to.
  readonly projectId?: string; // Default: generated UUID. Unique identifier for the project used to differentiate projects
  readonly sendCrashReports?: boolean; // Default: false. Whether to send crash reports to the CDKTF team
  readonly terraformProviders?: RequirementDefinition[]; // Terraform Providers to build
  readonly terraformModules?: RequirementDefinition[]; // Terraform Modules to build
}

/**
 * Represents cdktf.json file.
 */
export class CdkTfConfig extends Component {
  /**
   * Represents the JSON file.
   */
  public readonly json: JsonFile;

  /**
   * App synth command
   */
  public readonly appCommand: string;

  /**
   * Name of the output directory.
   */
  public readonly cdktfOut: string;

  /**
   * Name of the gen directory.
   */
  public readonly genOut: string;

  constructor(
    project: Project,
    projectId: string,
    options?: CdkTfConfigOptions,
  ) {
    super(project);

    this.appCommand = options?.app ?? "npx ts-node src/main.ts";
    this.cdktfOut = options?.output ?? "cdktf.out";
    this.genOut = options?.codeMakerOutput ?? ".gen";

    this.json = new JsonFile(project, "cdktf.json", {
      omitEmpty: true,
      obj: {
        app: this.appCommand,
        language: "typescript",
        output: this.cdktfOut,
        codeMakerOutput: this.genOut,
        projectId: projectId,
        sendCrashReports: options?.sendCrashReports,
        terraformProviders: options?.terraformProviders,
        terraformModules: options?.terraformModules,
      },
    });

    project.gitignore.exclude(`/${this.cdktfOut}/`);
    project.gitignore.exclude(`/${this.genOut}/`);
  }
}
