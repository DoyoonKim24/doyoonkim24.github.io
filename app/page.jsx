'use client'

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Projects from "./home-sections/Projects";
import Experience from "./home-sections/Experience";
import Skills from "./home-sections/Skills";
import About from "./home-sections/About";
import Footer from "./components/Footer";
import Image from "next/image";
import landingIllustration from "../public/images/landing-illustration.png";
import spinny from "../public/images/spinning.png";
import heroHello from "../public/images/hero-hello.png";
import { useInView } from 'react-intersection-observer';

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
  },[]);


  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });


  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });


  return (
    <div className="App">
      <Navbar />
      <div className="hero-section" id="home">
        <h1>Hello, I'm Doyoon!</h1>
        <div
          className={`hero-images ${inView2 ? 'fade-in' : 'fade-out'}`}
          style={{ transition: '0.5s', transitionDelay: '0.1s' }}
          ref={ref2}
        >
          <Image
            className="hero-drawing"
            src={landingIllustration}
            alt="landing image"
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
            priority={true}
          />
          <Image
            className="spinny"
            src={spinny}
            alt="software developer and designer spinning icon"
          />
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
