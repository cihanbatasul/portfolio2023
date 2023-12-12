import tailwind from "src/assets/brands/tailwind.svg";
import html from "src/assets/brands/html5.svg";
import css3 from "src/assets/brands/css3-alt.svg";
import react from "src/assets/brands/react.svg";
import vue from "src/assets/brands/vuejs.svg";
import php from "src/assets/brands/php.svg";
import typescript from "src/assets/brands/typescript.svg";
import github from "src/assets/brands/github.svg";
import go from "src/assets/brands/golang.svg";
import db from "src/assets/brands/database-solid.svg";
import docker from "src/assets/brands/docker.svg";
import javascript from "src/assets/brands/js.svg";

export const stacks = [
  {
    title: "languages",
    items: [
      { name: "Javascript", icon: javascript },
      { name: "Typescript", icon: typescript },
      { name: "Golang", icon: go },
      { name: "PHP", icon: php },
    ],
    color: "#656D4A",
    fontColor: "#b6bd9e",
    text: "Proficient in a diverse set of programming languages, including JavaScript, TypeScript, Golang, and PHP, I leverage these tools to create dynamic and high-performance web solutions.",
  },
  {
    title: "frameworks",
    items: [
      { name: "React", icon: react },
      { name: "Vuejs", icon: vue },
    ],

    color: "#B6AD90",

    fontColor: "#dad6c7",
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
    fontColor: "#a4af8e",
    text: "Utilizing Docker for streamlined development, PostgreSQL for robust databases, Git for efficient version control, and Tailwind CSS for responsive interfaces, I ensure a harmonious blend of creativity and technology.",
  },
];
