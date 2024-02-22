import { MailsIcon, PhoneIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import { motion, easeIn } from "framer-motion";

const ContactDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: easeIn }}
      viewport={{ once: true }}
      className="w-full  m-auto pt-12 pb-3 md:pt-0 md:pb-0 "
    >
      <div className="w-full flex flex-col items-center">
        <h2 className="font-satoshi text-5xl antialiased text-[#393632]">details</h2>
        <div className=" mt-6  font-cabinet text-3xl flex  justify-between gap-3 items-center">
          <MailsIcon color="#5c5955"/> <p className="text-[#5c5955]">cihanbatas@gmail.com</p>
        </div>

        <div className=" mt-6 font-cabinet text-3xl flex gap-3 justify-between items-center">
          <PhoneIcon color="#5c5955" /> <p className="text-[#5c5955]">+49 176 24734003</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h2 className="font-satoshi text-5xl antialiased pt-6 text-[#393632]">socials</h2>
        <div className=" mt-6 font-cabinet text-3xl flex   justify-between gap-3 items-center">
          <GithubIcon color="#5c5955" />{" "}
          <a
            className="link text-[#5c5955] link-underline link-underline-black cursor-pointer "
            href="https://github.com/cihanbatasul"
            target="_blank"
          >
            Github
          </a>
        </div>

        <div className=" mt-6 font-cabinet text-3xl flex gap-3 justify-between items-center">
          <LinkedinIcon color="#5c5955" />{" "}
          <a
            className="link text-[#5c5955] link-underline link-underline-black cursor-pointer "
            href="https://linkedin.com/in/cihan-batasul-693504260"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactDetails;
