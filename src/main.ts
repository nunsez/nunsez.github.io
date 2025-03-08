import "./assets/main.css";

import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";

const i18n = createI18n({
  locale: window.navigator.language.split("-")[0],
  fallbackLocale: "en",
  availableLocales: ["en", "ru"],
  legacy: false,
  fallbackRoot: true,
  globalInjection: true,
});

const app = createApp(App);
app.use(i18n);
app.mount("#app");
