import React from 'react'
import './Residencies.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
// import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import SliderButtons from './SliderButtons'
import ResidencyCard from './ResidencyCard'
import useProperties from '../../hooks/useProperties'
import { PuffLoader } from 'react-spinners'

const Residencies = () => {
    const {data,isError,isLoading} = useProperties()
    
    if(isError){
        return (
        <div>
            <div className="wrapper">
                <span>Error while fetching the data.</span>
            </div>
        </div>
    )}

    if(isLoading){
        return(
            <div>
                <div className="wrapper flexCenter" style={{height:"60vh"}}>
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
        <section className="r-wrapper">
            <div className="paddings innerWidth  r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {
                        data.slice(0,9).map((card,i)=>{
                            return (
                                <SwiperSlide key={i}>
                                    <ResidencyCard card={card}/>

                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies


