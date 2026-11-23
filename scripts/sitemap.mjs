import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const year = process.argv[2];
const base = process.env.NUXT_APP_BASE_URL;
if (base === `/${year}/`) {
  const output = ".output/public";
  const urls = new Set();
  const files = await readdir(output, { recursive: true, withFileTypes: true });
  for (const entry of files) {
    if (!entry.isFile() || entry.name !== "index.html") continue;
    const html = await readFile(join(entry.parentPath, entry.name), "utf8");
    const head = html.split("</head>", 1)[0];
    if (
      /<meta name="(?:robots|googlebot)" content="[^"]*\b(?:noindex|none)\b/.test(
        head,
      )
    )
      continue;
    const canonical = head.match(
      /<link\b[^>]*\brel="canonical"[^>]*\bhref="([^"]+)"/,
    )?.[1];
    if (!canonical) continue;
    const url = new URL(canonical);
    if (
      url.origin === "https://twbronycon.org" &&
      (url.pathname === `/${year}` || url.pathname.startsWith(`/${year}/`)) &&
      !url.search &&
      !url.hash
    ) {
      urls.add(canonical);
    }
  }
  if (!urls.size) throw new Error(`No production canonical URLs for ${year}`);
  const entries = [...urls]
    .sort()
    .map((url) => `  <url><loc>${url.replaceAll("&", "&amp;")}</loc></url>`);
  await writeFile(
    join(output, "sitemap.xml"),
    [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...entries,
      "</urlset>",
      "",
    ].join("\n"),
  );
}
