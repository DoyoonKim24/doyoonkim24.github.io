
import listenMorePhoto from "../images/listenMore.png";
import figmaLogo from "../images/tools/figma.svg";
import reactLogo from "../images/tools/react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
    return (
        <div className="projects-section">
        <h2>Personal Projects</h2>
        <div className="projects-container">
          <div className="project">
            <div className="project-info">
              <h3>ListenMore</h3>
              <div className="tech-used-group">
                <div className="tech-button">
                  <img
                    className="tech-icon"
                    src={reactLogo}
                    height="24"
                    alt="react logo"
                  />
                  <h6 className="tech-button-text">React</h6>
                </div>
                <div className="tech-button">
                  <img
                    className="tech-icon"
                    src={figmaLogo}
                    height="24"
                    alt="figma logo"
                  />
                  <h6 className="tech-button-text">Figma</h6>
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                className="product-image"
                src={listenMorePhoto}
                alt="Photo of ListenMore App"
              />
            </div>
            <div className="arrow-container">
              <FontAwesomeIcon
                className="arrow"
                icon={faArrowRight}
                size="xl"
              />
            </div>
          </div>
          <div className="project">
            <div className="project-info">
              <h3>ListenMore</h3>
              <div className="tech-used-group">
                <div className="tech-button">
                  <h6>React</h6>
                </div>
                <div className="tech-button">
                  <h6>Figma</h6>
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                className="product-image"
                src={listenMorePhoto}
                alt="Photo of ListenMore App"
              />
            </div>
            <div className="arrow-container">
              <FontAwesomeIcon
                className="arrow"
                icon={faArrowRight}
                size="xl"
              />
            </div>
          </div>
        </div>
      </div>
    )
}