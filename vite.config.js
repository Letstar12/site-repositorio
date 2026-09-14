import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],

  base: "/site-repositorio/",

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        atividades: resolve(__dirname, "atividades.html"),
        tcc: resolve(__dirname, "tcc.html"),
      },
    },
  },
});
