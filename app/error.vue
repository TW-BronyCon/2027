<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{ error: NuxtError }>();
const { locale, locales, t } = useI18n();
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
  <main class="error-page">
    <div class="error-content">
      <p class="error-code">{{ error.statusCode }}</p>
      <h1>{{ title }}</h1>
      <p>{{ t("error.description") }}</p>
      <div class="home-links">
        <a
          v-for="language in locales"
          :key="language.code"
          :href="language.code === 'en' ? `${base}en/` : base"
          :lang="language.language"
          :hreflang="language.language"
        >
          {{ language.name }}
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
.error-page {
  position: fixed;
  inset: 0;
  display: grid;
  overflow: auto;
  padding: 1.5rem;
  background: linear-gradient(to bottom left, #1742b070, #4dd0ff82), #151517;
  color: #f4f4f5;
  font-family: system-ui, sans-serif;
  text-align: center;
}

.error-content {
  margin: auto;
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

.home-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-block-start: 1.5rem;
}

.home-links a {
  display: inline-grid;
  min-block-size: 2.75rem;
  place-items: center;
  border: 1px solid #ffffff60;
  border-radius: 0.5rem;
  padding-inline: 1rem;
  background: #102651b8;
  color: inherit;
}

.home-links a:hover {
  background: #102651;
}

.home-links a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}
</style>
