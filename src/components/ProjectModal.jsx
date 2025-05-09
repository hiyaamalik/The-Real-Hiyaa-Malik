import React from 'react';

const ProjectModal = ({ show, onClose, project }) => {
  if (!show) return null; // Don't render the modal if 'show' is false

  return (
    <div className="modal-overlay" style={styles.overlay} onClick={onClose}>
      <div 
        className="modal-content" 
        style={styles.content} 
        onClick={e => e.stopPropagation()} // Prevent modal content click from closing the modal
      >
        <h2 style={styles.title}>{project.title}</h2>
        <p>{project.details}</p>
        
        {/* Conditionally render the image if available */}
        {project.image && <img src={project.image} alt={project.title} style={styles.image} />}
        
        <div className="modal-links" style={styles.links}>
          {/* Render the 'Visit' link if the project link is provided */}
          {project.link && (
            <a href={project.link} target="_blank" style={styles.link}>
              Visit
            </a>
          )}
        </div>

        <button onClick={onClose} style={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

// Inline styles for modal styling
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure modal is above everything else
  },
  content: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '80%',
    maxHeight: '80%',
    overflowY: 'auto', // Allow scrolling if content is too large
    textAlign: 'center',
    position: 'relative',
  },
  title: {
    marginBottom: '10px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '15px',
    borderRadius: '8px',
  },
  links: {
    marginTop: '15px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#f5d7e7',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default ProjectModal;
