import React from 'react';
import { NavLink } from 'react-router-dom'
import SimpleModal from './SimpleModal';


export default function NavbarLinks() {

  return (
        <div id="f-NavBarLinkDiv">
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/">
            Home
            </NavLink>
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/features">
            Features
            </NavLink>
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/about">
            About
            </NavLink>
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/contactus">
            Contact Us
            </NavLink>
            <SimpleModal />
        </div>
    )
}
