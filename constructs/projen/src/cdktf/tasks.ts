import { Component, Project, Task } from "projen";

/**
 * Adds standard CDKTF tasks to your project.
 */
export class CdkTfTasks extends Component {
  /**
   * Gets modules.
   */
  public readonly get: Task;

  /**
   * Synthesizes your app.
   */
  public readonly synth: Task;

  /**
   * Deploys your app.
   */
  public readonly deploy: Task;

  /**
   * Destroys all the stacks.
   */
  public readonly destroy: Task;

  constructor(project: Project) {
    super(project);

    this.get = project.addTask("get", {
      description: "Get terraform modules",
      exec: "cdktf get",
    });

    this.synth = project.addTask("synth", {
      description: "Synthesizes your cdk app into cdktf.out",
      exec: "cdktf synth",
    });

    this.deploy = project.addTask("deploy", {
      description: "Deploys the cdktf app",
      exec: "cdktf deploy",
      receiveArgs: true,
    });

    this.destroy = project.addTask("destroy", {
      description: "Destroys the cdktf app",
      exec: "cdktf destroy",
      receiveArgs: true,
    });
  }
}
