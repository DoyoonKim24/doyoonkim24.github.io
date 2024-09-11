
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
  let projects = [{name: "Date Journal", tools: [{name: "React", icon: reactLogo}, {name: "Figma", icon: figmaLogo}], image:dateJournalPhoto, link: "https://github.com/DoyoonKim24/ListenMore"},
                  {name: "ListenMore", tools: [{name: "React", icon: reactLogo}, {name: "Figma", icon: figmaLogo}], image:listenMorePhoto, link: "https://github.com/DoyoonKim24/ListenMore"},
                  {name: "Accent Ace", tools: [{name: "Python", icon: pythonLogo}, {name: "Figma", icon: figmaLogo}], image:accentAcePhoto, link: "https://devpost.com/software/pronunciationgo"}];
  return (
    <div className="projects-section" id="projects" >
      <h2>Personal Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
        <a className="project" href={project.link} target="_blank" rel="noopener noreferrer">
          <div className="project-info">
            <h3>{project.name} </h3>
            <div className="tech-used-group">
            {project.tools.map(tool => (
              <div className="tech-button">
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
              className="product-image"
              style={{height: project.name === "Date Journal" ? 270 : 216 }}
              src={project.image}
              alt={project.name}
            />
          </div>
          <div className="arrow-container">
            <FontAwesomeIcon
              className="arrow"
              icon={faArrowRight}
              size="xl"
            />
          </div>
        </a>
        ))}
      </div>
    </div>
  )
}