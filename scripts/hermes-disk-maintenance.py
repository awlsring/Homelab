#!/usr/bin/python3
"""Bound Hermes build caches; preserve source, Git state, volumes and sessions."""
import argparse
import fcntl
import json
import os
from pathlib import Path
import re
import shlex
import shutil
import stat
import subprocess
import sys
import time

GIB = 1024**3
CACHE_BUDGET = 6 * GIB
MIN_FREE = 10 * GIB
ENTRY = re.compile(r"[0-9a-f]{64}-[ad]")


def disk_status(home):
    fs = os.statvfs(home)
    # Match df: filesystem reserved blocks are unavailable to this account.
    used = fs.f_blocks - fs.f_bfree
    available = fs.f_bavail
    return available * fs.f_frsize, 100 * used / max(1, used + available)


def go_cache_entries(home):
    roots = [home / '.cache', home / 'Code' / '.orchestrator']
    roots.extend(home.glob('nixcache*'))
    for root in roots:
        if root.is_symlink() or not root.is_dir():
            continue
        for folder, dirs, files in os.walk(root, followlinks=False):
            path = Path(folder)
            dirs[:] = [d for d in dirs if not (path / d).is_symlink()]
            if 'README' not in files:
                continue
            marker = path / 'README'
            try:
                if marker.is_symlink() or not marker.read_text().startswith(
                    'This directory holds cached build artifacts from the Go build system.'
                ):
                    continue
            except (OSError, UnicodeError):
                continue
            # Only Go's hashed artifact files, never scratch sources or fuzz corpus.
            for bucket in dirs:
                if not re.fullmatch(r'[0-9a-f]{2}', bucket):
                    continue
                try:
                    for item in (path / bucket).iterdir():
                        info = item.lstat()
                        if ENTRY.fullmatch(item.name) and stat.S_ISREG(info.st_mode):
                            yield item, info
                except FileNotFoundError:
                    pass
            dirs[:] = []


def trim_caches(home, apply, now=None, budget=CACHE_BUDGET):
    now = time.time() if now is None else now
    entries = sorted(go_cache_entries(home), key=lambda item: item[1].st_mtime)
    total = sum(info.st_blocks * 512 for _, info in entries)
    initial = total
    reclaimed = 0
    for path, info in entries:
        age = now - info.st_mtime
        # Protect cache entries being produced/accessed by current builds.
        if age < 3600 or (total <= budget and age < 7 * 86400):
            continue
        if apply:
            try:
                current = path.lstat()
                if (current.st_ino, current.st_mtime_ns, current.st_size) != (
                    info.st_ino, info.st_mtime_ns, info.st_size
                ):
                    continue
                path.unlink()
            except FileNotFoundError:
                continue
        size = info.st_blocks * 512
        total -= size
        reclaimed += size
    return {'before_gib': round(initial / GIB, 2), 'after_gib': round(total / GIB, 2),
            'reclaimed_gib': round(reclaimed / GIB, 2), 'applied': apply}


def hook_response(payload, home, free, used):
    if free >= MIN_FREE and used < 90:
        return {}
    # Retain an exact recovery command; arbitrary compound shell commands stay blocked.
    cleanup = str(home / '.local/bin/hermes-disk-maintenance')
    try:
        args = shlex.split((payload.get('tool_input') or {}).get('command', ''))
    except (ValueError, TypeError):
        args = []
    if payload.get('tool_name') == 'terminal' and args in ([cleanup, '--apply'], [cleanup]):
        return {}
    return {'action': 'block', 'message': (
        f'Disk guard: only {free / GIB:.1f} GiB free ({used:.0f}% used). '
        f'Run exactly `{cleanup} --apply` and recheck disk before continuing. '
        'Preserve source, Git worktrees, databases and Hermes sessions.'
    )}


def run_native(home):
    commands = [
        ['docker', 'image', 'prune', '-a', '-f', '--filter', 'until=168h'],
        ['docker', 'builder', 'prune', '-f', '--filter', 'until=168h'],
        ['/nix/var/nix/profiles/default/bin/nix-store', '--gc', '--max-freed', str(8 * GIB)],
        [str(home / '.local/bin/uv'), 'cache', 'prune', '--no-progress'],
    ]
    success = True
    for cmd in commands:
        if not shutil.which(cmd[0]):
            continue
        try:
            # Avoid retaining enormous GC logs; report command and verdict only.
            result = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
                                    timeout=180, check=False)
            print(f'{Path(cmd[0]).name} maintenance: exit {result.returncode}', flush=True)
            success = success and result.returncode == 0
        except subprocess.TimeoutExpired:
            print(f'{Path(cmd[0]).name} maintenance: timed out', flush=True)
            success = False
    return success


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--apply', action='store_true', help='Evict recognized cache artifacts')
    parser.add_argument('--hook', action='store_true', help='Hermes pre_tool_call disk guard')
    args = parser.parse_args()
    home = Path.home()
    free, used = disk_status(home)
    if args.hook:
        payload = json.load(sys.stdin)
        print(json.dumps(hook_response(payload, home, free, used)))
        return 0
    state_dir = home / '.local/state/hermes-disk-maintenance'
    state_dir.mkdir(parents=True, exist_ok=True)
    with (state_dir / 'lock').open('w') as lock:
        try:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError:
            print('Maintenance already running')
            return 0
        print(json.dumps(trim_caches(home, args.apply)), flush=True)
        stamp = state_dir / 'last-native-cleanup'
        due = not stamp.exists() or time.time() - stamp.stat().st_mtime >= 86400
        if args.apply and (due or used >= 80 or free < MIN_FREE):
            if run_native(home):
                stamp.touch()
        free, used = disk_status(home)
        status = {'free_gib': round(free / GIB, 2), 'used_percent': round(used, 1),
                  'critical': free < MIN_FREE or used >= 90, 'checked_at': time.time()}
        print(json.dumps(status), flush=True)
        if args.apply:
            (state_dir / 'status.json').write_text(json.dumps(status) + '\n')
        return 1 if status['critical'] else 0


if __name__ == '__main__':
    sys.exit(main())
