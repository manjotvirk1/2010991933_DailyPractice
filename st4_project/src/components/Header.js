import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Header.css'
import image from '../images/images.jpg'
import Navbar from './Navbar'

const Header=()=>{
    return(
        <header>
            <NavLink to='/'>
                <img src={image} alt="logo" className='logo'/>
            </NavLink>
            <Navbar />
            
        </header>
    )
}

export default Header;


// https://codepen.io/piyushpd139/pen/gOYvZPG