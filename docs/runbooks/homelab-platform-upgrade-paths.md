# Homelab platform upgrade paths — 2026-10-22

Read-only implementation research. No repository or cluster mutations. Version numbers below were checked against official GitHub release APIs and project documentation; interim versions are stepping stones, not claims that obsolete branches regain support.

## Immediate targets compatible with Kubernetes 1.32

| Component | Existing | First concrete target | Later route / constraint |
|---|---|---|---|
| ingress-nginx | controller 1.12.0 / chart 4.12.0 | controller **1.12.8 / chart 4.12.8** | Latest 1.12 patch. Official table tests Kubernetes 1.28–1.32. Project retired; replacement still required. Newer 1.15.1 / chart 4.15.1 also lists 1.31–1.35, but carries more controller behavior change. |
| Cilium | 1.16.4 | **1.16.19** | Then **1.17.18 → 1.18.15 → 1.19.9**, required preflight and validation at each minor. 1.19 supports 1.31–1.34; 1.20.3 requires 1.33+. |
| Longhorn | 1.8.0 | **1.8.2** | Then **1.9.2 → 1.10.2 → 1.11.3 → 1.12.1** after each version's prerequisites. No minor skipping; no downgrade after successful upgrade. 1.12.1 requires Kubernetes >=1.25; 1.13 requires >=1.34. |
| cert-manager | 1.16.3 | **1.16.5** | Then **1.17.4 → 1.18.6 → 1.19.6 → 1.20.4**. 1.20 supports Kubernetes1.32–1.35; 1.21 requires1.33+. Upgrade one minor at a time and preserve CRD management. |
| CloudNativePG operator | 1.25.0 | **1.25.4** | Then **1.26.3 → 1.27.4 → 1.28.4**. 1.28 was compatible with1.32 but is EOL. Current1.30 supports1.34–1.36;1.32 is tested but unsupported. Needs Kubernetes upgrade to reach supported pairing. |
| External Secrets | 0.12.1 | **0.13.0 → 0.14.4 → 0.15.1 → 0.16.2** | Last branch whose test matrix includes1.32 is0.16. Latest2.13 tests1.36 only. Do not apply latest chart as a blind update. |

Sources: [ingress-nginx official matrix](https://github.com/kubernetes/ingress-nginx#supported-versions-table), [retirement](https://www.kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/), [Cilium upgrade rules](https://docs.cilium.io/en/stable/operations/upgrade/), [Cilium1.17 requirements](https://raw.githubusercontent.com/cilium/cilium/v1.17/Documentation/network/kubernetes/requirements.rst), [1.18](https://raw.githubusercontent.com/cilium/cilium/v1.18/Documentation/network/kubernetes/requirements.rst), [1.19](https://raw.githubusercontent.com/cilium/cilium/v1.19/Documentation/network/kubernetes/requirements.rst), [current requirements](https://docs.cilium.io/en/stable/network/kubernetes/requirements/), [Longhorn upgrade enforcement](https://longhorn.io/docs/1.13.0/deploy/upgrade/), [Longhorn1.12 prerequisites](https://longhorn.io/docs/1.12.1/deploy/install/), [Longhorn1.13 prerequisites](https://longhorn.io/docs/1.13.0/deploy/install/), [cert-manager support matrix](https://cert-manager.io/docs/releases/), [cert-manager upgrade](https://cert-manager.io/docs/installation/upgrade/), [CNPG support matrix](https://cloudnative-pg.io/docs/1.29/supported_releases/), [CNPG sequential upgrade guidance](https://raw.githubusercontent.com/cloudnative-pg/cloudnative-pg/release-1.28/docs/src/installation_upgrade.md), [ESO support and sequence](https://external-secrets.io/latest/introduction/stability-support/).

Patch versions checked through release APIs: [Cilium](https://api.github.com/repos/cilium/cilium/releases?per_page=100), [Longhorn](https://api.github.com/repos/longhorn/longhorn/releases?per_page=100), [cert-manager](https://api.github.com/repos/cert-manager/cert-manager/releases?per_page=100), [CNPG](https://api.github.com/repos/cloudnative-pg/cloudnative-pg/releases?per_page=100), [ESO](https://api.github.com/repos/external-secrets/external-secrets/releases?per_page=100). For these projects, chart version is generally the app version except CNPG, whose chart has independent semver. Resolve chart `appVersion` from its index rather than substituting operator semver as chart semver.

## Breaking boundaries that require implementation work

- **ESO0.16→0.17**: 0.17 stops serving `external-secrets.io/v1beta1`; convert every manifest to `external-secrets.io/v1` while0.16.2 is running, reconcile and verify conversion/stored versions before0.17. Existing generated TypeScript imports and constructs must be refreshed together. [Official0.17 release](https://github.com/external-secrets/external-secrets/releases/tag/v0.17.0). 0.16.2 also forcibly refreshes Generator values previously configured not to refresh; inventory Generators first. [0.16.2 release](https://github.com/external-secrets/external-secrets/releases/tag/v0.16.2).
- **CNPG1.26** changes instance-manager startup probes; **1.27** changes isolated-primary liveness behavior. Operator updates can roll database pods; inspect poolers, replica health, backups, PDBs. Metrics fixes in1.28.3+/1.29.1 change exporter privileges; custom monitoring SQL can need GRANTs. [Upgrade notes](https://cloudnative-pg.io/docs/1.28/installation_upgrade/).
- **Longhorn**: manager upgrade and volume engine upgrade are separate steps; finish engine transitions and healthy replicas between minor hops. V2 engine volumes have additional offline constraints in current releases; determine actual engine use. [Upgrade guide](https://longhorn.io/docs/1.13.0/deploy/upgrade/).
- **cert-manager**: if CRDs are installed separately, update CRDs before controller; chart-managed CRDs follow chart. Back up resources. [Official upgrade guide](https://cert-manager.io/docs/installation/upgrade/).

## Proposed cluster route

1. Back up and prove recoverability of etcd/K3s token, application databases, and persistent volumes. Record current health before any network/storage transition.
2. Apply ingress1.12.8 as the narrow security bridge; patch existing platform minors, then advance Cilium through1.19.9 and cert-manager through1.20.4. Advance CNPG and ESO only through compatible intermediate branches with their manifest conversions.
3. Upgrade K3s **1.32.13+k3s1 → 1.33.13+k3s2 → 1.34.12+k3s1** as separate operations. Server nodes first one at a time, then agents. Preserve original K3s flags/config. Cilium1.19 and cert-manager1.20 cover this corridor. These exact versions are latest non-prerelease branch releases returned by the official API during this research; recheck release channels before executing. [K3s release API](https://api.github.com/repos/k3s-io/k3s/releases?per_page=100), [manual upgrade and no-skipping rule](https://docs.k3s.io/upgrades/manual).
4. On1.34, bring Cilium to1.20.3, cert-manager to1.21.2, CNPG through1.29 to1.30.1, Longhorn to1.13 after required intermediate stages. Validate and then advance K3s to1.35.9+k3s1 →1.36.5+k3s1 separately. A Kubernetes1.34 destination has very little support runway on Oct22;1.36 is the practical destination if latest ESO support is required.
5. Advance ESO through each minor after converting to v1; align Kubernetes with the intermediate test matrices, eventually2.13 on1.36. Do not conflate the full migration plan with a single chart bump.

This is a proposed corridor from overlapping documented matrices, not a claim that all project-specific settings or host prerequisites have been validated. Recheck each minor's release notes and live health before applying.

## Maintained ingress direction

Since Cilium already supplies this cluster's CNI, evaluate its existing Ingress controller as the narrowest replacement before introducing a wholly separate ingress platform. It accepts standard Ingress resources with class `cilium`, supports TLS termination and shared load balancers, and requires kube-proxy replacement and L7 proxy. [Official ingress guide](https://docs.cilium.io/en/stable/network/servicemesh/ingress/).

Do not change all Ingress classes blindly: repo uses NGINX-specific upload limits/timeouts (Immich, Forgejo), buffers (Booklore), HTTPS upstream and a server snippet (Rook), and Pi-hole root redirect. Build a separate class/LB, translate those behaviors explicitly, validate host/TLS/upload/streaming/redirect paths against it, cut traffic over in groups, then retire ingress-nginx. Pi-hole application itself remains excluded per user request; its ingress behavior is part of replacement compatibility.
