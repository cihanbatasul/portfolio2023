import React, { forwardRef, useEffect } from "react";
import SectionHeader from "../SectionHeader";
import Double from "./Double";
import projects from "src/static/projects";
type Props = {};
const Projects = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      className="min-h-screen h-full antialiased flex flex-col p-16"
      ref={ref}
    >
      <SectionHeader text="projects" />
      <Double projects={[projects[0], projects[1]]} />
    </div>
  );
});

export default Projects;
