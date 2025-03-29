<template>
  <section>
    <div class="container grid-2">
      <div class="p-5 text-end">
        <p class="text-bold">{{ t("header").toUpperCase() }}</p>
      </div>
      <div class="p-5 content d-flex flex-column gap-y-5">
        <Workplace
          v-bind="i18nProps('rzd')"
          :start-date="Date.UTC(2024, 5)"
          :end-date="Date.now()"
        />
        <Workplace
          v-bind="i18nProps('roskadastr')"
          :start-date="Date.UTC(2023, 10)"
          :end-date="Date.UTC(2024, 4)"
        />
        <Workplace
          v-bind="i18nProps('tac')"
          :start-date="Date.UTC(2022, 3)"
          :end-date="Date.UTC(2023, 9)"
        />
        <Workplace
          v-bind="i18nProps('proektmarketing')"
          :start-date="Date.UTC(2021, 8)"
          :end-date="Date.UTC(2022, 2)"
        />
        <Workplace
          v-bind="i18nProps('hexlet-os')"
          :start-date="Date.UTC(2021, 3)"
          :end-date="Date.UTC(2021, 5)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Workplace from "./Workplace.vue";

const { t, tm } = useI18n();

const i18nProps = (company: string) => ({
  company: t(`${company}.company`),
  position: t(`${company}.position`),
  responsibilities: tm(`${company}.responsibilities`),
  skills: t(`${company}.skills`),
});
</script>

<i18n lang="yaml">
en:
  header: Work experience
  rzd:
    company: JSC "RZD"
    position: Lead expert of the development team
    responsibilities:
      - I create an interactive system related to real-time contest scheduling, scheduling, and scoring.
    skills: Ruby • Ruby on Rails • WebSockets • PostgreSQL • SQL • Git • Linux • Redis
  roskadastr:
    company: PLC "Roskadastr"
    position: Chief System Programmer
    responsibilities:
      - Worked on Roskadastr services. Participated in connecting new regions to Roskadastr subsystems.
      - Wrote from scratch a highly loaded service on Elixir / Phoenix, which served about 60 Ruby / Ruby on Rails servers.
      - Created technical solutions to solve internal problems of the organization.
      - Performed code reviews.
    skills: Ruby • Ruby on Rails • Elixir • Phoenix • PostgreSQL • MongoDB • Docker • JavaScript • Microservices • Highload
  tac:
    company: Tac-Textile
    position: Web-developer
    responsibilities:
      - Full maintenance of 2 websites of the company.
      - Developed integrations with external services (Yandex Maps, Payment Gateway).
      - Developed new functionality, refactoring existing codebase, writing tests.
    skills: Web development • Ruby on Rails • Ruby • TypeScript • JavaScript • Node.js • HTML • PostgreSQL • Docker • Git
  proektmarketing:
    company: Proektmarketing +1
    position: Programmer
    responsibilities:
      - Custom website development.
      - Frontend (JavaScript) + Backend (Ruby / Ruby On Rails).
    skills: Web development • Ruby • Ruby on Rails • JavaScript • HTML • SCSS • Slim • PostgreSQL • Git
  hexlet-os:
    company: Hexlet Open Source
    position: Frontend Developer
    responsibilities:
      - Codebattle - a two-player game in which algorithmic problems in a chosen programming language are solved for speed.
      - Code-Basics - free programming courses for beginners.
    skills: React • Redux • Twitter Bootstrap • Git • Slim
ru:
  header: Опыт работы
  rzd:
    company: ПКТБ-ЦЦТ ОАО "РЖД"
    position: Ведущий эксперт группы разработки
    responsibilities:
      - Создаю интерактивную систему, связанную с планированием конкурсов в реальном времени, их проведением и выставлением оценок.
    skills: Ruby • Ruby on Rails • WebSockets • PostgreSQL • SQL • Git • Linux • Redis
  roskadastr:
    company: Публично-правовая компания «Роскадастр»
    position: Главный системный программист
    responsibilities:
      - Работал над сервисами Роскадастра. Участвовал в подключении новых регионов РФ к подсистемам Роскадастра.
      - Писал с нуля высоконагруженный сервис на Elixir / Phoenix, который обслуживал порядка 60 серверов Ruby / Ruby on Rails.
      - Создавал тех. решения для решения внутренних задач организации.
      - Проводил код ревью.
    skills: Ruby • Ruby on Rails • Elixir • Phoenix • PostgreSQL • MongoDB • Docker • JavaScript • Микросервисная архитектура • Высоконагруженные системы
  tac:
    company: ТАЧ-Текстиль
    position: Web-разработчик
    responsibilities:
      - Полное сопровождение сайтов компании (2 шт.).
      - Разработка интеграций с внешними сервисами (Яндекс Карты, ЮКасса).
      - Разработка нового функционала, рефакторинг существующей кодовой базы (борьба с легаси), написание тестов.
    skills: Веб-разработка • Ruby on Rails • Ruby • TypeScript • JavaScript • Node.js • HTML • PostgreSQL • Docker • Git
  proektmarketing:
    company: Proektmarketing +1
    position: Программист
    responsibilities:
      - Разработка сайтов на заказ.
      - Frontend (JavaScript) + Backend (Ruby / Ruby On Rails).
    skills: Веб-разработка • Ruby • Ruby on Rails • JavaScript • HTML • SCSS • Slim • PostgreSQL • Git
  hexlet-os:
    company: Hexlet Open Source
    position: Frontend Developer
    responsibilities:
      - Codebattle - игра для двух игроков, в которой решаются на скорость алгоритмические задачи на выбранном языке программирования.
      - Code-Basics - бесплатные курсы для программирования для начинающих.
    skills: React • Redux • Twitter Bootstrap • Git • Slim
</i18n>
