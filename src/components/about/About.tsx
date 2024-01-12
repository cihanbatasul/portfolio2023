import { forwardRef } from "react";
import SectionHeader from "../SectionHeader";
import Paragraph from "./Paragraph";
import about from "src/static/about";
const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      className="w-full h-fit p-3 md:p-16 flex flex-col items-center text-center  "
      ref={ref}
    >
      <SectionHeader text="about" />
      <div className="flex flex-col  w-full md:max-w-7xl">
        <Paragraph
          className={`font-cabinetBold text-6xl w-full md:max-w-7xl pt-16  `}
          text={about[0].text}
        />
        <Paragraph
          className={`font-satoshiThin text-3xl w-full md:max-w-7xl pt-16 `}
          text={about[1].text}
        />
        <Paragraph
          className={`font-satoshiThin text-3xl  w-full md:max-w-7xl `}
          text={about[1].text2 ?? ""}
        />
      </div>
    </div>
  );
});

export default About;
