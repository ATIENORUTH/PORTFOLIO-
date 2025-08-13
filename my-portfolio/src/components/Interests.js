import React from "react";
import "./Interests.css";
import { FaCode, FaCamera, FaPlane, FaBook } from "react-icons/fa";

const Interests = () => {
  const interestsData = [
    {
      icon: <FaCode />,
      title: "Coding",
      description: "Building web applications and exploring new programming technologies."
    },
    {
      icon: <FaCamera />,
      title: "Photography",
      description: "Capturing beautiful moments and creating visually compelling stories."
    },
    {
      icon: <FaPlane />,
      title: "Travel",
      description: "Exploring new cultures and gaining inspiration from different places."
    },
    {
      icon: <FaBook />,
      title: "Reading",
      description: "Diving into books on technology, design, and personal growth."
    }
  ];

  return (
    <section className="interests-section" id="interests">
      <div className="interests-container">
        <h2 className="interests-title">
          My <span>Interests</span>
        </h2>
        <p className="interests-subtitle">What I Love</p>

        <div className="interests-grid">
          {interestsData.map((interest, index) => (
            <div className="interest-card" key={index}>
              <div className="interest-icon">{interest.icon}</div>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
