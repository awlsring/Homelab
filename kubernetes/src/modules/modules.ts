import { App } from "cdk8s";
import {
  Configuration,
  loadConfigurationFromInventory,
} from "../config/configuration";

export abstract class Module {
  constructor(
    readonly app: App,
    readonly config: Configuration
  ) {
    this.config = loadConfigurationFromInventory();
  }
}
