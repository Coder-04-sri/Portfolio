import React from 'react'
import '../App.css';
import ProjectImg1 from "../assets/Project_1.png";
import ProjectImg2 from "../assets/Project2.png";
import ProjectImg3 from "../assets/Final_Year.jpeg";
import ProjectImg4 from "../assets/Project4.png";



function Projects() {

  const projectData = [

    {
      id: 1,
      image: ProjectImg1,
      title: "E-Commerce Website UI",
      description:
        "Fully Mobile responsive Website built using React js.",
      demo: "https://coder-04-sri.github.io/Project1/",
      code: "https://github.com/Coder-04-sri/Project1"
    },

    {
      id: 2,
      image: ProjectImg2,
      title: "Portfolio Website",
      description:
        "Responsive portfolio website created using React and CSS.",
      demo: "#",
      code: "#"
    },

    {
      id: 3,
      image: ProjectImg3,
      title: "Face Recognition Door Lock",
      description:
        "Smart security system using facial recognition and IoT technology.",
      demo: "#",
      code: "#"
    },

    {
      id: 4,
      image: ProjectImg4,
      title: "Clicking Buzzer PCB design",
      description:
        "Make the Design using Kicad tool.",
      demo: "#",
      code: "#"
    },
    {
      id: 5,
      image: ProjectImg4,
      title: "Clicking Buzzer PCB design",
      description:
        "Make the Design using Kicad tool.",
      demo: "#",
      code: "#"
    }

  ]

  return (

    <section className="project-section" id="Projects">

      <div className="project-heading">
        <h1 data-aos="zoom-in">My Projects</h1>

        <p data-aos="zoom-in">
          Here are some projects I have worked on.
        </p>
      </div>

      <div  className="project-container">

        {
          projectData.map((project) => (

            <div data-aos="flip-left" className="project-card" key={project.id}>

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="project-buttons">

                  <a target="_blank" href={project.demo}>
                    <button   className="project-btn demo-btn">
                      
                      Live Demo
                    </button>
                  </a>

                  <a target="_blank" href={project.code}>
                    <button  className="project-btn code-btn">
                      Source Code
                    </button>
                  </a>

                </div>

              </div>

            </div>

          ))
        }

      </div>

    </section>
  )
}

export default Projects