# Miguel Bravo portfolio

Source repository for [mabravo.com](https://mabravo.com).

## Production site

The current portfolio lives in [`iPortfolio/v2`](iPortfolio/v2). Netlify publishes that directory
directly from the `main` branch. The site is static and does not require a framework, package
installation, runtime service, or environment variables.

Run it locally:

```sh
python3 -m http.server 8765 --directory iPortfolio/v2
```

Then open <http://127.0.0.1:8765>.

Validate local paths and required deployment files:

```sh
python3 scripts/validate_site.py
```

Browser smoke tests:

```sh
python3 -m pip install -r requirements-dev.txt
python3 -m playwright install chromium
python3 -m http.server 8765 --directory iPortfolio/v2
# In another terminal:
python3 tests/smoke.py
```

## Version history

- `main` contains the production V2 and its deployment configuration.
- The original V1 is preserved in the remote branch
  `archive/legacy-portfolio-2026-07-26` and the immutable tag `v1-final`.
- V1 is intentionally not published as a legacy website.

## Deployment

[`netlify.toml`](netlify.toml) is the source of truth for the Netlify build. A successful push to
`main` validates the static site and publishes `iPortfolio/v2`. Netlify retains earlier deploys for
rollback.

