export class Label {
  constructor(readonly key: string, readonly value: string) {}

  public toRecord(): Record<string, string> {
    return {
      [this.key]: this.value,
    };
  }

  public toKeyValue(): [string, string] {
    return [this.key, this.value];
  }
}