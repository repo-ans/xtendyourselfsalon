import re
import json
import os

with open("C:/Users/PC/AppData/Local/Temp/xys_src/assets_list.txt", "r", encoding="utf-8") as f:
    urls = [l.strip() for l in f if l.strip()]

# pattern: //static.showit.com/<size>/<hash>/<bucket>/<filename>
pat = re.compile(r"^//static\.showit\.com/(\d+)/([^/]+)/([^/]+)/(.+)$")

best = {}  # filename -> (size, url)
for u in urls:
    m = pat.match(u)
    if not m:
        print("NOMATCH", u)
        continue
    size, hash_, bucket, filename = m.groups()
    size = int(size)
    cur = best.get(filename)
    if cur is None or size > cur[0]:
        best[filename] = (size, "https:" + u)

def slugify(name):
    base, ext = os.path.splitext(name)
    base = re.sub(r"[^a-zA-Z0-9]+", "-", base).strip("-").lower()
    ext = ext.lower()
    if ext not in (".jpg", ".jpeg", ".png", ".webp", ".gif"):
        ext = ".jpg"
    return base + ext

mapping = {}
plan = []
used_slugs = set()
for filename, (size, url) in sorted(best.items()):
    slug = slugify(filename)
    orig_slug = slug
    i = 2
    while slug in used_slugs:
        base, ext = os.path.splitext(orig_slug)
        slug = f"{base}-{i}{ext}"
        i += 1
    used_slugs.add(slug)
    mapping[filename] = f"/images/{slug}"
    plan.append((url, slug))

with open("scripts/image_mapping.json", "w", encoding="utf-8") as f:
    json.dump(mapping, f, indent=1)

with open("scripts/image_download_plan.txt", "w", encoding="utf-8") as f:
    for url, slug in plan:
        f.write(f"{url}\t{slug}\n")

print(f"{len(urls)} source urls -> {len(best)} unique images to download")
