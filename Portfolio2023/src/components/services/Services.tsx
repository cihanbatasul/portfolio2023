import { forwardRef } from "react";
import SectionHeader from "../SectionHeader";
import StackedStacks from "./StackedStacks";

const Services = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      className="min-h-screen w-full h-fit p-16 flex flex-col items-center  "
      ref={ref}
    >
      <SectionHeader text="services" />
      <div className="w-full items-center ">
        <StackedStacks />
      </div>
    </div>
  );
});

export default Services;
