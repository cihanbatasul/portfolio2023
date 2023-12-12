import { MailsIcon, PhoneIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import { motion, easeIn } from "framer-motion";
type Props = {};

const ContactDetails = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: easeIn }}
      viewport={{ once: true }}
      className="w-full  m-auto "
    >
      <div className="w-full flex flex-col items-center">
        <h2 className="font-satoshi text-5xl antialiased">details</h2>
        <div className=" mt-6 font-cabinet text-3xl flex  justify-between gap-3 items-center">
          <MailsIcon /> <p>cihanbatas@gmail.com</p>
        </div>

        <div className=" mt-6 font-cabinet text-3xl flex gap-3 justify-between items-center">
          <PhoneIcon /> <p>+49 176 24734003</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h2 className="font-satoshi text-5xl antialiased pt-6 ">socials</h2>
        <div className=" mt-6 font-cabinet text-3xl flex   justify-between gap-3 items-center">
          <GithubIcon /> <p>Github</p>
        </div>

        <div className=" mt-6 font-cabinet text-3xl flex gap-3 justify-between items-center">
          <LinkedinIcon /> <p>LinkedIn</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactDetails;
