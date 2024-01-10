import { motion, easeInOut } from "framer-motion";
import { useRef } from "react";
type Props = {
  onClick: () => void;
};

const Button = (props: Props) => {
  const buttonRef = useRef(null);

  return (
    <motion.button
      onClick={props.onClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 } }
      transition={{ duration: 0.6, ease: easeInOut, type: "spring" }}
      ref={buttonRef}
      className="font-cabinet text-xl bg-black text-white rounded-md p-3  w-40 hover:bg-black/80 "
    >
      Send
    </motion.button>
  );
};

export default Button;
