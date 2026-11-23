<script setup lang="ts">
const { locale, t } = useI18n();
const title = computed(() => t("announcement.headline"));
const description = computed(() => t("announcement.description"));
const shareUrl = computed(() =>
  locale.value === "en"
    ? "https://twbronycon.org/2027/en"
    : "https://twbronycon.org/2027",
);
const shareImage = "https://twbronycon.org/2027/og-2027.png";
const imageAlt = computed(() => t("announcement.shareImageAlt"));

useSeoMeta({
  title,
  description,
  ogType: "website",
  ogTitle: title,
  ogUrl: shareUrl,
  ogDescription: description,
  ogImage: shareImage,
  ogImageType: "image/png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: imageAlt,
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: shareImage,
  twitterImageAlt: imageAlt,
});
</script>

<template>
  <div class="page">
    <main class="teaser">
      <h1 class="headline">{{ title }}</h1>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.page {
  display: grid;
  grid-template-rows: 1fr auto;
  min-block-size: 100vh;
  min-block-size: 100dvh;
  background: linear-gradient(to bottom left, #1742b070, #4dd0ff82);
}

.teaser {
  display: grid;
  place-items: center;
  padding: 1.5rem;
  text-align: center;
}

.headline {
  max-inline-size: 24ch;
  margin: 0;
  font-size: clamp(1.75rem, 1.25rem + 2vw, 3.5rem);
  line-height: 1.2;
  text-wrap: balance;
  text-shadow: 0 1px 3px #0a235c;
}
</style>
