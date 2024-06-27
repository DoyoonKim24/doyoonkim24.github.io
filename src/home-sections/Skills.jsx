import aiLogo from "../images/tools/ai.svg";
import psLogo from "../images/tools/ps.svg";
import cLogo from "../images/tools/c.svg";
import cssLogo from "../images/tools/css.svg";
import figmaLogo from "../images/tools/figma.svg";
import htmlLogo from "../images/tools/html.svg";
import jsLogo from "../images/tools/js.svg";
import sassLogo from "../images/tools/sass.svg";
import pythonLogo from "../images/tools/python.svg";
import reactLogo from "../images/tools/react.svg";
import aiMonoLogo from "../images/tools/ai-mono.svg";
import psMonoLogo from "../images/tools/ps-mono.svg";
import cMonoLogo from "../images/tools/c-mono.svg";
import cssMonoLogo from "../images/tools/css-mono.svg";
import figmaMonoLogo from "../images/tools/figma-mono.svg";
import htmlMonoLogo from "../images/tools/html-mono.svg";
import jsMonoLogo from "../images/tools/js-mono.svg";
import sassMonoLogo from "../images/tools/sass-mono.svg";
import pythonMonoLogo from "../images/tools/python-mono.svg";
import reactMonoLogo from "../images/tools/react-mono.svg";

export default function Skills() {
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
    <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-container">
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
)}