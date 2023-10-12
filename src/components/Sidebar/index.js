// Importing required modules and components
import { Link,NavLink } from 'react-router-dom';
import "./index.scss"
import LogoS from "../../assets/images/D.png";
import LogoSubtitle from "../../assets/images/Dhiraj.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';

// Sidebar functional component
const Sidebar = ()=>(
  // Sidebar container
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt = "logo"/>
      <img className="sub-logo" src={LogoSubtitle} alt = "Dhiraj"/>
    </Link>

    {/* Navigation Links */}
    <nav>
      {/* Home Link */}
      <NavLink exact = "true" activeclassname = "active" to="/">
        <FontAwesomeIcon icon={ faHome } color='#4d4d4e'/>
      </NavLink>

      {/* About Link */}
      <NavLink exact = "true" activeclassname = "active" className="about-link" to="/about">
        <FontAwesomeIcon icon={ faUser } color='#4d4d4e'/>
      </NavLink>

      {/* Contact Link */}
      <NavLink exact = "true" activeclassname = "active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={ faEnvelope } color='#4d4d4e'/>
      </NavLink>
    </nav>

    {/* Social links */}
    <ul className='sidebar-ul'>
      {/* LinkedIn link */}
      <li>
        <a target='_blank' rel='norefferer' href='https://www.linkedin.com/in/dhiraj-chakma/'>
          <FontAwesomeIcon icon={ faLinkedin}  color='#4d4d4e' />
        </a>
      </li>

       {/* GitHub link */}
      <li>
        <a target='_blank' rel='norefferer' href='https://github.com/dhiraj-chakma'>
          <FontAwesomeIcon icon={ faGithub } color='#4d4d4e' />
        </a>
      </li>

      {/* Skype link */}
      <li>
        <a target='_blank' rel='norefferer' href='https://join.skype.com/invite/n6qMcDm1u05N'>
          <FontAwesomeIcon icon={ faSkype } color='#4d4d4e' />
        </a>
      </li>
    </ul>

  </div>
)

export default Sidebar
