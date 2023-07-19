import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "指南",
      icon: "lightbulb",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "笔记",
      icon: "book",
      prefix: "note/",
      link: "note/",
      children: "structure",
    },
    "slides",
  ],
});
