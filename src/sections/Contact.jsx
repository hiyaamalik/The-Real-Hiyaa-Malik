import React, { useState } from 'react'; // Added useState
import contactBg from '../assets/last.png';
import headingContact from '../assets/heading-contact.png';
import '../styles/Contact.css';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    const [showForm, setShowForm] = useState(false); // Added state

    return (
        <section id="contact" className="contact-section">
            <img src={headingContact} alt="Find Me Heading" className="contact-heading" />

            <div className="contact-wrapper">
                <img src={contactBg} alt="Contact Grid Background" className="contact-bg" />

                <div className="contact-links">
                    <a href="https://github.com/hiyaamalik" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <button onClick={() => setShowForm(true)} className="modal-btn">ContactForm</button>
                    <a href="https://www.linkedin.com/in/hiyaamalik" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>

            {/* Modal */}
            {showForm && (
                <div className="modal-overlay" onClick={() => setShowForm(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setShowForm(false)}>×</button>
                        <ContactForm onClose={() => setShowForm(false)} />
                    </div>
                </div>
            )}

            <footer className="contact-footer">
                <p>© 2025 Hiyaa Malik. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;