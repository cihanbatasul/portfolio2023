import { motion } from "framer-motion";
type Props = {
  text: string;
};
const ContactButton = (props: Props) => {
  return (
    <motion.div className="border border-darkGreen border-e-4 border-b-4 py-1 px-1 cursor-pointer hover:border-b-2 hover:border-e-2 hover:duration-100 ease-in-out text-xl ">
      {props.text}
    </motion.div>
  );
};

export default ContactButton;
