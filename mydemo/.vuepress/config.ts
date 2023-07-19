import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/vuepress-starter/",

  lang: "zh-CN",
  title: "文档demo-Hope主题",
  description: "vuepress-theme-hope 的demo学习",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
