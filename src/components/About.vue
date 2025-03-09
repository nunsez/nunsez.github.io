<template>
  <section>
    <div class="container grid-2">
      <div class="p-5 text-end">
        <p class="text-bold">{{ t("header").toUpperCase() }}</p>
        <p class="fs-90">{{ t("description") }}</p>
      </div>
      <div class="p-5 preline">{{ t("content") }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<i18n lang="yaml">
en:
  header: About me
  content: |
    Work experience: 2+ years
    Currently working on Ruby on Rails + Typescript (SolidJs) + PostreSQL stack
    have projects on Elixir/Phoenix
    I am receptive to new tools, methods and circumstances
    I am ready for remote work / relocation
ru:
  header: Обо мне
  content: |
    Опыт работы: 2+ года
    В настоящее время работаю на стеке Ruby on Rails + Typescript (SolidJs) + PostreSQL
    Есть проекты на Elixir/Phoenix
    Восприимчив к новым инструментам, методам и подходам
    Готов к удалённой работе / переезду
</i18n>

<style scoped>
.preline {
  white-space: pre-line;
}
</style>
