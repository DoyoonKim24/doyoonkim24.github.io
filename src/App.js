import Navbar from "./components/Navbar";
import Projects from "./home-sections/Projects";
import Experience from "./home-sections/Experience";
import Skills from "./home-sections/Skills";
import About from "./home-sections/About";
import Footer from "./components/Footer";
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
      <Navbar />
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
