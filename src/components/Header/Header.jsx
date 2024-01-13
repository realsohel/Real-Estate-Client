import React from 'react'
// import {logo} from "./logo.png"
// import {Link} from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <section className='h-wrapper'>
            <div className="h-container flexCenter paddings innerWidth  ">
                <img src= "./logo.png" alt="" />

                <div className="h-menu flexCenter">                    
                    <a href="/residencies">Residencies</a>
                    <a href="/ourvalues">Our Values</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/getstarted">Get Started</a>
                    <button className='button'>
                        <a href="">Contact</a>
                    </button>
                    {/* <Link to="/residencies">Residencies</Link>
                    <Link to="/ourvalues">Our Values</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/getstarted">Get Started</Link> */}
                </div>
            </div>
        </section>
    )
}

export default Header
