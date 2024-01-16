export interface SecretReference {
  readonly name: string;
  readonly key?: string;
  readonly namespace?: string;
}
