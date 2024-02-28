import React, { useContext, useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useLocation } from 'react-router-dom';
import { getProperty, removeBooking } from '../../utils/api';
import { PuffLoader } from 'react-spinners';
import { FaBed, FaCar, FaShower} from 'react-icons/fa'
import {MdLocationPin} from "react-icons/md"
import "./Property.css";
import Map from '../../components/Map/Map';
import useAuthCheck from '../../hooks/useAuthCheck';
import { useAuth0 } from '@auth0/auth0-react';
import BookingModal from '../../components/BookingModal/BookingModal.jsx';
import UserDetailsContext from '../../context/userDetailsContext.js';
import { Button } from '@mui/material';
import Heart from '../../components/Heart/Heart.jsx';

const Property = () => {
    const {pathname} = useLocation();
    const id  = pathname.split('/').slice(-1)[0];
    const {data,isError,isLoading} = useQuery(["residency",id],()=>getProperty(id));
    const {user,isAuthenticated} = useAuth0();
    const [modalOpened,setModalOpened] = useState(false);
    const {validateUser} = useAuthCheck();

    const{userDetails:{token, bookings}, setUserDetails} =useContext(UserDetailsContext);
    // console.log(id);
    const {mutate:cancelBooking, isLoading:cancelling} = useMutation({
        mutationFn:()=>removeBooking(id,user?.email,token),
        onSuccess:()=>{
            setUserDetails((prev)=>({
                ...prev,
                bookings: prev.bookings.filter((booking)=>booking.id!==id)
            }))
        }
    })
    
    if(isError){
        return (
        <div>
            <div className="flexCenter paddings">
                <span>Error while fetching the data.</span>
            </div>
        </div>
    )}

    if(isLoading){
        return(
            <div>
                <div className="wrapper flexCenter paddings" style={{height:"60vh"}}>
                    <PuffLoader
                        height="80"
                        width="80"
                        radius={1}
                        color='#4066ff'
                        aria-label='puff-loading'
                    />
                </div>
            </div>
        )
    }

    return (
        <section className="pr-wrapper">
            <div className="flexColStart paddings innerWidth pr-container">
                <div className="like">
                    <Heart id={id}/>
                </div>
                <img src={data[0]?.image} alt="House img" />
                
                <div className="flexCenter pr-details">

                    <div className="flexColStart left">
                        <div className="flexStart head">
                            <span className='primaryText'>{data[0]?.title}</span>
                            <span className='orangeText'style={{fontSize:"1.5rem"}}> ₹ {data[0]?.price}</span>
                        </div>

                        {/* Facilities */}
                        <div className="flexStart facilities">
                            <div className="flexStart facility">
                                <FaShower size={20} color='#1F3E72'/>
                                <span className='secondaryText'>{data[0]?.facilities?.bathrooms} Bathrooms</span>
                            </div>
                            <div className="flexStart facility">
                                <FaBed size={20} color='#1F3E72'/>
                                <span className='secondaryText'>{data[0]?.facilities?.bedrooms} Bedrooms</span>
                            </div>

                            <div className="flexStart facility">
                                <FaCar size={20} color='#1F3E72'/>
                                <span className='secondaryText'>{data[0]?.facilities?.parking} Parkings</span>
                            </div>
                            
                        </div>

                        {/* Description */}
                        <span className='secondaryText desc' style={{textAlign:"justify"}}>
                            {data[0]?.description}
                        </span>
                        
                        {/* Address */}
                        <div className="flexStart address">
                            <MdLocationPin size={25} color='#1F3E72'/>
                            <span className='flexStart ' style={{gap:"0.4rem"}}>
                                <span>{data[0]?.address},</span>
                                <span>{data[0]?.city},</span>
                                <span>{data[0]?.country}.</span>
                            </span>
                        </div>

                        {/* button */}
                        {bookings?.map((booking)=> booking.id).includes(id)?(
                            <>
                            <Button  
                                variant='outlined'
                                w={"100%"}
                                color="error"
                                onClick={()=>{
                                    cancelBooking()
                                }}
                                disabled={cancelling}
                            >
                                <span>Cancel Booking</span>
                            </Button>
                            <span>
                                Your visit already booked for date:  
                                { bookings?.filter((booking)=>booking?.id===id)[0].date}
                            </span>
                            </>
                            
                            ):
                            <button 
                            className="button"
                            onClick={()=>{
                                validateUser() && setModalOpened(true);
                            }}
                        >
                            Book your visit
                            </button>
                        }

                        <BookingModal 
                            opened={modalOpened} setOpened={setModalOpened} 
                            propertyId={id} email={user?.email}
                        />
                    </div>

                    <div className="right-map">
                        <Map 
                            address={data[0]?.address} 
                            city={data[0]?.city} 
                            country={data[0]?.country}
                        /> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Property
