import doyoonLogo from "../../public/images/doyoon-logo.png";
import doyoonFaceLogo from "../../public/images/doyoon-face.png"
import Image from "next/image";
export default function Navbar() {
    return (
        <nav className="navbar">
        <a className='nav-face-name-logo' href="#home"> <Image src={doyoonLogo} alt="Doyoon Face Logo" width={0} height={0} style={{ width: 'auto', height: '100%' }}/> </a>
        <a className='nav-face-logo' href="#home"> <Image src={doyoonFaceLogo} alt="Doyoon Face Logo" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '100%' }}/> </a>
        <div className="nav-group">
          <a href="#projects">Projects</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
        </div>
      </nav>
    )
}