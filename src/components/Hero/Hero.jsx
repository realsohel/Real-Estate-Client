import React from 'react'
import {HiLocationMarker} from "react-icons/hi"
import  CountUp from 'react-countup'
import "./Hero.css"
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                
                {/* Left Side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"/>
                        <h1>A home <br/>is a place to <br/>start your story.</h1>
                    </div>
                    <div className="flexColStart secondaryText hero-des">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, itaque!</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color='var(--blue)' size={25} />
                        <input type="text" placeholder='Search here'/>
                        <button className="button">Search</button>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={750} end={999} duration={5}/> 
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Producs</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={250} end={500} duration={5}/> 
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp  end={40} duration={6}/> 
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winnings</span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image1.png" alt="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
