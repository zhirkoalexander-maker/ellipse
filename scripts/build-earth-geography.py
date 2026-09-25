"""Regenerate the physics land mask after changing earth_daymap.jpg (requires Pillow)."""
import base64
import re
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
image = Image.open(root / "public/textures/earth_daymap.jpg").convert("RGB").resize((1024, 512))
bits = bytearray(1024 * 512 // 8)
for y in range(512):
    for x in range(1024):
        r, g, b = image.getpixel((x, y))
        if not (b > r * 1.2 and b > g * 1.05):
            i = y * 1024 + x
            bits[i // 8] |= 1 << (i % 8)

target = root / "src/planets/EarthGeography.ts"
encoded = base64.b64encode(bits).decode("ascii")
target.write_text(re.sub(r"atob\('[A-Za-z0-9+/=]+'\)", "atob('" + encoded + "')", target.read_text()))
