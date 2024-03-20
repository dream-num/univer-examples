// MainContent.tsx
import React from 'react';
import {GithubSingle24} from '@univerjs/icons'
import './MainContent.css'; // Make sure to create a corresponding CSS file

const MainContent: React.FC = () => {

  return (
    <div className="main-content">
      <h1 className="main-content__title">Univer Examples<span className='main-content__title_emoji'><img src="./assets/img/game.png" alt="univer examples" /></span></h1>
      <p className="main-content__description">
      Rich Examples and guidance demonstrate Univer's various powerful capabilities, helping you quickly find the functions you want.
      </p>
      <div className="main-content__buttons">
      <a className="main-content__button main-content__button--started" href="https://univer.ai" rel="nofollow" target='_blank' title="get started"><span>Get started</span></a>
        <a className="main-content__button main-content__button--github" href="https://github.com/dream-num/univer" rel="nofollow" target='_blank' title="github">
        <GithubSingle24 className="main-content__github-icon"/>
          <span className="main-content__github-content" >GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default MainContent;
