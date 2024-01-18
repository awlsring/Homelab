import {
  TypeScriptAppProject,
  TypeScriptProjectOptions,
} from "projen/lib/typescript";
import * as semver from "semver";
import { v5 as uuidv5 } from "uuid";
import { CdkTfConfig, TerraformDependencyConstraint } from "./config";
import { CdkTfTasks } from "./tasks";

function generateProjectId(name: string): string {
  return uuidv5(name, "1b671a64-40d5-491e-99b0-da01ff1f3341");
}

function getDefaultConstructVersion(cdktfVersion: string) {
  const semverCDKTFVersion = semver.coerce(cdktfVersion);
  if (semverCDKTFVersion && semver.lte(semverCDKTFVersion, "0.5.0")) {
    return "^3.0.0";
  }

  return "^10.0.12";
}

export interface CdkTfTypescriptAppOptions extends TypeScriptProjectOptions {
  /**
   * cdktf version to use
   * @default "^0.13.0"
   */
  readonly cdktfVersion: string;

  /**
   * Construct version to use
   * @default "^10.0.12"
   */
  readonly constructsVersion?: string;

  /**
   * Terraform providers to build
   */
  readonly terraformProviders?: TerraformDependencyConstraint[];

  /**
   * The command to run when building the app
   */
  readonly app?: string;

  /**
   * The output directory for the synthesized code
   */
  readonly output?: string;

  /**
   * The output directory for generated provider bindings
   */
  readonly codeMakerOutput?: string;

  /**
   * Unique identifier for the project used to differentiate projects
   */
  readonly projectId?: string;
}

export class CdkTfTypescriptApp extends TypeScriptAppProject {
  constructor(options: CdkTfTypescriptAppOptions) {
    super(options);
    const projectId = options.projectId ?? generateProjectId(this.name);

    const tsConfigFile = this.tsconfig?.fileName;
    if (!tsConfigFile) {
      throw new Error("Expecting tsconfig.json");
    }

    const cdktfConfig = new CdkTfConfig(this, projectId, {
      app: options.app,
      output: options.output,
      codeMakerOutput: options.codeMakerOutput,
      terraformProviders: options.terraformProviders,
    });
    new CdkTfTasks(this);

    const constructsVersion =
      options.constructsVersion ??
      getDefaultConstructVersion(options.cdktfVersion);

    this.npmignore?.exclude(`${cdktfConfig.cdktfOut}/`);
    if (this.tsconfig) {
      this.tsconfig.exclude.push(cdktfConfig.cdktfOut);
    }

    this.addDeps(
      `constructs@^${constructsVersion}`,
      `cdktf@^${options.cdktfVersion}`,
    );
    this.addDevDeps(`cdktf-cli@${options.cdktfVersion}`);
    this.addDevDeps("ts-node");
    this.addKeywords("cdktf");
    this.preCompileTask.exec("cdktf get");
    this.postCompileTask.exec("cdktf synth");
  }
}
