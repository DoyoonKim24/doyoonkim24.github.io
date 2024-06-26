import doyoonLogo from './images/doyoon-logo.png';
import listenMorePhoto from './images/listenMore.png';
import wonLogo from './images/won-logo.png';
import mobialsLogo from './images/mobials-logo.png';
import aiLogo from './images/ai.svg';
import psLogo from './images/ps.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faReact, faHtml5, faCss3Alt, faSass, faJs, faPython, faFigma, faPs} from '@fortawesome/free-brands-svg-icons'
function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={doyoonLogo} alt="Doyoon Face Logo" height="32"/>
        <div className="nav-group">
          <a>Projects</a>
          <a>Work</a>
          <a>Skills</a>
          <a>About</a>
        </div>
      </nav>
      <div className='hero-section'>
        <h4>Doyoon Kim</h4>
        <h1 className='hero-header'>Software Developer <br/>and Designer</h1>
      </div>

      <div className='projects-section'>
        <h2>Personal Projects</h2>
        <div className='projects-flex'>
          <div className='project'>
            <div className='project-info'>
              <h3>ListenMore</h3>
              <div className='tech-used-group'>
                <div className='tech-button'>
                  <FontAwesomeIcon icon={faReact} />
                  <h6 className='tech-button-text'>React</h6>
                </div>
                <div className='tech-button'>
                  <FontAwesomeIcon icon={faFigma} />
                  <h6 className='tech-button-text'>Figma</h6>
                </div>
              </div>
            </div>
            <div className='image-container'>
              <img className='product-image' src={listenMorePhoto} alt="Photo of ListenMore App"/>
            </div>
            <div className='arrow-container'>
              <FontAwesomeIcon className='arrow' icon={faArrowRight} size='xl'/>
            </div>
          </div>
          <div className='project'>
            <div className='project-info'>
              <h3>ListenMore</h3>
              <div className='tech-used-group'>
                <div className='tech-button'>
                  <h6>React</h6>
                </div>
                <div className='tech-button'>
                  <h6>Figma</h6>
                </div>
              </div>
            </div>
            <div className='image-container'>
              <img className='product-image' src={listenMorePhoto} alt="Photo of ListenMore App"/>
            </div>
            <div className='arrow-container'>
              <FontAwesomeIcon className='arrow' icon={faArrowRight} size='xl'/>
            </div>
          </div>
        </div>
      </div>


      <div className='experience-section'>
        <h2>Work Experience</h2>
        <div className='experience-grid'>
          <div className='exp exp-1'>
            <img className='company-logo' src={wonLogo} alt='Logo of WonsultingAI'></img>
            <h5>Software Developer intern @ WonsultingAI</h5>
            <p className='p-small'>Jan 2022 - Jul 2023</p>
            <div className='line'></div>
            <p>Collaborated with a team of 5 to work through all stages of product development to develop an AI powered resume building tool called ResumAI that launched in mid-October and currently has over 300 000 users.</p>
          </div>
          <div className='exp exp-2'>
            <img className='company-logo' src={mobialsLogo} alt='Logo of WonsultingAI'></img>
            <h5>Software Developer intern <br/> @ Mobials Inc.</h5>
            <p className='p-small'>Jul 2022 - Sep 2022</p>
            <div className='line'></div>
            <p>Created dozens of end-to-end and unit tests using Cypress and Vue Test Utils respectively to reach 100% test coverage on two of the largest repos for AutoVerify.</p>
          </div>
          <div className='exp exp-3'>
            <img className='company-logo' src={mobialsLogo} alt='Logo of WonsultingAI'></img>
            <h5>Programmer Co-op Student <br/> @ Mobials Inc.</h5>
            <p className='p-small'>Feb 2022 - Jun 2022</p>
            <div className='line'></div>
            <p>For my high school co-op placement, I worked at Mobials to redeveloped the corporate website using Webflow, program a customer map application, and develop a OKR tracker.</p>
          </div>
        </div>
      </div>



      <div className='skills-section'>
        <h2>Skills</h2>
        <div className='skills-flex'>
        <div className='tech-box'>
            <FontAwesomeIcon icon={faJs} size='3x' />
            <h4> JavaScript </h4>
          </div>
          <div className='tech-box'>
            <FontAwesomeIcon icon={faPython} size='3x' />
            <h4> Python </h4>
          </div>
          <div className='tech-box'>
            <h4> C </h4>
          </div>
          <div className='tech-box'>
            <FontAwesomeIcon icon={faReact} size='3x' />
            <h4> React </h4>
          </div>
          <div className='tech-box'>
            <FontAwesomeIcon icon={faHtml5} size='3x' />
            <h4> HTML </h4>
          </div>
          <div className='tech-box'>
            <FontAwesomeIcon icon={faCss3Alt} size='3x' />
            <h4> CSS </h4>
          </div>
          <div className='tech-box'>
            <FontAwesomeIcon icon={faSass} size='3x' />
            <h4> SASS </h4>
          </div>
          <div className='tech-box'>
            <FontAwesomeIcon icon={faFigma} size='3x' />
            <h4> Figma </h4>
          </div>
          <div className='tech-box'>
            <img src={psLogo}></img>
            <h4> Photoshop </h4>
          </div>
          <div className='tech-box'>
            <img src={aiLogo}></img>
            <h4> Illustrator </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
