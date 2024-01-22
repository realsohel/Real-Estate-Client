import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                
                {/* Left*/}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={120}/>
                    <span className="secondaryText">
                    I advise women to invest in real estate. It is the collateral to <br/> be preferred above all others, and the safest means of <br/> investing money.
                    {/* <br/>Home is the starting place of love, <br/>hope, and dreams.  */}
                    </span>

                    <span className='orangeText '>Follow us on :</span>
                    <div className="flexCenter f-follow">
                        <span className='icon'>
                            <a href="https://www.facebook.com/sohail.salmani.3975" target='__blank'>
                                <FaFacebookF size={20} color='black'/>
                            </a>
                        </span>

                        <span className='icon'>
                            <a href="" target='__blank'>
                                <FaInstagram size={20} color='black'/>
                            </a>
                        </span>
                        <span className='icon'>
                            <a href="" target='__blank'>
                                <RiTwitterXLine size={20} color='black'/>
                            </a>
                        </span>
                        <span className='icon'>
                            <a href="" target='__blank'>
                                <FaLinkedinIn size={20} color='black'/>
                            </a>
                        </span>
                        <span className='icon'>
                            <a href="" target='__blank'>
                                <FaGithub size={20} color='black'/>
                            </a>
                        </span>
                        
                        
                        
                    </div>
                </div>

                {/* Rght*/}
                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>  A/103,Star Heights, Santacruz, Mumbai</span>
                    
                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Products</span>
                        <span>About Us</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Footer
