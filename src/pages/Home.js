// src/components/Home.js
import React from 'react';
import Typed from 'react-typed';
import '../App.css';

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="gold-text">Your Name</span>
        </h1>
        <p className="hero-subtitle">
          A Passionate{' '}
          <Typed
            strings={['Web Developer', 'UI/UX Designer', 'Creative Coder']}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </p>
        <p className="hero-description">
          I create beautiful, functional, and user-friendly web experiences
          using modern technologies and a touch of elegance.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

