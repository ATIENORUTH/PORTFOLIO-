import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css"; // Fixed typo from Footer.csss to Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} JOY RUTH. All rights reserved.</p>
      <div className="social-links">
        <a
          href="https://github.com/ATIENORUTH"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/Devlyn_D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com/in/ruth-joy-526a32332"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

