import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const NavLink = ({ name, href, special, mobile, onClick, isActive }) => {
 // const [isActive, setIsActive] = useState(false);
  const baseClasses = mobile
    ? "block px-3 py-2 rounded-md text-base font-medium w-full text-left"
    : "px-3 py-2 rounded-md text-sm font-medium";

  const specialClasses = special === 'primary'
    ? "bg-indigo-600 hover:bg-indigo-700"
    : special === 'secondary'
    ? "border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white"
    : "text-gray-300 hover:text-white";

  const isExternal = href.startsWith('http');
  const isHashLink = href.startsWith('#');
  const activeClasses = isActive
  ? "text-indigo-600 font-medium" // Example active styles
  : "";
  const handleClick = (e) => {
    onClick(); // Call the parent click handler
  };
  
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${specialClasses} ${activeClasses} transition-colors`}
        onClick={handleClick}
      >
        {name}
      </a>
    );
  }

  if (isHashLink) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${specialClasses} ${activeClasses} transition-colors`}
        onClick={(e) => {
          e.preventDefault();
          const targetId = href.substring(1);
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
          handleClick(e);
        }}
      >
        {name}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={`${baseClasses} ${specialClasses} ${activeClasses} transition-colors`}
      onClick={handleClick}
    >
      {name}
    </Link>
  );
};

export default NavLink;