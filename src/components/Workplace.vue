<template>
  <div>
    <div class="d-flex justify-end">
      <p class="time text-italic">{{ dateFormat(startDate) }} - {{ dateFormat(endDate) }}</p>
    </div>

    <div>
      <p class="text-bold mb-1">{{ company }}</p>
      <p class="text-italic mt-1">{{ position }}</p>
    </div>

    <div class="responsibilities">
      <p v-for="(responsibility, index) in responsibilities" :key="index">
        {{ rt(responsibility) }}
      </p>
    </div>

    <div>
      <p>{{ skills }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale, rt } = useI18n();

const dateFormat = (date: Date | number) => {
  const format = Intl.DateTimeFormat(locale.value, { month: "long", year: "numeric" });
  return format.format(date);
};

defineProps<{
  company: string;
  position: string;
  responsibilities: Record<string, string>;
  startDate: Date | number;
  endDate: Date | number;
  skills: string;
}>();
</script>

<style scoped>
.time {
  margin: 0;
  padding: 0;
}
.responsibilities > p {
  margin-top: var(--spacer-2);
  margin-bottom: var(--spacer-2);
}
</style>
