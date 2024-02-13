import React, { useEffect, useState } from 'react'
import "./Header.css"
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import {Link, NavLink} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
// import ProfileMenu from '../ProfileMenu/ProfileMenu'

const Header = () => {
    const [menuOpened,setMenuOpened] = useState(false);
    const {loginWithRedirect,isAuthenticated,user,logout} = useAuth0()
    
    // user?console.log(user):"";
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

                        {
                            !isAuthenticated ?
                            <button className="button" onClick={loginWithRedirect}>
                                Login
                            </button>:
                            (<img src={user?.picture} alt='user img' style={{height:"2.5rem",borderRadius:'50%'}} 
                                onClick={()=>{
                                    localStorage.clear();
                                    logout()
                                }}
                            />)
                        }
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
