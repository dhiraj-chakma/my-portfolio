// Importing required components, hooks, and libraries
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
  // State to control the animated letters
  const [letterClass, setLetterClass] = useState('text-animate')
  // Ref to the email form
  const refForm = useRef(null)

  // Setting up the animation for letters on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer) // Clear the timeout if the component unmounts
  }, [])

  // Function to send an email using emailjs
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_qwg3csf',
        'template_c7upvkl',
        refForm.current,
        '1PvNBKiO1RYmvMsR5'
      )
      .then(
        () => {
          alert('Message successfully sent')
          window.location.reload(false)
        },
        (error) => {
          console.log('Failed', error)
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            {/* Animated letters component */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          {/* Personalized message */}
          <p>
            Hey there, job-havers and opportunity-makers! 👋 Looking to add a
            dash of frontend magic to your team? Slide into my inbox by using
            the form below. Let's make your project so awesome, it becomes the
            stuff of office legend! 🦄
          </p>
          {/* Email form */}
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul className="message-form">
                {/* Name and email input fields */}
                <div className="side-by-side">
                  <li className="half">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email_id"
                      placeholder="Email"
                      required
                    />
                  </li>
                </div>
                {/* Subject and message input fields */}
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                {/* Submit button */}
                <li>
                  <input type="submit" className="flat-button2" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        {/* Map section */}
        <div className="map-wrap">
          {/* Map container */}
          <MapContainer
            center={[49.4444, 11.09523]}
            zoom={13}
            scrollWheelZoom={false}
          >
            {/* OpenStreetMap layer */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Marker with popup */}
            <Marker position={[49.4444, 11.09523]}>
              <Popup>
                You're welcome to my home for a beer and chat about coding, badminton, or life.
              </Popup>
            </Marker>
          </MapContainer>
          {/* Information section over the map */}
          <div className="info-map">
            Dhiraj chakma,
            <br />
            Germany,
            <br />
            Walter-meckauer-strasse 12, 90478 <br />
            Nürnberg <br />
            <span>chakmadhiraj@gmail.com</span>
          </div>
        </div>
      </div>
      {/* Loading animation */}
      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Contact;
