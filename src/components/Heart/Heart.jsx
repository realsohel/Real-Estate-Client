import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import useAuthCheck from '../../hooks/useAuthCheck';
import { useMutation } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import UserDetailsContext from '../../context/userDetailsContext';
import { toFav } from '../../utils/api';
import { checkFavourites, updatefavourites } from '../../utils/common';

const Heart = ({id}) => {

    const [heartColor,setHeartColor] = useState("white");
    const {validateUser} = useAuthCheck()
    const {user} = useAuth0()

    const{userDetails:{token, favourites}, setUserDetails} =useContext(UserDetailsContext); 

    useEffect(()=>{
        setHeartColor(()=>checkFavourites(id,favourites))
    },[favourites])
    const {mutate} = useMutation({
        mutationFn: ()=>toFav(id,user?.email,token),
        onSuccess:()=>{
            setUserDetails((prev)=>({
                ...prev,
                favourites: updatefavourites(id,prev.favourites)
            }))
        }
    })
    const handleLike = ()=>{
        if(validateUser){
            mutate()
            setHeartColor(
                (prev)=> prev==='#fa3e5f'?"white":"#fa3e5f"
            )
            console.log(favourites)
        }
    }
    return (
        <AiFillHeart size={24} color={heartColor} onClick={(e)=>{
            e.stopPropagation();
            handleLike()
        }}/>
    )
}

export default Heart
