# Baikal PHP security upgrade

Checked October 22, 2026. Source changes are prepared; no deployment or database
migration has been performed.

## Findings and scope

The homelab Kubernetes pod inventory and Deployment, StatefulSet, DaemonSet and
CronJob image inventory identify Baikal as the PHP application. The repository's
NixOS application definitions contain no additional PHP service. This is an
application/image inventory, not a binary scan of every container or an audit of
unmanaged hosts. SSH access to the separate Innistrad host was unavailable.
Pi-hole is excluded at the user's request.

The running `baikal/baikal-app-c8d271f1` deployment uses `ckulka/baikal:nginx`,
Baikal 0.10.1 and PHP **8.1.33**, confirmed using `php -v`, `php-fpm8.1 -v`,
`dpkg-query` and `/var/www/baikal/Core/Distrib.php` inside the running container.
The installed FPM package is
`8.1.33-1+0~20250703.72+debian13~1.gbpb08cf2`.
Its running image digest is
`sha256:1a901125d121a3e414cda87c617bd322c57ae86b9d2aedbff7b3a7ac84bb23aa`.

[PHP's October 21 security advisory](https://www.php.net/archive/2026.php#2026-10-21-5)
fixes CVE-2026-109618 and CVE-2026-109619 in **8.2.35, 8.3.36, 8.4.27 and
8.5.12**. FPM is also in scope; nginx does not remove the need to patch.
See the detailed [OOM advisory](https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w)
and [stale-state advisory](https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp).

Simply switching to `ckulka/baikal:nginx-php8.2` does not remediate this: its
checked index digest
`sha256:8bd8d3d500668804b919f4065c9ade5263d1dc0733cdc5f9abfc8f55323af28f`
contains PHP 8.2.29, confirmed in a disposable local container. Even its configured
Sury apt repository offered only 8.2.34 at the time of the check.

## Selected upgrade

Both the chart and generated manifest pin:

```text
ghcr.io/aalmenar/baikal:0.13.0-r1-nginx@sha256:d2d049b537886fa76134d7d88d7c5c32bc0ce4da44559b968a7aed3edb2810ad
```

This is a change of image publisher to a maintained fork and a Baikal upgrade
from 0.10.1 to **0.13.0**, as well as a PHP upgrade. The fork retains nginx,
port 80, SMTP support, and the existing `config` and `Specific` mount paths.
Its [source at the image revision](https://github.com/aalmenar/baikal-docker/tree/6ff165ae1309f23ef8d59efe2430b6dcf9176116)
and [upgrade instructions](https://github.com/aalmenar/baikal-docker/blob/6ff165ae1309f23ef8d59efe2430b6dcf9176116/README.md#upgrading)
describe the image and required upgrade wizard.

Registry inspection confirmed the revision tag and `nginx` alias resolve to the
pinned index above. The homelab uses AMD64; its image manifest is
`sha256:8e0dfc5949837a0839e78f680ecf529ef73d855f81ba00d26474917ac0bccc97`.
The image labels identify version `0.13.0-r1` and source revision
`6ff165ae1309f23ef8d59efe2430b6dcf9176116`.
Direct streaming inspection of `/var/lib/dpkg/status` in its PHP installation
layer confirmed both `php8.5-common` and `php8.5-fpm` are installed at
**`8.5.12-1+0~20261021.27+debian13~1.gbp1a3e8a`**. The layer digest is
`sha256:06d94cd8179bd439a4695898e09848dc4f00ab76af0ebd8096518691c8860ba1`.

Local execution of the replacement image could not be completed: Docker hit an
I/O error while pulling it with the Mac's disk nearly full. Package inspection
proves the selected AMD64 image contains the fixed PHP release; it does not
establish application startup, migration or DAV compatibility.

Local validation passed: TypeScript checking with `tsc --noEmit --incremental
false`, a targeted synthesis of the Baikal chart that matched the checked-in
manifest byte for byte, and `git diff --check`. Unrelated existing working-tree
changes were preserved.

## Rollout and acceptance

Before promoting the manifest through Flux, take a consistent backup of the
database and both persistent volumes (`config` and `Specific`). Baikal may
require a database upgrade through `/admin/`; schedule the resulting service
interruption. Follow the [Baikal upgrade guide](https://sabre.io/baikal/upgrade/).

After deployment, complete the admin upgrade wizard if prompted, then verify:

```sh
direnv exec . kubectl --context homelab -n baikal rollout status deployment/baikal-app-c8d271f1
direnv exec . kubectl --context homelab -n baikal exec deployment/baikal-app-c8d271f1 -- php -v
direnv exec . kubectl --context homelab -n baikal exec deployment/baikal-app-c8d271f1 -- php-fpm8.5 -v
direnv exec . kubectl --context homelab -n baikal exec deployment/baikal-app-c8d271f1 -- dpkg-query -W php8.5-common php8.5-fpm
direnv exec . kubectl --context homelab -n baikal get pods -o jsonpath='{range .items[*]}{.metadata.name}{" "}{.status.containerStatuses[*].imageID}{"\n"}{end}'
```

Require PHP 8.5.12 or a later fixed release, the selected image digest, a working
admin interface, and successful CalDAV/CardDAV reads and sync from existing
clients. Verify SMTP if used. If migration changed the database or config,
rollback requires restoring the matching pre-upgrade backups as well as the old
image. Do not assume an image-only rollback is safe.
