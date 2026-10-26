# Hermes disk guardrails

Host: `awlsring@10.0.10.103`, Ubuntu, hostname `hermes`. The older inventory
entry for Eldraine does not describe this host.

On 2026-10-12 the 98 GiB root filesystem reached 100% usage. The largest
consumers were the Nix store (26 GiB), agent review/scratch directories
(20 GiB, mostly duplicated Go caches), and shared Go build cache (7.8 GiB).
Logs were approximately 633 MiB. Cleanup brought root usage to about 57%,
with 41 GiB available. Source, Git worktrees/review snapshots, Docker volumes,
databases, and Hermes session history were preserved.

## Installed policy

`scripts/hermes-disk-maintenance.py` is installed as
`~/.local/bin/hermes-disk-maintenance`. The accompanying service and timer
are installed under `~/.config/systemd/user/`. User lingering was already
enabled, so the timer runs without an SSH login and starts after reboot.

- Every 15 minutes, recognize Go build caches by their own README and trim
  only hashed build artifacts toward an aggregate 6 GiB budget. Entries
  touched within an hour are protected; artifacts older than seven days
  expire even under budget. The budget is soft during active builds.
- Discover caches under `~/.cache`, `~/Code/.orchestrator`, and `~/nixcache*`.
  Preserve source and cache symlinks, Git metadata, and fuzz corpus.
- Daily, or at 80% disk usage / below 10 GiB free, run native Docker image
  and builder pruning (unused objects older than seven days), bounded Nix
  garbage collection (up to 8 GiB, preserving GC roots), and UV cache pruning.
  No Docker containers or volumes are pruned; no Nix profile generations
  are removed. Referenced images are protected by Docker's pruning rules.
- Record the latest disk measurement in
  `~/.local/state/hermes-disk-maintenance/status.json`; fail the maintenance
  service when usage remains at least 90% or available space is below 10 GiB.
- A `pre_tool_call` shell hook in `~/.hermes/config.yaml` checks space before
  `terminal`, `write_file`, `patch`, `execute_code`, and `delegate_task`.
  It blocks below 10 GiB free or at 90% usage. An exact terminal invocation
  of the maintenance command remains allowed for recovery. The hook is
  allowlisted individually, with a five-second timeout and `fail_closed`.

The hook applies to processes that load this config; already-running CLI
sessions and their existing child processes are not retroactively intercepted.
Background processes can continue writing between checks. This is a cache
budget and admission guard, not a filesystem quota. No outbound alerts are
configured: failures/status are visible through systemd and the status file.

## Check and operate

```sh
ssh awlsring@10.0.10.103
df -h /
systemctl --user status hermes-disk-maintenance.timer
systemctl --user show hermes-disk-maintenance.service -p Result
cat ~/.local/state/hermes-disk-maintenance/status.json
journalctl --user -u hermes-disk-maintenance.service -n 20
~/.local/bin/hermes-disk-maintenance           # preview; no deletion
~/.local/bin/hermes-disk-maintenance --apply   # cleanup
```

Validate the repository script using
`direnv exec . python3 scripts/test-hermes-disk-maintenance.py`. Tests cover
dry runs, preserving fresh cache artifacts/source/symlinks, and low-space
blocking with an exact recovery escape hatch. `hermes hooks doctor` validates
the installed hook through Hermes' real parser/runner.

## Reinstall and rollback

Copy the Python script to the installed executable path, set mode `0755`,
and copy the service/timer to the user unit directory. Run
`systemd-analyze --user verify` on both units, then
`systemctl --user daemon-reload` and
`systemctl --user enable --now hermes-disk-maintenance.timer`.

The hook config added on this host is:

```yaml
hooks:
  pre_tool_call:
  - command: /home/awlsring/.local/bin/hermes-disk-maintenance --hook
    matcher: terminal|write_file|patch|execute_code|delegate_task
    timeout: 5
    fail_closed: true
```

Merge this entry with any existing hooks. Approve only this entry via
`agent.shell_hooks.register_from_config` with `accept_hooks=True`, or the
Hermes interactive approval flow; do not enable global hook auto-approval.
Load it in the gateway via the service's graceful `reload` operation when
safe. A private backup of the original config is on the host at
`~/.hermes/config.yaml.before-disk-guard-20261012`.

To disable, stop/disable the timer and remove this individual hook entry from
config, then reload the gateway. Restore the backup only if no other config
changes have happened since it was made. Existing cached artifacts that were
evicted must be rebuilt or downloaded.

System-wide journal/Docker daemon limits were not changed because this account
requires sudo authentication. Their logs were not the cause of this incident.
No partition or filesystem resizing was performed.

Pruning semantics: [Docker image pruning](https://docs.docker.com/reference/cli/docker/image/prune/)
and [Nix GC roots](https://nix.dev/manual/nix/2.35/command-ref/nix-store/gc.html).
