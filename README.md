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
`i18n/locales/zh-TW/announcement.json`. Each exposes `announcement.season`,
`announcement.headline`, and `announcement.description`; the season and
description also feed the page metadata. Interface labels live separately in
`ui.json` for each locale.

Google Sheets is not connected. A future build-time sync can map one row per
locale (`locale`, `season`, `headline`, `description`) into these announcement
files before `npm run build`. Treat cells as plain text and escape Vue I18n
message syntax when generating the catalogs. Keep any Sheets credentials in
GitHub Actions secrets, not in the static site. Publishing edits from the sheet
will require a rebuild and deploy.
