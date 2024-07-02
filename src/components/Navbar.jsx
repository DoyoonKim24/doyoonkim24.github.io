import doyoonLogo from "../images/doyoon-logo.png";
import doyoonFaceLogo from "../images/doyoon-face.png"
export default function Navbar() {
    return (
        <nav className="navbar">
        <a className='nav-face-name-logo' href="#home"> <img src={doyoonLogo} alt="Doyoon Face Logo" height="100%"/> </a>
        <a className='nav-face-logo' href="#home"> <img src={doyoonFaceLogo} alt="Doyoon Face Logo" height="100%" /> </a>
        <div className="nav-group">
          <a href="#projects">Projects</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
        </div>
      </nav>
    )
}