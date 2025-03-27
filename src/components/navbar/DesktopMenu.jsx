import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const DesktopMenu = ({ items }) => {
  const [activeLink, setActiveLink] = useState(null); // Track active link

  const handleLinkClick = (name) => {
    setActiveLink(name); // Set the clicked link as active
    console.log("active tab"+name)
  };
  return(
    <div className="hidden md:block">
    <div className="ml-10 flex items-center space-x-4">
      {items.map((item) => (
         <NavLink
         key={item.name}
         {...item}         
         onClick={() => handleLinkClick(item.name)} // Handle click to set active link
         isActive={activeLink === item.name} // Pass active state to NavLink
       />
      ))}
    </div>
  </div>
  )
 
};

export default DesktopMenu;