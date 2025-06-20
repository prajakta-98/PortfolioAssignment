import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
  faTelegram,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import moonIcon from "../assets/Moon Black.svg";
import sunIcon from "../assets/Group.svg";
import rectangle from "../assets/Rectangle.png"
import "./Portfolio.css";
import Logo from "../assets/Logo.svg";
import profilePic from "../assets/Profile.svg";
import { useState } from "react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme");
  };
  return (
    <div className="portfolio">
      <header className="navbar container" role="banner">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span className="name">ANISH KUMAR SINHA</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="theme-toggle" onClick={toggleTheme}>
            <img src={darkMode ? sunIcon : moonIcon} alt="Toggle Theme" />
          </div>
        </nav>
      </header>

      <div className="hero container">
        <div className="hero-text">
          <div className="hello-badge">Hello!</div>
          <h1>
            I’m <span className="name-highlight">Anish 👋</span>
          </h1>
          <p>
            UI/UX Designer, Front-End Developer & Thinker.
            <br />
            Based in India.
          </p>

          <div className="buttons">
            <button className="download-btn">Download CV</button>
            <button className="contact-btn">Get in Touch!</button>
          </div>

          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTelegram} />
            <FontAwesomeIcon icon={faSnapchat} />
          </div>
        </div>

        <div className="hero-image">
          <div className="yellow-blob"></div>
          <img src={profilePic} alt="Anish" />
        </div>

        <div className="email-vertical right">sinhaanishkumar@outlook.com -</div>
      </div>
      <section id="about" className="about-section container">
        <div className="about-left">
          <img
            src={rectangle}
            alt="Hand Illustration"
            className="hand-illustration"
          />
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTelegram} />
            <FontAwesomeIcon icon={faSnapchat} />
          </div>
        </div>
        <div className="about-text">
          <h2>
            <span className="big-letter">T</span> his is it.
            <span className="smiley">😉</span>
          </h2>
          <hr />
          <p>
            Anish Kr. Sinha is an Indian{" "}
            <strong>UI/UX Designer & Front End Developer</strong> with a passion
            for designing beautiful and functional user experiences...
          </p>
          <p>
            Anish Kr. Sinha is an Indian{" "}
            <strong>UI/UX Designer & Front End Developer</strong> with a passion
            for designing beautiful and functional user experiences...
          </p>
          <p>
            He holds a <strong>bachelor degree in Computer Applications</strong>
            ... <strong>India</strong>.
          </p>
          <p>
            His interests... <strong>3D floor plan</strong>.
          </p>
          <p>When he’s not designing, he’s probably... YouTube tutorials.</p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
