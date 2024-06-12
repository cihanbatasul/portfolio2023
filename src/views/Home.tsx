import { useRef, useState, useEffect } from "react";
import Contact from "src/components/contact/Contact";
import Services from "src/components/services/Services";
import About from "src/components/about/About";
import Projects from "src/components/projects/Projects";
import Navigation from "src/components/navbar/Navigation";
import Footer from "src/components/footer/Footer";
import Scroller from "src/components/utils/Scroller";
const Home = () => {
  const [currentSection, setCurrentSection] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 640);
  const [isLimit, setIsLimit] = useState<boolean>(
    window.innerWidth <= 1536 && window.innerWidth > 640,
  );
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const scrollToRef = {
    heroRef,
    aboutRef,
    servicesRef,
    projectsRef,
    contactRef,
  };
  const setMobile = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  const setLimit = () => {
    setIsLimit(window.innerWidth <= 1536 && window.innerWidth > 640);
  };
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    window.addEventListener("resize", setMobile);
    window.addEventListener("resize", setLimit);
    return () => {
      window.removeEventListener("resize", setMobile);
      window.removeEventListener("resize", setLimit);
    };
  }, []);
  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);
  const handleScroll = () => {
    const offsetTolerance = 500;
    const scrollTop = window.scrollY;
    const sections = [
      { ref: heroRef, name: "Hero" },
      { ref: aboutRef, name: "About" },
      { ref: servicesRef, name: "Services" },
      { ref: projectsRef, name: "Projects" },
      { ref: contactRef, name: "Contact" },
    ];

    for (const section of sections) {
      const { ref, name } = section;
      if (ref.current) {
        const offset = ref.current.offsetTop;
        if (
          scrollTop >= offset - offsetTolerance &&
          scrollTop < offset + offsetTolerance
        ) {
          setCurrentSection(name);
          return;
        }
      }
    }

    setCurrentSection("");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Navigation scrollToRef={scrollToRef} isMobile={isMobile} />
      <About ref={aboutRef} scrollToContact={scrollToContact} />
      <Services ref={servicesRef} isMobile={isMobile} />
      <Projects ref={projectsRef} isMobile={isMobile} isLimit={isLimit} />
      <Contact ref={contactRef} />
      <Scroller
        isMobile={isMobile}
        scrollToRef={scrollToRef}
        currentSection={currentSection}
      />
      <Footer />
    </div>
  );
};

export default Home;
