import React, { HTMLAttributes } from "react";
import { cn } from "src/cn";
import { motion, easeInOut } from "framer-motion";
import { easeIn } from "framer-motion/dom";
type Props = {
  text: string;
  className: string;
};

const Paragraph = (props: Props) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: easeIn }}
      viewport={{ once: true }}
      className={cn(props.className)}
    >
      {props.text}
    </motion.p>
  );
};

export default Paragraph;
