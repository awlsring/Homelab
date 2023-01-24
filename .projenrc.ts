import { TypeScriptAppProject } from 'projen/lib/typescript';

const project = new TypeScriptAppProject({
  projenrcTs: true,
  defaultReleaseBranch: 'main',
  name: 'Homelab',
  packageName: '@awlsring/homelab',
  description: 'Monorepo for my homelab.',
  deps: [
    'aws-cdk-lib',
    'cdktf@^0.14.3',
    'constructs',
    '@awlsring/cdktf-github-actions',
    '@awlsring/cdktf-surreal-backend',
    'cdk8s',
    'cdk8s-plus-25',
    'dotenv',
  ],
  devDeps: [
    'cdk8s-cli',
    'aws-cdk',
  ],
  gitignore: [
    '.DS_Store',
    '**/*.js',
    '**/*.d.ts',
    'package-lock.json',
    'yarn.lock',
    '/test/__snapshots__/',
    'src/.gen',
    '.vscode',
    'cdktf.out',
    'terraform*',
    '.terraform*',
    'dist/',
  ],
  scripts: {
    'cdktf:get': 'cdktf get -o src/.gen',
  },
});
project.synth();