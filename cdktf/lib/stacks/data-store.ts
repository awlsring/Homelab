import { TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { TruenasProvider } from "../../.gen/providers/truenas/provider";
import { Dataset } from "../../.gen/providers/truenas/dataset";

export interface DatastoreStackProps {
  url: string;
  key: string;
}

export class DataStoreStack extends TerraformStack {
  private wd6d8tPool = "WD-6D-8T"
  constructor(scope: Construct, name: string, props: DatastoreStackProps) {
    super(scope, name);

    new TruenasProvider(this, "provider", {
      baseUrl: props.url,
      apiKey: props.key,
    })

    new Dataset(this, "dataset", {
      pool: this.wd6d8tPool,
      name: "s3",
      comments: "S3 bucket storage",
    })
  }
}