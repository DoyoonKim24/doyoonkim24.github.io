import { useInView } from 'react-intersection-observer';
import listenMorePhoto from "../../public/images/listenMore.png";
import accentAcePhoto from "../../public/images/accentace.png";
import dateJournalPhoto from "../../public/images/date-journal.png";
import figmaLogo from "../../public/images/tools/figma-mono.svg";
import reactLogo from "../../public/images/tools/react-mono.svg";
import pythonLogo from "../../public/images/tools/python-mono.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Projects() {
  let projects = [
    { name: "Date Journal", tools: [{ name: "React Native", icon: reactLogo }, { name: "Figma", icon: figmaLogo }], image: dateJournalPhoto, link: "" },
    { name: "ListenMore", tools: [{ name: "React", icon: reactLogo }, { name: "Figma", icon: figmaLogo }], image: listenMorePhoto, link: "https://github.com/DoyoonKim24/ListenMore" },
    { name: "Accent Ace", tools: [{ name: "Python", icon: pythonLogo }, { name: "Figma", icon: figmaLogo }], image: accentAcePhoto, link: "https://devpost.com/software/pronunciationgo" }
  ];

  return (
    <div className="projects-section" id="projects">
      <h2>Personal Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const handleClick = (event) => {
    if (!project.link) {
      event.preventDefault();
    }
  };

  return (
    <a
      ref={ref}
      className={`project ${inView ? 'fade-in' : 'fade-out'}`}
      href={project.link}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {project.name === "Date Journal" ? <h5 className='coming-soon-mini'>Coming Soon!</h5> : null }
      <div className="project-info">
        <h3>{project.name}</h3>
        <div className="tech-used-group">
          {project.tools.map((tool, toolIndex) => (
            <div className="tech-button" key={toolIndex}>
              <Image
                className="project-tech-icon"
                src={tool.icon}
                alt={tool.name}
                width={23}
              />
              <h6 className="tech-button-text">{tool.name}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className="image-container">
        <Image
          className={`product-image ${project.name === "Date Journal" ? "big-product-image" : null}`}
          src={project.image}
          alt={project.name}
        />
      </div>
      <div className="arrow-container">
        <FontAwesomeIcon className="arrow" icon={faArrowRight} size="xl" />
        {project.name === "Date Journal" ? <h5 className='coming-soon'>Coming Soon!</h5> : null }
      </div>
    </a>
  );
}
