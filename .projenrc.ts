import { MonorepoTsProject } from "@aws/pdk/monorepo";
import { Project } from "projen";
import { AwsCdkConstructLibrary, AwsCdkTypeScriptApp } from "projen/lib/awscdk";
import { Cdk8sTypeScriptApp, ConstructLibraryCdk8s } from "projen/lib/cdk8s";
import { GithubCredentials } from "projen/lib/github";
import { NodePackageManager } from "projen/lib/javascript";
import { TypeScriptProject } from "projen/lib/typescript";
import { CdkTfTypescriptApp } from "./constructs/projen/src/cdktf/cdktf-app";

// Metadata
const AUTHOR = "awlsring";
const AUTHOR_CONTACT = "contact@matthewrawlings.com";
const REPOSITORY_URL = "github.com/awlsring/Homelab";
const REPOSITORY = "github:awlsring/Homelab";

// CDK Versioning
const CONSTRUCTS_VERSION = "10.3.0";
const AWS_CDK_VERSION = "2.118.0";
const CDKANS_VERSION = "0.0.0";
const CDKTF_VERSION = "0.19.2";
const CDK8S_VERSION = "2.68.23";
const CDK8S_CLI_VERSION = "2.198.27";
const CDK8S_PLUS_VERSION = "2.7.70";
const K8S_MINOR_VERSION = 27;

// common props for all projects
const projectCommonProps = {
  jsiiVersion: "~5",
  packageManager: NodePackageManager.PNPM,
  author: AUTHOR,
  authorName: AUTHOR,
  authorEmail: AUTHOR_CONTACT,
  authorAddress: AUTHOR_CONTACT,
  defaultReleaseBranch: "main",
  repository: REPOSITORY,
  repositoryUrl: REPOSITORY_URL,
};

const monorepo = new MonorepoTsProject({
  ...projectCommonProps,
  devDeps: ["@aws/pdk"],
  name: "Homelab",
  packageManager: NodePackageManager.PNPM,
  projenrcTs: true,
  docgen: true,
  github: true,
  monorepoUpgradeDeps: true,
  autoApproveUpgrades: true,
  autoApproveOptions: {
    secret: "GITHUB_TOKEN",
    allowedUsernames: ["awlsring"],
  },
  githubOptions: {
    projenCredentials: GithubCredentials.fromPersonalAccessToken({
      secret: "PROJEN_GITHUB_TOKEN",
    }),
  },
});

const subprojectProps = {
  ...projectCommonProps,
  eslint: false,
  parent: monorepo,
  constructsVersion: CONSTRUCTS_VERSION,
  cdkVersion: AWS_CDK_VERSION,
  cdkansVersion: CDKANS_VERSION,
  cdktfVersion: CDKTF_VERSION,
  cdk8sVersion: CDK8S_VERSION,
  cdk8sPlusVersion: CDK8S_PLUS_VERSION,
  cdk8sCliVersion: CDK8S_CLI_VERSION,
  k8sMinorVersion: K8S_MINOR_VERSION,
};

// Construct Libraries

// aws cdk constructs
const awsCdkConstructs = new AwsCdkConstructLibrary({
  ...subprojectProps,
  name: "cdk-constructs",
  outdir: "constructs/aws-cdk",
  devDeps: ["@types/jest"],
  testdir: "",
});

const cdktfConstructs = new TypeScriptProject({
  ...subprojectProps,
  name: "cdktf-constructs",
  outdir: "constructs/cdktf",
  deps: [`cdktf@^${CDKTF_VERSION}`, `constructs@^${CONSTRUCTS_VERSION}`],
  devDeps: [
    `cdktf-cli@^${CDKTF_VERSION}`,
    `constructs@^${CONSTRUCTS_VERSION}`,
    "@types/jest",
  ],
  gitignore: ["src/gen"],
  testdir: "",
});
cdktfConstructs.preCompileTask.exec("cdktf get");

// cdk8s constructs
const cdk8sConstructs = new ConstructLibraryCdk8s({
  ...subprojectProps,
  name: "cdk8s-constructs",
  outdir: "constructs/cdk8s",
  deps: [`cdk8s-plus-27@^${CDK8S_PLUS_VERSION}`],
  testdir: "",
});

new TypeScriptProject({
  ...subprojectProps,
  name: "projen-constructs",
  outdir: "constructs/projen",
  deps: ["projen", "semver", "uuid"],
  devDeps: ["@types/semver", "@types/uuid", "@types/jest"],
  testdir: "",
});

// Projects

// notifiers
new AwsCdkTypeScriptApp({
  ...subprojectProps,
  name: "notifiers",
  outdir: "infrastructure/notifiers",
  deps: [
    "@awlsring/cdk-aws-discord-notifiers",
    "source-map-support",
    awsCdkConstructs.package.packageName,
  ],
});

// storage
new CdkTfTypescriptApp({
  ...subprojectProps,
  name: "storage",
  outdir: "infrastructure/storage",
  codeMakerOutput: "src/gen",
  terraformProviders: [
    {
      name: "b2",
      source: "backblaze/b2",
      version: "0.8.4",
    },
    {
      name: "truenas",
      source: "dariusbakunas/truenas",
      version: "0.11.0",
    },
  ],
  deps: [cdktfConstructs.package.packageName],
  gitignore: ["src/gen"],
});

// new CdkAnsApp({
//   ...subprojectProps,
//   name: "cluster",
//   outdir: "infrastructure/cluster",
//   imports: [
//     {
//       type: ImportType.MODULE,
//       namespace: "ansible.builtin",
//       source: {
//         repo: "https://github.com/ansible/ansible.git",
//       },
//     },
//     {
//       type: ImportType.MODULE,
//       namespace: "ansible.posix",
//       source: {
//         repo: "https://github.com/ansible-collections/ansible.posix.git",
//       },
//     },
//   ],
// });

// Charts
new Cdk8sTypeScriptApp({
  ...subprojectProps,
  outdir: "charts/system",
  name: "system-charts",
  deps: [cdk8sConstructs.package.packageName],
});

new Cdk8sTypeScriptApp({
  ...subprojectProps,
  outdir: "charts/platform",
  name: "platform-charts",
  deps: [cdk8sConstructs.package.packageName],
});

new Cdk8sTypeScriptApp({
  ...subprojectProps,
  outdir: "charts/applications",
  name: "app-charts",
  deps: [cdk8sConstructs.package.packageName],
});

new Project({
  ...subprojectProps,
  outdir: "manifests",
  name: "manifests",
});

monorepo.synth();
