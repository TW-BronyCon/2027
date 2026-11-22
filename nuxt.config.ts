export default defineNuxtConfig({
  compatibilityDate: "2026-11-23",
  css: ["~/assets/css/global.css"],
  modules: ["@nuxtjs/i18n"],
  nitro: {
    prerender: {
      routes: ["/", "/en"],
      failOnError: true,
    },
  },
  i18n: {
    baseUrl: process.env.NUXT_I18N_BASE_URL ?? "https://tw-bronycon.github.io",
    defaultLocale: "zh-TW",
    strategy: "prefix_except_default",
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
