const publishSitemap = process.env.NUXT_APP_BASE_URL === "/2027/";

export default defineNuxtConfig({
  compatibilityDate: "2026-11-23",
  modules: ["@nuxtjs/i18n", "@nuxtjs/sitemap"],
  site: { url: "https://twbronycon.org", trailingSlash: true },
  sitemap: {
    enabled: publishSitemap,
    autoI18n: false,
    discoverImages: false,
    discoverVideos: false,
  },
  nitro: {
    prerender: {
      routes: ["/", "/en", ...(publishSitemap ? ["/sitemap.xml"] : [])],
      // Internal links already include this base; do not crawl it as a route.
      ignore: [/^\/2027(?:\/|$)/],
      failOnError: true,
    },
  },
  i18n: {
    baseUrl: process.env.NUXT_I18N_BASE_URL ?? "https://twbronycon.org",
    defaultLocale: "zh-TW",
    strategy: "prefix_except_default",
    trailingSlash: true,
    detectBrowserLanguage: false,
    locales: [
      {
        code: "zh-TW",
        language: "zh-TW",
        name: "繁體中文",
        file: "zh-TW/announcement.json",
      },
      {
        code: "en",
        language: "en",
        name: "English",
        file: "en/announcement.json",
      },
    ],
  },
});
