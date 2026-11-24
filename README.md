# Taiwan BronyCon · Summer 2027

A bilingual Nuxt 4 teaser. Traditional Chinese is the default (`/`); English
is at `/en`. Both routes are prerendered.

## Local development

Use Node.js 24.15 or later in the Node 24 release line.

```sh
npm ci
npm run dev
```

To build and preview the static site:

```sh
npm run build
npx serve .output/public
```

## Production: GitHub Pages

The [Pages workflow](.github/workflows/pages.yml) deploys only this repo to
`https://twbronycon.org/2027/`, including its own `404.html` and sitemap. The
organization Pages repository `TW-BronyCon/tw-bronycon.github.io` owns the
custom domain, root redirect, and sitemap index. `TW-BronyCon/2026` deploys
the archive independently at `/2026/` from its `deploy/year-path` branch.

The latest event provides the social share metadata in both locales and the
share image at `/2027/og-2027.png`. Production `/2027/` builds use the same
Google tag as `/2026/`; root-path preview builds do not load it. The apex HTTP
redirect does not execute analytics, so a visit through `/` is counted on the
destination page rather than counted twice.

## Previews: Cloudflare Workers

Build with `npm run build` and leave `NUXT_APP_BASE_URL` unset. The
[Wrangler configuration](wrangler.jsonc) serves `.output/public` from
`twbc-2027-preview.twbc.workers.dev`. Configure Workers Builds to run
`npx wrangler deploy` on the primary branch and `npx wrangler preview` on other
branches. The Worker is static and has no runtime bindings.

Keep the old Cloudflare Pages site available until the Worker serves both
locales and its 404 page. This migration does not change GitHub Pages.

## Announcement copy

Edit `i18n/locales/en/announcement.json` and
`i18n/locales/zh-TW/announcement.json`. The `announcement.headline` field
sets both the visible sentence and the page title.

Google Sheets is not connected. A future build-time sync can map one row per
locale (`locale`, `headline`) into these files before `npm run build`. Escape
Vue I18n message syntax in cell values and keep any credentials in GitHub Actions
secrets. Publishing sheet edits will require a rebuild and deploy.
