import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    return (
        <div id="f-NavBar">
            <nav>
                <div>
                </div>
                <div>
                    {/* <a><i class="fas fa-bars"></i></a> */}
                    <NavLink activeClassName="is-active" to="/home">
                        Home
                    </NavLink>
                    <NavLink activeClassName="is-active" to="/about">
                        About
                    </NavLink>
                </div>
            </nav>            
        </div>
    )
}

export default Navbar
