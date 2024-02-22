import ContactButton from "src/components/navbar/ContactButton";
import MenuButton from "./MenuButton";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import { useState } from "react";
import logo from "/120.svg";

interface NavProps {
  scrollToRef: {
    aboutRef: React.RefObject<HTMLDivElement>;
    servicesRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLElement>;
  };
}

interface NavWrapperProps extends NavProps {
  isMobile: boolean;
}

const variants = {
  open: {
    width: 200,
    height: 300,
  },
  closed: {
    width: 200,
    height: 40,
  },
};
const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
  },
  enter: (index: number) => ({
    opacity: 1,
    rotateX: 0,
    transition: { delay: 0.5 + index * 0.1 },
  }),
  exit: {
    opacity: 0,
  },
};

type logoProps ={
  className: string 
}
const NavLogo = ({className}: logoProps) => {

  return (
    <div className={className}>

    </div>
  )
}

const NavigationMobile = ({ scrollToRef }: NavProps) => {
  const links = [
    { label: "about", ref: scrollToRef.aboutRef },
    { label: "services", ref: scrollToRef.servicesRef },
    { label: "projects", ref: scrollToRef.projectsRef },
  ];

  const handleClick = (ref: React.MutableRefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className="sticky z-50 top-0 flex justify-between  bg-white p-6 ">
      <NavLogo className="mobileNavLogo"/>
      <motion.div
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        transition={{ duration: 0.6, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-2 right-2 w-[280px] h-[200px] bg-[#514F46] rounded-md flex items-center justify-center "
      >
        <AnimatePresence>
          {isActive && (
            <motion.div className="h-full pt-20 ">
              <motion.ul className="flex flex-col items-center gap-3 font-cabinet font-light text-white">
                {links.map((link, index) => (
                  <motion.li
                    variants={perspective}
                    animate="enter"
                    exit="exit"
                    custom={index}
                    initial="initial"
                    key={link.label}
                  >
                    <p
                      className=" cursor-pointer text-2xl"
                      onClick={() => handleClick(link.ref)}
                    >
                      {link.label}
                    </p>
                  </motion.li>
                ))}
                <motion.li
                  variants={perspective}
                  animate="enter"
                  exit="exit"
                  custom={3}
                  initial="initial"
                  onClick={() => handleClick(scrollToRef.contactRef)}
                >
                  <p className="cursor-pointer text-2xl">contact me</p>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <MenuButton isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

const NavigationFull = ({ scrollToRef }: NavProps) => {
  const links = [
    { label: "about", ref: scrollToRef.aboutRef },
    { label: "services", ref: scrollToRef.servicesRef },
    { label: "projects", ref: scrollToRef.projectsRef },
  ];

  const handleClick = (ref: React.MutableRefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div initial={{ opacity: 0}} animate={{opacity: 1 }} transition={{duration: 1.5, ease: easeIn, delay: 1.2}} className="sticky top-0 bg-white  z-50 flex justify-between items-center p-6">
      <NavLogo className="navLogo"/>
      <div>
        <ul className="flex flex-row items-center gap-3 font-cabinet font-thin ">
          {links.map((link) => (
            <li key={link.label}>
              <p
                className="link link-underline link-underline-black cursor-pointer text-xl text-[#5c5955]"
                onClick={() => handleClick(link.ref)}
              >
                {link.label}
              </p>
            </li>
          ))}
          <li onClick={() => handleClick(scrollToRef.contactRef)}>
            <ContactButton text="contact me" />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

const Navigation = ({ isMobile, scrollToRef }: NavWrapperProps) => {
  return isMobile ? (
    <NavigationMobile scrollToRef={scrollToRef} />
  ) : (
    <NavigationFull scrollToRef={scrollToRef} />
  );
};
export default Navigation;
