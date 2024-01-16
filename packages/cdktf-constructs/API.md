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

### HomelabStackProps <a name="HomelabStackProps" id="cdktf-constructs.HomelabStackProps"></a>

#### Initializer <a name="Initializer" id="cdktf-constructs.HomelabStackProps.Initializer"></a>

```typescript
import { HomelabStackProps } from 'cdktf-constructs'

const homelabStackProps: HomelabStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.HomelabStackProps.property.backend">backend</a></code> | <code><a href="#cdktf-constructs.BackendProps">BackendProps</a></code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStackProps.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-constructs.HomelabStackProps.property.secretProviderFactory">secretProviderFactory</a></code> | <code><a href="#cdktf-constructs.ISecretProviderFactory">ISecretProviderFactory</a></code> | *No description.* |

---

##### `backend`<sup>Required</sup> <a name="backend" id="cdktf-constructs.HomelabStackProps.property.backend"></a>

```typescript
public readonly backend: BackendProps;
```

- *Type:* <a href="#cdktf-constructs.BackendProps">BackendProps</a>

---

##### `project`<sup>Required</sup> <a name="project" id="cdktf-constructs.HomelabStackProps.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `secretProviderFactory`<sup>Optional</sup> <a name="secretProviderFactory" id="cdktf-constructs.HomelabStackProps.property.secretProviderFactory"></a>

```typescript
public readonly secretProviderFactory: ISecretProviderFactory;
```

- *Type:* <a href="#cdktf-constructs.ISecretProviderFactory">ISecretProviderFactory</a>

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

### OnepasswordSecretProviderFactory <a name="OnepasswordSecretProviderFactory" id="cdktf-constructs.OnepasswordSecretProviderFactory"></a>

- *Implements:* <a href="#cdktf-constructs.ISecretProviderFactory">ISecretProviderFactory</a>

#### Initializers <a name="Initializers" id="cdktf-constructs.OnepasswordSecretProviderFactory.Initializer"></a>

```typescript
import { OnepasswordSecretProviderFactory } from 'cdktf-constructs'

new OnepasswordSecretProviderFactory(props: OnepasswordSecretProviderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-constructs.OnepasswordSecretProviderFactory.Initializer.parameter.props">props</a></code> | <code><a href="#cdktf-constructs.OnepasswordSecretProviderProps">OnepasswordSecretProviderProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdktf-constructs.OnepasswordSecretProviderFactory.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktf-constructs.OnepasswordSecretProviderProps">OnepasswordSecretProviderProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-constructs.OnepasswordSecretProviderFactory.createSecretProvider">createSecretProvider</a></code> | *No description.* |

---

##### `createSecretProvider` <a name="createSecretProvider" id="cdktf-constructs.OnepasswordSecretProviderFactory.createSecretProvider"></a>

```typescript
public createSecretProvider(scope: Construct, name: string): ISecretProvider
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-constructs.OnepasswordSecretProviderFactory.createSecretProvider.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `name`<sup>Required</sup> <a name="name" id="cdktf-constructs.OnepasswordSecretProviderFactory.createSecretProvider.parameter.name"></a>

- *Type:* string

---




## Protocols <a name="Protocols" id="Protocols"></a>

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


### ISecretProviderFactory <a name="ISecretProviderFactory" id="cdktf-constructs.ISecretProviderFactory"></a>

- *Implemented By:* <a href="#cdktf-constructs.OnepasswordSecretProviderFactory">OnepasswordSecretProviderFactory</a>, <a href="#cdktf-constructs.ISecretProviderFactory">ISecretProviderFactory</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-constructs.ISecretProviderFactory.createSecretProvider">createSecretProvider</a></code> | *No description.* |

---

##### `createSecretProvider` <a name="createSecretProvider" id="cdktf-constructs.ISecretProviderFactory.createSecretProvider"></a>

```typescript
public createSecretProvider(scope: Construct, name: string): ISecretProvider
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-constructs.ISecretProviderFactory.createSecretProvider.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `name`<sup>Required</sup> <a name="name" id="cdktf-constructs.ISecretProviderFactory.createSecretProvider.parameter.name"></a>

- *Type:* string

---


