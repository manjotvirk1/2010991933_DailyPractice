import React from "react";
import './style.css'

export default function Navbar(){
    return(
        <nav>
            <img src="images/1.jpg" className="nav--icon"/>
            <h3 className="nav--logo">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}