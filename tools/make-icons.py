"""Generates the home-screen icons.

iOS ignores the manifest for Add to Home Screen and reads apple-touch-icon,
which must be a PNG with no transparency — a transparent icon renders black
on the home screen. So these are drawn on a solid background at the exact
sizes iOS and Android ask for.
"""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = 'icons'
BG = (45, 91, 168)        # --accent, the course blue
FG = (255, 255, 255)
SIZES = [180, 192, 512]   # apple-touch-icon, android, maskable/splash

os.makedirs(OUT, exist_ok=True)


def font_for(px):
    """A serif face if one is installed, matching the course display type."""
    for path in (r'C:\Windows\Fonts\georgiab.ttf',
                 r'C:\Windows\Fonts\times.ttf',
                 r'C:\Windows\Fonts\arialbd.ttf'):
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, px)
            except OSError:
                pass
    return ImageFont.load_default()


def draw(size):
    img = Image.new('RGB', (size, size), BG)
    d = ImageDraw.Draw(img)

    # A large Fr, centred optically rather than mathematically.
    f = font_for(int(size * 0.52))
    text = 'Fr'
    box = d.textbbox((0, 0), text, font=f)
    w, h = box[2] - box[0], box[3] - box[1]
    d.text((size / 2 - w / 2 - box[0], size * 0.46 - h / 2 - box[1]),
           text, font=f, fill=FG)

    # A tricolour bar underneath, so it reads as French at a glance.
    bar_h = max(2, int(size * 0.055))
    bar_w = int(size * 0.44)
    x0 = int(size / 2 - bar_w / 2)
    y0 = int(size * 0.74)
    third = bar_w // 3
    d.rectangle([x0, y0, x0 + third, y0 + bar_h], fill=(255, 255, 255))
    d.rectangle([x0 + third, y0, x0 + 2 * third, y0 + bar_h], fill=(226, 230, 240))
    d.rectangle([x0 + 2 * third, y0, x0 + bar_w, y0 + bar_h], fill=(198, 40, 40))

    return img


for s in SIZES:
    p = os.path.join(OUT, 'icon-%d.png' % s)
    draw(s).save(p, 'PNG', optimize=True)
    print('%-24s %d bytes' % (p, os.path.getsize(p)))
