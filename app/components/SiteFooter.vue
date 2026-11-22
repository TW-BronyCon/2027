<script setup lang="ts">
const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const partners = [
  { name: "Bronyfestival", href: "https://bronyfestival.com/" },
  { name: "CSBC", href: "https://csbronycarnival.com/" },
  { name: "MLPCON.INFO", href: "https://mlpcon.info/" },
  { name: "MalangPony", href: "https://malangpony.com/" },
  { name: "Norse Horse Con", href: "https://www.norsehorsecon.eu/" },
];

const socials = [
  { name: "YouTube", href: "https://www.youtube.com/@TWBronyCon2" },
  { name: "Discord", href: "https://discord.gg/k83NMPUKxG" },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61583292256078",
  },
  { name: "X", href: "https://x.com/TWBronycon2" },
  { name: "Instagram", href: "https://www.instagram.com/taiwanbronycon2" },
  { name: "GitHub", href: "https://github.com/TW-BronyCon/2027-Manesite" },
];
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="top">
        <div class="brand">
          <nav class="links" :aria-label="t('footer.partners')">
            <NuxtLink :to="switchLocalePath(locale)">TWBC</NuxtLink>
            <a v-for="link in partners" :key="link.href" :href="link.href">
              {{ link.name }}
            </a>
          </nav>
          <nav class="links" :aria-label="t('footer.language')">
            <NuxtLink
              v-for="language in locales"
              :key="language.code"
              :to="switchLocalePath(language.code)"
              :lang="language.language"
              :hreflang="language.language"
            >
              {{ language.name }}
            </NuxtLink>
          </nav>
        </div>
        <nav class="links" :aria-label="t('footer.social')">
          <a v-for="link in socials" :key="link.href" :href="link.href">
            {{ link.name }}
          </a>
          <a href="mailto:twbronycon2@gmail.com">{{ t("footer.email") }}</a>
        </nav>
      </div>
      <div class="bottom">
        <p>{{ t("footer.copyright") }}</p>
        <a href="https://2026.twbronycon.org/">{{ t("archive2026") }}</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  color: #ffbdde;
  background: linear-gradient(transparent, #201326);
  padding: 1.5rem;
  font-size: 0.875rem;
}

.container {
  max-inline-size: 74rem;
  margin-inline: auto;
}

.top,
.bottom,
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
}

.top,
.bottom {
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: grid;
  gap: 0.75rem;
}

.bottom {
  border-block-start: 1px solid #ffffff24;
  margin-block-start: 1rem;
  padding-block-start: 1rem;
}

.bottom p {
  margin: 0;
}

.footer a {
  color: inherit;
  text-underline-offset: 0.2em;
}

.footer a[aria-current="page"] {
  font-weight: 700;
}
</style>
