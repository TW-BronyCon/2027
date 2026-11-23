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
