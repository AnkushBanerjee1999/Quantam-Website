import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('common');

  const menuItems = [
    { name: t('nav.platform'), href: '#platform' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.caseStudies'), href: '#case-studies' },
    { name: t('nav.blog'), href: '#blog' },
    { name: t('nav.team'), href: '#team' },
    { name: t('nav.support'), href: '#support' },
  ];

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              href="https://www.Quantam.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity"
            >
              <img className="h-8 w-auto" src={Logo} alt="Quantam" />
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="#demo"
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('nav.requestDemo')}
              </Link>
              <Link
                to="/login"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium border border-gray-700 hover:border-gray-600 transition-colors"
              >
                {t('nav.login')}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="#demo"
              className="bg-indigo-600 hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.requestDemo')}
            </Link>
            <Link
              to="/login"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium border border-gray-700 hover:border-gray-600 mt-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.login')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};