
import listenMorePhoto from "../images/listenMore.png";
import accentAcePhoto from "../images/accentace.png";
import figmaLogo from "../images/tools/figma-mono.svg";
import reactLogo from "../images/tools/react-mono.svg";
import pythonLogo from "../images/tools/python-mono.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  let projects = [{name: "ListenMore", tools: [{name: "React", icon: reactLogo}, {name: "Figma", icon: figmaLogo}], image:listenMorePhoto, link: "https://github.com/DoyoonKim24/ListenMore"},
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
                <img
                  className="tech-icon"
                  src={tool.icon}
                  height="24"
                  alt={tool.name}
                />
                <h6 className="tech-button-text">{tool.name}</h6>
              </div>
            ))}
            </div>
          </div>
          <div className="image-container">
            <img
              className="product-image"
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