import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file

const footerLinks = [
  {
    title: 'Company',
    links: [
      {
        label: 'Blog',
        url: 'https://univer.ai/en-us/blog/'
      },
      {
        label: 'Contact us',
        url: 'https://univer.ai/en-us/enterprises'
      },
    ]
  },
  {
    title: 'Resources',
    links: [
      {
        label: 'Developer Docs',
        url: 'https://univer.ai/en-us/guides/introduction'
      },
      {
        label: 'API',
        url: 'https://univer.ai/api'
      },
      {
        label: 'Univer Icon',
        url: 'https://univer.ai/icons'
      },
    ]
  },
  {
    title: 'Community',
    links: [
      {
        label: 'Discord',
        url: 'https://discord.gg/z3NKNT6D2f'
      },
      {
        label: 'Zhihu',
        url: 'https://www.zhihu.com/org/meng-shu-ke-ji'
      },
    ]
  },
  {
    title: 'Help',
    links: [
      {
        label: 'GitHub Discussions',
        url: 'https://github.com/dream-num/univer/discussions'
      },
      {
        label: 'Troubleshooting',
        url: 'https://univer.ai/en-us/guides/troubleshooting'
      },
      {
        label: 'Bug report',
        url: 'https://github.com/dream-num/univer/issues'
      },
    ]
  }
];


interface Link {
  label: string;
  url: string;
}

interface Section {
  title: string;
  links: Link[];
}

const FooterSection: React.FC<{ section: Section }> = ({ section }) => {
  return (
    <div className="footer__section">
      <h4 className="footer__section-title">{section.title}</h4>
      <ul className="footer__link-list">
        {section.links.map((link, index) => (
          <li key={index} className="footer__link-item">
            <a href={link.url} className="footer__link" rel="nofollow" target='_blank' title={link.label}>{link.label}</a>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {footerLinks.map((section, index) => (
        <FooterSection key={index} section={section} />
      ))}
      <div className="footer__copyright">
        <p>&copy; Copyright © 2021-2024 Mengshu. All Rights Reserved. Copyright © 2021-2024 Dreamnum Co,Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
