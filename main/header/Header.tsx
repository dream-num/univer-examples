// Header.tsx
import React from 'react';
import './Header.css'; // make sure to create a corresponding CSS file

interface HeaderProps {
  // Define any props you might want to pass to the Header, e.g., functions for language change or waiting list
}

const Header: React.FC<HeaderProps> = () => {

  return (
    <header className="header">
      <a href="https://univer.ai" rel="nofollow" target='_blank' title='univer' className="header__logo"><img src={`/read-me-light.svg`} alt="Logo" /></a>

      <div className="header__actions">
        {/* <button onClick={handleLanguageChange} className="header__language-toggle">
          Language
        </button> */}
        <a href="https://discord.gg/z3NKNT6D2f" rel="nofollow" target='_blank' title='univer'  className="header__join-waitlist">
          Join Waitlist
        </a>
      </div>
    </header>
  );
};

export default Header;
