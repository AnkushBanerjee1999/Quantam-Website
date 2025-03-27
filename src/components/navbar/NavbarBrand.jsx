import React from 'react';
import Logo from '../../assets/logo.png';

const NavbarBrand = () => (
  <div className="flex-shrink-0">
    <a 
      href="https://www.Quantam.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:opacity-90 transition-opacity"
    >
      <img className="h-20 w-auto" src={Logo} alt="Quantam" />
    </a>
  </div>
);

export default NavbarBrand;