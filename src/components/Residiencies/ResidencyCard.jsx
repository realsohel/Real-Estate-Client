import React from 'react'
import "./ResidencyCard.css"
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash'
import { useNavigate } from 'react-router-dom'

const ResidencyCard = ({card}) => {

    const navgate = useNavigate();
    return (
        <div className="flexColStart r-card"
            onClick={()=>{navgate(`../properties/${card.id}`)}}    
        >
            
            <AiFillHeart size={24} color='white'/>
            <img src={card.image} alt="" />
            <span className="secondaryText r-price">
                <span style={{color:'orange'}}>$</span>
                <span>{card.price}</span>
            </span>

            <span className='primaryText'>{truncate(card.title,{length:20})}</span>
            <span className='secondaryText'>{truncate(card.description,{length:90})}</span>
        </div>
    ) 
}

export default ResidencyCard
