import { useState } from 'react';

export const useNavigation = (t) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: t('nav.platform'), href: '/#platform' },
    { name: t('nav.features'), href: '/features' },
    { name: t('nav.appStore'), href: '/app-store' },
    { name: t('nav.team'), href: '/team' },
    { name: t('nav.casestudies'), href: '/casestudies' },
    { name: t('nav.support'), href: '/support'},
    { 
      name: t('nav.requestDemo'), 
      href: '/request-demo', 
      special: 'primary',
      external: true
    },
  ];

  return { isOpen, setIsOpen, menuItems };
};