import { defineConfig } from "vite-plugin-windicss";
import lineClamp from "windicss/plugin/line-clamp";

export default defineConfig({
  darkMode: "class",
  attributify: true,
  theme: {
    extend: {},
  },
  extend: {
    lineClamp: {
      sm: "3",
      lg: "10",
    },
  },
  plugins: [lineClamp], // https://cn.windicss.org/plugins/official/line-clamp.html
});
