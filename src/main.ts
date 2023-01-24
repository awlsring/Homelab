import { App as CDK8S } from 'cdk8s';
import { App as CDKTF } from 'cdktf';
import { FormInfraStacks } from './infrastructure/form-infra';
// import { Construct } from 'constructs';
let mode = process.argv.slice(2)[0];

console.log(`mode: ${mode}`);

switch (mode) {
  case 'cdktf':
    const cdktf = new CDKTF();
    FormInfraStacks(cdktf);
    cdktf.synth();
    break;
  case 'cdk8s':
    const cdk8s = new CDK8S();
    cdk8s.synth();
    break;
  default:
    console.log('No mode specified');
}