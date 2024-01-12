import { forwardRef } from "react";
import SectionHeader from "../SectionHeader";
import StackedStacks from "./StackedStacks";
import Stacks from "./Stacks";
type Props = {
  isMobile: boolean;
};
const Services = forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  return (
    <div
      className="min-h-screen w-full h-fit p-3 md:p-16 flex flex-col items-center  "
      ref={ref}
    >
      <SectionHeader text="services" />
      {props.isMobile ? (
        <Stacks />
      ) : (
        <div className="w-full items-center ">
          <StackedStacks />
        </div>
      )}
    </div>
  );
});

export default Services;
