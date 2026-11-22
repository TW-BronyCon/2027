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

The [Pages workflow](.github/workflows/pages.yml) builds this repository and a
pinned revision of `TW-BronyCon/2026-ManeSite`, then publishes one artifact
with `/2026/` and `/2027/`. Set **Settings → Pages → Source** to **GitHub Actions**
and use `twbronycon.org` as the custom domain after validating the artifact.
Update the pinned archive revision when publishing archive changes.

At the Cloudflare edge, redirect only `https://twbronycon.org/` to
`https://twbronycon.org/2027/` with HTTP 302. The Pages artifact includes a
fallback HTML redirect. After the archive is live at `/2026/`, redirect
`2026.twbronycon.org/*` to `https://twbronycon.org/2026/$1` with HTTP 301,
preserving query strings. Do not redirect the archive hostname before cutover.

## Previews: Cloudflare Pages

Connect each source repository to its own Cloudflare Pages project. Disable
automatic production deployments, enable preview deployments for non-production
branches, and leave `NUXT_APP_BASE_URL` unset. Use `.output/public` as the output
directory. The 2027 build command is `npm run build`; the 2026 build command is
`npm run generate`. Cloudflare Pages uploads the output directly, so there is no
Wrangler deploy command.

## Announcement copy

Edit `i18n/locales/en/announcement.json` and
`i18n/locales/zh-TW/announcement.json`. The `announcement.headline` field
sets both the visible sentence and the page title.

Google Sheets is not connected. A future build-time sync can map one row per
locale (`locale`, `headline`) into these files before `npm run build`. Escape
Vue I18n message syntax in cell values and keep any credentials in GitHub Actions
secrets. Publishing sheet edits will require a rebuild and deploy.
