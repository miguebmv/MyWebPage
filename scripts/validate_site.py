#!/usr/bin/env python3
"""Validate the static portfolio before Netlify publishes it."""

from __future__ import annotations

import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse


REPOSITORY_ROOT = Path(__file__).resolve().parents[1]
SITE_ROOT = REPOSITORY_ROOT / "iPortfolio" / "v2"
REQUIRED_FILES = {
    "index.html",
    "projects.html",
    "speaking.html",
    "404.html",
    "_redirects",
    "robots.txt",
    "sitemap.xml",
    "assets/css/site.css",
    "assets/js/i18n.js",
    "assets/js/site.js",
}
URL_ATTRIBUTES = {"href", "src", "data", "poster"}


class ReferenceParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.references: list[str] = []

    def handle_starttag(
        self, tag: str, attrs: list[tuple[str, str | None]]
    ) -> None:
        del tag
        for name, value in attrs:
            if name in URL_ATTRIBUTES and value:
                self.references.append(value)


def resolve_local_reference(page: Path, reference: str) -> Path | None:
    parsed = urlparse(reference)
    if parsed.scheme or parsed.netloc or reference.startswith(("#", "mailto:", "tel:", "data:")):
        return None

    clean_path = unquote(parsed.path)
    if not clean_path:
        return None

    if clean_path.startswith("/"):
        target = SITE_ROOT / clean_path.lstrip("/")
    else:
        target = page.parent / clean_path

    return target.resolve()


def reference_exists(target: Path) -> bool:
    candidates = [target]
    if target.is_dir() or target.name == "":
        candidates.append(target / "index.html")
    if not target.suffix:
        candidates.extend((target.with_suffix(".html"), target / "index.html"))
    return any(candidate.is_file() for candidate in candidates)


def validate() -> list[str]:
    errors: list[str] = []

    for relative_path in sorted(REQUIRED_FILES):
        if not (SITE_ROOT / relative_path).is_file():
            errors.append(f"Missing required file: {relative_path}")

    for page in sorted(SITE_ROOT.glob("*.html")):
        parser = ReferenceParser()
        parser.feed(page.read_text(encoding="utf-8"))

        for reference in parser.references:
            target = resolve_local_reference(page, reference)
            if target is None:
                continue
            try:
                target.relative_to(SITE_ROOT)
            except ValueError:
                errors.append(
                    f"{page.relative_to(SITE_ROOT)} references a path outside the site: {reference}"
                )
                continue
            if not reference_exists(target):
                errors.append(
                    f"{page.relative_to(SITE_ROOT)} has a missing local reference: {reference}"
                )

    redirect_rules = (SITE_ROOT / "_redirects").read_text(encoding="utf-8")
    for required_route in ("/projects", "/speaking", "/v2/*"):
        if required_route not in redirect_rules:
            errors.append(f"Missing redirect compatibility rule: {required_route}")

    return errors


def main() -> int:
    errors = validate()
    if errors:
        print("Static site validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    page_count = len(list(SITE_ROOT.glob("*.html")))
    asset_count = len([path for path in (SITE_ROOT / "assets").rglob("*") if path.is_file()])
    print(f"Static site validation passed: {page_count} HTML pages and {asset_count} assets.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

