<template>
  <div class="languages d-flex gap-x-2 ml-2">
    <a @click="() => setLocale('en')">
      <img src="/flags/usa.gif" width="30" height="23" class="rounded" />
    </a>
    <a @click="() => setLocale('ru')">
      <img src="/flags/russia.gif" width="30" height="23" class="rounded" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const setLocale = (value: string) => {
  locale.value = value;
};
</script>
