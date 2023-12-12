import ContactButton from "src/components/navbar/ContactButton";

interface Props {
  scrollToRef: {
    aboutRef: React.RefObject<HTMLDivElement>;
    servicesRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLElement>;
  };
}

const Navigation: React.FC<Props> = ({ scrollToRef }: Props) => {
  const links = [
    { label: "about", ref: scrollToRef.aboutRef },
    { label: "services", ref: scrollToRef.servicesRef },
    { label: "projects", ref: scrollToRef.projectsRef },
  ];

  const handleClick = (ref: React.MutableRefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 bg-white  z-50 flex justify-between items-center p-6">
      <div className="font-satoshi font-extrabold text-3xl ">cihan</div>
      <div>
        <ul className="flex flex-row items-center gap-3 font-cabinet font-light ">
          {links.map((link) => (
            <li key={link.label}>
              <p
                className="link link-underline link-underline-black cursor-pointer text-xl"
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
    </div>
  );
};

export default Navigation;
