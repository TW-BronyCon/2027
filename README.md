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

## GitHub Pages

In the repository's **Settings → Pages**, select **GitHub Actions** as the
build and deployment source. The [Pages workflow](.github/workflows/pages.yml)
deploys on pushes to `main` and can also be run manually. It uses the Pages
origin and base path for locale metadata, assets, and links, so the same
workflow supports a project subpath or a custom domain configured in Pages.

## Announcement copy

Edit `i18n/locales/en/announcement.json` and
`i18n/locales/zh-TW/announcement.json`. The `announcement.headline` field
sets both the visible sentence and the page title.

Google Sheets is not connected. A future build-time sync can map one row per
locale (`locale`, `headline`) into these files before `npm run build`. Escape
Vue I18n message syntax in cell values and keep any credentials in GitHub Actions
secrets. Publishing sheet edits will require a rebuild and deploy.
