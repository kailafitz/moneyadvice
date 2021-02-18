import React, { useState } from 'react';
import { MenuToggle } from './MenuToggle';
import LoginModal from './LoginModal';

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="f-MobileMenu">
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <div id="f-MobileLinksWrapper">
          <a href="/home">
            Home
          </a>
          <a href="/features">
            Features
          </a>
          <a href="/about">
            About
          </a>
          <a href="/contactus">
            Contact Us
          </a>
          <LoginModal />
        </div> 
      )}
    </div>
  )
}
export default MobileMenu;