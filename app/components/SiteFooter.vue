<script setup lang="ts">
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBoxArchive, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const logoBase = `${useRuntimeConfig().app.baseURL}footer/`;

const partners = [
  {
    name: "Bronyfestival",
    href: "https://bronyfestival.com/",
    logo: "bf.avif",
  },
  { name: "CSBC", href: "https://csbronycarnival.com/", logo: "csbc.avif" },
  { name: "MLPCON.INFO", href: "https://mlpcon.info/", logo: "mlpcon.avif" },
  { name: "MalangPony", href: "https://malangpony.com/", logo: "MPN.avif" },
  {
    name: "Norse Horse Con",
    href: "https://www.norsehorsecon.eu/",
    logo: "nhc.avif",
  },
];

const socials = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@TWBronyCon2",
    icon: faYoutube,
  },
  { name: "Discord", href: "https://discord.gg/k83NMPUKxG", icon: faDiscord },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61583292256078",
    icon: faFacebook,
  },
  { name: "X", href: "https://x.com/TWBronycon2", icon: faXTwitter },
  {
    name: "Instagram",
    href: "https://www.instagram.com/taiwanbronycon2",
    icon: faInstagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/TW-BronyCon/2027-Manesite",
    icon: faGithub,
  },
];
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="top">
        <div class="brand">
          <nav class="links" :aria-label="t('footer.partners')">
            <NuxtLink class="icon-link" :to="switchLocalePath(locale)">
              <img
                class="logo"
                :src="`${logoBase}text-logo-clear.avif`"
                alt="TWBC"
              />
            </NuxtLink>
            <a
              v-for="link in partners"
              :key="link.href"
              class="icon-link"
              :href="link.href"
              :title="link.name"
            >
              <img class="logo" :src="logoBase + link.logo" :alt="link.name" />
            </a>
          </nav>
          <nav class="links" :aria-label="t('footer.language')">
            <NuxtLink
              v-for="language in locales"
              :key="language.code"
              class="language-link"
              :to="switchLocalePath(language.code)"
              :lang="language.language"
              :hreflang="language.language"
            >
              {{ language.name }}
            </NuxtLink>
          </nav>
        </div>
        <nav class="links" :aria-label="t('footer.social')">
          <a
            v-for="link in socials"
            :key="link.href"
            class="icon-link"
            :href="link.href"
            :aria-label="link.name"
            :title="link.name"
          >
            <FooterIcon :icon="link.icon" />
          </a>
          <a
            class="icon-link"
            href="mailto:twbronycon2@gmail.com"
            :aria-label="t('footer.email')"
            :title="t('footer.email')"
          >
            <FooterIcon :icon="faEnvelope" />
          </a>
        </nav>
      </div>
      <div class="bottom">
        <p>{{ t("footer.copyright") }}</p>
        <a class="icon-link archive-link" href="https://2026.twbronycon.org/">
          <FooterIcon :icon="faBoxArchive" />
          {{ t("archive2026") }}
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  color: #fff;
  background-color: #102651b8;
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

.language-link {
  text-decoration: none;
}

.language-link:hover {
  color: #d0f4ff;
}

.language-link[aria-current="page"] {
  font-weight: 700;
  text-shadow: 0 0 0.65em #a5ecff;
}

.icon-link {
  display: inline-grid;
  place-items: center;
  min-inline-size: 2.75rem;
  min-block-size: 2.75rem;
  border-radius: 0.5rem;
}

.archive-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding-inline: 0.5rem;
}

.icon-link:hover {
  background-color: #ffffff24;
}

.footer a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

.logo {
  inline-size: 2.5rem;
  block-size: 2rem;
  object-fit: contain;
}
</style>
