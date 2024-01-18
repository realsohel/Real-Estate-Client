import React from 'react'
import './Residencies.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import SliderButtons from './SliderButtons'

const Residencies = () => {
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
                        data.map((card,i)=>{
                            return (
                                <SwiperSlide key={i}>
                                    <div className="flexColStart r-card">

                                        <img src={card.image} alt="" />
                                        <span className="secondaryText r-price">
                                            <span style={{color:'orange'}}>$</span>
                                            <span>{card.price}</span>
                                        </span>

                                        <span className='primaryText'>{card.name}</span>
                                        <span className='secondaryText'>{card.detail}</span>
                                    </div>

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


