import doyoonLogo from "./images/doyoon-logo.png";
import listenMorePhoto from "./images/listenMore.png";
import wonLogo from "./images/won-logo.png";
import mobialsLogo from "./images/mobials-logo.png";
import aiLogo from "./images/tools/ai.svg";
import psLogo from "./images/tools/ps.svg";
import cLogo from "./images/tools/c.svg";
import cssLogo from "./images/tools/css.svg";
import figmaLogo from "./images/tools/figma.svg";
import htmlLogo from "./images/tools/html.svg";
import jsLogo from "./images/tools/js.svg";
import sassLogo from "./images/tools/sass.svg";
import pythonLogo from "./images/tools/python.svg";
import reactLogo from "./images/tools/react.svg";
import aiMonoLogo from "./images/tools/ai-mono.svg";
import psMonoLogo from "./images/tools/ps-mono.svg";
import cMonoLogo from "./images/tools/c-mono.svg";
import cssMonoLogo from "./images/tools/css-mono.svg";
import figmaMonoLogo from "./images/tools/figma-mono.svg";
import htmlMonoLogo from "./images/tools/html-mono.svg";
import jsMonoLogo from "./images/tools/js-mono.svg";
import sassMonoLogo from "./images/tools/sass-mono.svg";
import pythonMonoLogo from "./images/tools/python-mono.svg";
import reactMonoLogo from "./images/tools/react-mono.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function App() {
  let tools = [
    [
      {
        name: "JavaScript",
        svg: jsLogo,
        monoSvg: jsMonoLogo,
        primary: "#f7e017",
      },
      {
        name: "Python",
        svg: pythonLogo,
        monoSvg: pythonMonoLogo,
        primary: "#ffd040",
      },
      { name: "C", svg: cLogo, monoSvg: cMonoLogo, primary: "#659ad2" },
    ],
    [
      {
        name: "React",
        svg: reactLogo,
        monoSvg: reactMonoLogo,
        primary: "#61dafb",
      },
      {
        name: "HTML",
        svg: htmlLogo,
        monoSvg: htmlMonoLogo,
        primary: "#ef652a",
      },
      { name: "CSS", svg: cssLogo, monoSvg: cssMonoLogo, primary: "#1c88c7" },
      {
        name: "SASS",
        svg: sassLogo,
        monoSvg: sassMonoLogo,
        primary: "#CD6799",
      },
    ],
    [
      {
        name: "Figma",
        svg: figmaLogo,
        monoSvg: figmaMonoLogo,
        primary: "#0acf83",
      },
      {
        name: "Photoshop",
        svg: psLogo,
        monoSvg: psMonoLogo,
        primary: "#31A8FF",
      },
      {
        name: "Illustrator",
        svg: aiLogo,
        monoSvg: aiMonoLogo,
        primary: "#ff9a00",
      },
    ],
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <img src={doyoonLogo} alt="Doyoon Face Logo" height="32" />
        <div className="nav-group">
          <a>Projects</a>
          <a>Work</a>
          <a>Skills</a>
          <a>About</a>
        </div>
      </nav>
      <div className="hero-section">
        <h4>Doyoon Kim</h4>
        <h1 className="hero-header">
          Software Developer <br />
          and Designer
        </h1>
      </div>

      <div className="projects-section">
        <h2>Personal Projects</h2>
        <div className="projects-flex">
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

      <div className="experience-section">
        <h2>Work Experience</h2>
        <div className="experience-grid">
          <div className="exp exp-1">
            <img
              className="company-logo"
              src={wonLogo}
              alt="Logo of WonsultingAI"
            ></img>
            <h5>Software Developer intern @ WonsultingAI</h5>
            <p className="p-small">Jan 2022 - Jul 2023</p>
            <div className="line"></div>
            <p>
              Collaborated with a team of 5 to work through all stages of
              product development to develop an AI powered resume building tool
              called ResumAI that launched in mid-October and currently has over
              300 000 users.
            </p>
          </div>
          <div className="exp exp-2">
            <img
              className="company-logo"
              src={mobialsLogo}
              alt="Logo of WonsultingAI"
            ></img>
            <h5>
              Software Developer intern <br /> @ Mobials Inc.
            </h5>
            <p className="p-small">Jul 2022 - Sep 2022</p>
            <div className="line"></div>
            <p>
              Created dozens of end-to-end and unit tests using Cypress and Vue
              Test Utils respectively to reach 100% test coverage on two of the
              largest repos for AutoVerify.
            </p>
          </div>
          <div className="exp exp-3">
            <img
              className="company-logo"
              src={mobialsLogo}
              alt="Logo of WonsultingAI"
            ></img>
            <h5>
              Programmer Co-op Student <br /> @ Mobials Inc.
            </h5>
            <p className="p-small">Feb 2022 - Jun 2022</p>
            <div className="line"></div>
            <p>
              For my high school co-op placement, I worked at Mobials to
              redeveloped the corporate website using Webflow, program a
              customer map application, and develop a OKR tracker.
            </p>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-flex">
          {tools.map((row, index) => (
            <div className="skills-row">
              {row.map((tool, index) => (
                <div className="tech-box" key={index}>
                  <div className="tech-icon-container">
                    <img className="tech-icon" src={tool.svg} height="48" alt={tool.name} />
                    <img className="mono-tech-icon" src={tool.monoSvg} height="48" alt={tool.name} />
                  </div>
                  <div className="name-a-underline">
                    <div
                      className="underline"
                      style={{ backgroundColor: tool.primary }}
                    ></div>
                    <h4>{tool.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>


      <div className="about-section">
        <h2> About Me </h2>
      </div>
    </div>
  );
}

export default App;
