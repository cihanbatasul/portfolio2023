import { forwardRef } from "react";
import SectionHeader from "../SectionHeader";
import Paragraph from "./Paragraph";
import about from "src/static/about";
const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="w-full h-fit p-16 flex flex-col items-center " ref={ref}>
      <SectionHeader text="about" />
      <div className="flex flex-col  max-w-7xl">
        <Paragraph
          className={`font-cabinetBold text-6xl max-w-7xl pt-16 `}
          text={about[0].text}
        />
        <Paragraph
          className={`font-satoshiThin text-3xl max-w-4xl pt-16 `}
          text={about[1].text}
        />
        <Paragraph
          className={`font-satoshiThin text-3xl  max-w-4xl `}
          text={about[1].text}
        />
      </div>
    </div>
  );
});

export default About;
