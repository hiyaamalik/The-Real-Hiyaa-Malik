import React, { useState } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Powers from './sections/Powers';
import Experience from './sections/Experience';
import Extras from './sections/Extras';
import Contact from './sections/Contact';
import ContactForm from './components/ContactForm';


const App = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="app-container">
      <Hero />
      <About />
      <Projects />
      <Powers />
      <Experience />
      <Extras />
      <Contact openForm={() => setShowContactForm(true)} />
      
      {/* Modal Overlay */}
      {showContactForm && (
        <div className="modal-overlay" onClick={() => setShowContactForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ContactForm onClose={() => setShowContactForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;