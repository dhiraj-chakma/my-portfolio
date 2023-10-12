// Importing required styles and components
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  // State for controlling the class for letter animations
  const [letterClass, setLetterClass] = useState("text-animate");

  // Effect to change the letter class after a set time for animation purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    // Clean-up function to clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone" id="about-txt">
          <h1>
            {/* AnimatedLetters component to animate the "About me" text */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          {/* Personal introduction and background */}
          <p>
          Driven and ambitious, I took the bold step of investing in a full-time coding bootcamp, diving deep into the world of front-end development—even when resources were limited. My journey reflects my unwavering willpower, dedication, and appetite for risk, all fueled by a relentless passion for coding. I'm eager to contribute my skills in HTML, CSS, JavaScript, and React to a team as committed to innovation and excellence as I am.
          </p>
          <p>
          Life, for me, is a marathon of constant learning and improvement, not a 100-meter dash to a quick finish. Every day brings its own challenges and opportunities, and I seize them as stepping stones towards becoming an exceptional front-end developer.
          </p>
          <p>
          When I'm not in front of a screen, you'll find me hitting the badminton court, running, or exploring nature. Hiking is my go-to escape, offering a blend of adventure and peace that fuels my creativity.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            {/* Cube faces with FontAwesome icons representing different technologies */}
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#712cf9" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      {/* Loading animation */}
      <Loader type="ball-grid-pulse" />
    </>
  );
}

export default About;
