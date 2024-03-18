// MainContent.tsx
import React from 'react';
import {GithubSingle24} from '@univerjs/icons'
import './MainContent.css'; // Make sure to create a corresponding CSS file

const MainContent: React.FC = () => {

    function handleClickGetStarted() {
        window.open('https://univer.ai', '_blank')
    }
    function handleClickGithub() {
        window.open('https://github.com/dream-num/univer', '_blank')
    }
  return (
    <div className="main-content">
      <h1 className="main-content__title">Univer Examples🎮</h1>
      <p className="main-content__description">
        Pro subscribers have access to advanced examples and guides that can be used as a starting point or inspiration for building node-based UIs.
      </p>
      <div className="main-content__buttons">
        <button className="main-content__button main-content__button--started" onClick={handleClickGetStarted}>Get started</button>
        <button className="main-content__button main-content__button--github">
        <GithubSingle24 className="main-content__github-icon"/>
          <span className="main-content__github-content" onClick={handleClickGithub}>GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default MainContent;
