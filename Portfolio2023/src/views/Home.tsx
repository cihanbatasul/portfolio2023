import { useRef, useState, useEffect } from "react";
import Contact from "src/components/contact/Contact";
import Services from "src/components/services/Services";
import About from "src/components/about/About";
import Hero from "src/components/hero/Hero";
import Projects from "src/components/projects/Projects";
import Navigation from "src/components/navbar/Navigation";
import Footer from "src/components/footer/Footer";
import Scroller from "src/components/utils/Scroller";
const Home = () => {
  const [currentSection, setCurrentSection] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 640);
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
  useEffect(() => {
    window.addEventListener("resize", setMobile);
    return () => {
      window.removeEventListener("resize", setMobile);
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
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Navigation scrollToRef={scrollToRef} isMobile={isMobile} />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      {!isMobile ? <Services ref={servicesRef} /> : null}
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Scroller scrollToRef={scrollToRef} currentSection={currentSection} />
      <Footer />
    </div>
  );
};

export default Home;
