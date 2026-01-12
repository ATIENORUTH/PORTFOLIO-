import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">
          Get <span>In Touch</span>
        </h2>
        <p className="contact-subtitle">
          Have a project in mind or just want to say hello? Let’s talk.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="joyruth" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="joyruth@gmail.com" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Hello" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
