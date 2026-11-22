<script setup lang="ts">
import summerSky from "~/assets/summer-sky.svg";

const { t } = useI18n();
const title = computed(() => `${t("announcement.season")} · ${t("siteName")}`);
const description = computed(() => t("announcement.description"));

useSeoMeta({
  title,
  description,
  ogType: "website",
  ogSiteName: () => t("siteName"),
  ogTitle: title,
  ogDescription: description,
  twitterCard: "summary",
  twitterTitle: title,
  twitterDescription: description,
});
</script>

<template>
  <main class="hero">
    <div class="copy">
      <p class="season">{{ t("announcement.season") }}</p>
      <h1 class="headline">{{ t("announcement.headline") }}</h1>
      <p class="description">{{ description }}</p>
    </div>
    <img class="artwork" :src="summerSky" alt="" width="600" height="500" />
  </main>
</template>

<style scoped>
.hero {
  display: grid;
  align-items: center;
  align-content: center;
  gap: clamp(2rem, 5vw, 4.5rem);
  padding-block: clamp(2rem, 7vw, 6rem);
}

.copy {
  min-inline-size: 0;
}

.season {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin: 0 0 1.125rem;
  color: var(--color-gold);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.season::before {
  content: "";
  inline-size: 1.75rem;
  block-size: 1px;
  background: currentColor;
}

.headline {
  max-inline-size: 12ch;
  margin: 0;
  font-size: clamp(2.5rem, 1.45rem + 4.2vw, 5.5rem);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.055em;
  text-wrap: balance;
  overflow-wrap: anywhere;
}

.headline:lang(zh-TW) {
  max-inline-size: 8em;
  font-size: clamp(2.5rem, 1.6rem + 3.6vw, 5rem);
  line-height: 1.16;
  letter-spacing: -0.025em;
}

.description {
  max-inline-size: 33em;
  margin: 1.5rem 0 0;
  color: var(--color-text-muted);
  font-size: clamp(1.0625rem, 0.95rem + 0.55vw, 1.25rem);
  line-height: 1.65;
}

.artwork {
  display: block;
  inline-size: 100%;
  max-inline-size: 37.5rem;
  block-size: auto;
  justify-self: center;
  border: 1px solid var(--color-border);
  border-radius: 1.25rem;
}

@media (min-width: 56rem) {
  .hero {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}
</style>
