# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArrApp <a name="ArrApp" id="cdk8s-constructs.ArrApp"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.ArrApp.Initializer"></a>

```typescript
import { ArrApp } from 'cdk8s-constructs'

new ArrApp(scope: Construct, name: string, props: ArrAppProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ArrApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrApp.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrApp.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.ArrAppProps">ArrAppProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.ArrApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ArrApp.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.ArrApp.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.ArrAppProps">ArrAppProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ArrApp.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.ArrApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ArrApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.ArrApp.isConstruct"></a>

```typescript
import { ArrApp } from 'cdk8s-constructs'

ArrApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.ArrApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ArrApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.ArrApp.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrApp.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrApp.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.ArrApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.ArrApp.property.deployment"></a>

```typescript
public readonly deployment: HomelabDeployment;
```

- *Type:* <a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.ArrApp.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngress;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a>

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.ArrApp.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### Bazarr <a name="Bazarr" id="cdk8s-constructs.Bazarr"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Bazarr.Initializer"></a>

```typescript
import { Bazarr } from 'cdk8s-constructs'

new Bazarr(scope: Construct, name: string, props: BazarrAppProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Bazarr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Bazarr.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Bazarr.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.BazarrAppProps">BazarrAppProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Bazarr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Bazarr.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Bazarr.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.BazarrAppProps">BazarrAppProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Bazarr.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Bazarr.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Bazarr.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Bazarr.isConstruct"></a>

```typescript
import { Bazarr } from 'cdk8s-constructs'

Bazarr.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Bazarr.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Bazarr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Bazarr.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Bazarr.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Bazarr.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Bazarr.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.Bazarr.property.deployment"></a>

```typescript
public readonly deployment: HomelabDeployment;
```

- *Type:* <a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.Bazarr.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngress;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a>

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.Bazarr.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### BlueskyPds <a name="BlueskyPds" id="cdk8s-constructs.BlueskyPds"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.BlueskyPds.Initializer"></a>

```typescript
import { BlueskyPds } from 'cdk8s-constructs'

new BlueskyPds(scope: Construct, id: string, props: BlueskyPdsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.BlueskyPds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BlueskyPds.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BlueskyPds.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.BlueskyPdsProps">BlueskyPdsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.BlueskyPds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.BlueskyPds.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.BlueskyPds.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.BlueskyPdsProps">BlueskyPdsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.BlueskyPds.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.BlueskyPds.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.BlueskyPds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.BlueskyPds.isConstruct"></a>

```typescript
import { BlueskyPds } from 'cdk8s-constructs'

BlueskyPds.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.BlueskyPds.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.BlueskyPds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.BlueskyPds.property.deployment">deployment</a></code> | <code>cdk8s-plus-minus.Deployment</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BlueskyPds.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.BlueskyPds.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.BlueskyPds.property.deployment"></a>

```typescript
public readonly deployment: Deployment;
```

- *Type:* cdk8s-plus-minus.Deployment

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.BlueskyPds.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### CertIssuer <a name="CertIssuer" id="cdk8s-constructs.CertIssuer"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.CertIssuer.Initializer"></a>

```typescript
import { CertIssuer } from 'cdk8s-constructs'

new CertIssuer(scope: Construct, name: string, props: CertIssuerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.CertIssuer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CertIssuer.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CertIssuer.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.CertIssuerProps">CertIssuerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.CertIssuer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.CertIssuer.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.CertIssuer.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.CertIssuerProps">CertIssuerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.CertIssuer.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.CertIssuer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.CertIssuer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.CertIssuer.isConstruct"></a>

```typescript
import { CertIssuer } from 'cdk8s-constructs'

CertIssuer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.CertIssuer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.CertIssuer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.CertIssuer.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.CertIssuer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.CertIssuer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### CloudflareClusterTunnel <a name="CloudflareClusterTunnel" id="cdk8s-constructs.CloudflareClusterTunnel"></a>

- *Implements:* <a href="#cdk8s-constructs.ICloudflareTunnel">ICloudflareTunnel</a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.CloudflareClusterTunnel.Initializer"></a>

```typescript
import { CloudflareClusterTunnel } from 'cdk8s-constructs'

new CloudflareClusterTunnel(scope: Construct, name: string, props: CloudflareTunnelProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.Initializer.parameter.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.CloudflareTunnelProps">CloudflareTunnelProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.CloudflareClusterTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.CloudflareClusterTunnel.Initializer.parameter.name"></a>

- *Type:* string

The name of this API object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.CloudflareClusterTunnel.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.CloudflareTunnelProps">CloudflareTunnelProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.asApiResource">asApiResource</a></code> | Return the IApiResource this object represents. |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.asNonApiResource">asNonApiResource</a></code> | Return the non resource url this object represents. |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.bindToService">bindToService</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk8s-constructs.CloudflareClusterTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `asApiResource` <a name="asApiResource" id="cdk8s-constructs.CloudflareClusterTunnel.asApiResource"></a>

```typescript
public asApiResource(): IApiResource
```

Return the IApiResource this object represents.

##### `asNonApiResource` <a name="asNonApiResource" id="cdk8s-constructs.CloudflareClusterTunnel.asNonApiResource"></a>

```typescript
public asNonApiResource(): string
```

Return the non resource url this object represents.

##### `bindToService` <a name="bindToService" id="cdk8s-constructs.CloudflareClusterTunnel.bindToService"></a>

```typescript
public bindToService(service: Service, props?: BindToServiceProps): CloudflareTunnelBinding
```

###### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.CloudflareClusterTunnel.bindToService.parameter.service"></a>

- *Type:* cdk8s-plus-minus.Service

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk8s-constructs.CloudflareClusterTunnel.bindToService.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.BindToServiceProps">BindToServiceProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.fromExistingTunnel">fromExistingTunnel</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.CloudflareClusterTunnel.isConstruct"></a>

```typescript
import { CloudflareClusterTunnel } from 'cdk8s-constructs'

CloudflareClusterTunnel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.CloudflareClusterTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromExistingTunnel` <a name="fromExistingTunnel" id="cdk8s-constructs.CloudflareClusterTunnel.fromExistingTunnel"></a>

```typescript
import { CloudflareClusterTunnel } from 'cdk8s-constructs'

CloudflareClusterTunnel.fromExistingTunnel(scope: Construct, name: string, options: ExistingTunnelProps)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.CloudflareClusterTunnel.fromExistingTunnel.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.CloudflareClusterTunnel.fromExistingTunnel.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk8s-constructs.CloudflareClusterTunnel.fromExistingTunnel.parameter.options"></a>

- *Type:* <a href="#cdk8s-constructs.ExistingTunnelProps">ExistingTunnelProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. "authorization.k8s.io"). |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. "authorization.k8s.io/v1"). |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.property.kind">kind</a></code> | <code>string</code> | The object kind (e.g. "Deployment"). |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.property.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.property.permissions">permissions</a></code> | <code>cdk8s-plus-minus.ResourcePermissions</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.property.resourceType">resourceType</a></code> | <code>string</code> | The name of a resource type as it appears in the relevant API endpoint. |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.property.resourceName">resourceName</a></code> | <code>string</code> | The unique, namespace-global, name of an object inside the Kubernetes cluster. |
| <code><a href="#cdk8s-constructs.CloudflareClusterTunnel.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.CloudflareClusterTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.CloudflareClusterTunnel.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. "authorization.k8s.io").

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.CloudflareClusterTunnel.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. "authorization.k8s.io/v1").

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.CloudflareClusterTunnel.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind (e.g. "Deployment").

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.CloudflareClusterTunnel.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.CloudflareClusterTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this API object.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="cdk8s-constructs.CloudflareClusterTunnel.property.permissions"></a>

```typescript
public readonly permissions: ResourcePermissions;
```

- *Type:* cdk8s-plus-minus.ResourcePermissions

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk8s-constructs.CloudflareClusterTunnel.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The name of a resource type as it appears in the relevant API endpoint.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="cdk8s-constructs.CloudflareClusterTunnel.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The unique, namespace-global, name of an object inside the Kubernetes cluster.

If this is omitted, the ApiResource should represent all objects of the given type.

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="cdk8s-constructs.CloudflareClusterTunnel.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---


### CloudflareTunnel <a name="CloudflareTunnel" id="cdk8s-constructs.CloudflareTunnel"></a>

- *Implements:* <a href="#cdk8s-constructs.ICloudflareTunnel">ICloudflareTunnel</a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.CloudflareTunnel.Initializer"></a>

```typescript
import { CloudflareTunnel } from 'cdk8s-constructs'

new CloudflareTunnel(scope: Construct, name: string, props: CloudflareTunnelProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.Initializer.parameter.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.CloudflareTunnelProps">CloudflareTunnelProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.CloudflareTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.CloudflareTunnel.Initializer.parameter.name"></a>

- *Type:* string

The name of this API object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.CloudflareTunnel.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.CloudflareTunnelProps">CloudflareTunnelProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.asApiResource">asApiResource</a></code> | Return the IApiResource this object represents. |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.asNonApiResource">asNonApiResource</a></code> | Return the non resource url this object represents. |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.bindToService">bindToService</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk8s-constructs.CloudflareTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `asApiResource` <a name="asApiResource" id="cdk8s-constructs.CloudflareTunnel.asApiResource"></a>

```typescript
public asApiResource(): IApiResource
```

Return the IApiResource this object represents.

##### `asNonApiResource` <a name="asNonApiResource" id="cdk8s-constructs.CloudflareTunnel.asNonApiResource"></a>

```typescript
public asNonApiResource(): string
```

Return the non resource url this object represents.

##### `bindToService` <a name="bindToService" id="cdk8s-constructs.CloudflareTunnel.bindToService"></a>

```typescript
public bindToService(service: Service, props?: BindToServiceProps): CloudflareTunnelBinding
```

###### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.CloudflareTunnel.bindToService.parameter.service"></a>

- *Type:* cdk8s-plus-minus.Service

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk8s-constructs.CloudflareTunnel.bindToService.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.BindToServiceProps">BindToServiceProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.fromExistingTunnel">fromExistingTunnel</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.CloudflareTunnel.isConstruct"></a>

```typescript
import { CloudflareTunnel } from 'cdk8s-constructs'

CloudflareTunnel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.CloudflareTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromExistingTunnel` <a name="fromExistingTunnel" id="cdk8s-constructs.CloudflareTunnel.fromExistingTunnel"></a>

```typescript
import { CloudflareTunnel } from 'cdk8s-constructs'

CloudflareTunnel.fromExistingTunnel(scope: Construct, name: string, options: ExistingTunnelProps)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.CloudflareTunnel.fromExistingTunnel.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.CloudflareTunnel.fromExistingTunnel.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk8s-constructs.CloudflareTunnel.fromExistingTunnel.parameter.options"></a>

- *Type:* <a href="#cdk8s-constructs.ExistingTunnelProps">ExistingTunnelProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. "authorization.k8s.io"). |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. "authorization.k8s.io/v1"). |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.property.kind">kind</a></code> | <code>string</code> | The object kind (e.g. "Deployment"). |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.property.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.property.permissions">permissions</a></code> | <code>cdk8s-plus-minus.ResourcePermissions</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.property.resourceType">resourceType</a></code> | <code>string</code> | The name of a resource type as it appears in the relevant API endpoint. |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.property.resourceName">resourceName</a></code> | <code>string</code> | The unique, namespace-global, name of an object inside the Kubernetes cluster. |
| <code><a href="#cdk8s-constructs.CloudflareTunnel.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.CloudflareTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.CloudflareTunnel.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. "authorization.k8s.io").

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.CloudflareTunnel.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. "authorization.k8s.io/v1").

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.CloudflareTunnel.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind (e.g. "Deployment").

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.CloudflareTunnel.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.CloudflareTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this API object.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="cdk8s-constructs.CloudflareTunnel.property.permissions"></a>

```typescript
public readonly permissions: ResourcePermissions;
```

- *Type:* cdk8s-plus-minus.ResourcePermissions

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk8s-constructs.CloudflareTunnel.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The name of a resource type as it appears in the relevant API endpoint.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="cdk8s-constructs.CloudflareTunnel.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The unique, namespace-global, name of an object inside the Kubernetes cluster.

If this is omitted, the ApiResource should represent all objects of the given type.

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="cdk8s-constructs.CloudflareTunnel.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---


### CloudflareTunnelBinding <a name="CloudflareTunnelBinding" id="cdk8s-constructs.CloudflareTunnelBinding"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.CloudflareTunnelBinding.Initializer"></a>

```typescript
import { CloudflareTunnelBinding } from 'cdk8s-constructs'

new CloudflareTunnelBinding(scope: Construct, name: string, props: CloudflareTunnelBindingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.CloudflareTunnelBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnelBinding.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnelBinding.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.CloudflareTunnelBindingProps">CloudflareTunnelBindingProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.CloudflareTunnelBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.CloudflareTunnelBinding.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.CloudflareTunnelBinding.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.CloudflareTunnelBindingProps">CloudflareTunnelBindingProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.CloudflareTunnelBinding.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.CloudflareTunnelBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.CloudflareTunnelBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.CloudflareTunnelBinding.isConstruct"></a>

```typescript
import { CloudflareTunnelBinding } from 'cdk8s-constructs'

CloudflareTunnelBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.CloudflareTunnelBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.CloudflareTunnelBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.CloudflareTunnelBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Cluster <a name="Cluster" id="cdk8s-constructs.Cluster"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Cluster.Initializer"></a>

```typescript
import { Cluster } from 'cdk8s-constructs'

new Cluster(scope: Construct, name: string, props: ClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Cluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Cluster.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Cluster.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.ClusterProps">ClusterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Cluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Cluster.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Cluster.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.ClusterProps">ClusterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Cluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.Cluster.exposeWithPrimaryService">exposeWithPrimaryService</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Cluster.readService">readService</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Cluster.readWriteService">readWriteService</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Cluster.writeService">writeService</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Cluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `exposeWithPrimaryService` <a name="exposeWithPrimaryService" id="cdk8s-constructs.Cluster.exposeWithPrimaryService"></a>

```typescript
public exposeWithPrimaryService(options?: ExposeWithPrimaryServiceOptions): Service
```

###### `options`<sup>Optional</sup> <a name="options" id="cdk8s-constructs.Cluster.exposeWithPrimaryService.parameter.options"></a>

- *Type:* <a href="#cdk8s-constructs.ExposeWithPrimaryServiceOptions">ExposeWithPrimaryServiceOptions</a>

---

##### `readService` <a name="readService" id="cdk8s-constructs.Cluster.readService"></a>

```typescript
public readService(): string
```

##### `readWriteService` <a name="readWriteService" id="cdk8s-constructs.Cluster.readWriteService"></a>

```typescript
public readWriteService(): string
```

##### `writeService` <a name="writeService" id="cdk8s-constructs.Cluster.writeService"></a>

```typescript
public writeService(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Cluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Cluster.isConstruct"></a>

```typescript
import { Cluster } from 'cdk8s-constructs'

Cluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Cluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Cluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Cluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### ClusterTunnel <a name="ClusterTunnel" id="cdk8s-constructs.ClusterTunnel"></a>

ClusterTunnel is the Schema for the clustertunnels API.

#### Initializers <a name="Initializers" id="cdk8s-constructs.ClusterTunnel.Initializer"></a>

```typescript
import { ClusterTunnel } from 'cdk8s-constructs'

new ClusterTunnel(scope: Construct, id: string, props?: ClusterTunnelProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ClusterTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which to define this object. |
| <code><a href="#cdk8s-constructs.ClusterTunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | a scope-local name for the object. |
| <code><a href="#cdk8s-constructs.ClusterTunnel.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.ClusterTunnelProps">ClusterTunnelProps</a></code> | initialization props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.ClusterTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.ClusterTunnel.Initializer.parameter.id"></a>

- *Type:* string

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk8s-constructs.ClusterTunnel.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.ClusterTunnelProps">ClusterTunnelProps</a>

initialization props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ClusterTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.ClusterTunnel.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s-constructs.ClusterTunnel.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s-constructs.ClusterTunnel.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.ClusterTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.ClusterTunnel.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.ClusterTunnel.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s-constructs.ClusterTunnel.addJsonPatch"></a>

```typescript
public addJsonPatch(ops: JsonPatch): void
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```typescript
  kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s-constructs.ClusterTunnel.addJsonPatch.parameter.ops"></a>

- *Type:* cdk8s.JsonPatch

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.ClusterTunnel.toJson"></a>

```typescript
public toJson(): any
```

Renders the object to Kubernetes JSON.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ClusterTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.ClusterTunnel.isApiObject">isApiObject</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s-constructs.ClusterTunnel.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |
| <code><a href="#cdk8s-constructs.ClusterTunnel.manifest">manifest</a></code> | Renders a Kubernetes manifest for "ClusterTunnel". |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.ClusterTunnel.isConstruct"></a>

```typescript
import { ClusterTunnel } from 'cdk8s-constructs'

ClusterTunnel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.ClusterTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s-constructs.ClusterTunnel.isApiObject"></a>

```typescript
import { ClusterTunnel } from 'cdk8s-constructs'

ClusterTunnel.isApiObject(o: any)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s-constructs.ClusterTunnel.isApiObject.parameter.o"></a>

- *Type:* any

The object to check.

---

##### `of` <a name="of" id="cdk8s-constructs.ClusterTunnel.of"></a>

```typescript
import { ClusterTunnel } from 'cdk8s-constructs'

ClusterTunnel.of(c: IConstruct)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` _or_ if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.ClusterTunnel.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

##### `manifest` <a name="manifest" id="cdk8s-constructs.ClusterTunnel.manifest"></a>

```typescript
import { ClusterTunnel } from 'cdk8s-constructs'

ClusterTunnel.manifest(props?: ClusterTunnelProps)
```

Renders a Kubernetes manifest for "ClusterTunnel".

This can be used to inline resource manifests inside other objects (e.g. as templates).

###### `props`<sup>Optional</sup> <a name="props" id="cdk8s-constructs.ClusterTunnel.manifest.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.ClusterTunnelProps">ClusterTunnelProps</a>

initialization props.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ClusterTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.ClusterTunnel.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.ClusterTunnel.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s-constructs.ClusterTunnel.property.chart">chart</a></code> | <code>cdk8s.Chart</code> | The chart in which this object is defined. |
| <code><a href="#cdk8s-constructs.ClusterTunnel.property.kind">kind</a></code> | <code>string</code> | The object kind. |
| <code><a href="#cdk8s-constructs.ClusterTunnel.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | Metadata associated with this API object. |
| <code><a href="#cdk8s-constructs.ClusterTunnel.property.name">name</a></code> | <code>string</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.ClusterTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.ClusterTunnel.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.ClusterTunnel.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.ClusterTunnel.property.chart"></a>

```typescript
public readonly chart: Chart;
```

- *Type:* cdk8s.Chart

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.ClusterTunnel.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.ClusterTunnel.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ClusterTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ClusterTunnel.property.GVK">GVK</a></code> | <code>cdk8s.GroupVersionKind</code> | Returns the apiVersion and kind for "ClusterTunnel". |

---

##### `GVK`<sup>Required</sup> <a name="GVK" id="cdk8s-constructs.ClusterTunnel.property.GVK"></a>

```typescript
public readonly GVK: GroupVersionKind;
```

- *Type:* cdk8s.GroupVersionKind

Returns the apiVersion and kind for "ClusterTunnel".

---

### ExternalIngress <a name="ExternalIngress" id="cdk8s-constructs.ExternalIngress"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.ExternalIngress.Initializer"></a>

```typescript
import { ExternalIngress } from 'cdk8s-constructs'

new ExternalIngress(scope: Construct, name: string, props: ExternalIngressProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ExternalIngress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExternalIngress.Initializer.parameter.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.ExternalIngress.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.ExternalIngressProps">ExternalIngressProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.ExternalIngress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ExternalIngress.Initializer.parameter.name"></a>

- *Type:* string

The name of this API object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.ExternalIngress.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.ExternalIngressProps">ExternalIngressProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ExternalIngress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.ExternalIngress.asApiResource">asApiResource</a></code> | Return the IApiResource this object represents. |
| <code><a href="#cdk8s-constructs.ExternalIngress.asNonApiResource">asNonApiResource</a></code> | Return the non resource url this object represents. |
| <code><a href="#cdk8s-constructs.ExternalIngress.addDefaultBackend">addDefaultBackend</a></code> | Defines the default backend for this ingress. |
| <code><a href="#cdk8s-constructs.ExternalIngress.addHostDefaultBackend">addHostDefaultBackend</a></code> | Specify a default backend for a specific host name. |
| <code><a href="#cdk8s-constructs.ExternalIngress.addHostRule">addHostRule</a></code> | Adds an ingress rule applied to requests to a specific host and a specific HTTP path (the `Host` header matches this value). |
| <code><a href="#cdk8s-constructs.ExternalIngress.addRule">addRule</a></code> | Adds an ingress rule applied to requests sent to a specific HTTP path. |
| <code><a href="#cdk8s-constructs.ExternalIngress.addRules">addRules</a></code> | Adds rules to this ingress. |
| <code><a href="#cdk8s-constructs.ExternalIngress.addTls">addTls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk8s-constructs.ExternalIngress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `asApiResource` <a name="asApiResource" id="cdk8s-constructs.ExternalIngress.asApiResource"></a>

```typescript
public asApiResource(): IApiResource
```

Return the IApiResource this object represents.

##### `asNonApiResource` <a name="asNonApiResource" id="cdk8s-constructs.ExternalIngress.asNonApiResource"></a>

```typescript
public asNonApiResource(): string
```

Return the non resource url this object represents.

##### `addDefaultBackend` <a name="addDefaultBackend" id="cdk8s-constructs.ExternalIngress.addDefaultBackend"></a>

```typescript
public addDefaultBackend(backend: IngressBackend): void
```

Defines the default backend for this ingress.

A default backend capable of
servicing requests that don't match any rule.

###### `backend`<sup>Required</sup> <a name="backend" id="cdk8s-constructs.ExternalIngress.addDefaultBackend.parameter.backend"></a>

- *Type:* cdk8s-plus-27.IngressBackend

The backend to use for requests that do not match any rule.

---

##### `addHostDefaultBackend` <a name="addHostDefaultBackend" id="cdk8s-constructs.ExternalIngress.addHostDefaultBackend"></a>

```typescript
public addHostDefaultBackend(host: string, backend: IngressBackend): void
```

Specify a default backend for a specific host name.

This backend will be used as a catch-all for requests
targeted to this host name (the `Host` header matches this value).

###### `host`<sup>Required</sup> <a name="host" id="cdk8s-constructs.ExternalIngress.addHostDefaultBackend.parameter.host"></a>

- *Type:* string

The host name to match.

---

###### `backend`<sup>Required</sup> <a name="backend" id="cdk8s-constructs.ExternalIngress.addHostDefaultBackend.parameter.backend"></a>

- *Type:* cdk8s-plus-27.IngressBackend

The backend to route to.

---

##### `addHostRule` <a name="addHostRule" id="cdk8s-constructs.ExternalIngress.addHostRule"></a>

```typescript
public addHostRule(host: string, path: string, backend: IngressBackend, pathType?: HttpIngressPathType): void
```

Adds an ingress rule applied to requests to a specific host and a specific HTTP path (the `Host` header matches this value).

###### `host`<sup>Required</sup> <a name="host" id="cdk8s-constructs.ExternalIngress.addHostRule.parameter.host"></a>

- *Type:* string

The host name.

---

###### `path`<sup>Required</sup> <a name="path" id="cdk8s-constructs.ExternalIngress.addHostRule.parameter.path"></a>

- *Type:* string

The HTTP path.

---

###### `backend`<sup>Required</sup> <a name="backend" id="cdk8s-constructs.ExternalIngress.addHostRule.parameter.backend"></a>

- *Type:* cdk8s-plus-27.IngressBackend

The backend to route requests to.

---

###### `pathType`<sup>Optional</sup> <a name="pathType" id="cdk8s-constructs.ExternalIngress.addHostRule.parameter.pathType"></a>

- *Type:* cdk8s-plus-27.HttpIngressPathType

How the path is matched against request paths.

---

##### `addRule` <a name="addRule" id="cdk8s-constructs.ExternalIngress.addRule"></a>

```typescript
public addRule(path: string, backend: IngressBackend, pathType?: HttpIngressPathType): void
```

Adds an ingress rule applied to requests sent to a specific HTTP path.

###### `path`<sup>Required</sup> <a name="path" id="cdk8s-constructs.ExternalIngress.addRule.parameter.path"></a>

- *Type:* string

The HTTP path.

---

###### `backend`<sup>Required</sup> <a name="backend" id="cdk8s-constructs.ExternalIngress.addRule.parameter.backend"></a>

- *Type:* cdk8s-plus-27.IngressBackend

The backend to route requests to.

---

###### `pathType`<sup>Optional</sup> <a name="pathType" id="cdk8s-constructs.ExternalIngress.addRule.parameter.pathType"></a>

- *Type:* cdk8s-plus-27.HttpIngressPathType

How the path is matched against request paths.

---

##### `addRules` <a name="addRules" id="cdk8s-constructs.ExternalIngress.addRules"></a>

```typescript
public addRules(rules: IngressRule): void
```

Adds rules to this ingress.

###### `rules`<sup>Required</sup> <a name="rules" id="cdk8s-constructs.ExternalIngress.addRules.parameter.rules"></a>

- *Type:* cdk8s-plus-27.IngressRule

The rules to add.

---

##### `addTls` <a name="addTls" id="cdk8s-constructs.ExternalIngress.addTls"></a>

```typescript
public addTls(tls: IngressTls[]): void
```

###### `tls`<sup>Required</sup> <a name="tls" id="cdk8s-constructs.ExternalIngress.addTls.parameter.tls"></a>

- *Type:* cdk8s-plus-27.IngressTls[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ExternalIngress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.ExternalIngress.isConstruct"></a>

```typescript
import { ExternalIngress } from 'cdk8s-constructs'

ExternalIngress.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.ExternalIngress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ExternalIngress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.ExternalIngress.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. "authorization.k8s.io"). |
| <code><a href="#cdk8s-constructs.ExternalIngress.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. "authorization.k8s.io/v1"). |
| <code><a href="#cdk8s-constructs.ExternalIngress.property.kind">kind</a></code> | <code>string</code> | The object kind (e.g. "Deployment"). |
| <code><a href="#cdk8s-constructs.ExternalIngress.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExternalIngress.property.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.ExternalIngress.property.permissions">permissions</a></code> | <code>cdk8s-plus-27.ResourcePermissions</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExternalIngress.property.resourceType">resourceType</a></code> | <code>string</code> | The name of a resource type as it appears in the relevant API endpoint. |
| <code><a href="#cdk8s-constructs.ExternalIngress.property.resourceName">resourceName</a></code> | <code>string</code> | The unique, namespace-global, name of an object inside the Kubernetes cluster. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.ExternalIngress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.ExternalIngress.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. "authorization.k8s.io").

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.ExternalIngress.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. "authorization.k8s.io/v1").

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.ExternalIngress.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind (e.g. "Deployment").

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.ExternalIngress.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ExternalIngress.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this API object.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="cdk8s-constructs.ExternalIngress.property.permissions"></a>

```typescript
public readonly permissions: ResourcePermissions;
```

- *Type:* cdk8s-plus-27.ResourcePermissions

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk8s-constructs.ExternalIngress.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The name of a resource type as it appears in the relevant API endpoint.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="cdk8s-constructs.ExternalIngress.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The unique, namespace-global, name of an object inside the Kubernetes cluster.

If this is omitted, the ApiResource should represent all objects of the given type.

---


### Garage <a name="Garage" id="cdk8s-constructs.Garage"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Garage.Initializer"></a>

```typescript
import { Garage } from 'cdk8s-constructs'

new Garage(scope: Construct, id: string, props: GarageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Garage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Garage.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Garage.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.GarageProps">GarageProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Garage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.Garage.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Garage.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.GarageProps">GarageProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Garage.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Garage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Garage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Garage.isConstruct"></a>

```typescript
import { Garage } from 'cdk8s-constructs'

Garage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Garage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Garage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Garage.property.deployment">deployment</a></code> | <code>cdk8s-plus-minus.Deployment</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Garage.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Garage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.Garage.property.deployment"></a>

```typescript
public readonly deployment: Deployment;
```

- *Type:* cdk8s-plus-minus.Deployment

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.Garage.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### Gatus <a name="Gatus" id="cdk8s-constructs.Gatus"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Gatus.Initializer"></a>

```typescript
import { Gatus } from 'cdk8s-constructs'

new Gatus(scope: Construct, name: string, props: GatusProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Gatus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Gatus.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Gatus.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.GatusProps">GatusProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Gatus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Gatus.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Gatus.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.GatusProps">GatusProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Gatus.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Gatus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Gatus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Gatus.isConstruct"></a>

```typescript
import { Gatus } from 'cdk8s-constructs'

Gatus.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Gatus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Gatus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Gatus.property.deployment">deployment</a></code> | <code>cdk8s-plus-minus.IDeployment</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Gatus.property.service">service</a></code> | <code>cdk8s-plus-minus.IService</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Gatus.property.ingress">ingress</a></code> | <code>cdk8s-plus-minus.IIngress</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Gatus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.Gatus.property.deployment"></a>

```typescript
public readonly deployment: IDeployment;
```

- *Type:* cdk8s-plus-minus.IDeployment

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.Gatus.property.service"></a>

```typescript
public readonly service: IService;
```

- *Type:* cdk8s-plus-minus.IService

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="cdk8s-constructs.Gatus.property.ingress"></a>

```typescript
public readonly ingress: IIngress;
```

- *Type:* cdk8s-plus-minus.IIngress

---


### GrafanaDashboard <a name="GrafanaDashboard" id="cdk8s-constructs.GrafanaDashboard"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.GrafanaDashboard.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.GrafanaDashboard.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.GrafanaDashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.GrafanaDashboard.fromFile">fromFile</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.GrafanaDashboard.isConstruct"></a>

```typescript
import { GrafanaDashboard } from 'cdk8s-constructs'

GrafanaDashboard.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.GrafanaDashboard.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromFile` <a name="fromFile" id="cdk8s-constructs.GrafanaDashboard.fromFile"></a>

```typescript
import { GrafanaDashboard } from 'cdk8s-constructs'

GrafanaDashboard.fromFile(scope: Construct, name: string, file: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.GrafanaDashboard.fromFile.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.GrafanaDashboard.fromFile.parameter.name"></a>

- *Type:* string

---

###### `file`<sup>Required</sup> <a name="file" id="cdk8s-constructs.GrafanaDashboard.fromFile.parameter.file"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.GrafanaDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.GrafanaDashboard.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### HelmChart <a name="HelmChart" id="cdk8s-constructs.HelmChart"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.HelmChart.Initializer"></a>

```typescript
import { HelmChart } from 'cdk8s-constructs'

new HelmChart(scope: Construct, name: string, props: HelmChartProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HelmChart.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HelmChart.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HelmChart.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.HelmChartProps">HelmChartProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.HelmChart.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.HelmChart.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.HelmChart.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.HelmChartProps">HelmChartProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.HelmChart.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.HelmChart.addDependency">addDependency</a></code> | Create a dependency between this Chart and other constructs. |
| <code><a href="#cdk8s-constructs.HelmChart.generateObjectName">generateObjectName</a></code> | Generates a app-unique name for an object given it's construct node path. |
| <code><a href="#cdk8s-constructs.HelmChart.toJson">toJson</a></code> | Renders this chart to a set of Kubernetes JSON resources. |
| <code><a href="#cdk8s-constructs.HelmChart.configureTraefikTls">configureTraefikTls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk8s-constructs.HelmChart.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.HelmChart.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this Chart and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.HelmChart.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `generateObjectName` <a name="generateObjectName" id="cdk8s-constructs.HelmChart.generateObjectName"></a>

```typescript
public generateObjectName(apiObject: ApiObject): string
```

Generates a app-unique name for an object given it's construct node path.

Different resource types may have different constraints on names
(`metadata.name`). The previous version of the name generator was
compatible with DNS_SUBDOMAIN but not with DNS_LABEL.

For example, `Deployment` names must comply with DNS_SUBDOMAIN while
`Service` names must comply with DNS_LABEL.

Since there is no formal specification for this, the default name
generation scheme for kubernetes objects in cdk8s was changed to DNS_LABEL,
since it’s the common denominator for all kubernetes resources
(supposedly).

You can override this method if you wish to customize object names at the
chart level.

###### `apiObject`<sup>Required</sup> <a name="apiObject" id="cdk8s-constructs.HelmChart.generateObjectName.parameter.apiObject"></a>

- *Type:* cdk8s.ApiObject

The API object to generate a name for.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.HelmChart.toJson"></a>

```typescript
public toJson(): any[]
```

Renders this chart to a set of Kubernetes JSON resources.

##### `configureTraefikTls` <a name="configureTraefikTls" id="cdk8s-constructs.HelmChart.configureTraefikTls"></a>

```typescript
public configureTraefikTls(name: string, certIssuerName: string, dnsNames: string[], service: IService, middlewares?: Middleware[]): void
```

###### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.HelmChart.configureTraefikTls.parameter.name"></a>

- *Type:* string

---

###### `certIssuerName`<sup>Required</sup> <a name="certIssuerName" id="cdk8s-constructs.HelmChart.configureTraefikTls.parameter.certIssuerName"></a>

- *Type:* string

---

###### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="cdk8s-constructs.HelmChart.configureTraefikTls.parameter.dnsNames"></a>

- *Type:* string[]

---

###### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.HelmChart.configureTraefikTls.parameter.service"></a>

- *Type:* <a href="#cdk8s-constructs.IService">IService</a>

---

###### `middlewares`<sup>Optional</sup> <a name="middlewares" id="cdk8s-constructs.HelmChart.configureTraefikTls.parameter.middlewares"></a>

- *Type:* <a href="#cdk8s-constructs.Middleware">Middleware</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.HelmChart.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.HelmChart.isChart">isChart</a></code> | Return whether the given object is a Chart. |
| <code><a href="#cdk8s-constructs.HelmChart.of">of</a></code> | Finds the chart in which a node is defined. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.HelmChart.isConstruct"></a>

```typescript
import { HelmChart } from 'cdk8s-constructs'

HelmChart.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.HelmChart.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isChart` <a name="isChart" id="cdk8s-constructs.HelmChart.isChart"></a>

```typescript
import { HelmChart } from 'cdk8s-constructs'

HelmChart.isChart(x: any)
```

Return whether the given object is a Chart.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.HelmChart.isChart.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdk8s-constructs.HelmChart.of"></a>

```typescript
import { HelmChart } from 'cdk8s-constructs'

HelmChart.of(c: IConstruct)
```

Finds the chart in which a node is defined.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.HelmChart.of.parameter.c"></a>

- *Type:* constructs.IConstruct

a construct node.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HelmChart.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.HelmChart.property.apiObjects">apiObjects</a></code> | <code>cdk8s.ApiObject[]</code> | Returns all the included API objects. |
| <code><a href="#cdk8s-constructs.HelmChart.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels applied to all resources in this chart. |
| <code><a href="#cdk8s-constructs.HelmChart.property.namespace">namespace</a></code> | <code>string</code> | The default namespace for all objects in this chart. |
| <code><a href="#cdk8s-constructs.HelmChart.property.chart">chart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HelmChart.property.ns">ns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HelmChart.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.HelmChart.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiObjects`<sup>Required</sup> <a name="apiObjects" id="cdk8s-constructs.HelmChart.property.apiObjects"></a>

```typescript
public readonly apiObjects: ApiObject[];
```

- *Type:* cdk8s.ApiObject[]

Returns all the included API objects.

---

##### `labels`<sup>Required</sup> <a name="labels" id="cdk8s-constructs.HelmChart.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels applied to all resources in this chart.

This is an immutable copy.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.HelmChart.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The default namespace for all objects in this chart.

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.HelmChart.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* string

---

##### `ns`<sup>Required</sup> <a name="ns" id="cdk8s-constructs.HelmChart.property.ns"></a>

```typescript
public readonly ns: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="cdk8s-constructs.HelmChart.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---


### HomelabCertificate <a name="HomelabCertificate" id="cdk8s-constructs.HomelabCertificate"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.HomelabCertificate.Initializer"></a>

```typescript
import { HomelabCertificate } from 'cdk8s-constructs'

new HomelabCertificate(scope: Construct, name: string, props: HomelabCertificateProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabCertificate.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabCertificate.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.HomelabCertificateProps">HomelabCertificateProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.HomelabCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.HomelabCertificate.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.HomelabCertificate.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.HomelabCertificateProps">HomelabCertificateProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.HomelabCertificate.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.HomelabCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.HomelabCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.HomelabCertificate.isConstruct"></a>

```typescript
import { HomelabCertificate } from 'cdk8s-constructs'

HomelabCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.HomelabCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.HomelabCertificate.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.HomelabCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="cdk8s-constructs.HomelabCertificate.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---


### HomelabChart <a name="HomelabChart" id="cdk8s-constructs.HomelabChart"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.HomelabChart.Initializer"></a>

```typescript
import { HomelabChart } from 'cdk8s-constructs'

new HomelabChart(scope: Construct, name: string, props: HomelabChartProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabChart.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabChart.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabChart.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.HomelabChartProps">HomelabChartProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.HomelabChart.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.HomelabChart.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.HomelabChart.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.HomelabChartProps">HomelabChartProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.HomelabChart.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.HomelabChart.addDependency">addDependency</a></code> | Create a dependency between this Chart and other constructs. |
| <code><a href="#cdk8s-constructs.HomelabChart.generateObjectName">generateObjectName</a></code> | Generates a app-unique name for an object given it's construct node path. |
| <code><a href="#cdk8s-constructs.HomelabChart.toJson">toJson</a></code> | Renders this chart to a set of Kubernetes JSON resources. |
| <code><a href="#cdk8s-constructs.HomelabChart.configureTraefikTls">configureTraefikTls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk8s-constructs.HomelabChart.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.HomelabChart.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this Chart and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.HomelabChart.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `generateObjectName` <a name="generateObjectName" id="cdk8s-constructs.HomelabChart.generateObjectName"></a>

```typescript
public generateObjectName(apiObject: ApiObject): string
```

Generates a app-unique name for an object given it's construct node path.

Different resource types may have different constraints on names
(`metadata.name`). The previous version of the name generator was
compatible with DNS_SUBDOMAIN but not with DNS_LABEL.

For example, `Deployment` names must comply with DNS_SUBDOMAIN while
`Service` names must comply with DNS_LABEL.

Since there is no formal specification for this, the default name
generation scheme for kubernetes objects in cdk8s was changed to DNS_LABEL,
since it’s the common denominator for all kubernetes resources
(supposedly).

You can override this method if you wish to customize object names at the
chart level.

###### `apiObject`<sup>Required</sup> <a name="apiObject" id="cdk8s-constructs.HomelabChart.generateObjectName.parameter.apiObject"></a>

- *Type:* cdk8s.ApiObject

The API object to generate a name for.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.HomelabChart.toJson"></a>

```typescript
public toJson(): any[]
```

Renders this chart to a set of Kubernetes JSON resources.

##### `configureTraefikTls` <a name="configureTraefikTls" id="cdk8s-constructs.HomelabChart.configureTraefikTls"></a>

```typescript
public configureTraefikTls(name: string, certIssuerName: string, dnsNames: string[], service: IService, middlewares?: Middleware[]): void
```

###### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.HomelabChart.configureTraefikTls.parameter.name"></a>

- *Type:* string

---

###### `certIssuerName`<sup>Required</sup> <a name="certIssuerName" id="cdk8s-constructs.HomelabChart.configureTraefikTls.parameter.certIssuerName"></a>

- *Type:* string

---

###### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="cdk8s-constructs.HomelabChart.configureTraefikTls.parameter.dnsNames"></a>

- *Type:* string[]

---

###### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.HomelabChart.configureTraefikTls.parameter.service"></a>

- *Type:* <a href="#cdk8s-constructs.IService">IService</a>

---

###### `middlewares`<sup>Optional</sup> <a name="middlewares" id="cdk8s-constructs.HomelabChart.configureTraefikTls.parameter.middlewares"></a>

- *Type:* <a href="#cdk8s-constructs.Middleware">Middleware</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.HomelabChart.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.HomelabChart.isChart">isChart</a></code> | Return whether the given object is a Chart. |
| <code><a href="#cdk8s-constructs.HomelabChart.of">of</a></code> | Finds the chart in which a node is defined. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.HomelabChart.isConstruct"></a>

```typescript
import { HomelabChart } from 'cdk8s-constructs'

HomelabChart.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.HomelabChart.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isChart` <a name="isChart" id="cdk8s-constructs.HomelabChart.isChart"></a>

```typescript
import { HomelabChart } from 'cdk8s-constructs'

HomelabChart.isChart(x: any)
```

Return whether the given object is a Chart.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.HomelabChart.isChart.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdk8s-constructs.HomelabChart.of"></a>

```typescript
import { HomelabChart } from 'cdk8s-constructs'

HomelabChart.of(c: IConstruct)
```

Finds the chart in which a node is defined.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.HomelabChart.of.parameter.c"></a>

- *Type:* constructs.IConstruct

a construct node.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabChart.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.HomelabChart.property.apiObjects">apiObjects</a></code> | <code>cdk8s.ApiObject[]</code> | Returns all the included API objects. |
| <code><a href="#cdk8s-constructs.HomelabChart.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels applied to all resources in this chart. |
| <code><a href="#cdk8s-constructs.HomelabChart.property.namespace">namespace</a></code> | <code>string</code> | The default namespace for all objects in this chart. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.HomelabChart.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiObjects`<sup>Required</sup> <a name="apiObjects" id="cdk8s-constructs.HomelabChart.property.apiObjects"></a>

```typescript
public readonly apiObjects: ApiObject[];
```

- *Type:* cdk8s.ApiObject[]

Returns all the included API objects.

---

##### `labels`<sup>Required</sup> <a name="labels" id="cdk8s-constructs.HomelabChart.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels applied to all resources in this chart.

This is an immutable copy.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.HomelabChart.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The default namespace for all objects in this chart.

---


### HomelabDeployment <a name="HomelabDeployment" id="cdk8s-constructs.HomelabDeployment"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.HomelabDeployment.Initializer"></a>

```typescript
import { HomelabDeployment } from 'cdk8s-constructs'

new HomelabDeployment(scope: Construct, name: string, props: HomelabDeploymentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.Initializer.parameter.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.HomelabDeploymentProps">HomelabDeploymentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.HomelabDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.HomelabDeployment.Initializer.parameter.name"></a>

- *Type:* string

The name of this API object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.HomelabDeployment.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.HomelabDeploymentProps">HomelabDeploymentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.HomelabDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.asApiResource">asApiResource</a></code> | Return the IApiResource this object represents. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.asNonApiResource">asNonApiResource</a></code> | Return the non resource url this object represents. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.addContainer">addContainer</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.addHostAlias">addHostAlias</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.addInitContainer">addInitContainer</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.addVolume">addVolume</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.attachContainer">attachContainer</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.toNetworkPolicyPeerConfig">toNetworkPolicyPeerConfig</a></code> | Return the configuration of this peer. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.toPodSelector">toPodSelector</a></code> | Convert the peer into a pod selector, if possible. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.toPodSelectorConfig">toPodSelectorConfig</a></code> | Return the configuration of this selector. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.toSubjectConfiguration">toSubjectConfiguration</a></code> | Return the subject configuration. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.select">select</a></code> | Configure selectors for this workload. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.exposeViaIngress">exposeViaIngress</a></code> | Expose a deployment via an ingress. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.exposeViaService">exposeViaService</a></code> | Expose a deployment via a service. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.markHasAutoscaler">markHasAutoscaler</a></code> | Called on all IScalable targets when they are associated with an autoscaler. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.toScalingTarget">toScalingTarget</a></code> | Return the target spec properties of this Scalable. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.HomelabDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `asApiResource` <a name="asApiResource" id="cdk8s-constructs.HomelabDeployment.asApiResource"></a>

```typescript
public asApiResource(): IApiResource
```

Return the IApiResource this object represents.

##### `asNonApiResource` <a name="asNonApiResource" id="cdk8s-constructs.HomelabDeployment.asNonApiResource"></a>

```typescript
public asNonApiResource(): string
```

Return the non resource url this object represents.

##### `addContainer` <a name="addContainer" id="cdk8s-constructs.HomelabDeployment.addContainer"></a>

```typescript
public addContainer(cont: ContainerProps): Container
```

###### `cont`<sup>Required</sup> <a name="cont" id="cdk8s-constructs.HomelabDeployment.addContainer.parameter.cont"></a>

- *Type:* cdk8s-plus-minus.ContainerProps

---

##### `addHostAlias` <a name="addHostAlias" id="cdk8s-constructs.HomelabDeployment.addHostAlias"></a>

```typescript
public addHostAlias(hostAlias: HostAlias): void
```

###### `hostAlias`<sup>Required</sup> <a name="hostAlias" id="cdk8s-constructs.HomelabDeployment.addHostAlias.parameter.hostAlias"></a>

- *Type:* cdk8s-plus-minus.HostAlias

---

##### `addInitContainer` <a name="addInitContainer" id="cdk8s-constructs.HomelabDeployment.addInitContainer"></a>

```typescript
public addInitContainer(cont: ContainerProps): Container
```

###### `cont`<sup>Required</sup> <a name="cont" id="cdk8s-constructs.HomelabDeployment.addInitContainer.parameter.cont"></a>

- *Type:* cdk8s-plus-minus.ContainerProps

---

##### `addVolume` <a name="addVolume" id="cdk8s-constructs.HomelabDeployment.addVolume"></a>

```typescript
public addVolume(vol: Volume): void
```

###### `vol`<sup>Required</sup> <a name="vol" id="cdk8s-constructs.HomelabDeployment.addVolume.parameter.vol"></a>

- *Type:* cdk8s-plus-minus.Volume

---

##### `attachContainer` <a name="attachContainer" id="cdk8s-constructs.HomelabDeployment.attachContainer"></a>

```typescript
public attachContainer(cont: Container): void
```

###### `cont`<sup>Required</sup> <a name="cont" id="cdk8s-constructs.HomelabDeployment.attachContainer.parameter.cont"></a>

- *Type:* cdk8s-plus-minus.Container

---

##### `toNetworkPolicyPeerConfig` <a name="toNetworkPolicyPeerConfig" id="cdk8s-constructs.HomelabDeployment.toNetworkPolicyPeerConfig"></a>

```typescript
public toNetworkPolicyPeerConfig(): NetworkPolicyPeerConfig
```

Return the configuration of this peer.

> [INetworkPolicyPeer.toNetworkPolicyPeerConfig ()](INetworkPolicyPeer.toNetworkPolicyPeerConfig ())

##### `toPodSelector` <a name="toPodSelector" id="cdk8s-constructs.HomelabDeployment.toPodSelector"></a>

```typescript
public toPodSelector(): IPodSelector
```

Convert the peer into a pod selector, if possible.

> [INetworkPolicyPeer.toPodSelector ()](INetworkPolicyPeer.toPodSelector ())

##### `toPodSelectorConfig` <a name="toPodSelectorConfig" id="cdk8s-constructs.HomelabDeployment.toPodSelectorConfig"></a>

```typescript
public toPodSelectorConfig(): PodSelectorConfig
```

Return the configuration of this selector.

> [IPodSelector.toPodSelectorConfig ()](IPodSelector.toPodSelectorConfig ())

##### `toSubjectConfiguration` <a name="toSubjectConfiguration" id="cdk8s-constructs.HomelabDeployment.toSubjectConfiguration"></a>

```typescript
public toSubjectConfiguration(): SubjectConfiguration
```

Return the subject configuration.

> [ISubect.toSubjectConfiguration ()](ISubect.toSubjectConfiguration ())

##### `select` <a name="select" id="cdk8s-constructs.HomelabDeployment.select"></a>

```typescript
public select(selectors: LabelSelector): void
```

Configure selectors for this workload.

###### `selectors`<sup>Required</sup> <a name="selectors" id="cdk8s-constructs.HomelabDeployment.select.parameter.selectors"></a>

- *Type:* cdk8s-plus-minus.LabelSelector

---

##### `exposeViaIngress` <a name="exposeViaIngress" id="cdk8s-constructs.HomelabDeployment.exposeViaIngress"></a>

```typescript
public exposeViaIngress(path: string, options?: ExposeDeploymentViaIngressOptions): IIngress
```

Expose a deployment via an ingress.

This will first expose the deployment with a service, and then expose the service via an ingress.

###### `path`<sup>Required</sup> <a name="path" id="cdk8s-constructs.HomelabDeployment.exposeViaIngress.parameter.path"></a>

- *Type:* string

The ingress path to register under.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk8s-constructs.HomelabDeployment.exposeViaIngress.parameter.options"></a>

- *Type:* cdk8s-plus-minus.ExposeDeploymentViaIngressOptions

Additional options.

---

##### `exposeViaService` <a name="exposeViaService" id="cdk8s-constructs.HomelabDeployment.exposeViaService"></a>

```typescript
public exposeViaService(options?: DeploymentExposeViaServiceOptions): IService
```

Expose a deployment via a service.

This is equivalent to running `kubectl expose deployment <deployment-name>`.

###### `options`<sup>Optional</sup> <a name="options" id="cdk8s-constructs.HomelabDeployment.exposeViaService.parameter.options"></a>

- *Type:* cdk8s-plus-minus.DeploymentExposeViaServiceOptions

Options to determine details of the service and port exposed.

---

##### `markHasAutoscaler` <a name="markHasAutoscaler" id="cdk8s-constructs.HomelabDeployment.markHasAutoscaler"></a>

```typescript
public markHasAutoscaler(): void
```

Called on all IScalable targets when they are associated with an autoscaler.

> [IScalable.markHasAutoscaler ()](IScalable.markHasAutoscaler ())

##### `toScalingTarget` <a name="toScalingTarget" id="cdk8s-constructs.HomelabDeployment.toScalingTarget"></a>

```typescript
public toScalingTarget(): ScalingTarget
```

Return the target spec properties of this Scalable.

> [IScalable.toScalingTarget ()](IScalable.toScalingTarget ())

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.HomelabDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.HomelabDeployment.isConstruct"></a>

```typescript
import { HomelabDeployment } from 'cdk8s-constructs'

HomelabDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.HomelabDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. "authorization.k8s.io"). |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. "authorization.k8s.io/v1"). |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.kind">kind</a></code> | <code>string</code> | The object kind (e.g. "Deployment"). |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.permissions">permissions</a></code> | <code>cdk8s-plus-minus.ResourcePermissions</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.resourceType">resourceType</a></code> | <code>string</code> | The name of a resource type as it appears in the relevant API endpoint. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.resourceName">resourceName</a></code> | <code>string</code> | The unique, namespace-global, name of an object inside the Kubernetes cluster. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.automountServiceAccountToken">automountServiceAccountToken</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.containers">containers</a></code> | <code>cdk8s-plus-minus.Container[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.dns">dns</a></code> | <code>cdk8s-plus-minus.PodDns</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.hostAliases">hostAliases</a></code> | <code>cdk8s-plus-minus.HostAlias[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.initContainers">initContainers</a></code> | <code>cdk8s-plus-minus.Container[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.podMetadata">podMetadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | The metadata of pods in this workload. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.securityContext">securityContext</a></code> | <code>cdk8s-plus-minus.PodSecurityContext</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.volumes">volumes</a></code> | <code>cdk8s-plus-minus.Volume[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.dockerRegistryAuth">dockerRegistryAuth</a></code> | <code>cdk8s-plus-minus.ISecret</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.hostNetwork">hostNetwork</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.restartPolicy">restartPolicy</a></code> | <code>cdk8s-plus-minus.RestartPolicy</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.serviceAccount">serviceAccount</a></code> | <code>cdk8s-plus-minus.IServiceAccount</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.terminationGracePeriod">terminationGracePeriod</a></code> | <code>cdk8s.Duration</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.connections">connections</a></code> | <code>cdk8s-plus-minus.PodConnections</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.matchExpressions">matchExpressions</a></code> | <code>cdk8s-plus-minus.LabelSelectorRequirement[]</code> | The expression matchers this workload will use in order to select pods. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | The label matchers this workload will use in order to select pods. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.scheduling">scheduling</a></code> | <code>cdk8s-plus-minus.WorkloadScheduling</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.minReady">minReady</a></code> | <code>cdk8s.Duration</code> | Minimum duration for which a newly created pod should be ready without any of its container crashing, for it to be considered available. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.progressDeadline">progressDeadline</a></code> | <code>cdk8s.Duration</code> | The maximum duration for a deployment to make progress before it is considered to be failed. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.strategy">strategy</a></code> | <code>cdk8s-plus-minus.DeploymentStrategy</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.replicas">replicas</a></code> | <code>number</code> | Number of desired pods. |
| <code><a href="#cdk8s-constructs.HomelabDeployment.property.hasAutoscaler">hasAutoscaler</a></code> | <code>boolean</code> | If this is a target of an autoscaler. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.HomelabDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.HomelabDeployment.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. "authorization.k8s.io").

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.HomelabDeployment.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. "authorization.k8s.io/v1").

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.HomelabDeployment.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind (e.g. "Deployment").

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.HomelabDeployment.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.HomelabDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this API object.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="cdk8s-constructs.HomelabDeployment.property.permissions"></a>

```typescript
public readonly permissions: ResourcePermissions;
```

- *Type:* cdk8s-plus-minus.ResourcePermissions

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk8s-constructs.HomelabDeployment.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The name of a resource type as it appears in the relevant API endpoint.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="cdk8s-constructs.HomelabDeployment.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The unique, namespace-global, name of an object inside the Kubernetes cluster.

If this is omitted, the ApiResource should represent all objects of the given type.

---

##### `automountServiceAccountToken`<sup>Required</sup> <a name="automountServiceAccountToken" id="cdk8s-constructs.HomelabDeployment.property.automountServiceAccountToken"></a>

```typescript
public readonly automountServiceAccountToken: boolean;
```

- *Type:* boolean

---

##### `containers`<sup>Required</sup> <a name="containers" id="cdk8s-constructs.HomelabDeployment.property.containers"></a>

```typescript
public readonly containers: Container[];
```

- *Type:* cdk8s-plus-minus.Container[]

---

##### `dns`<sup>Required</sup> <a name="dns" id="cdk8s-constructs.HomelabDeployment.property.dns"></a>

```typescript
public readonly dns: PodDns;
```

- *Type:* cdk8s-plus-minus.PodDns

---

##### `hostAliases`<sup>Required</sup> <a name="hostAliases" id="cdk8s-constructs.HomelabDeployment.property.hostAliases"></a>

```typescript
public readonly hostAliases: HostAlias[];
```

- *Type:* cdk8s-plus-minus.HostAlias[]

---

##### `initContainers`<sup>Required</sup> <a name="initContainers" id="cdk8s-constructs.HomelabDeployment.property.initContainers"></a>

```typescript
public readonly initContainers: Container[];
```

- *Type:* cdk8s-plus-minus.Container[]

---

##### `podMetadata`<sup>Required</sup> <a name="podMetadata" id="cdk8s-constructs.HomelabDeployment.property.podMetadata"></a>

```typescript
public readonly podMetadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

The metadata of pods in this workload.

---

##### `securityContext`<sup>Required</sup> <a name="securityContext" id="cdk8s-constructs.HomelabDeployment.property.securityContext"></a>

```typescript
public readonly securityContext: PodSecurityContext;
```

- *Type:* cdk8s-plus-minus.PodSecurityContext

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="cdk8s-constructs.HomelabDeployment.property.volumes"></a>

```typescript
public readonly volumes: Volume[];
```

- *Type:* cdk8s-plus-minus.Volume[]

---

##### `dockerRegistryAuth`<sup>Optional</sup> <a name="dockerRegistryAuth" id="cdk8s-constructs.HomelabDeployment.property.dockerRegistryAuth"></a>

```typescript
public readonly dockerRegistryAuth: ISecret;
```

- *Type:* cdk8s-plus-minus.ISecret

---

##### `hostNetwork`<sup>Optional</sup> <a name="hostNetwork" id="cdk8s-constructs.HomelabDeployment.property.hostNetwork"></a>

```typescript
public readonly hostNetwork: boolean;
```

- *Type:* boolean

---

##### `restartPolicy`<sup>Optional</sup> <a name="restartPolicy" id="cdk8s-constructs.HomelabDeployment.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: RestartPolicy;
```

- *Type:* cdk8s-plus-minus.RestartPolicy

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="cdk8s-constructs.HomelabDeployment.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: IServiceAccount;
```

- *Type:* cdk8s-plus-minus.IServiceAccount

---

##### `terminationGracePeriod`<sup>Optional</sup> <a name="terminationGracePeriod" id="cdk8s-constructs.HomelabDeployment.property.terminationGracePeriod"></a>

```typescript
public readonly terminationGracePeriod: Duration;
```

- *Type:* cdk8s.Duration

---

##### `connections`<sup>Required</sup> <a name="connections" id="cdk8s-constructs.HomelabDeployment.property.connections"></a>

```typescript
public readonly connections: PodConnections;
```

- *Type:* cdk8s-plus-minus.PodConnections

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="cdk8s-constructs.HomelabDeployment.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: LabelSelectorRequirement[];
```

- *Type:* cdk8s-plus-minus.LabelSelectorRequirement[]

The expression matchers this workload will use in order to select pods.

Returns a a copy. Use `select()` to add expression matchers.

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="cdk8s-constructs.HomelabDeployment.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The label matchers this workload will use in order to select pods.

Returns a a copy. Use `select()` to add label matchers.

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="cdk8s-constructs.HomelabDeployment.property.scheduling"></a>

```typescript
public readonly scheduling: WorkloadScheduling;
```

- *Type:* cdk8s-plus-minus.WorkloadScheduling

---

##### `minReady`<sup>Required</sup> <a name="minReady" id="cdk8s-constructs.HomelabDeployment.property.minReady"></a>

```typescript
public readonly minReady: Duration;
```

- *Type:* cdk8s.Duration

Minimum duration for which a newly created pod should be ready without any of its container crashing, for it to be considered available.

---

##### `progressDeadline`<sup>Required</sup> <a name="progressDeadline" id="cdk8s-constructs.HomelabDeployment.property.progressDeadline"></a>

```typescript
public readonly progressDeadline: Duration;
```

- *Type:* cdk8s.Duration

The maximum duration for a deployment to make progress before it is considered to be failed.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="cdk8s-constructs.HomelabDeployment.property.strategy"></a>

```typescript
public readonly strategy: DeploymentStrategy;
```

- *Type:* cdk8s-plus-minus.DeploymentStrategy

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="cdk8s-constructs.HomelabDeployment.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

Number of desired pods.

---

##### `hasAutoscaler`<sup>Required</sup> <a name="hasAutoscaler" id="cdk8s-constructs.HomelabDeployment.property.hasAutoscaler"></a>

```typescript
public readonly hasAutoscaler: boolean;
```

- *Type:* boolean

If this is a target of an autoscaler.

---


### HomelabIngress <a name="HomelabIngress" id="cdk8s-constructs.HomelabIngress"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.HomelabIngress.Initializer"></a>

```typescript
import { HomelabIngress } from 'cdk8s-constructs'

new HomelabIngress(scope: Construct, name: string, props: HomelabIngressProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabIngress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabIngress.Initializer.parameter.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.HomelabIngress.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.HomelabIngressProps">HomelabIngressProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.HomelabIngress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.HomelabIngress.Initializer.parameter.name"></a>

- *Type:* string

The name of this API object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.HomelabIngress.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.HomelabIngressProps">HomelabIngressProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.HomelabIngress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.HomelabIngress.asApiResource">asApiResource</a></code> | Return the IApiResource this object represents. |
| <code><a href="#cdk8s-constructs.HomelabIngress.asNonApiResource">asNonApiResource</a></code> | Return the non resource url this object represents. |
| <code><a href="#cdk8s-constructs.HomelabIngress.addDefaultBackend">addDefaultBackend</a></code> | Defines the default backend for this ingress. |
| <code><a href="#cdk8s-constructs.HomelabIngress.addHostDefaultBackend">addHostDefaultBackend</a></code> | Specify a default backend for a specific host name. |
| <code><a href="#cdk8s-constructs.HomelabIngress.addHostRule">addHostRule</a></code> | Adds an ingress rule applied to requests to a specific host and a specific HTTP path (the `Host` header matches this value). |
| <code><a href="#cdk8s-constructs.HomelabIngress.addRule">addRule</a></code> | Adds an ingress rule applied to requests sent to a specific HTTP path. |
| <code><a href="#cdk8s-constructs.HomelabIngress.addRules">addRules</a></code> | Adds rules to this ingress. |
| <code><a href="#cdk8s-constructs.HomelabIngress.addTls">addTls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk8s-constructs.HomelabIngress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `asApiResource` <a name="asApiResource" id="cdk8s-constructs.HomelabIngress.asApiResource"></a>

```typescript
public asApiResource(): IApiResource
```

Return the IApiResource this object represents.

##### `asNonApiResource` <a name="asNonApiResource" id="cdk8s-constructs.HomelabIngress.asNonApiResource"></a>

```typescript
public asNonApiResource(): string
```

Return the non resource url this object represents.

##### `addDefaultBackend` <a name="addDefaultBackend" id="cdk8s-constructs.HomelabIngress.addDefaultBackend"></a>

```typescript
public addDefaultBackend(backend: IIngressBackend): void
```

Defines the default backend for this ingress.

A default backend capable of
servicing requests that don't match any rule.

###### `backend`<sup>Required</sup> <a name="backend" id="cdk8s-constructs.HomelabIngress.addDefaultBackend.parameter.backend"></a>

- *Type:* cdk8s-plus-minus.IIngressBackend

The backend to use for requests that do not match any rule.

---

##### `addHostDefaultBackend` <a name="addHostDefaultBackend" id="cdk8s-constructs.HomelabIngress.addHostDefaultBackend"></a>

```typescript
public addHostDefaultBackend(host: string, backend: IIngressBackend): void
```

Specify a default backend for a specific host name.

This backend will be used as a catch-all for requests
targeted to this host name (the `Host` header matches this value).

###### `host`<sup>Required</sup> <a name="host" id="cdk8s-constructs.HomelabIngress.addHostDefaultBackend.parameter.host"></a>

- *Type:* string

The host name to match.

---

###### `backend`<sup>Required</sup> <a name="backend" id="cdk8s-constructs.HomelabIngress.addHostDefaultBackend.parameter.backend"></a>

- *Type:* cdk8s-plus-minus.IIngressBackend

The backend to route to.

---

##### `addHostRule` <a name="addHostRule" id="cdk8s-constructs.HomelabIngress.addHostRule"></a>

```typescript
public addHostRule(host: string, path: string, backend: IIngressBackend, pathType?: HttpIngressPathType): void
```

Adds an ingress rule applied to requests to a specific host and a specific HTTP path (the `Host` header matches this value).

###### `host`<sup>Required</sup> <a name="host" id="cdk8s-constructs.HomelabIngress.addHostRule.parameter.host"></a>

- *Type:* string

The host name.

---

###### `path`<sup>Required</sup> <a name="path" id="cdk8s-constructs.HomelabIngress.addHostRule.parameter.path"></a>

- *Type:* string

The HTTP path.

---

###### `backend`<sup>Required</sup> <a name="backend" id="cdk8s-constructs.HomelabIngress.addHostRule.parameter.backend"></a>

- *Type:* cdk8s-plus-minus.IIngressBackend

The backend to route requests to.

---

###### `pathType`<sup>Optional</sup> <a name="pathType" id="cdk8s-constructs.HomelabIngress.addHostRule.parameter.pathType"></a>

- *Type:* cdk8s-plus-minus.HttpIngressPathType

How the path is matched against request paths.

---

##### `addRule` <a name="addRule" id="cdk8s-constructs.HomelabIngress.addRule"></a>

```typescript
public addRule(path: string, backend: IIngressBackend, pathType?: HttpIngressPathType): void
```

Adds an ingress rule applied to requests sent to a specific HTTP path.

###### `path`<sup>Required</sup> <a name="path" id="cdk8s-constructs.HomelabIngress.addRule.parameter.path"></a>

- *Type:* string

The HTTP path.

---

###### `backend`<sup>Required</sup> <a name="backend" id="cdk8s-constructs.HomelabIngress.addRule.parameter.backend"></a>

- *Type:* cdk8s-plus-minus.IIngressBackend

The backend to route requests to.

---

###### `pathType`<sup>Optional</sup> <a name="pathType" id="cdk8s-constructs.HomelabIngress.addRule.parameter.pathType"></a>

- *Type:* cdk8s-plus-minus.HttpIngressPathType

How the path is matched against request paths.

---

##### `addRules` <a name="addRules" id="cdk8s-constructs.HomelabIngress.addRules"></a>

```typescript
public addRules(rules: IngressRule): void
```

Adds rules to this ingress.

###### `rules`<sup>Required</sup> <a name="rules" id="cdk8s-constructs.HomelabIngress.addRules.parameter.rules"></a>

- *Type:* cdk8s-plus-minus.IngressRule

The rules to add.

---

##### `addTls` <a name="addTls" id="cdk8s-constructs.HomelabIngress.addTls"></a>

```typescript
public addTls(tls: IngressTls[]): void
```

###### `tls`<sup>Required</sup> <a name="tls" id="cdk8s-constructs.HomelabIngress.addTls.parameter.tls"></a>

- *Type:* cdk8s-plus-minus.IngressTls[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.HomelabIngress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.HomelabIngress.isConstruct"></a>

```typescript
import { HomelabIngress } from 'cdk8s-constructs'

HomelabIngress.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.HomelabIngress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabIngress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.HomelabIngress.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. "authorization.k8s.io"). |
| <code><a href="#cdk8s-constructs.HomelabIngress.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. "authorization.k8s.io/v1"). |
| <code><a href="#cdk8s-constructs.HomelabIngress.property.kind">kind</a></code> | <code>string</code> | The object kind (e.g. "Deployment"). |
| <code><a href="#cdk8s-constructs.HomelabIngress.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabIngress.property.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.HomelabIngress.property.permissions">permissions</a></code> | <code>cdk8s-plus-minus.ResourcePermissions</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabIngress.property.resourceType">resourceType</a></code> | <code>string</code> | The name of a resource type as it appears in the relevant API endpoint. |
| <code><a href="#cdk8s-constructs.HomelabIngress.property.resourceName">resourceName</a></code> | <code>string</code> | The unique, namespace-global, name of an object inside the Kubernetes cluster. |
| <code><a href="#cdk8s-constructs.HomelabIngress.property.certSecret">certSecret</a></code> | <code>cdk8s-plus-minus.Secret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.HomelabIngress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.HomelabIngress.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. "authorization.k8s.io").

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.HomelabIngress.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. "authorization.k8s.io/v1").

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.HomelabIngress.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind (e.g. "Deployment").

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.HomelabIngress.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.HomelabIngress.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this API object.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="cdk8s-constructs.HomelabIngress.property.permissions"></a>

```typescript
public readonly permissions: ResourcePermissions;
```

- *Type:* cdk8s-plus-minus.ResourcePermissions

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk8s-constructs.HomelabIngress.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The name of a resource type as it appears in the relevant API endpoint.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="cdk8s-constructs.HomelabIngress.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The unique, namespace-global, name of an object inside the Kubernetes cluster.

If this is omitted, the ApiResource should represent all objects of the given type.

---

##### `certSecret`<sup>Required</sup> <a name="certSecret" id="cdk8s-constructs.HomelabIngress.property.certSecret"></a>

```typescript
public readonly certSecret: Secret;
```

- *Type:* cdk8s-plus-minus.Secret

---


### HomelabTraefikIngressRoute <a name="HomelabTraefikIngressRoute" id="cdk8s-constructs.HomelabTraefikIngressRoute"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.HomelabTraefikIngressRoute.Initializer"></a>

```typescript
import { HomelabTraefikIngressRoute } from 'cdk8s-constructs'

new HomelabTraefikIngressRoute(scope: Construct, name: string, props: HomelabTraefikIngressRouteProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabTraefikIngressRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabTraefikIngressRoute.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabTraefikIngressRoute.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.HomelabTraefikIngressRouteProps">HomelabTraefikIngressRouteProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.HomelabTraefikIngressRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.HomelabTraefikIngressRoute.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.HomelabTraefikIngressRoute.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.HomelabTraefikIngressRouteProps">HomelabTraefikIngressRouteProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.HomelabTraefikIngressRoute.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.HomelabTraefikIngressRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.HomelabTraefikIngressRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.HomelabTraefikIngressRoute.isConstruct"></a>

```typescript
import { HomelabTraefikIngressRoute } from 'cdk8s-constructs'

HomelabTraefikIngressRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.HomelabTraefikIngressRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabTraefikIngressRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.HomelabTraefikIngressRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Immich <a name="Immich" id="cdk8s-constructs.Immich"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Immich.Initializer"></a>

```typescript
import { Immich } from 'cdk8s-constructs'

new Immich(scope: Construct, name: string, props: ImmichProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Immich.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Immich.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Immich.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.ImmichProps">ImmichProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Immich.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Immich.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Immich.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.ImmichProps">ImmichProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Immich.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Immich.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Immich.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Immich.isConstruct"></a>

```typescript
import { Immich } from 'cdk8s-constructs'

Immich.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Immich.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Immich.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Immich.property.machineLearningService">machineLearningService</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Immich.property.microservicesService">microservicesService</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Immich.property.postgresService">postgresService</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Immich.property.redisService">redisService</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Immich.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `machineLearningService`<sup>Required</sup> <a name="machineLearningService" id="cdk8s-constructs.Immich.property.machineLearningService"></a>

```typescript
public readonly machineLearningService: Service;
```

- *Type:* cdk8s-plus-minus.Service

---

##### `microservicesService`<sup>Required</sup> <a name="microservicesService" id="cdk8s-constructs.Immich.property.microservicesService"></a>

```typescript
public readonly microservicesService: Service;
```

- *Type:* cdk8s-plus-minus.Service

---

##### `postgresService`<sup>Required</sup> <a name="postgresService" id="cdk8s-constructs.Immich.property.postgresService"></a>

```typescript
public readonly postgresService: Service;
```

- *Type:* cdk8s-plus-minus.Service

---

##### `redisService`<sup>Required</sup> <a name="redisService" id="cdk8s-constructs.Immich.property.redisService"></a>

```typescript
public readonly redisService: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### ImportedSecretStore <a name="ImportedSecretStore" id="cdk8s-constructs.ImportedSecretStore"></a>

- *Implements:* <a href="#cdk8s-constructs.ISecretStore">ISecretStore</a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.ImportedSecretStore.Initializer"></a>

```typescript
import { ImportedSecretStore } from 'cdk8s-constructs'

new ImportedSecretStore(scope: Construct, name: string, type: SecretStoreType)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ImportedSecretStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImportedSecretStore.Initializer.parameter.name">name</a></code> | <code>string</code> | The Kubernetes name of this resource. |
| <code><a href="#cdk8s-constructs.ImportedSecretStore.Initializer.parameter.type">type</a></code> | <code><a href="#cdk8s-constructs.SecretStoreType">SecretStoreType</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.ImportedSecretStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ImportedSecretStore.Initializer.parameter.name"></a>

- *Type:* string

The Kubernetes name of this resource.

---

##### `type`<sup>Required</sup> <a name="type" id="cdk8s-constructs.ImportedSecretStore.Initializer.parameter.type"></a>

- *Type:* <a href="#cdk8s-constructs.SecretStoreType">SecretStoreType</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ImportedSecretStore.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.ImportedSecretStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ImportedSecretStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.ImportedSecretStore.isConstruct"></a>

```typescript
import { ImportedSecretStore } from 'cdk8s-constructs'

ImportedSecretStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.ImportedSecretStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ImportedSecretStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.ImportedSecretStore.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.ImportedSecretStore.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. "authorization.k8s.io/v1"). |
| <code><a href="#cdk8s-constructs.ImportedSecretStore.property.kind">kind</a></code> | <code>string</code> | The object kind (e.g. "Deployment"). |
| <code><a href="#cdk8s-constructs.ImportedSecretStore.property.name">name</a></code> | <code>string</code> | The Kubernetes name of this resource. |
| <code><a href="#cdk8s-constructs.ImportedSecretStore.property.resourceType">resourceType</a></code> | <code>string</code> | The name of a resource type as it appears in the relevant API endpoint. |
| <code><a href="#cdk8s-constructs.ImportedSecretStore.property.storeType">storeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.ImportedSecretStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.ImportedSecretStore.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.ImportedSecretStore.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. "authorization.k8s.io/v1").

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.ImportedSecretStore.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind (e.g. "Deployment").

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ImportedSecretStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Kubernetes name of this resource.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk8s-constructs.ImportedSecretStore.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The name of a resource type as it appears in the relevant API endpoint.

---

##### `storeType`<sup>Required</sup> <a name="storeType" id="cdk8s-constructs.ImportedSecretStore.property.storeType"></a>

```typescript
public readonly storeType: string;
```

- *Type:* string

---


### IngressRoute <a name="IngressRoute" id="cdk8s-constructs.IngressRoute"></a>

IngressRoute is the CRD implementation of a Traefik HTTP Router.

#### Initializers <a name="Initializers" id="cdk8s-constructs.IngressRoute.Initializer"></a>

```typescript
import { IngressRoute } from 'cdk8s-constructs'

new IngressRoute(scope: Construct, id: string, props: IngressRouteProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which to define this object. |
| <code><a href="#cdk8s-constructs.IngressRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | a scope-local name for the object. |
| <code><a href="#cdk8s-constructs.IngressRoute.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.IngressRouteProps">IngressRouteProps</a></code> | initialization props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.IngressRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.IngressRoute.Initializer.parameter.id"></a>

- *Type:* string

a scope-local name for the object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.IngressRoute.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.IngressRouteProps">IngressRouteProps</a>

initialization props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.IngressRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.IngressRoute.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s-constructs.IngressRoute.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s-constructs.IngressRoute.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.IngressRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.IngressRoute.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.IngressRoute.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s-constructs.IngressRoute.addJsonPatch"></a>

```typescript
public addJsonPatch(ops: JsonPatch): void
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```typescript
  kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s-constructs.IngressRoute.addJsonPatch.parameter.ops"></a>

- *Type:* cdk8s.JsonPatch

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.IngressRoute.toJson"></a>

```typescript
public toJson(): any
```

Renders the object to Kubernetes JSON.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.IngressRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.IngressRoute.isApiObject">isApiObject</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s-constructs.IngressRoute.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |
| <code><a href="#cdk8s-constructs.IngressRoute.manifest">manifest</a></code> | Renders a Kubernetes manifest for "IngressRoute". |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.IngressRoute.isConstruct"></a>

```typescript
import { IngressRoute } from 'cdk8s-constructs'

IngressRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.IngressRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s-constructs.IngressRoute.isApiObject"></a>

```typescript
import { IngressRoute } from 'cdk8s-constructs'

IngressRoute.isApiObject(o: any)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s-constructs.IngressRoute.isApiObject.parameter.o"></a>

- *Type:* any

The object to check.

---

##### `of` <a name="of" id="cdk8s-constructs.IngressRoute.of"></a>

```typescript
import { IngressRoute } from 'cdk8s-constructs'

IngressRoute.of(c: IConstruct)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` _or_ if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.IngressRoute.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

##### `manifest` <a name="manifest" id="cdk8s-constructs.IngressRoute.manifest"></a>

```typescript
import { IngressRoute } from 'cdk8s-constructs'

IngressRoute.manifest(props: IngressRouteProps)
```

Renders a Kubernetes manifest for "IngressRoute".

This can be used to inline resource manifests inside other objects (e.g. as templates).

###### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.IngressRoute.manifest.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.IngressRouteProps">IngressRouteProps</a>

initialization props.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.IngressRoute.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.IngressRoute.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s-constructs.IngressRoute.property.chart">chart</a></code> | <code>cdk8s.Chart</code> | The chart in which this object is defined. |
| <code><a href="#cdk8s-constructs.IngressRoute.property.kind">kind</a></code> | <code>string</code> | The object kind. |
| <code><a href="#cdk8s-constructs.IngressRoute.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | Metadata associated with this API object. |
| <code><a href="#cdk8s-constructs.IngressRoute.property.name">name</a></code> | <code>string</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.IngressRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.IngressRoute.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.IngressRoute.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.IngressRoute.property.chart"></a>

```typescript
public readonly chart: Chart;
```

- *Type:* cdk8s.Chart

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.IngressRoute.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.IngressRoute.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.IngressRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRoute.property.GVK">GVK</a></code> | <code>cdk8s.GroupVersionKind</code> | Returns the apiVersion and kind for "IngressRoute". |

---

##### `GVK`<sup>Required</sup> <a name="GVK" id="cdk8s-constructs.IngressRoute.property.GVK"></a>

```typescript
public readonly GVK: GroupVersionKind;
```

- *Type:* cdk8s.GroupVersionKind

Returns the apiVersion and kind for "IngressRoute".

---

### IngressRouteTcp <a name="IngressRouteTcp" id="cdk8s-constructs.IngressRouteTcp"></a>

IngressRouteTCP is the CRD implementation of a Traefik TCP Router.

#### Initializers <a name="Initializers" id="cdk8s-constructs.IngressRouteTcp.Initializer"></a>

```typescript
import { IngressRouteTcp } from 'cdk8s-constructs'

new IngressRouteTcp(scope: Construct, id: string, props: IngressRouteTcpProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which to define this object. |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.Initializer.parameter.id">id</a></code> | <code>string</code> | a scope-local name for the object. |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.IngressRouteTcpProps">IngressRouteTcpProps</a></code> | initialization props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.IngressRouteTcp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.IngressRouteTcp.Initializer.parameter.id"></a>

- *Type:* string

a scope-local name for the object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.IngressRouteTcp.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.IngressRouteTcpProps">IngressRouteTcpProps</a>

initialization props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.IngressRouteTcp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.IngressRouteTcp.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.IngressRouteTcp.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s-constructs.IngressRouteTcp.addJsonPatch"></a>

```typescript
public addJsonPatch(ops: JsonPatch): void
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```typescript
  kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s-constructs.IngressRouteTcp.addJsonPatch.parameter.ops"></a>

- *Type:* cdk8s.JsonPatch

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.IngressRouteTcp.toJson"></a>

```typescript
public toJson(): any
```

Renders the object to Kubernetes JSON.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.isApiObject">isApiObject</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.manifest">manifest</a></code> | Renders a Kubernetes manifest for "IngressRouteTCP". |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.IngressRouteTcp.isConstruct"></a>

```typescript
import { IngressRouteTcp } from 'cdk8s-constructs'

IngressRouteTcp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.IngressRouteTcp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s-constructs.IngressRouteTcp.isApiObject"></a>

```typescript
import { IngressRouteTcp } from 'cdk8s-constructs'

IngressRouteTcp.isApiObject(o: any)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s-constructs.IngressRouteTcp.isApiObject.parameter.o"></a>

- *Type:* any

The object to check.

---

##### `of` <a name="of" id="cdk8s-constructs.IngressRouteTcp.of"></a>

```typescript
import { IngressRouteTcp } from 'cdk8s-constructs'

IngressRouteTcp.of(c: IConstruct)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` _or_ if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.IngressRouteTcp.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

##### `manifest` <a name="manifest" id="cdk8s-constructs.IngressRouteTcp.manifest"></a>

```typescript
import { IngressRouteTcp } from 'cdk8s-constructs'

IngressRouteTcp.manifest(props: IngressRouteTcpProps)
```

Renders a Kubernetes manifest for "IngressRouteTCP".

This can be used to inline resource manifests inside other objects (e.g. as templates).

###### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.IngressRouteTcp.manifest.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.IngressRouteTcpProps">IngressRouteTcpProps</a>

initialization props.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.property.chart">chart</a></code> | <code>cdk8s.Chart</code> | The chart in which this object is defined. |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.property.kind">kind</a></code> | <code>string</code> | The object kind. |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | Metadata associated with this API object. |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.property.name">name</a></code> | <code>string</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.IngressRouteTcp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.IngressRouteTcp.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.IngressRouteTcp.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.IngressRouteTcp.property.chart"></a>

```typescript
public readonly chart: Chart;
```

- *Type:* cdk8s.Chart

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.IngressRouteTcp.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.IngressRouteTcp.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.IngressRouteTcp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcp.property.GVK">GVK</a></code> | <code>cdk8s.GroupVersionKind</code> | Returns the apiVersion and kind for "IngressRouteTCP". |

---

##### `GVK`<sup>Required</sup> <a name="GVK" id="cdk8s-constructs.IngressRouteTcp.property.GVK"></a>

```typescript
public readonly GVK: GroupVersionKind;
```

- *Type:* cdk8s.GroupVersionKind

Returns the apiVersion and kind for "IngressRouteTCP".

---

### IngressRouteUdp <a name="IngressRouteUdp" id="cdk8s-constructs.IngressRouteUdp"></a>

IngressRouteUDP is a CRD implementation of a Traefik UDP Router.

#### Initializers <a name="Initializers" id="cdk8s-constructs.IngressRouteUdp.Initializer"></a>

```typescript
import { IngressRouteUdp } from 'cdk8s-constructs'

new IngressRouteUdp(scope: Construct, id: string, props: IngressRouteUdpProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which to define this object. |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.Initializer.parameter.id">id</a></code> | <code>string</code> | a scope-local name for the object. |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.IngressRouteUdpProps">IngressRouteUdpProps</a></code> | initialization props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.IngressRouteUdp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.IngressRouteUdp.Initializer.parameter.id"></a>

- *Type:* string

a scope-local name for the object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.IngressRouteUdp.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.IngressRouteUdpProps">IngressRouteUdpProps</a>

initialization props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.IngressRouteUdp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.IngressRouteUdp.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.IngressRouteUdp.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s-constructs.IngressRouteUdp.addJsonPatch"></a>

```typescript
public addJsonPatch(ops: JsonPatch): void
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```typescript
  kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s-constructs.IngressRouteUdp.addJsonPatch.parameter.ops"></a>

- *Type:* cdk8s.JsonPatch

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.IngressRouteUdp.toJson"></a>

```typescript
public toJson(): any
```

Renders the object to Kubernetes JSON.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.isApiObject">isApiObject</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.manifest">manifest</a></code> | Renders a Kubernetes manifest for "IngressRouteUDP". |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.IngressRouteUdp.isConstruct"></a>

```typescript
import { IngressRouteUdp } from 'cdk8s-constructs'

IngressRouteUdp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.IngressRouteUdp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s-constructs.IngressRouteUdp.isApiObject"></a>

```typescript
import { IngressRouteUdp } from 'cdk8s-constructs'

IngressRouteUdp.isApiObject(o: any)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s-constructs.IngressRouteUdp.isApiObject.parameter.o"></a>

- *Type:* any

The object to check.

---

##### `of` <a name="of" id="cdk8s-constructs.IngressRouteUdp.of"></a>

```typescript
import { IngressRouteUdp } from 'cdk8s-constructs'

IngressRouteUdp.of(c: IConstruct)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` _or_ if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.IngressRouteUdp.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

##### `manifest` <a name="manifest" id="cdk8s-constructs.IngressRouteUdp.manifest"></a>

```typescript
import { IngressRouteUdp } from 'cdk8s-constructs'

IngressRouteUdp.manifest(props: IngressRouteUdpProps)
```

Renders a Kubernetes manifest for "IngressRouteUDP".

This can be used to inline resource manifests inside other objects (e.g. as templates).

###### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.IngressRouteUdp.manifest.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.IngressRouteUdpProps">IngressRouteUdpProps</a>

initialization props.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.property.chart">chart</a></code> | <code>cdk8s.Chart</code> | The chart in which this object is defined. |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.property.kind">kind</a></code> | <code>string</code> | The object kind. |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | Metadata associated with this API object. |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.property.name">name</a></code> | <code>string</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.IngressRouteUdp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.IngressRouteUdp.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.IngressRouteUdp.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.IngressRouteUdp.property.chart"></a>

```typescript
public readonly chart: Chart;
```

- *Type:* cdk8s.Chart

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.IngressRouteUdp.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.IngressRouteUdp.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.IngressRouteUdp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteUdp.property.GVK">GVK</a></code> | <code>cdk8s.GroupVersionKind</code> | Returns the apiVersion and kind for "IngressRouteUDP". |

---

##### `GVK`<sup>Required</sup> <a name="GVK" id="cdk8s-constructs.IngressRouteUdp.property.GVK"></a>

```typescript
public readonly GVK: GroupVersionKind;
```

- *Type:* cdk8s.GroupVersionKind

Returns the apiVersion and kind for "IngressRouteUDP".

---

### Kanidm <a name="Kanidm" id="cdk8s-constructs.Kanidm"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Kanidm.Initializer"></a>

```typescript
import { Kanidm } from 'cdk8s-constructs'

new Kanidm(scope: Construct, name: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Kanidm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Kanidm.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Kanidm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Kanidm.Initializer.parameter.name"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Kanidm.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Kanidm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Kanidm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Kanidm.isConstruct"></a>

```typescript
import { Kanidm } from 'cdk8s-constructs'

Kanidm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Kanidm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Kanidm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Kanidm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Kustomize <a name="Kustomize" id="cdk8s-constructs.Kustomize"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Kustomize.Initializer"></a>

```typescript
import { Kustomize } from 'cdk8s-constructs'

new Kustomize(scope: Construct, name: string, props: KustomizeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Kustomize.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Kustomize.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Kustomize.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.KustomizeProps">KustomizeProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Kustomize.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Kustomize.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Kustomize.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.KustomizeProps">KustomizeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Kustomize.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Kustomize.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Kustomize.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Kustomize.isConstruct"></a>

```typescript
import { Kustomize } from 'cdk8s-constructs'

Kustomize.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Kustomize.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Kustomize.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Kustomize.property.apiObjects">apiObjects</a></code> | <code>cdk8s.ApiObject[]</code> | Returns all the included API objects. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Kustomize.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiObjects`<sup>Required</sup> <a name="apiObjects" id="cdk8s-constructs.Kustomize.property.apiObjects"></a>

```typescript
public readonly apiObjects: ApiObject[];
```

- *Type:* cdk8s.ApiObject[]

Returns all the included API objects.

---


### Lidarr <a name="Lidarr" id="cdk8s-constructs.Lidarr"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Lidarr.Initializer"></a>

```typescript
import { Lidarr } from 'cdk8s-constructs'

new Lidarr(scope: Construct, name: string, props: DeclaredMediaArrAppProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Lidarr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Lidarr.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Lidarr.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.DeclaredMediaArrAppProps">DeclaredMediaArrAppProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Lidarr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Lidarr.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Lidarr.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.DeclaredMediaArrAppProps">DeclaredMediaArrAppProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Lidarr.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Lidarr.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Lidarr.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Lidarr.isConstruct"></a>

```typescript
import { Lidarr } from 'cdk8s-constructs'

Lidarr.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Lidarr.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Lidarr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Lidarr.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Lidarr.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Lidarr.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Lidarr.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.Lidarr.property.deployment"></a>

```typescript
public readonly deployment: HomelabDeployment;
```

- *Type:* <a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.Lidarr.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngress;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a>

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.Lidarr.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### MediaArrApp <a name="MediaArrApp" id="cdk8s-constructs.MediaArrApp"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.MediaArrApp.Initializer"></a>

```typescript
import { MediaArrApp } from 'cdk8s-constructs'

new MediaArrApp(scope: Construct, name: string, props: MediaArrAppProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MediaArrApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrApp.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrApp.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.MediaArrAppProps">MediaArrAppProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.MediaArrApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.MediaArrApp.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.MediaArrApp.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.MediaArrAppProps">MediaArrAppProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.MediaArrApp.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.MediaArrApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.MediaArrApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.MediaArrApp.isConstruct"></a>

```typescript
import { MediaArrApp } from 'cdk8s-constructs'

MediaArrApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.MediaArrApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MediaArrApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.MediaArrApp.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrApp.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrApp.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.MediaArrApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.MediaArrApp.property.deployment"></a>

```typescript
public readonly deployment: HomelabDeployment;
```

- *Type:* <a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.MediaArrApp.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngress;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a>

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.MediaArrApp.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### Middleware <a name="Middleware" id="cdk8s-constructs.Middleware"></a>

Middleware is the CRD implementation of a Traefik Middleware.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/overview/

#### Initializers <a name="Initializers" id="cdk8s-constructs.Middleware.Initializer"></a>

```typescript
import { Middleware } from 'cdk8s-constructs'

new Middleware(scope: Construct, id: string, props: MiddlewareProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Middleware.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which to define this object. |
| <code><a href="#cdk8s-constructs.Middleware.Initializer.parameter.id">id</a></code> | <code>string</code> | a scope-local name for the object. |
| <code><a href="#cdk8s-constructs.Middleware.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.MiddlewareProps">MiddlewareProps</a></code> | initialization props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Middleware.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.Middleware.Initializer.parameter.id"></a>

- *Type:* string

a scope-local name for the object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Middleware.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.MiddlewareProps">MiddlewareProps</a>

initialization props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Middleware.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.Middleware.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s-constructs.Middleware.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s-constructs.Middleware.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Middleware.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.Middleware.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.Middleware.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s-constructs.Middleware.addJsonPatch"></a>

```typescript
public addJsonPatch(ops: JsonPatch): void
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```typescript
  kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s-constructs.Middleware.addJsonPatch.parameter.ops"></a>

- *Type:* cdk8s.JsonPatch

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.Middleware.toJson"></a>

```typescript
public toJson(): any
```

Renders the object to Kubernetes JSON.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Middleware.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.Middleware.isApiObject">isApiObject</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s-constructs.Middleware.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |
| <code><a href="#cdk8s-constructs.Middleware.manifest">manifest</a></code> | Renders a Kubernetes manifest for "Middleware". |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Middleware.isConstruct"></a>

```typescript
import { Middleware } from 'cdk8s-constructs'

Middleware.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Middleware.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s-constructs.Middleware.isApiObject"></a>

```typescript
import { Middleware } from 'cdk8s-constructs'

Middleware.isApiObject(o: any)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s-constructs.Middleware.isApiObject.parameter.o"></a>

- *Type:* any

The object to check.

---

##### `of` <a name="of" id="cdk8s-constructs.Middleware.of"></a>

```typescript
import { Middleware } from 'cdk8s-constructs'

Middleware.of(c: IConstruct)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` _or_ if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.Middleware.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

##### `manifest` <a name="manifest" id="cdk8s-constructs.Middleware.manifest"></a>

```typescript
import { Middleware } from 'cdk8s-constructs'

Middleware.manifest(props: MiddlewareProps)
```

Renders a Kubernetes manifest for "Middleware".

This can be used to inline resource manifests inside other objects (e.g. as templates).

###### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Middleware.manifest.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.MiddlewareProps">MiddlewareProps</a>

initialization props.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Middleware.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Middleware.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.Middleware.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s-constructs.Middleware.property.chart">chart</a></code> | <code>cdk8s.Chart</code> | The chart in which this object is defined. |
| <code><a href="#cdk8s-constructs.Middleware.property.kind">kind</a></code> | <code>string</code> | The object kind. |
| <code><a href="#cdk8s-constructs.Middleware.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | Metadata associated with this API object. |
| <code><a href="#cdk8s-constructs.Middleware.property.name">name</a></code> | <code>string</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Middleware.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.Middleware.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.Middleware.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.Middleware.property.chart"></a>

```typescript
public readonly chart: Chart;
```

- *Type:* cdk8s.Chart

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.Middleware.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.Middleware.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Middleware.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Middleware.property.GVK">GVK</a></code> | <code>cdk8s.GroupVersionKind</code> | Returns the apiVersion and kind for "Middleware". |

---

##### `GVK`<sup>Required</sup> <a name="GVK" id="cdk8s-constructs.Middleware.property.GVK"></a>

```typescript
public readonly GVK: GroupVersionKind;
```

- *Type:* cdk8s.GroupVersionKind

Returns the apiVersion and kind for "Middleware".

---

### MiddlewareTcp <a name="MiddlewareTcp" id="cdk8s-constructs.MiddlewareTcp"></a>

MiddlewareTCP is the CRD implementation of a Traefik TCP middleware.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/overview/

#### Initializers <a name="Initializers" id="cdk8s-constructs.MiddlewareTcp.Initializer"></a>

```typescript
import { MiddlewareTcp } from 'cdk8s-constructs'

new MiddlewareTcp(scope: Construct, id: string, props: MiddlewareTcpProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which to define this object. |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.Initializer.parameter.id">id</a></code> | <code>string</code> | a scope-local name for the object. |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.MiddlewareTcpProps">MiddlewareTcpProps</a></code> | initialization props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.MiddlewareTcp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.MiddlewareTcp.Initializer.parameter.id"></a>

- *Type:* string

a scope-local name for the object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.MiddlewareTcp.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.MiddlewareTcpProps">MiddlewareTcpProps</a>

initialization props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.MiddlewareTcp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.MiddlewareTcp.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.MiddlewareTcp.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s-constructs.MiddlewareTcp.addJsonPatch"></a>

```typescript
public addJsonPatch(ops: JsonPatch): void
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```typescript
  kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s-constructs.MiddlewareTcp.addJsonPatch.parameter.ops"></a>

- *Type:* cdk8s.JsonPatch

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.MiddlewareTcp.toJson"></a>

```typescript
public toJson(): any
```

Renders the object to Kubernetes JSON.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.isApiObject">isApiObject</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.manifest">manifest</a></code> | Renders a Kubernetes manifest for "MiddlewareTCP". |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.MiddlewareTcp.isConstruct"></a>

```typescript
import { MiddlewareTcp } from 'cdk8s-constructs'

MiddlewareTcp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.MiddlewareTcp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s-constructs.MiddlewareTcp.isApiObject"></a>

```typescript
import { MiddlewareTcp } from 'cdk8s-constructs'

MiddlewareTcp.isApiObject(o: any)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s-constructs.MiddlewareTcp.isApiObject.parameter.o"></a>

- *Type:* any

The object to check.

---

##### `of` <a name="of" id="cdk8s-constructs.MiddlewareTcp.of"></a>

```typescript
import { MiddlewareTcp } from 'cdk8s-constructs'

MiddlewareTcp.of(c: IConstruct)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` _or_ if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.MiddlewareTcp.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

##### `manifest` <a name="manifest" id="cdk8s-constructs.MiddlewareTcp.manifest"></a>

```typescript
import { MiddlewareTcp } from 'cdk8s-constructs'

MiddlewareTcp.manifest(props: MiddlewareTcpProps)
```

Renders a Kubernetes manifest for "MiddlewareTCP".

This can be used to inline resource manifests inside other objects (e.g. as templates).

###### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.MiddlewareTcp.manifest.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.MiddlewareTcpProps">MiddlewareTcpProps</a>

initialization props.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.property.chart">chart</a></code> | <code>cdk8s.Chart</code> | The chart in which this object is defined. |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.property.kind">kind</a></code> | <code>string</code> | The object kind. |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | Metadata associated with this API object. |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.property.name">name</a></code> | <code>string</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.MiddlewareTcp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.MiddlewareTcp.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.MiddlewareTcp.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.MiddlewareTcp.property.chart"></a>

```typescript
public readonly chart: Chart;
```

- *Type:* cdk8s.Chart

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.MiddlewareTcp.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.MiddlewareTcp.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.MiddlewareTcp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareTcp.property.GVK">GVK</a></code> | <code>cdk8s.GroupVersionKind</code> | Returns the apiVersion and kind for "MiddlewareTCP". |

---

##### `GVK`<sup>Required</sup> <a name="GVK" id="cdk8s-constructs.MiddlewareTcp.property.GVK"></a>

```typescript
public readonly GVK: GroupVersionKind;
```

- *Type:* cdk8s.GroupVersionKind

Returns the apiVersion and kind for "MiddlewareTCP".

---

### Namespace <a name="Namespace" id="cdk8s-constructs.Namespace"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Namespace.Initializer"></a>

```typescript
import { Namespace } from 'cdk8s-constructs'

new Namespace(scope: Construct, name: string, props: NamespaceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Namespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Namespace.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Namespace.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.NamespaceProps">NamespaceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Namespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Namespace.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Namespace.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.NamespaceProps">NamespaceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Namespace.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Namespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Namespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Namespace.isConstruct"></a>

```typescript
import { Namespace } from 'cdk8s-constructs'

Namespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Namespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Namespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Namespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### OnePasswordClusterSecretStore <a name="OnePasswordClusterSecretStore" id="cdk8s-constructs.OnePasswordClusterSecretStore"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.OnePasswordClusterSecretStore.Initializer"></a>

```typescript
import { OnePasswordClusterSecretStore } from 'cdk8s-constructs'

new OnePasswordClusterSecretStore(scope: Construct, name: string, props: OnePasswordSecretStoreProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.Initializer.parameter.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.OnePasswordSecretStoreProps">OnePasswordSecretStoreProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.OnePasswordClusterSecretStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.OnePasswordClusterSecretStore.Initializer.parameter.name"></a>

- *Type:* string

The name of this API object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.OnePasswordClusterSecretStore.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.OnePasswordSecretStoreProps">OnePasswordSecretStoreProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.asApiResource">asApiResource</a></code> | Return the IApiResource this object represents. |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.asNonApiResource">asNonApiResource</a></code> | Return the non resource url this object represents. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.OnePasswordClusterSecretStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `asApiResource` <a name="asApiResource" id="cdk8s-constructs.OnePasswordClusterSecretStore.asApiResource"></a>

```typescript
public asApiResource(): IApiResource
```

Return the IApiResource this object represents.

##### `asNonApiResource` <a name="asNonApiResource" id="cdk8s-constructs.OnePasswordClusterSecretStore.asNonApiResource"></a>

```typescript
public asNonApiResource(): string
```

Return the non resource url this object represents.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.fromName">fromName</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.OnePasswordClusterSecretStore.isConstruct"></a>

```typescript
import { OnePasswordClusterSecretStore } from 'cdk8s-constructs'

OnePasswordClusterSecretStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.OnePasswordClusterSecretStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromName` <a name="fromName" id="cdk8s-constructs.OnePasswordClusterSecretStore.fromName"></a>

```typescript
import { OnePasswordClusterSecretStore } from 'cdk8s-constructs'

OnePasswordClusterSecretStore.fromName(scope: Construct, name: string, type: SecretStoreType)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.OnePasswordClusterSecretStore.fromName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.OnePasswordClusterSecretStore.fromName.parameter.name"></a>

- *Type:* string

---

###### `type`<sup>Required</sup> <a name="type" id="cdk8s-constructs.OnePasswordClusterSecretStore.fromName.parameter.type"></a>

- *Type:* <a href="#cdk8s-constructs.SecretStoreType">SecretStoreType</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. "authorization.k8s.io"). |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. "authorization.k8s.io/v1"). |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.property.kind">kind</a></code> | <code>string</code> | The object kind (e.g. "Deployment"). |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | *No description.* |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.property.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.property.permissions">permissions</a></code> | <code>cdk8s-plus-27.ResourcePermissions</code> | *No description.* |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.property.resourceType">resourceType</a></code> | <code>string</code> | The name of a resource type as it appears in the relevant API endpoint. |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.property.resourceName">resourceName</a></code> | <code>string</code> | The unique, namespace-global, name of an object inside the Kubernetes cluster. |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.property.storeType">storeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.OnePasswordClusterSecretStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.OnePasswordClusterSecretStore.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. "authorization.k8s.io").

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.OnePasswordClusterSecretStore.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. "authorization.k8s.io/v1").

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.OnePasswordClusterSecretStore.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind (e.g. "Deployment").

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.OnePasswordClusterSecretStore.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.OnePasswordClusterSecretStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this API object.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="cdk8s-constructs.OnePasswordClusterSecretStore.property.permissions"></a>

```typescript
public readonly permissions: ResourcePermissions;
```

- *Type:* cdk8s-plus-27.ResourcePermissions

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk8s-constructs.OnePasswordClusterSecretStore.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The name of a resource type as it appears in the relevant API endpoint.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="cdk8s-constructs.OnePasswordClusterSecretStore.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The unique, namespace-global, name of an object inside the Kubernetes cluster.

If this is omitted, the ApiResource should represent all objects of the given type.

---

##### `storeType`<sup>Required</sup> <a name="storeType" id="cdk8s-constructs.OnePasswordClusterSecretStore.property.storeType"></a>

```typescript
public readonly storeType: string;
```

- *Type:* string

---


### OnepasswordSecretPassword <a name="OnepasswordSecretPassword" id="cdk8s-constructs.OnepasswordSecretPassword"></a>

https://external-secrets.io/latest/provider/1password-automation/.

#### Initializers <a name="Initializers" id="cdk8s-constructs.OnepasswordSecretPassword.Initializer"></a>

```typescript
import { OnepasswordSecretPassword } from 'cdk8s-constructs'

new OnepasswordSecretPassword(scope: Construct, name: string, props: ExternalSecretProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.Initializer.parameter.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.ExternalSecretProps">ExternalSecretProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.OnepasswordSecretPassword.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.OnepasswordSecretPassword.Initializer.parameter.name"></a>

- *Type:* string

The name of this API object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.OnepasswordSecretPassword.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.ExternalSecretProps">ExternalSecretProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.asApiResource">asApiResource</a></code> | Return the IApiResource this object represents. |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.asNonApiResource">asNonApiResource</a></code> | Return the non resource url this object represents. |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.asSecret">asSecret</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.asSecretValue">asSecretValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk8s-constructs.OnepasswordSecretPassword.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `asApiResource` <a name="asApiResource" id="cdk8s-constructs.OnepasswordSecretPassword.asApiResource"></a>

```typescript
public asApiResource(): IApiResource
```

Return the IApiResource this object represents.

##### `asNonApiResource` <a name="asNonApiResource" id="cdk8s-constructs.OnepasswordSecretPassword.asNonApiResource"></a>

```typescript
public asNonApiResource(): string
```

Return the non resource url this object represents.

##### `asSecret` <a name="asSecret" id="cdk8s-constructs.OnepasswordSecretPassword.asSecret"></a>

```typescript
public asSecret(): ISecret
```

##### `asSecretValue` <a name="asSecretValue" id="cdk8s-constructs.OnepasswordSecretPassword.asSecretValue"></a>

```typescript
public asSecretValue(key?: string): SecretValue
```

###### `key`<sup>Optional</sup> <a name="key" id="cdk8s-constructs.OnepasswordSecretPassword.asSecretValue.parameter.key"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.OnepasswordSecretPassword.isConstruct"></a>

```typescript
import { OnepasswordSecretPassword } from 'cdk8s-constructs'

OnepasswordSecretPassword.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.OnepasswordSecretPassword.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. "authorization.k8s.io"). |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. "authorization.k8s.io/v1"). |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.property.kind">kind</a></code> | <code>string</code> | The object kind (e.g. "Deployment"). |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | *No description.* |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.property.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.property.permissions">permissions</a></code> | <code>cdk8s-plus-27.ResourcePermissions</code> | *No description.* |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.property.resourceType">resourceType</a></code> | <code>string</code> | The name of a resource type as it appears in the relevant API endpoint. |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.property.resourceName">resourceName</a></code> | <code>string</code> | The unique, namespace-global, name of an object inside the Kubernetes cluster. |
| <code><a href="#cdk8s-constructs.OnepasswordSecretPassword.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.OnepasswordSecretPassword.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.OnepasswordSecretPassword.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. "authorization.k8s.io").

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.OnepasswordSecretPassword.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. "authorization.k8s.io/v1").

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.OnepasswordSecretPassword.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind (e.g. "Deployment").

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.OnepasswordSecretPassword.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.OnepasswordSecretPassword.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this API object.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="cdk8s-constructs.OnepasswordSecretPassword.property.permissions"></a>

```typescript
public readonly permissions: ResourcePermissions;
```

- *Type:* cdk8s-plus-27.ResourcePermissions

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk8s-constructs.OnepasswordSecretPassword.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The name of a resource type as it appears in the relevant API endpoint.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="cdk8s-constructs.OnepasswordSecretPassword.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The unique, namespace-global, name of an object inside the Kubernetes cluster.

If this is omitted, the ApiResource should represent all objects of the given type.

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="cdk8s-constructs.OnepasswordSecretPassword.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---


### Palworld <a name="Palworld" id="cdk8s-constructs.Palworld"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Palworld.Initializer"></a>

```typescript
import { Palworld } from 'cdk8s-constructs'

new Palworld(scope: Construct, id: string, props: PalworldProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Palworld.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Palworld.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Palworld.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.PalworldProps">PalworldProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Palworld.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.Palworld.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Palworld.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.PalworldProps">PalworldProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Palworld.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Palworld.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Palworld.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Palworld.isConstruct"></a>

```typescript
import { Palworld } from 'cdk8s-constructs'

Palworld.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Palworld.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Palworld.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Palworld.property.deployment">deployment</a></code> | <code>cdk8s-plus-27.Deployment</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Palworld.property.service">service</a></code> | <code>cdk8s-plus-27.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Palworld.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.Palworld.property.deployment"></a>

```typescript
public readonly deployment: Deployment;
```

- *Type:* cdk8s-plus-27.Deployment

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.Palworld.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-27.Service

---


### PersistantVolume <a name="PersistantVolume" id="cdk8s-constructs.PersistantVolume"></a>

Creates a persistant volume claim and volume.

#### Initializers <a name="Initializers" id="cdk8s-constructs.PersistantVolume.Initializer"></a>

```typescript
import { PersistantVolume } from 'cdk8s-constructs'

new PersistantVolume(scope: Construct, name: string, props: PersistantVolumeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.PersistantVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PersistantVolume.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PersistantVolume.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.PersistantVolumeProps">PersistantVolumeProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.PersistantVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.PersistantVolume.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.PersistantVolume.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.PersistantVolumeProps">PersistantVolumeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.PersistantVolume.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.PersistantVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.PersistantVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.PersistantVolume.isConstruct"></a>

```typescript
import { PersistantVolume } from 'cdk8s-constructs'

PersistantVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.PersistantVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.PersistantVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.PersistantVolume.property.claim">claim</a></code> | <code>cdk8s-plus-minus.PersistentVolumeClaim</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PersistantVolume.property.volume">volume</a></code> | <code>cdk8s-plus-minus.Volume</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.PersistantVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `claim`<sup>Required</sup> <a name="claim" id="cdk8s-constructs.PersistantVolume.property.claim"></a>

```typescript
public readonly claim: PersistentVolumeClaim;
```

- *Type:* cdk8s-plus-minus.PersistentVolumeClaim

---

##### `volume`<sup>Required</sup> <a name="volume" id="cdk8s-constructs.PersistantVolume.property.volume"></a>

```typescript
public readonly volume: Volume;
```

- *Type:* cdk8s-plus-minus.Volume

---


### PrometheusRule <a name="PrometheusRule" id="cdk8s-constructs.PrometheusRule"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.PrometheusRule.Initializer"></a>

```typescript
import { PrometheusRule } from 'cdk8s-constructs'

new PrometheusRule(scope: Construct, name: string, props: PrometheusRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.PrometheusRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PrometheusRule.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PrometheusRule.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.PrometheusRuleProps">PrometheusRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.PrometheusRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.PrometheusRule.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.PrometheusRule.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.PrometheusRuleProps">PrometheusRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.PrometheusRule.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.PrometheusRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.PrometheusRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.PrometheusRule.isConstruct"></a>

```typescript
import { PrometheusRule } from 'cdk8s-constructs'

PrometheusRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.PrometheusRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.PrometheusRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.PrometheusRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Provider <a name="Provider" id="cdk8s-constructs.Provider"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Provider.Initializer"></a>

```typescript
import { Provider } from 'cdk8s-constructs'

new Provider(scope: Construct, id: string, props: ProviderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Provider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Provider.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Provider.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.ProviderProps">ProviderProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Provider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.Provider.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Provider.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.ProviderProps">ProviderProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Provider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.Provider.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s-constructs.Provider.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s-constructs.Provider.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Provider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.Provider.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.Provider.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s-constructs.Provider.addJsonPatch"></a>

```typescript
public addJsonPatch(ops: JsonPatch): void
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```typescript
  kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s-constructs.Provider.addJsonPatch.parameter.ops"></a>

- *Type:* cdk8s.JsonPatch

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.Provider.toJson"></a>

```typescript
public toJson(): any
```

Renders the object to Kubernetes JSON.

To disable sorting of dictionary keys in output object set the
`CDK8S_DISABLE_SORT` environment variable to any non-empty value.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Provider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.Provider.isApiObject">isApiObject</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s-constructs.Provider.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Provider.isConstruct"></a>

```typescript
import { Provider } from 'cdk8s-constructs'

Provider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Provider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s-constructs.Provider.isApiObject"></a>

```typescript
import { Provider } from 'cdk8s-constructs'

Provider.isApiObject(o: any)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s-constructs.Provider.isApiObject.parameter.o"></a>

- *Type:* any

The object to check.

---

##### `of` <a name="of" id="cdk8s-constructs.Provider.of"></a>

```typescript
import { Provider } from 'cdk8s-constructs'

Provider.of(c: IConstruct)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` _or_ if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.Provider.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Provider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Provider.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.Provider.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s-constructs.Provider.property.chart">chart</a></code> | <code>cdk8s.Chart</code> | The chart in which this object is defined. |
| <code><a href="#cdk8s-constructs.Provider.property.kind">kind</a></code> | <code>string</code> | The object kind. |
| <code><a href="#cdk8s-constructs.Provider.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | Metadata associated with this API object. |
| <code><a href="#cdk8s-constructs.Provider.property.name">name</a></code> | <code>string</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Provider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.Provider.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.Provider.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.Provider.property.chart"></a>

```typescript
public readonly chart: Chart;
```

- *Type:* cdk8s.Chart

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.Provider.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.Provider.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Provider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Provider.property.GVK">GVK</a></code> | <code>cdk8s.GroupVersionKind</code> | *No description.* |

---

##### `GVK`<sup>Required</sup> <a name="GVK" id="cdk8s-constructs.Provider.property.GVK"></a>

```typescript
public readonly GVK: GroupVersionKind;
```

- *Type:* cdk8s.GroupVersionKind

---

### Prowlarr <a name="Prowlarr" id="cdk8s-constructs.Prowlarr"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Prowlarr.Initializer"></a>

```typescript
import { Prowlarr } from 'cdk8s-constructs'

new Prowlarr(scope: Construct, name: string, props: ArrAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Prowlarr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Prowlarr.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Prowlarr.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.ArrAppOptions">ArrAppOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Prowlarr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Prowlarr.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Prowlarr.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.ArrAppOptions">ArrAppOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Prowlarr.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Prowlarr.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Prowlarr.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Prowlarr.isConstruct"></a>

```typescript
import { Prowlarr } from 'cdk8s-constructs'

Prowlarr.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Prowlarr.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Prowlarr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Prowlarr.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Prowlarr.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Prowlarr.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Prowlarr.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.Prowlarr.property.deployment"></a>

```typescript
public readonly deployment: HomelabDeployment;
```

- *Type:* <a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.Prowlarr.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngress;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a>

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.Prowlarr.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### Radarr <a name="Radarr" id="cdk8s-constructs.Radarr"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Radarr.Initializer"></a>

```typescript
import { Radarr } from 'cdk8s-constructs'

new Radarr(scope: Construct, name: string, props: DeclaredMediaArrAppProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Radarr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Radarr.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Radarr.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.DeclaredMediaArrAppProps">DeclaredMediaArrAppProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Radarr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Radarr.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Radarr.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.DeclaredMediaArrAppProps">DeclaredMediaArrAppProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Radarr.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Radarr.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Radarr.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Radarr.isConstruct"></a>

```typescript
import { Radarr } from 'cdk8s-constructs'

Radarr.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Radarr.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Radarr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Radarr.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Radarr.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Radarr.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Radarr.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.Radarr.property.deployment"></a>

```typescript
public readonly deployment: HomelabDeployment;
```

- *Type:* <a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.Radarr.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngress;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a>

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.Radarr.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### Readarr <a name="Readarr" id="cdk8s-constructs.Readarr"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Readarr.Initializer"></a>

```typescript
import { Readarr } from 'cdk8s-constructs'

new Readarr(scope: Construct, name: string, props: DeclaredMediaArrAppProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Readarr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Readarr.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Readarr.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.DeclaredMediaArrAppProps">DeclaredMediaArrAppProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Readarr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Readarr.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Readarr.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.DeclaredMediaArrAppProps">DeclaredMediaArrAppProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Readarr.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Readarr.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Readarr.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Readarr.isConstruct"></a>

```typescript
import { Readarr } from 'cdk8s-constructs'

Readarr.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Readarr.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Readarr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Readarr.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Readarr.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Readarr.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Readarr.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.Readarr.property.deployment"></a>

```typescript
public readonly deployment: HomelabDeployment;
```

- *Type:* <a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.Readarr.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngress;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a>

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.Readarr.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### Requesterr <a name="Requesterr" id="cdk8s-constructs.Requesterr"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Requesterr.Initializer"></a>

```typescript
import { Requesterr } from 'cdk8s-constructs'

new Requesterr(scope: Construct, name: string, props: RequesterrProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Requesterr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Requesterr.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Requesterr.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.RequesterrProps">RequesterrProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Requesterr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Requesterr.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Requesterr.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.RequesterrProps">RequesterrProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Requesterr.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Requesterr.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Requesterr.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Requesterr.isConstruct"></a>

```typescript
import { Requesterr } from 'cdk8s-constructs'

Requesterr.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Requesterr.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Requesterr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Requesterr.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Requesterr.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Requesterr.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Requesterr.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.Requesterr.property.deployment"></a>

```typescript
public readonly deployment: HomelabDeployment;
```

- *Type:* <a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.Requesterr.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngress;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a>

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.Requesterr.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### ResilioSync <a name="ResilioSync" id="cdk8s-constructs.ResilioSync"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.ResilioSync.Initializer"></a>

```typescript
import { ResilioSync } from 'cdk8s-constructs'

new ResilioSync(scope: Construct, name: string, props: ResilioSyncProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ResilioSync.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ResilioSync.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ResilioSync.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.ResilioSyncProps">ResilioSyncProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.ResilioSync.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ResilioSync.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.ResilioSync.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.ResilioSyncProps">ResilioSyncProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ResilioSync.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.ResilioSync.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ResilioSync.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.ResilioSync.isConstruct"></a>

```typescript
import { ResilioSync } from 'cdk8s-constructs'

ResilioSync.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.ResilioSync.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ResilioSync.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.ResilioSync.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ResilioSync.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ResilioSync.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.ResilioSync.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.ResilioSync.property.deployment"></a>

```typescript
public readonly deployment: HomelabDeployment;
```

- *Type:* <a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.ResilioSync.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngress;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a>

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.ResilioSync.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### SecretStore <a name="SecretStore" id="cdk8s-constructs.SecretStore"></a>

- *Implements:* <a href="#cdk8s-constructs.ISecretStore">ISecretStore</a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.SecretStore.Initializer"></a>

```typescript
import { SecretStore } from 'cdk8s-constructs'

new SecretStore(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.SecretStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.SecretStore.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.SecretStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.SecretStore.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.SecretStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.SecretStore.asApiResource">asApiResource</a></code> | Return the IApiResource this object represents. |
| <code><a href="#cdk8s-constructs.SecretStore.asNonApiResource">asNonApiResource</a></code> | Return the non resource url this object represents. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.SecretStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `asApiResource` <a name="asApiResource" id="cdk8s-constructs.SecretStore.asApiResource"></a>

```typescript
public asApiResource(): IApiResource
```

Return the IApiResource this object represents.

##### `asNonApiResource` <a name="asNonApiResource" id="cdk8s-constructs.SecretStore.asNonApiResource"></a>

```typescript
public asNonApiResource(): string
```

Return the non resource url this object represents.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.SecretStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.SecretStore.fromName">fromName</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.SecretStore.isConstruct"></a>

```typescript
import { SecretStore } from 'cdk8s-constructs'

SecretStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.SecretStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromName` <a name="fromName" id="cdk8s-constructs.SecretStore.fromName"></a>

```typescript
import { SecretStore } from 'cdk8s-constructs'

SecretStore.fromName(scope: Construct, name: string, type: SecretStoreType)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.SecretStore.fromName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.SecretStore.fromName.parameter.name"></a>

- *Type:* string

---

###### `type`<sup>Required</sup> <a name="type" id="cdk8s-constructs.SecretStore.fromName.parameter.type"></a>

- *Type:* <a href="#cdk8s-constructs.SecretStoreType">SecretStoreType</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.SecretStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.SecretStore.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. "authorization.k8s.io"). |
| <code><a href="#cdk8s-constructs.SecretStore.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. "authorization.k8s.io/v1"). |
| <code><a href="#cdk8s-constructs.SecretStore.property.kind">kind</a></code> | <code>string</code> | The object kind (e.g. "Deployment"). |
| <code><a href="#cdk8s-constructs.SecretStore.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | *No description.* |
| <code><a href="#cdk8s-constructs.SecretStore.property.name">name</a></code> | <code>string</code> | The name of this API object. |
| <code><a href="#cdk8s-constructs.SecretStore.property.permissions">permissions</a></code> | <code>cdk8s-plus-27.ResourcePermissions</code> | *No description.* |
| <code><a href="#cdk8s-constructs.SecretStore.property.resourceType">resourceType</a></code> | <code>string</code> | The name of a resource type as it appears in the relevant API endpoint. |
| <code><a href="#cdk8s-constructs.SecretStore.property.resourceName">resourceName</a></code> | <code>string</code> | The unique, namespace-global, name of an object inside the Kubernetes cluster. |
| <code><a href="#cdk8s-constructs.SecretStore.property.storeType">storeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.SecretStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.SecretStore.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. "authorization.k8s.io").

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.SecretStore.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. "authorization.k8s.io/v1").

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.SecretStore.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind (e.g. "Deployment").

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.SecretStore.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.SecretStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this API object.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="cdk8s-constructs.SecretStore.property.permissions"></a>

```typescript
public readonly permissions: ResourcePermissions;
```

- *Type:* cdk8s-plus-27.ResourcePermissions

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk8s-constructs.SecretStore.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The name of a resource type as it appears in the relevant API endpoint.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="cdk8s-constructs.SecretStore.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The unique, namespace-global, name of an object inside the Kubernetes cluster.

If this is omitted, the ApiResource should represent all objects of the given type.

---

##### `storeType`<sup>Required</sup> <a name="storeType" id="cdk8s-constructs.SecretStore.property.storeType"></a>

```typescript
public readonly storeType: string;
```

- *Type:* string

---


### ServersTransport <a name="ServersTransport" id="cdk8s-constructs.ServersTransport"></a>

ServersTransport is the CRD implementation of a ServersTransport.

If no serversTransport is specified, the default@internal will be used. The default@internal serversTransport is created from the static configuration. More info: https://doc.traefik.io/traefik/v2.10/routing/services/#serverstransport_1

#### Initializers <a name="Initializers" id="cdk8s-constructs.ServersTransport.Initializer"></a>

```typescript
import { ServersTransport } from 'cdk8s-constructs'

new ServersTransport(scope: Construct, id: string, props: ServersTransportProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which to define this object. |
| <code><a href="#cdk8s-constructs.ServersTransport.Initializer.parameter.id">id</a></code> | <code>string</code> | a scope-local name for the object. |
| <code><a href="#cdk8s-constructs.ServersTransport.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.ServersTransportProps">ServersTransportProps</a></code> | initialization props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.ServersTransport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.ServersTransport.Initializer.parameter.id"></a>

- *Type:* string

a scope-local name for the object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.ServersTransport.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.ServersTransportProps">ServersTransportProps</a>

initialization props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.ServersTransport.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s-constructs.ServersTransport.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s-constructs.ServersTransport.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.ServersTransport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.ServersTransport.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.ServersTransport.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s-constructs.ServersTransport.addJsonPatch"></a>

```typescript
public addJsonPatch(ops: JsonPatch): void
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```typescript
  kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s-constructs.ServersTransport.addJsonPatch.parameter.ops"></a>

- *Type:* cdk8s.JsonPatch

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.ServersTransport.toJson"></a>

```typescript
public toJson(): any
```

Renders the object to Kubernetes JSON.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.ServersTransport.isApiObject">isApiObject</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s-constructs.ServersTransport.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |
| <code><a href="#cdk8s-constructs.ServersTransport.manifest">manifest</a></code> | Renders a Kubernetes manifest for "ServersTransport". |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.ServersTransport.isConstruct"></a>

```typescript
import { ServersTransport } from 'cdk8s-constructs'

ServersTransport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.ServersTransport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s-constructs.ServersTransport.isApiObject"></a>

```typescript
import { ServersTransport } from 'cdk8s-constructs'

ServersTransport.isApiObject(o: any)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s-constructs.ServersTransport.isApiObject.parameter.o"></a>

- *Type:* any

The object to check.

---

##### `of` <a name="of" id="cdk8s-constructs.ServersTransport.of"></a>

```typescript
import { ServersTransport } from 'cdk8s-constructs'

ServersTransport.of(c: IConstruct)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` _or_ if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.ServersTransport.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

##### `manifest` <a name="manifest" id="cdk8s-constructs.ServersTransport.manifest"></a>

```typescript
import { ServersTransport } from 'cdk8s-constructs'

ServersTransport.manifest(props: ServersTransportProps)
```

Renders a Kubernetes manifest for "ServersTransport".

This can be used to inline resource manifests inside other objects (e.g. as templates).

###### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.ServersTransport.manifest.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.ServersTransportProps">ServersTransportProps</a>

initialization props.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.ServersTransport.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.ServersTransport.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s-constructs.ServersTransport.property.chart">chart</a></code> | <code>cdk8s.Chart</code> | The chart in which this object is defined. |
| <code><a href="#cdk8s-constructs.ServersTransport.property.kind">kind</a></code> | <code>string</code> | The object kind. |
| <code><a href="#cdk8s-constructs.ServersTransport.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | Metadata associated with this API object. |
| <code><a href="#cdk8s-constructs.ServersTransport.property.name">name</a></code> | <code>string</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.ServersTransport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.ServersTransport.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.ServersTransport.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.ServersTransport.property.chart"></a>

```typescript
public readonly chart: Chart;
```

- *Type:* cdk8s.Chart

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.ServersTransport.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.ServersTransport.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ServersTransport.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransport.property.GVK">GVK</a></code> | <code>cdk8s.GroupVersionKind</code> | Returns the apiVersion and kind for "ServersTransport". |

---

##### `GVK`<sup>Required</sup> <a name="GVK" id="cdk8s-constructs.ServersTransport.property.GVK"></a>

```typescript
public readonly GVK: GroupVersionKind;
```

- *Type:* cdk8s.GroupVersionKind

Returns the apiVersion and kind for "ServersTransport".

---

### ServiceMonitor <a name="ServiceMonitor" id="cdk8s-constructs.ServiceMonitor"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.ServiceMonitor.Initializer"></a>

```typescript
import { ServiceMonitor } from 'cdk8s-constructs'

new ServiceMonitor(scope: Construct, name: string, props: ServiceMonitorProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServiceMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ServiceMonitor.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ServiceMonitor.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.ServiceMonitorProps">ServiceMonitorProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.ServiceMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ServiceMonitor.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.ServiceMonitor.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.ServiceMonitorProps">ServiceMonitorProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ServiceMonitor.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.ServiceMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ServiceMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.ServiceMonitor.isConstruct"></a>

```typescript
import { ServiceMonitor } from 'cdk8s-constructs'

ServiceMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.ServiceMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServiceMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.ServiceMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Sonarr <a name="Sonarr" id="cdk8s-constructs.Sonarr"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Sonarr.Initializer"></a>

```typescript
import { Sonarr } from 'cdk8s-constructs'

new Sonarr(scope: Construct, name: string, props: DeclaredMediaArrAppProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Sonarr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Sonarr.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Sonarr.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.DeclaredMediaArrAppProps">DeclaredMediaArrAppProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Sonarr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Sonarr.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Sonarr.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.DeclaredMediaArrAppProps">DeclaredMediaArrAppProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Sonarr.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Sonarr.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Sonarr.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Sonarr.isConstruct"></a>

```typescript
import { Sonarr } from 'cdk8s-constructs'

Sonarr.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Sonarr.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Sonarr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Sonarr.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Sonarr.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Sonarr.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Sonarr.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.Sonarr.property.deployment"></a>

```typescript
public readonly deployment: HomelabDeployment;
```

- *Type:* <a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.Sonarr.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngress;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a>

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.Sonarr.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### Syncthing <a name="Syncthing" id="cdk8s-constructs.Syncthing"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Syncthing.Initializer"></a>

```typescript
import { Syncthing } from 'cdk8s-constructs'

new Syncthing(scope: Construct, name: string, props: SyncthingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Syncthing.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Syncthing.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Syncthing.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.SyncthingProps">SyncthingProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Syncthing.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Syncthing.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Syncthing.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.SyncthingProps">SyncthingProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Syncthing.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Syncthing.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Syncthing.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Syncthing.isConstruct"></a>

```typescript
import { Syncthing } from 'cdk8s-constructs'

Syncthing.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Syncthing.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Syncthing.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Syncthing.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Syncthing.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.Syncthing.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Syncthing.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.Syncthing.property.deployment"></a>

```typescript
public readonly deployment: HomelabDeployment;
```

- *Type:* <a href="#cdk8s-constructs.HomelabDeployment">HomelabDeployment</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.Syncthing.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngress;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngress">HomelabIngress</a>

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.Syncthing.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### Tandoor <a name="Tandoor" id="cdk8s-constructs.Tandoor"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Tandoor.Initializer"></a>

```typescript
import { Tandoor } from 'cdk8s-constructs'

new Tandoor(scope: Construct, name: string, props: TandoorProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Tandoor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Tandoor.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Tandoor.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.TandoorProps">TandoorProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Tandoor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Tandoor.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Tandoor.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.TandoorProps">TandoorProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Tandoor.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Tandoor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Tandoor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Tandoor.isConstruct"></a>

```typescript
import { Tandoor } from 'cdk8s-constructs'

Tandoor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Tandoor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Tandoor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Tandoor.property.deployment">deployment</a></code> | <code>cdk8s-plus-minus.Deployment</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Tandoor.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Tandoor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="cdk8s-constructs.Tandoor.property.deployment"></a>

```typescript
public readonly deployment: Deployment;
```

- *Type:* cdk8s-plus-minus.Deployment

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.Tandoor.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---


### TlsOption <a name="TlsOption" id="cdk8s-constructs.TlsOption"></a>

TLSOption is the CRD implementation of a Traefik TLS Option, allowing to configure some parameters of the TLS connection.

More info: https://doc.traefik.io/traefik/v2.10/https/tls/#tls-options

#### Initializers <a name="Initializers" id="cdk8s-constructs.TlsOption.Initializer"></a>

```typescript
import { TlsOption } from 'cdk8s-constructs'

new TlsOption(scope: Construct, id: string, props: TlsOptionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsOption.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which to define this object. |
| <code><a href="#cdk8s-constructs.TlsOption.Initializer.parameter.id">id</a></code> | <code>string</code> | a scope-local name for the object. |
| <code><a href="#cdk8s-constructs.TlsOption.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.TlsOptionProps">TlsOptionProps</a></code> | initialization props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.TlsOption.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.TlsOption.Initializer.parameter.id"></a>

- *Type:* string

a scope-local name for the object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.TlsOption.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.TlsOptionProps">TlsOptionProps</a>

initialization props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TlsOption.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.TlsOption.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s-constructs.TlsOption.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s-constructs.TlsOption.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.TlsOption.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.TlsOption.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.TlsOption.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s-constructs.TlsOption.addJsonPatch"></a>

```typescript
public addJsonPatch(ops: JsonPatch): void
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```typescript
  kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s-constructs.TlsOption.addJsonPatch.parameter.ops"></a>

- *Type:* cdk8s.JsonPatch

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.TlsOption.toJson"></a>

```typescript
public toJson(): any
```

Renders the object to Kubernetes JSON.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TlsOption.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.TlsOption.isApiObject">isApiObject</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s-constructs.TlsOption.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |
| <code><a href="#cdk8s-constructs.TlsOption.manifest">manifest</a></code> | Renders a Kubernetes manifest for "TLSOption". |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.TlsOption.isConstruct"></a>

```typescript
import { TlsOption } from 'cdk8s-constructs'

TlsOption.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.TlsOption.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s-constructs.TlsOption.isApiObject"></a>

```typescript
import { TlsOption } from 'cdk8s-constructs'

TlsOption.isApiObject(o: any)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s-constructs.TlsOption.isApiObject.parameter.o"></a>

- *Type:* any

The object to check.

---

##### `of` <a name="of" id="cdk8s-constructs.TlsOption.of"></a>

```typescript
import { TlsOption } from 'cdk8s-constructs'

TlsOption.of(c: IConstruct)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` _or_ if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.TlsOption.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

##### `manifest` <a name="manifest" id="cdk8s-constructs.TlsOption.manifest"></a>

```typescript
import { TlsOption } from 'cdk8s-constructs'

TlsOption.manifest(props: TlsOptionProps)
```

Renders a Kubernetes manifest for "TLSOption".

This can be used to inline resource manifests inside other objects (e.g. as templates).

###### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.TlsOption.manifest.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.TlsOptionProps">TlsOptionProps</a>

initialization props.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsOption.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.TlsOption.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.TlsOption.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s-constructs.TlsOption.property.chart">chart</a></code> | <code>cdk8s.Chart</code> | The chart in which this object is defined. |
| <code><a href="#cdk8s-constructs.TlsOption.property.kind">kind</a></code> | <code>string</code> | The object kind. |
| <code><a href="#cdk8s-constructs.TlsOption.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | Metadata associated with this API object. |
| <code><a href="#cdk8s-constructs.TlsOption.property.name">name</a></code> | <code>string</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.TlsOption.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.TlsOption.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.TlsOption.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.TlsOption.property.chart"></a>

```typescript
public readonly chart: Chart;
```

- *Type:* cdk8s.Chart

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.TlsOption.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.TlsOption.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.TlsOption.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsOption.property.GVK">GVK</a></code> | <code>cdk8s.GroupVersionKind</code> | Returns the apiVersion and kind for "TLSOption". |

---

##### `GVK`<sup>Required</sup> <a name="GVK" id="cdk8s-constructs.TlsOption.property.GVK"></a>

```typescript
public readonly GVK: GroupVersionKind;
```

- *Type:* cdk8s.GroupVersionKind

Returns the apiVersion and kind for "TLSOption".

---

### TlsStore <a name="TlsStore" id="cdk8s-constructs.TlsStore"></a>

TLSStore is the CRD implementation of a Traefik TLS Store.

For the time being, only the TLSStore named default is supported. This means that you cannot have two stores that are named default in different Kubernetes namespaces. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#certificates-stores

#### Initializers <a name="Initializers" id="cdk8s-constructs.TlsStore.Initializer"></a>

```typescript
import { TlsStore } from 'cdk8s-constructs'

new TlsStore(scope: Construct, id: string, props: TlsStoreProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which to define this object. |
| <code><a href="#cdk8s-constructs.TlsStore.Initializer.parameter.id">id</a></code> | <code>string</code> | a scope-local name for the object. |
| <code><a href="#cdk8s-constructs.TlsStore.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.TlsStoreProps">TlsStoreProps</a></code> | initialization props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.TlsStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.TlsStore.Initializer.parameter.id"></a>

- *Type:* string

a scope-local name for the object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.TlsStore.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.TlsStoreProps">TlsStoreProps</a>

initialization props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TlsStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.TlsStore.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s-constructs.TlsStore.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s-constructs.TlsStore.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.TlsStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.TlsStore.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.TlsStore.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s-constructs.TlsStore.addJsonPatch"></a>

```typescript
public addJsonPatch(ops: JsonPatch): void
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```typescript
  kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s-constructs.TlsStore.addJsonPatch.parameter.ops"></a>

- *Type:* cdk8s.JsonPatch

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.TlsStore.toJson"></a>

```typescript
public toJson(): any
```

Renders the object to Kubernetes JSON.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TlsStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.TlsStore.isApiObject">isApiObject</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s-constructs.TlsStore.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |
| <code><a href="#cdk8s-constructs.TlsStore.manifest">manifest</a></code> | Renders a Kubernetes manifest for "TLSStore". |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.TlsStore.isConstruct"></a>

```typescript
import { TlsStore } from 'cdk8s-constructs'

TlsStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.TlsStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s-constructs.TlsStore.isApiObject"></a>

```typescript
import { TlsStore } from 'cdk8s-constructs'

TlsStore.isApiObject(o: any)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s-constructs.TlsStore.isApiObject.parameter.o"></a>

- *Type:* any

The object to check.

---

##### `of` <a name="of" id="cdk8s-constructs.TlsStore.of"></a>

```typescript
import { TlsStore } from 'cdk8s-constructs'

TlsStore.of(c: IConstruct)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` _or_ if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.TlsStore.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

##### `manifest` <a name="manifest" id="cdk8s-constructs.TlsStore.manifest"></a>

```typescript
import { TlsStore } from 'cdk8s-constructs'

TlsStore.manifest(props: TlsStoreProps)
```

Renders a Kubernetes manifest for "TLSStore".

This can be used to inline resource manifests inside other objects (e.g. as templates).

###### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.TlsStore.manifest.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.TlsStoreProps">TlsStoreProps</a>

initialization props.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.TlsStore.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.TlsStore.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s-constructs.TlsStore.property.chart">chart</a></code> | <code>cdk8s.Chart</code> | The chart in which this object is defined. |
| <code><a href="#cdk8s-constructs.TlsStore.property.kind">kind</a></code> | <code>string</code> | The object kind. |
| <code><a href="#cdk8s-constructs.TlsStore.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | Metadata associated with this API object. |
| <code><a href="#cdk8s-constructs.TlsStore.property.name">name</a></code> | <code>string</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.TlsStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.TlsStore.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.TlsStore.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.TlsStore.property.chart"></a>

```typescript
public readonly chart: Chart;
```

- *Type:* cdk8s.Chart

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.TlsStore.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.TlsStore.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.TlsStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsStore.property.GVK">GVK</a></code> | <code>cdk8s.GroupVersionKind</code> | Returns the apiVersion and kind for "TLSStore". |

---

##### `GVK`<sup>Required</sup> <a name="GVK" id="cdk8s-constructs.TlsStore.property.GVK"></a>

```typescript
public readonly GVK: GroupVersionKind;
```

- *Type:* cdk8s.GroupVersionKind

Returns the apiVersion and kind for "TLSStore".

---

### TraefikService <a name="TraefikService" id="cdk8s-constructs.TraefikService"></a>

TraefikService is the CRD implementation of a Traefik Service.

TraefikService object allows to: - Apply weight to Services on load-balancing - Mirror traffic on services More info: https://doc.traefik.io/traefik/v2.10/routing/providers/kubernetes-crd/#kind-traefikservice

#### Initializers <a name="Initializers" id="cdk8s-constructs.TraefikService.Initializer"></a>

```typescript
import { TraefikService } from 'cdk8s-constructs'

new TraefikService(scope: Construct, id: string, props: TraefikServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which to define this object. |
| <code><a href="#cdk8s-constructs.TraefikService.Initializer.parameter.id">id</a></code> | <code>string</code> | a scope-local name for the object. |
| <code><a href="#cdk8s-constructs.TraefikService.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceProps">TraefikServiceProps</a></code> | initialization props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.TraefikService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.TraefikService.Initializer.parameter.id"></a>

- *Type:* string

a scope-local name for the object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.TraefikService.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.TraefikServiceProps">TraefikServiceProps</a>

initialization props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TraefikService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.TraefikService.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s-constructs.TraefikService.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s-constructs.TraefikService.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.TraefikService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.TraefikService.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.TraefikService.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s-constructs.TraefikService.addJsonPatch"></a>

```typescript
public addJsonPatch(ops: JsonPatch): void
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```typescript
  kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s-constructs.TraefikService.addJsonPatch.parameter.ops"></a>

- *Type:* cdk8s.JsonPatch

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.TraefikService.toJson"></a>

```typescript
public toJson(): any
```

Renders the object to Kubernetes JSON.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TraefikService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.TraefikService.isApiObject">isApiObject</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s-constructs.TraefikService.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |
| <code><a href="#cdk8s-constructs.TraefikService.manifest">manifest</a></code> | Renders a Kubernetes manifest for "TraefikService". |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.TraefikService.isConstruct"></a>

```typescript
import { TraefikService } from 'cdk8s-constructs'

TraefikService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.TraefikService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s-constructs.TraefikService.isApiObject"></a>

```typescript
import { TraefikService } from 'cdk8s-constructs'

TraefikService.isApiObject(o: any)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s-constructs.TraefikService.isApiObject.parameter.o"></a>

- *Type:* any

The object to check.

---

##### `of` <a name="of" id="cdk8s-constructs.TraefikService.of"></a>

```typescript
import { TraefikService } from 'cdk8s-constructs'

TraefikService.of(c: IConstruct)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` _or_ if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.TraefikService.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

##### `manifest` <a name="manifest" id="cdk8s-constructs.TraefikService.manifest"></a>

```typescript
import { TraefikService } from 'cdk8s-constructs'

TraefikService.manifest(props: TraefikServiceProps)
```

Renders a Kubernetes manifest for "TraefikService".

This can be used to inline resource manifests inside other objects (e.g. as templates).

###### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.TraefikService.manifest.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.TraefikServiceProps">TraefikServiceProps</a>

initialization props.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.TraefikService.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.TraefikService.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s-constructs.TraefikService.property.chart">chart</a></code> | <code>cdk8s.Chart</code> | The chart in which this object is defined. |
| <code><a href="#cdk8s-constructs.TraefikService.property.kind">kind</a></code> | <code>string</code> | The object kind. |
| <code><a href="#cdk8s-constructs.TraefikService.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | Metadata associated with this API object. |
| <code><a href="#cdk8s-constructs.TraefikService.property.name">name</a></code> | <code>string</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.TraefikService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.TraefikService.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.TraefikService.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.TraefikService.property.chart"></a>

```typescript
public readonly chart: Chart;
```

- *Type:* cdk8s.Chart

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.TraefikService.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.TraefikService.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.TraefikService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikService.property.GVK">GVK</a></code> | <code>cdk8s.GroupVersionKind</code> | Returns the apiVersion and kind for "TraefikService". |

---

##### `GVK`<sup>Required</sup> <a name="GVK" id="cdk8s-constructs.TraefikService.property.GVK"></a>

```typescript
public readonly GVK: GroupVersionKind;
```

- *Type:* cdk8s.GroupVersionKind

Returns the apiVersion and kind for "TraefikService".

---

### Tunnel <a name="Tunnel" id="cdk8s-constructs.Tunnel"></a>

Tunnel is the Schema for the tunnels API.

#### Initializers <a name="Initializers" id="cdk8s-constructs.Tunnel.Initializer"></a>

```typescript
import { Tunnel } from 'cdk8s-constructs'

new Tunnel(scope: Construct, id: string, props?: TunnelProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Tunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which to define this object. |
| <code><a href="#cdk8s-constructs.Tunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | a scope-local name for the object. |
| <code><a href="#cdk8s-constructs.Tunnel.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.TunnelProps">TunnelProps</a></code> | initialization props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Tunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.Tunnel.Initializer.parameter.id"></a>

- *Type:* string

a scope-local name for the object.

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk8s-constructs.Tunnel.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.TunnelProps">TunnelProps</a>

initialization props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Tunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.Tunnel.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s-constructs.Tunnel.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s-constructs.Tunnel.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Tunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.Tunnel.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.Tunnel.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s-constructs.Tunnel.addJsonPatch"></a>

```typescript
public addJsonPatch(ops: JsonPatch): void
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```typescript
  kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s-constructs.Tunnel.addJsonPatch.parameter.ops"></a>

- *Type:* cdk8s.JsonPatch

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.Tunnel.toJson"></a>

```typescript
public toJson(): any
```

Renders the object to Kubernetes JSON.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Tunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.Tunnel.isApiObject">isApiObject</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s-constructs.Tunnel.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |
| <code><a href="#cdk8s-constructs.Tunnel.manifest">manifest</a></code> | Renders a Kubernetes manifest for "Tunnel". |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.Tunnel.isConstruct"></a>

```typescript
import { Tunnel } from 'cdk8s-constructs'

Tunnel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.Tunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s-constructs.Tunnel.isApiObject"></a>

```typescript
import { Tunnel } from 'cdk8s-constructs'

Tunnel.isApiObject(o: any)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s-constructs.Tunnel.isApiObject.parameter.o"></a>

- *Type:* any

The object to check.

---

##### `of` <a name="of" id="cdk8s-constructs.Tunnel.of"></a>

```typescript
import { Tunnel } from 'cdk8s-constructs'

Tunnel.of(c: IConstruct)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` _or_ if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.Tunnel.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

##### `manifest` <a name="manifest" id="cdk8s-constructs.Tunnel.manifest"></a>

```typescript
import { Tunnel } from 'cdk8s-constructs'

Tunnel.manifest(props?: TunnelProps)
```

Renders a Kubernetes manifest for "Tunnel".

This can be used to inline resource manifests inside other objects (e.g. as templates).

###### `props`<sup>Optional</sup> <a name="props" id="cdk8s-constructs.Tunnel.manifest.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.TunnelProps">TunnelProps</a>

initialization props.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Tunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Tunnel.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.Tunnel.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s-constructs.Tunnel.property.chart">chart</a></code> | <code>cdk8s.Chart</code> | The chart in which this object is defined. |
| <code><a href="#cdk8s-constructs.Tunnel.property.kind">kind</a></code> | <code>string</code> | The object kind. |
| <code><a href="#cdk8s-constructs.Tunnel.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | Metadata associated with this API object. |
| <code><a href="#cdk8s-constructs.Tunnel.property.name">name</a></code> | <code>string</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Tunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.Tunnel.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.Tunnel.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.Tunnel.property.chart"></a>

```typescript
public readonly chart: Chart;
```

- *Type:* cdk8s.Chart

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.Tunnel.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.Tunnel.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Tunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Tunnel.property.GVK">GVK</a></code> | <code>cdk8s.GroupVersionKind</code> | Returns the apiVersion and kind for "Tunnel". |

---

##### `GVK`<sup>Required</sup> <a name="GVK" id="cdk8s-constructs.Tunnel.property.GVK"></a>

```typescript
public readonly GVK: GroupVersionKind;
```

- *Type:* cdk8s.GroupVersionKind

Returns the apiVersion and kind for "Tunnel".

---

### TunnelBinding <a name="TunnelBinding" id="cdk8s-constructs.TunnelBinding"></a>

TunnelBinding is the Schema for the tunnelbindings API.

#### Initializers <a name="Initializers" id="cdk8s-constructs.TunnelBinding.Initializer"></a>

```typescript
import { TunnelBinding } from 'cdk8s-constructs'

new TunnelBinding(scope: Construct, id: string, props: TunnelBindingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TunnelBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope in which to define this object. |
| <code><a href="#cdk8s-constructs.TunnelBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | a scope-local name for the object. |
| <code><a href="#cdk8s-constructs.TunnelBinding.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.TunnelBindingProps">TunnelBindingProps</a></code> | initialization props. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.TunnelBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which to define this object.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-constructs.TunnelBinding.Initializer.parameter.id"></a>

- *Type:* string

a scope-local name for the object.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.TunnelBinding.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.TunnelBindingProps">TunnelBindingProps</a>

initialization props.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TunnelBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk8s-constructs.TunnelBinding.addDependency">addDependency</a></code> | Create a dependency between this ApiObject and other constructs. |
| <code><a href="#cdk8s-constructs.TunnelBinding.addJsonPatch">addJsonPatch</a></code> | Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object. |
| <code><a href="#cdk8s-constructs.TunnelBinding.toJson">toJson</a></code> | Renders the object to Kubernetes JSON. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.TunnelBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk8s-constructs.TunnelBinding.addDependency"></a>

```typescript
public addDependency(dependencies: IConstruct): void
```

Create a dependency between this ApiObject and other constructs.

These can be other ApiObjects, Charts, or custom.

###### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk8s-constructs.TunnelBinding.addDependency.parameter.dependencies"></a>

- *Type:* constructs.IConstruct

the dependencies to add.

---

##### `addJsonPatch` <a name="addJsonPatch" id="cdk8s-constructs.TunnelBinding.addJsonPatch"></a>

```typescript
public addJsonPatch(ops: JsonPatch): void
```

Applies a set of RFC-6902 JSON-Patch operations to the manifest synthesized for this API object.

*Example*

```typescript
  kubePod.addJsonPatch(JsonPatch.replace('/spec/enableServiceLinks', true));
```


###### `ops`<sup>Required</sup> <a name="ops" id="cdk8s-constructs.TunnelBinding.addJsonPatch.parameter.ops"></a>

- *Type:* cdk8s.JsonPatch

The JSON-Patch operations to apply.

---

##### `toJson` <a name="toJson" id="cdk8s-constructs.TunnelBinding.toJson"></a>

```typescript
public toJson(): any
```

Renders the object to Kubernetes JSON.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TunnelBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk8s-constructs.TunnelBinding.isApiObject">isApiObject</a></code> | Return whether the given object is an `ApiObject`. |
| <code><a href="#cdk8s-constructs.TunnelBinding.of">of</a></code> | Returns the `ApiObject` named `Resource` which is a child of the given construct. |
| <code><a href="#cdk8s-constructs.TunnelBinding.manifest">manifest</a></code> | Renders a Kubernetes manifest for "TunnelBinding". |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-constructs.TunnelBinding.isConstruct"></a>

```typescript
import { TunnelBinding } from 'cdk8s-constructs'

TunnelBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-constructs.TunnelBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApiObject` <a name="isApiObject" id="cdk8s-constructs.TunnelBinding.isApiObject"></a>

```typescript
import { TunnelBinding } from 'cdk8s-constructs'

TunnelBinding.isApiObject(o: any)
```

Return whether the given object is an `ApiObject`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `o`<sup>Required</sup> <a name="o" id="cdk8s-constructs.TunnelBinding.isApiObject.parameter.o"></a>

- *Type:* any

The object to check.

---

##### `of` <a name="of" id="cdk8s-constructs.TunnelBinding.of"></a>

```typescript
import { TunnelBinding } from 'cdk8s-constructs'

TunnelBinding.of(c: IConstruct)
```

Returns the `ApiObject` named `Resource` which is a child of the given construct.

If `c` is an `ApiObject`, it is returned directly. Throws an
exception if the construct does not have a child named `Default` _or_ if
this child is not an `ApiObject`.

###### `c`<sup>Required</sup> <a name="c" id="cdk8s-constructs.TunnelBinding.of.parameter.c"></a>

- *Type:* constructs.IConstruct

The higher-level construct.

---

##### `manifest` <a name="manifest" id="cdk8s-constructs.TunnelBinding.manifest"></a>

```typescript
import { TunnelBinding } from 'cdk8s-constructs'

TunnelBinding.manifest(props: TunnelBindingProps)
```

Renders a Kubernetes manifest for "TunnelBinding".

This can be used to inline resource manifests inside other objects (e.g. as templates).

###### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.TunnelBinding.manifest.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.TunnelBindingProps">TunnelBindingProps</a>

initialization props.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TunnelBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.TunnelBinding.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.TunnelBinding.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. `authorization.k8s.io/v1`). |
| <code><a href="#cdk8s-constructs.TunnelBinding.property.chart">chart</a></code> | <code>cdk8s.Chart</code> | The chart in which this object is defined. |
| <code><a href="#cdk8s-constructs.TunnelBinding.property.kind">kind</a></code> | <code>string</code> | The object kind. |
| <code><a href="#cdk8s-constructs.TunnelBinding.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadataDefinition</code> | Metadata associated with this API object. |
| <code><a href="#cdk8s-constructs.TunnelBinding.property.name">name</a></code> | <code>string</code> | The name of the API object. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.TunnelBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.TunnelBinding.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.TunnelBinding.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. `authorization.k8s.io/v1`).

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.TunnelBinding.property.chart"></a>

```typescript
public readonly chart: Chart;
```

- *Type:* cdk8s.Chart

The chart in which this object is defined.

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.TunnelBinding.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.TunnelBinding.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadataDefinition;
```

- *Type:* cdk8s.ApiObjectMetadataDefinition

Metadata associated with this API object.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.TunnelBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API object.

If a name is specified in `metadata.name` this will be the name returned.
Otherwise, a name will be generated by calling
`Chart.of(this).generatedObjectName(this)`, which by default uses the
construct path to generate a DNS-compatible name for the resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TunnelBinding.property.GVK">GVK</a></code> | <code>cdk8s.GroupVersionKind</code> | Returns the apiVersion and kind for "TunnelBinding". |

---

##### `GVK`<sup>Required</sup> <a name="GVK" id="cdk8s-constructs.TunnelBinding.property.GVK"></a>

```typescript
public readonly GVK: GroupVersionKind;
```

- *Type:* cdk8s.GroupVersionKind

Returns the apiVersion and kind for "TunnelBinding".

---

## Structs <a name="Structs" id="Structs"></a>

### Annotation <a name="Annotation" id="cdk8s-constructs.Annotation"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.Annotation.Initializer"></a>

```typescript
import { Annotation } from 'cdk8s-constructs'

const annotation: Annotation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Annotation.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Annotation.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="cdk8s-constructs.Annotation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.Annotation.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### ApplicationProps <a name="ApplicationProps" id="cdk8s-constructs.ApplicationProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ApplicationProps.Initializer"></a>

```typescript
import { ApplicationProps } from 'cdk8s-constructs'

const applicationProps: ApplicationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ApplicationProps.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ApplicationProps.property.jwtSecret">jwtSecret</a></code> | <code>cdk8s-plus-minus.SecretValue</code> | Generate with `openssl rand --hex 16` and save to a secret that is passed. |
| <code><a href="#cdk8s-constructs.ApplicationProps.property.pdsAdminPasswordSecret">pdsAdminPasswordSecret</a></code> | <code>cdk8s-plus-minus.SecretValue</code> | Generate with `openssl rand --hex 16` and save to a secret that is passed. |
| <code><a href="#cdk8s-constructs.ApplicationProps.property.pdsPlcRotationKeyK256PrivateKeyHex">pdsPlcRotationKeyK256PrivateKeyHex</a></code> | <code>cdk8s-plus-minus.SecretValue</code> | Generate with `openssl ecparam --name secp256k1 --genkey --noout --outform DER \| tail --bytes=+8 \| head --bytes=32 \| xxd --plain --cols 32` and save to a secret that is passed. |
| <code><a href="#cdk8s-constructs.ApplicationProps.property.disableLogging">disableLogging</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ApplicationProps.property.serviceHandleDomains">serviceHandleDomains</a></code> | <code>string[]</code> | *No description.* |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="cdk8s-constructs.ApplicationProps.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `jwtSecret`<sup>Required</sup> <a name="jwtSecret" id="cdk8s-constructs.ApplicationProps.property.jwtSecret"></a>

```typescript
public readonly jwtSecret: SecretValue;
```

- *Type:* cdk8s-plus-minus.SecretValue

Generate with `openssl rand --hex 16` and save to a secret that is passed.

---

##### `pdsAdminPasswordSecret`<sup>Required</sup> <a name="pdsAdminPasswordSecret" id="cdk8s-constructs.ApplicationProps.property.pdsAdminPasswordSecret"></a>

```typescript
public readonly pdsAdminPasswordSecret: SecretValue;
```

- *Type:* cdk8s-plus-minus.SecretValue

Generate with `openssl rand --hex 16` and save to a secret that is passed.

---

##### `pdsPlcRotationKeyK256PrivateKeyHex`<sup>Required</sup> <a name="pdsPlcRotationKeyK256PrivateKeyHex" id="cdk8s-constructs.ApplicationProps.property.pdsPlcRotationKeyK256PrivateKeyHex"></a>

```typescript
public readonly pdsPlcRotationKeyK256PrivateKeyHex: SecretValue;
```

- *Type:* cdk8s-plus-minus.SecretValue

Generate with `openssl ecparam --name secp256k1 --genkey --noout --outform DER | tail --bytes=+8 | head --bytes=32 | xxd --plain --cols 32` and save to a secret that is passed.

---

##### `disableLogging`<sup>Optional</sup> <a name="disableLogging" id="cdk8s-constructs.ApplicationProps.property.disableLogging"></a>

```typescript
public readonly disableLogging: boolean;
```

- *Type:* boolean

---

##### `serviceHandleDomains`<sup>Optional</sup> <a name="serviceHandleDomains" id="cdk8s-constructs.ApplicationProps.property.serviceHandleDomains"></a>

```typescript
public readonly serviceHandleDomains: string[];
```

- *Type:* string[]

---

### ArrAppApplicationOption <a name="ArrAppApplicationOption" id="cdk8s-constructs.ArrAppApplicationOption"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ArrAppApplicationOption.Initializer"></a>

```typescript
import { ArrAppApplicationOption } from 'cdk8s-constructs'

const arrAppApplicationOption: ArrAppApplicationOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ArrAppApplicationOption.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppApplicationOption.property.port">port</a></code> | <code>number</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ArrAppApplicationOption.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="cdk8s-constructs.ArrAppApplicationOption.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

### ArrAppOptions <a name="ArrAppOptions" id="cdk8s-constructs.ArrAppOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ArrAppOptions.Initializer"></a>

```typescript
import { ArrAppOptions } from 'cdk8s-constructs'

const arrAppOptions: ArrAppOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ArrAppOptions.property.config">config</a></code> | <code><a href="#cdk8s-constructs.ConfigVolumeOptions">ConfigVolumeOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppOptions.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppOptions.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.DeploymentOptions">DeploymentOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppOptions.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppOptions.property.metrics">metrics</a></code> | <code><a href="#cdk8s-constructs.MetricOptions">MetricOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppOptions.property.probe">probe</a></code> | <code><a href="#cdk8s-constructs.ProbeOptions">ProbeOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppOptions.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppOptions.property.volumeMounts">volumeMounts</a></code> | <code>cdk8s-plus-minus.VolumeMount[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppOptions.property.webPort">webPort</a></code> | <code>number</code> | *No description.* |

---

##### `config`<sup>Required</sup> <a name="config" id="cdk8s-constructs.ArrAppOptions.property.config"></a>

```typescript
public readonly config: ConfigVolumeOptions;
```

- *Type:* <a href="#cdk8s-constructs.ConfigVolumeOptions">ConfigVolumeOptions</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.ArrAppOptions.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngressOptions;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a>

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="cdk8s-constructs.ArrAppOptions.property.deployment"></a>

```typescript
public readonly deployment: DeploymentOptions;
```

- *Type:* <a href="#cdk8s-constructs.DeploymentOptions">DeploymentOptions</a>

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.ArrAppOptions.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="cdk8s-constructs.ArrAppOptions.property.metrics"></a>

```typescript
public readonly metrics: MetricOptions;
```

- *Type:* <a href="#cdk8s-constructs.MetricOptions">MetricOptions</a>

---

##### `probe`<sup>Optional</sup> <a name="probe" id="cdk8s-constructs.ArrAppOptions.property.probe"></a>

```typescript
public readonly probe: ProbeOptions;
```

- *Type:* <a href="#cdk8s-constructs.ProbeOptions">ProbeOptions</a>

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="cdk8s-constructs.ArrAppOptions.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="cdk8s-constructs.ArrAppOptions.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: VolumeMount[];
```

- *Type:* cdk8s-plus-minus.VolumeMount[]

---

##### `webPort`<sup>Optional</sup> <a name="webPort" id="cdk8s-constructs.ArrAppOptions.property.webPort"></a>

```typescript
public readonly webPort: number;
```

- *Type:* number

---

### ArrAppProps <a name="ArrAppProps" id="cdk8s-constructs.ArrAppProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ArrAppProps.Initializer"></a>

```typescript
import { ArrAppProps } from 'cdk8s-constructs'

const arrAppProps: ArrAppProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ArrAppProps.property.app">app</a></code> | <code><a href="#cdk8s-constructs.ArrAppApplicationOption">ArrAppApplicationOption</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppProps.property.config">config</a></code> | <code><a href="#cdk8s-constructs.ConfigVolumeOptions">ConfigVolumeOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppProps.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppProps.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppProps.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.DeploymentOptions">DeploymentOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppProps.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppProps.property.metrics">metrics</a></code> | <code><a href="#cdk8s-constructs.MetricOptions">MetricOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppProps.property.probe">probe</a></code> | <code><a href="#cdk8s-constructs.ProbeOptions">ProbeOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppProps.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppProps.property.volumeMounts">volumeMounts</a></code> | <code>cdk8s-plus-minus.VolumeMount[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppProps.property.webPort">webPort</a></code> | <code>number</code> | *No description.* |

---

##### `app`<sup>Required</sup> <a name="app" id="cdk8s-constructs.ArrAppProps.property.app"></a>

```typescript
public readonly app: ArrAppApplicationOption;
```

- *Type:* <a href="#cdk8s-constructs.ArrAppApplicationOption">ArrAppApplicationOption</a>

---

##### `config`<sup>Required</sup> <a name="config" id="cdk8s-constructs.ArrAppProps.property.config"></a>

```typescript
public readonly config: ConfigVolumeOptions;
```

- *Type:* <a href="#cdk8s-constructs.ConfigVolumeOptions">ConfigVolumeOptions</a>

---

##### `image`<sup>Required</sup> <a name="image" id="cdk8s-constructs.ArrAppProps.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.ArrAppProps.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngressOptions;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a>

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="cdk8s-constructs.ArrAppProps.property.deployment"></a>

```typescript
public readonly deployment: DeploymentOptions;
```

- *Type:* <a href="#cdk8s-constructs.DeploymentOptions">DeploymentOptions</a>

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.ArrAppProps.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="cdk8s-constructs.ArrAppProps.property.metrics"></a>

```typescript
public readonly metrics: MetricOptions;
```

- *Type:* <a href="#cdk8s-constructs.MetricOptions">MetricOptions</a>

---

##### `probe`<sup>Optional</sup> <a name="probe" id="cdk8s-constructs.ArrAppProps.property.probe"></a>

```typescript
public readonly probe: ProbeOptions;
```

- *Type:* <a href="#cdk8s-constructs.ProbeOptions">ProbeOptions</a>

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="cdk8s-constructs.ArrAppProps.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="cdk8s-constructs.ArrAppProps.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: VolumeMount[];
```

- *Type:* cdk8s-plus-minus.VolumeMount[]

---

##### `webPort`<sup>Optional</sup> <a name="webPort" id="cdk8s-constructs.ArrAppProps.property.webPort"></a>

```typescript
public readonly webPort: number;
```

- *Type:* number

---

### ArrAppStorageOptions <a name="ArrAppStorageOptions" id="cdk8s-constructs.ArrAppStorageOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ArrAppStorageOptions.Initializer"></a>

```typescript
import { ArrAppStorageOptions } from 'cdk8s-constructs'

const arrAppStorageOptions: ArrAppStorageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ArrAppStorageOptions.property.config">config</a></code> | <code><a href="#cdk8s-constructs.ConfigVolumeOptions">ConfigVolumeOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppStorageOptions.property.media">media</a></code> | <code>cdk8s-plus-minus.VolumeMount</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ArrAppStorageOptions.property.downloads">downloads</a></code> | <code>cdk8s-plus-minus.VolumeMount</code> | *No description.* |

---

##### `config`<sup>Required</sup> <a name="config" id="cdk8s-constructs.ArrAppStorageOptions.property.config"></a>

```typescript
public readonly config: ConfigVolumeOptions;
```

- *Type:* <a href="#cdk8s-constructs.ConfigVolumeOptions">ConfigVolumeOptions</a>

---

##### `media`<sup>Required</sup> <a name="media" id="cdk8s-constructs.ArrAppStorageOptions.property.media"></a>

```typescript
public readonly media: VolumeMount;
```

- *Type:* cdk8s-plus-minus.VolumeMount

---

##### `downloads`<sup>Optional</sup> <a name="downloads" id="cdk8s-constructs.ArrAppStorageOptions.property.downloads"></a>

```typescript
public readonly downloads: VolumeMount;
```

- *Type:* cdk8s-plus-minus.VolumeMount

---

### BaseTunnelOptions <a name="BaseTunnelOptions" id="cdk8s-constructs.BaseTunnelOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.BaseTunnelOptions.Initializer"></a>

```typescript
import { BaseTunnelOptions } from 'cdk8s-constructs'

const baseTunnelOptions: BaseTunnelOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.BaseTunnelOptions.property.cloudflareSecret">cloudflareSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BaseTunnelOptions.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BaseTunnelOptions.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BaseTunnelOptions.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BaseTunnelOptions.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BaseTunnelOptions.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BaseTunnelOptions.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BaseTunnelOptions.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BaseTunnelOptions.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |

---

##### `cloudflareSecret`<sup>Required</sup> <a name="cloudflareSecret" id="cdk8s-constructs.BaseTunnelOptions.property.cloudflareSecret"></a>

```typescript
public readonly cloudflareSecret: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="cdk8s-constructs.BaseTunnelOptions.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="cdk8s-constructs.BaseTunnelOptions.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="cdk8s-constructs.BaseTunnelOptions.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="cdk8s-constructs.BaseTunnelOptions.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `image`<sup>Optional</sup> <a name="image" id="cdk8s-constructs.BaseTunnelOptions.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.BaseTunnelOptions.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="cdk8s-constructs.BaseTunnelOptions.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="cdk8s-constructs.BaseTunnelOptions.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

### BazarrAppProps <a name="BazarrAppProps" id="cdk8s-constructs.BazarrAppProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.BazarrAppProps.Initializer"></a>

```typescript
import { BazarrAppProps } from 'cdk8s-constructs'

const bazarrAppProps: BazarrAppProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.BazarrAppProps.property.config">config</a></code> | <code><a href="#cdk8s-constructs.ConfigVolumeOptions">ConfigVolumeOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.BazarrAppProps.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.BazarrAppProps.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.DeploymentOptions">DeploymentOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.BazarrAppProps.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BazarrAppProps.property.metrics">metrics</a></code> | <code><a href="#cdk8s-constructs.MetricOptions">MetricOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.BazarrAppProps.property.probe">probe</a></code> | <code><a href="#cdk8s-constructs.ProbeOptions">ProbeOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.BazarrAppProps.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BazarrAppProps.property.volumeMounts">volumeMounts</a></code> | <code>cdk8s-plus-minus.VolumeMount[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BazarrAppProps.property.webPort">webPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BazarrAppProps.property.storage">storage</a></code> | <code><a href="#cdk8s-constructs.BazarrStorageApp">BazarrStorageApp</a></code> | *No description.* |

---

##### `config`<sup>Required</sup> <a name="config" id="cdk8s-constructs.BazarrAppProps.property.config"></a>

```typescript
public readonly config: ConfigVolumeOptions;
```

- *Type:* <a href="#cdk8s-constructs.ConfigVolumeOptions">ConfigVolumeOptions</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.BazarrAppProps.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngressOptions;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a>

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="cdk8s-constructs.BazarrAppProps.property.deployment"></a>

```typescript
public readonly deployment: DeploymentOptions;
```

- *Type:* <a href="#cdk8s-constructs.DeploymentOptions">DeploymentOptions</a>

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.BazarrAppProps.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="cdk8s-constructs.BazarrAppProps.property.metrics"></a>

```typescript
public readonly metrics: MetricOptions;
```

- *Type:* <a href="#cdk8s-constructs.MetricOptions">MetricOptions</a>

---

##### `probe`<sup>Optional</sup> <a name="probe" id="cdk8s-constructs.BazarrAppProps.property.probe"></a>

```typescript
public readonly probe: ProbeOptions;
```

- *Type:* <a href="#cdk8s-constructs.ProbeOptions">ProbeOptions</a>

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="cdk8s-constructs.BazarrAppProps.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="cdk8s-constructs.BazarrAppProps.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: VolumeMount[];
```

- *Type:* cdk8s-plus-minus.VolumeMount[]

---

##### `webPort`<sup>Optional</sup> <a name="webPort" id="cdk8s-constructs.BazarrAppProps.property.webPort"></a>

```typescript
public readonly webPort: number;
```

- *Type:* number

---

##### `storage`<sup>Required</sup> <a name="storage" id="cdk8s-constructs.BazarrAppProps.property.storage"></a>

```typescript
public readonly storage: BazarrStorageApp;
```

- *Type:* <a href="#cdk8s-constructs.BazarrStorageApp">BazarrStorageApp</a>

---

### BazarrStorageApp <a name="BazarrStorageApp" id="cdk8s-constructs.BazarrStorageApp"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.BazarrStorageApp.Initializer"></a>

```typescript
import { BazarrStorageApp } from 'cdk8s-constructs'

const bazarrStorageApp: BazarrStorageApp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.BazarrStorageApp.property.movies">movies</a></code> | <code>cdk8s-plus-minus.VolumeMount</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BazarrStorageApp.property.tv">tv</a></code> | <code>cdk8s-plus-minus.VolumeMount</code> | *No description.* |

---

##### `movies`<sup>Optional</sup> <a name="movies" id="cdk8s-constructs.BazarrStorageApp.property.movies"></a>

```typescript
public readonly movies: VolumeMount;
```

- *Type:* cdk8s-plus-minus.VolumeMount

---

##### `tv`<sup>Optional</sup> <a name="tv" id="cdk8s-constructs.BazarrStorageApp.property.tv"></a>

```typescript
public readonly tv: VolumeMount;
```

- *Type:* cdk8s-plus-minus.VolumeMount

---

### BindToServiceProps <a name="BindToServiceProps" id="cdk8s-constructs.BindToServiceProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.BindToServiceProps.Initializer"></a>

```typescript
import { BindToServiceProps } from 'cdk8s-constructs'

const bindToServiceProps: BindToServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.BindToServiceProps.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="cdk8s-constructs.BindToServiceProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

### BlueskyPdsBucketStorageOptions <a name="BlueskyPdsBucketStorageOptions" id="cdk8s-constructs.BlueskyPdsBucketStorageOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.BlueskyPdsBucketStorageOptions.Initializer"></a>

```typescript
import { BlueskyPdsBucketStorageOptions } from 'cdk8s-constructs'

const blueskyPdsBucketStorageOptions: BlueskyPdsBucketStorageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.BlueskyPdsBucketStorageOptions.property.accessKeySecret">accessKeySecret</a></code> | <code>cdk8s-plus-minus.SecretValue</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BlueskyPdsBucketStorageOptions.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BlueskyPdsBucketStorageOptions.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BlueskyPdsBucketStorageOptions.property.secretKeySecret">secretKeySecret</a></code> | <code>cdk8s-plus-minus.SecretValue</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BlueskyPdsBucketStorageOptions.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BlueskyPdsBucketStorageOptions.property.forcePathStyle">forcePathStyle</a></code> | <code>boolean</code> | *No description.* |

---

##### `accessKeySecret`<sup>Required</sup> <a name="accessKeySecret" id="cdk8s-constructs.BlueskyPdsBucketStorageOptions.property.accessKeySecret"></a>

```typescript
public readonly accessKeySecret: SecretValue;
```

- *Type:* cdk8s-plus-minus.SecretValue

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="cdk8s-constructs.BlueskyPdsBucketStorageOptions.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="cdk8s-constructs.BlueskyPdsBucketStorageOptions.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secretKeySecret`<sup>Required</sup> <a name="secretKeySecret" id="cdk8s-constructs.BlueskyPdsBucketStorageOptions.property.secretKeySecret"></a>

```typescript
public readonly secretKeySecret: SecretValue;
```

- *Type:* cdk8s-plus-minus.SecretValue

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="cdk8s-constructs.BlueskyPdsBucketStorageOptions.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `forcePathStyle`<sup>Optional</sup> <a name="forcePathStyle" id="cdk8s-constructs.BlueskyPdsBucketStorageOptions.property.forcePathStyle"></a>

```typescript
public readonly forcePathStyle: boolean;
```

- *Type:* boolean

---

### BlueskyPdsProps <a name="BlueskyPdsProps" id="cdk8s-constructs.BlueskyPdsProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.BlueskyPdsProps.Initializer"></a>

```typescript
import { BlueskyPdsProps } from 'cdk8s-constructs'

const blueskyPdsProps: BlueskyPdsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.BlueskyPdsProps.property.application">application</a></code> | <code><a href="#cdk8s-constructs.ApplicationProps">ApplicationProps</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.BlueskyPdsProps.property.storage">storage</a></code> | <code><a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.BlueskyPdsProps.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.BlueskyPdsProps.property.objectStorage">objectStorage</a></code> | <code><a href="#cdk8s-constructs.BlueskyPdsBucketStorageOptions">BlueskyPdsBucketStorageOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.BlueskyPdsProps.property.serviceType">serviceType</a></code> | <code>cdk8s-plus-minus.ServiceType</code> | *No description.* |

---

##### `application`<sup>Required</sup> <a name="application" id="cdk8s-constructs.BlueskyPdsProps.property.application"></a>

```typescript
public readonly application: ApplicationProps;
```

- *Type:* <a href="#cdk8s-constructs.ApplicationProps">ApplicationProps</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="cdk8s-constructs.BlueskyPdsProps.property.storage"></a>

```typescript
public readonly storage: PersistentVolumeClaimOptions;
```

- *Type:* <a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a>

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.BlueskyPdsProps.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `objectStorage`<sup>Optional</sup> <a name="objectStorage" id="cdk8s-constructs.BlueskyPdsProps.property.objectStorage"></a>

```typescript
public readonly objectStorage: BlueskyPdsBucketStorageOptions;
```

- *Type:* <a href="#cdk8s-constructs.BlueskyPdsBucketStorageOptions">BlueskyPdsBucketStorageOptions</a>

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="cdk8s-constructs.BlueskyPdsProps.property.serviceType"></a>

```typescript
public readonly serviceType: ServiceType;
```

- *Type:* cdk8s-plus-minus.ServiceType

---

### CertIssuerProps <a name="CertIssuerProps" id="cdk8s-constructs.CertIssuerProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.CertIssuerProps.Initializer"></a>

```typescript
import { CertIssuerProps } from 'cdk8s-constructs'

const certIssuerProps: CertIssuerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.CertIssuerProps.property.dnsZones">dnsZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CertIssuerProps.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CertIssuerProps.property.endpoint">endpoint</a></code> | <code><a href="#cdk8s-constructs.LetsEncryptEndpoint">LetsEncryptEndpoint</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.CertIssuerProps.property.issuer">issuer</a></code> | <code><a href="#cdk8s-constructs.CertIssuerName">CertIssuerName</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.CertIssuerProps.property.issuerSecretReference">issuerSecretReference</a></code> | <code><a href="#cdk8s-constructs.SecretReference">SecretReference</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.CertIssuerProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `dnsZones`<sup>Required</sup> <a name="dnsZones" id="cdk8s-constructs.CertIssuerProps.property.dnsZones"></a>

```typescript
public readonly dnsZones: string[];
```

- *Type:* string[]

---

##### `email`<sup>Required</sup> <a name="email" id="cdk8s-constructs.CertIssuerProps.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="cdk8s-constructs.CertIssuerProps.property.endpoint"></a>

```typescript
public readonly endpoint: LetsEncryptEndpoint;
```

- *Type:* <a href="#cdk8s-constructs.LetsEncryptEndpoint">LetsEncryptEndpoint</a>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="cdk8s-constructs.CertIssuerProps.property.issuer"></a>

```typescript
public readonly issuer: CertIssuerName;
```

- *Type:* <a href="#cdk8s-constructs.CertIssuerName">CertIssuerName</a>

---

##### `issuerSecretReference`<sup>Required</sup> <a name="issuerSecretReference" id="cdk8s-constructs.CertIssuerProps.property.issuerSecretReference"></a>

```typescript
public readonly issuerSecretReference: SecretReference;
```

- *Type:* <a href="#cdk8s-constructs.SecretReference">SecretReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.CertIssuerProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### CloudflareTunnelBindingProps <a name="CloudflareTunnelBindingProps" id="cdk8s-constructs.CloudflareTunnelBindingProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.CloudflareTunnelBindingProps.Initializer"></a>

```typescript
import { CloudflareTunnelBindingProps } from 'cdk8s-constructs'

const cloudflareTunnelBindingProps: CloudflareTunnelBindingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.CloudflareTunnelBindingProps.property.service">service</a></code> | <code>cdk8s-plus-minus.Service</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnelBindingProps.property.tunnel">tunnel</a></code> | <code><a href="#cdk8s-constructs.ICloudflareTunnel">ICloudflareTunnel</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnelBindingProps.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.CloudflareTunnelBindingProps.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* cdk8s-plus-minus.Service

---

##### `tunnel`<sup>Required</sup> <a name="tunnel" id="cdk8s-constructs.CloudflareTunnelBindingProps.property.tunnel"></a>

```typescript
public readonly tunnel: ICloudflareTunnel;
```

- *Type:* <a href="#cdk8s-constructs.ICloudflareTunnel">ICloudflareTunnel</a>

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="cdk8s-constructs.CloudflareTunnelBindingProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

### CloudflareTunnelProps <a name="CloudflareTunnelProps" id="cdk8s-constructs.CloudflareTunnelProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.CloudflareTunnelProps.Initializer"></a>

```typescript
import { CloudflareTunnelProps } from 'cdk8s-constructs'

const cloudflareTunnelProps: CloudflareTunnelProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.CloudflareTunnelProps.property.cloudflareSecret">cloudflareSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnelProps.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnelProps.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnelProps.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnelProps.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnelProps.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnelProps.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnelProps.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnelProps.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.CloudflareTunnelProps.property.tunnelName">tunnelName</a></code> | <code>string</code> | *No description.* |

---

##### `cloudflareSecret`<sup>Required</sup> <a name="cloudflareSecret" id="cdk8s-constructs.CloudflareTunnelProps.property.cloudflareSecret"></a>

```typescript
public readonly cloudflareSecret: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="cdk8s-constructs.CloudflareTunnelProps.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="cdk8s-constructs.CloudflareTunnelProps.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="cdk8s-constructs.CloudflareTunnelProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="cdk8s-constructs.CloudflareTunnelProps.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `image`<sup>Optional</sup> <a name="image" id="cdk8s-constructs.CloudflareTunnelProps.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.CloudflareTunnelProps.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="cdk8s-constructs.CloudflareTunnelProps.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="cdk8s-constructs.CloudflareTunnelProps.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `tunnelName`<sup>Optional</sup> <a name="tunnelName" id="cdk8s-constructs.CloudflareTunnelProps.property.tunnelName"></a>

```typescript
public readonly tunnelName: string;
```

- *Type:* string

---

### ClusterDatabaseOptions <a name="ClusterDatabaseOptions" id="cdk8s-constructs.ClusterDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ClusterDatabaseOptions.Initializer"></a>

```typescript
import { ClusterDatabaseOptions } from 'cdk8s-constructs'

const clusterDatabaseOptions: ClusterDatabaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ClusterDatabaseOptions.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ClusterDatabaseOptions.property.initCommands">initCommands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ClusterDatabaseOptions.property.password">password</a></code> | <code><a href="#cdk8s-constructs.SecretReference">SecretReference</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ClusterDatabaseOptions.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `database`<sup>Optional</sup> <a name="database" id="cdk8s-constructs.ClusterDatabaseOptions.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `initCommands`<sup>Optional</sup> <a name="initCommands" id="cdk8s-constructs.ClusterDatabaseOptions.property.initCommands"></a>

```typescript
public readonly initCommands: string[];
```

- *Type:* string[]

---

##### `password`<sup>Optional</sup> <a name="password" id="cdk8s-constructs.ClusterDatabaseOptions.property.password"></a>

```typescript
public readonly password: SecretReference;
```

- *Type:* <a href="#cdk8s-constructs.SecretReference">SecretReference</a>

---

##### `username`<sup>Optional</sup> <a name="username" id="cdk8s-constructs.ClusterDatabaseOptions.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

### ClusterProps <a name="ClusterProps" id="cdk8s-constructs.ClusterProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ClusterProps.Initializer"></a>

```typescript
import { ClusterProps } from 'cdk8s-constructs'

const clusterProps: ClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ClusterProps.property.instances">instances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ClusterProps.property.storage">storage</a></code> | <code><a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ClusterProps.property.database">database</a></code> | <code><a href="#cdk8s-constructs.ClusterDatabaseOptions">ClusterDatabaseOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ClusterProps.property.enableMonitoring">enableMonitoring</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ClusterProps.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ClusterProps.property.updateStrategy">updateStrategy</a></code> | <code><a href="#cdk8s-constructs.PrimaryUpdateStrategy">PrimaryUpdateStrategy</a></code> | *No description.* |

---

##### `instances`<sup>Required</sup> <a name="instances" id="cdk8s-constructs.ClusterProps.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number

---

##### `storage`<sup>Required</sup> <a name="storage" id="cdk8s-constructs.ClusterProps.property.storage"></a>

```typescript
public readonly storage: PersistentVolumeClaimOptions;
```

- *Type:* <a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a>

---

##### `database`<sup>Optional</sup> <a name="database" id="cdk8s-constructs.ClusterProps.property.database"></a>

```typescript
public readonly database: ClusterDatabaseOptions;
```

- *Type:* <a href="#cdk8s-constructs.ClusterDatabaseOptions">ClusterDatabaseOptions</a>

---

##### `enableMonitoring`<sup>Optional</sup> <a name="enableMonitoring" id="cdk8s-constructs.ClusterProps.property.enableMonitoring"></a>

```typescript
public readonly enableMonitoring: boolean;
```

- *Type:* boolean

---

##### `image`<sup>Optional</sup> <a name="image" id="cdk8s-constructs.ClusterProps.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `updateStrategy`<sup>Optional</sup> <a name="updateStrategy" id="cdk8s-constructs.ClusterProps.property.updateStrategy"></a>

```typescript
public readonly updateStrategy: PrimaryUpdateStrategy;
```

- *Type:* <a href="#cdk8s-constructs.PrimaryUpdateStrategy">PrimaryUpdateStrategy</a>
- *Default:* PrimaryUpdateStrategy.UNSUPERVISED

---

### ClusterTunnelProps <a name="ClusterTunnelProps" id="cdk8s-constructs.ClusterTunnelProps"></a>

ClusterTunnel is the Schema for the clustertunnels API.

#### Initializer <a name="Initializer" id="cdk8s-constructs.ClusterTunnelProps.Initializer"></a>

```typescript
import { ClusterTunnelProps } from 'cdk8s-constructs'

const clusterTunnelProps: ClusterTunnelProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ClusterTunnelProps.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ClusterTunnelProps.property.spec">spec</a></code> | <code><a href="#cdk8s-constructs.ClusterTunnelSpec">ClusterTunnelSpec</a></code> | TunnelSpec defines the desired state of Tunnel. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="cdk8s-constructs.ClusterTunnelProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

---

##### `spec`<sup>Optional</sup> <a name="spec" id="cdk8s-constructs.ClusterTunnelProps.property.spec"></a>

```typescript
public readonly spec: ClusterTunnelSpec;
```

- *Type:* <a href="#cdk8s-constructs.ClusterTunnelSpec">ClusterTunnelSpec</a>

TunnelSpec defines the desired state of Tunnel.

---

### ClusterTunnelSpec <a name="ClusterTunnelSpec" id="cdk8s-constructs.ClusterTunnelSpec"></a>

TunnelSpec defines the desired state of Tunnel.

#### Initializer <a name="Initializer" id="cdk8s-constructs.ClusterTunnelSpec.Initializer"></a>

```typescript
import { ClusterTunnelSpec } from 'cdk8s-constructs'

const clusterTunnelSpec: ClusterTunnelSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpec.property.cloudflare">cloudflare</a></code> | <code><a href="#cdk8s-constructs.ClusterTunnelSpecCloudflare">ClusterTunnelSpecCloudflare</a></code> | Cloudflare Credentials. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpec.property.existingTunnel">existingTunnel</a></code> | <code><a href="#cdk8s-constructs.ClusterTunnelSpecExistingTunnel">ClusterTunnelSpecExistingTunnel</a></code> | Existing tunnel object. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpec.property.fallbackTarget">fallbackTarget</a></code> | <code>string</code> | FallbackTarget speficies the target for requests that do not match an ingress. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpec.property.image">image</a></code> | <code>string</code> | Image sets the Cloudflared Image to use. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpec.property.newTunnel">newTunnel</a></code> | <code><a href="#cdk8s-constructs.ClusterTunnelSpecNewTunnel">ClusterTunnelSpecNewTunnel</a></code> | New tunnel object. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpec.property.noTlsVerify">noTlsVerify</a></code> | <code>boolean</code> | NoTlsVerify disables origin TLS certificate checks when the endpoint is HTTPS. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpec.property.originCaPool">originCaPool</a></code> | <code>string</code> | OriginCaPool speficies the secret with tls.crt (and other certs as needed to be referred in the service annotation) of the Root CA to be trusted when sending traffic to HTTPS endpoints. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpec.property.size">size</a></code> | <code>number</code> | Size defines the number of Daemon pods to run for this tunnel. |

---

##### `cloudflare`<sup>Optional</sup> <a name="cloudflare" id="cdk8s-constructs.ClusterTunnelSpec.property.cloudflare"></a>

```typescript
public readonly cloudflare: ClusterTunnelSpecCloudflare;
```

- *Type:* <a href="#cdk8s-constructs.ClusterTunnelSpecCloudflare">ClusterTunnelSpecCloudflare</a>

Cloudflare Credentials.

---

##### `existingTunnel`<sup>Optional</sup> <a name="existingTunnel" id="cdk8s-constructs.ClusterTunnelSpec.property.existingTunnel"></a>

```typescript
public readonly existingTunnel: ClusterTunnelSpecExistingTunnel;
```

- *Type:* <a href="#cdk8s-constructs.ClusterTunnelSpecExistingTunnel">ClusterTunnelSpecExistingTunnel</a>

Existing tunnel object.

ExistingTunnel and NewTunnel cannot be both empty and are mutually exclusive.

---

##### `fallbackTarget`<sup>Optional</sup> <a name="fallbackTarget" id="cdk8s-constructs.ClusterTunnelSpec.property.fallbackTarget"></a>

```typescript
public readonly fallbackTarget: string;
```

- *Type:* string
- *Default:* http_status:404

FallbackTarget speficies the target for requests that do not match an ingress.

Defaults to http_status:404

---

##### `image`<sup>Optional</sup> <a name="image" id="cdk8s-constructs.ClusterTunnelSpec.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string
- *Default:* the image set during the release of the operator.

Image sets the Cloudflared Image to use.

Defaults to the image set during the release of the operator.

---

##### `newTunnel`<sup>Optional</sup> <a name="newTunnel" id="cdk8s-constructs.ClusterTunnelSpec.property.newTunnel"></a>

```typescript
public readonly newTunnel: ClusterTunnelSpecNewTunnel;
```

- *Type:* <a href="#cdk8s-constructs.ClusterTunnelSpecNewTunnel">ClusterTunnelSpecNewTunnel</a>

New tunnel object.

NewTunnel and ExistingTunnel cannot be both empty and are mutually exclusive.

---

##### `noTlsVerify`<sup>Optional</sup> <a name="noTlsVerify" id="cdk8s-constructs.ClusterTunnelSpec.property.noTlsVerify"></a>

```typescript
public readonly noTlsVerify: boolean;
```

- *Type:* boolean

NoTlsVerify disables origin TLS certificate checks when the endpoint is HTTPS.

---

##### `originCaPool`<sup>Optional</sup> <a name="originCaPool" id="cdk8s-constructs.ClusterTunnelSpec.property.originCaPool"></a>

```typescript
public readonly originCaPool: string;
```

- *Type:* string

OriginCaPool speficies the secret with tls.crt (and other certs as needed to be referred in the service annotation) of the Root CA to be trusted when sending traffic to HTTPS endpoints.

---

##### `size`<sup>Optional</sup> <a name="size" id="cdk8s-constructs.ClusterTunnelSpec.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Size defines the number of Daemon pods to run for this tunnel.

---

### ClusterTunnelSpecCloudflare <a name="ClusterTunnelSpecCloudflare" id="cdk8s-constructs.ClusterTunnelSpecCloudflare"></a>

Cloudflare Credentials.

#### Initializer <a name="Initializer" id="cdk8s-constructs.ClusterTunnelSpecCloudflare.Initializer"></a>

```typescript
import { ClusterTunnelSpecCloudflare } from 'cdk8s-constructs'

const clusterTunnelSpecCloudflare: ClusterTunnelSpecCloudflare = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpecCloudflare.property.accountId">accountId</a></code> | <code>string</code> | Account ID in Cloudflare. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpecCloudflare.property.accountName">accountName</a></code> | <code>string</code> | Account Name in Cloudflare. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpecCloudflare.property.cloudflareApiKey">cloudflareApiKey</a></code> | <code>string</code> | Key in the secret to use for Cloudflare API Key, defaults to CLOUDFLARE_API_KEY. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpecCloudflare.property.cloudflareApiToken">cloudflareApiToken</a></code> | <code>string</code> | Key in the secret to use for Cloudflare API token, defaults to CLOUDFLARE_API_TOKEN. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpecCloudflare.property.cloudflareTunnelCredentialFile">cloudflareTunnelCredentialFile</a></code> | <code>string</code> | Key in the secret to use as credentials.json for an existing tunnel, defaults to CLOUDFLARE_TUNNEL_CREDENTIAL_FILE. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpecCloudflare.property.cloudflareTunnelCredentialSecret">cloudflareTunnelCredentialSecret</a></code> | <code>string</code> | Key in the secret to use as tunnel secret for an existing tunnel, defaults to CLOUDFLARE_TUNNEL_CREDENTIAL_SECRET. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpecCloudflare.property.domain">domain</a></code> | <code>string</code> | Cloudflare Domain to which this tunnel belongs to. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpecCloudflare.property.email">email</a></code> | <code>string</code> | Email to use along with API Key for Delete operations for new tunnels only, or as an alternate to API Token. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpecCloudflare.property.secret">secret</a></code> | <code>string</code> | Secret containing Cloudflare API key/token. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="cdk8s-constructs.ClusterTunnelSpecCloudflare.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account ID in Cloudflare.

AccountId and AccountName cannot be both empty. If both are provided, Account ID is used if valid, else falls back to Account Name.

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="cdk8s-constructs.ClusterTunnelSpecCloudflare.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Account Name in Cloudflare.

AccountName and AccountId cannot be both empty. If both are provided, Account ID is used if valid, else falls back to Account Name.

---

##### `cloudflareApiKey`<sup>Optional</sup> <a name="cloudflareApiKey" id="cdk8s-constructs.ClusterTunnelSpecCloudflare.property.cloudflareApiKey"></a>

```typescript
public readonly cloudflareApiKey: string;
```

- *Type:* string

Key in the secret to use for Cloudflare API Key, defaults to CLOUDFLARE_API_KEY.

Needs Email also to be provided. For Delete operations for new tunnels only, or as an alternate to API Token

---

##### `cloudflareApiToken`<sup>Optional</sup> <a name="cloudflareApiToken" id="cdk8s-constructs.ClusterTunnelSpecCloudflare.property.cloudflareApiToken"></a>

```typescript
public readonly cloudflareApiToken: string;
```

- *Type:* string

Key in the secret to use for Cloudflare API token, defaults to CLOUDFLARE_API_TOKEN.

---

##### `cloudflareTunnelCredentialFile`<sup>Optional</sup> <a name="cloudflareTunnelCredentialFile" id="cdk8s-constructs.ClusterTunnelSpecCloudflare.property.cloudflareTunnelCredentialFile"></a>

```typescript
public readonly cloudflareTunnelCredentialFile: string;
```

- *Type:* string

Key in the secret to use as credentials.json for an existing tunnel, defaults to CLOUDFLARE_TUNNEL_CREDENTIAL_FILE.

---

##### `cloudflareTunnelCredentialSecret`<sup>Optional</sup> <a name="cloudflareTunnelCredentialSecret" id="cdk8s-constructs.ClusterTunnelSpecCloudflare.property.cloudflareTunnelCredentialSecret"></a>

```typescript
public readonly cloudflareTunnelCredentialSecret: string;
```

- *Type:* string

Key in the secret to use as tunnel secret for an existing tunnel, defaults to CLOUDFLARE_TUNNEL_CREDENTIAL_SECRET.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="cdk8s-constructs.ClusterTunnelSpecCloudflare.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Cloudflare Domain to which this tunnel belongs to.

---

##### `email`<sup>Optional</sup> <a name="email" id="cdk8s-constructs.ClusterTunnelSpecCloudflare.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Email to use along with API Key for Delete operations for new tunnels only, or as an alternate to API Token.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="cdk8s-constructs.ClusterTunnelSpecCloudflare.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Secret containing Cloudflare API key/token.

---

### ClusterTunnelSpecExistingTunnel <a name="ClusterTunnelSpecExistingTunnel" id="cdk8s-constructs.ClusterTunnelSpecExistingTunnel"></a>

Existing tunnel object.

ExistingTunnel and NewTunnel cannot be both empty and are mutually exclusive.

#### Initializer <a name="Initializer" id="cdk8s-constructs.ClusterTunnelSpecExistingTunnel.Initializer"></a>

```typescript
import { ClusterTunnelSpecExistingTunnel } from 'cdk8s-constructs'

const clusterTunnelSpecExistingTunnel: ClusterTunnelSpecExistingTunnel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpecExistingTunnel.property.id">id</a></code> | <code>string</code> | Existing Tunnel ID to run on. |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpecExistingTunnel.property.name">name</a></code> | <code>string</code> | Existing Tunnel name to run on. |

---

##### `id`<sup>Optional</sup> <a name="id" id="cdk8s-constructs.ClusterTunnelSpecExistingTunnel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Existing Tunnel ID to run on.

Tunnel ID and Tunnel Name cannot be both empty. If both are provided, ID is used if valid, else falls back to Name.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s-constructs.ClusterTunnelSpecExistingTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Existing Tunnel name to run on.

Tunnel Name and Tunnel ID cannot be both empty. If both are provided, ID is used if valid, else falls back to Name.

---

### ClusterTunnelSpecNewTunnel <a name="ClusterTunnelSpecNewTunnel" id="cdk8s-constructs.ClusterTunnelSpecNewTunnel"></a>

New tunnel object.

NewTunnel and ExistingTunnel cannot be both empty and are mutually exclusive.

#### Initializer <a name="Initializer" id="cdk8s-constructs.ClusterTunnelSpecNewTunnel.Initializer"></a>

```typescript
import { ClusterTunnelSpecNewTunnel } from 'cdk8s-constructs'

const clusterTunnelSpecNewTunnel: ClusterTunnelSpecNewTunnel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ClusterTunnelSpecNewTunnel.property.name">name</a></code> | <code>string</code> | Tunnel name to create on Cloudflare. |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s-constructs.ClusterTunnelSpecNewTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Tunnel name to create on Cloudflare.

---

### ConfigureTlsProps <a name="ConfigureTlsProps" id="cdk8s-constructs.ConfigureTlsProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ConfigureTlsProps.Initializer"></a>

```typescript
import { ConfigureTlsProps } from 'cdk8s-constructs'

const configureTlsProps: ConfigureTlsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ConfigureTlsProps.property.certIssuerName">certIssuerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ConfigureTlsProps.property.dnsNames">dnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ConfigureTlsProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ConfigureTlsProps.property.middlewares">middlewares</a></code> | <code><a href="#cdk8s-constructs.Middleware">Middleware</a>[]</code> | *No description.* |

---

##### `certIssuerName`<sup>Required</sup> <a name="certIssuerName" id="cdk8s-constructs.ConfigureTlsProps.property.certIssuerName"></a>

```typescript
public readonly certIssuerName: string;
```

- *Type:* string

---

##### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="cdk8s-constructs.ConfigureTlsProps.property.dnsNames"></a>

```typescript
public readonly dnsNames: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ConfigureTlsProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `middlewares`<sup>Optional</sup> <a name="middlewares" id="cdk8s-constructs.ConfigureTlsProps.property.middlewares"></a>

```typescript
public readonly middlewares: Middleware[];
```

- *Type:* <a href="#cdk8s-constructs.Middleware">Middleware</a>[]

---

### ConfigVolumeOptions <a name="ConfigVolumeOptions" id="cdk8s-constructs.ConfigVolumeOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ConfigVolumeOptions.Initializer"></a>

```typescript
import { ConfigVolumeOptions } from 'cdk8s-constructs'

const configVolumeOptions: ConfigVolumeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ConfigVolumeOptions.property.configVolume">configVolume</a></code> | <code>cdk8s-plus-minus.Volume</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ConfigVolumeOptions.property.size">size</a></code> | <code>cdk8s.Size</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ConfigVolumeOptions.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |

---

##### `configVolume`<sup>Optional</sup> <a name="configVolume" id="cdk8s-constructs.ConfigVolumeOptions.property.configVolume"></a>

```typescript
public readonly configVolume: Volume;
```

- *Type:* cdk8s-plus-minus.Volume

---

##### `size`<sup>Optional</sup> <a name="size" id="cdk8s-constructs.ConfigVolumeOptions.property.size"></a>

```typescript
public readonly size: Size;
```

- *Type:* cdk8s.Size

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="cdk8s-constructs.ConfigVolumeOptions.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

### DeclaredMediaArrAppProps <a name="DeclaredMediaArrAppProps" id="cdk8s-constructs.DeclaredMediaArrAppProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.DeclaredMediaArrAppProps.Initializer"></a>

```typescript
import { DeclaredMediaArrAppProps } from 'cdk8s-constructs'

const declaredMediaArrAppProps: DeclaredMediaArrAppProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.DeclaredMediaArrAppProps.property.config">config</a></code> | <code><a href="#cdk8s-constructs.ConfigVolumeOptions">ConfigVolumeOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.DeclaredMediaArrAppProps.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.DeclaredMediaArrAppProps.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.DeploymentOptions">DeploymentOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.DeclaredMediaArrAppProps.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.DeclaredMediaArrAppProps.property.metrics">metrics</a></code> | <code><a href="#cdk8s-constructs.MetricOptions">MetricOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.DeclaredMediaArrAppProps.property.probe">probe</a></code> | <code><a href="#cdk8s-constructs.ProbeOptions">ProbeOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.DeclaredMediaArrAppProps.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.DeclaredMediaArrAppProps.property.volumeMounts">volumeMounts</a></code> | <code>cdk8s-plus-minus.VolumeMount[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.DeclaredMediaArrAppProps.property.webPort">webPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.DeclaredMediaArrAppProps.property.storage">storage</a></code> | <code><a href="#cdk8s-constructs.DelcaredMediaArrAppStorage">DelcaredMediaArrAppStorage</a></code> | *No description.* |

---

##### `config`<sup>Required</sup> <a name="config" id="cdk8s-constructs.DeclaredMediaArrAppProps.property.config"></a>

```typescript
public readonly config: ConfigVolumeOptions;
```

- *Type:* <a href="#cdk8s-constructs.ConfigVolumeOptions">ConfigVolumeOptions</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.DeclaredMediaArrAppProps.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngressOptions;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a>

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="cdk8s-constructs.DeclaredMediaArrAppProps.property.deployment"></a>

```typescript
public readonly deployment: DeploymentOptions;
```

- *Type:* <a href="#cdk8s-constructs.DeploymentOptions">DeploymentOptions</a>

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.DeclaredMediaArrAppProps.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="cdk8s-constructs.DeclaredMediaArrAppProps.property.metrics"></a>

```typescript
public readonly metrics: MetricOptions;
```

- *Type:* <a href="#cdk8s-constructs.MetricOptions">MetricOptions</a>

---

##### `probe`<sup>Optional</sup> <a name="probe" id="cdk8s-constructs.DeclaredMediaArrAppProps.property.probe"></a>

```typescript
public readonly probe: ProbeOptions;
```

- *Type:* <a href="#cdk8s-constructs.ProbeOptions">ProbeOptions</a>

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="cdk8s-constructs.DeclaredMediaArrAppProps.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="cdk8s-constructs.DeclaredMediaArrAppProps.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: VolumeMount[];
```

- *Type:* cdk8s-plus-minus.VolumeMount[]

---

##### `webPort`<sup>Optional</sup> <a name="webPort" id="cdk8s-constructs.DeclaredMediaArrAppProps.property.webPort"></a>

```typescript
public readonly webPort: number;
```

- *Type:* number

---

##### `storage`<sup>Required</sup> <a name="storage" id="cdk8s-constructs.DeclaredMediaArrAppProps.property.storage"></a>

```typescript
public readonly storage: DelcaredMediaArrAppStorage;
```

- *Type:* <a href="#cdk8s-constructs.DelcaredMediaArrAppStorage">DelcaredMediaArrAppStorage</a>

---

### DelcaredMediaArrAppStorage <a name="DelcaredMediaArrAppStorage" id="cdk8s-constructs.DelcaredMediaArrAppStorage"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.DelcaredMediaArrAppStorage.Initializer"></a>

```typescript
import { DelcaredMediaArrAppStorage } from 'cdk8s-constructs'

const delcaredMediaArrAppStorage: DelcaredMediaArrAppStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.DelcaredMediaArrAppStorage.property.media">media</a></code> | <code>cdk8s-plus-minus.VolumeMount</code> | *No description.* |
| <code><a href="#cdk8s-constructs.DelcaredMediaArrAppStorage.property.downloads">downloads</a></code> | <code>cdk8s-plus-minus.VolumeMount</code> | *No description.* |

---

##### `media`<sup>Required</sup> <a name="media" id="cdk8s-constructs.DelcaredMediaArrAppStorage.property.media"></a>

```typescript
public readonly media: VolumeMount;
```

- *Type:* cdk8s-plus-minus.VolumeMount

---

##### `downloads`<sup>Optional</sup> <a name="downloads" id="cdk8s-constructs.DelcaredMediaArrAppStorage.property.downloads"></a>

```typescript
public readonly downloads: VolumeMount;
```

- *Type:* cdk8s-plus-minus.VolumeMount

---

### DeploymentOptions <a name="DeploymentOptions" id="cdk8s-constructs.DeploymentOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.DeploymentOptions.Initializer"></a>

```typescript
import { DeploymentOptions } from 'cdk8s-constructs'

const deploymentOptions: DeploymentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.DeploymentOptions.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="cdk8s-constructs.DeploymentOptions.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

### ExistingTunnelOptions <a name="ExistingTunnelOptions" id="cdk8s-constructs.ExistingTunnelOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ExistingTunnelOptions.Initializer"></a>

```typescript
import { ExistingTunnelOptions } from 'cdk8s-constructs'

const existingTunnelOptions: ExistingTunnelOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ExistingTunnelOptions.property.cloudflareSecret">cloudflareSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelOptions.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelOptions.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelOptions.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelOptions.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelOptions.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelOptions.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelOptions.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelOptions.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelOptions.property.tunnelName">tunnelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelOptions.property.existingTunnel">existingTunnel</a></code> | <code><a href="#cdk8s-constructs.ExistingTunnelProps">ExistingTunnelProps</a></code> | *No description.* |

---

##### `cloudflareSecret`<sup>Required</sup> <a name="cloudflareSecret" id="cdk8s-constructs.ExistingTunnelOptions.property.cloudflareSecret"></a>

```typescript
public readonly cloudflareSecret: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="cdk8s-constructs.ExistingTunnelOptions.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="cdk8s-constructs.ExistingTunnelOptions.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="cdk8s-constructs.ExistingTunnelOptions.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="cdk8s-constructs.ExistingTunnelOptions.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `image`<sup>Optional</sup> <a name="image" id="cdk8s-constructs.ExistingTunnelOptions.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.ExistingTunnelOptions.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="cdk8s-constructs.ExistingTunnelOptions.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="cdk8s-constructs.ExistingTunnelOptions.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `tunnelName`<sup>Optional</sup> <a name="tunnelName" id="cdk8s-constructs.ExistingTunnelOptions.property.tunnelName"></a>

```typescript
public readonly tunnelName: string;
```

- *Type:* string

---

##### `existingTunnel`<sup>Required</sup> <a name="existingTunnel" id="cdk8s-constructs.ExistingTunnelOptions.property.existingTunnel"></a>

```typescript
public readonly existingTunnel: ExistingTunnelProps;
```

- *Type:* <a href="#cdk8s-constructs.ExistingTunnelProps">ExistingTunnelProps</a>

---

### ExistingTunnelProps <a name="ExistingTunnelProps" id="cdk8s-constructs.ExistingTunnelProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ExistingTunnelProps.Initializer"></a>

```typescript
import { ExistingTunnelProps } from 'cdk8s-constructs'

const existingTunnelProps: ExistingTunnelProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ExistingTunnelProps.property.cloudflareSecret">cloudflareSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelProps.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelProps.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelProps.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelProps.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelProps.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelProps.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelProps.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelProps.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelProps.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExistingTunnelProps.property.tunnelName">tunnelName</a></code> | <code>string</code> | *No description.* |

---

##### `cloudflareSecret`<sup>Required</sup> <a name="cloudflareSecret" id="cdk8s-constructs.ExistingTunnelProps.property.cloudflareSecret"></a>

```typescript
public readonly cloudflareSecret: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="cdk8s-constructs.ExistingTunnelProps.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="cdk8s-constructs.ExistingTunnelProps.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="cdk8s-constructs.ExistingTunnelProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="cdk8s-constructs.ExistingTunnelProps.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `image`<sup>Optional</sup> <a name="image" id="cdk8s-constructs.ExistingTunnelProps.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.ExistingTunnelProps.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="cdk8s-constructs.ExistingTunnelProps.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="cdk8s-constructs.ExistingTunnelProps.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Optional</sup> <a name="tunnelId" id="cdk8s-constructs.ExistingTunnelProps.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `tunnelName`<sup>Optional</sup> <a name="tunnelName" id="cdk8s-constructs.ExistingTunnelProps.property.tunnelName"></a>

```typescript
public readonly tunnelName: string;
```

- *Type:* string

---

### ExposeWithPrimaryServiceOptions <a name="ExposeWithPrimaryServiceOptions" id="cdk8s-constructs.ExposeWithPrimaryServiceOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ExposeWithPrimaryServiceOptions.Initializer"></a>

```typescript
import { ExposeWithPrimaryServiceOptions } from 'cdk8s-constructs'

const exposeWithPrimaryServiceOptions: ExposeWithPrimaryServiceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ExposeWithPrimaryServiceOptions.property.serviceType">serviceType</a></code> | <code>cdk8s-plus-27.ServiceType</code> | *No description.* |

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="cdk8s-constructs.ExposeWithPrimaryServiceOptions.property.serviceType"></a>

```typescript
public readonly serviceType: ServiceType;
```

- *Type:* cdk8s-plus-27.ServiceType

---

### ExternalIngressProps <a name="ExternalIngressProps" id="cdk8s-constructs.ExternalIngressProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ExternalIngressProps.Initializer"></a>

```typescript
import { ExternalIngressProps } from 'cdk8s-constructs'

const externalIngressProps: ExternalIngressProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ExternalIngressProps.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExternalIngressProps.property.certIssuer">certIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExternalIngressProps.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExternalIngressProps.property.ingressClassName">ingressClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExternalIngressProps.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExternalIngressProps.property.certSecretName">certSecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExternalIngressProps.property.ingressAnnotations">ingressAnnotations</a></code> | <code><a href="#cdk8s-constructs.Annotation">Annotation</a>[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExternalIngressProps.property.servicePort">servicePort</a></code> | <code>number</code> | *No description.* |

---

##### `address`<sup>Required</sup> <a name="address" id="cdk8s-constructs.ExternalIngressProps.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `certIssuer`<sup>Required</sup> <a name="certIssuer" id="cdk8s-constructs.ExternalIngressProps.property.certIssuer"></a>

```typescript
public readonly certIssuer: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="cdk8s-constructs.ExternalIngressProps.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ingressClassName`<sup>Required</sup> <a name="ingressClassName" id="cdk8s-constructs.ExternalIngressProps.property.ingressClassName"></a>

```typescript
public readonly ingressClassName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="cdk8s-constructs.ExternalIngressProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `certSecretName`<sup>Optional</sup> <a name="certSecretName" id="cdk8s-constructs.ExternalIngressProps.property.certSecretName"></a>

```typescript
public readonly certSecretName: string;
```

- *Type:* string

---

##### `ingressAnnotations`<sup>Optional</sup> <a name="ingressAnnotations" id="cdk8s-constructs.ExternalIngressProps.property.ingressAnnotations"></a>

```typescript
public readonly ingressAnnotations: Annotation[];
```

- *Type:* <a href="#cdk8s-constructs.Annotation">Annotation</a>[]

---

##### `servicePort`<sup>Optional</sup> <a name="servicePort" id="cdk8s-constructs.ExternalIngressProps.property.servicePort"></a>

```typescript
public readonly servicePort: number;
```

- *Type:* number

---

### ExternalSecretProps <a name="ExternalSecretProps" id="cdk8s-constructs.ExternalSecretProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ExternalSecretProps.Initializer"></a>

```typescript
import { ExternalSecretProps } from 'cdk8s-constructs'

const externalSecretProps: ExternalSecretProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ExternalSecretProps.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ExternalSecretProps.property.store">store</a></code> | <code><a href="#cdk8s-constructs.ISecretStore">ISecretStore</a></code> | *No description.* |

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="cdk8s-constructs.ExternalSecretProps.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `store`<sup>Required</sup> <a name="store" id="cdk8s-constructs.ExternalSecretProps.property.store"></a>

```typescript
public readonly store: ISecretStore;
```

- *Type:* <a href="#cdk8s-constructs.ISecretStore">ISecretStore</a>

---

### GarageProps <a name="GarageProps" id="cdk8s-constructs.GarageProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.GarageProps.Initializer"></a>

```typescript
import { GarageProps } from 'cdk8s-constructs'

const garageProps: GarageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.GarageProps.property.dataStorage">dataStorage</a></code> | <code><a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GarageProps.property.metadataStorage">metadataStorage</a></code> | <code><a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GarageProps.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GarageProps.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GarageProps.property.serviceType">serviceType</a></code> | <code>cdk8s-plus-minus.ServiceType</code> | *No description.* |

---

##### `dataStorage`<sup>Required</sup> <a name="dataStorage" id="cdk8s-constructs.GarageProps.property.dataStorage"></a>

```typescript
public readonly dataStorage: PersistentVolumeClaimOptions;
```

- *Type:* <a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a>

---

##### `metadataStorage`<sup>Required</sup> <a name="metadataStorage" id="cdk8s-constructs.GarageProps.property.metadataStorage"></a>

```typescript
public readonly metadataStorage: PersistentVolumeClaimOptions;
```

- *Type:* <a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a>

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="cdk8s-constructs.GarageProps.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.GarageProps.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="cdk8s-constructs.GarageProps.property.serviceType"></a>

```typescript
public readonly serviceType: ServiceType;
```

- *Type:* cdk8s-plus-minus.ServiceType

---

### GatusAlertingDiscordOptions <a name="GatusAlertingDiscordOptions" id="cdk8s-constructs.GatusAlertingDiscordOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.GatusAlertingDiscordOptions.Initializer"></a>

```typescript
import { GatusAlertingDiscordOptions } from 'cdk8s-constructs'

const gatusAlertingDiscordOptions: GatusAlertingDiscordOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.GatusAlertingDiscordOptions.property.webhookSecret">webhookSecret</a></code> | <code>cdk8s-plus-minus.SecretValue</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusAlertingDiscordOptions.property.defaultAlert">defaultAlert</a></code> | <code><a href="#cdk8s-constructs.GatusDefaultAlertOptions">GatusDefaultAlertOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusAlertingDiscordOptions.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `webhookSecret`<sup>Required</sup> <a name="webhookSecret" id="cdk8s-constructs.GatusAlertingDiscordOptions.property.webhookSecret"></a>

```typescript
public readonly webhookSecret: SecretValue;
```

- *Type:* cdk8s-plus-minus.SecretValue

---

##### `defaultAlert`<sup>Optional</sup> <a name="defaultAlert" id="cdk8s-constructs.GatusAlertingDiscordOptions.property.defaultAlert"></a>

```typescript
public readonly defaultAlert: GatusDefaultAlertOptions;
```

- *Type:* <a href="#cdk8s-constructs.GatusDefaultAlertOptions">GatusDefaultAlertOptions</a>

---

##### `title`<sup>Optional</sup> <a name="title" id="cdk8s-constructs.GatusAlertingDiscordOptions.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

### GatusAlertingOptions <a name="GatusAlertingOptions" id="cdk8s-constructs.GatusAlertingOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.GatusAlertingOptions.Initializer"></a>

```typescript
import { GatusAlertingOptions } from 'cdk8s-constructs'

const gatusAlertingOptions: GatusAlertingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.GatusAlertingOptions.property.discord">discord</a></code> | <code><a href="#cdk8s-constructs.GatusAlertingDiscordOptions">GatusAlertingDiscordOptions</a></code> | *No description.* |

---

##### `discord`<sup>Optional</sup> <a name="discord" id="cdk8s-constructs.GatusAlertingOptions.property.discord"></a>

```typescript
public readonly discord: GatusAlertingDiscordOptions;
```

- *Type:* <a href="#cdk8s-constructs.GatusAlertingDiscordOptions">GatusAlertingDiscordOptions</a>

---

### GatusDatabaseOptions <a name="GatusDatabaseOptions" id="cdk8s-constructs.GatusDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.GatusDatabaseOptions.Initializer"></a>

```typescript
import { GatusDatabaseOptions } from 'cdk8s-constructs'

const gatusDatabaseOptions: GatusDatabaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.GatusDatabaseOptions.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusDatabaseOptions.property.caching">caching</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusDatabaseOptions.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusDatabaseOptions.property.engine">engine</a></code> | <code><a href="#cdk8s-constructs.GatusDatabaseEngine">GatusDatabaseEngine</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusDatabaseOptions.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusDatabaseOptions.property.password">password</a></code> | <code>cdk8s-plus-minus.ISecret</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusDatabaseOptions.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusDatabaseOptions.property.port">port</a></code> | <code>number</code> | *No description.* |

---

##### `user`<sup>Required</sup> <a name="user" id="cdk8s-constructs.GatusDatabaseOptions.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `caching`<sup>Optional</sup> <a name="caching" id="cdk8s-constructs.GatusDatabaseOptions.property.caching"></a>

```typescript
public readonly caching: boolean;
```

- *Type:* boolean

---

##### `database`<sup>Optional</sup> <a name="database" id="cdk8s-constructs.GatusDatabaseOptions.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `engine`<sup>Optional</sup> <a name="engine" id="cdk8s-constructs.GatusDatabaseOptions.property.engine"></a>

```typescript
public readonly engine: GatusDatabaseEngine;
```

- *Type:* <a href="#cdk8s-constructs.GatusDatabaseEngine">GatusDatabaseEngine</a>

---

##### `host`<sup>Optional</sup> <a name="host" id="cdk8s-constructs.GatusDatabaseOptions.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `password`<sup>Optional</sup> <a name="password" id="cdk8s-constructs.GatusDatabaseOptions.property.password"></a>

```typescript
public readonly password: ISecret;
```

- *Type:* cdk8s-plus-minus.ISecret

---

##### `path`<sup>Optional</sup> <a name="path" id="cdk8s-constructs.GatusDatabaseOptions.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk8s-constructs.GatusDatabaseOptions.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

### GatusDefaultAlertOptions <a name="GatusDefaultAlertOptions" id="cdk8s-constructs.GatusDefaultAlertOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.GatusDefaultAlertOptions.Initializer"></a>

```typescript
import { GatusDefaultAlertOptions } from 'cdk8s-constructs'

const gatusDefaultAlertOptions: GatusDefaultAlertOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.GatusDefaultAlertOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusDefaultAlertOptions.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusDefaultAlertOptions.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusDefaultAlertOptions.property.sendOnResolved">sendOnResolved</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusDefaultAlertOptions.property.successThreshold">successThreshold</a></code> | <code>number</code> | *No description.* |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk8s-constructs.GatusDefaultAlertOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="cdk8s-constructs.GatusDefaultAlertOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="cdk8s-constructs.GatusDefaultAlertOptions.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `sendOnResolved`<sup>Optional</sup> <a name="sendOnResolved" id="cdk8s-constructs.GatusDefaultAlertOptions.property.sendOnResolved"></a>

```typescript
public readonly sendOnResolved: boolean;
```

- *Type:* boolean

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="cdk8s-constructs.GatusDefaultAlertOptions.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

---

### GatusEndpointAlert <a name="GatusEndpointAlert" id="cdk8s-constructs.GatusEndpointAlert"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.GatusEndpointAlert.Initializer"></a>

```typescript
import { GatusEndpointAlert } from 'cdk8s-constructs'

const gatusEndpointAlert: GatusEndpointAlert = { ... }
```


### GatusEndpointAlertOptions <a name="GatusEndpointAlertOptions" id="cdk8s-constructs.GatusEndpointAlertOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.GatusEndpointAlertOptions.Initializer"></a>

```typescript
import { GatusEndpointAlertOptions } from 'cdk8s-constructs'

const gatusEndpointAlertOptions: GatusEndpointAlertOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.GatusEndpointAlertOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointAlertOptions.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointAlertOptions.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointAlertOptions.property.sendOnResolved">sendOnResolved</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointAlertOptions.property.successThreshold">successThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointAlertOptions.property.type">type</a></code> | <code><a href="#cdk8s-constructs.GatusAlertType">GatusAlertType</a></code> | *No description.* |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk8s-constructs.GatusEndpointAlertOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="cdk8s-constructs.GatusEndpointAlertOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="cdk8s-constructs.GatusEndpointAlertOptions.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `sendOnResolved`<sup>Optional</sup> <a name="sendOnResolved" id="cdk8s-constructs.GatusEndpointAlertOptions.property.sendOnResolved"></a>

```typescript
public readonly sendOnResolved: boolean;
```

- *Type:* boolean

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="cdk8s-constructs.GatusEndpointAlertOptions.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="cdk8s-constructs.GatusEndpointAlertOptions.property.type"></a>

```typescript
public readonly type: GatusAlertType;
```

- *Type:* <a href="#cdk8s-constructs.GatusAlertType">GatusAlertType</a>

---

### GatusEndpointDnsOptions <a name="GatusEndpointDnsOptions" id="cdk8s-constructs.GatusEndpointDnsOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.GatusEndpointDnsOptions.Initializer"></a>

```typescript
import { GatusEndpointDnsOptions } from 'cdk8s-constructs'

const gatusEndpointDnsOptions: GatusEndpointDnsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.GatusEndpointDnsOptions.property.queryName">queryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointDnsOptions.property.queryType">queryType</a></code> | <code>string</code> | *No description.* |

---

##### `queryName`<sup>Optional</sup> <a name="queryName" id="cdk8s-constructs.GatusEndpointDnsOptions.property.queryName"></a>

```typescript
public readonly queryName: string;
```

- *Type:* string

---

##### `queryType`<sup>Optional</sup> <a name="queryType" id="cdk8s-constructs.GatusEndpointDnsOptions.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

---

### GatusEndpointOptions <a name="GatusEndpointOptions" id="cdk8s-constructs.GatusEndpointOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.GatusEndpointOptions.Initializer"></a>

```typescript
import { GatusEndpointOptions } from 'cdk8s-constructs'

const gatusEndpointOptions: GatusEndpointOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.conditions">conditions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.alerts">alerts</a></code> | <code><a href="#cdk8s-constructs.GatusEndpointAlertOptions">GatusEndpointAlertOptions</a>[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.dns">dns</a></code> | <code><a href="#cdk8s-constructs.GatusEndpointDnsOptions">GatusEndpointDnsOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.hideConditionsOnUi">hideConditionsOnUi</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.hideHostnameOnUi">hideHostnameOnUi</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.hideMethodOnUi">hideMethodOnUi</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.interval">interval</a></code> | <code>cdk8s.Duration</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.isGraphQl">isGraphQl</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.method">method</a></code> | <code><a href="#cdk8s-constructs.GatusMethod">GatusMethod</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.resolveFailedConditionsOnUi">resolveFailedConditionsOnUi</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.ssh">ssh</a></code> | <code><a href="#cdk8s-constructs.GatusEndpointSshOptions">GatusEndpointSshOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointOptions.property.uiResponseThresholds">uiResponseThresholds</a></code> | <code>number[]</code> | *No description.* |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="cdk8s-constructs.GatusEndpointOptions.property.conditions"></a>

```typescript
public readonly conditions: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.GatusEndpointOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="cdk8s-constructs.GatusEndpointOptions.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `alerts`<sup>Optional</sup> <a name="alerts" id="cdk8s-constructs.GatusEndpointOptions.property.alerts"></a>

```typescript
public readonly alerts: GatusEndpointAlertOptions[];
```

- *Type:* <a href="#cdk8s-constructs.GatusEndpointAlertOptions">GatusEndpointAlertOptions</a>[]

---

##### `body`<sup>Optional</sup> <a name="body" id="cdk8s-constructs.GatusEndpointOptions.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `dns`<sup>Optional</sup> <a name="dns" id="cdk8s-constructs.GatusEndpointOptions.property.dns"></a>

```typescript
public readonly dns: GatusEndpointDnsOptions;
```

- *Type:* <a href="#cdk8s-constructs.GatusEndpointDnsOptions">GatusEndpointDnsOptions</a>

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="cdk8s-constructs.GatusEndpointOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `group`<sup>Optional</sup> <a name="group" id="cdk8s-constructs.GatusEndpointOptions.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `headers`<sup>Optional</sup> <a name="headers" id="cdk8s-constructs.GatusEndpointOptions.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hideConditionsOnUi`<sup>Optional</sup> <a name="hideConditionsOnUi" id="cdk8s-constructs.GatusEndpointOptions.property.hideConditionsOnUi"></a>

```typescript
public readonly hideConditionsOnUi: boolean;
```

- *Type:* boolean

---

##### `hideHostnameOnUi`<sup>Optional</sup> <a name="hideHostnameOnUi" id="cdk8s-constructs.GatusEndpointOptions.property.hideHostnameOnUi"></a>

```typescript
public readonly hideHostnameOnUi: boolean;
```

- *Type:* boolean

---

##### `hideMethodOnUi`<sup>Optional</sup> <a name="hideMethodOnUi" id="cdk8s-constructs.GatusEndpointOptions.property.hideMethodOnUi"></a>

```typescript
public readonly hideMethodOnUi: boolean;
```

- *Type:* boolean

---

##### `interval`<sup>Optional</sup> <a name="interval" id="cdk8s-constructs.GatusEndpointOptions.property.interval"></a>

```typescript
public readonly interval: Duration;
```

- *Type:* cdk8s.Duration

---

##### `isGraphQl`<sup>Optional</sup> <a name="isGraphQl" id="cdk8s-constructs.GatusEndpointOptions.property.isGraphQl"></a>

```typescript
public readonly isGraphQl: boolean;
```

- *Type:* boolean

---

##### `method`<sup>Optional</sup> <a name="method" id="cdk8s-constructs.GatusEndpointOptions.property.method"></a>

```typescript
public readonly method: GatusMethod;
```

- *Type:* <a href="#cdk8s-constructs.GatusMethod">GatusMethod</a>

---

##### `resolveFailedConditionsOnUi`<sup>Optional</sup> <a name="resolveFailedConditionsOnUi" id="cdk8s-constructs.GatusEndpointOptions.property.resolveFailedConditionsOnUi"></a>

```typescript
public readonly resolveFailedConditionsOnUi: boolean;
```

- *Type:* boolean

---

##### `ssh`<sup>Optional</sup> <a name="ssh" id="cdk8s-constructs.GatusEndpointOptions.property.ssh"></a>

```typescript
public readonly ssh: GatusEndpointSshOptions;
```

- *Type:* <a href="#cdk8s-constructs.GatusEndpointSshOptions">GatusEndpointSshOptions</a>

---

##### `uiResponseThresholds`<sup>Optional</sup> <a name="uiResponseThresholds" id="cdk8s-constructs.GatusEndpointOptions.property.uiResponseThresholds"></a>

```typescript
public readonly uiResponseThresholds: number[];
```

- *Type:* number[]

---

### GatusEndpointSshOptions <a name="GatusEndpointSshOptions" id="cdk8s-constructs.GatusEndpointSshOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.GatusEndpointSshOptions.Initializer"></a>

```typescript
import { GatusEndpointSshOptions } from 'cdk8s-constructs'

const gatusEndpointSshOptions: GatusEndpointSshOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.GatusEndpointSshOptions.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpointSshOptions.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `password`<sup>Required</sup> <a name="password" id="cdk8s-constructs.GatusEndpointSshOptions.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="cdk8s-constructs.GatusEndpointSshOptions.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

### GatusProps <a name="GatusProps" id="cdk8s-constructs.GatusProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.GatusProps.Initializer"></a>

```typescript
import { GatusProps } from 'cdk8s-constructs'

const gatusProps: GatusProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.GatusProps.property.endpoints">endpoints</a></code> | <code><a href="#cdk8s-constructs.GatusEndpoint">GatusEndpoint</a>[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusProps.property.alerting">alerting</a></code> | <code><a href="#cdk8s-constructs.GatusAlertingOptions">GatusAlertingOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusProps.property.database">database</a></code> | <code><a href="#cdk8s-constructs.GatusDatabaseOptions">GatusDatabaseOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusProps.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusProps.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a></code> | *No description.* |

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="cdk8s-constructs.GatusProps.property.endpoints"></a>

```typescript
public readonly endpoints: GatusEndpoint[];
```

- *Type:* <a href="#cdk8s-constructs.GatusEndpoint">GatusEndpoint</a>[]

---

##### `alerting`<sup>Optional</sup> <a name="alerting" id="cdk8s-constructs.GatusProps.property.alerting"></a>

```typescript
public readonly alerting: GatusAlertingOptions;
```

- *Type:* <a href="#cdk8s-constructs.GatusAlertingOptions">GatusAlertingOptions</a>

---

##### `database`<sup>Optional</sup> <a name="database" id="cdk8s-constructs.GatusProps.property.database"></a>

```typescript
public readonly database: GatusDatabaseOptions;
```

- *Type:* <a href="#cdk8s-constructs.GatusDatabaseOptions">GatusDatabaseOptions</a>

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.GatusProps.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="cdk8s-constructs.GatusProps.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngressOptions;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a>

---

### GrafanaDashboardProps <a name="GrafanaDashboardProps" id="cdk8s-constructs.GrafanaDashboardProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.GrafanaDashboardProps.Initializer"></a>

```typescript
import { GrafanaDashboardProps } from 'cdk8s-constructs'

const grafanaDashboardProps: GrafanaDashboardProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.GrafanaDashboardProps.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GrafanaDashboardProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GrafanaDashboardProps.property.dashboardLabelOverride">dashboardLabelOverride</a></code> | <code>string</code> | *No description.* |

---

##### `data`<sup>Required</sup> <a name="data" id="cdk8s-constructs.GrafanaDashboardProps.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.GrafanaDashboardProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `dashboardLabelOverride`<sup>Optional</sup> <a name="dashboardLabelOverride" id="cdk8s-constructs.GrafanaDashboardProps.property.dashboardLabelOverride"></a>

```typescript
public readonly dashboardLabelOverride: string;
```

- *Type:* string

---

### HelmChartProps <a name="HelmChartProps" id="cdk8s-constructs.HelmChartProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.HelmChartProps.Initializer"></a>

```typescript
import { HelmChartProps } from 'cdk8s-constructs'

const helmChartProps: HelmChartProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HelmChartProps.property.chart">chart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HelmChartProps.property.flags">flags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HelmChartProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HelmChartProps.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `chart`<sup>Required</sup> <a name="chart" id="cdk8s-constructs.HelmChartProps.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* string

---

##### `flags`<sup>Required</sup> <a name="flags" id="cdk8s-constructs.HelmChartProps.property.flags"></a>

```typescript
public readonly flags: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="cdk8s-constructs.HelmChartProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="cdk8s-constructs.HelmChartProps.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

### HomelabCertificateProps <a name="HomelabCertificateProps" id="cdk8s-constructs.HomelabCertificateProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.HomelabCertificateProps.Initializer"></a>

```typescript
import { HomelabCertificateProps } from 'cdk8s-constructs'

const homelabCertificateProps: HomelabCertificateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabCertificateProps.property.dnsNames">dnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabCertificateProps.property.issuerName">issuerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabCertificateProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="cdk8s-constructs.HomelabCertificateProps.property.dnsNames"></a>

```typescript
public readonly dnsNames: string[];
```

- *Type:* string[]

---

##### `issuerName`<sup>Required</sup> <a name="issuerName" id="cdk8s-constructs.HomelabCertificateProps.property.issuerName"></a>

```typescript
public readonly issuerName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.HomelabCertificateProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### HomelabChartProps <a name="HomelabChartProps" id="cdk8s-constructs.HomelabChartProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.HomelabChartProps.Initializer"></a>

```typescript
import { HomelabChartProps } from 'cdk8s-constructs'

const homelabChartProps: HomelabChartProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabChartProps.property.disableResourceNameHashes">disableResourceNameHashes</a></code> | <code>boolean</code> | The autogenerated resource name by default is suffixed with a stable hash of the construct path. |
| <code><a href="#cdk8s-constructs.HomelabChartProps.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to all resources in this chart. |
| <code><a href="#cdk8s-constructs.HomelabChartProps.property.namespace">namespace</a></code> | <code>string</code> | The default namespace for all objects defined in this chart (directly or indirectly). |
| <code><a href="#cdk8s-constructs.HomelabChartProps.property.createNamespace">createNamespace</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabChartProps.property.tls">tls</a></code> | <code><a href="#cdk8s-constructs.ConfigureTlsProps">ConfigureTlsProps</a></code> | *No description.* |

---

##### `disableResourceNameHashes`<sup>Optional</sup> <a name="disableResourceNameHashes" id="cdk8s-constructs.HomelabChartProps.property.disableResourceNameHashes"></a>

```typescript
public readonly disableResourceNameHashes: boolean;
```

- *Type:* boolean
- *Default:* false

The autogenerated resource name by default is suffixed with a stable hash of the construct path.

Setting this property to true drops the hash suffix.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="cdk8s-constructs.HomelabChartProps.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no common labels

Labels to apply to all resources in this chart.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.HomelabChartProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string
- *Default:* no namespace is synthesized (usually this implies "default")

The default namespace for all objects defined in this chart (directly or indirectly).

This namespace will only apply to objects that don't have a
`namespace` explicitly defined for them.

---

##### `createNamespace`<sup>Optional</sup> <a name="createNamespace" id="cdk8s-constructs.HomelabChartProps.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean;
```

- *Type:* boolean

---

##### `tls`<sup>Optional</sup> <a name="tls" id="cdk8s-constructs.HomelabChartProps.property.tls"></a>

```typescript
public readonly tls: ConfigureTlsProps;
```

- *Type:* <a href="#cdk8s-constructs.ConfigureTlsProps">ConfigureTlsProps</a>

---

### HomelabDeploymentProps <a name="HomelabDeploymentProps" id="cdk8s-constructs.HomelabDeploymentProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.HomelabDeploymentProps.Initializer"></a>

```typescript
import { HomelabDeploymentProps } from 'cdk8s-constructs'

const homelabDeploymentProps: HomelabDeploymentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | Metadata that all persisted resources must have, which includes all objects users must create. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.automountServiceAccountToken">automountServiceAccountToken</a></code> | <code>boolean</code> | Indicates whether a service account token should be automatically mounted. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.containers">containers</a></code> | <code>cdk8s-plus-minus.ContainerProps[]</code> | List of containers belonging to the pod. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.dns">dns</a></code> | <code>cdk8s-plus-minus.PodDnsProps</code> | DNS settings for the pod. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.dockerRegistryAuth">dockerRegistryAuth</a></code> | <code>cdk8s-plus-minus.ISecret</code> | A secret containing docker credentials for authenticating to a registry. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.hostAliases">hostAliases</a></code> | <code>cdk8s-plus-minus.HostAlias[]</code> | HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.hostNetwork">hostNetwork</a></code> | <code>boolean</code> | Host network for the pod. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.initContainers">initContainers</a></code> | <code>cdk8s-plus-minus.ContainerProps[]</code> | List of initialization containers belonging to the pod. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.isolate">isolate</a></code> | <code>boolean</code> | Isolates the pod. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.restartPolicy">restartPolicy</a></code> | <code>cdk8s-plus-minus.RestartPolicy</code> | Restart policy for all containers within the pod. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.securityContext">securityContext</a></code> | <code>cdk8s-plus-minus.PodSecurityContextProps</code> | SecurityContext holds pod-level security attributes and common container settings. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.serviceAccount">serviceAccount</a></code> | <code>cdk8s-plus-minus.IServiceAccount</code> | A service account provides an identity for processes that run in a Pod. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.terminationGracePeriod">terminationGracePeriod</a></code> | <code>cdk8s.Duration</code> | Grace period until the pod is terminated. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.volumes">volumes</a></code> | <code>cdk8s-plus-minus.Volume[]</code> | List of volumes that can be mounted by containers belonging to the pod. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.podMetadata">podMetadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | The pod metadata of this workload. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.select">select</a></code> | <code>boolean</code> | Automatically allocates a pod label selector for this workload and add it to the pod metadata. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.spread">spread</a></code> | <code>boolean</code> | Automatically spread pods across hostname and zones. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.minReady">minReady</a></code> | <code>cdk8s.Duration</code> | Minimum duration for which a newly created pod should be ready without any of its container crashing, for it to be considered available. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.progressDeadline">progressDeadline</a></code> | <code>cdk8s.Duration</code> | The maximum duration for a deployment to make progress before it is considered to be failed. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.replicas">replicas</a></code> | <code>number</code> | Number of desired pods. |
| <code><a href="#cdk8s-constructs.HomelabDeploymentProps.property.strategy">strategy</a></code> | <code>cdk8s-plus-minus.DeploymentStrategy</code> | Specifies the strategy used to replace old Pods by new ones. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="cdk8s-constructs.HomelabDeploymentProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

Metadata that all persisted resources must have, which includes all objects users must create.

---

##### `automountServiceAccountToken`<sup>Optional</sup> <a name="automountServiceAccountToken" id="cdk8s-constructs.HomelabDeploymentProps.property.automountServiceAccountToken"></a>

```typescript
public readonly automountServiceAccountToken: boolean;
```

- *Type:* boolean
- *Default:* false

Indicates whether a service account token should be automatically mounted.

> [https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#use-the-default-service-account-to-access-the-api-server](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#use-the-default-service-account-to-access-the-api-server)

---

##### `containers`<sup>Optional</sup> <a name="containers" id="cdk8s-constructs.HomelabDeploymentProps.property.containers"></a>

```typescript
public readonly containers: ContainerProps[];
```

- *Type:* cdk8s-plus-minus.ContainerProps[]
- *Default:* No containers. Note that a pod spec must include at least one container.

List of containers belonging to the pod.

Containers cannot currently be
added or removed. There must be at least one container in a Pod.

You can add additionnal containers using `podSpec.addContainer()`

---

##### `dns`<sup>Optional</sup> <a name="dns" id="cdk8s-constructs.HomelabDeploymentProps.property.dns"></a>

```typescript
public readonly dns: PodDnsProps;
```

- *Type:* cdk8s-plus-minus.PodDnsProps
- *Default:* policy: DnsPolicy.CLUSTER_FIRST  hostnameAsFQDN: false

DNS settings for the pod.

> [https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/)

---

##### `dockerRegistryAuth`<sup>Optional</sup> <a name="dockerRegistryAuth" id="cdk8s-constructs.HomelabDeploymentProps.property.dockerRegistryAuth"></a>

```typescript
public readonly dockerRegistryAuth: ISecret;
```

- *Type:* cdk8s-plus-minus.ISecret
- *Default:* No auth. Images are assumed to be publicly available.

A secret containing docker credentials for authenticating to a registry.

---

##### `hostAliases`<sup>Optional</sup> <a name="hostAliases" id="cdk8s-constructs.HomelabDeploymentProps.property.hostAliases"></a>

```typescript
public readonly hostAliases: HostAlias[];
```

- *Type:* cdk8s-plus-minus.HostAlias[]

HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.

---

##### `hostNetwork`<sup>Optional</sup> <a name="hostNetwork" id="cdk8s-constructs.HomelabDeploymentProps.property.hostNetwork"></a>

```typescript
public readonly hostNetwork: boolean;
```

- *Type:* boolean
- *Default:* false

Host network for the pod.

---

##### `initContainers`<sup>Optional</sup> <a name="initContainers" id="cdk8s-constructs.HomelabDeploymentProps.property.initContainers"></a>

```typescript
public readonly initContainers: ContainerProps[];
```

- *Type:* cdk8s-plus-minus.ContainerProps[]
- *Default:* No init containers.

List of initialization containers belonging to the pod.

Init containers are executed in order prior to containers being started.
If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy.
The name for an init container or normal container must be unique among all containers.
Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes.
The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit
for each resource type, and then using the max of of that value or the sum of the normal containers.
Limits are applied to init containers in a similar fashion.

Init containers cannot currently be added ,removed or updated.

> [https://kubernetes.io/docs/concepts/workloads/pods/init-containers/](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/)

---

##### `isolate`<sup>Optional</sup> <a name="isolate" id="cdk8s-constructs.HomelabDeploymentProps.property.isolate"></a>

```typescript
public readonly isolate: boolean;
```

- *Type:* boolean
- *Default:* false

Isolates the pod.

This will prevent any ingress or egress connections to / from this pod.
You can however allow explicit connections post instantiation by using the `.connections` property.

---

##### `restartPolicy`<sup>Optional</sup> <a name="restartPolicy" id="cdk8s-constructs.HomelabDeploymentProps.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: RestartPolicy;
```

- *Type:* cdk8s-plus-minus.RestartPolicy
- *Default:* RestartPolicy.ALWAYS

Restart policy for all containers within the pod.

> [https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy)

---

##### `securityContext`<sup>Optional</sup> <a name="securityContext" id="cdk8s-constructs.HomelabDeploymentProps.property.securityContext"></a>

```typescript
public readonly securityContext: PodSecurityContextProps;
```

- *Type:* cdk8s-plus-minus.PodSecurityContextProps
- *Default:* fsGroupChangePolicy: FsGroupChangePolicy.FsGroupChangePolicy.ALWAYS   ensureNonRoot: true

SecurityContext holds pod-level security attributes and common container settings.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="cdk8s-constructs.HomelabDeploymentProps.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: IServiceAccount;
```

- *Type:* cdk8s-plus-minus.IServiceAccount
- *Default:* No service account.

A service account provides an identity for processes that run in a Pod.

When you (a human) access the cluster (for example, using kubectl), you are
authenticated by the apiserver as a particular User Account (currently this
is usually admin, unless your cluster administrator has customized your
cluster). Processes in containers inside pods can also contact the
apiserver. When they do, they are authenticated as a particular Service
Account (for example, default).

> [https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/)

---

##### `terminationGracePeriod`<sup>Optional</sup> <a name="terminationGracePeriod" id="cdk8s-constructs.HomelabDeploymentProps.property.terminationGracePeriod"></a>

```typescript
public readonly terminationGracePeriod: Duration;
```

- *Type:* cdk8s.Duration
- *Default:* Duration.seconds(30)

Grace period until the pod is terminated.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="cdk8s-constructs.HomelabDeploymentProps.property.volumes"></a>

```typescript
public readonly volumes: Volume[];
```

- *Type:* cdk8s-plus-minus.Volume[]
- *Default:* No volumes.

List of volumes that can be mounted by containers belonging to the pod.

You can also add volumes later using `podSpec.addVolume()`

> [https://kubernetes.io/docs/concepts/storage/volumes](https://kubernetes.io/docs/concepts/storage/volumes)

---

##### `podMetadata`<sup>Optional</sup> <a name="podMetadata" id="cdk8s-constructs.HomelabDeploymentProps.property.podMetadata"></a>

```typescript
public readonly podMetadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

The pod metadata of this workload.

---

##### `select`<sup>Optional</sup> <a name="select" id="cdk8s-constructs.HomelabDeploymentProps.property.select"></a>

```typescript
public readonly select: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically allocates a pod label selector for this workload and add it to the pod metadata.

This ensures this workload manages pods created by
its pod template.

---

##### `spread`<sup>Optional</sup> <a name="spread" id="cdk8s-constructs.HomelabDeploymentProps.property.spread"></a>

```typescript
public readonly spread: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically spread pods across hostname and zones.

> [https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/#internal-default-constraints](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/#internal-default-constraints)

---

##### `minReady`<sup>Optional</sup> <a name="minReady" id="cdk8s-constructs.HomelabDeploymentProps.property.minReady"></a>

```typescript
public readonly minReady: Duration;
```

- *Type:* cdk8s.Duration
- *Default:* Duration.seconds(0)

Minimum duration for which a newly created pod should be ready without any of its container crashing, for it to be considered available.

Zero means the pod will be considered available as soon as it is ready.

> [https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#min-ready-seconds](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#min-ready-seconds)

---

##### `progressDeadline`<sup>Optional</sup> <a name="progressDeadline" id="cdk8s-constructs.HomelabDeploymentProps.property.progressDeadline"></a>

```typescript
public readonly progressDeadline: Duration;
```

- *Type:* cdk8s.Duration
- *Default:* Duration.seconds(600)

The maximum duration for a deployment to make progress before it is considered to be failed.

The deployment controller will continue
to process failed deployments and a condition with a ProgressDeadlineExceeded
reason will be surfaced in the deployment status.

Note that progress will not be estimated during the time a deployment is paused.

> [https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#progress-deadline-seconds](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#progress-deadline-seconds)

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="cdk8s-constructs.HomelabDeploymentProps.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number
- *Default:* 2

Number of desired pods.

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="cdk8s-constructs.HomelabDeploymentProps.property.strategy"></a>

```typescript
public readonly strategy: DeploymentStrategy;
```

- *Type:* cdk8s-plus-minus.DeploymentStrategy
- *Default:* RollingUpdate with maxSurge and maxUnavailable set to 25%.

Specifies the strategy used to replace old Pods by new ones.

---

### HomelabIngressOptions <a name="HomelabIngressOptions" id="cdk8s-constructs.HomelabIngressOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.HomelabIngressOptions.Initializer"></a>

```typescript
import { HomelabIngressOptions } from 'cdk8s-constructs'

const homelabIngressOptions: HomelabIngressOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabIngressOptions.property.certIssuer">certIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabIngressOptions.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabIngressOptions.property.ingressClass">ingressClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabIngressOptions.property.annotations">annotations</a></code> | <code><a href="#cdk8s-constructs.Annotation">Annotation</a>[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabIngressOptions.property.type">type</a></code> | <code>cdk8s-plus-minus.ServiceType</code> | *No description.* |

---

##### `certIssuer`<sup>Required</sup> <a name="certIssuer" id="cdk8s-constructs.HomelabIngressOptions.property.certIssuer"></a>

```typescript
public readonly certIssuer: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="cdk8s-constructs.HomelabIngressOptions.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ingressClass`<sup>Required</sup> <a name="ingressClass" id="cdk8s-constructs.HomelabIngressOptions.property.ingressClass"></a>

```typescript
public readonly ingressClass: string;
```

- *Type:* string

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="cdk8s-constructs.HomelabIngressOptions.property.annotations"></a>

```typescript
public readonly annotations: Annotation[];
```

- *Type:* <a href="#cdk8s-constructs.Annotation">Annotation</a>[]

---

##### `type`<sup>Optional</sup> <a name="type" id="cdk8s-constructs.HomelabIngressOptions.property.type"></a>

```typescript
public readonly type: ServiceType;
```

- *Type:* cdk8s-plus-minus.ServiceType

---

### HomelabIngressProps <a name="HomelabIngressProps" id="cdk8s-constructs.HomelabIngressProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.HomelabIngressProps.Initializer"></a>

```typescript
import { HomelabIngressProps } from 'cdk8s-constructs'

const homelabIngressProps: HomelabIngressProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabIngressProps.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabIngressProps.property.service">service</a></code> | <code>cdk8s-plus-minus.IService</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabIngressProps.property.annotations">annotations</a></code> | <code><a href="#cdk8s-constructs.Annotation">Annotation</a>[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabIngressProps.property.certIssuer">certIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabIngressProps.property.certSecretName">certSecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabIngressProps.property.ingressClassName">ingressClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabIngressProps.property.port">port</a></code> | <code>number</code> | *No description.* |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="cdk8s-constructs.HomelabIngressProps.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.HomelabIngressProps.property.service"></a>

```typescript
public readonly service: IService;
```

- *Type:* cdk8s-plus-minus.IService

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="cdk8s-constructs.HomelabIngressProps.property.annotations"></a>

```typescript
public readonly annotations: Annotation[];
```

- *Type:* <a href="#cdk8s-constructs.Annotation">Annotation</a>[]

---

##### `certIssuer`<sup>Optional</sup> <a name="certIssuer" id="cdk8s-constructs.HomelabIngressProps.property.certIssuer"></a>

```typescript
public readonly certIssuer: string;
```

- *Type:* string

---

##### `certSecretName`<sup>Optional</sup> <a name="certSecretName" id="cdk8s-constructs.HomelabIngressProps.property.certSecretName"></a>

```typescript
public readonly certSecretName: string;
```

- *Type:* string

---

##### `ingressClassName`<sup>Optional</sup> <a name="ingressClassName" id="cdk8s-constructs.HomelabIngressProps.property.ingressClassName"></a>

```typescript
public readonly ingressClassName: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk8s-constructs.HomelabIngressProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

### HomelabTraefikIngressRouteProps <a name="HomelabTraefikIngressRouteProps" id="cdk8s-constructs.HomelabTraefikIngressRouteProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.HomelabTraefikIngressRouteProps.Initializer"></a>

```typescript
import { HomelabTraefikIngressRouteProps } from 'cdk8s-constructs'

const homelabTraefikIngressRouteProps: HomelabTraefikIngressRouteProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.HomelabTraefikIngressRouteProps.property.routes">routes</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpecRoutes">IngressRouteSpecRoutes</a>[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabTraefikIngressRouteProps.property.certificate">certificate</a></code> | <code><a href="#cdk8s-constructs.HomelabCertificate">HomelabCertificate</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.HomelabTraefikIngressRouteProps.property.ingressClass">ingressClass</a></code> | <code><a href="#cdk8s-constructs.ClusterIngressClass">ClusterIngressClass</a></code> | *No description.* |

---

##### `routes`<sup>Required</sup> <a name="routes" id="cdk8s-constructs.HomelabTraefikIngressRouteProps.property.routes"></a>

```typescript
public readonly routes: IngressRouteSpecRoutes[];
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecRoutes">IngressRouteSpecRoutes</a>[]

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="cdk8s-constructs.HomelabTraefikIngressRouteProps.property.certificate"></a>

```typescript
public readonly certificate: HomelabCertificate;
```

- *Type:* <a href="#cdk8s-constructs.HomelabCertificate">HomelabCertificate</a>

---

##### `ingressClass`<sup>Optional</sup> <a name="ingressClass" id="cdk8s-constructs.HomelabTraefikIngressRouteProps.property.ingressClass"></a>

```typescript
public readonly ingressClass: ClusterIngressClass;
```

- *Type:* <a href="#cdk8s-constructs.ClusterIngressClass">ClusterIngressClass</a>

---

### ImmichGeneralOptions <a name="ImmichGeneralOptions" id="cdk8s-constructs.ImmichGeneralOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ImmichGeneralOptions.Initializer"></a>

```typescript
import { ImmichGeneralOptions } from 'cdk8s-constructs'

const immichGeneralOptions: ImmichGeneralOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ImmichGeneralOptions.property.immichVersion">immichVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichGeneralOptions.property.loginMessage">loginMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichGeneralOptions.property.logLevel">logLevel</a></code> | <code><a href="#cdk8s-constructs.ImmichLogLevel">ImmichLogLevel</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichGeneralOptions.property.mediaLocation">mediaLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichGeneralOptions.property.nodeEnvironment">nodeEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichGeneralOptions.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |

---

##### `immichVersion`<sup>Optional</sup> <a name="immichVersion" id="cdk8s-constructs.ImmichGeneralOptions.property.immichVersion"></a>

```typescript
public readonly immichVersion: string;
```

- *Type:* string

---

##### `loginMessage`<sup>Optional</sup> <a name="loginMessage" id="cdk8s-constructs.ImmichGeneralOptions.property.loginMessage"></a>

```typescript
public readonly loginMessage: string;
```

- *Type:* string

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="cdk8s-constructs.ImmichGeneralOptions.property.logLevel"></a>

```typescript
public readonly logLevel: ImmichLogLevel;
```

- *Type:* <a href="#cdk8s-constructs.ImmichLogLevel">ImmichLogLevel</a>

---

##### `mediaLocation`<sup>Optional</sup> <a name="mediaLocation" id="cdk8s-constructs.ImmichGeneralOptions.property.mediaLocation"></a>

```typescript
public readonly mediaLocation: string;
```

- *Type:* string

---

##### `nodeEnvironment`<sup>Optional</sup> <a name="nodeEnvironment" id="cdk8s-constructs.ImmichGeneralOptions.property.nodeEnvironment"></a>

```typescript
public readonly nodeEnvironment: string;
```

- *Type:* string

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="cdk8s-constructs.ImmichGeneralOptions.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

### ImmichGeocodingOptions <a name="ImmichGeocodingOptions" id="cdk8s-constructs.ImmichGeocodingOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ImmichGeocodingOptions.Initializer"></a>

```typescript
import { ImmichGeocodingOptions } from 'cdk8s-constructs'

const immichGeocodingOptions: ImmichGeocodingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ImmichGeocodingOptions.property.disable">disable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichGeocodingOptions.property.dumpDir">dumpDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichGeocodingOptions.property.percision">percision</a></code> | <code>number</code> | *No description.* |

---

##### `disable`<sup>Optional</sup> <a name="disable" id="cdk8s-constructs.ImmichGeocodingOptions.property.disable"></a>

```typescript
public readonly disable: boolean;
```

- *Type:* boolean

---

##### `dumpDir`<sup>Optional</sup> <a name="dumpDir" id="cdk8s-constructs.ImmichGeocodingOptions.property.dumpDir"></a>

```typescript
public readonly dumpDir: string;
```

- *Type:* string

---

##### `percision`<sup>Optional</sup> <a name="percision" id="cdk8s-constructs.ImmichGeocodingOptions.property.percision"></a>

```typescript
public readonly percision: number;
```

- *Type:* number

---

### ImmichMachineLearningCacheOptions <a name="ImmichMachineLearningCacheOptions" id="cdk8s-constructs.ImmichMachineLearningCacheOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ImmichMachineLearningCacheOptions.Initializer"></a>

```typescript
import { ImmichMachineLearningCacheOptions } from 'cdk8s-constructs'

const immichMachineLearningCacheOptions: ImmichMachineLearningCacheOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ImmichMachineLearningCacheOptions.property.size">size</a></code> | <code>cdk8s.Size</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichMachineLearningCacheOptions.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |

---

##### `size`<sup>Required</sup> <a name="size" id="cdk8s-constructs.ImmichMachineLearningCacheOptions.property.size"></a>

```typescript
public readonly size: Size;
```

- *Type:* cdk8s.Size

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="cdk8s-constructs.ImmichMachineLearningCacheOptions.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

### ImmichMachineLearningOptions <a name="ImmichMachineLearningOptions" id="cdk8s-constructs.ImmichMachineLearningOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ImmichMachineLearningOptions.Initializer"></a>

```typescript
import { ImmichMachineLearningOptions } from 'cdk8s-constructs'

const immichMachineLearningOptions: ImmichMachineLearningOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ImmichMachineLearningOptions.property.cache">cache</a></code> | <code><a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichMachineLearningOptions.property.cacheFolder">cacheFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichMachineLearningOptions.property.classificationModel">classificationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichMachineLearningOptions.property.clipImageModel">clipImageModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichMachineLearningOptions.property.clipTextModel">clipTextModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichMachineLearningOptions.property.eagerStartup">eagerStartup</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichMachineLearningOptions.property.faceRecognitionModel">faceRecognitionModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichMachineLearningOptions.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichMachineLearningOptions.property.minimumFaceScore">minimumFaceScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichMachineLearningOptions.property.minimumTagScore">minimumTagScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichMachineLearningOptions.property.modelTtl">modelTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichMachineLearningOptions.property.transformerCache">transformerCache</a></code> | <code>string</code> | *No description.* |

---

##### `cache`<sup>Optional</sup> <a name="cache" id="cdk8s-constructs.ImmichMachineLearningOptions.property.cache"></a>

```typescript
public readonly cache: PersistentVolumeClaimOptions;
```

- *Type:* <a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a>

---

##### `cacheFolder`<sup>Optional</sup> <a name="cacheFolder" id="cdk8s-constructs.ImmichMachineLearningOptions.property.cacheFolder"></a>

```typescript
public readonly cacheFolder: string;
```

- *Type:* string

---

##### `classificationModel`<sup>Optional</sup> <a name="classificationModel" id="cdk8s-constructs.ImmichMachineLearningOptions.property.classificationModel"></a>

```typescript
public readonly classificationModel: string;
```

- *Type:* string

---

##### `clipImageModel`<sup>Optional</sup> <a name="clipImageModel" id="cdk8s-constructs.ImmichMachineLearningOptions.property.clipImageModel"></a>

```typescript
public readonly clipImageModel: string;
```

- *Type:* string

---

##### `clipTextModel`<sup>Optional</sup> <a name="clipTextModel" id="cdk8s-constructs.ImmichMachineLearningOptions.property.clipTextModel"></a>

```typescript
public readonly clipTextModel: string;
```

- *Type:* string

---

##### `eagerStartup`<sup>Optional</sup> <a name="eagerStartup" id="cdk8s-constructs.ImmichMachineLearningOptions.property.eagerStartup"></a>

```typescript
public readonly eagerStartup: boolean;
```

- *Type:* boolean

---

##### `faceRecognitionModel`<sup>Optional</sup> <a name="faceRecognitionModel" id="cdk8s-constructs.ImmichMachineLearningOptions.property.faceRecognitionModel"></a>

```typescript
public readonly faceRecognitionModel: string;
```

- *Type:* string

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.ImmichMachineLearningOptions.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `minimumFaceScore`<sup>Optional</sup> <a name="minimumFaceScore" id="cdk8s-constructs.ImmichMachineLearningOptions.property.minimumFaceScore"></a>

```typescript
public readonly minimumFaceScore: number;
```

- *Type:* number

---

##### `minimumTagScore`<sup>Optional</sup> <a name="minimumTagScore" id="cdk8s-constructs.ImmichMachineLearningOptions.property.minimumTagScore"></a>

```typescript
public readonly minimumTagScore: number;
```

- *Type:* number

---

##### `modelTtl`<sup>Optional</sup> <a name="modelTtl" id="cdk8s-constructs.ImmichMachineLearningOptions.property.modelTtl"></a>

```typescript
public readonly modelTtl: number;
```

- *Type:* number

---

##### `transformerCache`<sup>Optional</sup> <a name="transformerCache" id="cdk8s-constructs.ImmichMachineLearningOptions.property.transformerCache"></a>

```typescript
public readonly transformerCache: string;
```

- *Type:* string

---

### ImmichMicroservicesOptions <a name="ImmichMicroservicesOptions" id="cdk8s-constructs.ImmichMicroservicesOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ImmichMicroservicesOptions.Initializer"></a>

```typescript
import { ImmichMicroservicesOptions } from 'cdk8s-constructs'

const immichMicroservicesOptions: ImmichMicroservicesOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ImmichMicroservicesOptions.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.ImmichMicroservicesOptions.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

### ImmichPhotoVolumeOptions <a name="ImmichPhotoVolumeOptions" id="cdk8s-constructs.ImmichPhotoVolumeOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ImmichPhotoVolumeOptions.Initializer"></a>

```typescript
import { ImmichPhotoVolumeOptions } from 'cdk8s-constructs'

const immichPhotoVolumeOptions: ImmichPhotoVolumeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ImmichPhotoVolumeOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichPhotoVolumeOptions.property.volume">volume</a></code> | <code>cdk8s-plus-minus.Volume</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ImmichPhotoVolumeOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `volume`<sup>Required</sup> <a name="volume" id="cdk8s-constructs.ImmichPhotoVolumeOptions.property.volume"></a>

```typescript
public readonly volume: Volume;
```

- *Type:* cdk8s-plus-minus.Volume

---

### ImmichPostgresOptions <a name="ImmichPostgresOptions" id="cdk8s-constructs.ImmichPostgresOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ImmichPostgresOptions.Initializer"></a>

```typescript
import { ImmichPostgresOptions } from 'cdk8s-constructs'

const immichPostgresOptions: ImmichPostgresOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ImmichPostgresOptions.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichPostgresOptions.property.passwordSecret">passwordSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichPostgresOptions.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichPostgresOptions.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichPostgresOptions.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichPostgresOptions.property.port">port</a></code> | <code>number</code> | *No description.* |

---

##### `database`<sup>Required</sup> <a name="database" id="cdk8s-constructs.ImmichPostgresOptions.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `passwordSecret`<sup>Required</sup> <a name="passwordSecret" id="cdk8s-constructs.ImmichPostgresOptions.property.passwordSecret"></a>

```typescript
public readonly passwordSecret: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="cdk8s-constructs.ImmichPostgresOptions.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="cdk8s-constructs.ImmichPostgresOptions.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `image`<sup>Optional</sup> <a name="image" id="cdk8s-constructs.ImmichPostgresOptions.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk8s-constructs.ImmichPostgresOptions.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

### ImmichProps <a name="ImmichProps" id="cdk8s-constructs.ImmichProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ImmichProps.Initializer"></a>

```typescript
import { ImmichProps } from 'cdk8s-constructs'

const immichProps: ImmichProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ImmichProps.property.postgresOptions">postgresOptions</a></code> | <code><a href="#cdk8s-constructs.ImmichPostgresOptions">ImmichPostgresOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichProps.property.redisOptions">redisOptions</a></code> | <code><a href="#cdk8s-constructs.ImmichRedisOptions">ImmichRedisOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichProps.property.serverOptions">serverOptions</a></code> | <code><a href="#cdk8s-constructs.ImmichServerOptions">ImmichServerOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichProps.property.uploadShare">uploadShare</a></code> | <code>cdk8s-plus-minus.Volume</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichProps.property.externalApiUrl">externalApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichProps.property.generalOptions">generalOptions</a></code> | <code><a href="#cdk8s-constructs.ImmichGeneralOptions">ImmichGeneralOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichProps.property.geocoding">geocoding</a></code> | <code><a href="#cdk8s-constructs.ImmichGeocodingOptions">ImmichGeocodingOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichProps.property.machineLearningOptions">machineLearningOptions</a></code> | <code><a href="#cdk8s-constructs.ImmichMachineLearningOptions">ImmichMachineLearningOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichProps.property.microservicesOptions">microservicesOptions</a></code> | <code><a href="#cdk8s-constructs.ImmichMicroservicesOptions">ImmichMicroservicesOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichProps.property.monitoring">monitoring</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichProps.property.photoCollectionShares">photoCollectionShares</a></code> | <code><a href="#cdk8s-constructs.ImmichPhotoVolumeOptions">ImmichPhotoVolumeOptions</a>[]</code> | *No description.* |

---

##### `postgresOptions`<sup>Required</sup> <a name="postgresOptions" id="cdk8s-constructs.ImmichProps.property.postgresOptions"></a>

```typescript
public readonly postgresOptions: ImmichPostgresOptions;
```

- *Type:* <a href="#cdk8s-constructs.ImmichPostgresOptions">ImmichPostgresOptions</a>

---

##### `redisOptions`<sup>Required</sup> <a name="redisOptions" id="cdk8s-constructs.ImmichProps.property.redisOptions"></a>

```typescript
public readonly redisOptions: ImmichRedisOptions;
```

- *Type:* <a href="#cdk8s-constructs.ImmichRedisOptions">ImmichRedisOptions</a>

---

##### `serverOptions`<sup>Required</sup> <a name="serverOptions" id="cdk8s-constructs.ImmichProps.property.serverOptions"></a>

```typescript
public readonly serverOptions: ImmichServerOptions;
```

- *Type:* <a href="#cdk8s-constructs.ImmichServerOptions">ImmichServerOptions</a>

---

##### `uploadShare`<sup>Required</sup> <a name="uploadShare" id="cdk8s-constructs.ImmichProps.property.uploadShare"></a>

```typescript
public readonly uploadShare: Volume;
```

- *Type:* cdk8s-plus-minus.Volume

---

##### `externalApiUrl`<sup>Optional</sup> <a name="externalApiUrl" id="cdk8s-constructs.ImmichProps.property.externalApiUrl"></a>

```typescript
public readonly externalApiUrl: string;
```

- *Type:* string

---

##### `generalOptions`<sup>Optional</sup> <a name="generalOptions" id="cdk8s-constructs.ImmichProps.property.generalOptions"></a>

```typescript
public readonly generalOptions: ImmichGeneralOptions;
```

- *Type:* <a href="#cdk8s-constructs.ImmichGeneralOptions">ImmichGeneralOptions</a>

---

##### `geocoding`<sup>Optional</sup> <a name="geocoding" id="cdk8s-constructs.ImmichProps.property.geocoding"></a>

```typescript
public readonly geocoding: ImmichGeocodingOptions;
```

- *Type:* <a href="#cdk8s-constructs.ImmichGeocodingOptions">ImmichGeocodingOptions</a>

---

##### `machineLearningOptions`<sup>Optional</sup> <a name="machineLearningOptions" id="cdk8s-constructs.ImmichProps.property.machineLearningOptions"></a>

```typescript
public readonly machineLearningOptions: ImmichMachineLearningOptions;
```

- *Type:* <a href="#cdk8s-constructs.ImmichMachineLearningOptions">ImmichMachineLearningOptions</a>

---

##### `microservicesOptions`<sup>Optional</sup> <a name="microservicesOptions" id="cdk8s-constructs.ImmichProps.property.microservicesOptions"></a>

```typescript
public readonly microservicesOptions: ImmichMicroservicesOptions;
```

- *Type:* <a href="#cdk8s-constructs.ImmichMicroservicesOptions">ImmichMicroservicesOptions</a>

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="cdk8s-constructs.ImmichProps.property.monitoring"></a>

```typescript
public readonly monitoring: boolean;
```

- *Type:* boolean

---

##### `photoCollectionShares`<sup>Optional</sup> <a name="photoCollectionShares" id="cdk8s-constructs.ImmichProps.property.photoCollectionShares"></a>

```typescript
public readonly photoCollectionShares: ImmichPhotoVolumeOptions[];
```

- *Type:* <a href="#cdk8s-constructs.ImmichPhotoVolumeOptions">ImmichPhotoVolumeOptions</a>[]

---

### ImmichRedisOptions <a name="ImmichRedisOptions" id="cdk8s-constructs.ImmichRedisOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ImmichRedisOptions.Initializer"></a>

```typescript
import { ImmichRedisOptions } from 'cdk8s-constructs'

const immichRedisOptions: ImmichRedisOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ImmichRedisOptions.property.create">create</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichRedisOptions.property.dbIndex">dbIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichRedisOptions.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichRedisOptions.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichRedisOptions.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichRedisOptions.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichRedisOptions.property.socket">socket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichRedisOptions.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichRedisOptions.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `create`<sup>Required</sup> <a name="create" id="cdk8s-constructs.ImmichRedisOptions.property.create"></a>

```typescript
public readonly create: boolean;
```

- *Type:* boolean

---

##### `dbIndex`<sup>Optional</sup> <a name="dbIndex" id="cdk8s-constructs.ImmichRedisOptions.property.dbIndex"></a>

```typescript
public readonly dbIndex: number;
```

- *Type:* number

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="cdk8s-constructs.ImmichRedisOptions.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.ImmichRedisOptions.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `password`<sup>Optional</sup> <a name="password" id="cdk8s-constructs.ImmichRedisOptions.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk8s-constructs.ImmichRedisOptions.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `socket`<sup>Optional</sup> <a name="socket" id="cdk8s-constructs.ImmichRedisOptions.property.socket"></a>

```typescript
public readonly socket: string;
```

- *Type:* string

---

##### `url`<sup>Optional</sup> <a name="url" id="cdk8s-constructs.ImmichRedisOptions.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `user`<sup>Optional</sup> <a name="user" id="cdk8s-constructs.ImmichRedisOptions.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

### ImmichServerOptions <a name="ImmichServerOptions" id="cdk8s-constructs.ImmichServerOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ImmichServerOptions.Initializer"></a>

```typescript
import { ImmichServerOptions } from 'cdk8s-constructs'

const immichServerOptions: ImmichServerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ImmichServerOptions.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichServerOptions.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichServerOptions.property.uploadLocation">uploadLocation</a></code> | <code>string</code> | *No description.* |

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.ImmichServerOptions.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngressOptions;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a>

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.ImmichServerOptions.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `uploadLocation`<sup>Optional</sup> <a name="uploadLocation" id="cdk8s-constructs.ImmichServerOptions.property.uploadLocation"></a>

```typescript
public readonly uploadLocation: string;
```

- *Type:* string

---

### IngressRouteProps <a name="IngressRouteProps" id="cdk8s-constructs.IngressRouteProps"></a>

IngressRoute is the CRD implementation of a Traefik HTTP Router.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteProps.Initializer"></a>

```typescript
import { IngressRouteProps } from 'cdk8s-constructs'

const ingressRouteProps: IngressRouteProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteProps.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | *No description.* |
| <code><a href="#cdk8s-constructs.IngressRouteProps.property.spec">spec</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpec">IngressRouteSpec</a></code> | IngressRouteSpec defines the desired state of IngressRoute. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.IngressRouteProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

---

##### `spec`<sup>Required</sup> <a name="spec" id="cdk8s-constructs.IngressRouteProps.property.spec"></a>

```typescript
public readonly spec: IngressRouteSpec;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpec">IngressRouteSpec</a>

IngressRouteSpec defines the desired state of IngressRoute.

---

### IngressRouteSpec <a name="IngressRouteSpec" id="cdk8s-constructs.IngressRouteSpec"></a>

IngressRouteSpec defines the desired state of IngressRoute.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteSpec.Initializer"></a>

```typescript
import { IngressRouteSpec } from 'cdk8s-constructs'

const ingressRouteSpec: IngressRouteSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpec.property.routes">routes</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpecRoutes">IngressRouteSpecRoutes</a>[]</code> | Routes defines the list of routes. |
| <code><a href="#cdk8s-constructs.IngressRouteSpec.property.entryPoints">entryPoints</a></code> | <code>string[]</code> | EntryPoints defines the list of entry point names to bind to. |
| <code><a href="#cdk8s-constructs.IngressRouteSpec.property.tls">tls</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpecTls">IngressRouteSpecTls</a></code> | TLS defines the TLS configuration. |

---

##### `routes`<sup>Required</sup> <a name="routes" id="cdk8s-constructs.IngressRouteSpec.property.routes"></a>

```typescript
public readonly routes: IngressRouteSpecRoutes[];
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecRoutes">IngressRouteSpecRoutes</a>[]

Routes defines the list of routes.

---

##### `entryPoints`<sup>Optional</sup> <a name="entryPoints" id="cdk8s-constructs.IngressRouteSpec.property.entryPoints"></a>

```typescript
public readonly entryPoints: string[];
```

- *Type:* string[]

EntryPoints defines the list of entry point names to bind to.

Entry points have to be configured in the static configuration. More info: https://doc.traefik.io/traefik/v2.10/routing/entrypoints/ Default: all.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="cdk8s-constructs.IngressRouteSpec.property.tls"></a>

```typescript
public readonly tls: IngressRouteSpecTls;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecTls">IngressRouteSpecTls</a>

TLS defines the TLS configuration.

More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#tls

---

### IngressRouteSpecRoutes <a name="IngressRouteSpecRoutes" id="cdk8s-constructs.IngressRouteSpecRoutes"></a>

Route holds the HTTP route configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteSpecRoutes.Initializer"></a>

```typescript
import { IngressRouteSpecRoutes } from 'cdk8s-constructs'

const ingressRouteSpecRoutes: IngressRouteSpecRoutes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutes.property.kind">kind</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesKind">IngressRouteSpecRoutesKind</a></code> | Kind defines the kind of the route. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutes.property.match">match</a></code> | <code>string</code> | Match defines the router's rule. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutes.property.middlewares">middlewares</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesMiddlewares">IngressRouteSpecRoutesMiddlewares</a>[]</code> | Middlewares defines the list of references to Middleware resources. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutes.property.priority">priority</a></code> | <code>number</code> | Priority defines the router's priority. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutes.property.services">services</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServices">IngressRouteSpecRoutesServices</a>[]</code> | Services defines the list of Service. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.IngressRouteSpecRoutes.property.kind"></a>

```typescript
public readonly kind: IngressRouteSpecRoutesKind;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecRoutesKind">IngressRouteSpecRoutesKind</a>

Kind defines the kind of the route.

Rule is the only supported kind.

---

##### `match`<sup>Required</sup> <a name="match" id="cdk8s-constructs.IngressRouteSpecRoutes.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

Match defines the router's rule.

More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#rule

---

##### `middlewares`<sup>Optional</sup> <a name="middlewares" id="cdk8s-constructs.IngressRouteSpecRoutes.property.middlewares"></a>

```typescript
public readonly middlewares: IngressRouteSpecRoutesMiddlewares[];
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecRoutesMiddlewares">IngressRouteSpecRoutesMiddlewares</a>[]

Middlewares defines the list of references to Middleware resources.

More info: https://doc.traefik.io/traefik/v2.10/routing/providers/kubernetes-crd/#kind-middleware

---

##### `priority`<sup>Optional</sup> <a name="priority" id="cdk8s-constructs.IngressRouteSpecRoutes.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Priority defines the router's priority.

More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#priority

---

##### `services`<sup>Optional</sup> <a name="services" id="cdk8s-constructs.IngressRouteSpecRoutes.property.services"></a>

```typescript
public readonly services: IngressRouteSpecRoutesServices[];
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecRoutesServices">IngressRouteSpecRoutesServices</a>[]

Services defines the list of Service.

It can contain any combination of TraefikService and/or reference to a Kubernetes Service.

---

### IngressRouteSpecRoutesMiddlewares <a name="IngressRouteSpecRoutesMiddlewares" id="cdk8s-constructs.IngressRouteSpecRoutesMiddlewares"></a>

MiddlewareRef is a reference to a Middleware resource.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteSpecRoutesMiddlewares.Initializer"></a>

```typescript
import { IngressRouteSpecRoutesMiddlewares } from 'cdk8s-constructs'

const ingressRouteSpecRoutesMiddlewares: IngressRouteSpecRoutesMiddlewares = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesMiddlewares.property.name">name</a></code> | <code>string</code> | Name defines the name of the referenced Middleware resource. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesMiddlewares.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the namespace of the referenced Middleware resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.IngressRouteSpecRoutesMiddlewares.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the name of the referenced Middleware resource.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.IngressRouteSpecRoutesMiddlewares.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the namespace of the referenced Middleware resource.

---

### IngressRouteSpecRoutesServices <a name="IngressRouteSpecRoutesServices" id="cdk8s-constructs.IngressRouteSpecRoutesServices"></a>

Service defines an upstream HTTP service to proxy traffic to.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteSpecRoutesServices.Initializer"></a>

```typescript
import { IngressRouteSpecRoutesServices } from 'cdk8s-constructs'

const ingressRouteSpecRoutesServices: IngressRouteSpecRoutesServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServices.property.name">name</a></code> | <code>string</code> | Name defines the name of the referenced Kubernetes Service or TraefikService. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServices.property.kind">kind</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesKind">IngressRouteSpecRoutesServicesKind</a></code> | Kind defines the kind of the Service. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServices.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the namespace of the referenced Kubernetes Service or TraefikService. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServices.property.nativeLb">nativeLb</a></code> | <code>boolean</code> | NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServices.property.passHostHeader">passHostHeader</a></code> | <code>boolean</code> | PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServices.property.port">port</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesPort">IngressRouteSpecRoutesServicesPort</a></code> | Port defines the port of a Kubernetes Service. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServices.property.responseForwarding">responseForwarding</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesResponseForwarding">IngressRouteSpecRoutesServicesResponseForwarding</a></code> | ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServices.property.scheme">scheme</a></code> | <code>string</code> | Scheme defines the scheme to use for the request to the upstream Kubernetes Service. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServices.property.serversTransport">serversTransport</a></code> | <code>string</code> | ServersTransport defines the name of ServersTransport resource to use. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServices.property.sticky">sticky</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesSticky">IngressRouteSpecRoutesServicesSticky</a></code> | Sticky defines the sticky sessions configuration. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServices.property.strategy">strategy</a></code> | <code>string</code> | Strategy defines the load balancing strategy between the servers. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServices.property.weight">weight</a></code> | <code>number</code> | Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin). |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.IngressRouteSpecRoutesServices.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the name of the referenced Kubernetes Service or TraefikService.

The differentiation between the two is specified in the Kind field.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="cdk8s-constructs.IngressRouteSpecRoutesServices.property.kind"></a>

```typescript
public readonly kind: IngressRouteSpecRoutesServicesKind;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesKind">IngressRouteSpecRoutesServicesKind</a>

Kind defines the kind of the Service.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.IngressRouteSpecRoutesServices.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.

---

##### `nativeLb`<sup>Optional</sup> <a name="nativeLb" id="cdk8s-constructs.IngressRouteSpecRoutesServices.property.nativeLb"></a>

```typescript
public readonly nativeLb: boolean;
```

- *Type:* boolean

NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.

The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.

---

##### `passHostHeader`<sup>Optional</sup> <a name="passHostHeader" id="cdk8s-constructs.IngressRouteSpecRoutesServices.property.passHostHeader"></a>

```typescript
public readonly passHostHeader: boolean;
```

- *Type:* boolean

PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.

By default, passHostHeader is true.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk8s-constructs.IngressRouteSpecRoutesServices.property.port"></a>

```typescript
public readonly port: IngressRouteSpecRoutesServicesPort;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesPort">IngressRouteSpecRoutesServicesPort</a>

Port defines the port of a Kubernetes Service.

This can be a reference to a named port.

---

##### `responseForwarding`<sup>Optional</sup> <a name="responseForwarding" id="cdk8s-constructs.IngressRouteSpecRoutesServices.property.responseForwarding"></a>

```typescript
public readonly responseForwarding: IngressRouteSpecRoutesServicesResponseForwarding;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesResponseForwarding">IngressRouteSpecRoutesServicesResponseForwarding</a>

ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="cdk8s-constructs.IngressRouteSpecRoutesServices.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Scheme defines the scheme to use for the request to the upstream Kubernetes Service.

It defaults to https when Kubernetes Service port is 443, http otherwise.

---

##### `serversTransport`<sup>Optional</sup> <a name="serversTransport" id="cdk8s-constructs.IngressRouteSpecRoutesServices.property.serversTransport"></a>

```typescript
public readonly serversTransport: string;
```

- *Type:* string

ServersTransport defines the name of ServersTransport resource to use.

It allows to configure the transport between Traefik and your servers. Can only be used on a Kubernetes Service.

---

##### `sticky`<sup>Optional</sup> <a name="sticky" id="cdk8s-constructs.IngressRouteSpecRoutesServices.property.sticky"></a>

```typescript
public readonly sticky: IngressRouteSpecRoutesServicesSticky;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesSticky">IngressRouteSpecRoutesServicesSticky</a>

Sticky defines the sticky sessions configuration.

More info: https://doc.traefik.io/traefik/v2.10/routing/services/#sticky-sessions

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="cdk8s-constructs.IngressRouteSpecRoutesServices.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

Strategy defines the load balancing strategy between the servers.

RoundRobin is the only supported value at the moment.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="cdk8s-constructs.IngressRouteSpecRoutesServices.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin).

---

### IngressRouteSpecRoutesServicesResponseForwarding <a name="IngressRouteSpecRoutesServicesResponseForwarding" id="cdk8s-constructs.IngressRouteSpecRoutesServicesResponseForwarding"></a>

ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteSpecRoutesServicesResponseForwarding.Initializer"></a>

```typescript
import { IngressRouteSpecRoutesServicesResponseForwarding } from 'cdk8s-constructs'

const ingressRouteSpecRoutesServicesResponseForwarding: IngressRouteSpecRoutesServicesResponseForwarding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesResponseForwarding.property.flushInterval">flushInterval</a></code> | <code>string</code> | FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body. |

---

##### `flushInterval`<sup>Optional</sup> <a name="flushInterval" id="cdk8s-constructs.IngressRouteSpecRoutesServicesResponseForwarding.property.flushInterval"></a>

```typescript
public readonly flushInterval: string;
```

- *Type:* string

FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.

A negative value means to flush immediately after each write to the client. This configuration is ignored when ReverseProxy recognizes a response as a streaming response; for such responses, writes are flushed to the client immediately. Default: 100ms

---

### IngressRouteSpecRoutesServicesSticky <a name="IngressRouteSpecRoutesServicesSticky" id="cdk8s-constructs.IngressRouteSpecRoutesServicesSticky"></a>

Sticky defines the sticky sessions configuration.

More info: https://doc.traefik.io/traefik/v2.10/routing/services/#sticky-sessions

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteSpecRoutesServicesSticky.Initializer"></a>

```typescript
import { IngressRouteSpecRoutesServicesSticky } from 'cdk8s-constructs'

const ingressRouteSpecRoutesServicesSticky: IngressRouteSpecRoutesServicesSticky = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesSticky.property.cookie">cookie</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesStickyCookie">IngressRouteSpecRoutesServicesStickyCookie</a></code> | Cookie defines the sticky cookie configuration. |

---

##### `cookie`<sup>Optional</sup> <a name="cookie" id="cdk8s-constructs.IngressRouteSpecRoutesServicesSticky.property.cookie"></a>

```typescript
public readonly cookie: IngressRouteSpecRoutesServicesStickyCookie;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesStickyCookie">IngressRouteSpecRoutesServicesStickyCookie</a>

Cookie defines the sticky cookie configuration.

---

### IngressRouteSpecRoutesServicesStickyCookie <a name="IngressRouteSpecRoutesServicesStickyCookie" id="cdk8s-constructs.IngressRouteSpecRoutesServicesStickyCookie"></a>

Cookie defines the sticky cookie configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteSpecRoutesServicesStickyCookie.Initializer"></a>

```typescript
import { IngressRouteSpecRoutesServicesStickyCookie } from 'cdk8s-constructs'

const ingressRouteSpecRoutesServicesStickyCookie: IngressRouteSpecRoutesServicesStickyCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesStickyCookie.property.httpOnly">httpOnly</a></code> | <code>boolean</code> | HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesStickyCookie.property.name">name</a></code> | <code>string</code> | Name defines the Cookie name. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesStickyCookie.property.sameSite">sameSite</a></code> | <code>string</code> | SameSite defines the same site policy. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesStickyCookie.property.secure">secure</a></code> | <code>boolean</code> | Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS). |

---

##### `httpOnly`<sup>Optional</sup> <a name="httpOnly" id="cdk8s-constructs.IngressRouteSpecRoutesServicesStickyCookie.property.httpOnly"></a>

```typescript
public readonly httpOnly: boolean;
```

- *Type:* boolean

HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s-constructs.IngressRouteSpecRoutesServicesStickyCookie.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the Cookie name.

---

##### `sameSite`<sup>Optional</sup> <a name="sameSite" id="cdk8s-constructs.IngressRouteSpecRoutesServicesStickyCookie.property.sameSite"></a>

```typescript
public readonly sameSite: string;
```

- *Type:* string

SameSite defines the same site policy.

More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite

---

##### `secure`<sup>Optional</sup> <a name="secure" id="cdk8s-constructs.IngressRouteSpecRoutesServicesStickyCookie.property.secure"></a>

```typescript
public readonly secure: boolean;
```

- *Type:* boolean

Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).

---

### IngressRouteSpecTls <a name="IngressRouteSpecTls" id="cdk8s-constructs.IngressRouteSpecTls"></a>

TLS defines the TLS configuration.

More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#tls

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteSpecTls.Initializer"></a>

```typescript
import { IngressRouteSpecTls } from 'cdk8s-constructs'

const ingressRouteSpecTls: IngressRouteSpecTls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpecTls.property.certResolver">certResolver</a></code> | <code>string</code> | CertResolver defines the name of the certificate resolver to use. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecTls.property.domains">domains</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpecTlsDomains">IngressRouteSpecTlsDomains</a>[]</code> | Domains defines the list of domains that will be used to issue certificates. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecTls.property.options">options</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpecTlsOptions">IngressRouteSpecTlsOptions</a></code> | Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecTls.property.secretName">secretName</a></code> | <code>string</code> | SecretName is the name of the referenced Kubernetes Secret to specify the certificate details. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecTls.property.store">store</a></code> | <code><a href="#cdk8s-constructs.IngressRouteSpecTlsStore">IngressRouteSpecTlsStore</a></code> | Store defines the reference to the TLSStore, that will be used to store certificates. |

---

##### `certResolver`<sup>Optional</sup> <a name="certResolver" id="cdk8s-constructs.IngressRouteSpecTls.property.certResolver"></a>

```typescript
public readonly certResolver: string;
```

- *Type:* string

CertResolver defines the name of the certificate resolver to use.

Cert resolvers have to be configured in the static configuration. More info: https://doc.traefik.io/traefik/v2.10/https/acme/#certificate-resolvers

---

##### `domains`<sup>Optional</sup> <a name="domains" id="cdk8s-constructs.IngressRouteSpecTls.property.domains"></a>

```typescript
public readonly domains: IngressRouteSpecTlsDomains[];
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecTlsDomains">IngressRouteSpecTlsDomains</a>[]

Domains defines the list of domains that will be used to issue certificates.

More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#domains

---

##### `options`<sup>Optional</sup> <a name="options" id="cdk8s-constructs.IngressRouteSpecTls.property.options"></a>

```typescript
public readonly options: IngressRouteSpecTlsOptions;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecTlsOptions">IngressRouteSpecTlsOptions</a>

Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection.

If not defined, the `default` TLSOption is used. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#tls-options

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="cdk8s-constructs.IngressRouteSpecTls.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.

---

##### `store`<sup>Optional</sup> <a name="store" id="cdk8s-constructs.IngressRouteSpecTls.property.store"></a>

```typescript
public readonly store: IngressRouteSpecTlsStore;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecTlsStore">IngressRouteSpecTlsStore</a>

Store defines the reference to the TLSStore, that will be used to store certificates.

Please note that only `default` TLSStore can be used.

---

### IngressRouteSpecTlsDomains <a name="IngressRouteSpecTlsDomains" id="cdk8s-constructs.IngressRouteSpecTlsDomains"></a>

Domain holds a domain name with SANs.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteSpecTlsDomains.Initializer"></a>

```typescript
import { IngressRouteSpecTlsDomains } from 'cdk8s-constructs'

const ingressRouteSpecTlsDomains: IngressRouteSpecTlsDomains = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpecTlsDomains.property.main">main</a></code> | <code>string</code> | Main defines the main domain name. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecTlsDomains.property.sans">sans</a></code> | <code>string[]</code> | SANs defines the subject alternative domain names. |

---

##### `main`<sup>Optional</sup> <a name="main" id="cdk8s-constructs.IngressRouteSpecTlsDomains.property.main"></a>

```typescript
public readonly main: string;
```

- *Type:* string

Main defines the main domain name.

---

##### `sans`<sup>Optional</sup> <a name="sans" id="cdk8s-constructs.IngressRouteSpecTlsDomains.property.sans"></a>

```typescript
public readonly sans: string[];
```

- *Type:* string[]

SANs defines the subject alternative domain names.

---

### IngressRouteSpecTlsOptions <a name="IngressRouteSpecTlsOptions" id="cdk8s-constructs.IngressRouteSpecTlsOptions"></a>

Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection.

If not defined, the `default` TLSOption is used. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#tls-options

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteSpecTlsOptions.Initializer"></a>

```typescript
import { IngressRouteSpecTlsOptions } from 'cdk8s-constructs'

const ingressRouteSpecTlsOptions: IngressRouteSpecTlsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpecTlsOptions.property.name">name</a></code> | <code>string</code> | Name defines the name of the referenced TLSOption. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecTlsOptions.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the namespace of the referenced TLSOption. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.IngressRouteSpecTlsOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the name of the referenced TLSOption.

More info: https://doc.traefik.io/traefik/v2.10/routing/providers/kubernetes-crd/#kind-tlsoption

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.IngressRouteSpecTlsOptions.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the namespace of the referenced TLSOption.

More info: https://doc.traefik.io/traefik/v2.10/routing/providers/kubernetes-crd/#kind-tlsoption

---

### IngressRouteSpecTlsStore <a name="IngressRouteSpecTlsStore" id="cdk8s-constructs.IngressRouteSpecTlsStore"></a>

Store defines the reference to the TLSStore, that will be used to store certificates.

Please note that only `default` TLSStore can be used.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteSpecTlsStore.Initializer"></a>

```typescript
import { IngressRouteSpecTlsStore } from 'cdk8s-constructs'

const ingressRouteSpecTlsStore: IngressRouteSpecTlsStore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpecTlsStore.property.name">name</a></code> | <code>string</code> | Name defines the name of the referenced TLSStore. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecTlsStore.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the namespace of the referenced TLSStore. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.IngressRouteSpecTlsStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the name of the referenced TLSStore.

More info: https://doc.traefik.io/traefik/v2.10/routing/providers/kubernetes-crd/#kind-tlsstore

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.IngressRouteSpecTlsStore.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the namespace of the referenced TLSStore.

More info: https://doc.traefik.io/traefik/v2.10/routing/providers/kubernetes-crd/#kind-tlsstore

---

### IngressRouteTcpProps <a name="IngressRouteTcpProps" id="cdk8s-constructs.IngressRouteTcpProps"></a>

IngressRouteTCP is the CRD implementation of a Traefik TCP Router.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteTcpProps.Initializer"></a>

```typescript
import { IngressRouteTcpProps } from 'cdk8s-constructs'

const ingressRouteTcpProps: IngressRouteTcpProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcpProps.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | *No description.* |
| <code><a href="#cdk8s-constructs.IngressRouteTcpProps.property.spec">spec</a></code> | <code><a href="#cdk8s-constructs.IngressRouteTcpSpec">IngressRouteTcpSpec</a></code> | IngressRouteTCPSpec defines the desired state of IngressRouteTCP. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.IngressRouteTcpProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

---

##### `spec`<sup>Required</sup> <a name="spec" id="cdk8s-constructs.IngressRouteTcpProps.property.spec"></a>

```typescript
public readonly spec: IngressRouteTcpSpec;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteTcpSpec">IngressRouteTcpSpec</a>

IngressRouteTCPSpec defines the desired state of IngressRouteTCP.

---

### IngressRouteTcpSpec <a name="IngressRouteTcpSpec" id="cdk8s-constructs.IngressRouteTcpSpec"></a>

IngressRouteTCPSpec defines the desired state of IngressRouteTCP.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteTcpSpec.Initializer"></a>

```typescript
import { IngressRouteTcpSpec } from 'cdk8s-constructs'

const ingressRouteTcpSpec: IngressRouteTcpSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpec.property.routes">routes</a></code> | <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutes">IngressRouteTcpSpecRoutes</a>[]</code> | Routes defines the list of routes. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpec.property.entryPoints">entryPoints</a></code> | <code>string[]</code> | EntryPoints defines the list of entry point names to bind to. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpec.property.tls">tls</a></code> | <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTls">IngressRouteTcpSpecTls</a></code> | TLS defines the TLS configuration on a layer 4 / TCP Route. |

---

##### `routes`<sup>Required</sup> <a name="routes" id="cdk8s-constructs.IngressRouteTcpSpec.property.routes"></a>

```typescript
public readonly routes: IngressRouteTcpSpecRoutes[];
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteTcpSpecRoutes">IngressRouteTcpSpecRoutes</a>[]

Routes defines the list of routes.

---

##### `entryPoints`<sup>Optional</sup> <a name="entryPoints" id="cdk8s-constructs.IngressRouteTcpSpec.property.entryPoints"></a>

```typescript
public readonly entryPoints: string[];
```

- *Type:* string[]

EntryPoints defines the list of entry point names to bind to.

Entry points have to be configured in the static configuration. More info: https://doc.traefik.io/traefik/v2.10/routing/entrypoints/ Default: all.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="cdk8s-constructs.IngressRouteTcpSpec.property.tls"></a>

```typescript
public readonly tls: IngressRouteTcpSpecTls;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteTcpSpecTls">IngressRouteTcpSpecTls</a>

TLS defines the TLS configuration on a layer 4 / TCP Route.

More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#tls_1

---

### IngressRouteTcpSpecRoutes <a name="IngressRouteTcpSpecRoutes" id="cdk8s-constructs.IngressRouteTcpSpecRoutes"></a>

RouteTCP holds the TCP route configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteTcpSpecRoutes.Initializer"></a>

```typescript
import { IngressRouteTcpSpecRoutes } from 'cdk8s-constructs'

const ingressRouteTcpSpecRoutes: IngressRouteTcpSpecRoutes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutes.property.match">match</a></code> | <code>string</code> | Match defines the router's rule. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutes.property.middlewares">middlewares</a></code> | <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesMiddlewares">IngressRouteTcpSpecRoutesMiddlewares</a>[]</code> | Middlewares defines the list of references to MiddlewareTCP resources. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutes.property.priority">priority</a></code> | <code>number</code> | Priority defines the router's priority. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutes.property.services">services</a></code> | <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServices">IngressRouteTcpSpecRoutesServices</a>[]</code> | Services defines the list of TCP services. |

---

##### `match`<sup>Required</sup> <a name="match" id="cdk8s-constructs.IngressRouteTcpSpecRoutes.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

Match defines the router's rule.

More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#rule_1

---

##### `middlewares`<sup>Optional</sup> <a name="middlewares" id="cdk8s-constructs.IngressRouteTcpSpecRoutes.property.middlewares"></a>

```typescript
public readonly middlewares: IngressRouteTcpSpecRoutesMiddlewares[];
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesMiddlewares">IngressRouteTcpSpecRoutesMiddlewares</a>[]

Middlewares defines the list of references to MiddlewareTCP resources.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="cdk8s-constructs.IngressRouteTcpSpecRoutes.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Priority defines the router's priority.

More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#priority_1

---

##### `services`<sup>Optional</sup> <a name="services" id="cdk8s-constructs.IngressRouteTcpSpecRoutes.property.services"></a>

```typescript
public readonly services: IngressRouteTcpSpecRoutesServices[];
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServices">IngressRouteTcpSpecRoutesServices</a>[]

Services defines the list of TCP services.

---

### IngressRouteTcpSpecRoutesMiddlewares <a name="IngressRouteTcpSpecRoutesMiddlewares" id="cdk8s-constructs.IngressRouteTcpSpecRoutesMiddlewares"></a>

ObjectReference is a generic reference to a Traefik resource.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteTcpSpecRoutesMiddlewares.Initializer"></a>

```typescript
import { IngressRouteTcpSpecRoutesMiddlewares } from 'cdk8s-constructs'

const ingressRouteTcpSpecRoutesMiddlewares: IngressRouteTcpSpecRoutesMiddlewares = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesMiddlewares.property.name">name</a></code> | <code>string</code> | Name defines the name of the referenced Traefik resource. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesMiddlewares.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the namespace of the referenced Traefik resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.IngressRouteTcpSpecRoutesMiddlewares.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the name of the referenced Traefik resource.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.IngressRouteTcpSpecRoutesMiddlewares.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the namespace of the referenced Traefik resource.

---

### IngressRouteTcpSpecRoutesServices <a name="IngressRouteTcpSpecRoutesServices" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServices"></a>

ServiceTCP defines an upstream TCP service to proxy traffic to.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServices.Initializer"></a>

```typescript
import { IngressRouteTcpSpecRoutesServices } from 'cdk8s-constructs'

const ingressRouteTcpSpecRoutesServices: IngressRouteTcpSpecRoutesServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServices.property.name">name</a></code> | <code>string</code> | Name defines the name of the referenced Kubernetes Service. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServices.property.port">port</a></code> | <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServicesPort">IngressRouteTcpSpecRoutesServicesPort</a></code> | Port defines the port of a Kubernetes Service. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServices.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the namespace of the referenced Kubernetes Service. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServices.property.nativeLb">nativeLb</a></code> | <code>boolean</code> | NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServices.property.proxyProtocol">proxyProtocol</a></code> | <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServicesProxyProtocol">IngressRouteTcpSpecRoutesServicesProxyProtocol</a></code> | ProxyProtocol defines the PROXY protocol configuration. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServices.property.terminationDelay">terminationDelay</a></code> | <code>number</code> | TerminationDelay defines the deadline that the proxy sets, after one of its connected peers indicates it has closed the writing capability of its connection, to close the reading capability as well, hence fully terminating the connection. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServices.property.weight">weight</a></code> | <code>number</code> | Weight defines the weight used when balancing requests between multiple Kubernetes Service. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServices.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the name of the referenced Kubernetes Service.

---

##### `port`<sup>Required</sup> <a name="port" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServices.property.port"></a>

```typescript
public readonly port: IngressRouteTcpSpecRoutesServicesPort;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServicesPort">IngressRouteTcpSpecRoutesServicesPort</a>

Port defines the port of a Kubernetes Service.

This can be a reference to a named port.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServices.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the namespace of the referenced Kubernetes Service.

---

##### `nativeLb`<sup>Optional</sup> <a name="nativeLb" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServices.property.nativeLb"></a>

```typescript
public readonly nativeLb: boolean;
```

- *Type:* boolean

NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.

The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.

---

##### `proxyProtocol`<sup>Optional</sup> <a name="proxyProtocol" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServices.property.proxyProtocol"></a>

```typescript
public readonly proxyProtocol: IngressRouteTcpSpecRoutesServicesProxyProtocol;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServicesProxyProtocol">IngressRouteTcpSpecRoutesServicesProxyProtocol</a>

ProxyProtocol defines the PROXY protocol configuration.

More info: https://doc.traefik.io/traefik/v2.10/routing/services/#proxy-protocol

---

##### `terminationDelay`<sup>Optional</sup> <a name="terminationDelay" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServices.property.terminationDelay"></a>

```typescript
public readonly terminationDelay: number;
```

- *Type:* number

TerminationDelay defines the deadline that the proxy sets, after one of its connected peers indicates it has closed the writing capability of its connection, to close the reading capability as well, hence fully terminating the connection.

It is a duration in milliseconds, defaulting to 100. A negative value means an infinite deadline (i.e. the reading capability is never closed).

---

##### `weight`<sup>Optional</sup> <a name="weight" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServices.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Weight defines the weight used when balancing requests between multiple Kubernetes Service.

---

### IngressRouteTcpSpecRoutesServicesProxyProtocol <a name="IngressRouteTcpSpecRoutesServicesProxyProtocol" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServicesProxyProtocol"></a>

ProxyProtocol defines the PROXY protocol configuration.

More info: https://doc.traefik.io/traefik/v2.10/routing/services/#proxy-protocol

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServicesProxyProtocol.Initializer"></a>

```typescript
import { IngressRouteTcpSpecRoutesServicesProxyProtocol } from 'cdk8s-constructs'

const ingressRouteTcpSpecRoutesServicesProxyProtocol: IngressRouteTcpSpecRoutesServicesProxyProtocol = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServicesProxyProtocol.property.version">version</a></code> | <code>number</code> | Version defines the PROXY Protocol version to use. |

---

##### `version`<sup>Optional</sup> <a name="version" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServicesProxyProtocol.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Version defines the PROXY Protocol version to use.

---

### IngressRouteTcpSpecTls <a name="IngressRouteTcpSpecTls" id="cdk8s-constructs.IngressRouteTcpSpecTls"></a>

TLS defines the TLS configuration on a layer 4 / TCP Route.

More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#tls_1

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteTcpSpecTls.Initializer"></a>

```typescript
import { IngressRouteTcpSpecTls } from 'cdk8s-constructs'

const ingressRouteTcpSpecTls: IngressRouteTcpSpecTls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTls.property.certResolver">certResolver</a></code> | <code>string</code> | CertResolver defines the name of the certificate resolver to use. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTls.property.domains">domains</a></code> | <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTlsDomains">IngressRouteTcpSpecTlsDomains</a>[]</code> | Domains defines the list of domains that will be used to issue certificates. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTls.property.options">options</a></code> | <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTlsOptions">IngressRouteTcpSpecTlsOptions</a></code> | Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTls.property.passthrough">passthrough</a></code> | <code>boolean</code> | Passthrough defines whether a TLS router will terminate the TLS connection. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTls.property.secretName">secretName</a></code> | <code>string</code> | SecretName is the name of the referenced Kubernetes Secret to specify the certificate details. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTls.property.store">store</a></code> | <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTlsStore">IngressRouteTcpSpecTlsStore</a></code> | Store defines the reference to the TLSStore, that will be used to store certificates. |

---

##### `certResolver`<sup>Optional</sup> <a name="certResolver" id="cdk8s-constructs.IngressRouteTcpSpecTls.property.certResolver"></a>

```typescript
public readonly certResolver: string;
```

- *Type:* string

CertResolver defines the name of the certificate resolver to use.

Cert resolvers have to be configured in the static configuration. More info: https://doc.traefik.io/traefik/v2.10/https/acme/#certificate-resolvers

---

##### `domains`<sup>Optional</sup> <a name="domains" id="cdk8s-constructs.IngressRouteTcpSpecTls.property.domains"></a>

```typescript
public readonly domains: IngressRouteTcpSpecTlsDomains[];
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteTcpSpecTlsDomains">IngressRouteTcpSpecTlsDomains</a>[]

Domains defines the list of domains that will be used to issue certificates.

More info: https://doc.traefik.io/traefik/v2.10/routing/routers/#domains

---

##### `options`<sup>Optional</sup> <a name="options" id="cdk8s-constructs.IngressRouteTcpSpecTls.property.options"></a>

```typescript
public readonly options: IngressRouteTcpSpecTlsOptions;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteTcpSpecTlsOptions">IngressRouteTcpSpecTlsOptions</a>

Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection.

If not defined, the `default` TLSOption is used. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#tls-options

---

##### `passthrough`<sup>Optional</sup> <a name="passthrough" id="cdk8s-constructs.IngressRouteTcpSpecTls.property.passthrough"></a>

```typescript
public readonly passthrough: boolean;
```

- *Type:* boolean

Passthrough defines whether a TLS router will terminate the TLS connection.

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="cdk8s-constructs.IngressRouteTcpSpecTls.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.

---

##### `store`<sup>Optional</sup> <a name="store" id="cdk8s-constructs.IngressRouteTcpSpecTls.property.store"></a>

```typescript
public readonly store: IngressRouteTcpSpecTlsStore;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteTcpSpecTlsStore">IngressRouteTcpSpecTlsStore</a>

Store defines the reference to the TLSStore, that will be used to store certificates.

Please note that only `default` TLSStore can be used.

---

### IngressRouteTcpSpecTlsDomains <a name="IngressRouteTcpSpecTlsDomains" id="cdk8s-constructs.IngressRouteTcpSpecTlsDomains"></a>

Domain holds a domain name with SANs.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteTcpSpecTlsDomains.Initializer"></a>

```typescript
import { IngressRouteTcpSpecTlsDomains } from 'cdk8s-constructs'

const ingressRouteTcpSpecTlsDomains: IngressRouteTcpSpecTlsDomains = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTlsDomains.property.main">main</a></code> | <code>string</code> | Main defines the main domain name. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTlsDomains.property.sans">sans</a></code> | <code>string[]</code> | SANs defines the subject alternative domain names. |

---

##### `main`<sup>Optional</sup> <a name="main" id="cdk8s-constructs.IngressRouteTcpSpecTlsDomains.property.main"></a>

```typescript
public readonly main: string;
```

- *Type:* string

Main defines the main domain name.

---

##### `sans`<sup>Optional</sup> <a name="sans" id="cdk8s-constructs.IngressRouteTcpSpecTlsDomains.property.sans"></a>

```typescript
public readonly sans: string[];
```

- *Type:* string[]

SANs defines the subject alternative domain names.

---

### IngressRouteTcpSpecTlsOptions <a name="IngressRouteTcpSpecTlsOptions" id="cdk8s-constructs.IngressRouteTcpSpecTlsOptions"></a>

Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection.

If not defined, the `default` TLSOption is used. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#tls-options

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteTcpSpecTlsOptions.Initializer"></a>

```typescript
import { IngressRouteTcpSpecTlsOptions } from 'cdk8s-constructs'

const ingressRouteTcpSpecTlsOptions: IngressRouteTcpSpecTlsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTlsOptions.property.name">name</a></code> | <code>string</code> | Name defines the name of the referenced Traefik resource. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTlsOptions.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the namespace of the referenced Traefik resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.IngressRouteTcpSpecTlsOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the name of the referenced Traefik resource.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.IngressRouteTcpSpecTlsOptions.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the namespace of the referenced Traefik resource.

---

### IngressRouteTcpSpecTlsStore <a name="IngressRouteTcpSpecTlsStore" id="cdk8s-constructs.IngressRouteTcpSpecTlsStore"></a>

Store defines the reference to the TLSStore, that will be used to store certificates.

Please note that only `default` TLSStore can be used.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteTcpSpecTlsStore.Initializer"></a>

```typescript
import { IngressRouteTcpSpecTlsStore } from 'cdk8s-constructs'

const ingressRouteTcpSpecTlsStore: IngressRouteTcpSpecTlsStore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTlsStore.property.name">name</a></code> | <code>string</code> | Name defines the name of the referenced Traefik resource. |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecTlsStore.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the namespace of the referenced Traefik resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.IngressRouteTcpSpecTlsStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the name of the referenced Traefik resource.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.IngressRouteTcpSpecTlsStore.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the namespace of the referenced Traefik resource.

---

### IngressRouteUdpProps <a name="IngressRouteUdpProps" id="cdk8s-constructs.IngressRouteUdpProps"></a>

IngressRouteUDP is a CRD implementation of a Traefik UDP Router.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteUdpProps.Initializer"></a>

```typescript
import { IngressRouteUdpProps } from 'cdk8s-constructs'

const ingressRouteUdpProps: IngressRouteUdpProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteUdpProps.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | *No description.* |
| <code><a href="#cdk8s-constructs.IngressRouteUdpProps.property.spec">spec</a></code> | <code><a href="#cdk8s-constructs.IngressRouteUdpSpec">IngressRouteUdpSpec</a></code> | IngressRouteUDPSpec defines the desired state of a IngressRouteUDP. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.IngressRouteUdpProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

---

##### `spec`<sup>Required</sup> <a name="spec" id="cdk8s-constructs.IngressRouteUdpProps.property.spec"></a>

```typescript
public readonly spec: IngressRouteUdpSpec;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteUdpSpec">IngressRouteUdpSpec</a>

IngressRouteUDPSpec defines the desired state of a IngressRouteUDP.

---

### IngressRouteUdpSpec <a name="IngressRouteUdpSpec" id="cdk8s-constructs.IngressRouteUdpSpec"></a>

IngressRouteUDPSpec defines the desired state of a IngressRouteUDP.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteUdpSpec.Initializer"></a>

```typescript
import { IngressRouteUdpSpec } from 'cdk8s-constructs'

const ingressRouteUdpSpec: IngressRouteUdpSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteUdpSpec.property.routes">routes</a></code> | <code><a href="#cdk8s-constructs.IngressRouteUdpSpecRoutes">IngressRouteUdpSpecRoutes</a>[]</code> | Routes defines the list of routes. |
| <code><a href="#cdk8s-constructs.IngressRouteUdpSpec.property.entryPoints">entryPoints</a></code> | <code>string[]</code> | EntryPoints defines the list of entry point names to bind to. |

---

##### `routes`<sup>Required</sup> <a name="routes" id="cdk8s-constructs.IngressRouteUdpSpec.property.routes"></a>

```typescript
public readonly routes: IngressRouteUdpSpecRoutes[];
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteUdpSpecRoutes">IngressRouteUdpSpecRoutes</a>[]

Routes defines the list of routes.

---

##### `entryPoints`<sup>Optional</sup> <a name="entryPoints" id="cdk8s-constructs.IngressRouteUdpSpec.property.entryPoints"></a>

```typescript
public readonly entryPoints: string[];
```

- *Type:* string[]

EntryPoints defines the list of entry point names to bind to.

Entry points have to be configured in the static configuration. More info: https://doc.traefik.io/traefik/v2.10/routing/entrypoints/ Default: all.

---

### IngressRouteUdpSpecRoutes <a name="IngressRouteUdpSpecRoutes" id="cdk8s-constructs.IngressRouteUdpSpecRoutes"></a>

RouteUDP holds the UDP route configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteUdpSpecRoutes.Initializer"></a>

```typescript
import { IngressRouteUdpSpecRoutes } from 'cdk8s-constructs'

const ingressRouteUdpSpecRoutes: IngressRouteUdpSpecRoutes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteUdpSpecRoutes.property.services">services</a></code> | <code><a href="#cdk8s-constructs.IngressRouteUdpSpecRoutesServices">IngressRouteUdpSpecRoutesServices</a>[]</code> | Services defines the list of UDP services. |

---

##### `services`<sup>Optional</sup> <a name="services" id="cdk8s-constructs.IngressRouteUdpSpecRoutes.property.services"></a>

```typescript
public readonly services: IngressRouteUdpSpecRoutesServices[];
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteUdpSpecRoutesServices">IngressRouteUdpSpecRoutesServices</a>[]

Services defines the list of UDP services.

---

### IngressRouteUdpSpecRoutesServices <a name="IngressRouteUdpSpecRoutesServices" id="cdk8s-constructs.IngressRouteUdpSpecRoutesServices"></a>

ServiceUDP defines an upstream UDP service to proxy traffic to.

#### Initializer <a name="Initializer" id="cdk8s-constructs.IngressRouteUdpSpecRoutesServices.Initializer"></a>

```typescript
import { IngressRouteUdpSpecRoutesServices } from 'cdk8s-constructs'

const ingressRouteUdpSpecRoutesServices: IngressRouteUdpSpecRoutesServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteUdpSpecRoutesServices.property.name">name</a></code> | <code>string</code> | Name defines the name of the referenced Kubernetes Service. |
| <code><a href="#cdk8s-constructs.IngressRouteUdpSpecRoutesServices.property.port">port</a></code> | <code><a href="#cdk8s-constructs.IngressRouteUdpSpecRoutesServicesPort">IngressRouteUdpSpecRoutesServicesPort</a></code> | Port defines the port of a Kubernetes Service. |
| <code><a href="#cdk8s-constructs.IngressRouteUdpSpecRoutesServices.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the namespace of the referenced Kubernetes Service. |
| <code><a href="#cdk8s-constructs.IngressRouteUdpSpecRoutesServices.property.nativeLb">nativeLb</a></code> | <code>boolean</code> | NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. |
| <code><a href="#cdk8s-constructs.IngressRouteUdpSpecRoutesServices.property.weight">weight</a></code> | <code>number</code> | Weight defines the weight used when balancing requests between multiple Kubernetes Service. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.IngressRouteUdpSpecRoutesServices.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the name of the referenced Kubernetes Service.

---

##### `port`<sup>Required</sup> <a name="port" id="cdk8s-constructs.IngressRouteUdpSpecRoutesServices.property.port"></a>

```typescript
public readonly port: IngressRouteUdpSpecRoutesServicesPort;
```

- *Type:* <a href="#cdk8s-constructs.IngressRouteUdpSpecRoutesServicesPort">IngressRouteUdpSpecRoutesServicesPort</a>

Port defines the port of a Kubernetes Service.

This can be a reference to a named port.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.IngressRouteUdpSpecRoutesServices.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the namespace of the referenced Kubernetes Service.

---

##### `nativeLb`<sup>Optional</sup> <a name="nativeLb" id="cdk8s-constructs.IngressRouteUdpSpecRoutesServices.property.nativeLb"></a>

```typescript
public readonly nativeLb: boolean;
```

- *Type:* boolean

NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.

The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="cdk8s-constructs.IngressRouteUdpSpecRoutesServices.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Weight defines the weight used when balancing requests between multiple Kubernetes Service.

---

### KustomizeProps <a name="KustomizeProps" id="cdk8s-constructs.KustomizeProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.KustomizeProps.Initializer"></a>

```typescript
import { KustomizeProps } from 'cdk8s-constructs'

const kustomizeProps: KustomizeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.KustomizeProps.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `url`<sup>Required</sup> <a name="url" id="cdk8s-constructs.KustomizeProps.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

### MediaArrAppProps <a name="MediaArrAppProps" id="cdk8s-constructs.MediaArrAppProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.MediaArrAppProps.Initializer"></a>

```typescript
import { MediaArrAppProps } from 'cdk8s-constructs'

const mediaArrAppProps: MediaArrAppProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MediaArrAppProps.property.config">config</a></code> | <code><a href="#cdk8s-constructs.ConfigVolumeOptions">ConfigVolumeOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrAppProps.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrAppProps.property.deployment">deployment</a></code> | <code><a href="#cdk8s-constructs.DeploymentOptions">DeploymentOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrAppProps.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrAppProps.property.metrics">metrics</a></code> | <code><a href="#cdk8s-constructs.MetricOptions">MetricOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrAppProps.property.probe">probe</a></code> | <code><a href="#cdk8s-constructs.ProbeOptions">ProbeOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrAppProps.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrAppProps.property.volumeMounts">volumeMounts</a></code> | <code>cdk8s-plus-minus.VolumeMount[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrAppProps.property.webPort">webPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrAppProps.property.app">app</a></code> | <code><a href="#cdk8s-constructs.ArrAppApplicationOption">ArrAppApplicationOption</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrAppProps.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MediaArrAppProps.property.storage">storage</a></code> | <code><a href="#cdk8s-constructs.ArrAppStorageOptions">ArrAppStorageOptions</a></code> | *No description.* |

---

##### `config`<sup>Required</sup> <a name="config" id="cdk8s-constructs.MediaArrAppProps.property.config"></a>

```typescript
public readonly config: ConfigVolumeOptions;
```

- *Type:* <a href="#cdk8s-constructs.ConfigVolumeOptions">ConfigVolumeOptions</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.MediaArrAppProps.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngressOptions;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a>

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="cdk8s-constructs.MediaArrAppProps.property.deployment"></a>

```typescript
public readonly deployment: DeploymentOptions;
```

- *Type:* <a href="#cdk8s-constructs.DeploymentOptions">DeploymentOptions</a>

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.MediaArrAppProps.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="cdk8s-constructs.MediaArrAppProps.property.metrics"></a>

```typescript
public readonly metrics: MetricOptions;
```

- *Type:* <a href="#cdk8s-constructs.MetricOptions">MetricOptions</a>

---

##### `probe`<sup>Optional</sup> <a name="probe" id="cdk8s-constructs.MediaArrAppProps.property.probe"></a>

```typescript
public readonly probe: ProbeOptions;
```

- *Type:* <a href="#cdk8s-constructs.ProbeOptions">ProbeOptions</a>

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="cdk8s-constructs.MediaArrAppProps.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="cdk8s-constructs.MediaArrAppProps.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: VolumeMount[];
```

- *Type:* cdk8s-plus-minus.VolumeMount[]

---

##### `webPort`<sup>Optional</sup> <a name="webPort" id="cdk8s-constructs.MediaArrAppProps.property.webPort"></a>

```typescript
public readonly webPort: number;
```

- *Type:* number

---

##### `app`<sup>Required</sup> <a name="app" id="cdk8s-constructs.MediaArrAppProps.property.app"></a>

```typescript
public readonly app: ArrAppApplicationOption;
```

- *Type:* <a href="#cdk8s-constructs.ArrAppApplicationOption">ArrAppApplicationOption</a>

---

##### `image`<sup>Required</sup> <a name="image" id="cdk8s-constructs.MediaArrAppProps.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `storage`<sup>Required</sup> <a name="storage" id="cdk8s-constructs.MediaArrAppProps.property.storage"></a>

```typescript
public readonly storage: ArrAppStorageOptions;
```

- *Type:* <a href="#cdk8s-constructs.ArrAppStorageOptions">ArrAppStorageOptions</a>

---

### MetricOptions <a name="MetricOptions" id="cdk8s-constructs.MetricOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.MetricOptions.Initializer"></a>

```typescript
import { MetricOptions } from 'cdk8s-constructs'

const metricOptions: MetricOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MetricOptions.property.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MetricOptions.property.enableAdditionalMetrics">enableAdditionalMetrics</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MetricOptions.property.enableUnknownQueueMetrics">enableUnknownQueueMetrics</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MetricOptions.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MetricOptions.property.prometheusRule">prometheusRule</a></code> | <code>boolean</code> | *No description.* |

---

##### `application`<sup>Required</sup> <a name="application" id="cdk8s-constructs.MetricOptions.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

---

##### `enableAdditionalMetrics`<sup>Optional</sup> <a name="enableAdditionalMetrics" id="cdk8s-constructs.MetricOptions.property.enableAdditionalMetrics"></a>

```typescript
public readonly enableAdditionalMetrics: boolean;
```

- *Type:* boolean

---

##### `enableUnknownQueueMetrics`<sup>Optional</sup> <a name="enableUnknownQueueMetrics" id="cdk8s-constructs.MetricOptions.property.enableUnknownQueueMetrics"></a>

```typescript
public readonly enableUnknownQueueMetrics: boolean;
```

- *Type:* boolean

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.MetricOptions.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `prometheusRule`<sup>Optional</sup> <a name="prometheusRule" id="cdk8s-constructs.MetricOptions.property.prometheusRule"></a>

```typescript
public readonly prometheusRule: boolean;
```

- *Type:* boolean

---

### MiddlewareProps <a name="MiddlewareProps" id="cdk8s-constructs.MiddlewareProps"></a>

Middleware is the CRD implementation of a Traefik Middleware.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/overview/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareProps.Initializer"></a>

```typescript
import { MiddlewareProps } from 'cdk8s-constructs'

const middlewareProps: MiddlewareProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareProps.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MiddlewareProps.property.spec">spec</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpec">MiddlewareSpec</a></code> | MiddlewareSpec defines the desired state of a Middleware. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.MiddlewareProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

---

##### `spec`<sup>Required</sup> <a name="spec" id="cdk8s-constructs.MiddlewareProps.property.spec"></a>

```typescript
public readonly spec: MiddlewareSpec;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpec">MiddlewareSpec</a>

MiddlewareSpec defines the desired state of a Middleware.

---

### MiddlewareSpec <a name="MiddlewareSpec" id="cdk8s-constructs.MiddlewareSpec"></a>

MiddlewareSpec defines the desired state of a Middleware.

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpec.Initializer"></a>

```typescript
import { MiddlewareSpec } from 'cdk8s-constructs'

const middlewareSpec: MiddlewareSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.addPrefix">addPrefix</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecAddPrefix">MiddlewareSpecAddPrefix</a></code> | AddPrefix holds the add prefix middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.basicAuth">basicAuth</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecBasicAuth">MiddlewareSpecBasicAuth</a></code> | BasicAuth holds the basic auth middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.buffering">buffering</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecBuffering">MiddlewareSpecBuffering</a></code> | Buffering holds the buffering middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.chain">chain</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecChain">MiddlewareSpecChain</a></code> | Chain holds the configuration of the chain middleware. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.circuitBreaker">circuitBreaker</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreaker">MiddlewareSpecCircuitBreaker</a></code> | CircuitBreaker holds the circuit breaker configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.compress">compress</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecCompress">MiddlewareSpecCompress</a></code> | Compress holds the compress middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.contentType">contentType</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecContentType">MiddlewareSpecContentType</a></code> | ContentType holds the content-type middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.digestAuth">digestAuth</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecDigestAuth">MiddlewareSpecDigestAuth</a></code> | DigestAuth holds the digest auth middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.errors">errors</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecErrors">MiddlewareSpecErrors</a></code> | ErrorPage holds the custom error middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.forwardAuth">forwardAuth</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecForwardAuth">MiddlewareSpecForwardAuth</a></code> | ForwardAuth holds the forward auth middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.headers">headers</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders">MiddlewareSpecHeaders</a></code> | Headers holds the headers middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.inFlightReq">inFlightReq</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecInFlightReq">MiddlewareSpecInFlightReq</a></code> | InFlightReq holds the in-flight request middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.ipWhiteList">ipWhiteList</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecIpWhiteList">MiddlewareSpecIpWhiteList</a></code> | IPWhiteList holds the IP whitelist middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.passTlsClientCert">passTlsClientCert</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCert">MiddlewareSpecPassTlsClientCert</a></code> | PassTLSClientCert holds the pass TLS client cert middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.plugin">plugin</a></code> | <code>{[ key: string ]: any}</code> | Plugin defines the middleware plugin configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.rateLimit">rateLimit</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimit">MiddlewareSpecRateLimit</a></code> | RateLimit holds the rate limit configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.redirectRegex">redirectRegex</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecRedirectRegex">MiddlewareSpecRedirectRegex</a></code> | RedirectRegex holds the redirect regex middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.redirectScheme">redirectScheme</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecRedirectScheme">MiddlewareSpecRedirectScheme</a></code> | RedirectScheme holds the redirect scheme middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.replacePath">replacePath</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecReplacePath">MiddlewareSpecReplacePath</a></code> | ReplacePath holds the replace path middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.replacePathRegex">replacePathRegex</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecReplacePathRegex">MiddlewareSpecReplacePathRegex</a></code> | ReplacePathRegex holds the replace path regex middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.retry">retry</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecRetry">MiddlewareSpecRetry</a></code> | Retry holds the retry middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.stripPrefix">stripPrefix</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecStripPrefix">MiddlewareSpecStripPrefix</a></code> | StripPrefix holds the strip prefix middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpec.property.stripPrefixRegex">stripPrefixRegex</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecStripPrefixRegex">MiddlewareSpecStripPrefixRegex</a></code> | StripPrefixRegex holds the strip prefix regex middleware configuration. |

---

##### `addPrefix`<sup>Optional</sup> <a name="addPrefix" id="cdk8s-constructs.MiddlewareSpec.property.addPrefix"></a>

```typescript
public readonly addPrefix: MiddlewareSpecAddPrefix;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecAddPrefix">MiddlewareSpecAddPrefix</a>

AddPrefix holds the add prefix middleware configuration.

This middleware updates the path of a request before forwarding it. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/addprefix/

---

##### `basicAuth`<sup>Optional</sup> <a name="basicAuth" id="cdk8s-constructs.MiddlewareSpec.property.basicAuth"></a>

```typescript
public readonly basicAuth: MiddlewareSpecBasicAuth;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecBasicAuth">MiddlewareSpecBasicAuth</a>

BasicAuth holds the basic auth middleware configuration.

This middleware restricts access to your services to known users. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/basicauth/

---

##### `buffering`<sup>Optional</sup> <a name="buffering" id="cdk8s-constructs.MiddlewareSpec.property.buffering"></a>

```typescript
public readonly buffering: MiddlewareSpecBuffering;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecBuffering">MiddlewareSpecBuffering</a>

Buffering holds the buffering middleware configuration.

This middleware retries or limits the size of requests that can be forwarded to backends. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/buffering/#maxrequestbodybytes

---

##### `chain`<sup>Optional</sup> <a name="chain" id="cdk8s-constructs.MiddlewareSpec.property.chain"></a>

```typescript
public readonly chain: MiddlewareSpecChain;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecChain">MiddlewareSpecChain</a>

Chain holds the configuration of the chain middleware.

This middleware enables to define reusable combinations of other pieces of middleware. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/chain/

---

##### `circuitBreaker`<sup>Optional</sup> <a name="circuitBreaker" id="cdk8s-constructs.MiddlewareSpec.property.circuitBreaker"></a>

```typescript
public readonly circuitBreaker: MiddlewareSpecCircuitBreaker;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecCircuitBreaker">MiddlewareSpecCircuitBreaker</a>

CircuitBreaker holds the circuit breaker configuration.

---

##### `compress`<sup>Optional</sup> <a name="compress" id="cdk8s-constructs.MiddlewareSpec.property.compress"></a>

```typescript
public readonly compress: MiddlewareSpecCompress;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecCompress">MiddlewareSpecCompress</a>

Compress holds the compress middleware configuration.

This middleware compresses responses before sending them to the client, using gzip compression. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/compress/

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="cdk8s-constructs.MiddlewareSpec.property.contentType"></a>

```typescript
public readonly contentType: MiddlewareSpecContentType;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecContentType">MiddlewareSpecContentType</a>

ContentType holds the content-type middleware configuration.

This middleware exists to enable the correct behavior until at least the default one can be changed in a future version.

---

##### `digestAuth`<sup>Optional</sup> <a name="digestAuth" id="cdk8s-constructs.MiddlewareSpec.property.digestAuth"></a>

```typescript
public readonly digestAuth: MiddlewareSpecDigestAuth;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecDigestAuth">MiddlewareSpecDigestAuth</a>

DigestAuth holds the digest auth middleware configuration.

This middleware restricts access to your services to known users. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/digestauth/

---

##### `errors`<sup>Optional</sup> <a name="errors" id="cdk8s-constructs.MiddlewareSpec.property.errors"></a>

```typescript
public readonly errors: MiddlewareSpecErrors;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecErrors">MiddlewareSpecErrors</a>

ErrorPage holds the custom error middleware configuration.

This middleware returns a custom page in lieu of the default, according to configured ranges of HTTP Status codes. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/errorpages/

---

##### `forwardAuth`<sup>Optional</sup> <a name="forwardAuth" id="cdk8s-constructs.MiddlewareSpec.property.forwardAuth"></a>

```typescript
public readonly forwardAuth: MiddlewareSpecForwardAuth;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecForwardAuth">MiddlewareSpecForwardAuth</a>

ForwardAuth holds the forward auth middleware configuration.

This middleware delegates the request authentication to a Service. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/forwardauth/

---

##### `headers`<sup>Optional</sup> <a name="headers" id="cdk8s-constructs.MiddlewareSpec.property.headers"></a>

```typescript
public readonly headers: MiddlewareSpecHeaders;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecHeaders">MiddlewareSpecHeaders</a>

Headers holds the headers middleware configuration.

This middleware manages the requests and responses headers. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/headers/#customrequestheaders

---

##### `inFlightReq`<sup>Optional</sup> <a name="inFlightReq" id="cdk8s-constructs.MiddlewareSpec.property.inFlightReq"></a>

```typescript
public readonly inFlightReq: MiddlewareSpecInFlightReq;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecInFlightReq">MiddlewareSpecInFlightReq</a>

InFlightReq holds the in-flight request middleware configuration.

This middleware limits the number of requests being processed and served concurrently. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/inflightreq/

---

##### `ipWhiteList`<sup>Optional</sup> <a name="ipWhiteList" id="cdk8s-constructs.MiddlewareSpec.property.ipWhiteList"></a>

```typescript
public readonly ipWhiteList: MiddlewareSpecIpWhiteList;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecIpWhiteList">MiddlewareSpecIpWhiteList</a>

IPWhiteList holds the IP whitelist middleware configuration.

This middleware accepts / refuses requests based on the client IP. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ipwhitelist/

---

##### `passTlsClientCert`<sup>Optional</sup> <a name="passTlsClientCert" id="cdk8s-constructs.MiddlewareSpec.property.passTlsClientCert"></a>

```typescript
public readonly passTlsClientCert: MiddlewareSpecPassTlsClientCert;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCert">MiddlewareSpecPassTlsClientCert</a>

PassTLSClientCert holds the pass TLS client cert middleware configuration.

This middleware adds the selected data from the passed client TLS certificate to a header. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/passtlsclientcert/

---

##### `plugin`<sup>Optional</sup> <a name="plugin" id="cdk8s-constructs.MiddlewareSpec.property.plugin"></a>

```typescript
public readonly plugin: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Plugin defines the middleware plugin configuration.

More info: https://doc.traefik.io/traefik/plugins/

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="cdk8s-constructs.MiddlewareSpec.property.rateLimit"></a>

```typescript
public readonly rateLimit: MiddlewareSpecRateLimit;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecRateLimit">MiddlewareSpecRateLimit</a>

RateLimit holds the rate limit configuration.

This middleware ensures that services will receive a fair amount of requests, and allows one to define what fair is. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ratelimit/

---

##### `redirectRegex`<sup>Optional</sup> <a name="redirectRegex" id="cdk8s-constructs.MiddlewareSpec.property.redirectRegex"></a>

```typescript
public readonly redirectRegex: MiddlewareSpecRedirectRegex;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecRedirectRegex">MiddlewareSpecRedirectRegex</a>

RedirectRegex holds the redirect regex middleware configuration.

This middleware redirects a request using regex matching and replacement. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/redirectregex/#regex

---

##### `redirectScheme`<sup>Optional</sup> <a name="redirectScheme" id="cdk8s-constructs.MiddlewareSpec.property.redirectScheme"></a>

```typescript
public readonly redirectScheme: MiddlewareSpecRedirectScheme;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecRedirectScheme">MiddlewareSpecRedirectScheme</a>

RedirectScheme holds the redirect scheme middleware configuration.

This middleware redirects requests from a scheme/port to another. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/redirectscheme/

---

##### `replacePath`<sup>Optional</sup> <a name="replacePath" id="cdk8s-constructs.MiddlewareSpec.property.replacePath"></a>

```typescript
public readonly replacePath: MiddlewareSpecReplacePath;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecReplacePath">MiddlewareSpecReplacePath</a>

ReplacePath holds the replace path middleware configuration.

This middleware replaces the path of the request URL and store the original path in an X-Replaced-Path header. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/replacepath/

---

##### `replacePathRegex`<sup>Optional</sup> <a name="replacePathRegex" id="cdk8s-constructs.MiddlewareSpec.property.replacePathRegex"></a>

```typescript
public readonly replacePathRegex: MiddlewareSpecReplacePathRegex;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecReplacePathRegex">MiddlewareSpecReplacePathRegex</a>

ReplacePathRegex holds the replace path regex middleware configuration.

This middleware replaces the path of a URL using regex matching and replacement. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/replacepathregex/

---

##### `retry`<sup>Optional</sup> <a name="retry" id="cdk8s-constructs.MiddlewareSpec.property.retry"></a>

```typescript
public readonly retry: MiddlewareSpecRetry;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecRetry">MiddlewareSpecRetry</a>

Retry holds the retry middleware configuration.

This middleware reissues requests a given number of times to a backend server if that server does not reply. As soon as the server answers, the middleware stops retrying, regardless of the response status. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/retry/

---

##### `stripPrefix`<sup>Optional</sup> <a name="stripPrefix" id="cdk8s-constructs.MiddlewareSpec.property.stripPrefix"></a>

```typescript
public readonly stripPrefix: MiddlewareSpecStripPrefix;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecStripPrefix">MiddlewareSpecStripPrefix</a>

StripPrefix holds the strip prefix middleware configuration.

This middleware removes the specified prefixes from the URL path. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/stripprefix/

---

##### `stripPrefixRegex`<sup>Optional</sup> <a name="stripPrefixRegex" id="cdk8s-constructs.MiddlewareSpec.property.stripPrefixRegex"></a>

```typescript
public readonly stripPrefixRegex: MiddlewareSpecStripPrefixRegex;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecStripPrefixRegex">MiddlewareSpecStripPrefixRegex</a>

StripPrefixRegex holds the strip prefix regex middleware configuration.

This middleware removes the matching prefixes from the URL path. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/stripprefixregex/

---

### MiddlewareSpecAddPrefix <a name="MiddlewareSpecAddPrefix" id="cdk8s-constructs.MiddlewareSpecAddPrefix"></a>

AddPrefix holds the add prefix middleware configuration.

This middleware updates the path of a request before forwarding it. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/addprefix/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecAddPrefix.Initializer"></a>

```typescript
import { MiddlewareSpecAddPrefix } from 'cdk8s-constructs'

const middlewareSpecAddPrefix: MiddlewareSpecAddPrefix = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecAddPrefix.property.prefix">prefix</a></code> | <code>string</code> | Prefix is the string to add before the current path in the requested URL. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="cdk8s-constructs.MiddlewareSpecAddPrefix.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Prefix is the string to add before the current path in the requested URL.

It should include a leading slash (/).

---

### MiddlewareSpecBasicAuth <a name="MiddlewareSpecBasicAuth" id="cdk8s-constructs.MiddlewareSpecBasicAuth"></a>

BasicAuth holds the basic auth middleware configuration.

This middleware restricts access to your services to known users. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/basicauth/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecBasicAuth.Initializer"></a>

```typescript
import { MiddlewareSpecBasicAuth } from 'cdk8s-constructs'

const middlewareSpecBasicAuth: MiddlewareSpecBasicAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecBasicAuth.property.headerField">headerField</a></code> | <code>string</code> | HeaderField defines a header field to store the authenticated user. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecBasicAuth.property.realm">realm</a></code> | <code>string</code> | Realm allows the protected resources on a server to be partitioned into a set of protection spaces, each with its own authentication scheme. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecBasicAuth.property.removeHeader">removeHeader</a></code> | <code>boolean</code> | RemoveHeader sets the removeHeader option to true to remove the authorization header before forwarding the request to your service. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecBasicAuth.property.secret">secret</a></code> | <code>string</code> | Secret is the name of the referenced Kubernetes Secret containing user credentials. |

---

##### `headerField`<sup>Optional</sup> <a name="headerField" id="cdk8s-constructs.MiddlewareSpecBasicAuth.property.headerField"></a>

```typescript
public readonly headerField: string;
```

- *Type:* string

HeaderField defines a header field to store the authenticated user.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/basicauth/#headerfield

---

##### `realm`<sup>Optional</sup> <a name="realm" id="cdk8s-constructs.MiddlewareSpecBasicAuth.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

Realm allows the protected resources on a server to be partitioned into a set of protection spaces, each with its own authentication scheme.

Default: traefik.

---

##### `removeHeader`<sup>Optional</sup> <a name="removeHeader" id="cdk8s-constructs.MiddlewareSpecBasicAuth.property.removeHeader"></a>

```typescript
public readonly removeHeader: boolean;
```

- *Type:* boolean

RemoveHeader sets the removeHeader option to true to remove the authorization header before forwarding the request to your service.

Default: false.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="cdk8s-constructs.MiddlewareSpecBasicAuth.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Secret is the name of the referenced Kubernetes Secret containing user credentials.

---

### MiddlewareSpecBuffering <a name="MiddlewareSpecBuffering" id="cdk8s-constructs.MiddlewareSpecBuffering"></a>

Buffering holds the buffering middleware configuration.

This middleware retries or limits the size of requests that can be forwarded to backends. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/buffering/#maxrequestbodybytes

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecBuffering.Initializer"></a>

```typescript
import { MiddlewareSpecBuffering } from 'cdk8s-constructs'

const middlewareSpecBuffering: MiddlewareSpecBuffering = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecBuffering.property.maxRequestBodyBytes">maxRequestBodyBytes</a></code> | <code>number</code> | MaxRequestBodyBytes defines the maximum allowed body size for the request (in bytes). |
| <code><a href="#cdk8s-constructs.MiddlewareSpecBuffering.property.maxResponseBodyBytes">maxResponseBodyBytes</a></code> | <code>number</code> | MaxResponseBodyBytes defines the maximum allowed response size from the service (in bytes). |
| <code><a href="#cdk8s-constructs.MiddlewareSpecBuffering.property.memRequestBodyBytes">memRequestBodyBytes</a></code> | <code>number</code> | MemRequestBodyBytes defines the threshold (in bytes) from which the request will be buffered on disk instead of in memory. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecBuffering.property.memResponseBodyBytes">memResponseBodyBytes</a></code> | <code>number</code> | MemResponseBodyBytes defines the threshold (in bytes) from which the response will be buffered on disk instead of in memory. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecBuffering.property.retryExpression">retryExpression</a></code> | <code>string</code> | RetryExpression defines the retry conditions. |

---

##### `maxRequestBodyBytes`<sup>Optional</sup> <a name="maxRequestBodyBytes" id="cdk8s-constructs.MiddlewareSpecBuffering.property.maxRequestBodyBytes"></a>

```typescript
public readonly maxRequestBodyBytes: number;
```

- *Type:* number

MaxRequestBodyBytes defines the maximum allowed body size for the request (in bytes).

If the request exceeds the allowed size, it is not forwarded to the service, and the client gets a 413 (Request Entity Too Large) response. Default: 0 (no maximum).

---

##### `maxResponseBodyBytes`<sup>Optional</sup> <a name="maxResponseBodyBytes" id="cdk8s-constructs.MiddlewareSpecBuffering.property.maxResponseBodyBytes"></a>

```typescript
public readonly maxResponseBodyBytes: number;
```

- *Type:* number

MaxResponseBodyBytes defines the maximum allowed response size from the service (in bytes).

If the response exceeds the allowed size, it is not forwarded to the client. The client gets a 500 (Internal Server Error) response instead. Default: 0 (no maximum).

---

##### `memRequestBodyBytes`<sup>Optional</sup> <a name="memRequestBodyBytes" id="cdk8s-constructs.MiddlewareSpecBuffering.property.memRequestBodyBytes"></a>

```typescript
public readonly memRequestBodyBytes: number;
```

- *Type:* number

MemRequestBodyBytes defines the threshold (in bytes) from which the request will be buffered on disk instead of in memory.

Default: 1048576 (1Mi).

---

##### `memResponseBodyBytes`<sup>Optional</sup> <a name="memResponseBodyBytes" id="cdk8s-constructs.MiddlewareSpecBuffering.property.memResponseBodyBytes"></a>

```typescript
public readonly memResponseBodyBytes: number;
```

- *Type:* number

MemResponseBodyBytes defines the threshold (in bytes) from which the response will be buffered on disk instead of in memory.

Default: 1048576 (1Mi).

---

##### `retryExpression`<sup>Optional</sup> <a name="retryExpression" id="cdk8s-constructs.MiddlewareSpecBuffering.property.retryExpression"></a>

```typescript
public readonly retryExpression: string;
```

- *Type:* string

RetryExpression defines the retry conditions.

It is a logical combination of functions with operators AND (&&) and OR (||). More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/buffering/#retryexpression

---

### MiddlewareSpecChain <a name="MiddlewareSpecChain" id="cdk8s-constructs.MiddlewareSpecChain"></a>

Chain holds the configuration of the chain middleware.

This middleware enables to define reusable combinations of other pieces of middleware. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/chain/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecChain.Initializer"></a>

```typescript
import { MiddlewareSpecChain } from 'cdk8s-constructs'

const middlewareSpecChain: MiddlewareSpecChain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecChain.property.middlewares">middlewares</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecChainMiddlewares">MiddlewareSpecChainMiddlewares</a>[]</code> | Middlewares is the list of MiddlewareRef which composes the chain. |

---

##### `middlewares`<sup>Optional</sup> <a name="middlewares" id="cdk8s-constructs.MiddlewareSpecChain.property.middlewares"></a>

```typescript
public readonly middlewares: MiddlewareSpecChainMiddlewares[];
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecChainMiddlewares">MiddlewareSpecChainMiddlewares</a>[]

Middlewares is the list of MiddlewareRef which composes the chain.

---

### MiddlewareSpecChainMiddlewares <a name="MiddlewareSpecChainMiddlewares" id="cdk8s-constructs.MiddlewareSpecChainMiddlewares"></a>

MiddlewareRef is a reference to a Middleware resource.

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecChainMiddlewares.Initializer"></a>

```typescript
import { MiddlewareSpecChainMiddlewares } from 'cdk8s-constructs'

const middlewareSpecChainMiddlewares: MiddlewareSpecChainMiddlewares = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecChainMiddlewares.property.name">name</a></code> | <code>string</code> | Name defines the name of the referenced Middleware resource. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecChainMiddlewares.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the namespace of the referenced Middleware resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.MiddlewareSpecChainMiddlewares.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the name of the referenced Middleware resource.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.MiddlewareSpecChainMiddlewares.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the namespace of the referenced Middleware resource.

---

### MiddlewareSpecCircuitBreaker <a name="MiddlewareSpecCircuitBreaker" id="cdk8s-constructs.MiddlewareSpecCircuitBreaker"></a>

CircuitBreaker holds the circuit breaker configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecCircuitBreaker.Initializer"></a>

```typescript
import { MiddlewareSpecCircuitBreaker } from 'cdk8s-constructs'

const middlewareSpecCircuitBreaker: MiddlewareSpecCircuitBreaker = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreaker.property.checkPeriod">checkPeriod</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerCheckPeriod">MiddlewareSpecCircuitBreakerCheckPeriod</a></code> | CheckPeriod is the interval between successive checks of the circuit breaker condition (when in standby state). |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreaker.property.expression">expression</a></code> | <code>string</code> | Expression is the condition that triggers the tripped state. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreaker.property.fallbackDuration">fallbackDuration</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerFallbackDuration">MiddlewareSpecCircuitBreakerFallbackDuration</a></code> | FallbackDuration is the duration for which the circuit breaker will wait before trying to recover (from a tripped state). |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreaker.property.recoveryDuration">recoveryDuration</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerRecoveryDuration">MiddlewareSpecCircuitBreakerRecoveryDuration</a></code> | RecoveryDuration is the duration for which the circuit breaker will try to recover (as soon as it is in recovering state). |

---

##### `checkPeriod`<sup>Optional</sup> <a name="checkPeriod" id="cdk8s-constructs.MiddlewareSpecCircuitBreaker.property.checkPeriod"></a>

```typescript
public readonly checkPeriod: MiddlewareSpecCircuitBreakerCheckPeriod;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerCheckPeriod">MiddlewareSpecCircuitBreakerCheckPeriod</a>

CheckPeriod is the interval between successive checks of the circuit breaker condition (when in standby state).

---

##### `expression`<sup>Optional</sup> <a name="expression" id="cdk8s-constructs.MiddlewareSpecCircuitBreaker.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Expression is the condition that triggers the tripped state.

---

##### `fallbackDuration`<sup>Optional</sup> <a name="fallbackDuration" id="cdk8s-constructs.MiddlewareSpecCircuitBreaker.property.fallbackDuration"></a>

```typescript
public readonly fallbackDuration: MiddlewareSpecCircuitBreakerFallbackDuration;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerFallbackDuration">MiddlewareSpecCircuitBreakerFallbackDuration</a>

FallbackDuration is the duration for which the circuit breaker will wait before trying to recover (from a tripped state).

---

##### `recoveryDuration`<sup>Optional</sup> <a name="recoveryDuration" id="cdk8s-constructs.MiddlewareSpecCircuitBreaker.property.recoveryDuration"></a>

```typescript
public readonly recoveryDuration: MiddlewareSpecCircuitBreakerRecoveryDuration;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerRecoveryDuration">MiddlewareSpecCircuitBreakerRecoveryDuration</a>

RecoveryDuration is the duration for which the circuit breaker will try to recover (as soon as it is in recovering state).

---

### MiddlewareSpecCompress <a name="MiddlewareSpecCompress" id="cdk8s-constructs.MiddlewareSpecCompress"></a>

Compress holds the compress middleware configuration.

This middleware compresses responses before sending them to the client, using gzip compression. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/compress/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecCompress.Initializer"></a>

```typescript
import { MiddlewareSpecCompress } from 'cdk8s-constructs'

const middlewareSpecCompress: MiddlewareSpecCompress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCompress.property.excludedContentTypes">excludedContentTypes</a></code> | <code>string[]</code> | ExcludedContentTypes defines the list of content types to compare the Content-Type header of the incoming requests and responses before compressing. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCompress.property.minResponseBodyBytes">minResponseBodyBytes</a></code> | <code>number</code> | MinResponseBodyBytes defines the minimum amount of bytes a response body must have to be compressed. |

---

##### `excludedContentTypes`<sup>Optional</sup> <a name="excludedContentTypes" id="cdk8s-constructs.MiddlewareSpecCompress.property.excludedContentTypes"></a>

```typescript
public readonly excludedContentTypes: string[];
```

- *Type:* string[]

ExcludedContentTypes defines the list of content types to compare the Content-Type header of the incoming requests and responses before compressing.

---

##### `minResponseBodyBytes`<sup>Optional</sup> <a name="minResponseBodyBytes" id="cdk8s-constructs.MiddlewareSpecCompress.property.minResponseBodyBytes"></a>

```typescript
public readonly minResponseBodyBytes: number;
```

- *Type:* number

MinResponseBodyBytes defines the minimum amount of bytes a response body must have to be compressed.

Default: 1024.

---

### MiddlewareSpecContentType <a name="MiddlewareSpecContentType" id="cdk8s-constructs.MiddlewareSpecContentType"></a>

ContentType holds the content-type middleware configuration.

This middleware exists to enable the correct behavior until at least the default one can be changed in a future version.

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecContentType.Initializer"></a>

```typescript
import { MiddlewareSpecContentType } from 'cdk8s-constructs'

const middlewareSpecContentType: MiddlewareSpecContentType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecContentType.property.autoDetect">autoDetect</a></code> | <code>boolean</code> | AutoDetect specifies whether to let the `Content-Type` header, if it has not been set by the backend, be automatically set to a value derived from the contents of the response. |

---

##### `autoDetect`<sup>Optional</sup> <a name="autoDetect" id="cdk8s-constructs.MiddlewareSpecContentType.property.autoDetect"></a>

```typescript
public readonly autoDetect: boolean;
```

- *Type:* boolean

AutoDetect specifies whether to let the `Content-Type` header, if it has not been set by the backend, be automatically set to a value derived from the contents of the response.

As a proxy, the default behavior should be to leave the header alone, regardless of what the backend did with it. However, the historic default was to always auto-detect and set the header if it was nil, and it is going to be kept that way in order to support users currently relying on it.

---

### MiddlewareSpecDigestAuth <a name="MiddlewareSpecDigestAuth" id="cdk8s-constructs.MiddlewareSpecDigestAuth"></a>

DigestAuth holds the digest auth middleware configuration.

This middleware restricts access to your services to known users. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/digestauth/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecDigestAuth.Initializer"></a>

```typescript
import { MiddlewareSpecDigestAuth } from 'cdk8s-constructs'

const middlewareSpecDigestAuth: MiddlewareSpecDigestAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecDigestAuth.property.headerField">headerField</a></code> | <code>string</code> | HeaderField defines a header field to store the authenticated user. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecDigestAuth.property.realm">realm</a></code> | <code>string</code> | Realm allows the protected resources on a server to be partitioned into a set of protection spaces, each with its own authentication scheme. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecDigestAuth.property.removeHeader">removeHeader</a></code> | <code>boolean</code> | RemoveHeader defines whether to remove the authorization header before forwarding the request to the backend. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecDigestAuth.property.secret">secret</a></code> | <code>string</code> | Secret is the name of the referenced Kubernetes Secret containing user credentials. |

---

##### `headerField`<sup>Optional</sup> <a name="headerField" id="cdk8s-constructs.MiddlewareSpecDigestAuth.property.headerField"></a>

```typescript
public readonly headerField: string;
```

- *Type:* string

HeaderField defines a header field to store the authenticated user.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/basicauth/#headerfield

---

##### `realm`<sup>Optional</sup> <a name="realm" id="cdk8s-constructs.MiddlewareSpecDigestAuth.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

Realm allows the protected resources on a server to be partitioned into a set of protection spaces, each with its own authentication scheme.

Default: traefik.

---

##### `removeHeader`<sup>Optional</sup> <a name="removeHeader" id="cdk8s-constructs.MiddlewareSpecDigestAuth.property.removeHeader"></a>

```typescript
public readonly removeHeader: boolean;
```

- *Type:* boolean

RemoveHeader defines whether to remove the authorization header before forwarding the request to the backend.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="cdk8s-constructs.MiddlewareSpecDigestAuth.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Secret is the name of the referenced Kubernetes Secret containing user credentials.

---

### MiddlewareSpecErrors <a name="MiddlewareSpecErrors" id="cdk8s-constructs.MiddlewareSpecErrors"></a>

ErrorPage holds the custom error middleware configuration.

This middleware returns a custom page in lieu of the default, according to configured ranges of HTTP Status codes. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/errorpages/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecErrors.Initializer"></a>

```typescript
import { MiddlewareSpecErrors } from 'cdk8s-constructs'

const middlewareSpecErrors: MiddlewareSpecErrors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrors.property.query">query</a></code> | <code>string</code> | Query defines the URL for the error page (hosted by service). |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrors.property.service">service</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsService">MiddlewareSpecErrorsService</a></code> | Service defines the reference to a Kubernetes Service that will serve the error page. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrors.property.status">status</a></code> | <code>string[]</code> | Status defines which status or range of statuses should result in an error page. |

---

##### `query`<sup>Optional</sup> <a name="query" id="cdk8s-constructs.MiddlewareSpecErrors.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Query defines the URL for the error page (hosted by service).

The {status} variable can be used in order to insert the status code in the URL.

---

##### `service`<sup>Optional</sup> <a name="service" id="cdk8s-constructs.MiddlewareSpecErrors.property.service"></a>

```typescript
public readonly service: MiddlewareSpecErrorsService;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecErrorsService">MiddlewareSpecErrorsService</a>

Service defines the reference to a Kubernetes Service that will serve the error page.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/errorpages/#service

---

##### `status`<sup>Optional</sup> <a name="status" id="cdk8s-constructs.MiddlewareSpecErrors.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

Status defines which status or range of statuses should result in an error page.

It can be either a status code as a number (500), as multiple comma-separated numbers (500,502), as ranges by separating two codes with a dash (500-599), or a combination of the two (404,418,500-599).

---

### MiddlewareSpecErrorsService <a name="MiddlewareSpecErrorsService" id="cdk8s-constructs.MiddlewareSpecErrorsService"></a>

Service defines the reference to a Kubernetes Service that will serve the error page.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/errorpages/#service

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecErrorsService.Initializer"></a>

```typescript
import { MiddlewareSpecErrorsService } from 'cdk8s-constructs'

const middlewareSpecErrorsService: MiddlewareSpecErrorsService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsService.property.name">name</a></code> | <code>string</code> | Name defines the name of the referenced Kubernetes Service or TraefikService. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsService.property.kind">kind</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceKind">MiddlewareSpecErrorsServiceKind</a></code> | Kind defines the kind of the Service. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsService.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the namespace of the referenced Kubernetes Service or TraefikService. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsService.property.nativeLb">nativeLb</a></code> | <code>boolean</code> | NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsService.property.passHostHeader">passHostHeader</a></code> | <code>boolean</code> | PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsService.property.port">port</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServicePort">MiddlewareSpecErrorsServicePort</a></code> | Port defines the port of a Kubernetes Service. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsService.property.responseForwarding">responseForwarding</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceResponseForwarding">MiddlewareSpecErrorsServiceResponseForwarding</a></code> | ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsService.property.scheme">scheme</a></code> | <code>string</code> | Scheme defines the scheme to use for the request to the upstream Kubernetes Service. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsService.property.serversTransport">serversTransport</a></code> | <code>string</code> | ServersTransport defines the name of ServersTransport resource to use. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsService.property.sticky">sticky</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceSticky">MiddlewareSpecErrorsServiceSticky</a></code> | Sticky defines the sticky sessions configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsService.property.strategy">strategy</a></code> | <code>string</code> | Strategy defines the load balancing strategy between the servers. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsService.property.weight">weight</a></code> | <code>number</code> | Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin). |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.MiddlewareSpecErrorsService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the name of the referenced Kubernetes Service or TraefikService.

The differentiation between the two is specified in the Kind field.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="cdk8s-constructs.MiddlewareSpecErrorsService.property.kind"></a>

```typescript
public readonly kind: MiddlewareSpecErrorsServiceKind;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceKind">MiddlewareSpecErrorsServiceKind</a>

Kind defines the kind of the Service.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.MiddlewareSpecErrorsService.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.

---

##### `nativeLb`<sup>Optional</sup> <a name="nativeLb" id="cdk8s-constructs.MiddlewareSpecErrorsService.property.nativeLb"></a>

```typescript
public readonly nativeLb: boolean;
```

- *Type:* boolean

NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.

The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.

---

##### `passHostHeader`<sup>Optional</sup> <a name="passHostHeader" id="cdk8s-constructs.MiddlewareSpecErrorsService.property.passHostHeader"></a>

```typescript
public readonly passHostHeader: boolean;
```

- *Type:* boolean

PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.

By default, passHostHeader is true.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk8s-constructs.MiddlewareSpecErrorsService.property.port"></a>

```typescript
public readonly port: MiddlewareSpecErrorsServicePort;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecErrorsServicePort">MiddlewareSpecErrorsServicePort</a>

Port defines the port of a Kubernetes Service.

This can be a reference to a named port.

---

##### `responseForwarding`<sup>Optional</sup> <a name="responseForwarding" id="cdk8s-constructs.MiddlewareSpecErrorsService.property.responseForwarding"></a>

```typescript
public readonly responseForwarding: MiddlewareSpecErrorsServiceResponseForwarding;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceResponseForwarding">MiddlewareSpecErrorsServiceResponseForwarding</a>

ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="cdk8s-constructs.MiddlewareSpecErrorsService.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Scheme defines the scheme to use for the request to the upstream Kubernetes Service.

It defaults to https when Kubernetes Service port is 443, http otherwise.

---

##### `serversTransport`<sup>Optional</sup> <a name="serversTransport" id="cdk8s-constructs.MiddlewareSpecErrorsService.property.serversTransport"></a>

```typescript
public readonly serversTransport: string;
```

- *Type:* string

ServersTransport defines the name of ServersTransport resource to use.

It allows to configure the transport between Traefik and your servers. Can only be used on a Kubernetes Service.

---

##### `sticky`<sup>Optional</sup> <a name="sticky" id="cdk8s-constructs.MiddlewareSpecErrorsService.property.sticky"></a>

```typescript
public readonly sticky: MiddlewareSpecErrorsServiceSticky;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceSticky">MiddlewareSpecErrorsServiceSticky</a>

Sticky defines the sticky sessions configuration.

More info: https://doc.traefik.io/traefik/v2.10/routing/services/#sticky-sessions

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="cdk8s-constructs.MiddlewareSpecErrorsService.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

Strategy defines the load balancing strategy between the servers.

RoundRobin is the only supported value at the moment.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="cdk8s-constructs.MiddlewareSpecErrorsService.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin).

---

### MiddlewareSpecErrorsServiceResponseForwarding <a name="MiddlewareSpecErrorsServiceResponseForwarding" id="cdk8s-constructs.MiddlewareSpecErrorsServiceResponseForwarding"></a>

ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecErrorsServiceResponseForwarding.Initializer"></a>

```typescript
import { MiddlewareSpecErrorsServiceResponseForwarding } from 'cdk8s-constructs'

const middlewareSpecErrorsServiceResponseForwarding: MiddlewareSpecErrorsServiceResponseForwarding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceResponseForwarding.property.flushInterval">flushInterval</a></code> | <code>string</code> | FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body. |

---

##### `flushInterval`<sup>Optional</sup> <a name="flushInterval" id="cdk8s-constructs.MiddlewareSpecErrorsServiceResponseForwarding.property.flushInterval"></a>

```typescript
public readonly flushInterval: string;
```

- *Type:* string

FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.

A negative value means to flush immediately after each write to the client. This configuration is ignored when ReverseProxy recognizes a response as a streaming response; for such responses, writes are flushed to the client immediately. Default: 100ms

---

### MiddlewareSpecErrorsServiceSticky <a name="MiddlewareSpecErrorsServiceSticky" id="cdk8s-constructs.MiddlewareSpecErrorsServiceSticky"></a>

Sticky defines the sticky sessions configuration.

More info: https://doc.traefik.io/traefik/v2.10/routing/services/#sticky-sessions

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecErrorsServiceSticky.Initializer"></a>

```typescript
import { MiddlewareSpecErrorsServiceSticky } from 'cdk8s-constructs'

const middlewareSpecErrorsServiceSticky: MiddlewareSpecErrorsServiceSticky = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceSticky.property.cookie">cookie</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceStickyCookie">MiddlewareSpecErrorsServiceStickyCookie</a></code> | Cookie defines the sticky cookie configuration. |

---

##### `cookie`<sup>Optional</sup> <a name="cookie" id="cdk8s-constructs.MiddlewareSpecErrorsServiceSticky.property.cookie"></a>

```typescript
public readonly cookie: MiddlewareSpecErrorsServiceStickyCookie;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceStickyCookie">MiddlewareSpecErrorsServiceStickyCookie</a>

Cookie defines the sticky cookie configuration.

---

### MiddlewareSpecErrorsServiceStickyCookie <a name="MiddlewareSpecErrorsServiceStickyCookie" id="cdk8s-constructs.MiddlewareSpecErrorsServiceStickyCookie"></a>

Cookie defines the sticky cookie configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecErrorsServiceStickyCookie.Initializer"></a>

```typescript
import { MiddlewareSpecErrorsServiceStickyCookie } from 'cdk8s-constructs'

const middlewareSpecErrorsServiceStickyCookie: MiddlewareSpecErrorsServiceStickyCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceStickyCookie.property.httpOnly">httpOnly</a></code> | <code>boolean</code> | HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceStickyCookie.property.name">name</a></code> | <code>string</code> | Name defines the Cookie name. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceStickyCookie.property.sameSite">sameSite</a></code> | <code>string</code> | SameSite defines the same site policy. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceStickyCookie.property.secure">secure</a></code> | <code>boolean</code> | Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS). |

---

##### `httpOnly`<sup>Optional</sup> <a name="httpOnly" id="cdk8s-constructs.MiddlewareSpecErrorsServiceStickyCookie.property.httpOnly"></a>

```typescript
public readonly httpOnly: boolean;
```

- *Type:* boolean

HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s-constructs.MiddlewareSpecErrorsServiceStickyCookie.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the Cookie name.

---

##### `sameSite`<sup>Optional</sup> <a name="sameSite" id="cdk8s-constructs.MiddlewareSpecErrorsServiceStickyCookie.property.sameSite"></a>

```typescript
public readonly sameSite: string;
```

- *Type:* string

SameSite defines the same site policy.

More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite

---

##### `secure`<sup>Optional</sup> <a name="secure" id="cdk8s-constructs.MiddlewareSpecErrorsServiceStickyCookie.property.secure"></a>

```typescript
public readonly secure: boolean;
```

- *Type:* boolean

Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).

---

### MiddlewareSpecForwardAuth <a name="MiddlewareSpecForwardAuth" id="cdk8s-constructs.MiddlewareSpecForwardAuth"></a>

ForwardAuth holds the forward auth middleware configuration.

This middleware delegates the request authentication to a Service. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/forwardauth/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecForwardAuth.Initializer"></a>

```typescript
import { MiddlewareSpecForwardAuth } from 'cdk8s-constructs'

const middlewareSpecForwardAuth: MiddlewareSpecForwardAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecForwardAuth.property.address">address</a></code> | <code>string</code> | Address defines the authentication server address. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecForwardAuth.property.authRequestHeaders">authRequestHeaders</a></code> | <code>string[]</code> | AuthRequestHeaders defines the list of the headers to copy from the request to the authentication server. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecForwardAuth.property.authResponseHeaders">authResponseHeaders</a></code> | <code>string[]</code> | AuthResponseHeaders defines the list of headers to copy from the authentication server response and set on forwarded request, replacing any existing conflicting headers. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecForwardAuth.property.authResponseHeadersRegex">authResponseHeadersRegex</a></code> | <code>string</code> | AuthResponseHeadersRegex defines the regex to match headers to copy from the authentication server response and set on forwarded request, after stripping all headers that match the regex. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecForwardAuth.property.tls">tls</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecForwardAuthTls">MiddlewareSpecForwardAuthTls</a></code> | TLS defines the configuration used to secure the connection to the authentication server. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecForwardAuth.property.trustForwardHeader">trustForwardHeader</a></code> | <code>boolean</code> | TrustForwardHeader defines whether to trust (ie: forward) all X-Forwarded-* headers. |

---

##### `address`<sup>Optional</sup> <a name="address" id="cdk8s-constructs.MiddlewareSpecForwardAuth.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Address defines the authentication server address.

---

##### `authRequestHeaders`<sup>Optional</sup> <a name="authRequestHeaders" id="cdk8s-constructs.MiddlewareSpecForwardAuth.property.authRequestHeaders"></a>

```typescript
public readonly authRequestHeaders: string[];
```

- *Type:* string[]

AuthRequestHeaders defines the list of the headers to copy from the request to the authentication server.

If not set or empty then all request headers are passed.

---

##### `authResponseHeaders`<sup>Optional</sup> <a name="authResponseHeaders" id="cdk8s-constructs.MiddlewareSpecForwardAuth.property.authResponseHeaders"></a>

```typescript
public readonly authResponseHeaders: string[];
```

- *Type:* string[]

AuthResponseHeaders defines the list of headers to copy from the authentication server response and set on forwarded request, replacing any existing conflicting headers.

---

##### `authResponseHeadersRegex`<sup>Optional</sup> <a name="authResponseHeadersRegex" id="cdk8s-constructs.MiddlewareSpecForwardAuth.property.authResponseHeadersRegex"></a>

```typescript
public readonly authResponseHeadersRegex: string;
```

- *Type:* string

AuthResponseHeadersRegex defines the regex to match headers to copy from the authentication server response and set on forwarded request, after stripping all headers that match the regex.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/forwardauth/#authresponseheadersregex

---

##### `tls`<sup>Optional</sup> <a name="tls" id="cdk8s-constructs.MiddlewareSpecForwardAuth.property.tls"></a>

```typescript
public readonly tls: MiddlewareSpecForwardAuthTls;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecForwardAuthTls">MiddlewareSpecForwardAuthTls</a>

TLS defines the configuration used to secure the connection to the authentication server.

---

##### `trustForwardHeader`<sup>Optional</sup> <a name="trustForwardHeader" id="cdk8s-constructs.MiddlewareSpecForwardAuth.property.trustForwardHeader"></a>

```typescript
public readonly trustForwardHeader: boolean;
```

- *Type:* boolean

TrustForwardHeader defines whether to trust (ie: forward) all X-Forwarded-* headers.

---

### MiddlewareSpecForwardAuthTls <a name="MiddlewareSpecForwardAuthTls" id="cdk8s-constructs.MiddlewareSpecForwardAuthTls"></a>

TLS defines the configuration used to secure the connection to the authentication server.

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecForwardAuthTls.Initializer"></a>

```typescript
import { MiddlewareSpecForwardAuthTls } from 'cdk8s-constructs'

const middlewareSpecForwardAuthTls: MiddlewareSpecForwardAuthTls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecForwardAuthTls.property.caOptional">caOptional</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MiddlewareSpecForwardAuthTls.property.caSecret">caSecret</a></code> | <code>string</code> | CASecret is the name of the referenced Kubernetes Secret containing the CA to validate the server certificate. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecForwardAuthTls.property.certSecret">certSecret</a></code> | <code>string</code> | CertSecret is the name of the referenced Kubernetes Secret containing the client certificate. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecForwardAuthTls.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean</code> | InsecureSkipVerify defines whether the server certificates should be validated. |

---

##### `caOptional`<sup>Optional</sup> <a name="caOptional" id="cdk8s-constructs.MiddlewareSpecForwardAuthTls.property.caOptional"></a>

```typescript
public readonly caOptional: boolean;
```

- *Type:* boolean

---

##### `caSecret`<sup>Optional</sup> <a name="caSecret" id="cdk8s-constructs.MiddlewareSpecForwardAuthTls.property.caSecret"></a>

```typescript
public readonly caSecret: string;
```

- *Type:* string

CASecret is the name of the referenced Kubernetes Secret containing the CA to validate the server certificate.

The CA certificate is extracted from key `tls.ca` or `ca.crt`.

---

##### `certSecret`<sup>Optional</sup> <a name="certSecret" id="cdk8s-constructs.MiddlewareSpecForwardAuthTls.property.certSecret"></a>

```typescript
public readonly certSecret: string;
```

- *Type:* string

CertSecret is the name of the referenced Kubernetes Secret containing the client certificate.

The client certificate is extracted from the keys `tls.crt` and `tls.key`.

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="cdk8s-constructs.MiddlewareSpecForwardAuthTls.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean;
```

- *Type:* boolean

InsecureSkipVerify defines whether the server certificates should be validated.

---

### MiddlewareSpecHeaders <a name="MiddlewareSpecHeaders" id="cdk8s-constructs.MiddlewareSpecHeaders"></a>

Headers holds the headers middleware configuration.

This middleware manages the requests and responses headers. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/headers/#customrequestheaders

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecHeaders.Initializer"></a>

```typescript
import { MiddlewareSpecHeaders } from 'cdk8s-constructs'

const middlewareSpecHeaders: MiddlewareSpecHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.accessControlAllowCredentials">accessControlAllowCredentials</a></code> | <code>boolean</code> | AccessControlAllowCredentials defines whether the request can include user credentials. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.accessControlAllowHeaders">accessControlAllowHeaders</a></code> | <code>string[]</code> | AccessControlAllowHeaders defines the Access-Control-Request-Headers values sent in preflight response. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.accessControlAllowMethods">accessControlAllowMethods</a></code> | <code>string[]</code> | AccessControlAllowMethods defines the Access-Control-Request-Method values sent in preflight response. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.accessControlAllowOriginList">accessControlAllowOriginList</a></code> | <code>string[]</code> | AccessControlAllowOriginList is a list of allowable origins. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.accessControlAllowOriginListRegex">accessControlAllowOriginListRegex</a></code> | <code>string[]</code> | AccessControlAllowOriginListRegex is a list of allowable origins written following the Regular Expression syntax (https://golang.org/pkg/regexp/). |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.accessControlExposeHeaders">accessControlExposeHeaders</a></code> | <code>string[]</code> | AccessControlExposeHeaders defines the Access-Control-Expose-Headers values sent in preflight response. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.accessControlMaxAge">accessControlMaxAge</a></code> | <code>number</code> | AccessControlMaxAge defines the time that a preflight request may be cached. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.addVaryHeader">addVaryHeader</a></code> | <code>boolean</code> | AddVaryHeader defines whether the Vary header is automatically added/updated when the AccessControlAllowOriginList is set. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.allowedHosts">allowedHosts</a></code> | <code>string[]</code> | AllowedHosts defines the fully qualified list of allowed domain names. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.browserXssFilter">browserXssFilter</a></code> | <code>boolean</code> | BrowserXSSFilter defines whether to add the X-XSS-Protection header with the value 1; |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.contentSecurityPolicy">contentSecurityPolicy</a></code> | <code>string</code> | ContentSecurityPolicy defines the Content-Security-Policy header value. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.contentTypeNosniff">contentTypeNosniff</a></code> | <code>boolean</code> | ContentTypeNosniff defines whether to add the X-Content-Type-Options header with the nosniff value. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.customBrowserXssValue">customBrowserXssValue</a></code> | <code>string</code> | CustomBrowserXSSValue defines the X-XSS-Protection header value. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.customFrameOptionsValue">customFrameOptionsValue</a></code> | <code>string</code> | CustomFrameOptionsValue defines the X-Frame-Options header value. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.customRequestHeaders">customRequestHeaders</a></code> | <code>{[ key: string ]: string}</code> | CustomRequestHeaders defines the header names and values to apply to the request. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.customResponseHeaders">customResponseHeaders</a></code> | <code>{[ key: string ]: string}</code> | CustomResponseHeaders defines the header names and values to apply to the response. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.featurePolicy">featurePolicy</a></code> | <code>string</code> | Deprecated: use PermissionsPolicy instead. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.forceStsHeader">forceStsHeader</a></code> | <code>boolean</code> | ForceSTSHeader defines whether to add the STS header even when the connection is HTTP. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.frameDeny">frameDeny</a></code> | <code>boolean</code> | FrameDeny defines whether to add the X-Frame-Options header with the DENY value. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.hostsProxyHeaders">hostsProxyHeaders</a></code> | <code>string[]</code> | HostsProxyHeaders defines the header keys that may hold a proxied hostname value for the request. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.isDevelopment">isDevelopment</a></code> | <code>boolean</code> | IsDevelopment defines whether to mitigate the unwanted effects of the AllowedHosts, SSL, and STS options when developing. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.permissionsPolicy">permissionsPolicy</a></code> | <code>string</code> | PermissionsPolicy defines the Permissions-Policy header value. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.publicKey">publicKey</a></code> | <code>string</code> | PublicKey is the public key that implements HPKP to prevent MITM attacks with forged certificates. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.referrerPolicy">referrerPolicy</a></code> | <code>string</code> | ReferrerPolicy defines the Referrer-Policy header value. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.sslForceHost">sslForceHost</a></code> | <code>boolean</code> | Deprecated: use RedirectRegex instead. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.sslHost">sslHost</a></code> | <code>string</code> | Deprecated: use RedirectRegex instead. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.sslProxyHeaders">sslProxyHeaders</a></code> | <code>{[ key: string ]: string}</code> | SSLProxyHeaders defines the header keys with associated values that would indicate a valid HTTPS request. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.sslRedirect">sslRedirect</a></code> | <code>boolean</code> | Deprecated: use EntryPoint redirection or RedirectScheme instead. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.sslTemporaryRedirect">sslTemporaryRedirect</a></code> | <code>boolean</code> | Deprecated: use EntryPoint redirection or RedirectScheme instead. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.stsIncludeSubdomains">stsIncludeSubdomains</a></code> | <code>boolean</code> | STSIncludeSubdomains defines whether the includeSubDomains directive is appended to the Strict-Transport-Security header. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.stsPreload">stsPreload</a></code> | <code>boolean</code> | STSPreload defines whether the preload flag is appended to the Strict-Transport-Security header. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders.property.stsSeconds">stsSeconds</a></code> | <code>number</code> | STSSeconds defines the max-age of the Strict-Transport-Security header. |

---

##### `accessControlAllowCredentials`<sup>Optional</sup> <a name="accessControlAllowCredentials" id="cdk8s-constructs.MiddlewareSpecHeaders.property.accessControlAllowCredentials"></a>

```typescript
public readonly accessControlAllowCredentials: boolean;
```

- *Type:* boolean

AccessControlAllowCredentials defines whether the request can include user credentials.

---

##### `accessControlAllowHeaders`<sup>Optional</sup> <a name="accessControlAllowHeaders" id="cdk8s-constructs.MiddlewareSpecHeaders.property.accessControlAllowHeaders"></a>

```typescript
public readonly accessControlAllowHeaders: string[];
```

- *Type:* string[]

AccessControlAllowHeaders defines the Access-Control-Request-Headers values sent in preflight response.

---

##### `accessControlAllowMethods`<sup>Optional</sup> <a name="accessControlAllowMethods" id="cdk8s-constructs.MiddlewareSpecHeaders.property.accessControlAllowMethods"></a>

```typescript
public readonly accessControlAllowMethods: string[];
```

- *Type:* string[]

AccessControlAllowMethods defines the Access-Control-Request-Method values sent in preflight response.

---

##### `accessControlAllowOriginList`<sup>Optional</sup> <a name="accessControlAllowOriginList" id="cdk8s-constructs.MiddlewareSpecHeaders.property.accessControlAllowOriginList"></a>

```typescript
public readonly accessControlAllowOriginList: string[];
```

- *Type:* string[]

AccessControlAllowOriginList is a list of allowable origins.

Can also be a wildcard origin "*".

---

##### `accessControlAllowOriginListRegex`<sup>Optional</sup> <a name="accessControlAllowOriginListRegex" id="cdk8s-constructs.MiddlewareSpecHeaders.property.accessControlAllowOriginListRegex"></a>

```typescript
public readonly accessControlAllowOriginListRegex: string[];
```

- *Type:* string[]

AccessControlAllowOriginListRegex is a list of allowable origins written following the Regular Expression syntax (https://golang.org/pkg/regexp/).

---

##### `accessControlExposeHeaders`<sup>Optional</sup> <a name="accessControlExposeHeaders" id="cdk8s-constructs.MiddlewareSpecHeaders.property.accessControlExposeHeaders"></a>

```typescript
public readonly accessControlExposeHeaders: string[];
```

- *Type:* string[]

AccessControlExposeHeaders defines the Access-Control-Expose-Headers values sent in preflight response.

---

##### `accessControlMaxAge`<sup>Optional</sup> <a name="accessControlMaxAge" id="cdk8s-constructs.MiddlewareSpecHeaders.property.accessControlMaxAge"></a>

```typescript
public readonly accessControlMaxAge: number;
```

- *Type:* number

AccessControlMaxAge defines the time that a preflight request may be cached.

---

##### `addVaryHeader`<sup>Optional</sup> <a name="addVaryHeader" id="cdk8s-constructs.MiddlewareSpecHeaders.property.addVaryHeader"></a>

```typescript
public readonly addVaryHeader: boolean;
```

- *Type:* boolean

AddVaryHeader defines whether the Vary header is automatically added/updated when the AccessControlAllowOriginList is set.

---

##### `allowedHosts`<sup>Optional</sup> <a name="allowedHosts" id="cdk8s-constructs.MiddlewareSpecHeaders.property.allowedHosts"></a>

```typescript
public readonly allowedHosts: string[];
```

- *Type:* string[]

AllowedHosts defines the fully qualified list of allowed domain names.

---

##### `browserXssFilter`<sup>Optional</sup> <a name="browserXssFilter" id="cdk8s-constructs.MiddlewareSpecHeaders.property.browserXssFilter"></a>

```typescript
public readonly browserXssFilter: boolean;
```

- *Type:* boolean

BrowserXSSFilter defines whether to add the X-XSS-Protection header with the value 1;

mode=block.

---

##### `contentSecurityPolicy`<sup>Optional</sup> <a name="contentSecurityPolicy" id="cdk8s-constructs.MiddlewareSpecHeaders.property.contentSecurityPolicy"></a>

```typescript
public readonly contentSecurityPolicy: string;
```

- *Type:* string

ContentSecurityPolicy defines the Content-Security-Policy header value.

---

##### `contentTypeNosniff`<sup>Optional</sup> <a name="contentTypeNosniff" id="cdk8s-constructs.MiddlewareSpecHeaders.property.contentTypeNosniff"></a>

```typescript
public readonly contentTypeNosniff: boolean;
```

- *Type:* boolean

ContentTypeNosniff defines whether to add the X-Content-Type-Options header with the nosniff value.

---

##### `customBrowserXssValue`<sup>Optional</sup> <a name="customBrowserXssValue" id="cdk8s-constructs.MiddlewareSpecHeaders.property.customBrowserXssValue"></a>

```typescript
public readonly customBrowserXssValue: string;
```

- *Type:* string

CustomBrowserXSSValue defines the X-XSS-Protection header value.

This overrides the BrowserXssFilter option.

---

##### `customFrameOptionsValue`<sup>Optional</sup> <a name="customFrameOptionsValue" id="cdk8s-constructs.MiddlewareSpecHeaders.property.customFrameOptionsValue"></a>

```typescript
public readonly customFrameOptionsValue: string;
```

- *Type:* string

CustomFrameOptionsValue defines the X-Frame-Options header value.

This overrides the FrameDeny option.

---

##### `customRequestHeaders`<sup>Optional</sup> <a name="customRequestHeaders" id="cdk8s-constructs.MiddlewareSpecHeaders.property.customRequestHeaders"></a>

```typescript
public readonly customRequestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

CustomRequestHeaders defines the header names and values to apply to the request.

---

##### `customResponseHeaders`<sup>Optional</sup> <a name="customResponseHeaders" id="cdk8s-constructs.MiddlewareSpecHeaders.property.customResponseHeaders"></a>

```typescript
public readonly customResponseHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

CustomResponseHeaders defines the header names and values to apply to the response.

---

##### `featurePolicy`<sup>Optional</sup> <a name="featurePolicy" id="cdk8s-constructs.MiddlewareSpecHeaders.property.featurePolicy"></a>

```typescript
public readonly featurePolicy: string;
```

- *Type:* string

Deprecated: use PermissionsPolicy instead.

---

##### `forceStsHeader`<sup>Optional</sup> <a name="forceStsHeader" id="cdk8s-constructs.MiddlewareSpecHeaders.property.forceStsHeader"></a>

```typescript
public readonly forceStsHeader: boolean;
```

- *Type:* boolean

ForceSTSHeader defines whether to add the STS header even when the connection is HTTP.

---

##### `frameDeny`<sup>Optional</sup> <a name="frameDeny" id="cdk8s-constructs.MiddlewareSpecHeaders.property.frameDeny"></a>

```typescript
public readonly frameDeny: boolean;
```

- *Type:* boolean

FrameDeny defines whether to add the X-Frame-Options header with the DENY value.

---

##### `hostsProxyHeaders`<sup>Optional</sup> <a name="hostsProxyHeaders" id="cdk8s-constructs.MiddlewareSpecHeaders.property.hostsProxyHeaders"></a>

```typescript
public readonly hostsProxyHeaders: string[];
```

- *Type:* string[]

HostsProxyHeaders defines the header keys that may hold a proxied hostname value for the request.

---

##### `isDevelopment`<sup>Optional</sup> <a name="isDevelopment" id="cdk8s-constructs.MiddlewareSpecHeaders.property.isDevelopment"></a>

```typescript
public readonly isDevelopment: boolean;
```

- *Type:* boolean

IsDevelopment defines whether to mitigate the unwanted effects of the AllowedHosts, SSL, and STS options when developing.

Usually testing takes place using HTTP, not HTTPS, and on localhost, not your production domain. If you would like your development environment to mimic production with complete Host blocking, SSL redirects, and STS headers, leave this as false.

---

##### `permissionsPolicy`<sup>Optional</sup> <a name="permissionsPolicy" id="cdk8s-constructs.MiddlewareSpecHeaders.property.permissionsPolicy"></a>

```typescript
public readonly permissionsPolicy: string;
```

- *Type:* string

PermissionsPolicy defines the Permissions-Policy header value.

This allows sites to control browser features.

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="cdk8s-constructs.MiddlewareSpecHeaders.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

PublicKey is the public key that implements HPKP to prevent MITM attacks with forged certificates.

---

##### `referrerPolicy`<sup>Optional</sup> <a name="referrerPolicy" id="cdk8s-constructs.MiddlewareSpecHeaders.property.referrerPolicy"></a>

```typescript
public readonly referrerPolicy: string;
```

- *Type:* string

ReferrerPolicy defines the Referrer-Policy header value.

This allows sites to control whether browsers forward the Referer header to other sites.

---

##### `sslForceHost`<sup>Optional</sup> <a name="sslForceHost" id="cdk8s-constructs.MiddlewareSpecHeaders.property.sslForceHost"></a>

```typescript
public readonly sslForceHost: boolean;
```

- *Type:* boolean

Deprecated: use RedirectRegex instead.

---

##### `sslHost`<sup>Optional</sup> <a name="sslHost" id="cdk8s-constructs.MiddlewareSpecHeaders.property.sslHost"></a>

```typescript
public readonly sslHost: string;
```

- *Type:* string

Deprecated: use RedirectRegex instead.

---

##### `sslProxyHeaders`<sup>Optional</sup> <a name="sslProxyHeaders" id="cdk8s-constructs.MiddlewareSpecHeaders.property.sslProxyHeaders"></a>

```typescript
public readonly sslProxyHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

SSLProxyHeaders defines the header keys with associated values that would indicate a valid HTTPS request.

It can be useful when using other proxies (example: "X-Forwarded-Proto": "https").

---

##### `sslRedirect`<sup>Optional</sup> <a name="sslRedirect" id="cdk8s-constructs.MiddlewareSpecHeaders.property.sslRedirect"></a>

```typescript
public readonly sslRedirect: boolean;
```

- *Type:* boolean

Deprecated: use EntryPoint redirection or RedirectScheme instead.

---

##### `sslTemporaryRedirect`<sup>Optional</sup> <a name="sslTemporaryRedirect" id="cdk8s-constructs.MiddlewareSpecHeaders.property.sslTemporaryRedirect"></a>

```typescript
public readonly sslTemporaryRedirect: boolean;
```

- *Type:* boolean

Deprecated: use EntryPoint redirection or RedirectScheme instead.

---

##### `stsIncludeSubdomains`<sup>Optional</sup> <a name="stsIncludeSubdomains" id="cdk8s-constructs.MiddlewareSpecHeaders.property.stsIncludeSubdomains"></a>

```typescript
public readonly stsIncludeSubdomains: boolean;
```

- *Type:* boolean

STSIncludeSubdomains defines whether the includeSubDomains directive is appended to the Strict-Transport-Security header.

---

##### `stsPreload`<sup>Optional</sup> <a name="stsPreload" id="cdk8s-constructs.MiddlewareSpecHeaders.property.stsPreload"></a>

```typescript
public readonly stsPreload: boolean;
```

- *Type:* boolean

STSPreload defines whether the preload flag is appended to the Strict-Transport-Security header.

---

##### `stsSeconds`<sup>Optional</sup> <a name="stsSeconds" id="cdk8s-constructs.MiddlewareSpecHeaders.property.stsSeconds"></a>

```typescript
public readonly stsSeconds: number;
```

- *Type:* number

STSSeconds defines the max-age of the Strict-Transport-Security header.

If set to 0, the header is not set.

---

### MiddlewareSpecInFlightReq <a name="MiddlewareSpecInFlightReq" id="cdk8s-constructs.MiddlewareSpecInFlightReq"></a>

InFlightReq holds the in-flight request middleware configuration.

This middleware limits the number of requests being processed and served concurrently. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/inflightreq/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecInFlightReq.Initializer"></a>

```typescript
import { MiddlewareSpecInFlightReq } from 'cdk8s-constructs'

const middlewareSpecInFlightReq: MiddlewareSpecInFlightReq = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecInFlightReq.property.amount">amount</a></code> | <code>number</code> | Amount defines the maximum amount of allowed simultaneous in-flight request. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecInFlightReq.property.sourceCriterion">sourceCriterion</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterion">MiddlewareSpecInFlightReqSourceCriterion</a></code> | SourceCriterion defines what criterion is used to group requests as originating from a common source. |

---

##### `amount`<sup>Optional</sup> <a name="amount" id="cdk8s-constructs.MiddlewareSpecInFlightReq.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

Amount defines the maximum amount of allowed simultaneous in-flight request.

The middleware responds with HTTP 429 Too Many Requests if there are already amount requests in progress (based on the same sourceCriterion strategy).

---

##### `sourceCriterion`<sup>Optional</sup> <a name="sourceCriterion" id="cdk8s-constructs.MiddlewareSpecInFlightReq.property.sourceCriterion"></a>

```typescript
public readonly sourceCriterion: MiddlewareSpecInFlightReqSourceCriterion;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterion">MiddlewareSpecInFlightReqSourceCriterion</a>

SourceCriterion defines what criterion is used to group requests as originating from a common source.

If several strategies are defined at the same time, an error will be raised. If none are set, the default is to use the requestHost. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/inflightreq/#sourcecriterion

---

### MiddlewareSpecInFlightReqSourceCriterion <a name="MiddlewareSpecInFlightReqSourceCriterion" id="cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterion"></a>

SourceCriterion defines what criterion is used to group requests as originating from a common source.

If several strategies are defined at the same time, an error will be raised. If none are set, the default is to use the requestHost. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/inflightreq/#sourcecriterion

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterion.Initializer"></a>

```typescript
import { MiddlewareSpecInFlightReqSourceCriterion } from 'cdk8s-constructs'

const middlewareSpecInFlightReqSourceCriterion: MiddlewareSpecInFlightReqSourceCriterion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterion.property.ipStrategy">ipStrategy</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterionIpStrategy">MiddlewareSpecInFlightReqSourceCriterionIpStrategy</a></code> | IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterion.property.requestHeaderName">requestHeaderName</a></code> | <code>string</code> | RequestHeaderName defines the name of the header used to group incoming requests. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterion.property.requestHost">requestHost</a></code> | <code>boolean</code> | RequestHost defines whether to consider the request Host as the source. |

---

##### `ipStrategy`<sup>Optional</sup> <a name="ipStrategy" id="cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterion.property.ipStrategy"></a>

```typescript
public readonly ipStrategy: MiddlewareSpecInFlightReqSourceCriterionIpStrategy;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterionIpStrategy">MiddlewareSpecInFlightReqSourceCriterionIpStrategy</a>

IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ipwhitelist/#ipstrategy

---

##### `requestHeaderName`<sup>Optional</sup> <a name="requestHeaderName" id="cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterion.property.requestHeaderName"></a>

```typescript
public readonly requestHeaderName: string;
```

- *Type:* string

RequestHeaderName defines the name of the header used to group incoming requests.

---

##### `requestHost`<sup>Optional</sup> <a name="requestHost" id="cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterion.property.requestHost"></a>

```typescript
public readonly requestHost: boolean;
```

- *Type:* boolean

RequestHost defines whether to consider the request Host as the source.

---

### MiddlewareSpecInFlightReqSourceCriterionIpStrategy <a name="MiddlewareSpecInFlightReqSourceCriterionIpStrategy" id="cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterionIpStrategy"></a>

IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ipwhitelist/#ipstrategy

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterionIpStrategy.Initializer"></a>

```typescript
import { MiddlewareSpecInFlightReqSourceCriterionIpStrategy } from 'cdk8s-constructs'

const middlewareSpecInFlightReqSourceCriterionIpStrategy: MiddlewareSpecInFlightReqSourceCriterionIpStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterionIpStrategy.property.depth">depth</a></code> | <code>number</code> | Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right). |
| <code><a href="#cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterionIpStrategy.property.excludedIPs">excludedIPs</a></code> | <code>string[]</code> | ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list. |

---

##### `depth`<sup>Optional</sup> <a name="depth" id="cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterionIpStrategy.property.depth"></a>

```typescript
public readonly depth: number;
```

- *Type:* number

Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).

---

##### `excludedIPs`<sup>Optional</sup> <a name="excludedIPs" id="cdk8s-constructs.MiddlewareSpecInFlightReqSourceCriterionIpStrategy.property.excludedIPs"></a>

```typescript
public readonly excludedIPs: string[];
```

- *Type:* string[]

ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.

---

### MiddlewareSpecIpWhiteList <a name="MiddlewareSpecIpWhiteList" id="cdk8s-constructs.MiddlewareSpecIpWhiteList"></a>

IPWhiteList holds the IP whitelist middleware configuration.

This middleware accepts / refuses requests based on the client IP. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ipwhitelist/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecIpWhiteList.Initializer"></a>

```typescript
import { MiddlewareSpecIpWhiteList } from 'cdk8s-constructs'

const middlewareSpecIpWhiteList: MiddlewareSpecIpWhiteList = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecIpWhiteList.property.ipStrategy">ipStrategy</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecIpWhiteListIpStrategy">MiddlewareSpecIpWhiteListIpStrategy</a></code> | IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecIpWhiteList.property.sourceRange">sourceRange</a></code> | <code>string[]</code> | SourceRange defines the set of allowed IPs (or ranges of allowed IPs by using CIDR notation). |

---

##### `ipStrategy`<sup>Optional</sup> <a name="ipStrategy" id="cdk8s-constructs.MiddlewareSpecIpWhiteList.property.ipStrategy"></a>

```typescript
public readonly ipStrategy: MiddlewareSpecIpWhiteListIpStrategy;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecIpWhiteListIpStrategy">MiddlewareSpecIpWhiteListIpStrategy</a>

IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ipwhitelist/#ipstrategy

---

##### `sourceRange`<sup>Optional</sup> <a name="sourceRange" id="cdk8s-constructs.MiddlewareSpecIpWhiteList.property.sourceRange"></a>

```typescript
public readonly sourceRange: string[];
```

- *Type:* string[]

SourceRange defines the set of allowed IPs (or ranges of allowed IPs by using CIDR notation).

---

### MiddlewareSpecIpWhiteListIpStrategy <a name="MiddlewareSpecIpWhiteListIpStrategy" id="cdk8s-constructs.MiddlewareSpecIpWhiteListIpStrategy"></a>

IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ipwhitelist/#ipstrategy

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecIpWhiteListIpStrategy.Initializer"></a>

```typescript
import { MiddlewareSpecIpWhiteListIpStrategy } from 'cdk8s-constructs'

const middlewareSpecIpWhiteListIpStrategy: MiddlewareSpecIpWhiteListIpStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecIpWhiteListIpStrategy.property.depth">depth</a></code> | <code>number</code> | Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right). |
| <code><a href="#cdk8s-constructs.MiddlewareSpecIpWhiteListIpStrategy.property.excludedIPs">excludedIPs</a></code> | <code>string[]</code> | ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list. |

---

##### `depth`<sup>Optional</sup> <a name="depth" id="cdk8s-constructs.MiddlewareSpecIpWhiteListIpStrategy.property.depth"></a>

```typescript
public readonly depth: number;
```

- *Type:* number

Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).

---

##### `excludedIPs`<sup>Optional</sup> <a name="excludedIPs" id="cdk8s-constructs.MiddlewareSpecIpWhiteListIpStrategy.property.excludedIPs"></a>

```typescript
public readonly excludedIPs: string[];
```

- *Type:* string[]

ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.

---

### MiddlewareSpecPassTlsClientCert <a name="MiddlewareSpecPassTlsClientCert" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCert"></a>

PassTLSClientCert holds the pass TLS client cert middleware configuration.

This middleware adds the selected data from the passed client TLS certificate to a header. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/passtlsclientcert/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCert.Initializer"></a>

```typescript
import { MiddlewareSpecPassTlsClientCert } from 'cdk8s-constructs'

const middlewareSpecPassTlsClientCert: MiddlewareSpecPassTlsClientCert = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCert.property.info">info</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo">MiddlewareSpecPassTlsClientCertInfo</a></code> | Info selects the specific client certificate details you want to add to the X-Forwarded-Tls-Client-Cert-Info header. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCert.property.pem">pem</a></code> | <code>boolean</code> | PEM sets the X-Forwarded-Tls-Client-Cert header with the certificate. |

---

##### `info`<sup>Optional</sup> <a name="info" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCert.property.info"></a>

```typescript
public readonly info: MiddlewareSpecPassTlsClientCertInfo;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo">MiddlewareSpecPassTlsClientCertInfo</a>

Info selects the specific client certificate details you want to add to the X-Forwarded-Tls-Client-Cert-Info header.

---

##### `pem`<sup>Optional</sup> <a name="pem" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCert.property.pem"></a>

```typescript
public readonly pem: boolean;
```

- *Type:* boolean

PEM sets the X-Forwarded-Tls-Client-Cert header with the certificate.

---

### MiddlewareSpecPassTlsClientCertInfo <a name="MiddlewareSpecPassTlsClientCertInfo" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo"></a>

Info selects the specific client certificate details you want to add to the X-Forwarded-Tls-Client-Cert-Info header.

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo.Initializer"></a>

```typescript
import { MiddlewareSpecPassTlsClientCertInfo } from 'cdk8s-constructs'

const middlewareSpecPassTlsClientCertInfo: MiddlewareSpecPassTlsClientCertInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo.property.issuer">issuer</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer">MiddlewareSpecPassTlsClientCertInfoIssuer</a></code> | Issuer defines the client certificate issuer details to add to the X-Forwarded-Tls-Client-Cert-Info header. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo.property.notAfter">notAfter</a></code> | <code>boolean</code> | NotAfter defines whether to add the Not After information from the Validity part. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo.property.notBefore">notBefore</a></code> | <code>boolean</code> | NotBefore defines whether to add the Not Before information from the Validity part. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo.property.sans">sans</a></code> | <code>boolean</code> | Sans defines whether to add the Subject Alternative Name information from the Subject Alternative Name part. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo.property.serialNumber">serialNumber</a></code> | <code>boolean</code> | SerialNumber defines whether to add the client serialNumber information. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo.property.subject">subject</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject">MiddlewareSpecPassTlsClientCertInfoSubject</a></code> | Subject defines the client certificate subject details to add to the X-Forwarded-Tls-Client-Cert-Info header. |

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo.property.issuer"></a>

```typescript
public readonly issuer: MiddlewareSpecPassTlsClientCertInfoIssuer;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer">MiddlewareSpecPassTlsClientCertInfoIssuer</a>

Issuer defines the client certificate issuer details to add to the X-Forwarded-Tls-Client-Cert-Info header.

---

##### `notAfter`<sup>Optional</sup> <a name="notAfter" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo.property.notAfter"></a>

```typescript
public readonly notAfter: boolean;
```

- *Type:* boolean

NotAfter defines whether to add the Not After information from the Validity part.

---

##### `notBefore`<sup>Optional</sup> <a name="notBefore" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo.property.notBefore"></a>

```typescript
public readonly notBefore: boolean;
```

- *Type:* boolean

NotBefore defines whether to add the Not Before information from the Validity part.

---

##### `sans`<sup>Optional</sup> <a name="sans" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo.property.sans"></a>

```typescript
public readonly sans: boolean;
```

- *Type:* boolean

Sans defines whether to add the Subject Alternative Name information from the Subject Alternative Name part.

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo.property.serialNumber"></a>

```typescript
public readonly serialNumber: boolean;
```

- *Type:* boolean

SerialNumber defines whether to add the client serialNumber information.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfo.property.subject"></a>

```typescript
public readonly subject: MiddlewareSpecPassTlsClientCertInfoSubject;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject">MiddlewareSpecPassTlsClientCertInfoSubject</a>

Subject defines the client certificate subject details to add to the X-Forwarded-Tls-Client-Cert-Info header.

---

### MiddlewareSpecPassTlsClientCertInfoIssuer <a name="MiddlewareSpecPassTlsClientCertInfoIssuer" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer"></a>

Issuer defines the client certificate issuer details to add to the X-Forwarded-Tls-Client-Cert-Info header.

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.Initializer"></a>

```typescript
import { MiddlewareSpecPassTlsClientCertInfoIssuer } from 'cdk8s-constructs'

const middlewareSpecPassTlsClientCertInfoIssuer: MiddlewareSpecPassTlsClientCertInfoIssuer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.property.commonName">commonName</a></code> | <code>boolean</code> | CommonName defines whether to add the organizationalUnit information into the issuer. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.property.country">country</a></code> | <code>boolean</code> | Country defines whether to add the country information into the issuer. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.property.domainComponent">domainComponent</a></code> | <code>boolean</code> | DomainComponent defines whether to add the domainComponent information into the issuer. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.property.locality">locality</a></code> | <code>boolean</code> | Locality defines whether to add the locality information into the issuer. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.property.organization">organization</a></code> | <code>boolean</code> | Organization defines whether to add the organization information into the issuer. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.property.province">province</a></code> | <code>boolean</code> | Province defines whether to add the province information into the issuer. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.property.serialNumber">serialNumber</a></code> | <code>boolean</code> | SerialNumber defines whether to add the serialNumber information into the issuer. |

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.property.commonName"></a>

```typescript
public readonly commonName: boolean;
```

- *Type:* boolean

CommonName defines whether to add the organizationalUnit information into the issuer.

---

##### `country`<sup>Optional</sup> <a name="country" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.property.country"></a>

```typescript
public readonly country: boolean;
```

- *Type:* boolean

Country defines whether to add the country information into the issuer.

---

##### `domainComponent`<sup>Optional</sup> <a name="domainComponent" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.property.domainComponent"></a>

```typescript
public readonly domainComponent: boolean;
```

- *Type:* boolean

DomainComponent defines whether to add the domainComponent information into the issuer.

---

##### `locality`<sup>Optional</sup> <a name="locality" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.property.locality"></a>

```typescript
public readonly locality: boolean;
```

- *Type:* boolean

Locality defines whether to add the locality information into the issuer.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.property.organization"></a>

```typescript
public readonly organization: boolean;
```

- *Type:* boolean

Organization defines whether to add the organization information into the issuer.

---

##### `province`<sup>Optional</sup> <a name="province" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.property.province"></a>

```typescript
public readonly province: boolean;
```

- *Type:* boolean

Province defines whether to add the province information into the issuer.

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoIssuer.property.serialNumber"></a>

```typescript
public readonly serialNumber: boolean;
```

- *Type:* boolean

SerialNumber defines whether to add the serialNumber information into the issuer.

---

### MiddlewareSpecPassTlsClientCertInfoSubject <a name="MiddlewareSpecPassTlsClientCertInfoSubject" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject"></a>

Subject defines the client certificate subject details to add to the X-Forwarded-Tls-Client-Cert-Info header.

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.Initializer"></a>

```typescript
import { MiddlewareSpecPassTlsClientCertInfoSubject } from 'cdk8s-constructs'

const middlewareSpecPassTlsClientCertInfoSubject: MiddlewareSpecPassTlsClientCertInfoSubject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.commonName">commonName</a></code> | <code>boolean</code> | CommonName defines whether to add the organizationalUnit information into the subject. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.country">country</a></code> | <code>boolean</code> | Country defines whether to add the country information into the subject. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.domainComponent">domainComponent</a></code> | <code>boolean</code> | DomainComponent defines whether to add the domainComponent information into the subject. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.locality">locality</a></code> | <code>boolean</code> | Locality defines whether to add the locality information into the subject. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.organization">organization</a></code> | <code>boolean</code> | Organization defines whether to add the organization information into the subject. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.organizationalUnit">organizationalUnit</a></code> | <code>boolean</code> | OrganizationalUnit defines whether to add the organizationalUnit information into the subject. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.province">province</a></code> | <code>boolean</code> | Province defines whether to add the province information into the subject. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.serialNumber">serialNumber</a></code> | <code>boolean</code> | SerialNumber defines whether to add the serialNumber information into the subject. |

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.commonName"></a>

```typescript
public readonly commonName: boolean;
```

- *Type:* boolean

CommonName defines whether to add the organizationalUnit information into the subject.

---

##### `country`<sup>Optional</sup> <a name="country" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.country"></a>

```typescript
public readonly country: boolean;
```

- *Type:* boolean

Country defines whether to add the country information into the subject.

---

##### `domainComponent`<sup>Optional</sup> <a name="domainComponent" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.domainComponent"></a>

```typescript
public readonly domainComponent: boolean;
```

- *Type:* boolean

DomainComponent defines whether to add the domainComponent information into the subject.

---

##### `locality`<sup>Optional</sup> <a name="locality" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.locality"></a>

```typescript
public readonly locality: boolean;
```

- *Type:* boolean

Locality defines whether to add the locality information into the subject.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.organization"></a>

```typescript
public readonly organization: boolean;
```

- *Type:* boolean

Organization defines whether to add the organization information into the subject.

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: boolean;
```

- *Type:* boolean

OrganizationalUnit defines whether to add the organizationalUnit information into the subject.

---

##### `province`<sup>Optional</sup> <a name="province" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.province"></a>

```typescript
public readonly province: boolean;
```

- *Type:* boolean

Province defines whether to add the province information into the subject.

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="cdk8s-constructs.MiddlewareSpecPassTlsClientCertInfoSubject.property.serialNumber"></a>

```typescript
public readonly serialNumber: boolean;
```

- *Type:* boolean

SerialNumber defines whether to add the serialNumber information into the subject.

---

### MiddlewareSpecRateLimit <a name="MiddlewareSpecRateLimit" id="cdk8s-constructs.MiddlewareSpecRateLimit"></a>

RateLimit holds the rate limit configuration.

This middleware ensures that services will receive a fair amount of requests, and allows one to define what fair is. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ratelimit/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecRateLimit.Initializer"></a>

```typescript
import { MiddlewareSpecRateLimit } from 'cdk8s-constructs'

const middlewareSpecRateLimit: MiddlewareSpecRateLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimit.property.average">average</a></code> | <code>number</code> | Average is the maximum rate, by default in requests/s, allowed for the given source. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimit.property.burst">burst</a></code> | <code>number</code> | Burst is the maximum number of requests allowed to arrive in the same arbitrarily small period of time. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimit.property.period">period</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimitPeriod">MiddlewareSpecRateLimitPeriod</a></code> | Period, in combination with Average, defines the actual maximum rate, such as: r = Average / Period. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimit.property.sourceCriterion">sourceCriterion</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterion">MiddlewareSpecRateLimitSourceCriterion</a></code> | SourceCriterion defines what criterion is used to group requests as originating from a common source. |

---

##### `average`<sup>Optional</sup> <a name="average" id="cdk8s-constructs.MiddlewareSpecRateLimit.property.average"></a>

```typescript
public readonly average: number;
```

- *Type:* number

Average is the maximum rate, by default in requests/s, allowed for the given source.

It defaults to 0, which means no rate limiting. The rate is actually defined by dividing Average by Period. So for a rate below 1req/s, one needs to define a Period larger than a second.

---

##### `burst`<sup>Optional</sup> <a name="burst" id="cdk8s-constructs.MiddlewareSpecRateLimit.property.burst"></a>

```typescript
public readonly burst: number;
```

- *Type:* number

Burst is the maximum number of requests allowed to arrive in the same arbitrarily small period of time.

It defaults to 1.

---

##### `period`<sup>Optional</sup> <a name="period" id="cdk8s-constructs.MiddlewareSpecRateLimit.property.period"></a>

```typescript
public readonly period: MiddlewareSpecRateLimitPeriod;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecRateLimitPeriod">MiddlewareSpecRateLimitPeriod</a>

Period, in combination with Average, defines the actual maximum rate, such as: r = Average / Period.

It defaults to a second.

---

##### `sourceCriterion`<sup>Optional</sup> <a name="sourceCriterion" id="cdk8s-constructs.MiddlewareSpecRateLimit.property.sourceCriterion"></a>

```typescript
public readonly sourceCriterion: MiddlewareSpecRateLimitSourceCriterion;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterion">MiddlewareSpecRateLimitSourceCriterion</a>

SourceCriterion defines what criterion is used to group requests as originating from a common source.

If several strategies are defined at the same time, an error will be raised. If none are set, the default is to use the request's remote address field (as an ipStrategy).

---

### MiddlewareSpecRateLimitSourceCriterion <a name="MiddlewareSpecRateLimitSourceCriterion" id="cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterion"></a>

SourceCriterion defines what criterion is used to group requests as originating from a common source.

If several strategies are defined at the same time, an error will be raised. If none are set, the default is to use the request's remote address field (as an ipStrategy).

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterion.Initializer"></a>

```typescript
import { MiddlewareSpecRateLimitSourceCriterion } from 'cdk8s-constructs'

const middlewareSpecRateLimitSourceCriterion: MiddlewareSpecRateLimitSourceCriterion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterion.property.ipStrategy">ipStrategy</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterionIpStrategy">MiddlewareSpecRateLimitSourceCriterionIpStrategy</a></code> | IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterion.property.requestHeaderName">requestHeaderName</a></code> | <code>string</code> | RequestHeaderName defines the name of the header used to group incoming requests. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterion.property.requestHost">requestHost</a></code> | <code>boolean</code> | RequestHost defines whether to consider the request Host as the source. |

---

##### `ipStrategy`<sup>Optional</sup> <a name="ipStrategy" id="cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterion.property.ipStrategy"></a>

```typescript
public readonly ipStrategy: MiddlewareSpecRateLimitSourceCriterionIpStrategy;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterionIpStrategy">MiddlewareSpecRateLimitSourceCriterionIpStrategy</a>

IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ipwhitelist/#ipstrategy

---

##### `requestHeaderName`<sup>Optional</sup> <a name="requestHeaderName" id="cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterion.property.requestHeaderName"></a>

```typescript
public readonly requestHeaderName: string;
```

- *Type:* string

RequestHeaderName defines the name of the header used to group incoming requests.

---

##### `requestHost`<sup>Optional</sup> <a name="requestHost" id="cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterion.property.requestHost"></a>

```typescript
public readonly requestHost: boolean;
```

- *Type:* boolean

RequestHost defines whether to consider the request Host as the source.

---

### MiddlewareSpecRateLimitSourceCriterionIpStrategy <a name="MiddlewareSpecRateLimitSourceCriterionIpStrategy" id="cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterionIpStrategy"></a>

IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ipwhitelist/#ipstrategy

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterionIpStrategy.Initializer"></a>

```typescript
import { MiddlewareSpecRateLimitSourceCriterionIpStrategy } from 'cdk8s-constructs'

const middlewareSpecRateLimitSourceCriterionIpStrategy: MiddlewareSpecRateLimitSourceCriterionIpStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterionIpStrategy.property.depth">depth</a></code> | <code>number</code> | Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right). |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterionIpStrategy.property.excludedIPs">excludedIPs</a></code> | <code>string[]</code> | ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list. |

---

##### `depth`<sup>Optional</sup> <a name="depth" id="cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterionIpStrategy.property.depth"></a>

```typescript
public readonly depth: number;
```

- *Type:* number

Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).

---

##### `excludedIPs`<sup>Optional</sup> <a name="excludedIPs" id="cdk8s-constructs.MiddlewareSpecRateLimitSourceCriterionIpStrategy.property.excludedIPs"></a>

```typescript
public readonly excludedIPs: string[];
```

- *Type:* string[]

ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.

---

### MiddlewareSpecRedirectRegex <a name="MiddlewareSpecRedirectRegex" id="cdk8s-constructs.MiddlewareSpecRedirectRegex"></a>

RedirectRegex holds the redirect regex middleware configuration.

This middleware redirects a request using regex matching and replacement. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/redirectregex/#regex

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecRedirectRegex.Initializer"></a>

```typescript
import { MiddlewareSpecRedirectRegex } from 'cdk8s-constructs'

const middlewareSpecRedirectRegex: MiddlewareSpecRedirectRegex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRedirectRegex.property.permanent">permanent</a></code> | <code>boolean</code> | Permanent defines whether the redirection is permanent (301). |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRedirectRegex.property.regex">regex</a></code> | <code>string</code> | Regex defines the regex used to match and capture elements from the request URL. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRedirectRegex.property.replacement">replacement</a></code> | <code>string</code> | Replacement defines how to modify the URL to have the new target URL. |

---

##### `permanent`<sup>Optional</sup> <a name="permanent" id="cdk8s-constructs.MiddlewareSpecRedirectRegex.property.permanent"></a>

```typescript
public readonly permanent: boolean;
```

- *Type:* boolean

Permanent defines whether the redirection is permanent (301).

---

##### `regex`<sup>Optional</sup> <a name="regex" id="cdk8s-constructs.MiddlewareSpecRedirectRegex.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Regex defines the regex used to match and capture elements from the request URL.

---

##### `replacement`<sup>Optional</sup> <a name="replacement" id="cdk8s-constructs.MiddlewareSpecRedirectRegex.property.replacement"></a>

```typescript
public readonly replacement: string;
```

- *Type:* string

Replacement defines how to modify the URL to have the new target URL.

---

### MiddlewareSpecRedirectScheme <a name="MiddlewareSpecRedirectScheme" id="cdk8s-constructs.MiddlewareSpecRedirectScheme"></a>

RedirectScheme holds the redirect scheme middleware configuration.

This middleware redirects requests from a scheme/port to another. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/redirectscheme/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecRedirectScheme.Initializer"></a>

```typescript
import { MiddlewareSpecRedirectScheme } from 'cdk8s-constructs'

const middlewareSpecRedirectScheme: MiddlewareSpecRedirectScheme = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRedirectScheme.property.permanent">permanent</a></code> | <code>boolean</code> | Permanent defines whether the redirection is permanent (301). |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRedirectScheme.property.port">port</a></code> | <code>string</code> | Port defines the port of the new URL. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRedirectScheme.property.scheme">scheme</a></code> | <code>string</code> | Scheme defines the scheme of the new URL. |

---

##### `permanent`<sup>Optional</sup> <a name="permanent" id="cdk8s-constructs.MiddlewareSpecRedirectScheme.property.permanent"></a>

```typescript
public readonly permanent: boolean;
```

- *Type:* boolean

Permanent defines whether the redirection is permanent (301).

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk8s-constructs.MiddlewareSpecRedirectScheme.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

Port defines the port of the new URL.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="cdk8s-constructs.MiddlewareSpecRedirectScheme.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Scheme defines the scheme of the new URL.

---

### MiddlewareSpecReplacePath <a name="MiddlewareSpecReplacePath" id="cdk8s-constructs.MiddlewareSpecReplacePath"></a>

ReplacePath holds the replace path middleware configuration.

This middleware replaces the path of the request URL and store the original path in an X-Replaced-Path header. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/replacepath/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecReplacePath.Initializer"></a>

```typescript
import { MiddlewareSpecReplacePath } from 'cdk8s-constructs'

const middlewareSpecReplacePath: MiddlewareSpecReplacePath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecReplacePath.property.path">path</a></code> | <code>string</code> | Path defines the path to use as replacement in the request URL. |

---

##### `path`<sup>Optional</sup> <a name="path" id="cdk8s-constructs.MiddlewareSpecReplacePath.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path defines the path to use as replacement in the request URL.

---

### MiddlewareSpecReplacePathRegex <a name="MiddlewareSpecReplacePathRegex" id="cdk8s-constructs.MiddlewareSpecReplacePathRegex"></a>

ReplacePathRegex holds the replace path regex middleware configuration.

This middleware replaces the path of a URL using regex matching and replacement. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/replacepathregex/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecReplacePathRegex.Initializer"></a>

```typescript
import { MiddlewareSpecReplacePathRegex } from 'cdk8s-constructs'

const middlewareSpecReplacePathRegex: MiddlewareSpecReplacePathRegex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecReplacePathRegex.property.regex">regex</a></code> | <code>string</code> | Regex defines the regular expression used to match and capture the path from the request URL. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecReplacePathRegex.property.replacement">replacement</a></code> | <code>string</code> | Replacement defines the replacement path format, which can include captured variables. |

---

##### `regex`<sup>Optional</sup> <a name="regex" id="cdk8s-constructs.MiddlewareSpecReplacePathRegex.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Regex defines the regular expression used to match and capture the path from the request URL.

---

##### `replacement`<sup>Optional</sup> <a name="replacement" id="cdk8s-constructs.MiddlewareSpecReplacePathRegex.property.replacement"></a>

```typescript
public readonly replacement: string;
```

- *Type:* string

Replacement defines the replacement path format, which can include captured variables.

---

### MiddlewareSpecRetry <a name="MiddlewareSpecRetry" id="cdk8s-constructs.MiddlewareSpecRetry"></a>

Retry holds the retry middleware configuration.

This middleware reissues requests a given number of times to a backend server if that server does not reply. As soon as the server answers, the middleware stops retrying, regardless of the response status. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/retry/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecRetry.Initializer"></a>

```typescript
import { MiddlewareSpecRetry } from 'cdk8s-constructs'

const middlewareSpecRetry: MiddlewareSpecRetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRetry.property.attempts">attempts</a></code> | <code>number</code> | Attempts defines how many times the request should be retried. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRetry.property.initialInterval">initialInterval</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecRetryInitialInterval">MiddlewareSpecRetryInitialInterval</a></code> | InitialInterval defines the first wait time in the exponential backoff series. |

---

##### `attempts`<sup>Optional</sup> <a name="attempts" id="cdk8s-constructs.MiddlewareSpecRetry.property.attempts"></a>

```typescript
public readonly attempts: number;
```

- *Type:* number

Attempts defines how many times the request should be retried.

---

##### `initialInterval`<sup>Optional</sup> <a name="initialInterval" id="cdk8s-constructs.MiddlewareSpecRetry.property.initialInterval"></a>

```typescript
public readonly initialInterval: MiddlewareSpecRetryInitialInterval;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecRetryInitialInterval">MiddlewareSpecRetryInitialInterval</a>

InitialInterval defines the first wait time in the exponential backoff series.

The maximum interval is calculated as twice the initialInterval. If unspecified, requests will be retried immediately. The value of initialInterval should be provided in seconds or as a valid duration format, see https://pkg.go.dev/time#ParseDuration.

---

### MiddlewareSpecStripPrefix <a name="MiddlewareSpecStripPrefix" id="cdk8s-constructs.MiddlewareSpecStripPrefix"></a>

StripPrefix holds the strip prefix middleware configuration.

This middleware removes the specified prefixes from the URL path. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/stripprefix/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecStripPrefix.Initializer"></a>

```typescript
import { MiddlewareSpecStripPrefix } from 'cdk8s-constructs'

const middlewareSpecStripPrefix: MiddlewareSpecStripPrefix = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecStripPrefix.property.forceSlash">forceSlash</a></code> | <code>boolean</code> | ForceSlash ensures that the resulting stripped path is not the empty string, by replacing it with / when necessary. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecStripPrefix.property.prefixes">prefixes</a></code> | <code>string[]</code> | Prefixes defines the prefixes to strip from the request URL. |

---

##### `forceSlash`<sup>Optional</sup> <a name="forceSlash" id="cdk8s-constructs.MiddlewareSpecStripPrefix.property.forceSlash"></a>

```typescript
public readonly forceSlash: boolean;
```

- *Type:* boolean

ForceSlash ensures that the resulting stripped path is not the empty string, by replacing it with / when necessary.

Default: true.

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="cdk8s-constructs.MiddlewareSpecStripPrefix.property.prefixes"></a>

```typescript
public readonly prefixes: string[];
```

- *Type:* string[]

Prefixes defines the prefixes to strip from the request URL.

---

### MiddlewareSpecStripPrefixRegex <a name="MiddlewareSpecStripPrefixRegex" id="cdk8s-constructs.MiddlewareSpecStripPrefixRegex"></a>

StripPrefixRegex holds the strip prefix regex middleware configuration.

This middleware removes the matching prefixes from the URL path. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/stripprefixregex/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareSpecStripPrefixRegex.Initializer"></a>

```typescript
import { MiddlewareSpecStripPrefixRegex } from 'cdk8s-constructs'

const middlewareSpecStripPrefixRegex: MiddlewareSpecStripPrefixRegex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecStripPrefixRegex.property.regex">regex</a></code> | <code>string[]</code> | Regex defines the regular expression to match the path prefix from the request URL. |

---

##### `regex`<sup>Optional</sup> <a name="regex" id="cdk8s-constructs.MiddlewareSpecStripPrefixRegex.property.regex"></a>

```typescript
public readonly regex: string[];
```

- *Type:* string[]

Regex defines the regular expression to match the path prefix from the request URL.

---

### MiddlewareTcpProps <a name="MiddlewareTcpProps" id="cdk8s-constructs.MiddlewareTcpProps"></a>

MiddlewareTCP is the CRD implementation of a Traefik TCP middleware.

More info: https://doc.traefik.io/traefik/v2.10/middlewares/overview/

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareTcpProps.Initializer"></a>

```typescript
import { MiddlewareTcpProps } from 'cdk8s-constructs'

const middlewareTcpProps: MiddlewareTcpProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareTcpProps.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MiddlewareTcpProps.property.spec">spec</a></code> | <code><a href="#cdk8s-constructs.MiddlewareTcpSpec">MiddlewareTcpSpec</a></code> | MiddlewareTCPSpec defines the desired state of a MiddlewareTCP. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.MiddlewareTcpProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

---

##### `spec`<sup>Required</sup> <a name="spec" id="cdk8s-constructs.MiddlewareTcpProps.property.spec"></a>

```typescript
public readonly spec: MiddlewareTcpSpec;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareTcpSpec">MiddlewareTcpSpec</a>

MiddlewareTCPSpec defines the desired state of a MiddlewareTCP.

---

### MiddlewareTcpSpec <a name="MiddlewareTcpSpec" id="cdk8s-constructs.MiddlewareTcpSpec"></a>

MiddlewareTCPSpec defines the desired state of a MiddlewareTCP.

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareTcpSpec.Initializer"></a>

```typescript
import { MiddlewareTcpSpec } from 'cdk8s-constructs'

const middlewareTcpSpec: MiddlewareTcpSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareTcpSpec.property.inFlightConn">inFlightConn</a></code> | <code><a href="#cdk8s-constructs.MiddlewareTcpSpecInFlightConn">MiddlewareTcpSpecInFlightConn</a></code> | InFlightConn defines the InFlightConn middleware configuration. |
| <code><a href="#cdk8s-constructs.MiddlewareTcpSpec.property.ipWhiteList">ipWhiteList</a></code> | <code><a href="#cdk8s-constructs.MiddlewareTcpSpecIpWhiteList">MiddlewareTcpSpecIpWhiteList</a></code> | IPWhiteList defines the IPWhiteList middleware configuration. |

---

##### `inFlightConn`<sup>Optional</sup> <a name="inFlightConn" id="cdk8s-constructs.MiddlewareTcpSpec.property.inFlightConn"></a>

```typescript
public readonly inFlightConn: MiddlewareTcpSpecInFlightConn;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareTcpSpecInFlightConn">MiddlewareTcpSpecInFlightConn</a>

InFlightConn defines the InFlightConn middleware configuration.

---

##### `ipWhiteList`<sup>Optional</sup> <a name="ipWhiteList" id="cdk8s-constructs.MiddlewareTcpSpec.property.ipWhiteList"></a>

```typescript
public readonly ipWhiteList: MiddlewareTcpSpecIpWhiteList;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareTcpSpecIpWhiteList">MiddlewareTcpSpecIpWhiteList</a>

IPWhiteList defines the IPWhiteList middleware configuration.

---

### MiddlewareTcpSpecInFlightConn <a name="MiddlewareTcpSpecInFlightConn" id="cdk8s-constructs.MiddlewareTcpSpecInFlightConn"></a>

InFlightConn defines the InFlightConn middleware configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareTcpSpecInFlightConn.Initializer"></a>

```typescript
import { MiddlewareTcpSpecInFlightConn } from 'cdk8s-constructs'

const middlewareTcpSpecInFlightConn: MiddlewareTcpSpecInFlightConn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareTcpSpecInFlightConn.property.amount">amount</a></code> | <code>number</code> | Amount defines the maximum amount of allowed simultaneous connections. |

---

##### `amount`<sup>Optional</sup> <a name="amount" id="cdk8s-constructs.MiddlewareTcpSpecInFlightConn.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

Amount defines the maximum amount of allowed simultaneous connections.

The middleware closes the connection if there are already amount connections opened.

---

### MiddlewareTcpSpecIpWhiteList <a name="MiddlewareTcpSpecIpWhiteList" id="cdk8s-constructs.MiddlewareTcpSpecIpWhiteList"></a>

IPWhiteList defines the IPWhiteList middleware configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareTcpSpecIpWhiteList.Initializer"></a>

```typescript
import { MiddlewareTcpSpecIpWhiteList } from 'cdk8s-constructs'

const middlewareTcpSpecIpWhiteList: MiddlewareTcpSpecIpWhiteList = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareTcpSpecIpWhiteList.property.sourceRange">sourceRange</a></code> | <code>string[]</code> | SourceRange defines the allowed IPs (or ranges of allowed IPs by using CIDR notation). |

---

##### `sourceRange`<sup>Optional</sup> <a name="sourceRange" id="cdk8s-constructs.MiddlewareTcpSpecIpWhiteList.property.sourceRange"></a>

```typescript
public readonly sourceRange: string[];
```

- *Type:* string[]

SourceRange defines the allowed IPs (or ranges of allowed IPs by using CIDR notation).

---

### NamespaceProps <a name="NamespaceProps" id="cdk8s-constructs.NamespaceProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.NamespaceProps.Initializer"></a>

```typescript
import { NamespaceProps } from 'cdk8s-constructs'

const namespaceProps: NamespaceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.NamespaceProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.NamespaceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### NamespaceSecretReference <a name="NamespaceSecretReference" id="cdk8s-constructs.NamespaceSecretReference"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.NamespaceSecretReference.Initializer"></a>

```typescript
import { NamespaceSecretReference } from 'cdk8s-constructs'

const namespaceSecretReference: NamespaceSecretReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.NamespaceSecretReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.NamespaceSecretReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.NamespaceSecretReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.NamespaceSecretReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `key`<sup>Optional</sup> <a name="key" id="cdk8s-constructs.NamespaceSecretReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.NamespaceSecretReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

### OnePasswordSecretStoreProps <a name="OnePasswordSecretStoreProps" id="cdk8s-constructs.OnePasswordSecretStoreProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.OnePasswordSecretStoreProps.Initializer"></a>

```typescript
import { OnePasswordSecretStoreProps } from 'cdk8s-constructs'

const onePasswordSecretStoreProps: OnePasswordSecretStoreProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.OnePasswordSecretStoreProps.property.connectHost">connectHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.OnePasswordSecretStoreProps.property.connectTokenRef">connectTokenRef</a></code> | <code><a href="#cdk8s-constructs.NamespaceSecretReference">NamespaceSecretReference</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.OnePasswordSecretStoreProps.property.vaults">vaults</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.OnePasswordSecretStoreProps.property.storeName">storeName</a></code> | <code>string</code> | *No description.* |

---

##### `connectHost`<sup>Required</sup> <a name="connectHost" id="cdk8s-constructs.OnePasswordSecretStoreProps.property.connectHost"></a>

```typescript
public readonly connectHost: string;
```

- *Type:* string

---

##### `connectTokenRef`<sup>Required</sup> <a name="connectTokenRef" id="cdk8s-constructs.OnePasswordSecretStoreProps.property.connectTokenRef"></a>

```typescript
public readonly connectTokenRef: NamespaceSecretReference;
```

- *Type:* <a href="#cdk8s-constructs.NamespaceSecretReference">NamespaceSecretReference</a>

---

##### `vaults`<sup>Required</sup> <a name="vaults" id="cdk8s-constructs.OnePasswordSecretStoreProps.property.vaults"></a>

```typescript
public readonly vaults: string[];
```

- *Type:* string[]

---

##### `storeName`<sup>Optional</sup> <a name="storeName" id="cdk8s-constructs.OnePasswordSecretStoreProps.property.storeName"></a>

```typescript
public readonly storeName: string;
```

- *Type:* string

---

### PalworldProps <a name="PalworldProps" id="cdk8s-constructs.PalworldProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.PalworldProps.Initializer"></a>

```typescript
import { PalworldProps } from 'cdk8s-constructs'

const palworldProps: PalworldProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.PalworldProps.property.serverAdminPassword">serverAdminPassword</a></code> | <code>cdk8s-plus-27.ISecret</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.serverData">serverData</a></code> | <code>cdk8s-plus-27.Volume</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.serverPassword">serverPassword</a></code> | <code>cdk8s-plus-27.ISecret</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.diificulty">diificulty</a></code> | <code><a href="#cdk8s-constructs.PalworldDifficulty">PalworldDifficulty</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.disableRcon">disableRcon</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.isCommunity">isCommunity</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.isPvp">isPvp</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.noUpdateOnStart">noUpdateOnStart</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.players">players</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.queryPort">queryPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.rconPort">rconPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.serverPort">serverPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.serviceType">serviceType</a></code> | <code>cdk8s-plus-27.ServiceType</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldProps.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |

---

##### `serverAdminPassword`<sup>Required</sup> <a name="serverAdminPassword" id="cdk8s-constructs.PalworldProps.property.serverAdminPassword"></a>

```typescript
public readonly serverAdminPassword: ISecret;
```

- *Type:* cdk8s-plus-27.ISecret

---

##### `serverData`<sup>Required</sup> <a name="serverData" id="cdk8s-constructs.PalworldProps.property.serverData"></a>

```typescript
public readonly serverData: Volume;
```

- *Type:* cdk8s-plus-27.Volume

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="cdk8s-constructs.PalworldProps.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `serverPassword`<sup>Required</sup> <a name="serverPassword" id="cdk8s-constructs.PalworldProps.property.serverPassword"></a>

```typescript
public readonly serverPassword: ISecret;
```

- *Type:* cdk8s-plus-27.ISecret

---

##### `diificulty`<sup>Optional</sup> <a name="diificulty" id="cdk8s-constructs.PalworldProps.property.diificulty"></a>

```typescript
public readonly diificulty: PalworldDifficulty;
```

- *Type:* <a href="#cdk8s-constructs.PalworldDifficulty">PalworldDifficulty</a>

---

##### `disableRcon`<sup>Optional</sup> <a name="disableRcon" id="cdk8s-constructs.PalworldProps.property.disableRcon"></a>

```typescript
public readonly disableRcon: boolean;
```

- *Type:* boolean

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.PalworldProps.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `isCommunity`<sup>Optional</sup> <a name="isCommunity" id="cdk8s-constructs.PalworldProps.property.isCommunity"></a>

```typescript
public readonly isCommunity: boolean;
```

- *Type:* boolean

---

##### `isPvp`<sup>Optional</sup> <a name="isPvp" id="cdk8s-constructs.PalworldProps.property.isPvp"></a>

```typescript
public readonly isPvp: boolean;
```

- *Type:* boolean

---

##### `noUpdateOnStart`<sup>Optional</sup> <a name="noUpdateOnStart" id="cdk8s-constructs.PalworldProps.property.noUpdateOnStart"></a>

```typescript
public readonly noUpdateOnStart: boolean;
```

- *Type:* boolean

---

##### `players`<sup>Optional</sup> <a name="players" id="cdk8s-constructs.PalworldProps.property.players"></a>

```typescript
public readonly players: number;
```

- *Type:* number

---

##### `queryPort`<sup>Optional</sup> <a name="queryPort" id="cdk8s-constructs.PalworldProps.property.queryPort"></a>

```typescript
public readonly queryPort: number;
```

- *Type:* number

---

##### `rconPort`<sup>Optional</sup> <a name="rconPort" id="cdk8s-constructs.PalworldProps.property.rconPort"></a>

```typescript
public readonly rconPort: number;
```

- *Type:* number

---

##### `serverPort`<sup>Optional</sup> <a name="serverPort" id="cdk8s-constructs.PalworldProps.property.serverPort"></a>

```typescript
public readonly serverPort: number;
```

- *Type:* number

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="cdk8s-constructs.PalworldProps.property.serviceType"></a>

```typescript
public readonly serviceType: ServiceType;
```

- *Type:* cdk8s-plus-27.ServiceType

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="cdk8s-constructs.PalworldProps.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

### PersistantVolumeProps <a name="PersistantVolumeProps" id="cdk8s-constructs.PersistantVolumeProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.PersistantVolumeProps.Initializer"></a>

```typescript
import { PersistantVolumeProps } from 'cdk8s-constructs'

const persistantVolumeProps: PersistantVolumeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.PersistantVolumeProps.property.size">size</a></code> | <code>cdk8s.Size</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PersistantVolumeProps.property.accessModes">accessModes</a></code> | <code>cdk8s-plus-minus.PersistentVolumeAccessMode[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PersistantVolumeProps.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |

---

##### `size`<sup>Required</sup> <a name="size" id="cdk8s-constructs.PersistantVolumeProps.property.size"></a>

```typescript
public readonly size: Size;
```

- *Type:* cdk8s.Size

---

##### `accessModes`<sup>Optional</sup> <a name="accessModes" id="cdk8s-constructs.PersistantVolumeProps.property.accessModes"></a>

```typescript
public readonly accessModes: PersistentVolumeAccessMode[];
```

- *Type:* cdk8s-plus-minus.PersistentVolumeAccessMode[]

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="cdk8s-constructs.PersistantVolumeProps.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

### PersistentVolumeClaimOptions <a name="PersistentVolumeClaimOptions" id="cdk8s-constructs.PersistentVolumeClaimOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.PersistentVolumeClaimOptions.Initializer"></a>

```typescript
import { PersistentVolumeClaimOptions } from 'cdk8s-constructs'

const persistentVolumeClaimOptions: PersistentVolumeClaimOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.PersistentVolumeClaimOptions.property.size">size</a></code> | <code>cdk8s.Size</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PersistentVolumeClaimOptions.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |

---

##### `size`<sup>Optional</sup> <a name="size" id="cdk8s-constructs.PersistentVolumeClaimOptions.property.size"></a>

```typescript
public readonly size: Size;
```

- *Type:* cdk8s.Size

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="cdk8s-constructs.PersistentVolumeClaimOptions.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

### PostgresDatabaseOptions <a name="PostgresDatabaseOptions" id="cdk8s-constructs.PostgresDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.PostgresDatabaseOptions.Initializer"></a>

```typescript
import { PostgresDatabaseOptions } from 'cdk8s-constructs'

const postgresDatabaseOptions: PostgresDatabaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.PostgresDatabaseOptions.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PostgresDatabaseOptions.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PostgresDatabaseOptions.property.password">password</a></code> | <code>cdk8s-plus-minus.ISecret</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PostgresDatabaseOptions.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PostgresDatabaseOptions.property.port">port</a></code> | <code>number</code> | *No description.* |

---

##### `database`<sup>Required</sup> <a name="database" id="cdk8s-constructs.PostgresDatabaseOptions.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="cdk8s-constructs.PostgresDatabaseOptions.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="cdk8s-constructs.PostgresDatabaseOptions.property.password"></a>

```typescript
public readonly password: ISecret;
```

- *Type:* cdk8s-plus-minus.ISecret

---

##### `user`<sup>Required</sup> <a name="user" id="cdk8s-constructs.PostgresDatabaseOptions.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk8s-constructs.PostgresDatabaseOptions.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

### ProbeOptions <a name="ProbeOptions" id="cdk8s-constructs.ProbeOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ProbeOptions.Initializer"></a>

```typescript
import { ProbeOptions } from 'cdk8s-constructs'

const probeOptions: ProbeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ProbeOptions.property.liveness">liveness</a></code> | <code>cdk8s-plus-minus.Probe</code> | *No description.* |

---

##### `liveness`<sup>Optional</sup> <a name="liveness" id="cdk8s-constructs.ProbeOptions.property.liveness"></a>

```typescript
public readonly liveness: Probe;
```

- *Type:* cdk8s-plus-minus.Probe

---

### PrometheusRuleGroupOptions <a name="PrometheusRuleGroupOptions" id="cdk8s-constructs.PrometheusRuleGroupOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.PrometheusRuleGroupOptions.Initializer"></a>

```typescript
import { PrometheusRuleGroupOptions } from 'cdk8s-constructs'

const prometheusRuleGroupOptions: PrometheusRuleGroupOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.PrometheusRuleGroupOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PrometheusRuleGroupOptions.property.rules">rules</a></code> | <code><a href="#cdk8s-constructs.PrometheusRuleGroupRuleOptions">PrometheusRuleGroupRuleOptions</a>[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.PrometheusRuleGroupOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="cdk8s-constructs.PrometheusRuleGroupOptions.property.rules"></a>

```typescript
public readonly rules: PrometheusRuleGroupRuleOptions[];
```

- *Type:* <a href="#cdk8s-constructs.PrometheusRuleGroupRuleOptions">PrometheusRuleGroupRuleOptions</a>[]

---

### PrometheusRuleGroupRuleOptions <a name="PrometheusRuleGroupRuleOptions" id="cdk8s-constructs.PrometheusRuleGroupRuleOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.PrometheusRuleGroupRuleOptions.Initializer"></a>

```typescript
import { PrometheusRuleGroupRuleOptions } from 'cdk8s-constructs'

const prometheusRuleGroupRuleOptions: PrometheusRuleGroupRuleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.PrometheusRuleGroupRuleOptions.property.alert">alert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PrometheusRuleGroupRuleOptions.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PrometheusRuleGroupRuleOptions.property.for">for</a></code> | <code>cdk8s.Duration</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PrometheusRuleGroupRuleOptions.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#cdk8s-constructs.PrometheusRuleGroupRuleOptions.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `alert`<sup>Required</sup> <a name="alert" id="cdk8s-constructs.PrometheusRuleGroupRuleOptions.property.alert"></a>

```typescript
public readonly alert: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="cdk8s-constructs.PrometheusRuleGroupRuleOptions.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `for`<sup>Required</sup> <a name="for" id="cdk8s-constructs.PrometheusRuleGroupRuleOptions.property.for"></a>

```typescript
public readonly for: Duration;
```

- *Type:* cdk8s.Duration

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="cdk8s-constructs.PrometheusRuleGroupRuleOptions.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="cdk8s-constructs.PrometheusRuleGroupRuleOptions.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

### PrometheusRuleProps <a name="PrometheusRuleProps" id="cdk8s-constructs.PrometheusRuleProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.PrometheusRuleProps.Initializer"></a>

```typescript
import { PrometheusRuleProps } from 'cdk8s-constructs'

const prometheusRuleProps: PrometheusRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.PrometheusRuleProps.property.groups">groups</a></code> | <code><a href="#cdk8s-constructs.PrometheusRuleGroupOptions">PrometheusRuleGroupOptions</a>[]</code> | *No description.* |

---

##### `groups`<sup>Required</sup> <a name="groups" id="cdk8s-constructs.PrometheusRuleProps.property.groups"></a>

```typescript
public readonly groups: PrometheusRuleGroupOptions[];
```

- *Type:* <a href="#cdk8s-constructs.PrometheusRuleGroupOptions">PrometheusRuleGroupOptions</a>[]

---

### ProviderProps <a name="ProviderProps" id="cdk8s-constructs.ProviderProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ProviderProps.Initializer"></a>

```typescript
import { ProviderProps } from 'cdk8s-constructs'

const providerProps: ProviderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ProviderProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ProviderProps.property.package">package</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ProviderProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `package`<sup>Required</sup> <a name="package" id="cdk8s-constructs.ProviderProps.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

---

### RequesterrProps <a name="RequesterrProps" id="cdk8s-constructs.RequesterrProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.RequesterrProps.Initializer"></a>

```typescript
import { RequesterrProps } from 'cdk8s-constructs'

const requesterrProps: RequesterrProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.RequesterrProps.property.config">config</a></code> | <code><a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.RequesterrProps.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.RequesterrProps.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |

---

##### `config`<sup>Required</sup> <a name="config" id="cdk8s-constructs.RequesterrProps.property.config"></a>

```typescript
public readonly config: PersistentVolumeClaimOptions;
```

- *Type:* <a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.RequesterrProps.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngressOptions;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a>

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.RequesterrProps.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

### ResilioSyncProps <a name="ResilioSyncProps" id="cdk8s-constructs.ResilioSyncProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ResilioSyncProps.Initializer"></a>

```typescript
import { ResilioSyncProps } from 'cdk8s-constructs'

const resilioSyncProps: ResilioSyncProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ResilioSyncProps.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ResilioSyncProps.property.storage">storage</a></code> | <code><a href="#cdk8s-constructs.ResilioSyncStorageProps">ResilioSyncStorageProps</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ResilioSyncProps.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.ResilioSyncProps.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngressOptions;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="cdk8s-constructs.ResilioSyncProps.property.storage"></a>

```typescript
public readonly storage: ResilioSyncStorageProps;
```

- *Type:* <a href="#cdk8s-constructs.ResilioSyncStorageProps">ResilioSyncStorageProps</a>

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.ResilioSyncProps.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

### ResilioSyncStorageProps <a name="ResilioSyncStorageProps" id="cdk8s-constructs.ResilioSyncStorageProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ResilioSyncStorageProps.Initializer"></a>

```typescript
import { ResilioSyncStorageProps } from 'cdk8s-constructs'

const resilioSyncStorageProps: ResilioSyncStorageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ResilioSyncStorageProps.property.config">config</a></code> | <code><a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ResilioSyncStorageProps.property.sync">sync</a></code> | <code>cdk8s-plus-minus.Volume</code> | *No description.* |

---

##### `config`<sup>Required</sup> <a name="config" id="cdk8s-constructs.ResilioSyncStorageProps.property.config"></a>

```typescript
public readonly config: PersistentVolumeClaimOptions;
```

- *Type:* <a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a>

---

##### `sync`<sup>Required</sup> <a name="sync" id="cdk8s-constructs.ResilioSyncStorageProps.property.sync"></a>

```typescript
public readonly sync: Volume;
```

- *Type:* cdk8s-plus-minus.Volume

---

### SecretReference <a name="SecretReference" id="cdk8s-constructs.SecretReference"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.SecretReference.Initializer"></a>

```typescript
import { SecretReference } from 'cdk8s-constructs'

const secretReference: SecretReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.SecretReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.SecretReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.SecretReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.SecretReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `key`<sup>Optional</sup> <a name="key" id="cdk8s-constructs.SecretReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.SecretReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

### ServersTransportProps <a name="ServersTransportProps" id="cdk8s-constructs.ServersTransportProps"></a>

ServersTransport is the CRD implementation of a ServersTransport.

If no serversTransport is specified, the default@internal will be used. The default@internal serversTransport is created from the static configuration. More info: https://doc.traefik.io/traefik/v2.10/routing/services/#serverstransport_1

#### Initializer <a name="Initializer" id="cdk8s-constructs.ServersTransportProps.Initializer"></a>

```typescript
import { ServersTransportProps } from 'cdk8s-constructs'

const serversTransportProps: ServersTransportProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransportProps.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ServersTransportProps.property.spec">spec</a></code> | <code><a href="#cdk8s-constructs.ServersTransportSpec">ServersTransportSpec</a></code> | ServersTransportSpec defines the desired state of a ServersTransport. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.ServersTransportProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

---

##### `spec`<sup>Required</sup> <a name="spec" id="cdk8s-constructs.ServersTransportProps.property.spec"></a>

```typescript
public readonly spec: ServersTransportSpec;
```

- *Type:* <a href="#cdk8s-constructs.ServersTransportSpec">ServersTransportSpec</a>

ServersTransportSpec defines the desired state of a ServersTransport.

---

### ServersTransportSpec <a name="ServersTransportSpec" id="cdk8s-constructs.ServersTransportSpec"></a>

ServersTransportSpec defines the desired state of a ServersTransport.

#### Initializer <a name="Initializer" id="cdk8s-constructs.ServersTransportSpec.Initializer"></a>

```typescript
import { ServersTransportSpec } from 'cdk8s-constructs'

const serversTransportSpec: ServersTransportSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransportSpec.property.certificatesSecrets">certificatesSecrets</a></code> | <code>string[]</code> | CertificatesSecrets defines a list of secret storing client certificates for mTLS. |
| <code><a href="#cdk8s-constructs.ServersTransportSpec.property.disableHttp2">disableHttp2</a></code> | <code>boolean</code> | DisableHTTP2 disables HTTP/2 for connections with backend servers. |
| <code><a href="#cdk8s-constructs.ServersTransportSpec.property.forwardingTimeouts">forwardingTimeouts</a></code> | <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeouts">ServersTransportSpecForwardingTimeouts</a></code> | ForwardingTimeouts defines the timeouts for requests forwarded to the backend servers. |
| <code><a href="#cdk8s-constructs.ServersTransportSpec.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean</code> | InsecureSkipVerify disables SSL certificate verification. |
| <code><a href="#cdk8s-constructs.ServersTransportSpec.property.maxIdleConnsPerHost">maxIdleConnsPerHost</a></code> | <code>number</code> | MaxIdleConnsPerHost controls the maximum idle (keep-alive) to keep per-host. |
| <code><a href="#cdk8s-constructs.ServersTransportSpec.property.peerCertUri">peerCertUri</a></code> | <code>string</code> | PeerCertURI defines the peer cert URI used to match against SAN URI during the peer certificate verification. |
| <code><a href="#cdk8s-constructs.ServersTransportSpec.property.rootCAsSecrets">rootCAsSecrets</a></code> | <code>string[]</code> | RootCAsSecrets defines a list of CA secret used to validate self-signed certificate. |
| <code><a href="#cdk8s-constructs.ServersTransportSpec.property.serverName">serverName</a></code> | <code>string</code> | ServerName defines the server name used to contact the server. |

---

##### `certificatesSecrets`<sup>Optional</sup> <a name="certificatesSecrets" id="cdk8s-constructs.ServersTransportSpec.property.certificatesSecrets"></a>

```typescript
public readonly certificatesSecrets: string[];
```

- *Type:* string[]

CertificatesSecrets defines a list of secret storing client certificates for mTLS.

---

##### `disableHttp2`<sup>Optional</sup> <a name="disableHttp2" id="cdk8s-constructs.ServersTransportSpec.property.disableHttp2"></a>

```typescript
public readonly disableHttp2: boolean;
```

- *Type:* boolean

DisableHTTP2 disables HTTP/2 for connections with backend servers.

---

##### `forwardingTimeouts`<sup>Optional</sup> <a name="forwardingTimeouts" id="cdk8s-constructs.ServersTransportSpec.property.forwardingTimeouts"></a>

```typescript
public readonly forwardingTimeouts: ServersTransportSpecForwardingTimeouts;
```

- *Type:* <a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeouts">ServersTransportSpecForwardingTimeouts</a>

ForwardingTimeouts defines the timeouts for requests forwarded to the backend servers.

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="cdk8s-constructs.ServersTransportSpec.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean;
```

- *Type:* boolean

InsecureSkipVerify disables SSL certificate verification.

---

##### `maxIdleConnsPerHost`<sup>Optional</sup> <a name="maxIdleConnsPerHost" id="cdk8s-constructs.ServersTransportSpec.property.maxIdleConnsPerHost"></a>

```typescript
public readonly maxIdleConnsPerHost: number;
```

- *Type:* number

MaxIdleConnsPerHost controls the maximum idle (keep-alive) to keep per-host.

---

##### `peerCertUri`<sup>Optional</sup> <a name="peerCertUri" id="cdk8s-constructs.ServersTransportSpec.property.peerCertUri"></a>

```typescript
public readonly peerCertUri: string;
```

- *Type:* string

PeerCertURI defines the peer cert URI used to match against SAN URI during the peer certificate verification.

---

##### `rootCAsSecrets`<sup>Optional</sup> <a name="rootCAsSecrets" id="cdk8s-constructs.ServersTransportSpec.property.rootCAsSecrets"></a>

```typescript
public readonly rootCAsSecrets: string[];
```

- *Type:* string[]

RootCAsSecrets defines a list of CA secret used to validate self-signed certificate.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="cdk8s-constructs.ServersTransportSpec.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

ServerName defines the server name used to contact the server.

---

### ServersTransportSpecForwardingTimeouts <a name="ServersTransportSpecForwardingTimeouts" id="cdk8s-constructs.ServersTransportSpecForwardingTimeouts"></a>

ForwardingTimeouts defines the timeouts for requests forwarded to the backend servers.

#### Initializer <a name="Initializer" id="cdk8s-constructs.ServersTransportSpecForwardingTimeouts.Initializer"></a>

```typescript
import { ServersTransportSpecForwardingTimeouts } from 'cdk8s-constructs'

const serversTransportSpecForwardingTimeouts: ServersTransportSpecForwardingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeouts.property.dialTimeout">dialTimeout</a></code> | <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsDialTimeout">ServersTransportSpecForwardingTimeoutsDialTimeout</a></code> | DialTimeout is the amount of time to wait until a connection to a backend server can be established. |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeouts.property.idleConnTimeout">idleConnTimeout</a></code> | <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsIdleConnTimeout">ServersTransportSpecForwardingTimeoutsIdleConnTimeout</a></code> | IdleConnTimeout is the maximum period for which an idle HTTP keep-alive connection will remain open before closing itself. |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeouts.property.pingTimeout">pingTimeout</a></code> | <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsPingTimeout">ServersTransportSpecForwardingTimeoutsPingTimeout</a></code> | PingTimeout is the timeout after which the HTTP/2 connection will be closed if a response to ping is not received. |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeouts.property.readIdleTimeout">readIdleTimeout</a></code> | <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsReadIdleTimeout">ServersTransportSpecForwardingTimeoutsReadIdleTimeout</a></code> | ReadIdleTimeout is the timeout after which a health check using ping frame will be carried out if no frame is received on the HTTP/2 connection. |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeouts.property.responseHeaderTimeout">responseHeaderTimeout</a></code> | <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout">ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout</a></code> | ResponseHeaderTimeout is the amount of time to wait for a server's response headers after fully writing the request (including its body, if any). |

---

##### `dialTimeout`<sup>Optional</sup> <a name="dialTimeout" id="cdk8s-constructs.ServersTransportSpecForwardingTimeouts.property.dialTimeout"></a>

```typescript
public readonly dialTimeout: ServersTransportSpecForwardingTimeoutsDialTimeout;
```

- *Type:* <a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsDialTimeout">ServersTransportSpecForwardingTimeoutsDialTimeout</a>

DialTimeout is the amount of time to wait until a connection to a backend server can be established.

---

##### `idleConnTimeout`<sup>Optional</sup> <a name="idleConnTimeout" id="cdk8s-constructs.ServersTransportSpecForwardingTimeouts.property.idleConnTimeout"></a>

```typescript
public readonly idleConnTimeout: ServersTransportSpecForwardingTimeoutsIdleConnTimeout;
```

- *Type:* <a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsIdleConnTimeout">ServersTransportSpecForwardingTimeoutsIdleConnTimeout</a>

IdleConnTimeout is the maximum period for which an idle HTTP keep-alive connection will remain open before closing itself.

---

##### `pingTimeout`<sup>Optional</sup> <a name="pingTimeout" id="cdk8s-constructs.ServersTransportSpecForwardingTimeouts.property.pingTimeout"></a>

```typescript
public readonly pingTimeout: ServersTransportSpecForwardingTimeoutsPingTimeout;
```

- *Type:* <a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsPingTimeout">ServersTransportSpecForwardingTimeoutsPingTimeout</a>

PingTimeout is the timeout after which the HTTP/2 connection will be closed if a response to ping is not received.

---

##### `readIdleTimeout`<sup>Optional</sup> <a name="readIdleTimeout" id="cdk8s-constructs.ServersTransportSpecForwardingTimeouts.property.readIdleTimeout"></a>

```typescript
public readonly readIdleTimeout: ServersTransportSpecForwardingTimeoutsReadIdleTimeout;
```

- *Type:* <a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsReadIdleTimeout">ServersTransportSpecForwardingTimeoutsReadIdleTimeout</a>

ReadIdleTimeout is the timeout after which a health check using ping frame will be carried out if no frame is received on the HTTP/2 connection.

---

##### `responseHeaderTimeout`<sup>Optional</sup> <a name="responseHeaderTimeout" id="cdk8s-constructs.ServersTransportSpecForwardingTimeouts.property.responseHeaderTimeout"></a>

```typescript
public readonly responseHeaderTimeout: ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout;
```

- *Type:* <a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout">ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout</a>

ResponseHeaderTimeout is the amount of time to wait for a server's response headers after fully writing the request (including its body, if any).

---

### ServiceMonitorEndpoint <a name="ServiceMonitorEndpoint" id="cdk8s-constructs.ServiceMonitorEndpoint"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ServiceMonitorEndpoint.Initializer"></a>

```typescript
import { ServiceMonitorEndpoint } from 'cdk8s-constructs'

const serviceMonitorEndpoint: ServiceMonitorEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServiceMonitorEndpoint.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ServiceMonitorEndpoint.property.interval">interval</a></code> | <code>cdk8s.Duration</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ServiceMonitorEndpoint.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ServiceMonitorEndpoint.property.scrapeTimeout">scrapeTimeout</a></code> | <code>cdk8s.Duration</code> | *No description.* |

---

##### `port`<sup>Required</sup> <a name="port" id="cdk8s-constructs.ServiceMonitorEndpoint.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `interval`<sup>Optional</sup> <a name="interval" id="cdk8s-constructs.ServiceMonitorEndpoint.property.interval"></a>

```typescript
public readonly interval: Duration;
```

- *Type:* cdk8s.Duration

---

##### `path`<sup>Optional</sup> <a name="path" id="cdk8s-constructs.ServiceMonitorEndpoint.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `scrapeTimeout`<sup>Optional</sup> <a name="scrapeTimeout" id="cdk8s-constructs.ServiceMonitorEndpoint.property.scrapeTimeout"></a>

```typescript
public readonly scrapeTimeout: Duration;
```

- *Type:* cdk8s.Duration

---

### ServiceMonitorProps <a name="ServiceMonitorProps" id="cdk8s-constructs.ServiceMonitorProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.ServiceMonitorProps.Initializer"></a>

```typescript
import { ServiceMonitorProps } from 'cdk8s-constructs'

const serviceMonitorProps: ServiceMonitorProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServiceMonitorProps.property.endpoints">endpoints</a></code> | <code><a href="#cdk8s-constructs.ServiceMonitorEndpoint">ServiceMonitorEndpoint</a>[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ServiceMonitorProps.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="cdk8s-constructs.ServiceMonitorProps.property.endpoints"></a>

```typescript
public readonly endpoints: ServiceMonitorEndpoint[];
```

- *Type:* <a href="#cdk8s-constructs.ServiceMonitorEndpoint">ServiceMonitorEndpoint</a>[]

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="cdk8s-constructs.ServiceMonitorProps.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

### SyncthingProps <a name="SyncthingProps" id="cdk8s-constructs.SyncthingProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.SyncthingProps.Initializer"></a>

```typescript
import { SyncthingProps } from 'cdk8s-constructs'

const syncthingProps: SyncthingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.SyncthingProps.property.ingress">ingress</a></code> | <code><a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.SyncthingProps.property.storage">storage</a></code> | <code><a href="#cdk8s-constructs.SyncthingStorageProps">SyncthingStorageProps</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.SyncthingProps.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="cdk8s-constructs.SyncthingProps.property.ingress"></a>

```typescript
public readonly ingress: HomelabIngressOptions;
```

- *Type:* <a href="#cdk8s-constructs.HomelabIngressOptions">HomelabIngressOptions</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="cdk8s-constructs.SyncthingProps.property.storage"></a>

```typescript
public readonly storage: SyncthingStorageProps;
```

- *Type:* <a href="#cdk8s-constructs.SyncthingStorageProps">SyncthingStorageProps</a>

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.SyncthingProps.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

### SyncthingStorageProps <a name="SyncthingStorageProps" id="cdk8s-constructs.SyncthingStorageProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.SyncthingStorageProps.Initializer"></a>

```typescript
import { SyncthingStorageProps } from 'cdk8s-constructs'

const syncthingStorageProps: SyncthingStorageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.SyncthingStorageProps.property.config">config</a></code> | <code><a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.SyncthingStorageProps.property.sync">sync</a></code> | <code>cdk8s-plus-minus.Volume</code> | *No description.* |

---

##### `config`<sup>Required</sup> <a name="config" id="cdk8s-constructs.SyncthingStorageProps.property.config"></a>

```typescript
public readonly config: PersistentVolumeClaimOptions;
```

- *Type:* <a href="#cdk8s-constructs.PersistentVolumeClaimOptions">PersistentVolumeClaimOptions</a>

---

##### `sync`<sup>Required</sup> <a name="sync" id="cdk8s-constructs.SyncthingStorageProps.property.sync"></a>

```typescript
public readonly sync: Volume;
```

- *Type:* cdk8s-plus-minus.Volume

---

### TandoorDatabaseOptions <a name="TandoorDatabaseOptions" id="cdk8s-constructs.TandoorDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.TandoorDatabaseOptions.Initializer"></a>

```typescript
import { TandoorDatabaseOptions } from 'cdk8s-constructs'

const tandoorDatabaseOptions: TandoorDatabaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TandoorDatabaseOptions.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TandoorDatabaseOptions.property.engine">engine</a></code> | <code><a href="#cdk8s-constructs.TandoorDatabaseEngine">TandoorDatabaseEngine</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.TandoorDatabaseOptions.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TandoorDatabaseOptions.property.password">password</a></code> | <code>cdk8s-plus-minus.ISecret</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TandoorDatabaseOptions.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TandoorDatabaseOptions.property.port">port</a></code> | <code>number</code> | *No description.* |

---

##### `database`<sup>Required</sup> <a name="database" id="cdk8s-constructs.TandoorDatabaseOptions.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="cdk8s-constructs.TandoorDatabaseOptions.property.engine"></a>

```typescript
public readonly engine: TandoorDatabaseEngine;
```

- *Type:* <a href="#cdk8s-constructs.TandoorDatabaseEngine">TandoorDatabaseEngine</a>

---

##### `host`<sup>Required</sup> <a name="host" id="cdk8s-constructs.TandoorDatabaseOptions.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="cdk8s-constructs.TandoorDatabaseOptions.property.password"></a>

```typescript
public readonly password: ISecret;
```

- *Type:* cdk8s-plus-minus.ISecret

---

##### `user`<sup>Required</sup> <a name="user" id="cdk8s-constructs.TandoorDatabaseOptions.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk8s-constructs.TandoorDatabaseOptions.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

### TandoorProps <a name="TandoorProps" id="cdk8s-constructs.TandoorProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.TandoorProps.Initializer"></a>

```typescript
import { TandoorProps } from 'cdk8s-constructs'

const tandoorProps: TandoorProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TandoorProps.property.database">database</a></code> | <code><a href="#cdk8s-constructs.TandoorDatabaseOptions">TandoorDatabaseOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.TandoorProps.property.mediaFilesVolume">mediaFilesVolume</a></code> | <code>cdk8s-plus-minus.Volume</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TandoorProps.property.secretKey">secretKey</a></code> | <code>cdk8s-plus-minus.ISecret</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TandoorProps.property.staticFilesVolume">staticFilesVolume</a></code> | <code>cdk8s-plus-minus.Volume</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TandoorProps.property.enableMetrics">enableMetrics</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TandoorProps.property.enableSignUp">enableSignUp</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TandoorProps.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TandoorProps.property.serviceType">serviceType</a></code> | <code>cdk8s-plus-minus.ServiceType</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TandoorProps.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |

---

##### `database`<sup>Required</sup> <a name="database" id="cdk8s-constructs.TandoorProps.property.database"></a>

```typescript
public readonly database: TandoorDatabaseOptions;
```

- *Type:* <a href="#cdk8s-constructs.TandoorDatabaseOptions">TandoorDatabaseOptions</a>

---

##### `mediaFilesVolume`<sup>Required</sup> <a name="mediaFilesVolume" id="cdk8s-constructs.TandoorProps.property.mediaFilesVolume"></a>

```typescript
public readonly mediaFilesVolume: Volume;
```

- *Type:* cdk8s-plus-minus.Volume

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="cdk8s-constructs.TandoorProps.property.secretKey"></a>

```typescript
public readonly secretKey: ISecret;
```

- *Type:* cdk8s-plus-minus.ISecret

---

##### `staticFilesVolume`<sup>Required</sup> <a name="staticFilesVolume" id="cdk8s-constructs.TandoorProps.property.staticFilesVolume"></a>

```typescript
public readonly staticFilesVolume: Volume;
```

- *Type:* cdk8s-plus-minus.Volume

---

##### `enableMetrics`<sup>Optional</sup> <a name="enableMetrics" id="cdk8s-constructs.TandoorProps.property.enableMetrics"></a>

```typescript
public readonly enableMetrics: boolean;
```

- *Type:* boolean

---

##### `enableSignUp`<sup>Optional</sup> <a name="enableSignUp" id="cdk8s-constructs.TandoorProps.property.enableSignUp"></a>

```typescript
public readonly enableSignUp: boolean;
```

- *Type:* boolean

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="cdk8s-constructs.TandoorProps.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="cdk8s-constructs.TandoorProps.property.serviceType"></a>

```typescript
public readonly serviceType: ServiceType;
```

- *Type:* cdk8s-plus-minus.ServiceType

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="cdk8s-constructs.TandoorProps.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

### TlsOptionProps <a name="TlsOptionProps" id="cdk8s-constructs.TlsOptionProps"></a>

TLSOption is the CRD implementation of a Traefik TLS Option, allowing to configure some parameters of the TLS connection.

More info: https://doc.traefik.io/traefik/v2.10/https/tls/#tls-options

#### Initializer <a name="Initializer" id="cdk8s-constructs.TlsOptionProps.Initializer"></a>

```typescript
import { TlsOptionProps } from 'cdk8s-constructs'

const tlsOptionProps: TlsOptionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsOptionProps.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TlsOptionProps.property.spec">spec</a></code> | <code><a href="#cdk8s-constructs.TlsOptionSpec">TlsOptionSpec</a></code> | TLSOptionSpec defines the desired state of a TLSOption. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.TlsOptionProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

---

##### `spec`<sup>Required</sup> <a name="spec" id="cdk8s-constructs.TlsOptionProps.property.spec"></a>

```typescript
public readonly spec: TlsOptionSpec;
```

- *Type:* <a href="#cdk8s-constructs.TlsOptionSpec">TlsOptionSpec</a>

TLSOptionSpec defines the desired state of a TLSOption.

---

### TlsOptionSpec <a name="TlsOptionSpec" id="cdk8s-constructs.TlsOptionSpec"></a>

TLSOptionSpec defines the desired state of a TLSOption.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TlsOptionSpec.Initializer"></a>

```typescript
import { TlsOptionSpec } from 'cdk8s-constructs'

const tlsOptionSpec: TlsOptionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsOptionSpec.property.alpnProtocols">alpnProtocols</a></code> | <code>string[]</code> | ALPNProtocols defines the list of supported application level protocols for the TLS handshake, in order of preference. |
| <code><a href="#cdk8s-constructs.TlsOptionSpec.property.cipherSuites">cipherSuites</a></code> | <code>string[]</code> | CipherSuites defines the list of supported cipher suites for TLS versions up to TLS 1.2. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#cipher-suites. |
| <code><a href="#cdk8s-constructs.TlsOptionSpec.property.clientAuth">clientAuth</a></code> | <code><a href="#cdk8s-constructs.TlsOptionSpecClientAuth">TlsOptionSpecClientAuth</a></code> | ClientAuth defines the server's policy for TLS Client Authentication. |
| <code><a href="#cdk8s-constructs.TlsOptionSpec.property.curvePreferences">curvePreferences</a></code> | <code>string[]</code> | CurvePreferences defines the preferred elliptic curves in a specific order. |
| <code><a href="#cdk8s-constructs.TlsOptionSpec.property.maxVersion">maxVersion</a></code> | <code>string</code> | MaxVersion defines the maximum TLS version that Traefik will accept. |
| <code><a href="#cdk8s-constructs.TlsOptionSpec.property.minVersion">minVersion</a></code> | <code>string</code> | MinVersion defines the minimum TLS version that Traefik will accept. |
| <code><a href="#cdk8s-constructs.TlsOptionSpec.property.preferServerCipherSuites">preferServerCipherSuites</a></code> | <code>boolean</code> | PreferServerCipherSuites defines whether the server chooses a cipher suite among his own instead of among the client's. |
| <code><a href="#cdk8s-constructs.TlsOptionSpec.property.sniStrict">sniStrict</a></code> | <code>boolean</code> | SniStrict defines whether Traefik allows connections from clients connections that do not specify a server_name extension. |

---

##### `alpnProtocols`<sup>Optional</sup> <a name="alpnProtocols" id="cdk8s-constructs.TlsOptionSpec.property.alpnProtocols"></a>

```typescript
public readonly alpnProtocols: string[];
```

- *Type:* string[]

ALPNProtocols defines the list of supported application level protocols for the TLS handshake, in order of preference.

More info: https://doc.traefik.io/traefik/v2.10/https/tls/#alpn-protocols

---

##### `cipherSuites`<sup>Optional</sup> <a name="cipherSuites" id="cdk8s-constructs.TlsOptionSpec.property.cipherSuites"></a>

```typescript
public readonly cipherSuites: string[];
```

- *Type:* string[]

CipherSuites defines the list of supported cipher suites for TLS versions up to TLS 1.2. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#cipher-suites.

---

##### `clientAuth`<sup>Optional</sup> <a name="clientAuth" id="cdk8s-constructs.TlsOptionSpec.property.clientAuth"></a>

```typescript
public readonly clientAuth: TlsOptionSpecClientAuth;
```

- *Type:* <a href="#cdk8s-constructs.TlsOptionSpecClientAuth">TlsOptionSpecClientAuth</a>

ClientAuth defines the server's policy for TLS Client Authentication.

---

##### `curvePreferences`<sup>Optional</sup> <a name="curvePreferences" id="cdk8s-constructs.TlsOptionSpec.property.curvePreferences"></a>

```typescript
public readonly curvePreferences: string[];
```

- *Type:* string[]

CurvePreferences defines the preferred elliptic curves in a specific order.

More info: https://doc.traefik.io/traefik/v2.10/https/tls/#curve-preferences

---

##### `maxVersion`<sup>Optional</sup> <a name="maxVersion" id="cdk8s-constructs.TlsOptionSpec.property.maxVersion"></a>

```typescript
public readonly maxVersion: string;
```

- *Type:* string

MaxVersion defines the maximum TLS version that Traefik will accept.

Possible values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13. Default: None.

---

##### `minVersion`<sup>Optional</sup> <a name="minVersion" id="cdk8s-constructs.TlsOptionSpec.property.minVersion"></a>

```typescript
public readonly minVersion: string;
```

- *Type:* string

MinVersion defines the minimum TLS version that Traefik will accept.

Possible values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13. Default: VersionTLS10.

---

##### `preferServerCipherSuites`<sup>Optional</sup> <a name="preferServerCipherSuites" id="cdk8s-constructs.TlsOptionSpec.property.preferServerCipherSuites"></a>

```typescript
public readonly preferServerCipherSuites: boolean;
```

- *Type:* boolean

PreferServerCipherSuites defines whether the server chooses a cipher suite among his own instead of among the client's.

It is enabled automatically when minVersion or maxVersion is set. Deprecated: https://github.com/golang/go/issues/45430

---

##### `sniStrict`<sup>Optional</sup> <a name="sniStrict" id="cdk8s-constructs.TlsOptionSpec.property.sniStrict"></a>

```typescript
public readonly sniStrict: boolean;
```

- *Type:* boolean

SniStrict defines whether Traefik allows connections from clients connections that do not specify a server_name extension.

---

### TlsOptionSpecClientAuth <a name="TlsOptionSpecClientAuth" id="cdk8s-constructs.TlsOptionSpecClientAuth"></a>

ClientAuth defines the server's policy for TLS Client Authentication.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TlsOptionSpecClientAuth.Initializer"></a>

```typescript
import { TlsOptionSpecClientAuth } from 'cdk8s-constructs'

const tlsOptionSpecClientAuth: TlsOptionSpecClientAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsOptionSpecClientAuth.property.clientAuthType">clientAuthType</a></code> | <code><a href="#cdk8s-constructs.TlsOptionSpecClientAuthClientAuthType">TlsOptionSpecClientAuthClientAuthType</a></code> | ClientAuthType defines the client authentication type to apply. |
| <code><a href="#cdk8s-constructs.TlsOptionSpecClientAuth.property.secretNames">secretNames</a></code> | <code>string[]</code> | SecretNames defines the names of the referenced Kubernetes Secret storing certificate details. |

---

##### `clientAuthType`<sup>Optional</sup> <a name="clientAuthType" id="cdk8s-constructs.TlsOptionSpecClientAuth.property.clientAuthType"></a>

```typescript
public readonly clientAuthType: TlsOptionSpecClientAuthClientAuthType;
```

- *Type:* <a href="#cdk8s-constructs.TlsOptionSpecClientAuthClientAuthType">TlsOptionSpecClientAuthClientAuthType</a>

ClientAuthType defines the client authentication type to apply.

---

##### `secretNames`<sup>Optional</sup> <a name="secretNames" id="cdk8s-constructs.TlsOptionSpecClientAuth.property.secretNames"></a>

```typescript
public readonly secretNames: string[];
```

- *Type:* string[]

SecretNames defines the names of the referenced Kubernetes Secret storing certificate details.

---

### TlsStoreProps <a name="TlsStoreProps" id="cdk8s-constructs.TlsStoreProps"></a>

TLSStore is the CRD implementation of a Traefik TLS Store.

For the time being, only the TLSStore named default is supported. This means that you cannot have two stores that are named default in different Kubernetes namespaces. More info: https://doc.traefik.io/traefik/v2.10/https/tls/#certificates-stores

#### Initializer <a name="Initializer" id="cdk8s-constructs.TlsStoreProps.Initializer"></a>

```typescript
import { TlsStoreProps } from 'cdk8s-constructs'

const tlsStoreProps: TlsStoreProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsStoreProps.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TlsStoreProps.property.spec">spec</a></code> | <code><a href="#cdk8s-constructs.TlsStoreSpec">TlsStoreSpec</a></code> | TLSStoreSpec defines the desired state of a TLSStore. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.TlsStoreProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

---

##### `spec`<sup>Required</sup> <a name="spec" id="cdk8s-constructs.TlsStoreProps.property.spec"></a>

```typescript
public readonly spec: TlsStoreSpec;
```

- *Type:* <a href="#cdk8s-constructs.TlsStoreSpec">TlsStoreSpec</a>

TLSStoreSpec defines the desired state of a TLSStore.

---

### TlsStoreSpec <a name="TlsStoreSpec" id="cdk8s-constructs.TlsStoreSpec"></a>

TLSStoreSpec defines the desired state of a TLSStore.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TlsStoreSpec.Initializer"></a>

```typescript
import { TlsStoreSpec } from 'cdk8s-constructs'

const tlsStoreSpec: TlsStoreSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsStoreSpec.property.certificates">certificates</a></code> | <code><a href="#cdk8s-constructs.TlsStoreSpecCertificates">TlsStoreSpecCertificates</a>[]</code> | Certificates is a list of secret names, each secret holding a key/certificate pair to add to the store. |
| <code><a href="#cdk8s-constructs.TlsStoreSpec.property.defaultCertificate">defaultCertificate</a></code> | <code><a href="#cdk8s-constructs.TlsStoreSpecDefaultCertificate">TlsStoreSpecDefaultCertificate</a></code> | DefaultCertificate defines the default certificate configuration. |
| <code><a href="#cdk8s-constructs.TlsStoreSpec.property.defaultGeneratedCert">defaultGeneratedCert</a></code> | <code><a href="#cdk8s-constructs.TlsStoreSpecDefaultGeneratedCert">TlsStoreSpecDefaultGeneratedCert</a></code> | DefaultGeneratedCert defines the default generated certificate configuration. |

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="cdk8s-constructs.TlsStoreSpec.property.certificates"></a>

```typescript
public readonly certificates: TlsStoreSpecCertificates[];
```

- *Type:* <a href="#cdk8s-constructs.TlsStoreSpecCertificates">TlsStoreSpecCertificates</a>[]

Certificates is a list of secret names, each secret holding a key/certificate pair to add to the store.

---

##### `defaultCertificate`<sup>Optional</sup> <a name="defaultCertificate" id="cdk8s-constructs.TlsStoreSpec.property.defaultCertificate"></a>

```typescript
public readonly defaultCertificate: TlsStoreSpecDefaultCertificate;
```

- *Type:* <a href="#cdk8s-constructs.TlsStoreSpecDefaultCertificate">TlsStoreSpecDefaultCertificate</a>

DefaultCertificate defines the default certificate configuration.

---

##### `defaultGeneratedCert`<sup>Optional</sup> <a name="defaultGeneratedCert" id="cdk8s-constructs.TlsStoreSpec.property.defaultGeneratedCert"></a>

```typescript
public readonly defaultGeneratedCert: TlsStoreSpecDefaultGeneratedCert;
```

- *Type:* <a href="#cdk8s-constructs.TlsStoreSpecDefaultGeneratedCert">TlsStoreSpecDefaultGeneratedCert</a>

DefaultGeneratedCert defines the default generated certificate configuration.

---

### TlsStoreSpecCertificates <a name="TlsStoreSpecCertificates" id="cdk8s-constructs.TlsStoreSpecCertificates"></a>

Certificate holds a secret name for the TLSStore resource.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TlsStoreSpecCertificates.Initializer"></a>

```typescript
import { TlsStoreSpecCertificates } from 'cdk8s-constructs'

const tlsStoreSpecCertificates: TlsStoreSpecCertificates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsStoreSpecCertificates.property.secretName">secretName</a></code> | <code>string</code> | SecretName is the name of the referenced Kubernetes Secret to specify the certificate details. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="cdk8s-constructs.TlsStoreSpecCertificates.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.

---

### TlsStoreSpecDefaultCertificate <a name="TlsStoreSpecDefaultCertificate" id="cdk8s-constructs.TlsStoreSpecDefaultCertificate"></a>

DefaultCertificate defines the default certificate configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TlsStoreSpecDefaultCertificate.Initializer"></a>

```typescript
import { TlsStoreSpecDefaultCertificate } from 'cdk8s-constructs'

const tlsStoreSpecDefaultCertificate: TlsStoreSpecDefaultCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsStoreSpecDefaultCertificate.property.secretName">secretName</a></code> | <code>string</code> | SecretName is the name of the referenced Kubernetes Secret to specify the certificate details. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="cdk8s-constructs.TlsStoreSpecDefaultCertificate.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.

---

### TlsStoreSpecDefaultGeneratedCert <a name="TlsStoreSpecDefaultGeneratedCert" id="cdk8s-constructs.TlsStoreSpecDefaultGeneratedCert"></a>

DefaultGeneratedCert defines the default generated certificate configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TlsStoreSpecDefaultGeneratedCert.Initializer"></a>

```typescript
import { TlsStoreSpecDefaultGeneratedCert } from 'cdk8s-constructs'

const tlsStoreSpecDefaultGeneratedCert: TlsStoreSpecDefaultGeneratedCert = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsStoreSpecDefaultGeneratedCert.property.domain">domain</a></code> | <code><a href="#cdk8s-constructs.TlsStoreSpecDefaultGeneratedCertDomain">TlsStoreSpecDefaultGeneratedCertDomain</a></code> | Domain is the domain definition for the DefaultCertificate. |
| <code><a href="#cdk8s-constructs.TlsStoreSpecDefaultGeneratedCert.property.resolver">resolver</a></code> | <code>string</code> | Resolver is the name of the resolver that will be used to issue the DefaultCertificate. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="cdk8s-constructs.TlsStoreSpecDefaultGeneratedCert.property.domain"></a>

```typescript
public readonly domain: TlsStoreSpecDefaultGeneratedCertDomain;
```

- *Type:* <a href="#cdk8s-constructs.TlsStoreSpecDefaultGeneratedCertDomain">TlsStoreSpecDefaultGeneratedCertDomain</a>

Domain is the domain definition for the DefaultCertificate.

---

##### `resolver`<sup>Optional</sup> <a name="resolver" id="cdk8s-constructs.TlsStoreSpecDefaultGeneratedCert.property.resolver"></a>

```typescript
public readonly resolver: string;
```

- *Type:* string

Resolver is the name of the resolver that will be used to issue the DefaultCertificate.

---

### TlsStoreSpecDefaultGeneratedCertDomain <a name="TlsStoreSpecDefaultGeneratedCertDomain" id="cdk8s-constructs.TlsStoreSpecDefaultGeneratedCertDomain"></a>

Domain is the domain definition for the DefaultCertificate.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TlsStoreSpecDefaultGeneratedCertDomain.Initializer"></a>

```typescript
import { TlsStoreSpecDefaultGeneratedCertDomain } from 'cdk8s-constructs'

const tlsStoreSpecDefaultGeneratedCertDomain: TlsStoreSpecDefaultGeneratedCertDomain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TlsStoreSpecDefaultGeneratedCertDomain.property.main">main</a></code> | <code>string</code> | Main defines the main domain name. |
| <code><a href="#cdk8s-constructs.TlsStoreSpecDefaultGeneratedCertDomain.property.sans">sans</a></code> | <code>string[]</code> | SANs defines the subject alternative domain names. |

---

##### `main`<sup>Optional</sup> <a name="main" id="cdk8s-constructs.TlsStoreSpecDefaultGeneratedCertDomain.property.main"></a>

```typescript
public readonly main: string;
```

- *Type:* string

Main defines the main domain name.

---

##### `sans`<sup>Optional</sup> <a name="sans" id="cdk8s-constructs.TlsStoreSpecDefaultGeneratedCertDomain.property.sans"></a>

```typescript
public readonly sans: string[];
```

- *Type:* string[]

SANs defines the subject alternative domain names.

---

### TraefikServiceProps <a name="TraefikServiceProps" id="cdk8s-constructs.TraefikServiceProps"></a>

TraefikService is the CRD implementation of a Traefik Service.

TraefikService object allows to: - Apply weight to Services on load-balancing - Mirror traffic on services More info: https://doc.traefik.io/traefik/v2.10/routing/providers/kubernetes-crd/#kind-traefikservice

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceProps.Initializer"></a>

```typescript
import { TraefikServiceProps } from 'cdk8s-constructs'

const traefikServiceProps: TraefikServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceProps.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TraefikServiceProps.property.spec">spec</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpec">TraefikServiceSpec</a></code> | TraefikServiceSpec defines the desired state of a TraefikService. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="cdk8s-constructs.TraefikServiceProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

---

##### `spec`<sup>Required</sup> <a name="spec" id="cdk8s-constructs.TraefikServiceProps.property.spec"></a>

```typescript
public readonly spec: TraefikServiceSpec;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpec">TraefikServiceSpec</a>

TraefikServiceSpec defines the desired state of a TraefikService.

---

### TraefikServiceSpec <a name="TraefikServiceSpec" id="cdk8s-constructs.TraefikServiceSpec"></a>

TraefikServiceSpec defines the desired state of a TraefikService.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpec.Initializer"></a>

```typescript
import { TraefikServiceSpec } from 'cdk8s-constructs'

const traefikServiceSpec: TraefikServiceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpec.property.mirroring">mirroring</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring">TraefikServiceSpecMirroring</a></code> | Mirroring defines the Mirroring service configuration. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpec.property.weighted">weighted</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecWeighted">TraefikServiceSpecWeighted</a></code> | Weighted defines the Weighted Round Robin configuration. |

---

##### `mirroring`<sup>Optional</sup> <a name="mirroring" id="cdk8s-constructs.TraefikServiceSpec.property.mirroring"></a>

```typescript
public readonly mirroring: TraefikServiceSpecMirroring;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecMirroring">TraefikServiceSpecMirroring</a>

Mirroring defines the Mirroring service configuration.

---

##### `weighted`<sup>Optional</sup> <a name="weighted" id="cdk8s-constructs.TraefikServiceSpec.property.weighted"></a>

```typescript
public readonly weighted: TraefikServiceSpecWeighted;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecWeighted">TraefikServiceSpecWeighted</a>

Weighted defines the Weighted Round Robin configuration.

---

### TraefikServiceSpecMirroring <a name="TraefikServiceSpecMirroring" id="cdk8s-constructs.TraefikServiceSpecMirroring"></a>

Mirroring defines the Mirroring service configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecMirroring.Initializer"></a>

```typescript
import { TraefikServiceSpecMirroring } from 'cdk8s-constructs'

const traefikServiceSpecMirroring: TraefikServiceSpecMirroring = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring.property.name">name</a></code> | <code>string</code> | Name defines the name of the referenced Kubernetes Service or TraefikService. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring.property.kind">kind</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringKind">TraefikServiceSpecMirroringKind</a></code> | Kind defines the kind of the Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring.property.maxBodySize">maxBodySize</a></code> | <code>number</code> | MaxBodySize defines the maximum size allowed for the body of the request. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring.property.mirrors">mirrors</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors">TraefikServiceSpecMirroringMirrors</a>[]</code> | Mirrors defines the list of mirrors where Traefik will duplicate the traffic. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the namespace of the referenced Kubernetes Service or TraefikService. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring.property.nativeLb">nativeLb</a></code> | <code>boolean</code> | NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring.property.passHostHeader">passHostHeader</a></code> | <code>boolean</code> | PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring.property.port">port</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringPort">TraefikServiceSpecMirroringPort</a></code> | Port defines the port of a Kubernetes Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring.property.responseForwarding">responseForwarding</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringResponseForwarding">TraefikServiceSpecMirroringResponseForwarding</a></code> | ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring.property.scheme">scheme</a></code> | <code>string</code> | Scheme defines the scheme to use for the request to the upstream Kubernetes Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring.property.serversTransport">serversTransport</a></code> | <code>string</code> | ServersTransport defines the name of ServersTransport resource to use. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring.property.sticky">sticky</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringSticky">TraefikServiceSpecMirroringSticky</a></code> | Sticky defines the sticky sessions configuration. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring.property.strategy">strategy</a></code> | <code>string</code> | Strategy defines the load balancing strategy between the servers. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroring.property.weight">weight</a></code> | <code>number</code> | Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin). |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.TraefikServiceSpecMirroring.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the name of the referenced Kubernetes Service or TraefikService.

The differentiation between the two is specified in the Kind field.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="cdk8s-constructs.TraefikServiceSpecMirroring.property.kind"></a>

```typescript
public readonly kind: TraefikServiceSpecMirroringKind;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecMirroringKind">TraefikServiceSpecMirroringKind</a>

Kind defines the kind of the Service.

---

##### `maxBodySize`<sup>Optional</sup> <a name="maxBodySize" id="cdk8s-constructs.TraefikServiceSpecMirroring.property.maxBodySize"></a>

```typescript
public readonly maxBodySize: number;
```

- *Type:* number

MaxBodySize defines the maximum size allowed for the body of the request.

If the body is larger, the request is not mirrored. Default value is -1, which means unlimited size.

---

##### `mirrors`<sup>Optional</sup> <a name="mirrors" id="cdk8s-constructs.TraefikServiceSpecMirroring.property.mirrors"></a>

```typescript
public readonly mirrors: TraefikServiceSpecMirroringMirrors[];
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors">TraefikServiceSpecMirroringMirrors</a>[]

Mirrors defines the list of mirrors where Traefik will duplicate the traffic.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.TraefikServiceSpecMirroring.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.

---

##### `nativeLb`<sup>Optional</sup> <a name="nativeLb" id="cdk8s-constructs.TraefikServiceSpecMirroring.property.nativeLb"></a>

```typescript
public readonly nativeLb: boolean;
```

- *Type:* boolean

NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.

The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.

---

##### `passHostHeader`<sup>Optional</sup> <a name="passHostHeader" id="cdk8s-constructs.TraefikServiceSpecMirroring.property.passHostHeader"></a>

```typescript
public readonly passHostHeader: boolean;
```

- *Type:* boolean

PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.

By default, passHostHeader is true.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk8s-constructs.TraefikServiceSpecMirroring.property.port"></a>

```typescript
public readonly port: TraefikServiceSpecMirroringPort;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecMirroringPort">TraefikServiceSpecMirroringPort</a>

Port defines the port of a Kubernetes Service.

This can be a reference to a named port.

---

##### `responseForwarding`<sup>Optional</sup> <a name="responseForwarding" id="cdk8s-constructs.TraefikServiceSpecMirroring.property.responseForwarding"></a>

```typescript
public readonly responseForwarding: TraefikServiceSpecMirroringResponseForwarding;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecMirroringResponseForwarding">TraefikServiceSpecMirroringResponseForwarding</a>

ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="cdk8s-constructs.TraefikServiceSpecMirroring.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Scheme defines the scheme to use for the request to the upstream Kubernetes Service.

It defaults to https when Kubernetes Service port is 443, http otherwise.

---

##### `serversTransport`<sup>Optional</sup> <a name="serversTransport" id="cdk8s-constructs.TraefikServiceSpecMirroring.property.serversTransport"></a>

```typescript
public readonly serversTransport: string;
```

- *Type:* string

ServersTransport defines the name of ServersTransport resource to use.

It allows to configure the transport between Traefik and your servers. Can only be used on a Kubernetes Service.

---

##### `sticky`<sup>Optional</sup> <a name="sticky" id="cdk8s-constructs.TraefikServiceSpecMirroring.property.sticky"></a>

```typescript
public readonly sticky: TraefikServiceSpecMirroringSticky;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecMirroringSticky">TraefikServiceSpecMirroringSticky</a>

Sticky defines the sticky sessions configuration.

More info: https://doc.traefik.io/traefik/v2.10/routing/services/#sticky-sessions

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="cdk8s-constructs.TraefikServiceSpecMirroring.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

Strategy defines the load balancing strategy between the servers.

RoundRobin is the only supported value at the moment.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="cdk8s-constructs.TraefikServiceSpecMirroring.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin).

---

### TraefikServiceSpecMirroringMirrors <a name="TraefikServiceSpecMirroringMirrors" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors"></a>

MirrorService holds the mirror configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors.Initializer"></a>

```typescript
import { TraefikServiceSpecMirroringMirrors } from 'cdk8s-constructs'

const traefikServiceSpecMirroringMirrors: TraefikServiceSpecMirroringMirrors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.name">name</a></code> | <code>string</code> | Name defines the name of the referenced Kubernetes Service or TraefikService. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.kind">kind</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsKind">TraefikServiceSpecMirroringMirrorsKind</a></code> | Kind defines the kind of the Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the namespace of the referenced Kubernetes Service or TraefikService. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.nativeLb">nativeLb</a></code> | <code>boolean</code> | NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.passHostHeader">passHostHeader</a></code> | <code>boolean</code> | PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.percent">percent</a></code> | <code>number</code> | Percent defines the part of the traffic to mirror. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.port">port</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsPort">TraefikServiceSpecMirroringMirrorsPort</a></code> | Port defines the port of a Kubernetes Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.responseForwarding">responseForwarding</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsResponseForwarding">TraefikServiceSpecMirroringMirrorsResponseForwarding</a></code> | ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.scheme">scheme</a></code> | <code>string</code> | Scheme defines the scheme to use for the request to the upstream Kubernetes Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.serversTransport">serversTransport</a></code> | <code>string</code> | ServersTransport defines the name of ServersTransport resource to use. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.sticky">sticky</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsSticky">TraefikServiceSpecMirroringMirrorsSticky</a></code> | Sticky defines the sticky sessions configuration. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.strategy">strategy</a></code> | <code>string</code> | Strategy defines the load balancing strategy between the servers. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.weight">weight</a></code> | <code>number</code> | Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin). |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the name of the referenced Kubernetes Service or TraefikService.

The differentiation between the two is specified in the Kind field.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.kind"></a>

```typescript
public readonly kind: TraefikServiceSpecMirroringMirrorsKind;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsKind">TraefikServiceSpecMirroringMirrorsKind</a>

Kind defines the kind of the Service.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.

---

##### `nativeLb`<sup>Optional</sup> <a name="nativeLb" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.nativeLb"></a>

```typescript
public readonly nativeLb: boolean;
```

- *Type:* boolean

NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.

The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.

---

##### `passHostHeader`<sup>Optional</sup> <a name="passHostHeader" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.passHostHeader"></a>

```typescript
public readonly passHostHeader: boolean;
```

- *Type:* boolean

PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.

By default, passHostHeader is true.

---

##### `percent`<sup>Optional</sup> <a name="percent" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

Percent defines the part of the traffic to mirror.

Supported values: 0 to 100.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.port"></a>

```typescript
public readonly port: TraefikServiceSpecMirroringMirrorsPort;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsPort">TraefikServiceSpecMirroringMirrorsPort</a>

Port defines the port of a Kubernetes Service.

This can be a reference to a named port.

---

##### `responseForwarding`<sup>Optional</sup> <a name="responseForwarding" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.responseForwarding"></a>

```typescript
public readonly responseForwarding: TraefikServiceSpecMirroringMirrorsResponseForwarding;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsResponseForwarding">TraefikServiceSpecMirroringMirrorsResponseForwarding</a>

ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Scheme defines the scheme to use for the request to the upstream Kubernetes Service.

It defaults to https when Kubernetes Service port is 443, http otherwise.

---

##### `serversTransport`<sup>Optional</sup> <a name="serversTransport" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.serversTransport"></a>

```typescript
public readonly serversTransport: string;
```

- *Type:* string

ServersTransport defines the name of ServersTransport resource to use.

It allows to configure the transport between Traefik and your servers. Can only be used on a Kubernetes Service.

---

##### `sticky`<sup>Optional</sup> <a name="sticky" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.sticky"></a>

```typescript
public readonly sticky: TraefikServiceSpecMirroringMirrorsSticky;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsSticky">TraefikServiceSpecMirroringMirrorsSticky</a>

Sticky defines the sticky sessions configuration.

More info: https://doc.traefik.io/traefik/v2.10/routing/services/#sticky-sessions

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

Strategy defines the load balancing strategy between the servers.

RoundRobin is the only supported value at the moment.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrors.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin).

---

### TraefikServiceSpecMirroringMirrorsResponseForwarding <a name="TraefikServiceSpecMirroringMirrorsResponseForwarding" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsResponseForwarding"></a>

ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsResponseForwarding.Initializer"></a>

```typescript
import { TraefikServiceSpecMirroringMirrorsResponseForwarding } from 'cdk8s-constructs'

const traefikServiceSpecMirroringMirrorsResponseForwarding: TraefikServiceSpecMirroringMirrorsResponseForwarding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsResponseForwarding.property.flushInterval">flushInterval</a></code> | <code>string</code> | FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body. |

---

##### `flushInterval`<sup>Optional</sup> <a name="flushInterval" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsResponseForwarding.property.flushInterval"></a>

```typescript
public readonly flushInterval: string;
```

- *Type:* string

FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.

A negative value means to flush immediately after each write to the client. This configuration is ignored when ReverseProxy recognizes a response as a streaming response; for such responses, writes are flushed to the client immediately. Default: 100ms

---

### TraefikServiceSpecMirroringMirrorsSticky <a name="TraefikServiceSpecMirroringMirrorsSticky" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsSticky"></a>

Sticky defines the sticky sessions configuration.

More info: https://doc.traefik.io/traefik/v2.10/routing/services/#sticky-sessions

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsSticky.Initializer"></a>

```typescript
import { TraefikServiceSpecMirroringMirrorsSticky } from 'cdk8s-constructs'

const traefikServiceSpecMirroringMirrorsSticky: TraefikServiceSpecMirroringMirrorsSticky = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsSticky.property.cookie">cookie</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsStickyCookie">TraefikServiceSpecMirroringMirrorsStickyCookie</a></code> | Cookie defines the sticky cookie configuration. |

---

##### `cookie`<sup>Optional</sup> <a name="cookie" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsSticky.property.cookie"></a>

```typescript
public readonly cookie: TraefikServiceSpecMirroringMirrorsStickyCookie;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsStickyCookie">TraefikServiceSpecMirroringMirrorsStickyCookie</a>

Cookie defines the sticky cookie configuration.

---

### TraefikServiceSpecMirroringMirrorsStickyCookie <a name="TraefikServiceSpecMirroringMirrorsStickyCookie" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsStickyCookie"></a>

Cookie defines the sticky cookie configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsStickyCookie.Initializer"></a>

```typescript
import { TraefikServiceSpecMirroringMirrorsStickyCookie } from 'cdk8s-constructs'

const traefikServiceSpecMirroringMirrorsStickyCookie: TraefikServiceSpecMirroringMirrorsStickyCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsStickyCookie.property.httpOnly">httpOnly</a></code> | <code>boolean</code> | HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsStickyCookie.property.name">name</a></code> | <code>string</code> | Name defines the Cookie name. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsStickyCookie.property.sameSite">sameSite</a></code> | <code>string</code> | SameSite defines the same site policy. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsStickyCookie.property.secure">secure</a></code> | <code>boolean</code> | Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS). |

---

##### `httpOnly`<sup>Optional</sup> <a name="httpOnly" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsStickyCookie.property.httpOnly"></a>

```typescript
public readonly httpOnly: boolean;
```

- *Type:* boolean

HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsStickyCookie.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the Cookie name.

---

##### `sameSite`<sup>Optional</sup> <a name="sameSite" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsStickyCookie.property.sameSite"></a>

```typescript
public readonly sameSite: string;
```

- *Type:* string

SameSite defines the same site policy.

More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite

---

##### `secure`<sup>Optional</sup> <a name="secure" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsStickyCookie.property.secure"></a>

```typescript
public readonly secure: boolean;
```

- *Type:* boolean

Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).

---

### TraefikServiceSpecMirroringResponseForwarding <a name="TraefikServiceSpecMirroringResponseForwarding" id="cdk8s-constructs.TraefikServiceSpecMirroringResponseForwarding"></a>

ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecMirroringResponseForwarding.Initializer"></a>

```typescript
import { TraefikServiceSpecMirroringResponseForwarding } from 'cdk8s-constructs'

const traefikServiceSpecMirroringResponseForwarding: TraefikServiceSpecMirroringResponseForwarding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringResponseForwarding.property.flushInterval">flushInterval</a></code> | <code>string</code> | FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body. |

---

##### `flushInterval`<sup>Optional</sup> <a name="flushInterval" id="cdk8s-constructs.TraefikServiceSpecMirroringResponseForwarding.property.flushInterval"></a>

```typescript
public readonly flushInterval: string;
```

- *Type:* string

FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.

A negative value means to flush immediately after each write to the client. This configuration is ignored when ReverseProxy recognizes a response as a streaming response; for such responses, writes are flushed to the client immediately. Default: 100ms

---

### TraefikServiceSpecMirroringSticky <a name="TraefikServiceSpecMirroringSticky" id="cdk8s-constructs.TraefikServiceSpecMirroringSticky"></a>

Sticky defines the sticky sessions configuration.

More info: https://doc.traefik.io/traefik/v2.10/routing/services/#sticky-sessions

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecMirroringSticky.Initializer"></a>

```typescript
import { TraefikServiceSpecMirroringSticky } from 'cdk8s-constructs'

const traefikServiceSpecMirroringSticky: TraefikServiceSpecMirroringSticky = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringSticky.property.cookie">cookie</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringStickyCookie">TraefikServiceSpecMirroringStickyCookie</a></code> | Cookie defines the sticky cookie configuration. |

---

##### `cookie`<sup>Optional</sup> <a name="cookie" id="cdk8s-constructs.TraefikServiceSpecMirroringSticky.property.cookie"></a>

```typescript
public readonly cookie: TraefikServiceSpecMirroringStickyCookie;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecMirroringStickyCookie">TraefikServiceSpecMirroringStickyCookie</a>

Cookie defines the sticky cookie configuration.

---

### TraefikServiceSpecMirroringStickyCookie <a name="TraefikServiceSpecMirroringStickyCookie" id="cdk8s-constructs.TraefikServiceSpecMirroringStickyCookie"></a>

Cookie defines the sticky cookie configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecMirroringStickyCookie.Initializer"></a>

```typescript
import { TraefikServiceSpecMirroringStickyCookie } from 'cdk8s-constructs'

const traefikServiceSpecMirroringStickyCookie: TraefikServiceSpecMirroringStickyCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringStickyCookie.property.httpOnly">httpOnly</a></code> | <code>boolean</code> | HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringStickyCookie.property.name">name</a></code> | <code>string</code> | Name defines the Cookie name. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringStickyCookie.property.sameSite">sameSite</a></code> | <code>string</code> | SameSite defines the same site policy. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringStickyCookie.property.secure">secure</a></code> | <code>boolean</code> | Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS). |

---

##### `httpOnly`<sup>Optional</sup> <a name="httpOnly" id="cdk8s-constructs.TraefikServiceSpecMirroringStickyCookie.property.httpOnly"></a>

```typescript
public readonly httpOnly: boolean;
```

- *Type:* boolean

HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s-constructs.TraefikServiceSpecMirroringStickyCookie.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the Cookie name.

---

##### `sameSite`<sup>Optional</sup> <a name="sameSite" id="cdk8s-constructs.TraefikServiceSpecMirroringStickyCookie.property.sameSite"></a>

```typescript
public readonly sameSite: string;
```

- *Type:* string

SameSite defines the same site policy.

More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite

---

##### `secure`<sup>Optional</sup> <a name="secure" id="cdk8s-constructs.TraefikServiceSpecMirroringStickyCookie.property.secure"></a>

```typescript
public readonly secure: boolean;
```

- *Type:* boolean

Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).

---

### TraefikServiceSpecWeighted <a name="TraefikServiceSpecWeighted" id="cdk8s-constructs.TraefikServiceSpecWeighted"></a>

Weighted defines the Weighted Round Robin configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecWeighted.Initializer"></a>

```typescript
import { TraefikServiceSpecWeighted } from 'cdk8s-constructs'

const traefikServiceSpecWeighted: TraefikServiceSpecWeighted = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeighted.property.services">services</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServices">TraefikServiceSpecWeightedServices</a>[]</code> | Services defines the list of Kubernetes Service and/or TraefikService to load-balance, with weight. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeighted.property.sticky">sticky</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedSticky">TraefikServiceSpecWeightedSticky</a></code> | Sticky defines whether sticky sessions are enabled. |

---

##### `services`<sup>Optional</sup> <a name="services" id="cdk8s-constructs.TraefikServiceSpecWeighted.property.services"></a>

```typescript
public readonly services: TraefikServiceSpecWeightedServices[];
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecWeightedServices">TraefikServiceSpecWeightedServices</a>[]

Services defines the list of Kubernetes Service and/or TraefikService to load-balance, with weight.

---

##### `sticky`<sup>Optional</sup> <a name="sticky" id="cdk8s-constructs.TraefikServiceSpecWeighted.property.sticky"></a>

```typescript
public readonly sticky: TraefikServiceSpecWeightedSticky;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecWeightedSticky">TraefikServiceSpecWeightedSticky</a>

Sticky defines whether sticky sessions are enabled.

More info: https://doc.traefik.io/traefik/v2.10/routing/providers/kubernetes-crd/#stickiness-and-load-balancing

---

### TraefikServiceSpecWeightedServices <a name="TraefikServiceSpecWeightedServices" id="cdk8s-constructs.TraefikServiceSpecWeightedServices"></a>

Service defines an upstream HTTP service to proxy traffic to.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecWeightedServices.Initializer"></a>

```typescript
import { TraefikServiceSpecWeightedServices } from 'cdk8s-constructs'

const traefikServiceSpecWeightedServices: TraefikServiceSpecWeightedServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServices.property.name">name</a></code> | <code>string</code> | Name defines the name of the referenced Kubernetes Service or TraefikService. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServices.property.kind">kind</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesKind">TraefikServiceSpecWeightedServicesKind</a></code> | Kind defines the kind of the Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServices.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the namespace of the referenced Kubernetes Service or TraefikService. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServices.property.nativeLb">nativeLb</a></code> | <code>boolean</code> | NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServices.property.passHostHeader">passHostHeader</a></code> | <code>boolean</code> | PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServices.property.port">port</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesPort">TraefikServiceSpecWeightedServicesPort</a></code> | Port defines the port of a Kubernetes Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServices.property.responseForwarding">responseForwarding</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesResponseForwarding">TraefikServiceSpecWeightedServicesResponseForwarding</a></code> | ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServices.property.scheme">scheme</a></code> | <code>string</code> | Scheme defines the scheme to use for the request to the upstream Kubernetes Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServices.property.serversTransport">serversTransport</a></code> | <code>string</code> | ServersTransport defines the name of ServersTransport resource to use. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServices.property.sticky">sticky</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesSticky">TraefikServiceSpecWeightedServicesSticky</a></code> | Sticky defines the sticky sessions configuration. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServices.property.strategy">strategy</a></code> | <code>string</code> | Strategy defines the load balancing strategy between the servers. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServices.property.weight">weight</a></code> | <code>number</code> | Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin). |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.TraefikServiceSpecWeightedServices.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the name of the referenced Kubernetes Service or TraefikService.

The differentiation between the two is specified in the Kind field.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="cdk8s-constructs.TraefikServiceSpecWeightedServices.property.kind"></a>

```typescript
public readonly kind: TraefikServiceSpecWeightedServicesKind;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesKind">TraefikServiceSpecWeightedServicesKind</a>

Kind defines the kind of the Service.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.TraefikServiceSpecWeightedServices.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.

---

##### `nativeLb`<sup>Optional</sup> <a name="nativeLb" id="cdk8s-constructs.TraefikServiceSpecWeightedServices.property.nativeLb"></a>

```typescript
public readonly nativeLb: boolean;
```

- *Type:* boolean

NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.

The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.

---

##### `passHostHeader`<sup>Optional</sup> <a name="passHostHeader" id="cdk8s-constructs.TraefikServiceSpecWeightedServices.property.passHostHeader"></a>

```typescript
public readonly passHostHeader: boolean;
```

- *Type:* boolean

PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.

By default, passHostHeader is true.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk8s-constructs.TraefikServiceSpecWeightedServices.property.port"></a>

```typescript
public readonly port: TraefikServiceSpecWeightedServicesPort;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesPort">TraefikServiceSpecWeightedServicesPort</a>

Port defines the port of a Kubernetes Service.

This can be a reference to a named port.

---

##### `responseForwarding`<sup>Optional</sup> <a name="responseForwarding" id="cdk8s-constructs.TraefikServiceSpecWeightedServices.property.responseForwarding"></a>

```typescript
public readonly responseForwarding: TraefikServiceSpecWeightedServicesResponseForwarding;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesResponseForwarding">TraefikServiceSpecWeightedServicesResponseForwarding</a>

ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="cdk8s-constructs.TraefikServiceSpecWeightedServices.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Scheme defines the scheme to use for the request to the upstream Kubernetes Service.

It defaults to https when Kubernetes Service port is 443, http otherwise.

---

##### `serversTransport`<sup>Optional</sup> <a name="serversTransport" id="cdk8s-constructs.TraefikServiceSpecWeightedServices.property.serversTransport"></a>

```typescript
public readonly serversTransport: string;
```

- *Type:* string

ServersTransport defines the name of ServersTransport resource to use.

It allows to configure the transport between Traefik and your servers. Can only be used on a Kubernetes Service.

---

##### `sticky`<sup>Optional</sup> <a name="sticky" id="cdk8s-constructs.TraefikServiceSpecWeightedServices.property.sticky"></a>

```typescript
public readonly sticky: TraefikServiceSpecWeightedServicesSticky;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesSticky">TraefikServiceSpecWeightedServicesSticky</a>

Sticky defines the sticky sessions configuration.

More info: https://doc.traefik.io/traefik/v2.10/routing/services/#sticky-sessions

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="cdk8s-constructs.TraefikServiceSpecWeightedServices.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

Strategy defines the load balancing strategy between the servers.

RoundRobin is the only supported value at the moment.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="cdk8s-constructs.TraefikServiceSpecWeightedServices.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin).

---

### TraefikServiceSpecWeightedServicesResponseForwarding <a name="TraefikServiceSpecWeightedServicesResponseForwarding" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesResponseForwarding"></a>

ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesResponseForwarding.Initializer"></a>

```typescript
import { TraefikServiceSpecWeightedServicesResponseForwarding } from 'cdk8s-constructs'

const traefikServiceSpecWeightedServicesResponseForwarding: TraefikServiceSpecWeightedServicesResponseForwarding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesResponseForwarding.property.flushInterval">flushInterval</a></code> | <code>string</code> | FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body. |

---

##### `flushInterval`<sup>Optional</sup> <a name="flushInterval" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesResponseForwarding.property.flushInterval"></a>

```typescript
public readonly flushInterval: string;
```

- *Type:* string

FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.

A negative value means to flush immediately after each write to the client. This configuration is ignored when ReverseProxy recognizes a response as a streaming response; for such responses, writes are flushed to the client immediately. Default: 100ms

---

### TraefikServiceSpecWeightedServicesSticky <a name="TraefikServiceSpecWeightedServicesSticky" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesSticky"></a>

Sticky defines the sticky sessions configuration.

More info: https://doc.traefik.io/traefik/v2.10/routing/services/#sticky-sessions

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesSticky.Initializer"></a>

```typescript
import { TraefikServiceSpecWeightedServicesSticky } from 'cdk8s-constructs'

const traefikServiceSpecWeightedServicesSticky: TraefikServiceSpecWeightedServicesSticky = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesSticky.property.cookie">cookie</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesStickyCookie">TraefikServiceSpecWeightedServicesStickyCookie</a></code> | Cookie defines the sticky cookie configuration. |

---

##### `cookie`<sup>Optional</sup> <a name="cookie" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesSticky.property.cookie"></a>

```typescript
public readonly cookie: TraefikServiceSpecWeightedServicesStickyCookie;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesStickyCookie">TraefikServiceSpecWeightedServicesStickyCookie</a>

Cookie defines the sticky cookie configuration.

---

### TraefikServiceSpecWeightedServicesStickyCookie <a name="TraefikServiceSpecWeightedServicesStickyCookie" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesStickyCookie"></a>

Cookie defines the sticky cookie configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesStickyCookie.Initializer"></a>

```typescript
import { TraefikServiceSpecWeightedServicesStickyCookie } from 'cdk8s-constructs'

const traefikServiceSpecWeightedServicesStickyCookie: TraefikServiceSpecWeightedServicesStickyCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesStickyCookie.property.httpOnly">httpOnly</a></code> | <code>boolean</code> | HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesStickyCookie.property.name">name</a></code> | <code>string</code> | Name defines the Cookie name. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesStickyCookie.property.sameSite">sameSite</a></code> | <code>string</code> | SameSite defines the same site policy. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesStickyCookie.property.secure">secure</a></code> | <code>boolean</code> | Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS). |

---

##### `httpOnly`<sup>Optional</sup> <a name="httpOnly" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesStickyCookie.property.httpOnly"></a>

```typescript
public readonly httpOnly: boolean;
```

- *Type:* boolean

HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesStickyCookie.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the Cookie name.

---

##### `sameSite`<sup>Optional</sup> <a name="sameSite" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesStickyCookie.property.sameSite"></a>

```typescript
public readonly sameSite: string;
```

- *Type:* string

SameSite defines the same site policy.

More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite

---

##### `secure`<sup>Optional</sup> <a name="secure" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesStickyCookie.property.secure"></a>

```typescript
public readonly secure: boolean;
```

- *Type:* boolean

Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).

---

### TraefikServiceSpecWeightedSticky <a name="TraefikServiceSpecWeightedSticky" id="cdk8s-constructs.TraefikServiceSpecWeightedSticky"></a>

Sticky defines whether sticky sessions are enabled.

More info: https://doc.traefik.io/traefik/v2.10/routing/providers/kubernetes-crd/#stickiness-and-load-balancing

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecWeightedSticky.Initializer"></a>

```typescript
import { TraefikServiceSpecWeightedSticky } from 'cdk8s-constructs'

const traefikServiceSpecWeightedSticky: TraefikServiceSpecWeightedSticky = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedSticky.property.cookie">cookie</a></code> | <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedStickyCookie">TraefikServiceSpecWeightedStickyCookie</a></code> | Cookie defines the sticky cookie configuration. |

---

##### `cookie`<sup>Optional</sup> <a name="cookie" id="cdk8s-constructs.TraefikServiceSpecWeightedSticky.property.cookie"></a>

```typescript
public readonly cookie: TraefikServiceSpecWeightedStickyCookie;
```

- *Type:* <a href="#cdk8s-constructs.TraefikServiceSpecWeightedStickyCookie">TraefikServiceSpecWeightedStickyCookie</a>

Cookie defines the sticky cookie configuration.

---

### TraefikServiceSpecWeightedStickyCookie <a name="TraefikServiceSpecWeightedStickyCookie" id="cdk8s-constructs.TraefikServiceSpecWeightedStickyCookie"></a>

Cookie defines the sticky cookie configuration.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TraefikServiceSpecWeightedStickyCookie.Initializer"></a>

```typescript
import { TraefikServiceSpecWeightedStickyCookie } from 'cdk8s-constructs'

const traefikServiceSpecWeightedStickyCookie: TraefikServiceSpecWeightedStickyCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedStickyCookie.property.httpOnly">httpOnly</a></code> | <code>boolean</code> | HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedStickyCookie.property.name">name</a></code> | <code>string</code> | Name defines the Cookie name. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedStickyCookie.property.sameSite">sameSite</a></code> | <code>string</code> | SameSite defines the same site policy. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedStickyCookie.property.secure">secure</a></code> | <code>boolean</code> | Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS). |

---

##### `httpOnly`<sup>Optional</sup> <a name="httpOnly" id="cdk8s-constructs.TraefikServiceSpecWeightedStickyCookie.property.httpOnly"></a>

```typescript
public readonly httpOnly: boolean;
```

- *Type:* boolean

HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s-constructs.TraefikServiceSpecWeightedStickyCookie.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name defines the Cookie name.

---

##### `sameSite`<sup>Optional</sup> <a name="sameSite" id="cdk8s-constructs.TraefikServiceSpecWeightedStickyCookie.property.sameSite"></a>

```typescript
public readonly sameSite: string;
```

- *Type:* string

SameSite defines the same site policy.

More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite

---

##### `secure`<sup>Optional</sup> <a name="secure" id="cdk8s-constructs.TraefikServiceSpecWeightedStickyCookie.property.secure"></a>

```typescript
public readonly secure: boolean;
```

- *Type:* boolean

Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).

---

### TunnelBindingProps <a name="TunnelBindingProps" id="cdk8s-constructs.TunnelBindingProps"></a>

TunnelBinding is the Schema for the tunnelbindings API.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TunnelBindingProps.Initializer"></a>

```typescript
import { TunnelBindingProps } from 'cdk8s-constructs'

const tunnelBindingProps: TunnelBindingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TunnelBindingProps.property.subjects">subjects</a></code> | <code><a href="#cdk8s-constructs.TunnelBindingSubjects">TunnelBindingSubjects</a>[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TunnelBindingProps.property.tunnelRef">tunnelRef</a></code> | <code><a href="#cdk8s-constructs.TunnelBindingTunnelRef">TunnelBindingTunnelRef</a></code> | TunnelRef defines the Tunnel TunnelBinding connects to. |
| <code><a href="#cdk8s-constructs.TunnelBindingProps.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | *No description.* |

---

##### `subjects`<sup>Required</sup> <a name="subjects" id="cdk8s-constructs.TunnelBindingProps.property.subjects"></a>

```typescript
public readonly subjects: TunnelBindingSubjects[];
```

- *Type:* <a href="#cdk8s-constructs.TunnelBindingSubjects">TunnelBindingSubjects</a>[]

---

##### `tunnelRef`<sup>Required</sup> <a name="tunnelRef" id="cdk8s-constructs.TunnelBindingProps.property.tunnelRef"></a>

```typescript
public readonly tunnelRef: TunnelBindingTunnelRef;
```

- *Type:* <a href="#cdk8s-constructs.TunnelBindingTunnelRef">TunnelBindingTunnelRef</a>

TunnelRef defines the Tunnel TunnelBinding connects to.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="cdk8s-constructs.TunnelBindingProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

---

### TunnelBindingSubjects <a name="TunnelBindingSubjects" id="cdk8s-constructs.TunnelBindingSubjects"></a>

TunnelBindingSubject defines the subject TunnelBinding connects to the Tunnel.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TunnelBindingSubjects.Initializer"></a>

```typescript
import { TunnelBindingSubjects } from 'cdk8s-constructs'

const tunnelBindingSubjects: TunnelBindingSubjects = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TunnelBindingSubjects.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TunnelBindingSubjects.property.kind">kind</a></code> | <code>string</code> | Kind can be Service. |
| <code><a href="#cdk8s-constructs.TunnelBindingSubjects.property.spec">spec</a></code> | <code><a href="#cdk8s-constructs.TunnelBindingSubjectsSpec">TunnelBindingSubjectsSpec</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.TunnelBindingSubjects.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `kind`<sup>Optional</sup> <a name="kind" id="cdk8s-constructs.TunnelBindingSubjects.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Kind can be Service.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="cdk8s-constructs.TunnelBindingSubjects.property.spec"></a>

```typescript
public readonly spec: TunnelBindingSubjectsSpec;
```

- *Type:* <a href="#cdk8s-constructs.TunnelBindingSubjectsSpec">TunnelBindingSubjectsSpec</a>

---

### TunnelBindingSubjectsSpec <a name="TunnelBindingSubjectsSpec" id="cdk8s-constructs.TunnelBindingSubjectsSpec"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.TunnelBindingSubjectsSpec.Initializer"></a>

```typescript
import { TunnelBindingSubjectsSpec } from 'cdk8s-constructs'

const tunnelBindingSubjectsSpec: TunnelBindingSubjectsSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TunnelBindingSubjectsSpec.property.caPool">caPool</a></code> | <code>string</code> | CaPool trusts the CA certificate referenced by the key in the secret specified in tunnel.spec.originCaPool. tls.crt is trusted globally and does not need to be specified. Only useful if the protocol is HTTPS. |
| <code><a href="#cdk8s-constructs.TunnelBindingSubjectsSpec.property.fqdn">fqdn</a></code> | <code>string</code> | Fqdn specifies the DNS name to access this service from. |
| <code><a href="#cdk8s-constructs.TunnelBindingSubjectsSpec.property.noTlsVerify">noTlsVerify</a></code> | <code>boolean</code> | NoTlsVerify disables TLS verification for this service. |
| <code><a href="#cdk8s-constructs.TunnelBindingSubjectsSpec.property.path">path</a></code> | <code>string</code> | Path specifies a regular expression for to match on the request for http/https services If a rule does not specify a path, all paths will be matched. |
| <code><a href="#cdk8s-constructs.TunnelBindingSubjectsSpec.property.protocol">protocol</a></code> | <code>string</code> | Protocol specifies the protocol for the service. |
| <code><a href="#cdk8s-constructs.TunnelBindingSubjectsSpec.property.proxyAddress">proxyAddress</a></code> | <code>string</code> | ProxyAddress configures the listen address for that proxy. |
| <code><a href="#cdk8s-constructs.TunnelBindingSubjectsSpec.property.proxyPort">proxyPort</a></code> | <code>number</code> | ProxyPort configures the listen port for that proxy. |
| <code><a href="#cdk8s-constructs.TunnelBindingSubjectsSpec.property.proxyType">proxyType</a></code> | <code><a href="#cdk8s-constructs.TunnelBindingSubjectsSpecProxyType">TunnelBindingSubjectsSpecProxyType</a></code> | ProxyType configures the proxy type. |
| <code><a href="#cdk8s-constructs.TunnelBindingSubjectsSpec.property.target">target</a></code> | <code>string</code> | Target specified where the tunnel should proxy to. |

---

##### `caPool`<sup>Optional</sup> <a name="caPool" id="cdk8s-constructs.TunnelBindingSubjectsSpec.property.caPool"></a>

```typescript
public readonly caPool: string;
```

- *Type:* string

CaPool trusts the CA certificate referenced by the key in the secret specified in tunnel.spec.originCaPool. tls.crt is trusted globally and does not need to be specified. Only useful if the protocol is HTTPS.

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="cdk8s-constructs.TunnelBindingSubjectsSpec.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string
- *Default:* the service.metadata.name + tunnel.spec.domain. If specifying this, make sure to use the same domain that the tunnel belongs to. This is not validated and used as provided

Fqdn specifies the DNS name to access this service from.

Defaults to the service.metadata.name + tunnel.spec.domain. If specifying this, make sure to use the same domain that the tunnel belongs to. This is not validated and used as provided

---

##### `noTlsVerify`<sup>Optional</sup> <a name="noTlsVerify" id="cdk8s-constructs.TunnelBindingSubjectsSpec.property.noTlsVerify"></a>

```typescript
public readonly noTlsVerify: boolean;
```

- *Type:* boolean

NoTlsVerify disables TLS verification for this service.

Only useful if the protocol is HTTPS.

---

##### `path`<sup>Optional</sup> <a name="path" id="cdk8s-constructs.TunnelBindingSubjectsSpec.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path specifies a regular expression for to match on the request for http/https services If a rule does not specify a path, all paths will be matched.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="cdk8s-constructs.TunnelBindingSubjectsSpec.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string
- *Default:* http, with the exceptions of https for 443, smb for 139 and 445, rdp for 3389 and ssh for 22 if the service has a TCP port. The only available option for a UDP port is udp, which is default.

Protocol specifies the protocol for the service.

Should be one of http, https, tcp, udp, ssh or rdp. Defaults to http, with the exceptions of https for 443, smb for 139 and 445, rdp for 3389 and ssh for 22 if the service has a TCP port. The only available option for a UDP port is udp, which is default.

---

##### `proxyAddress`<sup>Optional</sup> <a name="proxyAddress" id="cdk8s-constructs.TunnelBindingSubjectsSpec.property.proxyAddress"></a>

```typescript
public readonly proxyAddress: string;
```

- *Type:* string

ProxyAddress configures the listen address for that proxy.

---

##### `proxyPort`<sup>Optional</sup> <a name="proxyPort" id="cdk8s-constructs.TunnelBindingSubjectsSpec.property.proxyPort"></a>

```typescript
public readonly proxyPort: number;
```

- *Type:* number

ProxyPort configures the listen port for that proxy.

---

##### `proxyType`<sup>Optional</sup> <a name="proxyType" id="cdk8s-constructs.TunnelBindingSubjectsSpec.property.proxyType"></a>

```typescript
public readonly proxyType: TunnelBindingSubjectsSpecProxyType;
```

- *Type:* <a href="#cdk8s-constructs.TunnelBindingSubjectsSpecProxyType">TunnelBindingSubjectsSpecProxyType</a>

ProxyType configures the proxy type.

---

##### `target`<sup>Optional</sup> <a name="target" id="cdk8s-constructs.TunnelBindingSubjectsSpec.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string
- *Default:* the form of <protocol>://<service.metadata.name>.<service.metadata.namespace>.svc:<port>

Target specified where the tunnel should proxy to.

Defaults to the form of <protocol>://<service.metadata.name>.<service.metadata.namespace>.svc:<port>

---

### TunnelBindingTunnelRef <a name="TunnelBindingTunnelRef" id="cdk8s-constructs.TunnelBindingTunnelRef"></a>

TunnelRef defines the Tunnel TunnelBinding connects to.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TunnelBindingTunnelRef.Initializer"></a>

```typescript
import { TunnelBindingTunnelRef } from 'cdk8s-constructs'

const tunnelBindingTunnelRef: TunnelBindingTunnelRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TunnelBindingTunnelRef.property.kind">kind</a></code> | <code>string</code> | Kind can be Tunnel or ClusterTunnel. |
| <code><a href="#cdk8s-constructs.TunnelBindingTunnelRef.property.name">name</a></code> | <code>string</code> | Name of the tunnel resource. |
| <code><a href="#cdk8s-constructs.TunnelBindingTunnelRef.property.disableDnsUpdates">disableDnsUpdates</a></code> | <code>boolean</code> | DisableDNSUpdates disables the DNS updates on Cloudflare, just managing the configs. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.TunnelBindingTunnelRef.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Kind can be Tunnel or ClusterTunnel.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.TunnelBindingTunnelRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the tunnel resource.

---

##### `disableDnsUpdates`<sup>Optional</sup> <a name="disableDnsUpdates" id="cdk8s-constructs.TunnelBindingTunnelRef.property.disableDnsUpdates"></a>

```typescript
public readonly disableDnsUpdates: boolean;
```

- *Type:* boolean

DisableDNSUpdates disables the DNS updates on Cloudflare, just managing the configs.

Assumes the DNS entries are manually added.

---

### TunnelProps <a name="TunnelProps" id="cdk8s-constructs.TunnelProps"></a>

Tunnel is the Schema for the tunnels API.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TunnelProps.Initializer"></a>

```typescript
import { TunnelProps } from 'cdk8s-constructs'

const tunnelProps: TunnelProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TunnelProps.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | *No description.* |
| <code><a href="#cdk8s-constructs.TunnelProps.property.spec">spec</a></code> | <code><a href="#cdk8s-constructs.TunnelSpec">TunnelSpec</a></code> | TunnelSpec defines the desired state of Tunnel. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="cdk8s-constructs.TunnelProps.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata

---

##### `spec`<sup>Optional</sup> <a name="spec" id="cdk8s-constructs.TunnelProps.property.spec"></a>

```typescript
public readonly spec: TunnelSpec;
```

- *Type:* <a href="#cdk8s-constructs.TunnelSpec">TunnelSpec</a>

TunnelSpec defines the desired state of Tunnel.

---

### TunnelSpec <a name="TunnelSpec" id="cdk8s-constructs.TunnelSpec"></a>

TunnelSpec defines the desired state of Tunnel.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TunnelSpec.Initializer"></a>

```typescript
import { TunnelSpec } from 'cdk8s-constructs'

const tunnelSpec: TunnelSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TunnelSpec.property.cloudflare">cloudflare</a></code> | <code><a href="#cdk8s-constructs.TunnelSpecCloudflare">TunnelSpecCloudflare</a></code> | Cloudflare Credentials. |
| <code><a href="#cdk8s-constructs.TunnelSpec.property.existingTunnel">existingTunnel</a></code> | <code><a href="#cdk8s-constructs.TunnelSpecExistingTunnel">TunnelSpecExistingTunnel</a></code> | Existing tunnel object. |
| <code><a href="#cdk8s-constructs.TunnelSpec.property.fallbackTarget">fallbackTarget</a></code> | <code>string</code> | FallbackTarget speficies the target for requests that do not match an ingress. |
| <code><a href="#cdk8s-constructs.TunnelSpec.property.image">image</a></code> | <code>string</code> | Image sets the Cloudflared Image to use. |
| <code><a href="#cdk8s-constructs.TunnelSpec.property.newTunnel">newTunnel</a></code> | <code><a href="#cdk8s-constructs.TunnelSpecNewTunnel">TunnelSpecNewTunnel</a></code> | New tunnel object. |
| <code><a href="#cdk8s-constructs.TunnelSpec.property.noTlsVerify">noTlsVerify</a></code> | <code>boolean</code> | NoTlsVerify disables origin TLS certificate checks when the endpoint is HTTPS. |
| <code><a href="#cdk8s-constructs.TunnelSpec.property.originCaPool">originCaPool</a></code> | <code>string</code> | OriginCaPool speficies the secret with tls.crt (and other certs as needed to be referred in the service annotation) of the Root CA to be trusted when sending traffic to HTTPS endpoints. |
| <code><a href="#cdk8s-constructs.TunnelSpec.property.size">size</a></code> | <code>number</code> | Size defines the number of Daemon pods to run for this tunnel. |

---

##### `cloudflare`<sup>Optional</sup> <a name="cloudflare" id="cdk8s-constructs.TunnelSpec.property.cloudflare"></a>

```typescript
public readonly cloudflare: TunnelSpecCloudflare;
```

- *Type:* <a href="#cdk8s-constructs.TunnelSpecCloudflare">TunnelSpecCloudflare</a>

Cloudflare Credentials.

---

##### `existingTunnel`<sup>Optional</sup> <a name="existingTunnel" id="cdk8s-constructs.TunnelSpec.property.existingTunnel"></a>

```typescript
public readonly existingTunnel: TunnelSpecExistingTunnel;
```

- *Type:* <a href="#cdk8s-constructs.TunnelSpecExistingTunnel">TunnelSpecExistingTunnel</a>

Existing tunnel object.

ExistingTunnel and NewTunnel cannot be both empty and are mutually exclusive.

---

##### `fallbackTarget`<sup>Optional</sup> <a name="fallbackTarget" id="cdk8s-constructs.TunnelSpec.property.fallbackTarget"></a>

```typescript
public readonly fallbackTarget: string;
```

- *Type:* string
- *Default:* http_status:404

FallbackTarget speficies the target for requests that do not match an ingress.

Defaults to http_status:404

---

##### `image`<sup>Optional</sup> <a name="image" id="cdk8s-constructs.TunnelSpec.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string
- *Default:* the image set during the release of the operator.

Image sets the Cloudflared Image to use.

Defaults to the image set during the release of the operator.

---

##### `newTunnel`<sup>Optional</sup> <a name="newTunnel" id="cdk8s-constructs.TunnelSpec.property.newTunnel"></a>

```typescript
public readonly newTunnel: TunnelSpecNewTunnel;
```

- *Type:* <a href="#cdk8s-constructs.TunnelSpecNewTunnel">TunnelSpecNewTunnel</a>

New tunnel object.

NewTunnel and ExistingTunnel cannot be both empty and are mutually exclusive.

---

##### `noTlsVerify`<sup>Optional</sup> <a name="noTlsVerify" id="cdk8s-constructs.TunnelSpec.property.noTlsVerify"></a>

```typescript
public readonly noTlsVerify: boolean;
```

- *Type:* boolean

NoTlsVerify disables origin TLS certificate checks when the endpoint is HTTPS.

---

##### `originCaPool`<sup>Optional</sup> <a name="originCaPool" id="cdk8s-constructs.TunnelSpec.property.originCaPool"></a>

```typescript
public readonly originCaPool: string;
```

- *Type:* string

OriginCaPool speficies the secret with tls.crt (and other certs as needed to be referred in the service annotation) of the Root CA to be trusted when sending traffic to HTTPS endpoints.

---

##### `size`<sup>Optional</sup> <a name="size" id="cdk8s-constructs.TunnelSpec.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Size defines the number of Daemon pods to run for this tunnel.

---

### TunnelSpecCloudflare <a name="TunnelSpecCloudflare" id="cdk8s-constructs.TunnelSpecCloudflare"></a>

Cloudflare Credentials.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TunnelSpecCloudflare.Initializer"></a>

```typescript
import { TunnelSpecCloudflare } from 'cdk8s-constructs'

const tunnelSpecCloudflare: TunnelSpecCloudflare = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TunnelSpecCloudflare.property.accountId">accountId</a></code> | <code>string</code> | Account ID in Cloudflare. |
| <code><a href="#cdk8s-constructs.TunnelSpecCloudflare.property.accountName">accountName</a></code> | <code>string</code> | Account Name in Cloudflare. |
| <code><a href="#cdk8s-constructs.TunnelSpecCloudflare.property.cloudflareApiKey">cloudflareApiKey</a></code> | <code>string</code> | Key in the secret to use for Cloudflare API Key, defaults to CLOUDFLARE_API_KEY. |
| <code><a href="#cdk8s-constructs.TunnelSpecCloudflare.property.cloudflareApiToken">cloudflareApiToken</a></code> | <code>string</code> | Key in the secret to use for Cloudflare API token, defaults to CLOUDFLARE_API_TOKEN. |
| <code><a href="#cdk8s-constructs.TunnelSpecCloudflare.property.cloudflareTunnelCredentialFile">cloudflareTunnelCredentialFile</a></code> | <code>string</code> | Key in the secret to use as credentials.json for an existing tunnel, defaults to CLOUDFLARE_TUNNEL_CREDENTIAL_FILE. |
| <code><a href="#cdk8s-constructs.TunnelSpecCloudflare.property.cloudflareTunnelCredentialSecret">cloudflareTunnelCredentialSecret</a></code> | <code>string</code> | Key in the secret to use as tunnel secret for an existing tunnel, defaults to CLOUDFLARE_TUNNEL_CREDENTIAL_SECRET. |
| <code><a href="#cdk8s-constructs.TunnelSpecCloudflare.property.domain">domain</a></code> | <code>string</code> | Cloudflare Domain to which this tunnel belongs to. |
| <code><a href="#cdk8s-constructs.TunnelSpecCloudflare.property.email">email</a></code> | <code>string</code> | Email to use along with API Key for Delete operations for new tunnels only, or as an alternate to API Token. |
| <code><a href="#cdk8s-constructs.TunnelSpecCloudflare.property.secret">secret</a></code> | <code>string</code> | Secret containing Cloudflare API key/token. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="cdk8s-constructs.TunnelSpecCloudflare.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account ID in Cloudflare.

AccountId and AccountName cannot be both empty. If both are provided, Account ID is used if valid, else falls back to Account Name.

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="cdk8s-constructs.TunnelSpecCloudflare.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Account Name in Cloudflare.

AccountName and AccountId cannot be both empty. If both are provided, Account ID is used if valid, else falls back to Account Name.

---

##### `cloudflareApiKey`<sup>Optional</sup> <a name="cloudflareApiKey" id="cdk8s-constructs.TunnelSpecCloudflare.property.cloudflareApiKey"></a>

```typescript
public readonly cloudflareApiKey: string;
```

- *Type:* string

Key in the secret to use for Cloudflare API Key, defaults to CLOUDFLARE_API_KEY.

Needs Email also to be provided. For Delete operations for new tunnels only, or as an alternate to API Token

---

##### `cloudflareApiToken`<sup>Optional</sup> <a name="cloudflareApiToken" id="cdk8s-constructs.TunnelSpecCloudflare.property.cloudflareApiToken"></a>

```typescript
public readonly cloudflareApiToken: string;
```

- *Type:* string

Key in the secret to use for Cloudflare API token, defaults to CLOUDFLARE_API_TOKEN.

---

##### `cloudflareTunnelCredentialFile`<sup>Optional</sup> <a name="cloudflareTunnelCredentialFile" id="cdk8s-constructs.TunnelSpecCloudflare.property.cloudflareTunnelCredentialFile"></a>

```typescript
public readonly cloudflareTunnelCredentialFile: string;
```

- *Type:* string

Key in the secret to use as credentials.json for an existing tunnel, defaults to CLOUDFLARE_TUNNEL_CREDENTIAL_FILE.

---

##### `cloudflareTunnelCredentialSecret`<sup>Optional</sup> <a name="cloudflareTunnelCredentialSecret" id="cdk8s-constructs.TunnelSpecCloudflare.property.cloudflareTunnelCredentialSecret"></a>

```typescript
public readonly cloudflareTunnelCredentialSecret: string;
```

- *Type:* string

Key in the secret to use as tunnel secret for an existing tunnel, defaults to CLOUDFLARE_TUNNEL_CREDENTIAL_SECRET.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="cdk8s-constructs.TunnelSpecCloudflare.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Cloudflare Domain to which this tunnel belongs to.

---

##### `email`<sup>Optional</sup> <a name="email" id="cdk8s-constructs.TunnelSpecCloudflare.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Email to use along with API Key for Delete operations for new tunnels only, or as an alternate to API Token.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="cdk8s-constructs.TunnelSpecCloudflare.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Secret containing Cloudflare API key/token.

---

### TunnelSpecExistingTunnel <a name="TunnelSpecExistingTunnel" id="cdk8s-constructs.TunnelSpecExistingTunnel"></a>

Existing tunnel object.

ExistingTunnel and NewTunnel cannot be both empty and are mutually exclusive.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TunnelSpecExistingTunnel.Initializer"></a>

```typescript
import { TunnelSpecExistingTunnel } from 'cdk8s-constructs'

const tunnelSpecExistingTunnel: TunnelSpecExistingTunnel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TunnelSpecExistingTunnel.property.id">id</a></code> | <code>string</code> | Existing Tunnel ID to run on. |
| <code><a href="#cdk8s-constructs.TunnelSpecExistingTunnel.property.name">name</a></code> | <code>string</code> | Existing Tunnel name to run on. |

---

##### `id`<sup>Optional</sup> <a name="id" id="cdk8s-constructs.TunnelSpecExistingTunnel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Existing Tunnel ID to run on.

Tunnel ID and Tunnel Name cannot be both empty. If both are provided, ID is used if valid, else falls back to Name.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s-constructs.TunnelSpecExistingTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Existing Tunnel name to run on.

Tunnel Name and Tunnel ID cannot be both empty. If both are provided, ID is used if valid, else falls back to Name.

---

### TunnelSpecNewTunnel <a name="TunnelSpecNewTunnel" id="cdk8s-constructs.TunnelSpecNewTunnel"></a>

New tunnel object.

NewTunnel and ExistingTunnel cannot be both empty and are mutually exclusive.

#### Initializer <a name="Initializer" id="cdk8s-constructs.TunnelSpecNewTunnel.Initializer"></a>

```typescript
import { TunnelSpecNewTunnel } from 'cdk8s-constructs'

const tunnelSpecNewTunnel: TunnelSpecNewTunnel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TunnelSpecNewTunnel.property.name">name</a></code> | <code>string</code> | Tunnel name to create on Cloudflare. |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk8s-constructs.TunnelSpecNewTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Tunnel name to create on Cloudflare.

---

## Classes <a name="Classes" id="Classes"></a>

### GatusEndpoint <a name="GatusEndpoint" id="cdk8s-constructs.GatusEndpoint"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.GatusEndpoint.Initializer"></a>

```typescript
import { GatusEndpoint } from 'cdk8s-constructs'

new GatusEndpoint(options: GatusEndpointOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.GatusEndpoint.Initializer.parameter.options">options</a></code> | <code><a href="#cdk8s-constructs.GatusEndpointOptions">GatusEndpointOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="cdk8s-constructs.GatusEndpoint.Initializer.parameter.options"></a>

- *Type:* <a href="#cdk8s-constructs.GatusEndpointOptions">GatusEndpointOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.GatusEndpoint.asObject">asObject</a></code> | *No description.* |

---

##### `asObject` <a name="asObject" id="cdk8s-constructs.GatusEndpoint.asObject"></a>

```typescript
public asObject(): {[ key: string ]: any}
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.conditions">conditions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.alerts">alerts</a></code> | <code><a href="#cdk8s-constructs.GatusEndpointAlertOptions">GatusEndpointAlertOptions</a>[]</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.dns">dns</a></code> | <code><a href="#cdk8s-constructs.GatusEndpointDnsOptions">GatusEndpointDnsOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.hideConditionsOnUi">hideConditionsOnUi</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.hideHostnameOnUi">hideHostnameOnUi</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.hideMethodOnUi">hideMethodOnUi</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.interval">interval</a></code> | <code>cdk8s.Duration</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.isGraphQl">isGraphQl</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.method">method</a></code> | <code><a href="#cdk8s-constructs.GatusMethod">GatusMethod</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.resolveFailedConditionsOnUi">resolveFailedConditionsOnUi</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.ssh">ssh</a></code> | <code><a href="#cdk8s-constructs.GatusEndpointSshOptions">GatusEndpointSshOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusEndpoint.property.uiResponseThresholds">uiResponseThresholds</a></code> | <code>number[]</code> | *No description.* |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="cdk8s-constructs.GatusEndpoint.property.conditions"></a>

```typescript
public readonly conditions: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.GatusEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="cdk8s-constructs.GatusEndpoint.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `alerts`<sup>Optional</sup> <a name="alerts" id="cdk8s-constructs.GatusEndpoint.property.alerts"></a>

```typescript
public readonly alerts: GatusEndpointAlertOptions[];
```

- *Type:* <a href="#cdk8s-constructs.GatusEndpointAlertOptions">GatusEndpointAlertOptions</a>[]

---

##### `body`<sup>Optional</sup> <a name="body" id="cdk8s-constructs.GatusEndpoint.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `dns`<sup>Optional</sup> <a name="dns" id="cdk8s-constructs.GatusEndpoint.property.dns"></a>

```typescript
public readonly dns: GatusEndpointDnsOptions;
```

- *Type:* <a href="#cdk8s-constructs.GatusEndpointDnsOptions">GatusEndpointDnsOptions</a>

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="cdk8s-constructs.GatusEndpoint.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `group`<sup>Optional</sup> <a name="group" id="cdk8s-constructs.GatusEndpoint.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `headers`<sup>Optional</sup> <a name="headers" id="cdk8s-constructs.GatusEndpoint.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hideConditionsOnUi`<sup>Optional</sup> <a name="hideConditionsOnUi" id="cdk8s-constructs.GatusEndpoint.property.hideConditionsOnUi"></a>

```typescript
public readonly hideConditionsOnUi: boolean;
```

- *Type:* boolean

---

##### `hideHostnameOnUi`<sup>Optional</sup> <a name="hideHostnameOnUi" id="cdk8s-constructs.GatusEndpoint.property.hideHostnameOnUi"></a>

```typescript
public readonly hideHostnameOnUi: boolean;
```

- *Type:* boolean

---

##### `hideMethodOnUi`<sup>Optional</sup> <a name="hideMethodOnUi" id="cdk8s-constructs.GatusEndpoint.property.hideMethodOnUi"></a>

```typescript
public readonly hideMethodOnUi: boolean;
```

- *Type:* boolean

---

##### `interval`<sup>Optional</sup> <a name="interval" id="cdk8s-constructs.GatusEndpoint.property.interval"></a>

```typescript
public readonly interval: Duration;
```

- *Type:* cdk8s.Duration

---

##### `isGraphQl`<sup>Optional</sup> <a name="isGraphQl" id="cdk8s-constructs.GatusEndpoint.property.isGraphQl"></a>

```typescript
public readonly isGraphQl: boolean;
```

- *Type:* boolean

---

##### `method`<sup>Optional</sup> <a name="method" id="cdk8s-constructs.GatusEndpoint.property.method"></a>

```typescript
public readonly method: GatusMethod;
```

- *Type:* <a href="#cdk8s-constructs.GatusMethod">GatusMethod</a>

---

##### `resolveFailedConditionsOnUi`<sup>Optional</sup> <a name="resolveFailedConditionsOnUi" id="cdk8s-constructs.GatusEndpoint.property.resolveFailedConditionsOnUi"></a>

```typescript
public readonly resolveFailedConditionsOnUi: boolean;
```

- *Type:* boolean

---

##### `ssh`<sup>Optional</sup> <a name="ssh" id="cdk8s-constructs.GatusEndpoint.property.ssh"></a>

```typescript
public readonly ssh: GatusEndpointSshOptions;
```

- *Type:* <a href="#cdk8s-constructs.GatusEndpointSshOptions">GatusEndpointSshOptions</a>

---

##### `uiResponseThresholds`<sup>Optional</sup> <a name="uiResponseThresholds" id="cdk8s-constructs.GatusEndpoint.property.uiResponseThresholds"></a>

```typescript
public readonly uiResponseThresholds: number[];
```

- *Type:* number[]

---


### HomelabRoute <a name="HomelabRoute" id="cdk8s-constructs.HomelabRoute"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.HomelabRoute.Initializer"></a>

```typescript
import { HomelabRoute } from 'cdk8s-constructs'

new HomelabRoute()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.HomelabRoute.generateRoute">generateRoute</a></code> | *No description.* |

---

##### `generateRoute` <a name="generateRoute" id="cdk8s-constructs.HomelabRoute.generateRoute"></a>

```typescript
import { HomelabRoute } from 'cdk8s-constructs'

HomelabRoute.generateRoute(dnsName: string, service: IService, middlewares?: IngressRouteSpecRoutesMiddlewares[])
```

###### `dnsName`<sup>Required</sup> <a name="dnsName" id="cdk8s-constructs.HomelabRoute.generateRoute.parameter.dnsName"></a>

- *Type:* string

---

###### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.HomelabRoute.generateRoute.parameter.service"></a>

- *Type:* <a href="#cdk8s-constructs.IService">IService</a>

---

###### `middlewares`<sup>Optional</sup> <a name="middlewares" id="cdk8s-constructs.HomelabRoute.generateRoute.parameter.middlewares"></a>

- *Type:* <a href="#cdk8s-constructs.IngressRouteSpecRoutesMiddlewares">IngressRouteSpecRoutesMiddlewares</a>[]

---



### IngressRouteSpecRoutesServicesPort <a name="IngressRouteSpecRoutesServicesPort" id="cdk8s-constructs.IngressRouteSpecRoutesServicesPort"></a>

Port defines the port of a Kubernetes Service.

This can be a reference to a named port.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesPort.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesPort.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.IngressRouteSpecRoutesServicesPort.fromNumber"></a>

```typescript
import { IngressRouteSpecRoutesServicesPort } from 'cdk8s-constructs'

IngressRouteSpecRoutesServicesPort.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.IngressRouteSpecRoutesServicesPort.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.IngressRouteSpecRoutesServicesPort.fromString"></a>

```typescript
import { IngressRouteSpecRoutesServicesPort } from 'cdk8s-constructs'

IngressRouteSpecRoutesServicesPort.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.IngressRouteSpecRoutesServicesPort.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesPort.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.IngressRouteSpecRoutesServicesPort.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### IngressRouteTcpSpecRoutesServicesPort <a name="IngressRouteTcpSpecRoutesServicesPort" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServicesPort"></a>

Port defines the port of a Kubernetes Service.

This can be a reference to a named port.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServicesPort.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServicesPort.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServicesPort.fromNumber"></a>

```typescript
import { IngressRouteTcpSpecRoutesServicesPort } from 'cdk8s-constructs'

IngressRouteTcpSpecRoutesServicesPort.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServicesPort.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServicesPort.fromString"></a>

```typescript
import { IngressRouteTcpSpecRoutesServicesPort } from 'cdk8s-constructs'

IngressRouteTcpSpecRoutesServicesPort.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServicesPort.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteTcpSpecRoutesServicesPort.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.IngressRouteTcpSpecRoutesServicesPort.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### IngressRouteUdpSpecRoutesServicesPort <a name="IngressRouteUdpSpecRoutesServicesPort" id="cdk8s-constructs.IngressRouteUdpSpecRoutesServicesPort"></a>

Port defines the port of a Kubernetes Service.

This can be a reference to a named port.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteUdpSpecRoutesServicesPort.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.IngressRouteUdpSpecRoutesServicesPort.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.IngressRouteUdpSpecRoutesServicesPort.fromNumber"></a>

```typescript
import { IngressRouteUdpSpecRoutesServicesPort } from 'cdk8s-constructs'

IngressRouteUdpSpecRoutesServicesPort.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.IngressRouteUdpSpecRoutesServicesPort.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.IngressRouteUdpSpecRoutesServicesPort.fromString"></a>

```typescript
import { IngressRouteUdpSpecRoutesServicesPort } from 'cdk8s-constructs'

IngressRouteUdpSpecRoutesServicesPort.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.IngressRouteUdpSpecRoutesServicesPort.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteUdpSpecRoutesServicesPort.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.IngressRouteUdpSpecRoutesServicesPort.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### KanidmProps <a name="KanidmProps" id="cdk8s-constructs.KanidmProps"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.KanidmProps.Initializer"></a>

```typescript
import { KanidmProps } from 'cdk8s-constructs'

new KanidmProps()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---





### KubeIngressAnnotations <a name="KubeIngressAnnotations" id="cdk8s-constructs.KubeIngressAnnotations"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.KubeIngressAnnotations.Initializer"></a>

```typescript
import { KubeIngressAnnotations } from 'cdk8s-constructs'

new KubeIngressAnnotations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.KubeIngressAnnotations.configurationSnippet">configurationSnippet</a></code> | *No description.* |

---

##### `configurationSnippet` <a name="configurationSnippet" id="cdk8s-constructs.KubeIngressAnnotations.configurationSnippet"></a>

```typescript
import { KubeIngressAnnotations } from 'cdk8s-constructs'

KubeIngressAnnotations.configurationSnippet(snippet: string)
```

###### `snippet`<sup>Required</sup> <a name="snippet" id="cdk8s-constructs.KubeIngressAnnotations.configurationSnippet.parameter.snippet"></a>

- *Type:* string

---



### MiddlewareSpecCircuitBreakerCheckPeriod <a name="MiddlewareSpecCircuitBreakerCheckPeriod" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerCheckPeriod"></a>

CheckPeriod is the interval between successive checks of the circuit breaker condition (when in standby state).


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerCheckPeriod.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerCheckPeriod.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerCheckPeriod.fromNumber"></a>

```typescript
import { MiddlewareSpecCircuitBreakerCheckPeriod } from 'cdk8s-constructs'

MiddlewareSpecCircuitBreakerCheckPeriod.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerCheckPeriod.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerCheckPeriod.fromString"></a>

```typescript
import { MiddlewareSpecCircuitBreakerCheckPeriod } from 'cdk8s-constructs'

MiddlewareSpecCircuitBreakerCheckPeriod.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerCheckPeriod.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerCheckPeriod.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerCheckPeriod.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### MiddlewareSpecCircuitBreakerFallbackDuration <a name="MiddlewareSpecCircuitBreakerFallbackDuration" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerFallbackDuration"></a>

FallbackDuration is the duration for which the circuit breaker will wait before trying to recover (from a tripped state).


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerFallbackDuration.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerFallbackDuration.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerFallbackDuration.fromNumber"></a>

```typescript
import { MiddlewareSpecCircuitBreakerFallbackDuration } from 'cdk8s-constructs'

MiddlewareSpecCircuitBreakerFallbackDuration.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerFallbackDuration.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerFallbackDuration.fromString"></a>

```typescript
import { MiddlewareSpecCircuitBreakerFallbackDuration } from 'cdk8s-constructs'

MiddlewareSpecCircuitBreakerFallbackDuration.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerFallbackDuration.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerFallbackDuration.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerFallbackDuration.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### MiddlewareSpecCircuitBreakerRecoveryDuration <a name="MiddlewareSpecCircuitBreakerRecoveryDuration" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerRecoveryDuration"></a>

RecoveryDuration is the duration for which the circuit breaker will try to recover (as soon as it is in recovering state).


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerRecoveryDuration.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerRecoveryDuration.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerRecoveryDuration.fromNumber"></a>

```typescript
import { MiddlewareSpecCircuitBreakerRecoveryDuration } from 'cdk8s-constructs'

MiddlewareSpecCircuitBreakerRecoveryDuration.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerRecoveryDuration.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerRecoveryDuration.fromString"></a>

```typescript
import { MiddlewareSpecCircuitBreakerRecoveryDuration } from 'cdk8s-constructs'

MiddlewareSpecCircuitBreakerRecoveryDuration.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerRecoveryDuration.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecCircuitBreakerRecoveryDuration.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecCircuitBreakerRecoveryDuration.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### MiddlewareSpecErrorsServicePort <a name="MiddlewareSpecErrorsServicePort" id="cdk8s-constructs.MiddlewareSpecErrorsServicePort"></a>

Port defines the port of a Kubernetes Service.

This can be a reference to a named port.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServicePort.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServicePort.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.MiddlewareSpecErrorsServicePort.fromNumber"></a>

```typescript
import { MiddlewareSpecErrorsServicePort } from 'cdk8s-constructs'

MiddlewareSpecErrorsServicePort.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecErrorsServicePort.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.MiddlewareSpecErrorsServicePort.fromString"></a>

```typescript
import { MiddlewareSpecErrorsServicePort } from 'cdk8s-constructs'

MiddlewareSpecErrorsServicePort.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecErrorsServicePort.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServicePort.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecErrorsServicePort.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### MiddlewareSpecRateLimitPeriod <a name="MiddlewareSpecRateLimitPeriod" id="cdk8s-constructs.MiddlewareSpecRateLimitPeriod"></a>

Period, in combination with Average, defines the actual maximum rate, such as: r = Average / Period.

It defaults to a second.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimitPeriod.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimitPeriod.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.MiddlewareSpecRateLimitPeriod.fromNumber"></a>

```typescript
import { MiddlewareSpecRateLimitPeriod } from 'cdk8s-constructs'

MiddlewareSpecRateLimitPeriod.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecRateLimitPeriod.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.MiddlewareSpecRateLimitPeriod.fromString"></a>

```typescript
import { MiddlewareSpecRateLimitPeriod } from 'cdk8s-constructs'

MiddlewareSpecRateLimitPeriod.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecRateLimitPeriod.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRateLimitPeriod.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecRateLimitPeriod.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### MiddlewareSpecRetryInitialInterval <a name="MiddlewareSpecRetryInitialInterval" id="cdk8s-constructs.MiddlewareSpecRetryInitialInterval"></a>

InitialInterval defines the first wait time in the exponential backoff series.

The maximum interval is calculated as twice the initialInterval. If unspecified, requests will be retried immediately. The value of initialInterval should be provided in seconds or as a valid duration format, see https://pkg.go.dev/time#ParseDuration.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRetryInitialInterval.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRetryInitialInterval.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.MiddlewareSpecRetryInitialInterval.fromNumber"></a>

```typescript
import { MiddlewareSpecRetryInitialInterval } from 'cdk8s-constructs'

MiddlewareSpecRetryInitialInterval.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecRetryInitialInterval.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.MiddlewareSpecRetryInitialInterval.fromString"></a>

```typescript
import { MiddlewareSpecRetryInitialInterval } from 'cdk8s-constructs'

MiddlewareSpecRetryInitialInterval.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecRetryInitialInterval.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecRetryInitialInterval.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.MiddlewareSpecRetryInitialInterval.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### NginxIngressAnnotations <a name="NginxIngressAnnotations" id="cdk8s-constructs.NginxIngressAnnotations"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.NginxIngressAnnotations.Initializer"></a>

```typescript
import { NginxIngressAnnotations } from 'cdk8s-constructs'

new NginxIngressAnnotations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.NginxIngressAnnotations.appRoot">appRoot</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.NginxIngressAnnotations.backendProtocolHTTPS">backendProtocolHTTPS</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.NginxIngressAnnotations.corsAllowHeaders">corsAllowHeaders</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.NginxIngressAnnotations.corsAllowMethods">corsAllowMethods</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.NginxIngressAnnotations.corsAllowOrigin">corsAllowOrigin</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.NginxIngressAnnotations.corsEnabled">corsEnabled</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.NginxIngressAnnotations.proxyBodySize">proxyBodySize</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.NginxIngressAnnotations.serverSnippets">serverSnippets</a></code> | *No description.* |

---

##### `appRoot` <a name="appRoot" id="cdk8s-constructs.NginxIngressAnnotations.appRoot"></a>

```typescript
import { NginxIngressAnnotations } from 'cdk8s-constructs'

NginxIngressAnnotations.appRoot(target: string)
```

###### `target`<sup>Required</sup> <a name="target" id="cdk8s-constructs.NginxIngressAnnotations.appRoot.parameter.target"></a>

- *Type:* string

---

##### `backendProtocolHTTPS` <a name="backendProtocolHTTPS" id="cdk8s-constructs.NginxIngressAnnotations.backendProtocolHTTPS"></a>

```typescript
import { NginxIngressAnnotations } from 'cdk8s-constructs'

NginxIngressAnnotations.backendProtocolHTTPS()
```

##### `corsAllowHeaders` <a name="corsAllowHeaders" id="cdk8s-constructs.NginxIngressAnnotations.corsAllowHeaders"></a>

```typescript
import { NginxIngressAnnotations } from 'cdk8s-constructs'

NginxIngressAnnotations.corsAllowHeaders(headers: string[])
```

###### `headers`<sup>Required</sup> <a name="headers" id="cdk8s-constructs.NginxIngressAnnotations.corsAllowHeaders.parameter.headers"></a>

- *Type:* string[]

---

##### `corsAllowMethods` <a name="corsAllowMethods" id="cdk8s-constructs.NginxIngressAnnotations.corsAllowMethods"></a>

```typescript
import { NginxIngressAnnotations } from 'cdk8s-constructs'

NginxIngressAnnotations.corsAllowMethods(methods: string[])
```

###### `methods`<sup>Required</sup> <a name="methods" id="cdk8s-constructs.NginxIngressAnnotations.corsAllowMethods.parameter.methods"></a>

- *Type:* string[]

---

##### `corsAllowOrigin` <a name="corsAllowOrigin" id="cdk8s-constructs.NginxIngressAnnotations.corsAllowOrigin"></a>

```typescript
import { NginxIngressAnnotations } from 'cdk8s-constructs'

NginxIngressAnnotations.corsAllowOrigin(origin: string)
```

###### `origin`<sup>Required</sup> <a name="origin" id="cdk8s-constructs.NginxIngressAnnotations.corsAllowOrigin.parameter.origin"></a>

- *Type:* string

---

##### `corsEnabled` <a name="corsEnabled" id="cdk8s-constructs.NginxIngressAnnotations.corsEnabled"></a>

```typescript
import { NginxIngressAnnotations } from 'cdk8s-constructs'

NginxIngressAnnotations.corsEnabled()
```

##### `proxyBodySize` <a name="proxyBodySize" id="cdk8s-constructs.NginxIngressAnnotations.proxyBodySize"></a>

```typescript
import { NginxIngressAnnotations } from 'cdk8s-constructs'

NginxIngressAnnotations.proxyBodySize(size: string)
```

###### `size`<sup>Required</sup> <a name="size" id="cdk8s-constructs.NginxIngressAnnotations.proxyBodySize.parameter.size"></a>

- *Type:* string

---

##### `serverSnippets` <a name="serverSnippets" id="cdk8s-constructs.NginxIngressAnnotations.serverSnippets"></a>

```typescript
import { NginxIngressAnnotations } from 'cdk8s-constructs'

NginxIngressAnnotations.serverSnippets(snippets: string[])
```

###### `snippets`<sup>Required</sup> <a name="snippets" id="cdk8s-constructs.NginxIngressAnnotations.serverSnippets.parameter.snippets"></a>

- *Type:* string[]

---



### ServersTransportSpecForwardingTimeoutsDialTimeout <a name="ServersTransportSpecForwardingTimeoutsDialTimeout" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsDialTimeout"></a>

DialTimeout is the amount of time to wait until a connection to a backend server can be established.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsDialTimeout.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsDialTimeout.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsDialTimeout.fromNumber"></a>

```typescript
import { ServersTransportSpecForwardingTimeoutsDialTimeout } from 'cdk8s-constructs'

ServersTransportSpecForwardingTimeoutsDialTimeout.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsDialTimeout.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsDialTimeout.fromString"></a>

```typescript
import { ServersTransportSpecForwardingTimeoutsDialTimeout } from 'cdk8s-constructs'

ServersTransportSpecForwardingTimeoutsDialTimeout.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsDialTimeout.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsDialTimeout.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsDialTimeout.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### ServersTransportSpecForwardingTimeoutsIdleConnTimeout <a name="ServersTransportSpecForwardingTimeoutsIdleConnTimeout" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsIdleConnTimeout"></a>

IdleConnTimeout is the maximum period for which an idle HTTP keep-alive connection will remain open before closing itself.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsIdleConnTimeout.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsIdleConnTimeout.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsIdleConnTimeout.fromNumber"></a>

```typescript
import { ServersTransportSpecForwardingTimeoutsIdleConnTimeout } from 'cdk8s-constructs'

ServersTransportSpecForwardingTimeoutsIdleConnTimeout.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsIdleConnTimeout.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsIdleConnTimeout.fromString"></a>

```typescript
import { ServersTransportSpecForwardingTimeoutsIdleConnTimeout } from 'cdk8s-constructs'

ServersTransportSpecForwardingTimeoutsIdleConnTimeout.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsIdleConnTimeout.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsIdleConnTimeout.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsIdleConnTimeout.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### ServersTransportSpecForwardingTimeoutsPingTimeout <a name="ServersTransportSpecForwardingTimeoutsPingTimeout" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsPingTimeout"></a>

PingTimeout is the timeout after which the HTTP/2 connection will be closed if a response to ping is not received.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsPingTimeout.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsPingTimeout.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsPingTimeout.fromNumber"></a>

```typescript
import { ServersTransportSpecForwardingTimeoutsPingTimeout } from 'cdk8s-constructs'

ServersTransportSpecForwardingTimeoutsPingTimeout.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsPingTimeout.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsPingTimeout.fromString"></a>

```typescript
import { ServersTransportSpecForwardingTimeoutsPingTimeout } from 'cdk8s-constructs'

ServersTransportSpecForwardingTimeoutsPingTimeout.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsPingTimeout.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsPingTimeout.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsPingTimeout.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### ServersTransportSpecForwardingTimeoutsReadIdleTimeout <a name="ServersTransportSpecForwardingTimeoutsReadIdleTimeout" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsReadIdleTimeout"></a>

ReadIdleTimeout is the timeout after which a health check using ping frame will be carried out if no frame is received on the HTTP/2 connection.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsReadIdleTimeout.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsReadIdleTimeout.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsReadIdleTimeout.fromNumber"></a>

```typescript
import { ServersTransportSpecForwardingTimeoutsReadIdleTimeout } from 'cdk8s-constructs'

ServersTransportSpecForwardingTimeoutsReadIdleTimeout.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsReadIdleTimeout.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsReadIdleTimeout.fromString"></a>

```typescript
import { ServersTransportSpecForwardingTimeoutsReadIdleTimeout } from 'cdk8s-constructs'

ServersTransportSpecForwardingTimeoutsReadIdleTimeout.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsReadIdleTimeout.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsReadIdleTimeout.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsReadIdleTimeout.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout <a name="ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout"></a>

ResponseHeaderTimeout is the amount of time to wait for a server's response headers after fully writing the request (including its body, if any).


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout.fromNumber"></a>

```typescript
import { ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout } from 'cdk8s-constructs'

ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout.fromString"></a>

```typescript
import { ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout } from 'cdk8s-constructs'

ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.ServersTransportSpecForwardingTimeoutsResponseHeaderTimeout.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### TraefikServiceSpecMirroringMirrorsPort <a name="TraefikServiceSpecMirroringMirrorsPort" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsPort"></a>

Port defines the port of a Kubernetes Service.

This can be a reference to a named port.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsPort.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsPort.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsPort.fromNumber"></a>

```typescript
import { TraefikServiceSpecMirroringMirrorsPort } from 'cdk8s-constructs'

TraefikServiceSpecMirroringMirrorsPort.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsPort.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsPort.fromString"></a>

```typescript
import { TraefikServiceSpecMirroringMirrorsPort } from 'cdk8s-constructs'

TraefikServiceSpecMirroringMirrorsPort.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsPort.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsPort.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsPort.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### TraefikServiceSpecMirroringPort <a name="TraefikServiceSpecMirroringPort" id="cdk8s-constructs.TraefikServiceSpecMirroringPort"></a>

Port defines the port of a Kubernetes Service.

This can be a reference to a named port.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringPort.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringPort.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.TraefikServiceSpecMirroringPort.fromNumber"></a>

```typescript
import { TraefikServiceSpecMirroringPort } from 'cdk8s-constructs'

TraefikServiceSpecMirroringPort.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.TraefikServiceSpecMirroringPort.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.TraefikServiceSpecMirroringPort.fromString"></a>

```typescript
import { TraefikServiceSpecMirroringPort } from 'cdk8s-constructs'

TraefikServiceSpecMirroringPort.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.TraefikServiceSpecMirroringPort.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringPort.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.TraefikServiceSpecMirroringPort.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


### TraefikServiceSpecWeightedServicesPort <a name="TraefikServiceSpecWeightedServicesPort" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesPort"></a>

Port defines the port of a Kubernetes Service.

This can be a reference to a named port.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesPort.fromNumber">fromNumber</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesPort.fromString">fromString</a></code> | *No description.* |

---

##### `fromNumber` <a name="fromNumber" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesPort.fromNumber"></a>

```typescript
import { TraefikServiceSpecWeightedServicesPort } from 'cdk8s-constructs'

TraefikServiceSpecWeightedServicesPort.fromNumber(value: number)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesPort.fromNumber.parameter.value"></a>

- *Type:* number

---

##### `fromString` <a name="fromString" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesPort.fromString"></a>

```typescript
import { TraefikServiceSpecWeightedServicesPort } from 'cdk8s-constructs'

TraefikServiceSpecWeightedServicesPort.fromString(value: string)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesPort.fromString.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesPort.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesPort.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---


## Protocols <a name="Protocols" id="Protocols"></a>

### ICloudflareTunnel <a name="ICloudflareTunnel" id="cdk8s-constructs.ICloudflareTunnel"></a>

- *Implemented By:* <a href="#cdk8s-constructs.CloudflareClusterTunnel">CloudflareClusterTunnel</a>, <a href="#cdk8s-constructs.CloudflareTunnel">CloudflareTunnel</a>, <a href="#cdk8s-constructs.ICloudflareTunnel">ICloudflareTunnel</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ICloudflareTunnel.bindToService">bindToService</a></code> | *No description.* |

---

##### `bindToService` <a name="bindToService" id="cdk8s-constructs.ICloudflareTunnel.bindToService"></a>

```typescript
public bindToService(service: Service, props?: BindToServiceProps): CloudflareTunnelBinding
```

###### `service`<sup>Required</sup> <a name="service" id="cdk8s-constructs.ICloudflareTunnel.bindToService.parameter.service"></a>

- *Type:* cdk8s-plus-minus.Service

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk8s-constructs.ICloudflareTunnel.bindToService.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.BindToServiceProps">BindToServiceProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ICloudflareTunnel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.ICloudflareTunnel.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ICloudflareTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk8s-constructs.ICloudflareTunnel.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

### ISecretStore <a name="ISecretStore" id="cdk8s-constructs.ISecretStore"></a>

- *Extends:* cdk8s-plus-27.IResource

- *Implemented By:* <a href="#cdk8s-constructs.ImportedSecretStore">ImportedSecretStore</a>, <a href="#cdk8s-constructs.OnePasswordClusterSecretStore">OnePasswordClusterSecretStore</a>, <a href="#cdk8s-constructs.SecretStore">SecretStore</a>, <a href="#cdk8s-constructs.ISecretStore">ISecretStore</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.ISecretStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.ISecretStore.property.apiGroup">apiGroup</a></code> | <code>string</code> | The group portion of the API version (e.g. `authorization.k8s.io`). |
| <code><a href="#cdk8s-constructs.ISecretStore.property.resourceType">resourceType</a></code> | <code>string</code> | The name of a resource type as it appears in the relevant API endpoint. |
| <code><a href="#cdk8s-constructs.ISecretStore.property.resourceName">resourceName</a></code> | <code>string</code> | The unique, namespace-global, name of an object inside the Kubernetes cluster. |
| <code><a href="#cdk8s-constructs.ISecretStore.property.apiVersion">apiVersion</a></code> | <code>string</code> | The object's API version (e.g. "authorization.k8s.io/v1"). |
| <code><a href="#cdk8s-constructs.ISecretStore.property.kind">kind</a></code> | <code>string</code> | The object kind (e.g. "Deployment"). |
| <code><a href="#cdk8s-constructs.ISecretStore.property.name">name</a></code> | <code>string</code> | The Kubernetes name of this resource. |
| <code><a href="#cdk8s-constructs.ISecretStore.property.storeType">storeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.ISecretStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="cdk8s-constructs.ISecretStore.property.apiGroup"></a>

```typescript
public readonly apiGroup: string;
```

- *Type:* string

The group portion of the API version (e.g. `authorization.k8s.io`).

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk8s-constructs.ISecretStore.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The name of a resource type as it appears in the relevant API endpoint.

> [https://kubernetes.io/docs/reference/access-authn-authz/rbac/#referring-to-resources](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#referring-to-resources)

---

*Example*

```typescript
- "pods" or "pods/log"
```


##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="cdk8s-constructs.ISecretStore.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The unique, namespace-global, name of an object inside the Kubernetes cluster.

If this is omitted, the ApiResource should represent all objects of the given type.

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="cdk8s-constructs.ISecretStore.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The object's API version (e.g. "authorization.k8s.io/v1").

---

##### `kind`<sup>Required</sup> <a name="kind" id="cdk8s-constructs.ISecretStore.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The object kind (e.g. "Deployment").

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.ISecretStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Kubernetes name of this resource.

---

##### `storeType`<sup>Required</sup> <a name="storeType" id="cdk8s-constructs.ISecretStore.property.storeType"></a>

```typescript
public readonly storeType: string;
```

- *Type:* string

---

### IService <a name="IService" id="cdk8s-constructs.IService"></a>

- *Implemented By:* <a href="#cdk8s-constructs.IService">IService</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.IService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.IService.property.port">port</a></code> | <code>number</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.IService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="cdk8s-constructs.IService.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

## Enums <a name="Enums" id="Enums"></a>

### CertIssuerName <a name="CertIssuerName" id="cdk8s-constructs.CertIssuerName"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.CertIssuerName.CLOUDFLARE">CLOUDFLARE</a></code> | *No description.* |

---

##### `CLOUDFLARE` <a name="CLOUDFLARE" id="cdk8s-constructs.CertIssuerName.CLOUDFLARE"></a>

---


### ClusterIngressClass <a name="ClusterIngressClass" id="cdk8s-constructs.ClusterIngressClass"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ClusterIngressClass.TRAEFIC_EXTERNAL">TRAEFIC_EXTERNAL</a></code> | *No description.* |

---

##### `TRAEFIC_EXTERNAL` <a name="TRAEFIC_EXTERNAL" id="cdk8s-constructs.ClusterIngressClass.TRAEFIC_EXTERNAL"></a>

---


### GatusAlertType <a name="GatusAlertType" id="cdk8s-constructs.GatusAlertType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.GatusAlertType.DISCORD">DISCORD</a></code> | *No description.* |

---

##### `DISCORD` <a name="DISCORD" id="cdk8s-constructs.GatusAlertType.DISCORD"></a>

---


### GatusConditions <a name="GatusConditions" id="cdk8s-constructs.GatusConditions"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.GatusConditions.HTTP_STATUS_200">HTTP_STATUS_200</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusConditions.HTTP_STATUS_2XX">HTTP_STATUS_2XX</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusConditions.CERTIFICATE_EXPIRY_CORE_THAN_48_HOURS">CERTIFICATE_EXPIRY_CORE_THAN_48_HOURS</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusConditions.RESPONSE_TIME_SUB_500">RESPONSE_TIME_SUB_500</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusConditions.RESPONSE_TIME_SUB_1000">RESPONSE_TIME_SUB_1000</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusConditions.RESPONSE_TIME_SUB_2000">RESPONSE_TIME_SUB_2000</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusConditions.RESPONSE_TIME_SUB_5000">RESPONSE_TIME_SUB_5000</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusConditions.RESPONSE_TIME_SUB_10000">RESPONSE_TIME_SUB_10000</a></code> | *No description.* |

---

##### `HTTP_STATUS_200` <a name="HTTP_STATUS_200" id="cdk8s-constructs.GatusConditions.HTTP_STATUS_200"></a>

---


##### `HTTP_STATUS_2XX` <a name="HTTP_STATUS_2XX" id="cdk8s-constructs.GatusConditions.HTTP_STATUS_2XX"></a>

---


##### `CERTIFICATE_EXPIRY_CORE_THAN_48_HOURS` <a name="CERTIFICATE_EXPIRY_CORE_THAN_48_HOURS" id="cdk8s-constructs.GatusConditions.CERTIFICATE_EXPIRY_CORE_THAN_48_HOURS"></a>

---


##### `RESPONSE_TIME_SUB_500` <a name="RESPONSE_TIME_SUB_500" id="cdk8s-constructs.GatusConditions.RESPONSE_TIME_SUB_500"></a>

---


##### `RESPONSE_TIME_SUB_1000` <a name="RESPONSE_TIME_SUB_1000" id="cdk8s-constructs.GatusConditions.RESPONSE_TIME_SUB_1000"></a>

---


##### `RESPONSE_TIME_SUB_2000` <a name="RESPONSE_TIME_SUB_2000" id="cdk8s-constructs.GatusConditions.RESPONSE_TIME_SUB_2000"></a>

---


##### `RESPONSE_TIME_SUB_5000` <a name="RESPONSE_TIME_SUB_5000" id="cdk8s-constructs.GatusConditions.RESPONSE_TIME_SUB_5000"></a>

---


##### `RESPONSE_TIME_SUB_10000` <a name="RESPONSE_TIME_SUB_10000" id="cdk8s-constructs.GatusConditions.RESPONSE_TIME_SUB_10000"></a>

---


### GatusDatabaseEngine <a name="GatusDatabaseEngine" id="cdk8s-constructs.GatusDatabaseEngine"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.GatusDatabaseEngine.POSTGRES">POSTGRES</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusDatabaseEngine.SQLITE">SQLITE</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusDatabaseEngine.MEMORY">MEMORY</a></code> | *No description.* |

---

##### `POSTGRES` <a name="POSTGRES" id="cdk8s-constructs.GatusDatabaseEngine.POSTGRES"></a>

---


##### `SQLITE` <a name="SQLITE" id="cdk8s-constructs.GatusDatabaseEngine.SQLITE"></a>

---


##### `MEMORY` <a name="MEMORY" id="cdk8s-constructs.GatusDatabaseEngine.MEMORY"></a>

---


### GatusMethod <a name="GatusMethod" id="cdk8s-constructs.GatusMethod"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.GatusMethod.GET">GET</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusMethod.POST">POST</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusMethod.PUT">PUT</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.GatusMethod.DELETE">DELETE</a></code> | *No description.* |

---

##### `GET` <a name="GET" id="cdk8s-constructs.GatusMethod.GET"></a>

---


##### `POST` <a name="POST" id="cdk8s-constructs.GatusMethod.POST"></a>

---


##### `PUT` <a name="PUT" id="cdk8s-constructs.GatusMethod.PUT"></a>

---


##### `DELETE` <a name="DELETE" id="cdk8s-constructs.GatusMethod.DELETE"></a>

---


### GpuType <a name="GpuType" id="cdk8s-constructs.GpuType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.GpuType.INTEL_INTEGRATED">INTEL_INTEGRATED</a></code> | *No description.* |

---

##### `INTEL_INTEGRATED` <a name="INTEL_INTEGRATED" id="cdk8s-constructs.GpuType.INTEL_INTEGRATED"></a>

---


### ImmichLogLevel <a name="ImmichLogLevel" id="cdk8s-constructs.ImmichLogLevel"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ImmichLogLevel.VERBOSE">VERBOSE</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichLogLevel.DEBUG">DEBUG</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichLogLevel.LOG">LOG</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichLogLevel.WARN">WARN</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.ImmichLogLevel.ERROR">ERROR</a></code> | *No description.* |

---

##### `VERBOSE` <a name="VERBOSE" id="cdk8s-constructs.ImmichLogLevel.VERBOSE"></a>

---


##### `DEBUG` <a name="DEBUG" id="cdk8s-constructs.ImmichLogLevel.DEBUG"></a>

---


##### `LOG` <a name="LOG" id="cdk8s-constructs.ImmichLogLevel.LOG"></a>

---


##### `WARN` <a name="WARN" id="cdk8s-constructs.ImmichLogLevel.WARN"></a>

---


##### `ERROR` <a name="ERROR" id="cdk8s-constructs.ImmichLogLevel.ERROR"></a>

---


### IngressRouteSpecRoutesKind <a name="IngressRouteSpecRoutesKind" id="cdk8s-constructs.IngressRouteSpecRoutesKind"></a>

Kind defines the kind of the route.

Rule is the only supported kind.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesKind.RULE">RULE</a></code> | Rule. |

---

##### `RULE` <a name="RULE" id="cdk8s-constructs.IngressRouteSpecRoutesKind.RULE"></a>

Rule.

---


### IngressRouteSpecRoutesServicesKind <a name="IngressRouteSpecRoutesServicesKind" id="cdk8s-constructs.IngressRouteSpecRoutesServicesKind"></a>

Kind defines the kind of the Service.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesKind.SERVICE">SERVICE</a></code> | Service. |
| <code><a href="#cdk8s-constructs.IngressRouteSpecRoutesServicesKind.TRAEFIK_SERVICE">TRAEFIK_SERVICE</a></code> | TraefikService. |

---

##### `SERVICE` <a name="SERVICE" id="cdk8s-constructs.IngressRouteSpecRoutesServicesKind.SERVICE"></a>

Service.

---


##### `TRAEFIK_SERVICE` <a name="TRAEFIK_SERVICE" id="cdk8s-constructs.IngressRouteSpecRoutesServicesKind.TRAEFIK_SERVICE"></a>

TraefikService.

---


### LetsEncryptEndpoint <a name="LetsEncryptEndpoint" id="cdk8s-constructs.LetsEncryptEndpoint"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.LetsEncryptEndpoint.STAGING">STAGING</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.LetsEncryptEndpoint.PROD">PROD</a></code> | *No description.* |

---

##### `STAGING` <a name="STAGING" id="cdk8s-constructs.LetsEncryptEndpoint.STAGING"></a>

---


##### `PROD` <a name="PROD" id="cdk8s-constructs.LetsEncryptEndpoint.PROD"></a>

---


### MiddlewareSpecErrorsServiceKind <a name="MiddlewareSpecErrorsServiceKind" id="cdk8s-constructs.MiddlewareSpecErrorsServiceKind"></a>

Kind defines the kind of the Service.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceKind.SERVICE">SERVICE</a></code> | Service. |
| <code><a href="#cdk8s-constructs.MiddlewareSpecErrorsServiceKind.TRAEFIK_SERVICE">TRAEFIK_SERVICE</a></code> | TraefikService. |

---

##### `SERVICE` <a name="SERVICE" id="cdk8s-constructs.MiddlewareSpecErrorsServiceKind.SERVICE"></a>

Service.

---


##### `TRAEFIK_SERVICE` <a name="TRAEFIK_SERVICE" id="cdk8s-constructs.MiddlewareSpecErrorsServiceKind.TRAEFIK_SERVICE"></a>

TraefikService.

---


### PalworldDifficulty <a name="PalworldDifficulty" id="cdk8s-constructs.PalworldDifficulty"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.PalworldDifficulty.NONE">NONE</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldDifficulty.NORMAL">NORMAL</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.PalworldDifficulty.DIFFICULT">DIFFICULT</a></code> | *No description.* |

---

##### `NONE` <a name="NONE" id="cdk8s-constructs.PalworldDifficulty.NONE"></a>

---


##### `NORMAL` <a name="NORMAL" id="cdk8s-constructs.PalworldDifficulty.NORMAL"></a>

---


##### `DIFFICULT` <a name="DIFFICULT" id="cdk8s-constructs.PalworldDifficulty.DIFFICULT"></a>

---


### PrimaryUpdateStrategy <a name="PrimaryUpdateStrategy" id="cdk8s-constructs.PrimaryUpdateStrategy"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.PrimaryUpdateStrategy.UNSUPERVISED">UNSUPERVISED</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.PrimaryUpdateStrategy.SUPERVISED">SUPERVISED</a></code> | *No description.* |

---

##### `UNSUPERVISED` <a name="UNSUPERVISED" id="cdk8s-constructs.PrimaryUpdateStrategy.UNSUPERVISED"></a>

---


##### `SUPERVISED` <a name="SUPERVISED" id="cdk8s-constructs.PrimaryUpdateStrategy.SUPERVISED"></a>

---


### SecretStoreType <a name="SecretStoreType" id="cdk8s-constructs.SecretStoreType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.SecretStoreType.STANDARD">STANDARD</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.SecretStoreType.CLUSTER">CLUSTER</a></code> | *No description.* |

---

##### `STANDARD` <a name="STANDARD" id="cdk8s-constructs.SecretStoreType.STANDARD"></a>

---


##### `CLUSTER` <a name="CLUSTER" id="cdk8s-constructs.SecretStoreType.CLUSTER"></a>

---


### TandoorDatabaseEngine <a name="TandoorDatabaseEngine" id="cdk8s-constructs.TandoorDatabaseEngine"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TandoorDatabaseEngine.POSTGRES">POSTGRES</a></code> | *No description.* |

---

##### `POSTGRES` <a name="POSTGRES" id="cdk8s-constructs.TandoorDatabaseEngine.POSTGRES"></a>

---


### TlsOptionSpecClientAuthClientAuthType <a name="TlsOptionSpecClientAuthClientAuthType" id="cdk8s-constructs.TlsOptionSpecClientAuthClientAuthType"></a>

ClientAuthType defines the client authentication type to apply.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TlsOptionSpecClientAuthClientAuthType.NO_CLIENT_CERT">NO_CLIENT_CERT</a></code> | NoClientCert. |
| <code><a href="#cdk8s-constructs.TlsOptionSpecClientAuthClientAuthType.REQUEST_CLIENT_CERT">REQUEST_CLIENT_CERT</a></code> | RequestClientCert. |
| <code><a href="#cdk8s-constructs.TlsOptionSpecClientAuthClientAuthType.REQUIRE_ANY_CLIENT_CERT">REQUIRE_ANY_CLIENT_CERT</a></code> | RequireAnyClientCert. |
| <code><a href="#cdk8s-constructs.TlsOptionSpecClientAuthClientAuthType.VERIFY_CLIENT_CERT_IF_GIVEN">VERIFY_CLIENT_CERT_IF_GIVEN</a></code> | VerifyClientCertIfGiven. |
| <code><a href="#cdk8s-constructs.TlsOptionSpecClientAuthClientAuthType.REQUIRE_AND_VERIFY_CLIENT_CERT">REQUIRE_AND_VERIFY_CLIENT_CERT</a></code> | RequireAndVerifyClientCert. |

---

##### `NO_CLIENT_CERT` <a name="NO_CLIENT_CERT" id="cdk8s-constructs.TlsOptionSpecClientAuthClientAuthType.NO_CLIENT_CERT"></a>

NoClientCert.

---


##### `REQUEST_CLIENT_CERT` <a name="REQUEST_CLIENT_CERT" id="cdk8s-constructs.TlsOptionSpecClientAuthClientAuthType.REQUEST_CLIENT_CERT"></a>

RequestClientCert.

---


##### `REQUIRE_ANY_CLIENT_CERT` <a name="REQUIRE_ANY_CLIENT_CERT" id="cdk8s-constructs.TlsOptionSpecClientAuthClientAuthType.REQUIRE_ANY_CLIENT_CERT"></a>

RequireAnyClientCert.

---


##### `VERIFY_CLIENT_CERT_IF_GIVEN` <a name="VERIFY_CLIENT_CERT_IF_GIVEN" id="cdk8s-constructs.TlsOptionSpecClientAuthClientAuthType.VERIFY_CLIENT_CERT_IF_GIVEN"></a>

VerifyClientCertIfGiven.

---


##### `REQUIRE_AND_VERIFY_CLIENT_CERT` <a name="REQUIRE_AND_VERIFY_CLIENT_CERT" id="cdk8s-constructs.TlsOptionSpecClientAuthClientAuthType.REQUIRE_AND_VERIFY_CLIENT_CERT"></a>

RequireAndVerifyClientCert.

---


### TraefikServiceSpecMirroringKind <a name="TraefikServiceSpecMirroringKind" id="cdk8s-constructs.TraefikServiceSpecMirroringKind"></a>

Kind defines the kind of the Service.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringKind.SERVICE">SERVICE</a></code> | Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringKind.TRAEFIK_SERVICE">TRAEFIK_SERVICE</a></code> | TraefikService. |

---

##### `SERVICE` <a name="SERVICE" id="cdk8s-constructs.TraefikServiceSpecMirroringKind.SERVICE"></a>

Service.

---


##### `TRAEFIK_SERVICE` <a name="TRAEFIK_SERVICE" id="cdk8s-constructs.TraefikServiceSpecMirroringKind.TRAEFIK_SERVICE"></a>

TraefikService.

---


### TraefikServiceSpecMirroringMirrorsKind <a name="TraefikServiceSpecMirroringMirrorsKind" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsKind"></a>

Kind defines the kind of the Service.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsKind.SERVICE">SERVICE</a></code> | Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecMirroringMirrorsKind.TRAEFIK_SERVICE">TRAEFIK_SERVICE</a></code> | TraefikService. |

---

##### `SERVICE` <a name="SERVICE" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsKind.SERVICE"></a>

Service.

---


##### `TRAEFIK_SERVICE` <a name="TRAEFIK_SERVICE" id="cdk8s-constructs.TraefikServiceSpecMirroringMirrorsKind.TRAEFIK_SERVICE"></a>

TraefikService.

---


### TraefikServiceSpecWeightedServicesKind <a name="TraefikServiceSpecWeightedServicesKind" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesKind"></a>

Kind defines the kind of the Service.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesKind.SERVICE">SERVICE</a></code> | Service. |
| <code><a href="#cdk8s-constructs.TraefikServiceSpecWeightedServicesKind.TRAEFIK_SERVICE">TRAEFIK_SERVICE</a></code> | TraefikService. |

---

##### `SERVICE` <a name="SERVICE" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesKind.SERVICE"></a>

Service.

---


##### `TRAEFIK_SERVICE` <a name="TRAEFIK_SERVICE" id="cdk8s-constructs.TraefikServiceSpecWeightedServicesKind.TRAEFIK_SERVICE"></a>

TraefikService.

---


### TunnelBindingSubjectsSpecProxyType <a name="TunnelBindingSubjectsSpecProxyType" id="cdk8s-constructs.TunnelBindingSubjectsSpecProxyType"></a>

ProxyType configures the proxy type.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.TunnelBindingSubjectsSpecProxyType.SOCKS">SOCKS</a></code> | socks. |

---

##### `SOCKS` <a name="SOCKS" id="cdk8s-constructs.TunnelBindingSubjectsSpecProxyType.SOCKS"></a>

socks.

---

