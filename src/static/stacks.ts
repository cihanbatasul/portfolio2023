import tailwind from "/brands/tailwind.svg";
import html from "/brands/html5.svg";
import react from "/brands/react.svg";
import vue from "/brands/vuejs.svg";
import php from "/brands/php.svg";
import typescript from "/brands/typescript.svg";
import github from "/brands/github.svg";
import go from "/brands/golang.svg";
import db from "/brands/database-solid.svg";
import docker from "/brands/docker.svg";
import javascript from "/brands/js.svg";

export const stacks = [
  {
    title: "languages",
    items: [
      { name: "Javascript", icon: javascript },
      { name: "Typescript", icon: typescript },
      { name: "Golang", icon: go },
      { name: "PHP", icon: php },

      { name: "HTML", icon: html },
    ],
    color: "#656D4A",
    colorDynamic: "bg-[#656D4A]",
    fontColor: "#b6bd9e",
    fontColorDynamic: "text-[#b6bd9e]",
    text: "Proficient in a diverse set of programming languages, including JavaScript, TypeScript, Golang, and PHP, I leverage these tools to create dynamic and high-performance web solutions.",
  },
  {
    title: "frameworks",
    items: [
      { name: "React", icon: react },
      { name: "Vuejs", icon: vue },
    ],

    color: "#B6AD90",
    colorDynamic: "bg-[#B6AD90]",
    fontColor: "#dad6c7",
    fontColorDynamic: "text-[#dad6c7]",
    text: "In the realm of frameworks, I excel in building dynamic and interactive user interfaces using either React or Vue.js.",
  },
  {
    title: "tools",
    items: [
      { name: "Docker", icon: docker },
      { name: "Postgresql", icon: db },
      { name: "git", icon: github },
      { name: "tailwindcss", icon: tailwind },
    ],
    color: "#414833",
    colorDynamic: "bg-[#414833]", 
    fontColor: "#a4af8e",
    fontColorDynamic: "text-[#a4af8e]",
    text: "Utilizing Docker for streamlined development, PostgreSQL for robust databases, Git for efficient version control, and Tailwind CSS for responsive interfaces, I ensure a harmonious blend of creativity and technology.",
  },
];
