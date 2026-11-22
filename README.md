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

## Cloudflare deployment

For a **Cloudflare Pages** project connected to Git, set the build command to
`npm run build` and the build output directory to `.output/public`. Pages uploads
that directory automatically; do not add a deploy command.

If the dashboard shows a **Deploy command**, the project is using **Workers
Builds** instead. Use `npm run build` and `npx wrangler deploy` there. The
repository's `wrangler.jsonc` deploys the same static files without a Worker
entry point.

Set `NUXT_I18N_BASE_URL` to the public site origin if it differs from
`https://twbronycon.org`. Leave `NUXT_APP_BASE_URL` unset for a root deployment.

## Announcement copy

Edit `i18n/locales/en/announcement.json` and
`i18n/locales/zh-TW/announcement.json`. The `announcement.headline` field
sets both the visible sentence and the page title.

Google Sheets is not connected. A future build-time sync can map one row per
locale (`locale`, `headline`) into these files before `npm run build`. Escape
Vue I18n message syntax in cell values and keep any credentials in GitHub Actions
secrets. Publishing sheet edits will require a rebuild and deploy.
