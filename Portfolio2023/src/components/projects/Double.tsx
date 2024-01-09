import { MouseEvent, useRef } from "react";
import { motion, easeIn } from "framer-motion";
interface Project {
  name: string;
  client: string;
  description: string;
  src: string;
  year: number;
  tech: string[];
}

type Props = {
  projects: Project[];
};

const Double = (props: Props) => {
  const firstImage = useRef<HTMLDivElement>(null);
  const secondImage = useRef<HTMLDivElement>(null);
  let xPercent = 0;
  let currentXPercent = 0;
  const speed = 0.15;
  let requestAnimationFrameId: number | null = null;
  const handleMouseMove = (e: MouseEvent) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;
    if (!requestAnimationFrameId) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    const deltaXPercent = xPercent - currentXPercent;
    currentXPercent = currentXPercent + deltaXPercent * speed;
    if (firstImage.current) {
      firstImage.current.style.width = `${66.66 - currentXPercent * 0.33}%`;
    }

    if (secondImage.current) {
      secondImage.current.style.width = `${33.33 + currentXPercent * 0.33}%`;
    }
    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      if (requestAnimationFrameId) {
        window.cancelAnimationFrame(requestAnimationFrameId);
      }
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeIn }}
      viewport={{ once: true }}
      className="h-full p-3 flex flex-col md:flex-row gap-12 "
    >
      <div
        onMouseMove={(e) => handleMouseMove(e)}
        ref={firstImage}
        className="w-full h-full  md:w-[66.66%] md:h-[45vw] mt-[10vh] "
      >
        <div className=" relative  ">
          <img
            className={`object-cover rounded-lg`}
            src={`src/assets/projectpics/${props.projects[0]?.src}`}
            alt="image"
          />
        </div>
        <div className=" body text-base p-2.5  ">
          <div className="w-full flex flex-col md:flex-row gap-3 items-center">
            e{" "}
            <p className="font-satoshi text-xl md:text-4xl">
              {props.projects[1]?.year}
            </p>
            <div className=" outline-4">
              <ul className="list-none flex flex-wrap gap-3 py-4">
                {props.projects[0].tech.map((tech) => (
                  <li>
                    <p className="font-satoshi text-xl md:text-4xl">{tech}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>{" "}
          </div>

          <h3 className="text-[1.2em] mb-2 mt-0 font-satoshi">
            {props.projects[0]?.name}
          </h3>
          <p className=" m-0 font-cabinet text-3xl">
            {props.projects[0]?.description}
          </p>
        </div>
      </div>

      <div
        onMouseMove={(e) => handleMouseMove(e)}
        ref={secondImage}
        className="w-full md:w-[33.33%] h-full md:h-[45vw] mt-[10vh] "
      >
        <div className=" relative">
          <img
            className={`object-cover rounded-lg`}
            src={`src/assets/projectpics/${props.projects[1]?.src}`}
            alt="image"
          />
        </div>
        <div className="body text-base p-2.5  ">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <p className="font-satoshi text-xl md:text-4xl">
              {props.projects[1]?.year}
            </p>
            <div className=" outline-4">
              <ul className="list-none flex  gap-3 py-4">
                {props.projects[1].tech.map((tech) => (
                  <li>
                    <p className="font-satoshi text-xl md:text-4xl">{tech}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>{" "}
          </div>
          <h3 className="text-[1.2em] mb-2 mt-0 text-5xl font-satoshi">
            {props.projects[1]?.name}
          </h3>
          <p className=" m-0 text-3xl font-cabinet">
            {props.projects[1]?.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Double;
