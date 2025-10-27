import React from "react";
import Profile from "../assets/IMG-20190823-WA0007 (1).jpg"

const Home = () => {
  return (
    <section id="home">
      <div className="home-about-container">
        <img src={Profile} alt="Profile" />
        <div className="home-about-text">
          <h1>Hi, I'm Surya</h1>
          <p>
            Born on <strong>January 17, 2001</strong> in <strong>Thiruvannamalai</strong> to <strong>Rajendran M</strong> and <strong>Unnamali R</strong>.
            I completed <strong>SSLC (2015)</strong>, <strong>HSLC (2018)</strong>, and <strong>B.Sc. Electronics & Communication Science (2021)</strong>.
            I am an aspiring entrepreneur with experience in marketing, medical billing, and company accounts.
            I founded <strong>Aperiofincraft Pvt Ltd</strong> and <strong>Passion Path Pvt Ltd</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
