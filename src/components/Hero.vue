<template>
  <section>
    <div class="container grid-2">
      <div class="avatar p-5">
        <img src="/avatar.png" alt="Avatar" width="200" height="200" />
      </div>
      <div class="p-5 mt-auto relative">
        <Locales />
        <h1 class="name">
          <span class="first-name">{{ t("firstName") }}</span>
          <br />
          <span class="last-name text-primary">{{ t("lastName") }}</span>
        </h1>
        <div class="d-flex justify-between align-center flex-wrap">
          <p class="mr-3 text-italic">Web Developer (Backend)</p>
          <div class="d-flex gap-x-2">
            <a href="https://github.com/nunsez" target="_blank" rel="noopener">
              <img src="/logo_github.png" width="30" height="30" class="rounded" />
            </a>
            <a href="https://www.linkedin.com/in/alex-mandrikov" target="_blank" rel="noopener">
              <img src="/logo_linkedin.png" width="30" height="30" class="rounded" />
            </a>
            <a href="https://career.habr.com/nunsez" target="_blank" rel="noopener">
              <img src="/logo_habr_career.png" width="30" height="30" class="rounded" />
            </a>
          </div>
        </div>
        <div class="contacts d-flex justify-between align-center flex-wrap gap-x-3">
          <div>
            <p class="text-bold">{{ t("location") }}</p>
            <p class="fs-90">
              <a href="#">{{ t("address") }}</a>
            </p>
          </div>
          <div>
            <p class="text-bold">{{ t("site") }}</p>
            <p class="fs-90">
              <a href="https://nunsez.github.io/">nunsez.github.io</a>
            </p>
          </div>
          <div>
            <p class="text-bold">{{ t("email") }}</p>
            <p class="fs-90">
              <a href="mailto:mad.nunsez@gmail.com">mad.nunsez@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Locales from "./Locales.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 100%;
  }
}

.name {
  font-size: 2.5rem;
  line-height: 1.1;

  .first-name {
    font-weight: normal;
  }

  .last-name {
    letter-spacing: 0.1em;
  }
}

.contacts {
  margin-top: 5rem;
  border-top: 1px solid var(--dark);
}
</style>

<i18n lang="yaml">
en:
  firstName: Alexander
  lastName: Mandrikov
  location: Location
  address: Krasnoyarsk, Russia
  site: Web
  email: Email
ru:
  firstName: Александр
  lastName: Мандриков
  location: Местоположение
  address: Красноярск, Россия
  site: Сайт
  email: Почта
</i18n>
