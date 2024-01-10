import { forwardRef, useState } from "react";
import SectionHeader from "../SectionHeader";
import Form from "./Form";
import ContactDetails from "./ContactDetails";
import Toast from "../toast/Toast";
import { motion, easeIn } from "framer-motion";



const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  const [emailResponse, setEmailResponse] = useState<boolean | null>(null);
  return (
    <div
      className="relative w-full min-h-screen h-full  overflow-hidden antialiased p-48  flex flex-col  "
      ref={ref}
    >
      <SectionHeader text="contact" />
      <div className="w-full flex flex-col  md:flex-row mt-16 gap-3 md:gap-0">
        <div className="w-full flex flex-col items-center ">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.2, ease: easeIn }}
            viewport={{ once: true }}
            className="font-cabinet text-2xl w-full"
          >
            Feel free to send me an email. I will respond as soon as possible!{" "}
          </motion.p>
          <Form response={setEmailResponse} />
        </div>
        <ContactDetails />
      </div>
      <Toast show={emailResponse} />
    </div>
  );
});

export default Contact;
