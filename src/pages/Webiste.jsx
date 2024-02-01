import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Companies from '../components/Companies/Companies'
import Residencies from '../components/Residiencies/Residencies'
import Value from '../components/Value/Value'
import Contact from '../components/Contact/Contact'
import GetStarted from '../components/GetStarted/GetStarted'
import Footer from '../components/Footer/Footer'

const Webiste = () => {
    return (
        <div className="app"> 
        <div>
            <div className="white-gradient" />
            {/* <Header/> */}
            <Hero/>
        </div>
        <Companies/>
        <Residencies/>
        <Value/>
        <Contact/>
        <GetStarted/>
        {/* <Footer/> */}
        </div>
    )
}

export default Webiste