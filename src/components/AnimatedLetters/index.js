// Importing the component's stylesheet
import "./index.scss";

/**
 * AnimatedLetters Component
 *
 * This component is used to animate individual letters of a string.
 *
 * @param {string} letterClass - The CSS class used to control the animation of letters.
 * @param {array} strArray - The array containing characters to be animated.
 * @param {number} idx - The starting index for classes that might differentiate each character's animation.
 * @return {JSX.Element} A span containing the animated characters.
 */
const AnimatedLetters = ({ letterClass, strArray, idx}) => {
  return (
    // Container for animated letters
    <span>
      {
        // Mapping through each character in strArray
        strArray.map((char, i) => (
          // Rendering each character with its respective animation class
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))
      }
    </span>
  );
}

export default AnimatedLetters;
