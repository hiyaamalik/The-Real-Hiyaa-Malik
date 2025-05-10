import React from 'react';
import '../styles/Projects.css';

const PolaroidCard = ({ image, title, description, onClick, useInternalModal = false }) => {
  const handleCardClick = () => {
    if (onClick) onClick();
  };

  return (
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
  );
};

export default PolaroidCard;