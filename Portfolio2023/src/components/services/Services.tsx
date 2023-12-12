import { forwardRef } from "react";
import Paragraph from "./Paragraph";
import SectionHeader from "../SectionHeader";
import StackedStacks from "./StackedStacks";
type Props = {};
const paragraph =
  "Looking to transform business requirenments into working code.";

const tech = ["languages", "technoloies", "tools"];
const Services = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      className="min-h-screen w-full h-fit p-16 flex flex-col items-center  "
      ref={ref}
    >
      <SectionHeader text="services" />
      <div className="w-full items-center ">
        <Paragraph text={paragraph} />
        <StackedStacks />
      </div>
    </div>
  );
});

export default Services;
