import React, { SetStateAction, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { motion, easeIn } from "framer-motion";

export interface email {
  senderEmail: string;
  senderName: string;
  message: string;
}

type responseProps = {
  response: React.Dispatch<SetStateAction<boolean | null>>;
};
const Form = (props: responseProps) => {
  const [data, setData] = useState<email>({
    senderEmail: "",
    senderName: "",
    message: "",
  });

  const sendEmail = async () => {
    const url = "http://cihanbatasul.com/email/";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        props.response(true);
      } else {
        props.response(false);
      }
    } catch (error) {
      props.response(false);
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: easeIn }}
      viewport={{ once: true }}
      className="w-full m-auto flex flex-col gap-6 "
    >
      <div className="flex  w-full gap-3 ">
        <Input onChange={setData} type="text" text="Name" />
        <Input onChange={setData} type="email" text="Email" />
      </div>
      <Input onChange={setData} type="text" text="Message" msg={true} />
      <div className="w-full flex ">
        <Button onClick={sendEmail} />
      </div>
    </motion.div>
  );
};

export default Form;
