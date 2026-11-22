<script setup lang="ts">
const localeHead = useLocaleHead({ seo: true });
const icon = `${useRuntimeConfig().app.baseURL}favicon.ico`;

useHead(() => ({
  ...localeHead.value,
  link: [...(localeHead.value.link ?? []), { rel: "icon", href: icon }],
}));
</script>

<template>
  <NuxtPage />
</template>
