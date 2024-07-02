import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import doyoonLogo from "../images/doyoon-logo.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className='footer-container'>
                <img className='footer-logo'src={doyoonLogo} alt="Doyoon Face Logo" /> 
                <div className='right'>
                    <div className='footer-list'>
                        <a className='footer-font' href="https://www.linkedin.com/in/doyoonkim24/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /> LinkedIn </a>
                        <a className='footer-font' href="https://github.com/DoyoonKim24/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /> Github </a>
                        <a className='footer-font' href="mailto:kimdoyo424@gmail.com"> <FontAwesomeIcon icon={faEnvelope} /> Email</a>
                        <a className='footer-font' href="mailto:kimdoyo424@gmail.com"> <FontAwesomeIcon icon={faFile} /> Resume </a> 
                    </div>
                    <p>Designed with Figma and programmed in VS Code with React and Sass.</p>
                </div>
            </div>
        </footer>
    )
}