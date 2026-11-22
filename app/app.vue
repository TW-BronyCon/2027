<script setup lang="ts">
const { locales, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localeHead = useLocaleHead({ seo: true });
const icon = `${useRuntimeConfig().app.baseURL}mark.svg`;

useHead(() => ({
  ...localeHead.value,
  link: [
    ...(localeHead.value.link ?? []),
    { rel: "icon", type: "image/svg+xml", href: icon },
  ],
}));
</script>

<template>
  <div class="shell">
    <NuxtRouteAnnouncer />
    <header class="header">
      <div class="brand">
        <img :src="icon" alt="" width="36" height="36" />
        <span>{{ t("siteName") }}</span>
      </div>
      <nav :aria-label="t('languagePicker')">
        <ul class="languages">
          <li v-for="language in locales" :key="language.code">
            <NuxtLink
              class="language"
              :to="switchLocalePath(language.code)"
              :lang="language.language"
              :hreflang="language.language"
            >
              {{ language.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <NuxtPage />
    <footer class="footer">{{ t("footer") }}</footer>
  </div>
</template>

<style scoped>
.shell {
  --gutter: clamp(1rem, 4vw, 3rem);
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-block-size: 100vh;
  min-block-size: 100dvh;
  inline-size: min(calc(100% - 2 * var(--gutter)), 74rem);
  margin-inline: auto;
}

.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
  padding-block: 1rem;
  border-block-end: 1px solid var(--color-border);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
}

.languages {
  display: flex;
  flex-wrap: wrap;
  gap: 0.125rem;
  margin: 0;
  padding: 0.1875rem;
  list-style: none;
  border: 1px solid var(--color-border);
  border-radius: 1.25rem;
  background: var(--color-surface);
}

.language {
  display: flex;
  align-items: center;
  min-block-size: 2.75rem;
  padding-inline: 0.75rem;
  border-radius: 1rem;
  color: var(--color-text-muted);
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
}

.language:hover {
  color: var(--color-text);
}

.language:active {
  text-decoration: underline;
}

.language[aria-current="page"] {
  background: var(--color-pink);
  color: var(--color-bg);
}

@media (prefers-reduced-motion: no-preference) {
  .language {
    transition:
      color 150ms ease,
      background-color 150ms ease;
  }
}

.footer {
  padding-block: 1.25rem;
  border-block-start: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: 0.875rem;
}
</style>
