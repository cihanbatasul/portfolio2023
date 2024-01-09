import React from "react";
import { motion } from "framer-motion";
type Props = {
  currentSection: string;
  scrollToRef: {
    aboutRef: React.RefObject<HTMLDivElement>;
    servicesRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLElement>;
  };
};

const Scroller = (props: Props) => {
  return (
    <motion.div className="fixed top-1/2 right-0 transform -translate-y-1/2 h-full w-8 flex flex-col  justify-center items-center   ">
      <motion.div className="vertical-rl font-cabinet cursor-progress  ">
        {props.currentSection}
      </motion.div>
    </motion.div>
  );
};

export default Scroller;
