<template>
  <section>
    <div class="container grid-2">
      <div class="p-5 text-end">
        <p class="text-bold">{{ t("header").toUpperCase() }}</p>
      </div>
      <div class="p-5 content">
        <i18n-t keypath="content">
          <template v-slot:vLangLink>
            <a
              href="https://github.com/vlang/v"
              title="The V Programming Language"
              target="_blank"
              rel="noopener"
              v-text="'V'"
            />
          </template>
          <template v-slot:cs50Link>
            <a
              href="https://github.com/nunsez/cs50"
              title="CS50 Repository"
              target="_blank"
              rel="noopener"
              v-text="t('repoLink')"
            />
          </template>
          <template v-slot:sicpLink>
            <a
              href="https://github.com/nunsez/sicp_elixir"
              title="CS50 Repository"
              target="_blank"
              rel="noopener"
              v-text="t('repoLink')"
            />
          </template>
        </i18n-t>
      </div>
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
  repoLink: Repository link
  content: |
    Ruby / Ruby On Rails / Elixir / Phoenix / PostgreSQL stack

    Typed Ruby on Rails projects using RBS and Steep

    Wrote a high-load service in Elixir / Phoenix
    with connections to several databases.

    I am a contributor to the programming language {vLangLink}

    I support the website of an online marketplace (E-commerce).
    I implemented a bonus system for purchases.
    I wrote integration with the Yookassa payment system.

    I took the official MIT CS50 course. {cs50Link}
    I solve problems from the SICP book (Structure and Interpretation of Computer Programs). {sicpLink}
ru:
  header: Обо мне
  repoLink: Ссылка на репозиторий
  content: |
    Стек Ruby / Ruby On Rails / Elixir / Phoenix / PostgreSQL

    Типизировал Ruby on Rails проекты с использованием RBS и Steep

    Писал высоконагруженный сервис на Elixir / Phoenix
    с подключением к нескольким базам данных.

    Являюсь контрибьютором в язык программирования {vLangLink}

    Поддерживаю сайт интернет магазина (Е-commerce).
    Реализовал бонусную систему при покупках.
    Писал интеграцию с платежной системой ЮКасса.

    Проходил официальный курс MIT CS50. {cs50Link}
    Решаю задачи из книги SICP (Структура и интерпретация компьютерных программ). {sicpLink}
</i18n>

<style scoped>
.content {
  white-space: pre-line;

  a {
    color: var(--primary);
  }
}
</style>
