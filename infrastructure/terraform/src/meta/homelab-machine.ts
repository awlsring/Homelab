import * as yaml from 'js-yaml';
import * as fs from 'fs';

export interface HomelabMachineCpu {
  readonly cores: number;
  readonly brand: string;
}

export interface HomelabMachineNic {
  readonly type: string;
  readonly ports: number;
  readonly speed: string;
}

export interface HomelabMachineDisk {
  readonly brand: string;
  readonly size: string;
}

export interface HomelabMachine {
  readonly name: string;
  readonly roles: string[];
  readonly networks: string[];
  readonly cpus: HomelabMachineCpu[];
  readonly memory: string;
  readonly nics: HomelabMachineNic[];
  readonly disks: Map<string, HomelabMachineDisk>;
}

export interface HomelabMachineFile {
  readonly machines: HomelabMachine[];
}

export function ReadMachinesFromYAML(path: string): HomelabMachine[] {
  const file = fs.readFileSync(path, 'utf8');
  const data = yaml.load(file) as HomelabMachineFile;
  return data.machines;
}