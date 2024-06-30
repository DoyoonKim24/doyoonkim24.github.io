import doyoonLogo from "./images/doyoon-logo.png";
import Projects from "./home-sections/Projects";
import Experience from "./home-sections/Experience";
import Skills from "./home-sections/Skills";
import About from "./home-sections/About";
import Footer from "./components/footer";
import { useEffect } from "react";




function App() {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <a href="#home"> <img src={doyoonLogo} alt="Doyoon Face Logo" height="32" /> </a>
        <div className="nav-group">
          <a href="#projects">Projects</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
        </div>
      </nav>
      <div className="hero-section" id="home">
        <h4>Doyoon Kim</h4>
        <h1 className="hero-header">
          Software Developer <br />
          and Designer
        </h1>
      </div>

      <Projects />
      <Experience />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
