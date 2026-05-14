
import React, { useState, useEffect } from "react";
import '../App.css';
import { ImLinkedin2 } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { SiFreelancer } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import { FaSearchLocation } from "react-icons/fa";
 

function Contact() {


 useEffect(() => {
  fetch("http://localhost:5000/api/test")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}, []);


   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully 🚀");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } else {
      alert("Failed to send message");
    }

  } catch (error) {
    console.log(error);
    alert("Server error");
  }
};

  return (
    

    <section className="contact-section" id="Contact">

      <div className="contact-heading">

        <h1 data-aos="zoom-in">Contact Me</h1>

        <p data-aos="zoom-in">
          Feel free to contact me for projects, internships,
          collaborations, or opportunities.
        </p>

      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div  className="contact-info">

          <div data-aos="fade-right" className="info-card">

            <div className="info-icon"><MdEmail /></div>

            <div>
              <h2 className='Head'>Email</h2>
              <a target="_blank" href="mailto:vanisrikullappan2004@gmail.com?subject=Web Developer Job&body=Hello, I saw your portfolio." >vanisrikullappan2004@gmail.com</a>
             
            </div>

          </div>

          <div data-aos="fade-right"  className="info-card">

            <div className="info-icon"><FaPhoneAlt /></div>

            <div >
              <h2 className='Head'>Phone</h2>
              <a target="_blank" href='tel:+919025901181' >+91 90259 01181</a>
            </div>

          </div>

          <div data-aos="fade-right"  className="info-card">

            <div className="info-icon"><FaSearchLocation /></div>

            <div>
              <h2 className='Head'>Location</h2>
              <p>Tamil Nadu, India</p>
            </div>

          </div>
          <div></div>

          <div className="social-links" >

            <a target="_blank" href="https://www.linkedin.com/in/vanisri-k-16234a281/?isSelfProfile=false"><ImLinkedin2 /></a>
            <a href="https://wa.me/919025901181"
                    target="_blank"
                     rel="noopener noreferrer"><BsWhatsapp /></a>
            <a target="_blank" href="https://www.freelancer.in/u/vanisri3"><SiFreelancer /></a>
            <a target="_blank" href="https://github.com/Coder-04-sri"><FaGithub /></a>

          </div>

        </div>

        {/* RIGHT SIDE */}

  <div className="contact-form" data-aos="fade-left">

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>

      </div>

    </section>
  )
}

export default Contact