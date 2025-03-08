import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueI18nPlugin(), vueDevTools()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
});
