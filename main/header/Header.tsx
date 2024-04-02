// Header.tsx
import React from 'react';
import './Header.css'; // make sure to create a corresponding CSS file

interface HeaderProps {
  // Define any props you might want to pass to the Header, e.g., functions for language change or waiting list
}

const Header: React.FC<HeaderProps> = () => {

  return (
    <header className="header">

      <nav className='header-content'>
        <a href="https://univer.ai" title='univer' className="header__logo"><img src={`./assets/img/read-me-light.svg`} alt="Logo" /></a>

        <div className="header__actions">
          {/* <button onClick={handleLanguageChange} className="header__language-toggle">
          Language
        </button> */}
          <a href="https://univer.ai/workspace/#contact-us" title='univer' className="header__join-waitlist">
            Join Waitlist
          </a>
        </div>
      </nav>

    </header>
  );
};

export default Header;
