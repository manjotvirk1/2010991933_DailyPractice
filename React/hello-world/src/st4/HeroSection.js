import React from "react";
import { NavLink } from "react-router-dom";
import ButtonReact from "./styles/ButtonReact";
import './HeroSection.css'

const HeroSection=({name,image,btnValue})=>{
    return(
        <>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className="hero-top-data">THIS IS ME</p>
                <h1 className="hero-heading">{name}</h1>
                <p className="hero-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam erat velit. Cursus sit amet dictum sit amet justo donec enim. Lacinia at quis risus sed. Fringilla est ullamcorper eget nulla facilisi. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Semper eget duis at tellus at urna condimentum mattis pellentesque. Nullam eget felis eget nunc. At elementum eu facilisis sed odio. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Amet massa vitae tortor condimentum lacinia quis.
                </p>
                <ButtonReact className="btn hireme-btn" val={btnValue}>
                    <NavLink to='/contact'>{btnValue}</NavLink>
                </ButtonReact>
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

export default HeroSection;