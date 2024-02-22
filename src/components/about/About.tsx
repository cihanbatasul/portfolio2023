import { forwardRef, useEffect, useState } from "react";
import AnimatedParagraph from "./AnimatedParagraph";
import Paragraph from "./Paragraph";
import about from "src/static/about";
const About = forwardRef<HTMLDivElement>((_, ref) => {
  const [greetingOver, setGreetingOver] = useState<boolean>(false)
  
  useEffect(() => {
    console.log(greetingOver)
  }, [greetingOver])
  return (
    <div
      className="h-fit md:h-screen w-full p-3 md:p-16 flex flex-col items-center justify-center text-center  "
      ref={ref}
    >
      
      {!greetingOver ? <AnimatedParagraph stateAction={setGreetingOver}/> :<div className="flex flex-col w-full md:max-w-7xl">
        <Paragraph
          className={`font-cabinetBold text-[#393632] text-7xl md:text-9xl uppercase font-extrabold w-full md:max-w-7xl pt-16  `}
          text={about[0].text}
        />
        <Paragraph
          className={`font-satoshiThin text-[#5c5955] text-3xl w-full md:max-w-7xl pt-16 `}
          text={about[1].text}
        />

      </div>}
    </div>
  );
});

export default About;
