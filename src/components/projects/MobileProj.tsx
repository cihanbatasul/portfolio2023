interface Project {
  name: string;
  client: string;
  description: string;
  src: string;
  year: number;
  tech: string[];
  url: string
}

type Props = {
  projects: Project[];
};

const MobileProj = (props: Props) => {
  return (
    <div className="h-full p-3 flex flex-col md:flex-row gap-12">
      {props.projects.map((project, index) => (
        <div
          className="w-full h-full md:w-[66.66%] md:h-[45vw] mt-[10vh]"
          key={index}
        >
          <div className="relative">
            <a href={props.projects[index].url} target="_blank"><img
            
            className={`object-cover rounded-lg`}
            src={`/projectpics/${project.src}`}
            alt="image"
          /></a>
          </div>
          <div className="body text-base p-2.5">
            <div className="w-full flex flex-col md:flex-row gap-3 items-center">
              <p className="font-satoshi text-xl md:text-4xl">{project.year}</p>
              <div className="outline-4">
                <ul className="list-none flex flex-wrap gap-3 py-4">
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex}>
                      <p className="font-satoshi text-xl md:text-4xl">{tech}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="text-[1.2em] mb-2 mt-0 font-satoshi">
              {project.name}
            </h3>
            <p className="m-0 font-cabinet text-3xl">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MobileProj;
