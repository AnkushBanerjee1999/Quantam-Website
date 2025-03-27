import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from './languageData';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(
    languages.find(lang => lang.code === i18n.language) || languages[0]
  );

  useEffect(() => {
    document.documentElement.dir = selectedLang.direction;
  }, [selectedLang]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.code);
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
      >
        <img 
          src={selectedLang.flag} 
          alt={`${selectedLang.name} flag`}
          className="w-5 h-4 object-cover rounded"
          loading="lazy"
        />
        <span>{selectedLang.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mb-2 w-48 bg-gray-800 rounded-lg shadow-xl py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors flex items-center gap-2 ${
                selectedLang.code === lang.code ? 'text-white bg-gray-700' : 'text-gray-300'
              }`}
            >
              <img 
                src={lang.flag} 
                alt={`${lang.name} flag`}
                className="w-5 h-4 object-cover rounded"
                loading="lazy"
              />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;