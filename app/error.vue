<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{ error: NuxtError }>();
const { locale, t } = useI18n();
const base = useRuntimeConfig().app.baseURL;
const title = computed(() =>
  error.statusCode === 404 ? t("error.notFound") : t("error.unexpected"),
);

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  link: [{ rel: "icon", href: `${base}favicon.ico` }],
}));
useSeoMeta({ title, robots: "noindex" });
</script>

<template>
  <div class="error-page">
    <main class="error-content">
      <p class="error-code">{{ error.statusCode }}</p>
      <h1>{{ title }}</h1>
      <a class="home-link" :href="locale === 'en' ? `${base}en/` : base">
        {{ t("error.backHome") }}
      </a>
    </main>
    <SiteFooter recovery />
  </div>
</template>

<style scoped>
:global(body) {
  margin: 0;
}

.error-page {
  display: grid;
  grid-template-rows: 1fr auto;
  min-block-size: 100vh;
  min-block-size: 100dvh;
  background: linear-gradient(to bottom left, #1742b070, #4dd0ff82), #151517;
  color: #f4f4f5;
  font-family: system-ui, sans-serif;
}

.error-content {
  margin: auto;
  padding: 1.5rem;
  text-align: center;
}

.error-code {
  margin: 0;
  color: #d0f4ff;
  font-size: clamp(4rem, 15vw, 8rem);
  font-weight: 800;
  line-height: 1;
  text-shadow: 0 1px 3px #0a235c;
}

.error-content h1 {
  margin: 0.75rem 0 0;
  font-size: clamp(1.75rem, 1.25rem + 2vw, 3.5rem);
  text-wrap: balance;
}

.home-link {
  display: inline-grid;
  min-block-size: 2.75rem;
  place-items: center;
  margin-block-start: 1.5rem;
  padding-inline: 1rem;
  border: 1px solid #ffffff60;
  border-radius: 0.5rem;
  background: #102651b8;
  color: inherit;
  text-decoration: none;
}

.home-link:hover {
  background: #102651;
}

.home-link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}
</style>
