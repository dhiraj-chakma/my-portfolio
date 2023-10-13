// Importing required styles and assets
import "./index.scss";
import LogoS from "../../../assets/images/D.png";


// Functional component for Logo
const Logo = () => {

  return (
    // Logo container div
    <div className="logo-container">

      {/*Static image logo*/}
      <img  className="solid-logo" src={LogoS} alt="d"/>

      {/*SVG for additional logo details*/}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 250 250"
        xmlns="http://www.w3.org/2000/svg"
      >

      <g fill="none" stroke="black" stroke-width="5" className="svg-container">
        {/* Outer Edge of the logo */}
        <path  d="M25,25 v100 h50 q25,0 35,-25 v-50 q-10,-25 -35,-25 z" />

        {/* Inner Edge of the logo */}
        <path d="M35,35 v80 h40 q20,0 25,-20 v-40 q-5,-20 -25,-20 z" />
      </g>
    </svg>
    </div>
  )
}

// Exporting the Logo component for use in other parts of the application
export default Logo;
