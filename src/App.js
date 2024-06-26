import doyoonLogo from './images/doyoon-logo.png';
import listenMorePhoto from './images/listenMore.png';
import holdingSign from './images/holding-sign.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faReact, faFigma} from '@fortawesome/free-brands-svg-icons'
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
    </div>
  );
}

export default App;
