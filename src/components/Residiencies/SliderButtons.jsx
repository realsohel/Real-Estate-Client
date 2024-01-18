import React from 'react'
import {useSwiper} from 'swiper/react'
import './Residencies.css'
const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexRowStart r-buttons">
            <button onClick={()=>{swiper.slidePrev()}}>
                &lt;
            </button>
            <button onClick={()=>{swiper.slideNext()}}>
                &gt;
            </button>
        </div>
    )
}

export default SliderButtons
