import React from "react";
import Input from "./Input";
import Button from "./Button";
import { motion, easeIn } from "framer-motion";
type Props = {};

const Form = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: easeIn }}
      viewport={{ once: true }}
      className="w-full m-auto flex flex-col gap-6"
    >
      <div className="flex w-full gap-3 ">
        <Input type="text" text="Name" />
        <Input type="email" text="Email" />
      </div>
      <Input type="text" text="Message" msg={true} />
      <Button />
    </motion.div>
  );
};

export default Form;
