import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import LanguageSelector from './LanguageSelector';
import Logo from '../../assets/logo.png'; // Import the logo image

const Footer = () => {
  const { t } = useTranslation('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <FooterBrand />
          <div className="lg:col-span-3">
            <FooterLinks />
          </div>
        </div>

        <FooterContact />
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-4 mt-8">
          {/* Copyright Section with Logo */}
          <p className="text-gray-400 text-sm flex items-center">
            &copy; {currentYear} 
            <img src={Logo} alt="Quantam Logo" className="h-8" /> 
            {t('All Rights Reserved')}
          </p>
          {/* <LanguageSelector /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
