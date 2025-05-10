import React from 'react';
import contactBg from '../assets/last.png';
import headingContact from '../assets/heading-contact.png';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <img src={headingContact} alt="Find Me Heading" className="contact-heading" />

      <div className="contact-wrapper">
        <img src={contactBg} alt="Contact Grid Background" className="contact-bg" />

        {/* Overlayed labels */}
        <div className="contact-links">
          <a href="https://github.com/hiyaamalik" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:youremail@example.com">ContactForm</a>
          <a href="www.linkedin.com/in/hiyaamalik" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
