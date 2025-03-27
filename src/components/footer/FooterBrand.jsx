import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const FooterBrand = () => {
  const { t } = useTranslation('footer');

  return (
    <div className="space-y-4">
      <a 
        href="/"
        className="flex items-center gap-3 hover:opacity-90 transition-opacity"
      >
        <img src={Logo} alt="Quantam" className="h-20 w-auto" />
        {/* <p className="text-sm text-gray-400">{t('platform')}</p> */}
      </a>
      <Link 
        to="/request-demo" 
        className="block w-full bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg transition-colors text-center"
      >
        {t('bookDemo')}
      </Link>
    </div>
  );
};

export default FooterBrand;