// Header.tsx
import React from 'react';
import './Header.css'; // make sure to create a corresponding CSS file

interface HeaderProps {
  // Define any props you might want to pass to the Header, e.g., functions for language change or waiting list
}

const Header: React.FC<HeaderProps> = () => {
  // For demonstration, these functions could be passed in via props or context
  const handleLanguageChange = () => {
    // Logic to change the language
  };

  const handleJoinWaitlist = () => {
    // Logic to join the waitlist
  };

  return (
    <header className="header">
      <div className="header__logo"><img src={`/read-me-light.svg`} alt="Logo" /></div>

      <div className="header__actions">
        {/* <button onClick={handleLanguageChange} className="header__language-toggle">
          Language
        </button> */}
        <button onClick={handleJoinWaitlist} className="header__join-waitlist">
          Join Waitlist
        </button>
      </div>
    </header>
  );
};

export default Header;
