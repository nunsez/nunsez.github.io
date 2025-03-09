<template>
  <section>
    <div class="container grid-2">
      <div class="p-5 text-end">
        <p class="text-bold">{{ t("header").toUpperCase() }}</p>
      </div>
      <div class="p-5 skills-grid">
        <Skill name="Ruby" ico="/skills/ruby.png" href="https://rubyonrails.org/" />
        <Skill name="Ruby on Rails" ico="/skills/rubyonrails.png" href="https://rubyonrails.org/" />
        <Skill name="Elixir" ico="/skills/elixir.png" href="https://elixir-lang.org/" />
        <Skill
          name="Phoenix"
          ico="/skills/phoenixframework.png"
          href="https://www.phoenixframework.org/"
        />
        <Skill name="TypeScript" ico="/skills/ts.png" href="https://www.typescriptlang.org" />
        <Skill name="NodeJS" ico="/skills/node.png" href="https://nodejs.dev/" />
        <Skill name="PostgreSQL" ico="/skills/postgresql.png" href="https://www.postgresql.org/" />
        <Skill name="Docker" ico="/skills/docker.png" href="https://www.docker.com/" />
        <Skill name="Git" ico="/skills/git.png" href="https://git-scm.com/" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Skill from "./Skill.vue";

const { t } = useI18n();
</script>

<i18n lang="yaml">
en:
  header: Skills
ru:
  header: Навыки
</i18n>
