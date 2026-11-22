<script setup lang="ts">
const { t } = useI18n();
const title = computed(() => t("announcement.headline"));

useSeoMeta({
  title,
  ogType: "website",
  ogTitle: title,
  twitterCard: "summary",
  twitterTitle: title,
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
}
</style>
