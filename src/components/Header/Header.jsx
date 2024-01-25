import React, { useState } from 'react'
import "./Header.css"
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
    const [menuOpened,setMenuOpened] = useState(false);

    const getMenuStyle = (menuOpened)=>{
        if(document.documentElement.clientWidth<=819){
            return{
                right: !menuOpened && "-100%"
            }
        }
    }

    return (
        <section className='h-wrapper'>
            <div className="h-container flexCenter paddings innerWidth  ">
                <img src= "./logo.png" alt="" />
                
                <OutsideClickHandler
                    onOutsideClick={()=>setMenuOpened(false)}
                >
                    <div className="flexCenter h-menu " 
                        style={getMenuStyle(menuOpened)}
                    >                    
                        <a href="/residencies">Residencies</a>
                        <a href="/ourvalues">Our Values</a>
                        <a href="/contact">Contact Us</a>
                        <a href="/getstarted">Get Started</a>
                        <button className='button'>
                            <a href="">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                    <BiMenuAltRight size={30}/>
                </div>
            </div>

        </section>
    )
}

export default Header
