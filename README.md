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

The `twbc-2026-preview` and `twbc-2027-preview` Cloudflare Pages projects are
connected to their respective repositories. Automatic production deployments
are disabled; non-production branches deploy to preview URLs. Both use
`.output/public` and leave `NUXT_APP_BASE_URL` unset.

The 2027 build command is `npm run build`. The 2026 build command is
`npm run sync:avatars && npx nuxt build --prerender --preset static` so it
also works on archive branches predating the static build script. Cloudflare
Pages uploads the output directly, with no Wrangler deploy command.

## Announcement copy

Edit `i18n/locales/en/announcement.json` and
`i18n/locales/zh-TW/announcement.json`. The `announcement.headline` field
sets both the visible sentence and the page title.

Google Sheets is not connected. A future build-time sync can map one row per
locale (`locale`, `headline`) into these files before `npm run build`. Escape
Vue I18n message syntax in cell values and keep any credentials in GitHub Actions
secrets. Publishing sheet edits will require a rebuild and deploy.
