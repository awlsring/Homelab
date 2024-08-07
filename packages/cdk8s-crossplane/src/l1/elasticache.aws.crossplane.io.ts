// @ts-nocheck
// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 * CacheParameterGroup is the Schema for the CacheParameterGroups API
 *
 * @schema CacheParameterGroup
 */
export class CacheParameterGroup extends ApiObject {
  /**
   * Returns the apiVersion and kind for "CacheParameterGroup"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'elasticache.aws.crossplane.io/v1alpha1',
    kind: 'CacheParameterGroup',
  }

  /**
   * Renders a Kubernetes manifest for "CacheParameterGroup".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: CacheParameterGroupProps): any {
    return {
      ...CacheParameterGroup.GVK,
      ...toJson_CacheParameterGroupProps(props),
    };
  }

  /**
   * Defines a "CacheParameterGroup" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: CacheParameterGroupProps) {
    super(scope, id, {
      ...CacheParameterGroup.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...CacheParameterGroup.GVK,
      ...toJson_CacheParameterGroupProps(resolved),
    };
  }
}

/**
 * CacheParameterGroup is the Schema for the CacheParameterGroups API
 *
 * @schema CacheParameterGroup
 */
export interface CacheParameterGroupProps {
  /**
   * @schema CacheParameterGroup#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * CacheParameterGroupSpec defines the desired state of CacheParameterGroup
   *
   * @schema CacheParameterGroup#spec
   */
  readonly spec: CacheParameterGroupSpec;

}

/**
 * Converts an object of type 'CacheParameterGroupProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CacheParameterGroupProps(obj: CacheParameterGroupProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_CacheParameterGroupSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * CacheParameterGroupSpec defines the desired state of CacheParameterGroup
 *
 * @schema CacheParameterGroupSpec
 */
export interface CacheParameterGroupSpec {
  /**
   * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. This field is planned to be deprecated in favor of the ManagementPolicies field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
   *
   * @schema CacheParameterGroupSpec#deletionPolicy
   */
  readonly deletionPolicy?: CacheParameterGroupSpecDeletionPolicy;

  /**
   * CacheParameterGroupParameters defines the desired state of CacheParameterGroup
   *
   * @schema CacheParameterGroupSpec#forProvider
   */
  readonly forProvider: CacheParameterGroupSpecForProvider;

  /**
   * THIS IS A BETA FIELD. It is on by default but can be opted out through a Crossplane feature flag. ManagementPolicies specify the array of actions Crossplane is allowed to take on the managed and external resources. This field is planned to replace the DeletionPolicy field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. If both are custom, the DeletionPolicy field will be ignored. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223 and this one: https://github.com/crossplane/crossplane/blob/444267e84783136daa93568b364a5f01228cacbe/design/one-pager-ignore-changes.md
   *
   * @schema CacheParameterGroupSpec#managementPolicies
   */
  readonly managementPolicies?: CacheParameterGroupSpecManagementPolicies[];

  /**
   * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
   *
   * @schema CacheParameterGroupSpec#providerConfigRef
   */
  readonly providerConfigRef?: CacheParameterGroupSpecProviderConfigRef;

  /**
   * PublishConnectionDetailsTo specifies the connection secret config which contains a name, metadata and a reference to secret store config to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
   *
   * @schema CacheParameterGroupSpec#publishConnectionDetailsTo
   */
  readonly publishConnectionDetailsTo?: CacheParameterGroupSpecPublishConnectionDetailsTo;

  /**
   * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource. This field is planned to be replaced in a future release in favor of PublishConnectionDetailsTo. Currently, both could be set independently and connection details would be published to both without affecting each other.
   *
   * @schema CacheParameterGroupSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: CacheParameterGroupSpecWriteConnectionSecretToRef;

}

/**
 * Converts an object of type 'CacheParameterGroupSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CacheParameterGroupSpec(obj: CacheParameterGroupSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deletionPolicy': obj.deletionPolicy,
    'forProvider': toJson_CacheParameterGroupSpecForProvider(obj.forProvider),
    'managementPolicies': obj.managementPolicies?.map(y => y),
    'providerConfigRef': toJson_CacheParameterGroupSpecProviderConfigRef(obj.providerConfigRef),
    'publishConnectionDetailsTo': toJson_CacheParameterGroupSpecPublishConnectionDetailsTo(obj.publishConnectionDetailsTo),
    'writeConnectionSecretToRef': toJson_CacheParameterGroupSpecWriteConnectionSecretToRef(obj.writeConnectionSecretToRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * DeletionPolicy specifies what will happen to the underlying external when this managed resource is deleted - either "Delete" or "Orphan" the external resource. This field is planned to be deprecated in favor of the ManagementPolicies field in a future release. Currently, both could be set independently and non-default values would be honored if the feature flag is enabled. See the design doc for more information: https://github.com/crossplane/crossplane/blob/499895a25d1a1a0ba1604944ef98ac7a1a71f197/design/design-doc-observe-only-resources.md?plain=1#L223
 *
 * @schema CacheParameterGroupSpecDeletionPolicy
 */
export enum CacheParameterGroupSpecDeletionPolicy {
  /** Orphan */
  ORPHAN = "Orphan",
  /** Delete */
  DELETE = "Delete",
}

/**
 * CacheParameterGroupParameters defines the desired state of CacheParameterGroup
 *
 * @schema CacheParameterGroupSpecForProvider
 */
export interface CacheParameterGroupSpecForProvider {
  /**
   * The name of the cache parameter group family that the cache parameter group can be used with.
   * Valid values are: memcached1.4 | memcached1.5 | memcached1.6 | redis2.6 | redis2.8 | redis3.2 | redis4.0 | redis5.0 | redis6.x | redis7
   *
   * @schema CacheParameterGroupSpecForProvider#cacheParameterGroupFamily
   */
  readonly cacheParameterGroupFamily: string;

  /**
   * A user-specified description for the cache parameter group.
   *
   * @schema CacheParameterGroupSpecForProvider#description
   */
  readonly description: string;

  /**
   * A list of parameters to associate with this DB parameter group
   *
   * @schema CacheParameterGroupSpecForProvider#parameters
   */
  readonly parameters?: CacheParameterGroupSpecForProviderParameters[];

  /**
   * Region is which region the CacheParameterGroup will be created.
   *
   * @schema CacheParameterGroupSpecForProvider#region
   */
  readonly region: string;

  /**
   * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
   *
   * @schema CacheParameterGroupSpecForProvider#tags
   */
  readonly tags?: CacheParameterGroupSpecForProviderTags[];

}

/**
 * Converts an object of type 'CacheParameterGroupSpecForProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CacheParameterGroupSpecForProvider(obj: CacheParameterGroupSpecForProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cacheParameterGroupFamily': obj.cacheParameterGroupFamily,
    'description': obj.description,
    'parameters': obj.parameters?.map(y => toJson_CacheParameterGroupSpecForProviderParameters(y)),
    'region': obj.region,
    'tags': obj.tags?.map(y => toJson_CacheParameterGroupSpecForProviderTags(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A ManagementAction represents an action that the Crossplane controllers can take on an external resource.
 *
 * @schema CacheParameterGroupSpecManagementPolicies
 */
export enum CacheParameterGroupSpecManagementPolicies {
  /** Observe */
  OBSERVE = "Observe",
  /** Create */
  CREATE = "Create",
  /** Update */
  UPDATE = "Update",
  /** Delete */
  DELETE = "Delete",
  /** LateInitialize */
  LATE_INITIALIZE = "LateInitialize",
  /** * */
  VALUE_ASTERISK = "*",
}

/**
 * ProviderConfigReference specifies how the provider that will be used to create, observe, update, and delete this managed resource should be configured.
 *
 * @schema CacheParameterGroupSpecProviderConfigRef
 */
export interface CacheParameterGroupSpecProviderConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema CacheParameterGroupSpecProviderConfigRef#name
   */
  readonly name: string;

  /**
   * Policies for referencing.
   *
   * @schema CacheParameterGroupSpecProviderConfigRef#policy
   */
  readonly policy?: CacheParameterGroupSpecProviderConfigRefPolicy;

}

/**
 * Converts an object of type 'CacheParameterGroupSpecProviderConfigRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CacheParameterGroupSpecProviderConfigRef(obj: CacheParameterGroupSpecProviderConfigRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'policy': toJson_CacheParameterGroupSpecProviderConfigRefPolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * PublishConnectionDetailsTo specifies the connection secret config which contains a name, metadata and a reference to secret store config to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource.
 *
 * @schema CacheParameterGroupSpecPublishConnectionDetailsTo
 */
export interface CacheParameterGroupSpecPublishConnectionDetailsTo {
  /**
   * SecretStoreConfigRef specifies which secret store config should be used for this ConnectionSecret.
   *
   * @schema CacheParameterGroupSpecPublishConnectionDetailsTo#configRef
   */
  readonly configRef?: CacheParameterGroupSpecPublishConnectionDetailsToConfigRef;

  /**
   * Metadata is the metadata for connection secret.
   *
   * @schema CacheParameterGroupSpecPublishConnectionDetailsTo#metadata
   */
  readonly metadata?: CacheParameterGroupSpecPublishConnectionDetailsToMetadata;

  /**
   * Name is the name of the connection secret.
   *
   * @schema CacheParameterGroupSpecPublishConnectionDetailsTo#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'CacheParameterGroupSpecPublishConnectionDetailsTo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CacheParameterGroupSpecPublishConnectionDetailsTo(obj: CacheParameterGroupSpecPublishConnectionDetailsTo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configRef': toJson_CacheParameterGroupSpecPublishConnectionDetailsToConfigRef(obj.configRef),
    'metadata': toJson_CacheParameterGroupSpecPublishConnectionDetailsToMetadata(obj.metadata),
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * WriteConnectionSecretToReference specifies the namespace and name of a Secret to which any connection details for this managed resource should be written. Connection details frequently include the endpoint, username, and password required to connect to the managed resource. This field is planned to be replaced in a future release in favor of PublishConnectionDetailsTo. Currently, both could be set independently and connection details would be published to both without affecting each other.
 *
 * @schema CacheParameterGroupSpecWriteConnectionSecretToRef
 */
export interface CacheParameterGroupSpecWriteConnectionSecretToRef {
  /**
   * Name of the secret.
   *
   * @schema CacheParameterGroupSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * Namespace of the secret.
   *
   * @schema CacheParameterGroupSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * Converts an object of type 'CacheParameterGroupSpecWriteConnectionSecretToRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CacheParameterGroupSpecWriteConnectionSecretToRef(obj: CacheParameterGroupSpecWriteConnectionSecretToRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CacheParameterGroupSpecForProviderParameters
 */
export interface CacheParameterGroupSpecForProviderParameters {
  /**
   * @schema CacheParameterGroupSpecForProviderParameters#parameterName
   */
  readonly parameterName?: string;

  /**
   * @schema CacheParameterGroupSpecForProviderParameters#parameterValue
   */
  readonly parameterValue?: string;

}

/**
 * Converts an object of type 'CacheParameterGroupSpecForProviderParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CacheParameterGroupSpecForProviderParameters(obj: CacheParameterGroupSpecForProviderParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'parameterName': obj.parameterName,
    'parameterValue': obj.parameterValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CacheParameterGroupSpecForProviderTags
 */
export interface CacheParameterGroupSpecForProviderTags {
  /**
   * @schema CacheParameterGroupSpecForProviderTags#key
   */
  readonly key?: string;

  /**
   * @schema CacheParameterGroupSpecForProviderTags#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CacheParameterGroupSpecForProviderTags' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CacheParameterGroupSpecForProviderTags(obj: CacheParameterGroupSpecForProviderTags | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Policies for referencing.
 *
 * @schema CacheParameterGroupSpecProviderConfigRefPolicy
 */
export interface CacheParameterGroupSpecProviderConfigRefPolicy {
  /**
   * Resolution specifies whether resolution of this reference is required. The default is 'Required', which means the reconcile will fail if the reference cannot be resolved. 'Optional' means this reference will be a no-op if it cannot be resolved.
   *
   * @schema CacheParameterGroupSpecProviderConfigRefPolicy#resolution
   */
  readonly resolution?: CacheParameterGroupSpecProviderConfigRefPolicyResolution;

  /**
   * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
   *
   * @schema CacheParameterGroupSpecProviderConfigRefPolicy#resolve
   */
  readonly resolve?: CacheParameterGroupSpecProviderConfigRefPolicyResolve;

}

/**
 * Converts an object of type 'CacheParameterGroupSpecProviderConfigRefPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CacheParameterGroupSpecProviderConfigRefPolicy(obj: CacheParameterGroupSpecProviderConfigRefPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resolution': obj.resolution,
    'resolve': obj.resolve,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * SecretStoreConfigRef specifies which secret store config should be used for this ConnectionSecret.
 *
 * @schema CacheParameterGroupSpecPublishConnectionDetailsToConfigRef
 */
export interface CacheParameterGroupSpecPublishConnectionDetailsToConfigRef {
  /**
   * Name of the referenced object.
   *
   * @schema CacheParameterGroupSpecPublishConnectionDetailsToConfigRef#name
   */
  readonly name: string;

  /**
   * Policies for referencing.
   *
   * @schema CacheParameterGroupSpecPublishConnectionDetailsToConfigRef#policy
   */
  readonly policy?: CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicy;

}

/**
 * Converts an object of type 'CacheParameterGroupSpecPublishConnectionDetailsToConfigRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CacheParameterGroupSpecPublishConnectionDetailsToConfigRef(obj: CacheParameterGroupSpecPublishConnectionDetailsToConfigRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'policy': toJson_CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Metadata is the metadata for connection secret.
 *
 * @schema CacheParameterGroupSpecPublishConnectionDetailsToMetadata
 */
export interface CacheParameterGroupSpecPublishConnectionDetailsToMetadata {
  /**
   * Annotations are the annotations to be added to connection secret. - For Kubernetes secrets, this will be used as "metadata.annotations". - It is up to Secret Store implementation for others store types.
   *
   * @schema CacheParameterGroupSpecPublishConnectionDetailsToMetadata#annotations
   */
  readonly annotations?: { [key: string]: string };

  /**
   * Labels are the labels/tags to be added to connection secret. - For Kubernetes secrets, this will be used as "metadata.labels". - It is up to Secret Store implementation for others store types.
   *
   * @schema CacheParameterGroupSpecPublishConnectionDetailsToMetadata#labels
   */
  readonly labels?: { [key: string]: string };

  /**
   * Type is the SecretType for the connection secret. - Only valid for Kubernetes Secret Stores.
   *
   * @schema CacheParameterGroupSpecPublishConnectionDetailsToMetadata#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'CacheParameterGroupSpecPublishConnectionDetailsToMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CacheParameterGroupSpecPublishConnectionDetailsToMetadata(obj: CacheParameterGroupSpecPublishConnectionDetailsToMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'annotations': ((obj.annotations) === undefined) ? undefined : (Object.entries(obj.annotations).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'labels': ((obj.labels) === undefined) ? undefined : (Object.entries(obj.labels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Resolution specifies whether resolution of this reference is required. The default is 'Required', which means the reconcile will fail if the reference cannot be resolved. 'Optional' means this reference will be a no-op if it cannot be resolved.
 *
 * @schema CacheParameterGroupSpecProviderConfigRefPolicyResolution
 */
export enum CacheParameterGroupSpecProviderConfigRefPolicyResolution {
  /** Required */
  REQUIRED = "Required",
  /** Optional */
  OPTIONAL = "Optional",
}

/**
 * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
 *
 * @schema CacheParameterGroupSpecProviderConfigRefPolicyResolve
 */
export enum CacheParameterGroupSpecProviderConfigRefPolicyResolve {
  /** Always */
  ALWAYS = "Always",
  /** IfNotPresent */
  IF_NOT_PRESENT = "IfNotPresent",
}

/**
 * Policies for referencing.
 *
 * @schema CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicy
 */
export interface CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicy {
  /**
   * Resolution specifies whether resolution of this reference is required. The default is 'Required', which means the reconcile will fail if the reference cannot be resolved. 'Optional' means this reference will be a no-op if it cannot be resolved.
   *
   * @schema CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicy#resolution
   */
  readonly resolution?: CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicyResolution;

  /**
   * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
   *
   * @schema CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicy#resolve
   */
  readonly resolve?: CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicyResolve;

}

/**
 * Converts an object of type 'CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicy(obj: CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resolution': obj.resolution,
    'resolve': obj.resolve,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Resolution specifies whether resolution of this reference is required. The default is 'Required', which means the reconcile will fail if the reference cannot be resolved. 'Optional' means this reference will be a no-op if it cannot be resolved.
 *
 * @schema CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicyResolution
 */
export enum CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicyResolution {
  /** Required */
  REQUIRED = "Required",
  /** Optional */
  OPTIONAL = "Optional",
}

/**
 * Resolve specifies when this reference should be resolved. The default is 'IfNotPresent', which will attempt to resolve the reference only when the corresponding field is not present. Use 'Always' to resolve the reference on every reconcile.
 *
 * @schema CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicyResolve
 */
export enum CacheParameterGroupSpecPublishConnectionDetailsToConfigRefPolicyResolve {
  /** Always */
  ALWAYS = "Always",
  /** IfNotPresent */
  IF_NOT_PRESENT = "IfNotPresent",
}

