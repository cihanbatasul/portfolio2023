import { forwardRef } from "react";
import MobileProj from "./MobileProj";
import SectionHeader from "../SectionHeader";
import Double from "./Double";
import projects from "src/static/projects";
type Props = {
  isMobile: boolean;
};
const Projects = forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  return (
    <div
      className="min-h-screen h-full antialiased flex flex-col p-3  md:p-16"
      ref={ref}
    >
      <SectionHeader text="projects" />
      {props.isMobile ? (
        <MobileProj />
      ) : (
        <Double projects={[projects[0], projects[1]]} />
      )}
    </div>
  );
});

export default Projects;
