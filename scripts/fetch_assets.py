#!/usr/bin/env python3
"""
One-shot asset fetcher (runs in GitHub Actions).

Downloads real FocusOn Interiors project photography + press clippings from the
publicly referenced URLs (focusoninteriors.com media library — the company's own
public site), converts everything to optimised WebP, and writes the results into
public/images/... so the site is fully self-contained.

Idempotent: existing files are regenerated only when missing (set FORCE=1 to redo).
"""
import os
import ssl
import subprocess
import sys
import urllib.request

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
      "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36")

# (output relative path, source url, max width)
ASSETS = [
    # --- Luminous Power Technologies, Haridwar (Industrial / Corporate) ---
    ("projects/luminous-haridwar/luminous-haridwar-1.webp", "https://focusoninteriors.com/wp-content/uploads/2026/05/Luminous8-scaled.webp", 1600),
    ("projects/luminous-haridwar/luminous-haridwar-2.webp", "https://focusoninteriors.com/wp-content/uploads/2026/05/Luminous21-scaled.webp", 1600),
    ("projects/luminous-haridwar/luminous-haridwar-3.webp", "https://focusoninteriors.com/wp-content/uploads/2026/05/Luminous22-scaled.webp", 1600),
    ("projects/luminous-haridwar/luminous-haridwar-4.webp", "https://focusoninteriors.com/wp-content/uploads/2026/05/Luminous28-scaled.jpg", 1600),
    ("projects/luminous-haridwar/luminous-haridwar-5.webp", "https://focusoninteriors.com/wp-content/uploads/2026/05/Luminous25-scaled.jpg", 1600),
    # --- L&T Finance, Navi Mumbai ---
    ("projects/lt-finance-navi-mumbai/lt-navi-mumbai-1.webp", "https://focusoninteriors.com/wp-content/uploads/2025/12/13.png", 1600),
    ("projects/lt-finance-navi-mumbai/lt-navi-mumbai-2.webp", "https://focusoninteriors.com/wp-content/uploads/2025/12/15-1.png", 1600),
    ("projects/lt-finance-navi-mumbai/lt-navi-mumbai-3.webp", "https://focusoninteriors.com/wp-content/uploads/2025/12/11.png", 1600),
    ("projects/lt-finance-navi-mumbai/lt-navi-mumbai-4.webp", "https://focusoninteriors.com/wp-content/uploads/2025/12/12.png", 1600),
    ("projects/lt-finance-navi-mumbai/lt-navi-mumbai-5.webp", "https://focusoninteriors.com/wp-content/uploads/2025/12/14.png", 1600),
    # --- L&T Finance, Bengaluru (Rohan Tech Park) ---
    ("projects/lt-finance-bengaluru/lt-bengaluru-1.webp", "https://focusoninteriors.com/wp-content/uploads/2026/03/DSC_8911-HDR-scaled.jpg", 1600),
    ("projects/lt-finance-bengaluru/lt-bengaluru-2.webp", "https://focusoninteriors.com/wp-content/uploads/2026/03/DSC_8672-HDR-scaled.jpg", 1600),
    ("projects/lt-finance-bengaluru/lt-bengaluru-3.webp", "https://focusoninteriors.com/wp-content/uploads/2026/03/DSC_8630-HDR-scaled.jpg", 1600),
    ("projects/lt-finance-bengaluru/lt-bengaluru-4.webp", "https://focusoninteriors.com/wp-content/uploads/2026/03/DSC_8562-HDR-scaled.jpg", 1600),
    # --- Emversity (Beyond Odds Technologies), Kochi ---
    ("projects/emversity-kochi/emversity-kochi-1.webp", "https://focusoninteriors.com/wp-content/uploads/2025/12/28.png", 1600),
    ("projects/emversity-kochi/emversity-kochi-2.webp", "https://focusoninteriors.com/wp-content/uploads/2025/12/29-1.png", 1600),
    ("projects/emversity-kochi/emversity-kochi-3.webp", "https://focusoninteriors.com/wp-content/uploads/2025/12/24.png", 1600),
    ("projects/emversity-kochi/emversity-kochi-4.webp", "https://focusoninteriors.com/wp-content/uploads/2025/12/25.png", 1600),
    # --- Ericsson, Ahmedabad ---
    ("projects/ericsson-ahmedabad/ericsson-ahmedabad-1.webp", "https://focusoninteriors.com/wp-content/uploads/2026/02/KRN06569-HDR.jpg", 1600),
    ("projects/ericsson-ahmedabad/ericsson-ahmedabad-2.webp", "https://focusoninteriors.com/wp-content/uploads/2026/02/KRN06614-HDR.jpg", 1600),
    ("projects/ericsson-ahmedabad/ericsson-ahmedabad-3.webp", "https://focusoninteriors.com/wp-content/uploads/2026/02/KRN06692-HDR.jpg", 1600),
    ("projects/ericsson-ahmedabad/ericsson-ahmedabad-4.webp", "https://focusoninteriors.com/wp-content/uploads/2026/02/KRN06722-HDR.jpg", 1600),
    # --- Centricity, Mumbai ---
    ("projects/centricity-mumbai/centricity-mumbai-1.webp", "https://focusoninteriors.com/wp-content/uploads/2026/02/Focuson-Interiors-13-1-scaled.jpg", 1600),
    ("projects/centricity-mumbai/centricity-mumbai-2.webp", "https://focusoninteriors.com/wp-content/uploads/2026/02/Focuson-Interiors-16-1-scaled.jpg", 1600),
    ("projects/centricity-mumbai/centricity-mumbai-3.webp", "https://focusoninteriors.com/wp-content/uploads/2026/02/Focuson-Interiors-1-1-scaled.jpg", 1600),
    ("projects/centricity-mumbai/centricity-mumbai-4.webp", "https://focusoninteriors.com/wp-content/uploads/2026/02/Focuson-Interiors-4-1-scaled.jpg", 1600),
    # --- Centricity, Gurugram ---
    ("projects/centricity-gurugram/centricity-gurugram-1.webp", "https://focusoninteriors.com/wp-content/uploads/2026/03/MAK_0025-1-scaled.jpg", 1600),
    ("projects/centricity-gurugram/centricity-gurugram-2.webp", "https://focusoninteriors.com/wp-content/uploads/2026/03/MAK_0114-1-scaled.jpg", 1600),
    ("projects/centricity-gurugram/centricity-gurugram-3.webp", "https://focusoninteriors.com/wp-content/uploads/2026/03/MAK_0175-scaled.jpg", 1600),
    ("projects/centricity-gurugram/centricity-gurugram-4.webp", "https://focusoninteriors.com/wp-content/uploads/2026/03/MAK_0198-1-1-scaled.jpg", 1600),
    # --- Navu, Bengaluru ---
    ("projects/navu-bengaluru/navu-bengaluru-1.webp", "https://focusoninteriors.com/wp-content/uploads/2026/03/Navu-1-scaled.jpg", 1600),
    ("projects/navu-bengaluru/navu-bengaluru-2.webp", "https://focusoninteriors.com/wp-content/uploads/2026/03/Navu-7-scaled.jpg", 1600),
    ("projects/navu-bengaluru/navu-bengaluru-3.webp", "https://focusoninteriors.com/wp-content/uploads/2026/03/Navu-11-scaled.jpg", 1600),
    # --- Press clippings (Media page) ---
    ("press/startuptalky.webp", "https://focusoninteriors.com/wp-content/uploads/2025/12/Screenshot-2025-12-11-at-11.16.29-PM-1-2048x1263.png", 1200),
    ("press/bw-businessworld.webp", "https://focusoninteriors.com/wp-content/uploads/2025/12/Screenshot-2025-11-13-at-4.10.07-PM.png", 1200),
    ("press/commercial-design.webp", "https://focusoninteriors.com/wp-content/uploads/2025/12/Untitled-design-14-2048x2048.png", 1200),
    ("press/business-standard.webp", "https://focusoninteriors.com/wp-content/uploads/2026/01/www.business-standard.com_amp_content_press-releases-ani_focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises-125121700513_1.html.png", 1200),
    ("press/homes-india.webp", "https://focusoninteriors.com/wp-content/uploads/2026/01/www.homesindiamagazine.com_viewpoint_how-data-design-and-technology-are-reshaping-india-s-workplaces-nwid-6504.html.png", 1200),
    ("press/medianews4u.webp", "https://focusoninteriors.com/wp-content/uploads/2026/04/unnamed-2.png", 1200),
]


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Referer": "https://focusoninteriors.com/"})
    try:
        with urllib.request.urlopen(req, timeout=60, context=ssl.create_default_context()) as r:
            return r.read()
    except Exception:
        # fallback to curl
        out = subprocess.run(
            ["curl", "-sSL", "--fail", "-A", UA, "-e", "https://focusoninteriors.com/", url],
            check=True, capture_output=True, timeout=120,
        )
        return out.stdout


def main() -> int:
    force = os.environ.get("FORCE") == "1"
    ok, failed = 0, []
    for rel, url, maxw in ASSETS:
        dest = os.path.join(ROOT, "public", "images", rel)
        if os.path.exists(dest) and not force:
            print(f"skip  {rel}")
            ok += 1
            continue
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        tmp = dest + ".tmp"
        try:
            data = fetch(url)
            with open(tmp, "wb") as f:
                f.write(data)
            im = Image.open(tmp)
            im = im.convert("RGB")
            if im.width > maxw:
                h = round(im.height * maxw / im.width)
                im = im.resize((maxw, h), Image.LANCZOS)
            im.save(dest, "WEBP", quality=80, method=6)
            os.remove(tmp)
            kb = os.path.getsize(dest) // 1024
            print(f"ok    {rel}  ({im.width}x{im.height}, {kb} KB)")
            ok += 1
        except Exception as e:  # noqa: BLE001
            print(f"FAIL  {rel}: {e}")
            failed.append(rel)
    print(f"\n{ok}/{len(ASSETS)} assets ready")
    if failed:
        print("failed:", *failed, sep="\n  ")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
