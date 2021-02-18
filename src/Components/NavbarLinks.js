import React from 'react';
import { NavLink } from 'react-router-dom'
import LoginModal from './LoginModal';

export default function NavbarLinks() {

  return (
        <div id="f-NavBarLinkDiv">
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/" exact>
            Home
            </NavLink>
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/features" exact>
            Features
            </NavLink>
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/about" exact>
            About
            </NavLink>
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/contactus" exact>
            Contact Us
            </NavLink>
            <LoginModal />
        </div>
    )
}
