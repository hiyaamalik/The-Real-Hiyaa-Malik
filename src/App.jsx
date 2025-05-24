import React, { useState } from 'react'; // Add useState import
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Powers from './sections/Powers';
import Experience from './sections/Experience'; 
import Extras from './sections/Extras';
import Contact from './sections/Contact';
import ContactForm from './components/ContactForm';

const App = () => {
  const [showContactForm, setShowContactForm] = useState(false); // Add state control

  return (
    <div className="app-container">
      <Hero />
      <About />
      <Projects />
      <Powers />
      <Experience />
      <Extras />
      <Contact openForm={() => setShowContactForm(true)} /> {/* Pass open handler */}
      
      {/* Conditionally render ContactForm with overlay */}
      {showContactForm && (
        <div className="modal-overlay">
          <ContactForm onClose={() => setShowContactForm(false)} />
        </div>
      )}
    </div>
  );
};

export default App;