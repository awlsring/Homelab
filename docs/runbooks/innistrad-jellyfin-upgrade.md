# Innistrad Jellyfin upgrade

## Prepared change (2026-10-25)

Target: `root@10.0.10.120` (`innistrad`). Public Jellyfin reported
`10.11.11` before preparation. This is a supported starting version for 12.x.

The host's base Nixpkgs input remains at
`56c02bc00adcf003215cc4bd996d6efaf4cff188`. A separate `media-nixpkgs`
input pins `3ec636362e1816bc2f0888fa0fa2c69f1bc9e504` for the media stack.
An Innistrad-only overlay pins server and web to upstream 12.3 with content
hashes and regenerated dependency locks because that input packages 12.2.
The override applies before the Nixpkgs builders expand dependency locks.
Remove it once the media input provides a suitable release.

The media stack selects Seerr 3.5.0, Nginx 1.30.6, Jellyfin FFmpeg 8.1.3-1,
and updated Intel graphics libraries. The kernel remains 6.18.45 and Podman
remains 5.8.6. Syncthing remains 2.1.3. Other hosts retain their original package
input. Home Assistant and Frigate retain their existing images and containers.

## Frigate hold discovered during preflight

Frigate's go2rtc process held about 337,559 file descriptors. Restarting only
that supervised process reduced allocated TCP sockets from about 337,000 to
74, increased available RAM to about 9 GiB, and improved the same cache-download
check from about 0.5 MB/s to 20 MB/s. The Frigate container was not restarted.

Frigate also held deleted `/media/frigate/frigate.db` and `-wal` files on its
NAS mount. Their open descriptors return `ESTALE` on both stat and read. They
cannot be recovered through those descriptors. A newly created 4 KiB database
file also exists at the path. Its history and the cause of deletion are unknown.
Do not treat that file or the older local `/config/frigate.db` as a verified
backup of the deleted active database. Readable local configuration and the
local database were preserved under `/root/innistrad-upgrade-20261025/`;
NAS-side recovery needs additional NAS access. Keep the OS, container runtime,
Frigate container, and NFS mounts unchanged during this media upgrade. Check the
activation preview explicitly for any Frigate/network/container restart.

## Required backup and migration sequence

1. Establish SSH access and record the live system closure, booted closure,
   system profile generation, running service versions, container image digests,
   failed units, free space, and NFS mount health. Compare live configuration
   with this repository before activation. Preserve the old closure with a Nix
   GC root so rollback remains available.
2. Build the new Innistrad system without activating it, then inspect the
   activation preview for unrelated changes and removals. Confirm `/mnt/media`
   is mounted and readable before any library scan.
3. Check Jellyfin's configured data paths, plugins, active sessions, and user
   identities. Resolve usernames differing only by case. Preserve third-party
   plugins in the backup and remove incompatible 10.11 builds from the active
   plugin directory before starting 12.x.
4. Stop Jellyfin and Seerr cleanly, and stop any other stateful service whose
   data is being copied. Keep Frigate and Home Assistant running. Check that each stopped process exited. The declared paths are
   `/var/lib/jellyfin` (including `config`, database, plugins, metadata, and
   subtitles), `/var/lib/jellyseerr/config`, and
   `/var/lib/syncthing/.config/syncthing`; verify the actual unit arguments and
   configuration before copying. Back up Syncthing's full state directory if it
   stores its index separately. Container upgrades are outside this activation.
5. Create timestamped archives preserving ownership, permissions, ACLs, and
   extended attributes. Keep backups outside the directories being migrated.
   Record a manifest with the old system closure, application versions, source
   revision, paths, and recovery commands. Do not include secrets in repository
   receipts. Copy the backups to a separate machine/storage device.
6. Verify archive readability and SHA-256 on both copies. Extract the archives
   into a separate directory and run SQLite integrity checks on the restored
   databases. Confirm the expected configuration, user count, and library data
   are present. A backup must pass these checks before activation. Frigate
   has a separate unresolved backup/recovery limitation described above.
7. Activate the built system, then start Jellyfin and monitor migration logs.
   Do not interrupt migrations. Verify local and public health, version 12.3,
   matching web assets, preserved users/libraries, Seerr integration, media
   access, and hardware transcoding. Perform the full library scan required by
   Jellyfin 12 and verify its completion.
8. Verify the supporting services and compare failed units against baseline.
   Record the new closure, backup locations and hashes, migration results, and
   remaining limitations. Reboot only after backups and acceptance checks are
   complete and when any required kernel activation has been assessed. This
   change does not require a new kernel or a reboot.

## Rollback

After a Jellyfin schema migration, switching the NixOS generation alone is
insufficient. Stop Jellyfin and any other migrated application, preserve its
failed state separately, activate the recorded old system closure, and restore
the verified pre-upgrade data/configuration with original ownership. Keep
applications stopped until both the old binaries and matching old data are in
place. Then start and verify the restored services.

## Upstream instructions

- [Jellyfin 12.3 release](https://github.com/jellyfin/jellyfin/releases/tag/v12.3)
- [Jellyfin 12 migration requirements](https://jellyfin.org/posts/jellyfin-release-12.0/)
- [Backup and restore](https://jellyfin.org/docs/general/administration/backup-and-restore/)

## Verified deployment receipts

Completed on 2026-10-25. No reboot or OS/container-runtime upgrade was performed.

- Old system: `/nix/store/vzib8y710l45kl89vhx5f36xw87fvhjs-nixos-system-innistrad-26.11.20260823.56c02bc`.
- Active system: `/nix/store/fvrqs02d4815m6ayr1pfnrz4sq6214zc-nixos-system-innistrad-26.11.20260823.56c02bc`.
- Old-system GC root: `/nix/var/nix/gcroots/maintenance/innistrad-pre-20261025`.
- Host backup: `/var/backups/innistrad-20261025T151753Z/service-state.tar.gz`.
- Mac backup: `/Users/awlsring/Backups/innistrad/20261025T151753Z/service-state.tar.gz`.
- Archive size: 19,046,275,098 bytes; SHA-256: `6df4c1169d74ad488aa0886fbaf69fb17a9804fa3316a0f30ac67bc294352790`.
- Full extraction succeeded; six SQLite databases passed `PRAGMA integrity_check`.
  The Mac archive matched the host size and SHA-256 before activation.
- Preserved nine users and all 4,110 `UserData` rows. Movie and series counts
  remain 309 and 162; 33 box sets remain. All 3,968 episode database rows remain.
  The required scan grouped three alternate episode versions into matching
  presentation keys, so the API now reports 3,965 distinct episodes. Each of
  the three grouped files still exists; no episode rows were removed.
- All startup migrations completed successfully. Full library scan completed
  from `2026-10-25T15:29:56Z` to `2026-10-25T15:31:19Z` with status `Completed`.
- Active versions: Jellyfin 12.3.0, Seerr 3.5.0, Nginx 1.30.6, FFmpeg 8.1.3.
  Kernel 6.18.45 and Podman 5.8.6 remain unchanged. Four external official plugins
  are active: Playback Reporting 19.0.0.0, Reports 20.0.0.0, TMDb Box Sets
  15.0.0.0, and TVmaze 14.0.0.0.
- Local/authenticated and public API checks passed, public web client returned
  HTTP 200, Seerr read both enabled Jellyfin libraries, and a synthetic H.264 QSV
  hardware encode passed as the `jellyfin` user before and after the upgrade.
- Zero failed systemd units. Frigate and Home Assistant container start times
  remain 2026-10-05; neither container was restarted by activation.
- Private operational evidence: `/root/innistrad-upgrade-20261025/` on the host.
  Backup manifest, off-host verification, plugin hashes, acceptance results,
  count reconciliation, and QSV output are also retained beside the Mac backup.

The Frigate socket restart was a mitigation. Its deleted NAS database remains
unreadable and requires separate NAS-side recovery; no active-database backup
or Frigate upgrade is claimed. Preserve that limitation before any future
Frigate/container-runtime/OS operation.
