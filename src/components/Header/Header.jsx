import React, { useEffect, useState } from 'react'
import "./Header.css"
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
    const [menuOpened,setMenuOpened] = useState(false);
    const getMenuStyle = (menuOpened)=>{
        if(document.documentElement.clientWidth<=819){
            return{
                right: !menuOpened && "-100%"
            }
        }
    }
    useEffect(()=>{ 
        getMenuStyle(menuOpened);
    },[menuOpened])


    return (
        <section className='h-wrapper'>
            <div className="h-container flexCenter paddings innerWidth  ">
                <Link to="/">
                    <img src= "./logo.png" alt="" />
                </Link>
                
                <OutsideClickHandler
                    onOutsideClick={()=>setMenuOpened(false)}
                >
                    <div className="flexCenter h-menu " 
                        style={getMenuStyle(menuOpened)}
                    >   
                        <NavLink to='/properties'>Properties</NavLink>
                        <a href="mailto:salmanisohail26@gmail.com" target='__blank'>Contact</a>

                        <button className="button">
                            Login
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
