import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
type Props = {
  text: string;
};

const Paragraph = (props: Props) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });
  const words = props.text.split(" ");
  return (
    <p
      ref={element}
      className="w-full  text-center mx-auto font-cabinet text-3xl antialiased p-3 lg:max-w-[1280px] flex flex-wrap  "
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            range={[start, end]}
            progress={scrollYProgress}
            word={word}
          />
        );
      })}
    </p>
  );
};
type WordProps = {
  word: string;
  range: number[];
  progress: MotionValue;
};
const Word = (props: WordProps) => {
  const opacity = useTransform(props.progress, props.range, [0, 1]);
  return (
    <span className="mr-[12px] mt-[12px] relative">
      <motion.span className="absolute opacity-10">{props.word}</motion.span>
      <motion.span style={{ opacity }}>{props.word}</motion.span>
    </span>
  );
};

export default Paragraph;
