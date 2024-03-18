// Card.tsx
import React from 'react';
import './Card.css'; // Ensure you create a corresponding CSS file

// Card.tsx
interface CardProps {
    title: string;
    description: string;
    url: string;
  }
  
  const Card: React.FC<CardProps> = ({ title, description, url }) => {
    return (
      <div className="card">
        <div className="card__image-placeholder">pic</div>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <a href={url} className="card__link">View Example →</a>
      </div>
    );
  };
  
export default Card;
