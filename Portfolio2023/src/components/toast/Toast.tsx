import { motion, easeInOut } from "framer-motion";
type Props = {
  show: boolean | null;
};

const Toast = (props: Props) => {
  if (props.show) {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: easeInOut }}
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
