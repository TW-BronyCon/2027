<script setup lang="ts">
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

const { icon } = defineProps<{ icon: IconDefinition }>();
</script>

<template>
  <svg
    aria-hidden="true"
    width="22"
    height="22"
    :viewBox="`0 0 ${icon.icon[0]} ${icon.icon[1]}`"
    fill="currentColor"
  >
    <path
      v-for="path in Array.isArray(icon.icon[4])
        ? icon.icon[4]
        : [icon.icon[4]]"
      :key="path"
      :d="path"
    />
  </svg>
</template>
