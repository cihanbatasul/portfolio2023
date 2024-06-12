import { about } from "src/static";
import ActionRow from "./ActionRow";
import { forwardRef} from "react";
import { ParagraphBig, ParagraphIntro } from "./Paragraphs";
import Spacer from "../utils/Spacer";

const About = forwardRef<HTMLDivElement, {scrollToContact: () => void}>(({scrollToContact}, ref) => {
const arr  = ["Fullstack Development,", " Innovation,", " Efficiency"]  
const [introduction, further] = about
  return (
    <div
      className="h-full my-auto mx-auto max-w-[90rem] md:h-screen w-full p-3 md:p-16 flex flex-col justify-center"
      ref={ref}
    >
      <ParagraphIntro text={arr} className="flex  md:flex-row  gap-3 antialiased"/>
      <Spacer/>
      <ParagraphBig text={introduction.text} className="font-cabinet text-4xl md:text-7xl antialiased text-[#393632]" />
      <Spacer/>
      <ParagraphBig text={further.text} className="font-satoshiThin  text-gray-600 w-full md:w-6/12 text-xl antialiased"/>
      <Spacer/>
      <ActionRow scrollToContact={scrollToContact}/>
    </div>
  );
});

export default About;
