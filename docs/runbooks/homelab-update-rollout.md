# Homelab updates prepared October 22, 2026

These changes are local commits only. Nothing has been pushed, reconciled,
deployed, migrated or restarted. Pi-hole and the unrelated Bookshelf and host
disk-maintenance work remain outside this change.

Implementation branch: `codex/homelab-security-updates`, based on `68eb180`.
The original checkout's uncommitted changes were not copied into this branch.

| Commit | Scope |
| --- | --- |
| `ad8effc` | ingress-nginx patch and admission Job replacement |
| `7d776bd` | Cilium, Longhorn, cert-manager and CNPG patch steps |
| `f2cc3b1` | Application versions, tunnel image and compatibility changes |
| `d8abc39` | Grafana, Loki, Connect, Silo and reproducible upstream includes |

## Prepared application versions

| Application | Previous | Prepared |
| --- | --- | --- |
| Audiobookshelf | 2.36.0 | 2.37.1 |
| Immich server and machine learning | 3.1.0 | 3.3.5 |
| Immich public proxy | 3.2.0 | 4.1.1 |
| Booklore | 2.3.1 | 2.4.0 |
| Dawarich web and worker | 1.13.1 | 1.16.0 |
| Mealie | 2.5.0 | 3.29.0 |
| Navidrome | 0.63.2 | 0.64.2 |
| Forgejo rootless | 10.0.0 | 15.0.10 LTS |
| Woodpecker server and agents | 3.0.1 | 3.19.0 |
| Bluesky PDS | 0.4.208 | 0.4.5046 |
| SearxNG | 2025.2.3-4ab7984ed | 2026.10.19-81371861f |
| Radarr | 6.3.0 | 6.4.4 |
| Sonarr | 4.0.19 | 4.0.20 |
| Prowlarr | 2.5.2 | 2.6.5 |
| Bazarr | 1.6.0 | 1.6.2 |

All selected application image tags were resolved against their registries and
confirmed to include Linux AMD64. The original
[audit](homelab-update-audit-2026-10-22.md) links release notes and security fixes.

Compatibility changes included in source:

- Forgejo uses the supplied version instead of a hardcoded chart constant.
- SearxNG uses Granian rather than an obsolete mounted uWSGI configuration.
  The chart supplies `GRANIAN_HOST=0.0.0.0`, port 8080, `SEARXNG_BASE_URL`,
  `SEARXNG_VALKEY_URL`, the still-supported `SEARXNG_SECRET`, and
  `FORCE_OWNERSHIP=false` for read-only ConfigMap mounts.
- Woodpecker uses `WOODPECKER_BACKEND_K8S_NAMESPACE`. Server and agents share
  the upgraded version. Server startup probes allow database migration time.
- Dawarich uses Recreate to prevent overlapping old/new web and worker pods;
  its startup probe allows up to 30 minutes for legacy-coordinate migration.
  Mealie's startup allowance increases to 15 minutes. These are time limits,
  not proof that every database will migrate within them.

Sources: [SearxNG tagged entrypoint](https://github.com/searxng/searxng/blob/81371861f/container/entrypoint.sh),
[tagged settings](https://github.com/searxng/searxng/blob/81371861f/searx/settings.yml),
[Woodpecker Kubernetes backend](https://woodpecker-ci.org/docs/administration/backends/kubernetes),
[Forgejo upgrade guide](https://forgejo.org/docs/latest/admin/upgrade/).

## Prepared platform and storage changes

| Component | Previous | Prepared first step |
| --- | --- | --- |
| ingress-nginx | chart 4.12.0 / controller 1.12.0 | chart 4.12.8 / controller 1.12.8 |
| Cilium | 1.16.4 | 1.16.19 |
| Longhorn | 1.8.0 | 1.8.2 |
| cert-manager | 1.16.3 | 1.16.5 |
| CloudNativePG operator | chart 0.23.0 / app 1.25.0 | chart 0.23.2, explicit app 1.25.4 |
| Grafana | 11.4.0 | 12.4.13 |
| Loki and canary | 3.0.0 | 3.7.9 |
| Cloudflare tunnel image default | 2024.1.5 | 2026.10.3 |
| 1Password Connect API/sync | 1.7.3 | 1.8.1 |
| Tempo and Loki MinIO servers | upstream images from 2025 and 2022 | pgsty/silo RELEASE.2026-10-18T00-00-00Z, pinned by digest |

Grafana and Loki image versions are overridden in their existing owning charts
to avoid coupling their security update to a large Prometheus/CRD or Loki
storage-chart migration. This does not update all supporting images or make
the old chart versions current. Loki's rendered configuration was checked with
the native Loki 3.7.9 binary's `-verify-config=true` mode.

OpenTelemetry's moving `latest` manifest URL is pinned to 0.150.0, matching the
already committed manifest; this prevents an unrelated upgrade during synthesis.
The live inventory had an older operator, so this pin is not evidence of live
0.150.0 deployment or compatibility testing.

Changed chart hook Jobs have targeted Flux force-replacement annotations so
immutable pod-template changes do not block reconciliation. The Longhorn
uninstall hook is explicitly ignored and protected from pruning; it must never
run as an ordinary upgrade Job. This does not supply Helm-style hook ordering
under Kustomize. Follow the staged rollout below, and remove one-time force
annotations after successful reconciliation as recommended in the
[Flux documentation](https://fluxcd.io/flux/components/kustomize/kustomizations/#force).

### MinIO publisher change

`pgsty/silo` (formerly `pgsty/minio`) is an independent community fork. Its
[tagged security index](https://github.com/pgsty/silo/blob/RELEASE.2026-08-04T00-00-00Z/docs/security/advisories.md)
records fixes for the unsigned-trailer write bypass, Snowball authentication
and storage traversal findings, plus subsequent hardening. The
[release notes](https://github.com/pgsty/silo/discussions/54) describe IAM and
configuration compatibility changes. The [October 18 release](https://github.com/pgsty/silo/releases/tag/RELEASE.2026-10-18T00-00-00Z) adds further Object Lock and IAM fixes. Its standard image includes the shell, legacy entrypoint translation and matching `mcli`/`mc` client required by the Loki chart. Tempo explicitly invokes `silo`; Loki calls the compatible entrypoint. The selected multi-architecture image is:

```text
pgsty/silo:RELEASE.2026-10-18T00-00-00Z@sha256:2636fc4155d9a7e41ff58cdb65ddd13ba9304e67184e13c25bc5cb34016269d7
```

The Tempo storage resources are now vendored under
`kubernetes/resources/tempo-minio.yaml`, retaining existing resource names,
storage claims and endpoints. This removes a moving upstream `main` include
that had silently changed its image to a test utility during regeneration.
Tempo credentials use the current `MINIO_ROOT_USER`/`MINIO_ROOT_PASSWORD`
variable names, with the existing values preserved. Credential rotation is
not part of this source-only update.

Read-only inspection found Tempo storage format `xl-single`, XL version 3,
and both Loki drives using format `xl`, XL version 3. This rules out a legacy
filesystem-format store in those inspected paths; it does not prove that a
fork upgrade or rollback works. Before rollout, test copies of both stores
with this exact image, verify object listings and reads/writes, and restore
from backup successfully. Review bucket IAM policies, Object Lock, OIDC/LDAP and notification
configuration. Never test an old binary against an upgraded live data directory.

## Required deployment order and acceptance

Do not promote the whole branch as one unattended rollout. Flux currently
reconciles the complete generated-manifest directory without dependency ordering.
Promote selected commit/files in maintenance windows, or suspend affected
reconciliation while an operator performs the sequence. This document is not
authorization to change live reconciliation.

1. Record health and prove recovery for etcd/K3s token, databases, persistent
   volumes and object stores. Scheduled backup definitions alone are not proof.
2. Apply the ingress-nginx patch first; verify admission, routing, certificates,
   redirects, large uploads, Booklore Kobo sync and both internal/public hosts.
   The project is retired; this is an interim security bridge.
3. Roll out app groups separately with consistent database/data backups. Stop
   Woodpecker agents before its server migration, update server, then agents;
   confirm the agents reconnect and a Kubernetes-backend pipeline completes.
   Test Forgejo browser login, SSH clone/push, OAuth and repository contents.
4. Navidrome 0.64 re-encodes database IDs; back up SQLite and expect clients to
   resync. Complete Baikal's separate admin upgrade wizard as described in its
   [runbook](baikal-php-security-upgrade.md).
5. Mealie 3.x changes admin API paths, requires verified email for OIDC providers
   when configured, and blocks private outbound HTTP unless explicitly allowed.
   No OIDC or broad HTTP allowlist is introduced here. Check actual integration
   settings; add only required LAN destinations. Existing exported Jinja
   integrations need migration. Test recipe imports, login and OpenAI integration.
6. Immich server/ML must remain aligned. Proxy 4.x is compatible with Immich 3.x;
   this chart customizes only URL settings and does not mount legacy proxy JSON.
   Verify uploads, search, shared links, metadata privacy and download controls.
   SearxNG must serve HTML and JSON searches and reach Valkey. Dawarich migration
   and background recalculations must finish; use `/api/v1/health` for checks.
7. Roll out Cilium, cert-manager, Longhorn and CNPG patches separately. Check
   CNI/connectivity and DNS; certificate issuance; healthy volume replicas and
   engine upgrades; and database readiness/replication/backups respectively.
   Cilium chart synthesis has pre-existing random TLS generation; retain the
   committed Cilium/Hubble Secret data rather than rotate certificates incidentally.
8. Test object-store upgrades against restored copies before rolling each store.
   Then validate Tempo ingest/query and Loki ingest/query/retention, Grafana login,
   dashboards and alerts, and Connect secret retrieval. Keep pre-upgrade stores
   and application DBs for rollback; image-only downgrades can be unsafe.

## Remaining staged infrastructure migration

The prepared patch commits do **not** make Kubernetes 1.32 or obsolete platform
branches supported. The full compatible sequence is recorded in
[platform upgrade paths](homelab-platform-upgrade-paths.md). Kubernetes, Cilium,
Longhorn and cert-manager cannot safely skip the intervening minor transitions.
External Secrets requires API conversion while a version serving both APIs is
running; external-dns must retain compatibility with the excluded Pi-hole v5.

No k3s/Nix lock change, ingress-controller cutover, External Secrets API
conversion, PostgreSQL/MariaDB patch transition or newer platform minor jump is
included. These steps require validated stage results and recovery evidence
between transitions. A single final-state manifest commit cannot encode those
runtime transitions safely. The ingress replacement additionally needs explicit
translations and tests for the repository's NGINX annotations.

## Validation and limits

TypeScript checking, full CDK8s synthesis, registry AMD64 checks and structural
manifest checks were performed. Structural checks compare PVC specifications,
workload selectors, StatefulSet claim templates and existing PVC references
against the branch base. The only intended resource removal is SearxNG's uWSGI
ConfigMap. Loki's native configuration check passed.

Validation commands ran from this branch's worktree:

```sh
direnv exec . ./kubernetes/node_modules/.bin/tsc --noEmit --incremental false --project kubernetes/tsconfig.json
direnv exec . ./kubernetes/node_modules/.bin/cdk8s synth
git diff --check 68eb180
```

The structural comparison parsed 528 resources across 20 changed manifests,
also confirming unique resource identities, unchanged Secret data and targeted
handling of changed immutable Job templates. Cilium's two TLS Secret data
sections were retained from the branch base after synthesis; chart-generated
random certificate material is excluded from the intended update.

Docker's daemon remained unresponsive after the earlier disk/I/O failure, so
container startup, application database migrations and MinIO restored-data
compatibility could not be exercised locally. Nothing here claims live runtime
acceptance. Do not infer that the source-only validation substitutes for the
deployment gates above.
