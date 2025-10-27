import React from "react";
import "../App.css";
import Profile from "../assets/Profile.jpg"; // ✅ import as a variable

const Navbar = () => {
  return (
    <header>
      <div className="profile-nav">
        <img src={Profile} alt="Surya Profile" />
        <h3>Surya</h3>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#home">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/home.png"
                alt="home"
              />{" "}
              Home
            </a>
          </li>
          <li>
            <a href="#skills">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/skills.png"
                alt="skills"
              />{" "}
              Skills
            </a>
          </li>
          <li>
            <a href="#timeline">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/timeline.png"
                alt="timeline"
              />{" "}
              Timeline
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/portfolio.png"
                alt="portfolio"
              />{" "}
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/email.png"
                alt="contact"
              />{" "}
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
