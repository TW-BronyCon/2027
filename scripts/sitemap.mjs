import { execFileSync } from "node:child_process";
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
      url.pathname = `${url.pathname.replace(/\/$/, "")}/`;
      urls.add(url.href);
    }
  }
  if (!urls.size) throw new Error(`No production canonical URLs for ${year}`);
  // Use the latest site-source commit, not the deployment time.
  const lastmod = execFileSync(
    "git",
    [
      "log",
      "-1",
      "--format=%cs",
      "--",
      "app",
      "i18n",
      "public",
      "nuxt.config.ts",
    ],
    { encoding: "utf8" },
  ).trim();
  const entries = [...urls].sort().map((url) => {
    const { pathname } = new URL(url);
    const priority =
      pathname === `/${year}/` || pathname === `/${year}/en/` ? "1.0" : "0.8";
    const modified = lastmod ? `<lastmod>${lastmod}</lastmod>` : "";
    return `  <url><loc>${url.replaceAll("&", "&amp;")}</loc>${modified}<priority>${priority}</priority></url>`;
  });
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
