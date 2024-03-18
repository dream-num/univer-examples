// Footer.tsx
import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <strong>Company</strong>
        <ul>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
      </div>
      <div className="footer__section">
        <strong>Resources</strong>
        <ul>
          <li><a href="#docs">Developer Docs</a></li>
          <li><a href="#api">API</a></li>
        </ul>
      </div>
      <div className="footer__section">
        <strong>Community</strong>
        <ul>
          <li><a href="#discord">Discord</a></li>
          <li><a href="#zhihu">Zhihu</a></li>
        </ul>
      </div>
      <div className="footer__section">
        <strong>Help</strong>
        <ul>
          <li><a href="#github-discussions">GitHub Discussions</a></li>
          <li><a href="#troubleshooting">Troubleshooting</a></li>
          <li><a href="#bug-report">Bug report</a></li>
        </ul>
      </div>
      <div className="footer__copyright">
        <p>Copyright © 2021-2024 Univer. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
