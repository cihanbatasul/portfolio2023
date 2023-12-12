import React, { useRef, useState, useEffect } from "react";
import Contact from "src/components/contact/Contact";
import Services from "src/components/services/Services";
import About from "src/components/about/About";
import Hero from "src/components/hero/Hero";
import Projects from "src/components/projects/Projects";
import Navigation from "src/components/navbar/Navigation";
import Footer from "src/components/footer/Footer";
import Scroller from "src/components/utils/Scroller";

const Home = () => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
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

    setCurrentSection(null);
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
      <Navigation scrollToRef={scrollToRef} />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Scroller currentSection={currentSection} />
      <Footer currentSection={currentSection} />
    </div>
  );
};

export default Home;
