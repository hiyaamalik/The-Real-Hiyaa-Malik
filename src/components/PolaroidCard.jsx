import React, { useState } from 'react';
import '../styles/Projects.css'; // Ensure modal styles are in this file

const PolaroidCard = ({ image, title, description, extraImage, extraLink }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="polaroid-card" onClick={handleCardClick}>
        <img
          src={image || 'https://via.placeholder.com/250x250.png?text=Project'}
          alt={title}
          className="polaroid-image"
        />
        <div className="caption">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>×</button>
            <div className="modal-content">
              <img
                src={extraImage || 'https://via.placeholder.com/400x400.png?text=Details'}
                alt="Extra Details"
                className="extra-image"
              />
              <p>
                <a href={extraLink} target="_blank" rel="noopener noreferrer">
                  More Details
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PolaroidCard;
