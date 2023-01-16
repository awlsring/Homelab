import { Construct } from "constructs";
import { TruenasProvider } from "../../.gen/providers/truenas/provider";
import { Dataset } from "../../.gen/providers/truenas/dataset";
import { HomelabStack, HomelabStackProps } from "../constructs/homelab-stack";

export interface DatastoreStackProps extends HomelabStackProps {
  url: string;
  key: string;
}

export class DataStoreStack extends HomelabStack {
  private wd6d8tPool = "WD-6D-8T"
  constructor(scope: Construct, name: string, props: DatastoreStackProps) {
    super(scope, name, props);

    new TruenasProvider(this, "provider", {
      baseUrl: props.url,
      apiKey: props.key,
    })

    new Dataset(this, "dataset", {
      pool: this.wd6d8tPool,
      name: "s3",
      comments: "S3 bucket storage",
    })

    new Dataset(this, "dataset-appdata", {
      pool: this.wd6d8tPool,
      name: "appdata",
      comments: "Dataset for app data",
    })

    new Dataset(this, "dataset-home", {
      pool: this.wd6d8tPool,
      name: "home",
      comments: "Home drirectory roots",
    })
  }
}