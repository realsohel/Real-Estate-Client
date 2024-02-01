import React from 'react'
import  CountUp from 'react-countup'
import "./Hero.css"
import {motion, spring} from 'framer-motion'
import SearchBar from '../SearchBar/SearchBar'
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                
                {/* Left Side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"/>
                        <motion.h1
                            initial={{y:"2rem",opacity:0}}
                            animate={{y:0,opacity:1}}
                            transition={{
                                duration:3,
                                type: "spring"
                            }}
                        >
                            A home <br/>is a place to <br/>start your story.
                        </motion.h1>
                    </div>
                    <div className="flexColStart secondaryText hero-des">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum.</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, itaque!</span>
                    </div>

                    <SearchBar/>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={750} end={999} duration={4}/> 
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Producs</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={250} end={500} duration={4}/> 
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
                    <motion.div
                        initial={{x:"7rem" , opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{
                            duration:3,
                            type:"spring"
                        }}
                    className="image-container">
                        <img src="./hero-image1.png" alt="hero-image" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
