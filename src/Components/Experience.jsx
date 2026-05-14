import React from 'react'
import '../App.css';
import { SiFreelancer } from "react-icons/si";

function Experience() {

  const experienceData = [

    {
      id: 1,
      role: "Store Incharge",
      company: "Moto Control Systems",
      duration: "Present",
      description:
        "Handled inventory management, billing entries, and store operations. And also developing ERP Software for my present company",
      icon: "🏢"
    },

    {
      id: 2,
      role: "UI Developer",
      company: "Personal Projects",
      duration: "2025 - Present",
      description:
        "Created responsive websites using React, HTML, CSS, and JavaScript.",
      icon: "💻"
    },

    {
      id: 3,
      role: "PCB Design Learner",
      company: "Self Learning",
      duration: "2025 - Present",
      description:
        "Learning PCB designing, embedded systems, and IoT projects.",
      icon: "⚡"
    },

    {
      id: 4,
      role: "Web Design Freelancer",
      company: "Freelance",
      duration: " Present",
      description:
        "Designed modern UI layouts and portfolio websites for practice.",
      icon: <SiFreelancer />

    }

  ]

  return (

    <section className="experience-section" id="Experience">

      <div className="experience-heading">

        <h1 data-aos="zoom-in">Experience</h1>

        <p data-aos="zoom-in">
          My professional journey and learning experience.
        </p>

      </div>

      <div data-aos="fade-up" className="experience-container">

        {
          experienceData.map((item) => (

            <div className="experience-card" key={item.id}>

              <div className="experience-icon">
                {item.icon}
              </div>

              <h2>{item.role}</h2>

              <h3>{item.company}</h3>

              <span>{item.duration}</span>

              <p>{item.description}</p>

            </div>

          ))
        }

      </div>

    </section>
  )
}

export default Experience