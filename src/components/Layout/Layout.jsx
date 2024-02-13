import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import UserDetailsContext from '../../context/userDetailsContext'
import { useMutation } from 'react-query'
import { createUser } from '../../utils/api'

const Layout = () => {
    const {isAuthenticated, user, getAccessTokenWithPopup} = useAuth0();
    const {setUserDetails} = useContext(UserDetailsContext);

    const {mutate} = useMutation({
        mutationKey:[user?.email],
        mutationFn: (token)=>createUser(user?.email, token),
    })

    useEffect(()=>{

        const getTokenAndRegister = async()=>{
            try{
                const audience = "http://localhost:5000";
                const res = await getAccessTokenWithPopup({
                    authorizationParams:{
                        audience,
                        scope: "openid profile email"
                    }
                })
                // console.log(res);
                localStorage.setItem("access_token",res);
                setUserDetails((prev)=>({...prev,token:res}));
    
                // console.log(res);
                mutate(res);
            }
            catch(err){
                console.log(err)
            }
            
        };

        isAuthenticated && getTokenAndRegister();
        
    },[isAuthenticated])
    return (
        <>
            <div>
                <Header/>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}

export default Layout
