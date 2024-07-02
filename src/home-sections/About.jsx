import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import doyoon from "../images/doyoon.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function About() {
  gsap.registerPlugin(Draggable);
  Draggable.create(".about-card", {
    bounds: ".about-container",
  });

  return (
    <div className="about-section" id="about">
      <h2> About Me </h2>
      <div className="about-container">
        <div className="pin1"></div>
        <div className="pin2"></div>
        <div className="pin3"></div>
        <div className="pin4"></div>
        <div
          className="about-card card"
        >
          <div className="pin1"></div>
          <div className="pin2"></div>
          <h5 className="about-card-title">About</h5>
          <div className="about-line"></div>
          <p>
            Hello and welcome to my website! I’m Doyoon, a software developer
            and designer.
            <br />
            <br />
            I have a passion for both programming and design, and I love
            bringing creative ideas to life through code.
            <br />
            <br />
            I am constantly on the hunt to learn new things and tackle new
            challenges. Whether it's developing a new app or designing a
            user-friendly interface, I'm all about making things that work well
            and look great.
            <br />
            <br />
            I’m always open to connect so please feel free to reach out! Let's
            create something awesome together!
          </p>
        </div>
        <div
          className="hobbies-card card"
        >
          <div className="pin1"></div>
          <div className="pin2"></div>
          <h5 className="about-card-title">Hobbies</h5>
          <div className="about-line"></div>
          <ol>
            <li>
              <p>Playing Trumpet</p>
            </li>
            <li>
              <p>Baking</p>
            </li>
            <li>
              <p>Crochet</p>
            </li>
            <li>
              <p>Raptors Basketball</p>
            </li>
          </ol>
        </div>
        <div className="school-card card">
          <div className="pin1"></div>
          <div className="pin2"></div>
          <h5 className="about-card-title">Education</h5>
          <div className="about-line"></div>
          <ul>
            <li>
              <p>University of Waterloo</p>
            </li>
            <li>
              <p>Bachelors of Computer Science</p>
            </li>
            <li>
              <p>Minor in Music and Digital Arts Communication</p>
            </li>
          </ul>
        </div>
        <div className="picture-card card">
          <div className="pin1"></div>
          <div className="pin2"></div>
          <h5 className="about-card-title">Me!</h5>
          <div className="about-line"></div>
          <img className="real-doyoon-image"
            src={doyoon}
            alt="Doyoon smiling in the mountains"
          />
        </div>
        <div className="socials-card card">
          <div className="pin1"></div>
          <div className="pin2"></div>
          <h5 className="about-card-title">Socials</h5>
          <div className="about-line"></div>
          <ul>
            <li><a href="https://www.linkedin.com/in/doyoonkim24/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /> LinkedIn </a> </li>
            <li> <a href="https://github.com/DoyoonKim24/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /> Github </a> </li>
            <li> <a href="mailto:kimdoyo424@gmail.com"> <FontAwesomeIcon icon={faEnvelope} /> Email</a> </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
