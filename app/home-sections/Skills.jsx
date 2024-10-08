import aiLogo from "../../public/images/tools/ai.svg";
import psLogo from "../../public/images/tools/ps.svg";
import cLogo from "../../public/images/tools/c.svg";
import cssLogo from "../../public/images/tools/css.svg";
import figmaLogo from "../../public/images/tools/figma.svg";
import htmlLogo from "../../public/images/tools/html.svg";
import jsLogo from "../../public/images/tools/js.svg";
import sassLogo from "../../public/images/tools/sass.svg";
import pythonLogo from "../../public/images/tools/python.svg";
import reactLogo from "../../public/images/tools/react.svg";
import aiMonoLogo from "../../public/images/tools/ai-mono.svg";
import psMonoLogo from "../../public/images/tools/ps-mono.svg";
import cMonoLogo from "../../public/images/tools/c-mono.svg";
import cssMonoLogo from "../../public/images/tools/css-mono.svg";
import figmaMonoLogo from "../../public/images/tools/figma-mono.svg";
import htmlMonoLogo from "../../public/images/tools/html-mono.svg";
import jsMonoLogo from "../../public/images/tools/js-mono.svg";
import sassMonoLogo from "../../public/images/tools/sass-mono.svg";
import pythonMonoLogo from "../../public/images/tools/python-mono.svg";
import reactMonoLogo from "../../public/images/tools/react-mono.svg";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

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

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
  <div className="skills-section" id="skills">
    <h2>Skills</h2>
    <div className="skills-container">
      <div className={`skills-row evenly ${inView1 ? 'fade-in' : 'fade-out'}`} ref={ref1}>
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
      <div className={`skills-row around ${inView2 ? 'fade-in' : 'fade-out'}`} ref={ref2}>
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
      <div className={`skills-row evenly ${inView3 ? 'fade-in' : 'fade-out'}`} ref={ref3}>
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