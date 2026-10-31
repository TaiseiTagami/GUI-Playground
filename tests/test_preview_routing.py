"""Regression tests for native experiment window routing (no GUI required)."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]

class PreviewRoutingTests(unittest.TestCase):
    def test_native_window_uses_fragment(self):
        source = (ROOT / "launch.py").read_text(encoding="utf-8")
        self.assertIn("+'#window='+instance_id", source)
        self.assertNotIn("+'?window='+instance_id", source)

    def test_editor_reads_fragment(self):
        source = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("new URLSearchParams(location.hash.slice(1)).get('window')", source)
        self.assertIn("new URLSearchParams(location.hash.slice(1)).has('window')", source)
        self.assertNotIn("new URLSearchParams(location.search)", source)

    def test_experiment_asset_present(self):
        self.assertTrue((ROOT / "experiments" / "immergold-chat" / "renderer.js").is_file())

if __name__ == "__main__":
    unittest.main()
