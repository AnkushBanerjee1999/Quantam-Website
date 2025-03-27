import React from 'react';
import { useTranslation } from 'react-i18next';
import NavbarBrand from './NavbarBrand';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { useNavigation } from './hooks/useNavigation';
import LanguageSelector from '../footer/LanguageSelector';

const Navbar = () => {
  const { t } = useTranslation('common');
  const { isOpen, setIsOpen, menuItems } = useNavigation(t);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavbarBrand />
          <MobileMenu.Button isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          <DesktopMenu items={menuItems} />
          {/* <LanguageSelector/> */}
        </div>
        <MobileMenu isOpen={isOpen} items={menuItems} onItemClick={() => setIsOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;