// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 * ImageCatalog is the Schema for the imagecatalogs API
 *
 * @schema ImageCatalog
 */
export class ImageCatalog extends ApiObject {
  /**
   * Returns the apiVersion and kind for "ImageCatalog"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'postgresql.cnpg.io/v1',
    kind: 'ImageCatalog',
  }

  /**
   * Renders a Kubernetes manifest for "ImageCatalog".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: ImageCatalogProps): any {
    return {
      ...ImageCatalog.GVK,
      ...toJson_ImageCatalogProps(props),
    };
  }

  /**
   * Defines a "ImageCatalog" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: ImageCatalogProps) {
    super(scope, id, {
      ...ImageCatalog.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...ImageCatalog.GVK,
      ...toJson_ImageCatalogProps(resolved),
    };
  }
}

/**
 * ImageCatalog is the Schema for the imagecatalogs API
 *
 * @schema ImageCatalog
 */
export interface ImageCatalogProps {
  /**
   * @schema ImageCatalog#metadata
   */
  readonly metadata: ApiObjectMetadata;

  /**
   * Specification of the desired behavior of the ImageCatalog.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   *
   * @schema ImageCatalog#spec
   */
  readonly spec: ImageCatalogSpec;

}

/**
 * Converts an object of type 'ImageCatalogProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImageCatalogProps(obj: ImageCatalogProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_ImageCatalogSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Specification of the desired behavior of the ImageCatalog.
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 *
 * @schema ImageCatalogSpec
 */
export interface ImageCatalogSpec {
  /**
   * List of CatalogImages available in the catalog
   *
   * @schema ImageCatalogSpec#images
   */
  readonly images: ImageCatalogSpecImages[];

}

/**
 * Converts an object of type 'ImageCatalogSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImageCatalogSpec(obj: ImageCatalogSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'images': obj.images?.map(y => toJson_ImageCatalogSpecImages(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * CatalogImage defines the image and major version
 *
 * @schema ImageCatalogSpecImages
 */
export interface ImageCatalogSpecImages {
  /**
   * The image reference
   *
   * @schema ImageCatalogSpecImages#image
   */
  readonly image: string;

  /**
   * The PostgreSQL major version of the image. Must be unique within the catalog.
   *
   * @schema ImageCatalogSpecImages#major
   */
  readonly major: number;

}

/**
 * Converts an object of type 'ImageCatalogSpecImages' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ImageCatalogSpecImages(obj: ImageCatalogSpecImages | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'image': obj.image,
    'major': obj.major,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

