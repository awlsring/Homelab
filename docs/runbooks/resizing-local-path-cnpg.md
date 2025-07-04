# Resizing local path

A local path volume cannot be resized directly, but instead a new cluster must be created with the new size. The old cluster can then be deleted after the new one is up and running.

For example with immich, if given the following cluster spec:

```yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: immich-immich-pg-db-c831f016
  namespace: immich
spec:
  backup:
    barmanObjectStore:
      destinationPath: s3://awlsring-homelab-cnpg-db-backups/immich
      endpointURL: https://s3.us-east-005.backblazeb2.com
      s3Credentials:
        accessKeyId:
          key: password
          name: immich-backup-store-access-key-c87d982f
        secretAccessKey:
          key: password
          name: immich-backup-store-secret-key-c8ce2246
      wal:
        compression: gzip
    retentionPolicy: 14d
  bootstrap:
    initdb:
      database: immich
      owner: immich
      secret:
        name: immich-database-secret-c86932a0
  externalClusters: []
  imageName: ghcr.io/tensorchord/cloudnative-vectorchord:16-0.3.0
  instances: 1
  monitoring: {}
  postgresql:
    shared_preload_libraries:
      - vchord.so
  primaryUpdateStrategy: unsupervised
  storage:
    size: 5Gi
    storageClass: local-path
```

To resize the local path volume, you would create a new cluster spec with the desired size and the migrations outlined in the spec.

```yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: immich-immich-pg-database-c831f016
  namespace: immich
spec:
  bootstrap:
    initdb:
      dataChecksums: true
      database: immich
      owner: immich
      secret:
        name: immich-database-secret-c86932a0
      import:
        type: microservice
        databases:
          - immich
        source:
          externalCluster: cluster-pg96
  externalClusters:
    - name: cluster-pg96
      connectionParameters:
        host: 10.43.33.31 # IP of the RW service of the old cluster
        user: immich
        dbname: immich
      password:
        name: immich-database-secret-c86932a0
        key: password
  enableSuperuserAccess: true
  imageName: ghcr.io/tensorchord/cloudnative-vectorchord:16-0.4.3
  postgresql:
    shared_preload_libraries:
      - "vchord.so"
  instances: 3
  monitoring: {}
  primaryUpdateStrategy: unsupervised
  storage:
    size: 10Gi
    storageClass: local-path
```
