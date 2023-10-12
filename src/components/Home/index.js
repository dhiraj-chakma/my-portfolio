// Importing required modules and components
import LogoTitle from "../../assets/images/D.png";
import { Link } from 'react-router-dom';
import "./index.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo"
import Loader from "react-loaders"

const Home = () => {
  // State for controlling the letter animation class
  const [letterClass, setLetterClass] = useState("text-animate");

  // Predefined arrays for name and job title animations
  const nameArray = ["h", "i", "r", "a", "j"];
  const jobArray = ["w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r", "."];

  // Effect hook to set the animation class after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    // Cleanup function to clear the timeout when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/* Introductory text and dynamic name using AnimatedLetters component */}
            <span className={letterClass} >H</span>
            <span className={`${letterClass} _12`} >i,</span>
            <br/>
            <span className={`${letterClass} _13`} >I</span>
            <span className={`${letterClass} _14`} >'m</span>
            <img src={LogoTitle} alt="developer" style={{ height: '50px' }}/>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
            <br/>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20}/>
          </h1>
          <h2>Frontend Developer / Javascript / React</h2>

          {/* Navigation link to the Contact page */}
          <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>

        {/* Logo component */}
        <Logo/>
      </div>

      {/* Loading animation component */}
      <Loader type="ball-grid-pulse" />
    </>
  );
}

export default Home;
