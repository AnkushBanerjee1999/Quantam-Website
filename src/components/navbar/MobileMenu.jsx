import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const MobileMenuButton = ({ isOpen, onClick }) => (
  <div className="md:hidden">
    <button
      onClick={onClick}
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
);

const MobileMenu = ({ isOpen, items, onItemClick }) => (
  <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
    <div className="px-2 pt-2 pb-3 space-y-1">
      {items.map((item) => (
        <NavLink key={item.name} {...item} mobile onClick={onItemClick} />
      ))}
    </div>
  </div>
);

MobileMenu.Button = MobileMenuButton;

export default MobileMenu;