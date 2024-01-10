# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

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

### Middleware <a name="Middleware" id="cdk8s-constructs.Middleware"></a>

#### Initializers <a name="Initializers" id="cdk8s-constructs.Middleware.Initializer"></a>

```typescript
import { Middleware } from 'cdk8s-constructs'

new Middleware(scope: Construct, name: string, props: MiddlewareProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Middleware.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Middleware.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Middleware.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.MiddlewareProps">MiddlewareProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.Middleware.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Middleware.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.Middleware.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.MiddlewareProps">MiddlewareProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Middleware.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.Middleware.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.Middleware.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

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

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.Middleware.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-constructs.Middleware.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.Middleware.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.Middleware.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.Middleware.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="cdk8s-constructs.Middleware.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

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
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.Initializer.parameter.props">props</a></code> | <code><a href="#cdk8s-constructs.OnePasswordSecretStoreProps">OnePasswordSecretStoreProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-constructs.OnePasswordClusterSecretStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.OnePasswordClusterSecretStore.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk8s-constructs.OnePasswordClusterSecretStore.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk8s-constructs.OnePasswordSecretStoreProps">OnePasswordSecretStoreProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-constructs.OnePasswordClusterSecretStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

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

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.OnePasswordClusterSecretStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-constructs.OnePasswordClusterSecretStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

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

## Structs <a name="Structs" id="Structs"></a>

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

### MiddlewareProps <a name="MiddlewareProps" id="cdk8s-constructs.MiddlewareProps"></a>

#### Initializer <a name="Initializer" id="cdk8s-constructs.MiddlewareProps.Initializer"></a>

```typescript
import { MiddlewareProps } from 'cdk8s-constructs'

const middlewareProps: MiddlewareProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-constructs.MiddlewareProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-constructs.MiddlewareProps.property.headers">headers</a></code> | <code><a href="#cdk8s-constructs.MiddlewareSpecHeaders">MiddlewareSpecHeaders</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.MiddlewareProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk8s-constructs.MiddlewareProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `headers`<sup>Optional</sup> <a name="headers" id="cdk8s-constructs.MiddlewareProps.property.headers"></a>

```typescript
public readonly headers: MiddlewareSpecHeaders;
```

- *Type:* <a href="#cdk8s-constructs.MiddlewareSpecHeaders">MiddlewareSpecHeaders</a>

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="cdk8s-constructs.MiddlewareProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

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
| <code><a href="#cdk8s-constructs.OnePasswordSecretStoreProps.property.connectTokenRef">connectTokenRef</a></code> | <code><a href="#cdk8s-constructs.SecretReference">SecretReference</a></code> | *No description.* |
| <code><a href="#cdk8s-constructs.OnePasswordSecretStoreProps.property.vaults">vaults</a></code> | <code>string[]</code> | *No description.* |

---

##### `connectHost`<sup>Required</sup> <a name="connectHost" id="cdk8s-constructs.OnePasswordSecretStoreProps.property.connectHost"></a>

```typescript
public readonly connectHost: string;
```

- *Type:* string

---

##### `connectTokenRef`<sup>Required</sup> <a name="connectTokenRef" id="cdk8s-constructs.OnePasswordSecretStoreProps.property.connectTokenRef"></a>

```typescript
public readonly connectTokenRef: SecretReference;
```

- *Type:* <a href="#cdk8s-constructs.SecretReference">SecretReference</a>

---

##### `vaults`<sup>Required</sup> <a name="vaults" id="cdk8s-constructs.OnePasswordSecretStoreProps.property.vaults"></a>

```typescript
public readonly vaults: string[];
```

- *Type:* string[]

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

## Classes <a name="Classes" id="Classes"></a>

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


### ServiceType <a name="ServiceType" id="cdk8s-constructs.ServiceType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-constructs.ServiceType.CLUSTER_IP">CLUSTER_IP</a></code> | Exposes the Service on a cluster-internal IP. |
| <code><a href="#cdk8s-constructs.ServiceType.NODE_PORT">NODE_PORT</a></code> | Exposes the Service on each Node's IP at a static port (the NodePort). |
| <code><a href="#cdk8s-constructs.ServiceType.LOAD_BALANCER">LOAD_BALANCER</a></code> | Exposes the Service externally using a cloud provider's load balancer. |
| <code><a href="#cdk8s-constructs.ServiceType.EXTERNAL_NAME">EXTERNAL_NAME</a></code> | Maps the Service to the contents of the externalName field (e.g. foo.bar.example.com), by returning a CNAME record with its value. No proxying of any kind is set up. |

---

##### `CLUSTER_IP` <a name="CLUSTER_IP" id="cdk8s-constructs.ServiceType.CLUSTER_IP"></a>

Exposes the Service on a cluster-internal IP.

Choosing this value makes the Service only reachable from within the cluster.
This is the default ServiceType

---


##### `NODE_PORT` <a name="NODE_PORT" id="cdk8s-constructs.ServiceType.NODE_PORT"></a>

Exposes the Service on each Node's IP at a static port (the NodePort).

A ClusterIP Service, to which the NodePort Service routes, is automatically created.
You'll be able to contact the NodePort Service, from outside the cluster,
by requesting <NodeIP>:<NodePort>.

---


##### `LOAD_BALANCER` <a name="LOAD_BALANCER" id="cdk8s-constructs.ServiceType.LOAD_BALANCER"></a>

Exposes the Service externally using a cloud provider's load balancer.

NodePort and ClusterIP Services, to which the external load balancer routes,
are automatically created.

---


##### `EXTERNAL_NAME` <a name="EXTERNAL_NAME" id="cdk8s-constructs.ServiceType.EXTERNAL_NAME"></a>

Maps the Service to the contents of the externalName field (e.g. foo.bar.example.com), by returning a CNAME record with its value. No proxying of any kind is set up.

> Note: You need either kube-dns version 1.7 or CoreDNS version 0.0.8 or higher to use the ExternalName type.

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

