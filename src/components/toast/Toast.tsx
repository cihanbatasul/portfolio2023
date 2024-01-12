import { motion, easeInOut} from "framer-motion";
import { SetStateAction, useEffect } from "react";
type Props = {
  show: boolean | null;
  setShow: React.Dispatch<SetStateAction<boolean | null>>
};
const variants = {
  closed: {
    scale: 0, 
    transition: {
      duration: 0.4, delay: 0.2, ease: easeInOut
    }
  },
  open: {
    scale: 1,
    transition: {
      duration: 0.4, ease: easeInOut
    }
  },
  
}
const Toast = (props: Props) => {

  useEffect(() => {
    if(props.show) {
      setTimeout(() => {
props.setShow(false)
      }, 2000)
    } 
  }, [props, props.show])

  if (props.show) {
    return (
        <motion.div
        variants={variants}
        animate={props.show ? "open" : "closed"}
        exit="closed"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-20 rounded-md text-white font-cabinet flex items-center justify-center text-center bg-lightGreen"
      >
        <p>
          {props.show === true
            ? "Thank you for your interest. Your email has been sent!"
            : "There was an issue with forwarding your message. Please try again."}
        </p>
      </motion.div>
    );
  }
};

export default Toast;
