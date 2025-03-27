import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const FooterLinks = () => {
  const { t } = useTranslation('footer');

  const linkGroups = [
    {
      title: 'Platform',
      links: [
        { key: 'platform', href: '/#platform' },
        { key: 'features', href: '/features' },
        { key: 'team', href: '/team' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { key: 'caseStudies', href: '/case-studies', text: 'Case Studies' },
        { key: 'support', href: '/support' }
      ]
    },
    {
      title: 'Company',
      links: [
        { key: 'contact', href: '/request-demo', text: 'Request Demo' },
        { key: 'termsOfUse', href: '/terms' },
        { key: 'privacyPolicy', href: '/privacy' },
        { key: 'faq', href: '/faq' }
      ]
    }
  ];

  const renderLink = (link) => {
    if (link.external) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          {link.text || t(`links.${link.key}`)}
        </a>
      );
    }

    if (link.href.startsWith('/#')) {
      return (
        <a
          href={link.href}
          className="text-gray-400 hover:text-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            const targetId = link.href.substring(2);
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {link.text || t(`links.${link.key}`)}
        </a>
      );
    }

    return (
      <Link
        to={link.href}
        className="text-gray-400 hover:text-white transition-colors"
      >
        {link.text || t(`links.${link.key}`)}
      </Link>
    );
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
      {linkGroups.map((group) => (
        <div key={group.title} className="space-y-4">
          <h3 className="text-white font-semibold">{group.title}</h3>
          <ul className="space-y-2">
            {group.links.map((link) => (
              <li key={link.key}>
                {renderLink(link)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;