import React from "react";
import "./FloatingHireButton.css";

const FloatingHireButton = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className="floating-hire-btn" onClick={scrollToContact}>
      Hire Me
    </button>
  );
};

export default FloatingHireButton;
