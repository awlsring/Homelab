import {
  TypeScriptAppProject,
  TypeScriptProjectOptions,
} from "projen/lib/typescript";
import { CdkAnsConfig, ImportSpec } from "./config";

export interface CdkAnsAppOptions extends TypeScriptProjectOptions {
  /**
   * cdktf version to use
   * @default "^0.0.0"
   */
  readonly cdkansVersion: string;

  /**
   * Construct version to use
   * @default "^10.0.12"
   */
  readonly constructsVersion?: string;

  /**
   * Anisble imports
   */
  readonly imports?: ImportSpec[];

  /**
   * The command to run when building the app
   */
  readonly app?: string;

  /**
   * The output directory for the synthesized code
   */
  readonly output?: string;
}

export class CdkAnsApp extends TypeScriptAppProject {
  constructor(options: CdkAnsAppOptions) {
    super(options);

    const tsConfigFile = this.tsconfig?.fileName;
    if (!tsConfigFile) {
      throw new Error("Expecting tsconfig.json");
    }

    const cdktfConfig = new CdkAnsConfig(this, {
      app: options.app,
      output: options.output,
      imports: options.imports,
    });

    const constructsVersion = options.constructsVersion ?? "^10.0.12";
    const cdkansVersion = options.cdkansVersion ?? "^0.0.0";

    this.npmignore?.exclude(`${cdktfConfig.cdkAnsOut}/`);
    if (this.tsconfig) {
      this.tsconfig.exclude.push(cdktfConfig.cdkAnsOut);
    }

    this.addDeps(
      `constructs@^${constructsVersion}`,
      `cdk-ans@^${cdkansVersion}`,
    );
    this.addDevDeps(`cdk-ans-cli@${cdkansVersion}`);
    this.addDevDeps("ts-node");
    this.addKeywords("cdkans");
    // this.preCompileTask.exec(`cdkans import`);
    this.postCompileTask.exec(`npx ts-node src/main.ts`);
  }
}
