import { cn } from "src/cn";
import { motion, AnimatePresence } from "framer-motion";
import { Braces } from "lucide-react";
import { easeIn } from "framer-motion/dom";

type ParagraphIntroProps = {
  text: string[];
  className?: string;
};

type ParagraphBigProps = {
  text: string;
  className?: string;
};


const ParagraphIntro = (props: ParagraphIntroProps) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.5, ease: easeIn}}
      className={cn(props.className)}
    >
      <Braces color="#393632"/>
      {props.text.map((word, index) => (
        <AnimatePresence mode="wait" key={index}><motion.span 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ease: easeIn, duration: 2 * index }}
        className="text-gray-600 font-satoshiThin text-lg">{word}</motion.span></AnimatePresence>
      ))}
    </motion.div>
  );
};

const ParagraphBig  = (props: ParagraphBigProps) => {
  return (
  <motion.div
  initial={{ opacity: 0}} animate={{opacity: 1 }} transition={{duration: 1.5, ease: easeIn, delay: 1.2}}
  className={cn(props.className)}
  >
  {props.text}
  </motion.div>  
  )
} 

export {ParagraphIntro, ParagraphBig};
