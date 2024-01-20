# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HomelabStack <a name="HomelabStack" id="cdktf-constructs.HomelabStack"></a>

#### Initializers <a name="Initializers" id="cdktf-constructs.HomelabStack.Initializer"></a>

```typescript
import { HomelabStack } from 'cdktf-constructs'

new HomelabStack(scope: Construct, name: string, props: HomelabStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.HomelabStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.Initializer.parameter.props">props</a></code> | <code><a href="#cdktf-constructs.HomelabStackProps">HomelabStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-constructs.HomelabStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdktf-constructs.HomelabStack.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktf-constructs.HomelabStack.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktf-constructs.HomelabStackProps">HomelabStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-constructs.HomelabStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-constructs.HomelabStack.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#cdktf-constructs.HomelabStack.toTerraform">toTerraform</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-constructs.HomelabStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdktf-constructs.HomelabStack.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="cdktf-constructs.HomelabStack.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="cdktf-constructs.HomelabStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-constructs.HomelabStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-constructs.HomelabStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="cdktf-constructs.HomelabStack.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="cdktf-constructs.HomelabStack.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="cdktf-constructs.HomelabStack.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="cdktf-constructs.HomelabStack.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="cdktf-constructs.HomelabStack.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: Node | TerraformElement): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="cdktf-constructs.HomelabStack.getLogicalId.parameter.tfElement"></a>

- *Type:* constructs.Node | cdktf.TerraformElement

---

##### `hasResourceMove` <a name="hasResourceMove" id="cdktf-constructs.HomelabStack.hasResourceMove"></a>

```typescript
public hasResourceMove(): boolean
```

##### `prepareStack` <a name="prepareStack" id="cdktf-constructs.HomelabStack.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="cdktf-constructs.HomelabStack.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="cdktf-constructs.HomelabStack.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="cdktf-constructs.HomelabStack.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="cdktf-constructs.HomelabStack.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="cdktf-constructs.HomelabStack.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toTerraform` <a name="toTerraform" id="cdktf-constructs.HomelabStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-constructs.HomelabStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-constructs.HomelabStack.isStack">isStack</a></code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-constructs.HomelabStack.isConstruct"></a>

```typescript
import { HomelabStack } from 'cdktf-constructs'

HomelabStack.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-constructs.HomelabStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="cdktf-constructs.HomelabStack.isStack"></a>

```typescript
import { HomelabStack } from 'cdktf-constructs'

HomelabStack.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-constructs.HomelabStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdktf-constructs.HomelabStack.of"></a>

```typescript
import { HomelabStack } from 'cdktf-constructs'

HomelabStack.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="cdktf-constructs.HomelabStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.HomelabStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-constructs.HomelabStack.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.property.moveTargets">moveTargets</a></code> | <code>cdktf.TerraformResourceTargets</code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.property.backend">backend</a></code> | <code>cdktf.TerraformBackend</code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStack.property.secretProvider">secretProvider</a></code> | <code><a href="#cdktf-constructs.ISecretProvider">ISecretProvider</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-constructs.HomelabStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdktf-constructs.HomelabStack.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `moveTargets`<sup>Required</sup> <a name="moveTargets" id="cdktf-constructs.HomelabStack.property.moveTargets"></a>

```typescript
public readonly moveTargets: TerraformResourceTargets;
```

- *Type:* cdktf.TerraformResourceTargets

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="cdktf-constructs.HomelabStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `backend`<sup>Required</sup> <a name="backend" id="cdktf-constructs.HomelabStack.property.backend"></a>

```typescript
public readonly backend: TerraformBackend;
```

- *Type:* cdktf.TerraformBackend

---

##### `secretProvider`<sup>Optional</sup> <a name="secretProvider" id="cdktf-constructs.HomelabStack.property.secretProvider"></a>

```typescript
public readonly secretProvider: ISecretProvider;
```

- *Type:* <a href="#cdktf-constructs.ISecretProvider">ISecretProvider</a>

---


### OnepasswordSecretProvider <a name="OnepasswordSecretProvider" id="cdktf-constructs.OnepasswordSecretProvider"></a>

- *Implements:* <a href="#cdktf-constructs.ISecretProvider">ISecretProvider</a>

#### Initializers <a name="Initializers" id="cdktf-constructs.OnepasswordSecretProvider.Initializer"></a>

```typescript
import { OnepasswordSecretProvider } from 'cdktf-constructs'

new OnepasswordSecretProvider(scope: Construct, name: string, props: OnepasswordSecretProviderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.OnepasswordSecretProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-constructs.OnepasswordSecretProvider.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.OnepasswordSecretProvider.Initializer.parameter.props">props</a></code> | <code><a href="#cdktf-constructs.OnepasswordSecretProviderProps">OnepasswordSecretProviderProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-constructs.OnepasswordSecretProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdktf-constructs.OnepasswordSecretProvider.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktf-constructs.OnepasswordSecretProvider.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktf-constructs.OnepasswordSecretProviderProps">OnepasswordSecretProviderProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-constructs.OnepasswordSecretProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-constructs.OnepasswordSecretProvider.retrieveSecret">retrieveSecret</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-constructs.OnepasswordSecretProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveSecret` <a name="retrieveSecret" id="cdktf-constructs.OnepasswordSecretProvider.retrieveSecret"></a>

```typescript
public retrieveSecret(name: string): Secret
```

###### `name`<sup>Required</sup> <a name="name" id="cdktf-constructs.OnepasswordSecretProvider.retrieveSecret.parameter.name"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-constructs.OnepasswordSecretProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-constructs.OnepasswordSecretProvider.isConstruct"></a>

```typescript
import { OnepasswordSecretProvider } from 'cdktf-constructs'

OnepasswordSecretProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-constructs.OnepasswordSecretProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.OnepasswordSecretProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-constructs.OnepasswordSecretProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### BackendProps <a name="BackendProps" id="cdktf-constructs.BackendProps"></a>

#### Initializer <a name="Initializer" id="cdktf-constructs.BackendProps.Initializer"></a>

```typescript
import { BackendProps } from 'cdktf-constructs'

const backendProps: BackendProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.BackendProps.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.BackendProps.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.BackendProps.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `address`<sup>Required</sup> <a name="address" id="cdktf-constructs.BackendProps.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="cdktf-constructs.BackendProps.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="cdktf-constructs.BackendProps.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

### CloudBackendProps <a name="CloudBackendProps" id="cdktf-constructs.CloudBackendProps"></a>

#### Initializer <a name="Initializer" id="cdktf-constructs.CloudBackendProps.Initializer"></a>

```typescript
import { CloudBackendProps } from 'cdktf-constructs'

const cloudBackendProps: CloudBackendProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.CloudBackendProps.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.CloudBackendProps.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.CloudBackendProps.property.workspace">workspace</a></code> | <code>cdktf.NamedCloudWorkspace \| cdktf.TaggedCloudWorkspaces</code> | *No description.* |
| <code><a href="#cdktf-constructs.CloudBackendProps.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="cdktf-constructs.CloudBackendProps.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="cdktf-constructs.CloudBackendProps.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="cdktf-constructs.CloudBackendProps.property.workspace"></a>

```typescript
public readonly workspace: NamedCloudWorkspace | TaggedCloudWorkspaces;
```

- *Type:* cdktf.NamedCloudWorkspace | cdktf.TaggedCloudWorkspaces

---

##### `token`<sup>Optional</sup> <a name="token" id="cdktf-constructs.CloudBackendProps.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

### HomelabStackProps <a name="HomelabStackProps" id="cdktf-constructs.HomelabStackProps"></a>

#### Initializer <a name="Initializer" id="cdktf-constructs.HomelabStackProps.Initializer"></a>

```typescript
import { HomelabStackProps } from 'cdktf-constructs'

const homelabStackProps: HomelabStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.HomelabStackProps.property.backendCreator">backendCreator</a></code> | <code><a href="#cdktf-constructs.IBackendCreator">IBackendCreator</a></code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStackProps.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStackProps.property.secretProviderCreator">secretProviderCreator</a></code> | <code><a href="#cdktf-constructs.ISecretProviderCreator">ISecretProviderCreator</a></code> | *No description.* |

---

##### `backendCreator`<sup>Required</sup> <a name="backendCreator" id="cdktf-constructs.HomelabStackProps.property.backendCreator"></a>

```typescript
public readonly backendCreator: IBackendCreator;
```

- *Type:* <a href="#cdktf-constructs.IBackendCreator">IBackendCreator</a>

---

##### `project`<sup>Required</sup> <a name="project" id="cdktf-constructs.HomelabStackProps.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `secretProviderCreator`<sup>Optional</sup> <a name="secretProviderCreator" id="cdktf-constructs.HomelabStackProps.property.secretProviderCreator"></a>

```typescript
public readonly secretProviderCreator: ISecretProviderCreator;
```

- *Type:* <a href="#cdktf-constructs.ISecretProviderCreator">ISecretProviderCreator</a>

---

### LocalBackendProps <a name="LocalBackendProps" id="cdktf-constructs.LocalBackendProps"></a>

#### Initializer <a name="Initializer" id="cdktf-constructs.LocalBackendProps.Initializer"></a>

```typescript
import { LocalBackendProps } from 'cdktf-constructs'

const localBackendProps: LocalBackendProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.LocalBackendProps.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.LocalBackendProps.property.workspaceDir">workspaceDir</a></code> | <code>string</code> | *No description.* |

---

##### `path`<sup>Optional</sup> <a name="path" id="cdktf-constructs.LocalBackendProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `workspaceDir`<sup>Optional</sup> <a name="workspaceDir" id="cdktf-constructs.LocalBackendProps.property.workspaceDir"></a>

```typescript
public readonly workspaceDir: string;
```

- *Type:* string

---

### OnepasswordSecretProviderProps <a name="OnepasswordSecretProviderProps" id="cdktf-constructs.OnepasswordSecretProviderProps"></a>

#### Initializer <a name="Initializer" id="cdktf-constructs.OnepasswordSecretProviderProps.Initializer"></a>

```typescript
import { OnepasswordSecretProviderProps } from 'cdktf-constructs'

const onepasswordSecretProviderProps: OnepasswordSecretProviderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.OnepasswordSecretProviderProps.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.OnepasswordSecretProviderProps.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.OnepasswordSecretProviderProps.property.vault">vault</a></code> | <code>string</code> | *No description.* |

---

##### `token`<sup>Required</sup> <a name="token" id="cdktf-constructs.OnepasswordSecretProviderProps.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="cdktf-constructs.OnepasswordSecretProviderProps.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `vault`<sup>Required</sup> <a name="vault" id="cdktf-constructs.OnepasswordSecretProviderProps.property.vault"></a>

```typescript
public readonly vault: string;
```

- *Type:* string

---

### PostgresBackendProps <a name="PostgresBackendProps" id="cdktf-constructs.PostgresBackendProps"></a>

#### Initializer <a name="Initializer" id="cdktf-constructs.PostgresBackendProps.Initializer"></a>

```typescript
import { PostgresBackendProps } from 'cdktf-constructs'

const postgresBackendProps: PostgresBackendProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.PostgresBackendProps.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.PostgresBackendProps.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.PostgresBackendProps.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.PostgresBackendProps.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `address`<sup>Required</sup> <a name="address" id="cdktf-constructs.PostgresBackendProps.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="cdktf-constructs.PostgresBackendProps.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="cdktf-constructs.PostgresBackendProps.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="cdktf-constructs.PostgresBackendProps.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

### RemoteBackendProps <a name="RemoteBackendProps" id="cdktf-constructs.RemoteBackendProps"></a>

#### Initializer <a name="Initializer" id="cdktf-constructs.RemoteBackendProps.Initializer"></a>

```typescript
import { RemoteBackendProps } from 'cdktf-constructs'

const remoteBackendProps: RemoteBackendProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.RemoteBackendProps.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.RemoteBackendProps.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.RemoteBackendProps.property.workspace">workspace</a></code> | <code>cdktf.NamedCloudWorkspace \| cdktf.TaggedCloudWorkspaces</code> | *No description.* |
| <code><a href="#cdktf-constructs.RemoteBackendProps.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="cdktf-constructs.RemoteBackendProps.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="cdktf-constructs.RemoteBackendProps.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="cdktf-constructs.RemoteBackendProps.property.workspace"></a>

```typescript
public readonly workspace: NamedCloudWorkspace | TaggedCloudWorkspaces;
```

- *Type:* cdktf.NamedCloudWorkspace | cdktf.TaggedCloudWorkspaces

---

##### `token`<sup>Optional</sup> <a name="token" id="cdktf-constructs.RemoteBackendProps.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

### Secret <a name="Secret" id="cdktf-constructs.Secret"></a>

#### Initializer <a name="Initializer" id="cdktf-constructs.Secret.Initializer"></a>

```typescript
import { Secret } from 'cdktf-constructs'

const secret: Secret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.Secret.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.Secret.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="cdktf-constructs.Secret.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cdktf-constructs.Secret.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBackendCreator <a name="CloudBackendCreator" id="cdktf-constructs.CloudBackendCreator"></a>

- *Implements:* <a href="#cdktf-constructs.IBackendCreator">IBackendCreator</a>

#### Initializers <a name="Initializers" id="cdktf-constructs.CloudBackendCreator.Initializer"></a>

```typescript
import { CloudBackendCreator } from 'cdktf-constructs'

new CloudBackendCreator(props: CloudBackendProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.CloudBackendCreator.Initializer.parameter.props">props</a></code> | <code><a href="#cdktf-constructs.CloudBackendProps">CloudBackendProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdktf-constructs.CloudBackendCreator.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktf-constructs.CloudBackendProps">CloudBackendProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-constructs.CloudBackendCreator.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="cdktf-constructs.CloudBackendCreator.create"></a>

```typescript
public create(scope: Construct): TerraformBackend
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-constructs.CloudBackendCreator.create.parameter.scope"></a>

- *Type:* constructs.Construct

---




### LocalBackendCreator <a name="LocalBackendCreator" id="cdktf-constructs.LocalBackendCreator"></a>

- *Implements:* <a href="#cdktf-constructs.IBackendCreator">IBackendCreator</a>

#### Initializers <a name="Initializers" id="cdktf-constructs.LocalBackendCreator.Initializer"></a>

```typescript
import { LocalBackendCreator } from 'cdktf-constructs'

new LocalBackendCreator(props?: LocalBackendProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.LocalBackendCreator.Initializer.parameter.props">props</a></code> | <code><a href="#cdktf-constructs.LocalBackendProps">LocalBackendProps</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="cdktf-constructs.LocalBackendCreator.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktf-constructs.LocalBackendProps">LocalBackendProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-constructs.LocalBackendCreator.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="cdktf-constructs.LocalBackendCreator.create"></a>

```typescript
public create(scope: Construct): TerraformBackend
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-constructs.LocalBackendCreator.create.parameter.scope"></a>

- *Type:* constructs.Construct

---




### OnepasswordSecretProviderCreator <a name="OnepasswordSecretProviderCreator" id="cdktf-constructs.OnepasswordSecretProviderCreator"></a>

- *Implements:* <a href="#cdktf-constructs.ISecretProviderCreator">ISecretProviderCreator</a>

#### Initializers <a name="Initializers" id="cdktf-constructs.OnepasswordSecretProviderCreator.Initializer"></a>

```typescript
import { OnepasswordSecretProviderCreator } from 'cdktf-constructs'

new OnepasswordSecretProviderCreator(props: OnepasswordSecretProviderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.OnepasswordSecretProviderCreator.Initializer.parameter.props">props</a></code> | <code><a href="#cdktf-constructs.OnepasswordSecretProviderProps">OnepasswordSecretProviderProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdktf-constructs.OnepasswordSecretProviderCreator.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktf-constructs.OnepasswordSecretProviderProps">OnepasswordSecretProviderProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-constructs.OnepasswordSecretProviderCreator.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="cdktf-constructs.OnepasswordSecretProviderCreator.create"></a>

```typescript
public create(scope: Construct, name: string): ISecretProvider
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-constructs.OnepasswordSecretProviderCreator.create.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `name`<sup>Required</sup> <a name="name" id="cdktf-constructs.OnepasswordSecretProviderCreator.create.parameter.name"></a>

- *Type:* string

---




### PostgresBackendCreator <a name="PostgresBackendCreator" id="cdktf-constructs.PostgresBackendCreator"></a>

- *Implements:* <a href="#cdktf-constructs.IBackendCreator">IBackendCreator</a>

#### Initializers <a name="Initializers" id="cdktf-constructs.PostgresBackendCreator.Initializer"></a>

```typescript
import { PostgresBackendCreator } from 'cdktf-constructs'

new PostgresBackendCreator(props: PostgresBackendProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.PostgresBackendCreator.Initializer.parameter.props">props</a></code> | <code><a href="#cdktf-constructs.PostgresBackendProps">PostgresBackendProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdktf-constructs.PostgresBackendCreator.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktf-constructs.PostgresBackendProps">PostgresBackendProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-constructs.PostgresBackendCreator.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="cdktf-constructs.PostgresBackendCreator.create"></a>

```typescript
public create(scope: Construct): TerraformBackend
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-constructs.PostgresBackendCreator.create.parameter.scope"></a>

- *Type:* constructs.Construct

---




### RemoteBackendCreator <a name="RemoteBackendCreator" id="cdktf-constructs.RemoteBackendCreator"></a>

- *Implements:* <a href="#cdktf-constructs.IBackendCreator">IBackendCreator</a>

#### Initializers <a name="Initializers" id="cdktf-constructs.RemoteBackendCreator.Initializer"></a>

```typescript
import { RemoteBackendCreator } from 'cdktf-constructs'

new RemoteBackendCreator(props: RemoteBackendProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.RemoteBackendCreator.Initializer.parameter.props">props</a></code> | <code><a href="#cdktf-constructs.RemoteBackendProps">RemoteBackendProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdktf-constructs.RemoteBackendCreator.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktf-constructs.RemoteBackendProps">RemoteBackendProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-constructs.RemoteBackendCreator.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="cdktf-constructs.RemoteBackendCreator.create"></a>

```typescript
public create(scope: Construct): TerraformBackend
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-constructs.RemoteBackendCreator.create.parameter.scope"></a>

- *Type:* constructs.Construct

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IBackendCreator <a name="IBackendCreator" id="cdktf-constructs.IBackendCreator"></a>

- *Implemented By:* <a href="#cdktf-constructs.CloudBackendCreator">CloudBackendCreator</a>, <a href="#cdktf-constructs.LocalBackendCreator">LocalBackendCreator</a>, <a href="#cdktf-constructs.PostgresBackendCreator">PostgresBackendCreator</a>, <a href="#cdktf-constructs.RemoteBackendCreator">RemoteBackendCreator</a>, <a href="#cdktf-constructs.IBackendCreator">IBackendCreator</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-constructs.IBackendCreator.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="cdktf-constructs.IBackendCreator.create"></a>

```typescript
public create(scope: Construct): TerraformBackend
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-constructs.IBackendCreator.create.parameter.scope"></a>

- *Type:* constructs.Construct

---


### ISecretProvider <a name="ISecretProvider" id="cdktf-constructs.ISecretProvider"></a>

- *Implemented By:* <a href="#cdktf-constructs.OnepasswordSecretProvider">OnepasswordSecretProvider</a>, <a href="#cdktf-constructs.ISecretProvider">ISecretProvider</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-constructs.ISecretProvider.retrieveSecret">retrieveSecret</a></code> | *No description.* |

---

##### `retrieveSecret` <a name="retrieveSecret" id="cdktf-constructs.ISecretProvider.retrieveSecret"></a>

```typescript
public retrieveSecret(name: string): Secret
```

###### `name`<sup>Required</sup> <a name="name" id="cdktf-constructs.ISecretProvider.retrieveSecret.parameter.name"></a>

- *Type:* string

---


### ISecretProviderCreator <a name="ISecretProviderCreator" id="cdktf-constructs.ISecretProviderCreator"></a>

- *Implemented By:* <a href="#cdktf-constructs.OnepasswordSecretProviderCreator">OnepasswordSecretProviderCreator</a>, <a href="#cdktf-constructs.ISecretProviderCreator">ISecretProviderCreator</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-constructs.ISecretProviderCreator.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="cdktf-constructs.ISecretProviderCreator.create"></a>

```typescript
public create(scope: Construct, name: string): ISecretProvider
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-constructs.ISecretProviderCreator.create.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `name`<sup>Required</sup> <a name="name" id="cdktf-constructs.ISecretProviderCreator.create.parameter.name"></a>

- *Type:* string

---


