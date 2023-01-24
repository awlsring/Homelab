import * as yaml from 'js-yaml';
import * as fs from 'fs';

export interface ClusterNodePlan {
  readonly name: string;
  readonly bridge: string;
  readonly controlNodes: number;
  readonly workerNodes: number;
  readonly template: string;
  readonly pool: string;
}

export interface ClusterNodeFile {
  readonly nodes: ClusterNodePlan[];
}

export function ReadNodesFromYAML(path: string): ClusterNodePlan[] {
  const file = fs.readFileSync(path, 'utf8');
  const data = yaml.load(file) as ClusterNodeFile;
  return data.nodes;
}