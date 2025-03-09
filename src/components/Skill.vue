<template>
  <a :href="href" title="Ruby" class="skills-item" target="_blank" rel="noopener">
    <img class="mr-2 rounded" :src="ico" alt="ico" height="25" />
    <span class="text-primary">{{ name }}</span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  ico: string;
  href: string;
}>();
</script>
