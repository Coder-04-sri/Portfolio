import React from 'react'
import '../App.css';
import Img from "../assets/Myimg.jpeg"


function About() {
  return (
    <section className="about-section" id="About">

  <div className="about-container">

    <div data-aos="fade-right" className="about-image">
      <img src={Img} alt="profile" />
    </div>

    <div className="about-content">

      <h1 data-aos="zoom-in">About Me</h1>

      <p data-aos="fade-left">
        I am a final year Electronics and Communication Engineering student
        passionate about Web Development, UI Design, PCB Designing,
        and Embedded Systems.
      </p>

      <p data-aos="fade-left">
        I enjoy creating responsive websites and innovative electronic
        projects. I am interested in both software and hardware technologies.
      </p>

      <div className="about-details">

        <div data-aos="zoom-in" className="detail-box">
          <h2>Education</h2>
          <p>B.E ECE - Final Year</p>
        </div>

        <div data-aos="zoom-in" className="detail-box">
          <h2>Skills</h2>
          <p>React, HTML, CSS, JavaScript ,Git&GitHub </p>
        </div>

        <div data-aos="zoom-in" className="detail-box">
          <h2>Tools</h2>
          <p>KiCad , Visual Studio Code </p>
        </div>

        <div data-aos="zoom-in" className="detail-box">
          <h2>Interest</h2>
          <p>UI Design and Development & PCB Designing</p>
        </div>

      </div>

      <button data-aos="zoom-in" className="about-btn">
        Download Resume
      </button>

    </div>

  </div>

</section>
  )
}

export default About