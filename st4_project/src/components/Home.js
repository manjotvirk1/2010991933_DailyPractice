import '../styles/Home.css';
import React from 'react';
import image from '../images/1.webp'
import { NavLink } from 'react-router-dom';
import '../styles/Home.css'

const Home=()=>{
    return(
        <>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <h1 className="hero-heading">LOREM IPSUM</h1>
                <p className="hero-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam erat velit. Cursus sit amet dictum sit amet justo donec enim. Lacinia at quis risus sed. Fringilla est ullamcorper eget nulla facilisi. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Semper eget duis at tellus at urna condimentum mattis pellentesque. Nullam eget felis eget nunc. At elementum eu facilisis sed odio. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Amet massa vitae tortor condimentum lacinia quis.
                </p>
                <button className="btn hireme-btn">
                    <NavLink to='/register' className="hireme">Get started</NavLink>
                </button>
            </div>
            
            <div className="section-hero-image">
                <picture>
                    <img src={image} alt="" className="hero-img" />
                </picture>
            </div>
        </div>
        </>
    )
}

export default Home;