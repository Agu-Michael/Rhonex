import React from 'react';
import Carousel from '../components/home/featured/carousel'
const CarouselWrapper =({carouselImages, animationSettings})=>{
    return(
        <div className='carousel_with_animation'>
            <Carousel images={carouselImages}/>
            <Text animationSettings={animationSettings}/>
        </div>
    )
}
export default CarouselWrapper;