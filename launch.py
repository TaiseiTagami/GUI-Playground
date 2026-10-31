"""Native desktop GUI Playground: editor and separate pywebview windows."""
import json
import threading
from pathlib import Path
try:
    import webview
except ModuleNotFoundError as exc:
    if exc.name == 'webview':
        raise SystemExit('pywebview is missing. Run start.bat to create/use the project-local .venv.') from exc
    raise

ROOT=Path(__file__).resolve().parent
STATE=ROOT/'.playground-state.json'
LOCK=threading.RLock()

class Bridge:
    def load_state(self):
        with LOCK:
            if not STATE.exists(): return None
            try:
                data=json.loads(STATE.read_text(encoding='utf-8'))
                return json.dumps(data) if isinstance(data.get('instances'),list) else None
            except (OSError,ValueError,AttributeError): return None

    def save_state(self,raw):
        if not isinstance(raw,str) or len(raw)>2_000_000: raise ValueError('Invalid state size')
        data=json.loads(raw)
        if not isinstance(data,dict) or not isinstance(data.get('instances'),list): raise ValueError('Invalid state')
        with LOCK:
            STATE.write_text(json.dumps(data,indent=2),encoding='utf-8')
            expression='window.guiPlaygroundSync('+json.dumps(json.dumps(data))+')'
            for win in list(webview.windows):
                if win.title == 'GUI Playground — Config Editor': continue
                try: win.evaluate_js(expression)
                except Exception: pass
        return True

    def open_window(self,instance_id):
        if not isinstance(instance_id,str) or not instance_id.isalnum() or len(instance_id)>64:
            raise ValueError('Invalid instance')
        with LOCK:
            data=json.loads(STATE.read_text(encoding='utf-8')) if STATE.exists() else {}
            item=next((i for i in data.get('instances',[]) if i.get('id')==instance_id),None)
            if item is None: raise ValueError('Unknown instance')
            webview.create_window(
                title=str(item.get('name','GUI experiment'))+' — Preview',
                url=(ROOT/'index.html').as_uri()+'#window='+instance_id,
                js_api=self,width=860,height=650,min_size=(400,300))
        return True

def main():
    bridge=Bridge()
    webview.create_window('GUI Playground — Config Editor',(ROOT/'index.html').as_uri(),
                          js_api=bridge,width=1450,height=900,min_size=(920,620))
    webview.start(http_server=True,debug=False)

if __name__=='__main__': main()
