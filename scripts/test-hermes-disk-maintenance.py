"""Exercise eviction boundaries and the recovery path without a full disk."""
import importlib.util
import os
from pathlib import Path
import tempfile
import time
import unittest

spec = importlib.util.spec_from_file_location('maintenance', Path(__file__).with_name('hermes-disk-maintenance.py'))
maintenance = importlib.util.module_from_spec(spec)
spec.loader.exec_module(maintenance)


class MaintenanceTests(unittest.TestCase):
    def test_only_old_recognized_build_artifacts_are_evicted(self):
        with tempfile.TemporaryDirectory() as temp:
            home = Path(temp)
            cache = home / 'Code/.orchestrator/run/issue/review-runtime/go-cache'
            bucket = cache / 'ab'
            bucket.mkdir(parents=True)
            (cache / 'README').write_text('This directory holds cached build artifacts from the Go build system.\n')
            old = bucket / ('a' * 64 + '-d')
            recent = bucket / ('b' * 64 + '-d')
            source = bucket / 'important.go'
            outside = home / 'source.go'
            for item in (old, recent, source, outside):
                item.write_bytes(b'x' * 8192)
            linked = bucket / ('c' * 64 + '-d')
            linked.symlink_to(outside)
            yesterday = time.time() - 86400
            os.utime(old, (yesterday, yesterday))
            os.utime(source, (yesterday, yesterday))
            maintenance.trim_caches(home, False, budget=0)
            self.assertTrue(old.exists(), 'dry run must preserve artifacts')
            maintenance.trim_caches(home, True, budget=0)
            self.assertFalse(old.exists())
            for item in (recent, source, outside, linked):
                self.assertTrue(item.exists(), item)

    def test_unrecognized_cache_and_symlinked_directory_are_preserved(self):
        with tempfile.TemporaryDirectory() as temp:
            home = Path(temp)
            target = home / 'valuable/ab'
            target.mkdir(parents=True)
            (target.parent / 'README').write_text('This directory holds cached build artifacts from the Go build system.\n')
            source = target / ('d' * 64 + '-d')
            source.write_bytes(b'x' * 8192)
            os.utime(source, (0, 0))
            cache = home / '.cache'
            cache.mkdir()
            (cache / 'linked').symlink_to(target.parent)
            unknown = cache / 'unrecognized/ab'
            unknown.mkdir(parents=True)
            artifact = unknown / ('e' * 64 + '-d')
            artifact.write_bytes(b'x' * 8192)
            os.utime(artifact, (0, 0))
            maintenance.trim_caches(home, True, budget=0)
            self.assertTrue(source.exists())
            self.assertTrue(artifact.exists())

    def test_low_disk_blocks_work_but_allows_exact_recovery(self):
        home = Path('/home/awlsring')
        payload = {'tool_name': 'terminal', 'tool_input': {'command': 'go test ./...'}}
        self.assertEqual(maintenance.hook_response(payload, home, 2 * maintenance.GIB, 98)['action'], 'block')
        self.assertEqual(maintenance.hook_response(payload, home, 25 * maintenance.GIB, 70), {})
        payload['tool_input']['command'] = str(home / '.local/bin/hermes-disk-maintenance') + ' --apply'
        self.assertEqual(maintenance.hook_response(payload, home, 2 * maintenance.GIB, 98), {})
        payload['tool_input']['command'] += '; go test ./...'
        self.assertEqual(maintenance.hook_response(payload, home, 2 * maintenance.GIB, 98)['action'], 'block')


if __name__ == '__main__':
    unittest.main()
