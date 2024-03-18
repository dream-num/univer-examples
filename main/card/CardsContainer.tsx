// CardsContainer.tsx
import React from 'react';
import Card from './Card';
import './CardsContainer.css'; // Make sure to create a corresponding CSS file

const cardsData = [
    {
      title: 'Sheets',
      url: './sheets/',
      description: 'Collaborate with ease using our intuitive Sheets interface.',
    },
    {
      title: 'Sheets Multi',
      url: './sheets-multi/',
      description: 'Manage multiple sheets in one unified view with Sheets Multi.',
    },
    {
      title: 'Sheets Uniscript',
      url: './sheets-uniscript/',
      description: 'Extend the functionality of your sheets with Uniscript.',
    },
    {
      title: 'Docs',
      url: './docs/',
      description: 'Create and share documents seamlessly with our Docs feature.',
    },
    {
      title: 'Docs Multi',
      url: './docs-multi/',
      description: 'Work on several documents simultaneously with Docs Multi.',
    },
    {
      title: 'Docs Uniscript',
      url: './docs-uniscript/',
      description: 'Unleash powerful scripting capabilities in your documents with Docs Uniscript.',
    },
  ];
  

const CardsContainer: React.FC = () => {
  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} url={card.url} />
      ))}
    </div>
  );
};

export default CardsContainer;
