import React from "react";
import "./About.css";
import aboutImg from "../Assets/about.jpg"; // Ensure this path is correct

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About <span>Me</span></h2>
        <p className="about-subtitle">Who I Am</p>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm <span className="highlight">Ruth</span>, a passionate
              web developer with a love for creating interactive, stylish, and
              responsive websites. I specialize in crafting premium digital
              experiences using modern tools and design principles.
            </p>
            <p>
              My goal is to blend clean design with smooth functionality —
              delivering projects that are not just beautiful, but also
              user-friendly.
            </p>
            <a href="#contact" className="btn-gold">Let's Talk</a>
          </div>
          <div className="about-image">
            <img
              src={aboutImg} // Use the imported variable here
              alt="Ruth"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
