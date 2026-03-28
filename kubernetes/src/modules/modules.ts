import { App } from "cdk8s";
import {
  Configuration,
} from "../config/configuration";

export abstract class Module {
  constructor(
    readonly app: App,
    readonly config: Configuration
  ) {}
}
