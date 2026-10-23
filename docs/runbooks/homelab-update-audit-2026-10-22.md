# Homelab update audit — October 22, 2026

The Baikal PHP fix is committed as `d072518`; it has not been pushed or
deployed. This audit makes no further workload changes. Pi-hole is excluded at
the user's request. Existing unrelated working-tree changes are preserved.

## Scope and evidence

Running versions below come from the `homelab` Kubernetes context, compared with
official project releases and advisories. MinIO's actual runtime version was
read using `minio --version` because its manifest uses a floating tag. The
ingress controller's arguments and admission webhook were inspected. This is
an update inventory, not a vulnerability scan or a claim of exploitation.
Separate Docker/NixOS hosts, TrueNAS and their applications are not fully
audited; SSH access to Innistrad was unavailable in this session.

Upstream versions are research candidates, not validated deployment targets.
Application migrations, Kubernetes compatibility, chart versions and container
availability must be checked before implementation. Do not blindly substitute
these versions into all manifests.

## Highest-priority findings

| Component | Running | Action and reason |
| --- | --- | --- |
| ingress-nginx | 1.12.0; admission webhook enabled | Urgent remediation. This predates the IngressNightmare fixes in 1.12.1/1.11.5. The project retired in March 2026, so migrate to a maintained controller/Gateway API; a compatible final patch can only be an interim step. |
| MinIO | RELEASE.2025-09-07T16-13-09Z | Urgent security review and replacement/build plan. Newer advisories include unauthenticated object writes, and this runtime predates their fixes. Community repository is archived. Its GitHub latest-release endpoint still returns an October 2025 release, which is not sufficient for April 2026 fixes. |
| Grafana | 11.4.0 | Unsupported since September 2025. Evaluate 12.4.13 (supported 12.4 branch) or 13.2.4; both are published security releases. Upgrade the owning kube-prometheus-stack chart and review plugins, dashboards and alerting migration. |
| Forgejo | 10.0.0-rootless | Discontinued branch. Evaluate 15.0.10 LTS, supported until July 2027; 17.0.0 is the current non-LTS release. Read intervening breaking changes and back up database/repositories first. |
| Kubernetes/k3s | 1.32.0+k3s1 on all three nodes | Kubernetes 1.32 reached EOL February 28, 2026. Plan staged minor upgrades with Cilium, Longhorn, operators and API compatibility checks. Latest k3s release observed: 1.37.1+k3s1; this is not a direct jump recommendation. |

Primary sources:

- [IngressNightmare advisory and fixed versions](https://kubernetes.io/blog/2025/03/24/ingress-nginx-cve-2025-1974/), [retirement statement](https://kubernetes.io/blog/2026/01/29/ingress-nginx-statement/), [final published controller 1.15.1](https://github.com/kubernetes/ingress-nginx/releases/tag/controller-v1.15.1).
- MinIO [unauthenticated object write advisory](https://github.com/minio/minio/security/advisories/GHSA-hv4r-mvr4-25vw) lists a fix at `RELEASE.2026-04-11T03-20-12Z`; [storage path traversal advisory](https://github.com/minio/minio/security/advisories/GHSA-xh8f-g2qw-gcm7) lists `RELEASE.2026-04-14T21-32-45Z`. Deployment-specific exploit prerequisites still require review. The [archived repository](https://github.com/minio/minio) and [last GitHub release](https://github.com/minio/minio/releases/tag/RELEASE.2025-10-15T17-29-55Z) explain why following `latest` is inadequate.
- Grafana [support policy](https://grafana.com/docs/grafana/latest/upgrade-guide/when-to-upgrade/), [12.4.13](https://github.com/grafana/grafana/releases/tag/v12.4.13), [13.2.4](https://github.com/grafana/grafana/releases/tag/v13.2.4).
- Forgejo [supported releases](https://forgejo.org/releases/) and [upgrade guide](https://forgejo.org/docs/latest/admin/upgrade/).
- Kubernetes [release support](https://kubernetes.io/releases/) and [k3s release](https://github.com/k3s-io/k3s/releases/tag/v1.37.1%2Bk3s1).

Forgejo implementation detail: `kubernetes/src/charts/applications/forgejo.ts`
hardcodes `IMAGE_TAG` and passes it to the construct, ignoring its supplied
`props.imageTag`. Changing only the version in `modules/application.ts` would
not change the deployed image.

## Application release audit

| App | Running | Upstream target | Published UTC | Assessment |
|---|---|---|---|---|
| Immich | 3.1.0 | [3.3.5](https://github.com/immich-app/immich/releases/tag/v3.3.5) | 2026-10-21 | Security priority. Release explicitly recommends updating promptly for CA compromise trust-store remediation and October Node.js security patches. Keep server and machine-learning versions aligned; inspect intermediate 3.2/3.3 notes and back up database/photos. |
| Navidrome | 0.63.2 | [0.64.2](https://github.com/navidrome/navidrome/releases/tag/v0.64.2) | 2026-09-24 | Security priority. Includes security fixes from 0.64.0/0.64.1 plus download filename sanitization and avoiding admin password log leakage. |
| Dawarich | 1.13.1 | [1.16.0](https://github.com/Freika/dawarich/releases/tag/1.16.0) | 2026-10-17 | Security priority: registration bypass patched in 1.14.5, affected range includes installed version. |
| Woodpecker | 3.0.1 | [3.19.0](https://github.com/woodpecker-ci/woodpecker/releases/tag/v3.19.0) | 2026-10-07 | Security priority: fixes injection of matrix environment variables into default clone step. Update server/agents together after reviewing intervening migrations/configuration changes. |
| Booklore | 2.3.1 | [2.4.0](https://github.com/booklore-app/booklore/releases/tag/v2.4.0) | 2026-09-19 | Security: upgrades PDF viewer dependency for pdf.js CVE-2026-16633, guards password-change route; maintenance-mode product, official successor BookOrbit migration is optional. |
| Mealie | 2.5.0 | [3.29.0](https://github.com/mealie-recipes/mealie/releases/tag/v3.29.0) | 2026-10-17 | Major upgrade with security fixes and compatibility work; substantial gap. |
| Audiobookshelf | 2.36.0 | [2.37.1](https://github.com/advplyr/audiobookshelf/releases/tag/v2.37.1) | 2026-09-29 | Normal update with validation/access-control fixes in 2.37.0, authentication session/cookie fixes in 2.37.1. |
| Immich public proxy | 3.2.0 | [4.1.1](https://github.com/alangrainger/immich-public-proxy/releases/tag/v4.1.1) | 2026-10-19 | Container hardening and breaking configuration changes; pair with Immich compatibility review. |
| Bluesky PDS | 0.4.208 | [0.4.5046](https://github.com/bluesky-social/pds/tree/v0.4.5046) (tag, not formal release) | commit 2026-10-22 | Very stale pin; verify exact tag/package behavior before selecting production update. Official Compose tracks moving 0.4. |
| SearxNG | 2025.2.3-4ab7984ed | [2026.10.19-81371861f](https://hub.docker.com/r/searxng/searxng/tags?name=2026.10.19-81371861f) (rolling build) | 2026-10-19 | No formal GitHub stable releases or tags. Latest dated image checked in official Docker Hub repository; configuration/runtime migration review required across ~20 months. |

### Application upgrade notes and evidence

- **Navidrome:** [0.64.0](https://github.com/navidrome/navidrome/releases/tag/v0.64.0) re-encodes internal IDs in every DB table; upstream explicitly requires a backup and warns cached clients may need a resync. Extism built-in plugin HTTP is disabled; plugins must use host HTTP, with restrictions on private addresses. [0.64.1](https://github.com/navidrome/navidrome/releases/tag/v0.64.1) fixes five advisories: unauthenticated password brute-force (High, CVSS7.4), authenticated artwork SSRF, cross-library local-file read, player takeover and library metadata disclosure. 0.64.0 also fixes SQL injection in artist role parameters. Do not silently deploy this as a simple patch.
- **Dawarich:** [1.14.5](https://github.com/Freika/dawarich/releases/tag/1.14.5) / [GHSA-x483-3xv3-vp52](https://github.com/Freika/dawarich/security/advisories/GHSA-x483-3xv3-vp52) describe disabled-registration bypass via mobile API for versions 1.7.1–1.14.4 and family invitation email substitution. 1.16.0 changes root path to redirect; use `/api/v1/health` for health checks. Upgrade performs background boundary/achievement recalculations and may spend minutes consolidating legacy coordinates; preserve database backup and permit jobs to finish.
- **Mealie:** [3.0.0](https://github.com/mealie-recipes/mealie/releases/tag/v3.0.0) moves admin routes `/api/users` to `/api/admin/users` and removes backend Jinja2 template rendering. [3.19.0](https://github.com/mealie-recipes/mealie/releases/tag/v3.19.0) explicitly flags important query-filter security fixes. [3.22.0](https://github.com/mealie-recipes/mealie/releases/tag/v3.22.0) documents OIDC `email_verified` requirement introduced in 3.21.0; providers without that claim fail login. [3.26.0](https://github.com/mealie-recipes/mealie/releases/tag/v3.26.0) prevents SSRF/DNS rebinding by restricting server-initiated requests to public addresses; LAN webhooks/actions/imports need explicit `HTTP_ALLOW_LIST`. More intervening API changes exist; full upgrade planning required.
- **Audiobookshelf:** [2.37.0](https://github.com/advplyr/audiobookshelf/releases/tag/v2.37.0) updates bundled Node.js to24, validates series library membership and tightens cover/image endpoint checks; [2.37.1](https://github.com/advplyr/audiobookshelf/releases/tag/v2.37.1) cleans abandoned OIDC mobile sessions and adjusts callback expiration. Existing 2.36.0 already crosses the old 2.26 authentication migration.
- **Immich public proxy:** [4.0.0 breaking changes](https://github.com/alangrainger/immich-public-proxy/releases/tag/v4.0.0): needs Immich >=3.0; legacy configuration aliases ignored; `showMetadata.exif.enabled` / `showMetadata.location.enabled` block startup and must be replaced by explicit fields; `allowDownload` accepts only0/1/2; custom handler must be refreshed; download filename default changes. New upload companion is optional and need not be enabled. Non-root runtime, root-owned code and tini improve container security.
- **Bluesky PDS:** [Tags API](https://api.github.com/repos/bluesky-social/pds/tags?per_page=5) returned v0.4.5046 first; [commit](https://github.com/bluesky-social/pds/commit/9ba9682b8841c37dee0dedd3e24bf8bdc87ae89c) dated2026-10-22T02:43:39Z. No GitHub release records. [Official Compose](https://github.com/bluesky-social/pds/blob/main/compose.yaml) uses `ghcr.io/bluesky-social/pds:0.4` and auto-update companion. No specific current vulnerability asserted from tag alone.
- **SearxNG:** [Official container documentation](https://docs.searxng.org/admin/installation-docker.html) currently identifies documentation version2026.10.19+81371861f. [Official image tags API](https://hub.docker.com/v2/repositories/searxng/searxng/tags?page_size=8) returned dated tag2026.10.19-81371861f, built2026-10-19T21:34:09Z and latest pointer updated seconds later. This is a rolling snapshot, not a stable-release assertion.

Version currency is not a complete vulnerability scan. Security importance above follows explicit upstream release notes; exposure/mitigations still depend on live configuration.

## Additional application updates

| Application | Running image tag | Newer upstream release observed | Notes/source |
| --- | --- | --- | --- |
| Radarr | 6.3.0 | 6.4.4.10685 | [Release](https://github.com/Radarr/Radarr/releases/tag/v6.4.4.10685); map to the LinuxServer container tag before editing. |
| Sonarr | 4.0.19 | 4.0.20.3014 | [Release](https://github.com/Sonarr/Sonarr/releases/tag/v4.0.20.3014); map to the LinuxServer tag. |
| Prowlarr | 2.5.2 | 2.6.5.5623 | [Release](https://github.com/Prowlarr/Prowlarr/releases/tag/v2.6.5.5623); map to the LinuxServer tag. |
| Bazarr | 1.6.0 | 1.6.2 | [Release](https://github.com/morpheus65535/bazarr/releases/tag/v1.6.2). |
| Lidarr | 3.1.0 | 3.1.0.4875 | [Latest release](https://github.com/Lidarr/Lidarr/releases/tag/v3.1.0.4875) is the same 3.1.0 line; no application-version update established from tags alone. |
| Readarr | 0.4.18-develop | Retired | [Official retirement](https://readarr.com/). A Bookshelf migration is already present among unrelated working-tree changes; it was not changed or committed here. |

## Platform and supporting-service backlog

These are substantial version gaps. Upgrade plans must follow each project's
supported paths; storage and networking upgrades especially need separate
acceptance and rollback plans.

| Component | Running | Latest upstream release observed |
| --- | --- | --- |
| Cilium | 1.16.4 | [1.20.3](https://github.com/cilium/cilium/releases/tag/v1.20.3) |
| Longhorn | 1.8.0 | [1.13.0](https://github.com/longhorn/longhorn/releases/tag/v1.13.0) |
| cert-manager | 1.16.3 | [1.21.2](https://github.com/cert-manager/cert-manager/releases/tag/v1.21.2) |
| CloudNativePG operator | 1.25.0 | [1.30.1](https://github.com/cloudnative-pg/cloudnative-pg/releases/tag/v1.30.1) |
| External Secrets | 0.12.1 | [2.13.0](https://github.com/external-secrets/external-secrets/releases/tag/v2.13.0) |
| external-dns | 0.14.0 | [0.23.0](https://github.com/kubernetes-sigs/external-dns/releases/tag/v0.23.0); preserve compatibility with the excluded Pi-hole v5 integration. |
| cloudflared | 2024.1.5 | [2026.10.3](https://github.com/cloudflare/cloudflared/releases/tag/2026.10.3) |
| Loki | 3.0.0 | [3.7.9](https://github.com/grafana/loki/releases/tag/v3.7.9) |
| 1Password Connect API/sync | 1.7.3 | [1.8.1](https://releases.1password.com/developers/connect/) |

PostgreSQL 17.2, MariaDB 11.4.5 and older Loki supporting images also need
dedicated patch-level review. Floating tags (`latest`, `minio/minio`, Valkey,
Gatus, Pocket ID, Byparr, Solvearr and tplink-plug-exporter) cannot establish
freshness from manifest text; compare the running digest/version with a
verified target before claiming they are current.
