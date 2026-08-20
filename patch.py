"""Line-ending-safe patcher that fails loudly when an anchor does not match."""
import io, sys

class Patch:
    def __init__(self, path):
        self.path = path
        raw = open(path, 'rb').read().decode('utf-8')
        self.crlf = '\r\n' in raw
        self.text = raw.replace('\r\n', '\n')
        self.applied = 0

    def sub(self, old, new, required=True):
        if old not in self.text:
            if required:
                raise SystemExit('NO MATCH in %s:\n---\n%s\n---' % (self.path, old[:200]))
            return False
        self.text = self.text.replace(old, new, 1)
        self.applied += 1
        return True

    def save(self):
        out = self.text.replace('\n', '\r\n') if self.crlf else self.text
        open(self.path, 'wb').write(out.encode('utf-8'))
        print('%-24s %d replacements' % (self.path, self.applied))
