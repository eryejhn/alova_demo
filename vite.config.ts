import path from "node:path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
      vue(),
  WindiCSS({
    scan: {
      include: ["src/**/*.{vue,html,jsx,tsx}", "index.html"],
    },
  })
  ],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
})
