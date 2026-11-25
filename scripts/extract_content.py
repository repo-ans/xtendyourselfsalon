import re
import json
import sys
from html import unescape
from html.parser import HTMLParser

PAGES = {
    "home": "index.html",
    "about": "about/index.html",
    "contact-us": "contact-us/index.html",
    "experience": "experience/index.html",
    "services": "services/index.html",
    "portfolio": "portfolio/index.html",
    "privacy-policy": "privacy-policy/index.html",
    "terms-and-consitions": "terms-and-consitions/index.html",
}

TEXT_TAGS = {"h1", "h2", "h3", "h4", "p"}

class Extractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.items = []
        self.stack = []
        self.cur_text = []
        self.capturing = False
        self.cur_tag = None
        self.cur_href = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in TEXT_TAGS:
            self.capturing = True
            self.cur_tag = tag
            self.cur_text = []
        elif tag == "a" and attrs.get("href"):
            self.cur_href = attrs.get("href")
        elif tag == "img":
            src = attrs.get("src", "")
            if "static.showit.com" in src:
                self.items.append({
                    "type": "img",
                    "src": src,
                    "alt": attrs.get("alt", ""),
                    "title": attrs.get("title", ""),
                })
        elif tag == "textarea":
            ph = attrs.get("placeholder")
            if ph:
                self.items.append({"type": "field", "placeholder": ph})
        elif tag == "br" and self.capturing:
            self.cur_text.append(" ")

    def handle_endtag(self, tag):
        if tag in TEXT_TAGS and self.capturing and self.cur_tag == tag:
            text = unescape("".join(self.cur_text)).strip()
            text = re.sub(r"\s+", " ", text)
            if text:
                entry = {"type": tag, "text": text}
                if self.cur_href:
                    entry["href"] = self.cur_href
                self.items.append(entry)
            self.capturing = False
            self.cur_tag = None
            self.cur_href = None

    def handle_data(self, data):
        if self.capturing:
            self.cur_text.append(data)


def dedupe(items):
    out = []
    seen = set()
    for it in items:
        key = json.dumps(it, sort_keys=True)
        if key in seen:
            continue
        seen.add(key)
        out.append(it)
    return out


def main():
    base = "."
    result = {}
    for name, path in PAGES.items():
        full = f"{base}/{path}"
        with open(full, "r", encoding="utf-8", errors="ignore") as f:
            html = f.read()
        # Only parse the body to skip head noise
        body_start = html.find("<body")
        html_body = html[body_start:] if body_start != -1 else html
        ext = Extractor()
        ext.feed(html_body)
        result[name] = dedupe(ext.items)
    with open("scripts/extracted_content.json", "w", encoding="utf-8") as f:
        json.dump(result, f, indent=1, ensure_ascii=False)
    for name, items in result.items():
        print(f"{name}: {len(items)} items")

if __name__ == "__main__":
    main()
