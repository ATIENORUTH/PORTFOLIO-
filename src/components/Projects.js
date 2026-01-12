import React from "react";
import "./Projects.css";
import portfolioImg from "../Assets/Portfolio.webp";
import TO from "../Assets/TO-DO.webp";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React showcasing my skills and projects.",
    imgSrc: portfolioImg,
    link: "https://superlative-pudding-9dcdae.netlify.app/"
  },
  {
    title: "TO-DO APP",
    description: "A  clean task manager focused on clarity, focus, and productivity.",
    link: "https://atienoruth.github.io/to-do-app/"
  },
   {
    title: "Bus-Booking System",
    description: "An intuitive bus booking system built to simplify travel reservations.",
    link: "https://atienoruth.github.io/Bus-Booking/"
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">
          My <span>Projects</span>
        </h2>
        <p className="projects-subtitle">A Glimpse of My Work</p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.imgSrc} alt={project.title} />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
