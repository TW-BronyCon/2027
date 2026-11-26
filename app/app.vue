<script setup lang="ts">
const localeHead = useLocaleHead({ seo: true });
const baseURL = useRuntimeConfig().app.baseURL;
const icon = `${baseURL}favicon.ico`;
const googleTag = "G-QN69QWDCDV";

useHead(() => ({
  ...localeHead.value,
  link: [
    ...(localeHead.value.link ?? []).map((link) =>
      link.href === `https://twbronycon.org${baseURL.slice(0, -1)}`
        ? { ...link, href: `${link.href}/` }
        : link,
    ),
    { rel: "icon", href: icon },
  ],
}));

if (baseURL === "/2027/") {
  useHead({
    script: [
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleTag}');
        `,
      },
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${googleTag}`,
        async: true,
        fetchpriority: "low",
      },
    ],
  });
}
</script>

<template>
  <NuxtPage />
</template>

<style>
:root {
  color-scheme: dark;
  font-family: system-ui, sans-serif;
  color: #f4f4f5;
  background: #151517;
}

body {
  margin: 0;
}
</style>
