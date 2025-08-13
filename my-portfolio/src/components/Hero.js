import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span>Joy Ruth</span></h1>
        <p className="hero-subtitle">Where Creativity Meets Code</p>
        <p className="hero-desc">
          Crafting sleek, modern, and interactive websites with a premium touch.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-gold">View Projects</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
