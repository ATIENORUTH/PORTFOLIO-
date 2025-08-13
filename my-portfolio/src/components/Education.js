import React from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      diploma: "Diploma in in Computer Science",
      school: " Technical University of Mombasa",
      year: "2024 - Present",
      details: "Specializing in software development, web applications, and UI/UX design."
    },
    {
      Certificate: "High School Diploma",
      school: " Power Learn Project",
      year: "2025 - 2025",
      details: "Graduated with certificate in Software Engineering (FULL-STACK) and Basics of Blockchain."
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <h2 className="education-title">My <span>Education</span></h2>
        <p className="education-subtitle">Learning Journey</p>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div className="education-card" key={index}>
              <h3>{edu.degree}</h3>
              <h4>{edu.school}</h4>
              <span className="edu-year">{edu.year}</span>
              <p>{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
