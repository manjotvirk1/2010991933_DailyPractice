import { NavLink } from "react-router-dom"
import React from "react"
import './Navbar.css'

const Navbar=()=>{
    return(
        <nav>
            <div className="menuIcon">
                <ul className="navbar-list">
                    <li>
                        <NavLink to='/' className="navbar-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className="navbar-link">About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className="navbar-link">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/userdata' className="navbar-link">UserData</NavLink>
                    </li>
                    <li>
                        <NavLink to='/register' className="navbar-link">Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;