"""Static regression checks for the debounced configuration editor."""
from pathlib import Path
import unittest

SOURCE=(Path(__file__).resolve().parents[1]/'index.html').read_text(encoding='utf-8')

class ConfigDebounceTests(unittest.TestCase):
    def test_half_second_debounce(self):
        self.assertIn('SAVE_DELAY_MS=500',SOURCE)
        self.assertIn('saveTimer=setTimeout(flushSave,SAVE_DELAY_MS)',SOURCE)
        self.assertIn('clearTimeout(saveTimer)',SOURCE)

    def test_native_window_launch_flushes_pending_changes(self):
        self.assertIn('flushSave();window.pywebview.api.open_window(item.id)',SOURCE)

    def test_sync_does_not_replace_active_slider(self):
        self.assertIn('if(saveTimer!==null)return;const data=JSON.parse(json)',SOURCE)
        self.assertIn('function sync(){if(saveTimer!==null)return;',SOURCE)

if __name__=='__main__':
    unittest.main()
