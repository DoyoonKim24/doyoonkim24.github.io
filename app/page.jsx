'use client'

import Navbar from "./components/Navbar";
import Projects from "./home-sections/Projects";
import Experience from "./home-sections/Experience";
import Skills from "./home-sections/Skills";
import About from "./home-sections/About";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Image from "next/image";
import landingIllustration from "../public/images/landing-illustration.png";
import spinny from "../public/images/spinning.png";
import heroHello from "../public/images/hero-hello.png";

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
        <Image className="hero-header" src={heroHello} alt="Hello, I'm Doyoon!" width={800} style={{objectFit: 'contain'}}/>
        <div className="hero-images">
          <Image src={landingIllustration} alt="landing image" width={1000}/>
          <Image src={spinny} className="spinny" alt="software developer and designer spinning icon" width={150}/>
        </div>
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
