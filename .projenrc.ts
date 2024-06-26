import * as path from "path";
import { MonorepoTsProject } from "@aws/pdk/monorepo";
import { AwsCdkConstructLibrary, AwsCdkTypeScriptApp } from "projen/lib/awscdk";
import { Cdk8sTypeScriptApp, ConstructLibraryCdk8s } from "projen/lib/cdk8s";
import { ConstructLibraryCdktf } from "projen/lib/cdktf";
import { GithubCredentials } from "projen/lib/github";
import { NodePackageManager } from "projen/lib/javascript";
import { TypeScriptProject } from "projen/lib/typescript";
import { CdkTfTypescriptApp } from "./packages/projects/src/cdktf/cdktf-app";

// Metadata
const AUTHOR = "awlsring";
const AUTHOR_CONTACT = "contact@matthewrawlings.com";
const REPOSITORY_URL = "github.com/awlsring/Homelab";
const REPOSITORY = "github:awlsring/Homelab";

// CDK Versioning
const CONSTRUCTS_VERSION = "10.3.0";
const AWS_CDK_VERSION = "2.118.0";
const CDKANS_VERSION = "0.0.0";
const CDKTF_VERSION = "0.20.1";
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
  outdir: "packages/aws-cdk-constructs",
  devDeps: ["@types/jest"],
  testdir: "",
});

// cdktf constructs
const cdktfConstructs = new ConstructLibraryCdktf({
  ...subprojectProps,
  name: "cdktf-constructs",
  outdir: "packages/cdktf-constructs",
  gitignore: ["src/gen"],
  testdir: "",
});
cdktfConstructs.preCompileTask.exec("cdktf get");

// Like CDK8s plus, minus versions
const cdk8sPlusMinus = new ConstructLibraryCdk8s({
  ...subprojectProps,
  name: "cdk8s-plus-minus",
  outdir: "packages/cdk8s-plus-minus",
  devDeps: [
    `cdk8s-cli@${CDK8S_CLI_VERSION}`,
    "@types/minimatch",
    "@pnpm/logger",
  ],
  peerDeps: ["cdk8s"],
  deps: ["minimatch"],
  bundledDeps: ["minimatch"],
  testdir: "",
});
const importTask = cdk8sPlusMinus.addTask("import", {
  exec: `cdk8s -l typescript -o ${path.join("src", "imports")} import k8s`,
  description: "Updates imports based on latest version of cdk8s-cli.",
});
cdk8sPlusMinus.compileTask.prependSpawn(importTask);

// cdk8s constructs
const cdk8sConstructs = new ConstructLibraryCdk8s({
  ...subprojectProps,
  name: "cdk8s-constructs",
  outdir: "packages/cdk8s-constructs",
  deps: [
    `cdk8s-plus-27@^${CDK8S_PLUS_VERSION}`,
    cdk8sPlusMinus.package.packageName,
  ],
  peerDeps: [
    `cdk8s-plus-27@^${CDK8S_PLUS_VERSION}`,
    cdk8sPlusMinus.package.packageName,
  ],
  testdir: "",
});

// cdk8s crossplane constructs
const crossplaneCdk8s = new ConstructLibraryCdk8s({
  ...subprojectProps,
  name: "cdk8s-crossplane",
  outdir: "packages/cdk8s-crossplane",
  devDeps: [`cdk8s-cli@${CDK8S_CLI_VERSION}`],
  testdir: "",
});
crossplaneCdk8s.preCompileTask.exec("scripts/make-l1.sh");

// projen projects
new TypeScriptProject({
  ...subprojectProps,
  name: "projen-projects",
  outdir: "packages/projects",
  deps: ["projen", "semver", "uuid"],
  devDeps: ["@types/semver", "@types/uuid", "@types/jest"],
  testdir: "",
});

// Projects

// aws resources
new AwsCdkTypeScriptApp({
  ...subprojectProps,
  name: "aws",
  outdir: "infrastructure/aws",
  deps: [
    "@awlsring/cdk-aws-discord-notifiers",
    awsCdkConstructs.package.packageName,
  ],
});

// terraform resources
new CdkTfTypescriptApp({
  ...subprojectProps,
  name: "terraform",
  outdir: "infrastructure/terraform",
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
    {
      name: "unifi",
      source: "paultyng/unifi",
      version: "0.41.0",
    },
  ],
  deps: [cdktfConstructs.package.packageName, "dotenv"],
  gitignore: ["src/gen", ".env"],
});

// Charts
const cluster = new Cdk8sTypeScriptApp({
  ...subprojectProps,
  outdir: "infrastructure/kubernetes",
  name: "kubernetes",
  deps: [
    cdk8sConstructs.package.packageName,
    crossplaneCdk8s.package.packageName,
    cdk8sPlusMinus.package.packageName,
  ],
});
cluster.postCompileTask.exec(
  "rm -rf charts && mkdir -p charts && cp -r dist/* charts",
);

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

monorepo.synth();
