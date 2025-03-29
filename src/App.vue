<template>
  <header>
    <Hero />
  </header>
  <main>
    <About />
    <WorkExperience />
    <Skills />
  </main>
</template>

<script setup lang="ts">
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import WorkExperience from "./components/WorkExperience.vue";
</script>
