import { stacks } from "src/static/stacks";
import Card from "./Card";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Lenis from "@studio-freight/lenis";
const StackedStacks = () => {
  const stackElements = stacks;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <motion.div ref={container}>
      {stackElements.map((stack, index: number) => {
        const targetScale = 1 - (stackElements.length - index) * 0.05;

        return (
          <Card
            key={index}
            progress={scrollYProgress}
            index={index}
            info={stack}
            range={[index * 0.3, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </motion.div>
  );
};
export default StackedStacks;
