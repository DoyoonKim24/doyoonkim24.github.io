import doyoonLogo from "./images/doyoon-logo.png";
import Projects from "./home-sections/Projects";
import Experience from "./home-sections/Experience";
import Skills from "./home-sections/Skills";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";


gsap.registerPlugin(Draggable);

function App() {
Draggable.create(".test", {
  bounds: ".about-flex",
  inertia: true
});
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

      <Projects />
      <Experience />
      <Skills />

      <div className="about-section">
        <h2> About Me </h2>
        <div className="about-flex">
          <div className="test" style={{width: '50px', height: '50px', backgroundColor: 'black'}}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
