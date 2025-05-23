import React from 'react';
import '../styles/MagicModal.css';

const MagicModal = ({ show, onClose, project }) => {
  if (!show || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        {/* Title */}
        <h2 className="modal-title">{project.title}</h2>
        
        {/* Extra Images Section */}
        {project.extraImages && project.extraImages.length > 0 && (
          <div className="section">
            <h3 className="section-title">Screenshots</h3>
            <div className="extra-images">
              {project.extraImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="extra-image"
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Details Section */}
        <div className="section">
          <h3 className="section-title">Project Details</h3>
          <p className="section-content">{project.details}</p>
        </div>
        
        {/* Achievements Section */}
        {project.achievements && project.achievements.length > 0 && (
          <div className="section">
            <h3 className="section-title">Achievements</h3>
            <ul className="achievements-list">
              {project.achievements.map((item, index) => (
                <li key={index} className="achievement-item">
                  <span className="bullet">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Link Section */}
        {project.link && (
          <div className="link-container">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Project/Repository
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MagicModal;