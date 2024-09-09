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
import Image from "next/image";

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

      let toolsFull = [
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
      ];

    return (
    <div className="skills-section" id="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-row evenly">
            {tools[0].map((tool, index) => (
              <div className="tech-box" key={index}>
                <div className="tech-icon-container">
                  <Image className="tech-icon" src={tool.svg} width={48} alt={tool.name} />
                  <Image className="mono-tech-icon" src={tool.monoSvg} width={48} alt={tool.name} />
                </div>
                <div className="name-a-underline">
                  <div
                    className="underline"
                    style={{ backgroundColor: tool.primary}}
                  ></div>
                  <h4 style={{ position: 'relative', zIndex: 1 }} >{tool.name}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-row around">
            {tools[1].map((tool, index) => (
              <div className="tech-box" key={index}>
                <div className="tech-icon-container">
                  <Image className="tech-icon" src={tool.svg} width={48} alt={tool.name} />
                  <Image className="mono-tech-icon" src={tool.monoSvg} width={48} alt={tool.name} />
                </div>
                <div className="name-a-underline">
                  <div
                    className="underline"
                    style={{ backgroundColor: tool.primary}}
                  ></div>
                  <h4 style={{ position: 'relative', zIndex: 1 }} >{tool.name}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-row evenly">
            {tools[2].map((tool, index) => (
              <div className="tech-box" key={index}>
                <div className="tech-icon-container">
                  <Image className="tech-icon" src={tool.svg} width={48} alt={tool.name} />
                  <Image className="mono-tech-icon" src={tool.monoSvg} width={48} alt={tool.name} />
                </div>
                <div className="name-a-underline">
                  <div
                    className="underline"
                    style={{ backgroundColor: tool.primary}}
                  ></div>
                  <h4 style={{ position: 'relative', zIndex: 1 }} >{tool.name}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-full">
          {toolsFull.map((tool, index) => (
              <div className="tech-box" key={index}>
                <div className="tech-icon-container">
                  <Image className="tech-icon" src={tool.svg} width={48} alt={tool.name} />
                  <Image className="mono-tech-icon" src={tool.monoSvg} width={48} alt={tool.name} />
                </div>
                <div className="name-a-underline">
                  <div
                    className="underline"
                    style={{ backgroundColor: tool.primary}}
                  ></div>
                  <h4 style={{ position: 'relative', zIndex: 1 }} >{tool.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
)}