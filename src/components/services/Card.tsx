import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MotionValue } from "framer-motion";

interface Item {
  name: string;
  icon: string;
}
interface Stack {
  title: string;
  items: Item[];
  color: string;
  fontColor: string;
  text: string;
}

type Props = {
  info: Stack;
  index: number;
  targetScale: number;
  range: any;
  progress: MotionValue<number>;
};

const Card = (props: Props) => {
  const container = useRef(null);
  const card = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const cardScale = useTransform(props.progress, props.range, [
    1,
    props.targetScale,
  ]);
  return (
    <div
      ref={container}
      className="h-screen w-full flex items-center justify-center pt-12 sticky top-0 "
    >
      <motion.div
        ref={card}
        style={{
          scale: cardScale,
          backgroundColor: props.info.color,
          top: `calc(-10% + ${props.index * 25}px)`,
        }}
        className=" min-w-full w-5/6  h-[800px] mt-32 relative -top-28 rounded-md flex flex-col items-center p-3"
      >
        <motion.h1
          style={{ color: props.info.fontColor }}
          className={`font-satoshi  text-7xl font-extrabold text-${props.info.fontColor} antialiased`}
        >
          {props.info.title.toUpperCase()}
        </motion.h1>
        <div className="w-full  flex flex-col items-center h-full   ">
          <div className="flex  gap-6 pt-16  ">
            {props.info.items.map((tech, i) => (
              <div className="flex flex-col items-center gap-6 ">
                <p
                  style={{ color: props.info.fontColor }}
                  className="font-cabinet text-4xl"
                  key={i}
                >
                  {tech.name}
                </p>
                <img width={`50px`} src={tech.icon} alt="brand icon" />
              </div>
            ))}
          </div>
          <motion.div
            style={{ scale: textScale, color: props.info.fontColor }}
            className="flex p-3 font-cabinet text-2xl m-auto max-w-[80%]  "
          >
            {props.info.text}{" "}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
