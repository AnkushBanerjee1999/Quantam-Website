import React from 'react';
import { useTranslation } from 'react-i18next';

const FooterContact = () => {
  const { t } = useTranslation('footer');

  return (
    <div className="border-t border-gray-800 pt-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">{t('contact.title')}</h3>
          <a 
            href={`mailto:${t('contact.email')}`} 
            className="text-gray-400 hover:text-white transition-colors block mb-2"
          >
            {t('contact.email')}
          </a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{t('contact.addressTitle')}</h3>
          <address className="text-gray-400 not-italic">
            {t('contact.address')}
          </address>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;