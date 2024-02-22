import { cn } from "src/cn";
import { motion } from "framer-motion";
import { easeIn } from "framer-motion/dom";
type Props = {
  text: string;
  className: string;
};

const variants = {

}


const Paragraph = (props: Props) => {
  return (
    <motion.p 
      initial={{ y: 30 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.3, ease: easeIn }}
      className={cn(props.className)}
    >
      {props.text}
    </motion.p>
  );
};

export default Paragraph;
