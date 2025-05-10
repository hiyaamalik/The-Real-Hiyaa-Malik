import React from 'react';

const ProjectModal = ({ show, onClose, project }) => {
  if (!show || !project) return null;

  return (
    <div className="modal-overlay" style={styles.overlay} onClick={onClose}>
      <div 
        className="modal-content" 
        style={styles.content} 
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} style={styles.closeButton}>×</button>
        
        <h2 style={styles.title}>{project.title}</h2>
        
        {/* Removed: Main Image (project.image) */}

        {/* Short Details */}
        <p style={styles.details}>{project.modalContent.details}</p>

        {/* Full Description */}
        <p style={styles.fullDescription}>{project.modalContent.fullDescription}</p>

        {/* Extra Images (if any) */}
        <div style={styles.extraImages}>
          {project.modalContent.extraImages.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`${project.title} ${index}`} 
              style={styles.extraImage} 
            />
          ))}
        </div>

        {/* Achievements (if any) */}
        <div style={styles.achievements}>
          <h3 style={styles.subtitle}>Achievements:</h3>
          <ul style={styles.list}>
            {project.modalContent.achievements.map((item, index) => (
              <li key={index} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Styles (same as before)
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  content: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '10px',
    maxWidth: '600px',
    maxHeight: '80vh',
    overflowY: 'auto',
    position: 'relative',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '10px',
    color: '#333',
  },
  details: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '15px',
  },
  fullDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#444',
    marginBottom: '20px',
  },
  extraImages: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px',
  },
  extraImage: {
    width: '48%',
    borderRadius: '6px',
  },
  achievements: {
    marginTop: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '8px',
    color: '#333',
  },
  list: {
    paddingLeft: '20px',
  },
  listItem: {
    marginBottom: '5px',
    color: '#555',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#666',
  },
};

styles.list = {
    ...styles.list,
    textAlign: 'center',
};

export default ProjectModal;