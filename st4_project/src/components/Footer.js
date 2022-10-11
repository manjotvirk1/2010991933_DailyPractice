import React from "react";
import { NavLink } from "react-router-dom";
import {FaDiscord,FaInstagram,FaYoutube} from "react-icons/fa"
import '../styles/Footer.css'

const Footer=()=>{
    return(
        <>
        <section className="contact-short">
            <div className="grid grid-two-column">
                <div>
                <h3>Ready to get started</h3>
                <h3>Talk to us today</h3>
                </div>
                <div>
                    {/* <NavLink to='/'> */}
                        <button>Get Started</button>
                    {/* </NavLink> */}
                </div>
            </div>
        </section>
        <footer>
            <div className="container grid grid-four-column"> 
                <div className="footer-about">
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="footer-subscribe">
                    <h3>Subscribe to get important updates</h3>
                    <input 
                        type="email"
                        required
                        autoComplete="off"
                        placeholder="Email"
                    />
                    <input type="submit"
                        value="Subscribe"
                     />
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="footer-social--icons">
                        <div>
                            <FaDiscord className="icons"/>
                        </div>
                        <div>
                            <FaInstagram className="icons"/>
                        </div>
                        <div>
                            <a href="www.youtube.com" target="_blank">
                            <FaYoutube className="icons"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-contact">
                    <h3>Call Us</h3>
                    <h3>+91 123456789</h3>
                </div>
            </div>
            <div className="footer-bottom--section">
                <hr />
                <div className="container grid grid-two-column">
                    <p>
                        @{new Date().getFullYear()} Lorem Ipsum. All rights Reserved
                    </p>
                    <div>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;