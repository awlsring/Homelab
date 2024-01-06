import { MonorepoTsProject } from "@aws/pdk/monorepo";
import { AwsCdkConstructLibrary, AwsCdkTypeScriptApp } from "projen/lib/awscdk";
import { Cdk8sTypeScriptApp, ConstructLibraryCdk8s } from "projen/lib/cdk8s";
import { ConstructLibraryCdktf } from "projen/lib/cdktf";
import { GithubCredentials } from "projen/lib/github";
import { NodePackageManager } from "projen/lib/javascript";
import { TypeScriptAppProject } from "projen/lib/typescript";

// Metadata
const AUTHOR = "awlsring";
const AUTHOR_CONTACT = "contact@matthewrawlings.com";
const REPOSITORY_URL = "github.com/awlsring/Homelab";
const REPOSITORY = "github:awlsring/Homelab";

// CDK Versioning
const CONSTRUCTS_VERSION = "10.3.0";
const AWS_CDK_VERSION = "2.118.0";
const CDKTF_VERSION = "0.19.2";
const CDK8S_VERSION = "2.68.23";
const CDK8S_CLI_VERSION = "2.198.27";
const CDK8S_PLUS_VERSION = "2.7.70";
const K8S_MINOR_VERSION = 27;

// common props for all projects
const projectCommonProps = {
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
  parent: monorepo,
  constructsVersion: CONSTRUCTS_VERSION,
  cdkVersion: AWS_CDK_VERSION,
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
});

// cdktf constructs
const cdktfConstructs = new ConstructLibraryCdktf({
  ...subprojectProps,
  name: "cdktf-constructs",
  outdir: "constructs/cdktf",
});

// cdk8s constructs
const cdk8sConstructs = new ConstructLibraryCdk8s({
  ...subprojectProps,
  name: "cdk8s-constructs",
  outdir: "constructs/cdk8s",
});

// Projects

// notifiers
new AwsCdkTypeScriptApp({
  ...subprojectProps,
  name: "notifiers",
  outdir: "infrastructure/notifiers",
  devDeps: [awsCdkConstructs.package.packageName],
});

// storage
new TypeScriptAppProject({
  ...subprojectProps,
  name: "storage",
  outdir: "infrastructure/storage",
  devDeps: [cdktfConstructs.package.packageName],
});

// dev manifests
new Cdk8sTypeScriptApp({
  ...subprojectProps,
  outdir: "infrastructure/manifests/dev",
  name: "dev-cluster",
  devDeps: [cdk8sConstructs.package.packageName],
});

// prod manifests
new Cdk8sTypeScriptApp({
  ...subprojectProps,
  outdir: "infrastructure/manifests/prod",
  name: "prod-cluster",
  devDeps: [cdk8sConstructs.package.packageName],
});

monorepo.synth();
