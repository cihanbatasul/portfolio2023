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
    color: "#514F46",
    colorDynamic: "bg-[#514F46]",
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

    color: "#676B5D",
    colorDynamic: "bg-[#676B5D]",
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
    color: "#798978",
    colorDynamic: "bg-[#798978]", 
    fontColor: "#c9cfc9",
    fontColorDynamic: "text-[#c9cfc9]",
    text: "Utilizing Docker for streamlined development, PostgreSQL for robust databases, Git for efficient version control, and Tailwind CSS for responsive interfaces, I ensure a harmonious blend of creativity and technology.",
  },
];
