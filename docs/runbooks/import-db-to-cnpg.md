# Import DB into CPNG

Importing an external database into CPNG requires adding an import section under the `initdb` portion on the cluster bootstrap options

Example:

```yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: terraform-backend-cluster-c824bab6
  namespace: terraform-backend
spec:
  bootstrap:
    initdb:
      database: terraform
      owner: terraform
      secret:
        name: terraform-backend-database-secret-c8e759fe
      import:
        type: microservice
        databases:
          - terraform
        source:
          externalCluster: cluster-pg96
  externalClusters:
    - name: cluster-pg96
      connectionParameters:
        host: 10.0.10.223
        user: terraform
        dbname: terraform
      password:
        name: terraform-backend-database-secret-c8e759fe
        key: password
  instances: 1
  primaryUpdateStrategy: unsupervised
  storage:
    size: 5Gi
    storageClass: local-path
```

This will import from the databse at 10.0.10.223 using the user and dbname specfied under external cluster. When done, the `import` section can be deleted from the cluster spec.

## References

- https://cloudnative-pg.io/documentation/1.25/database_import/
