import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide_one from '../../../Resources/images/slideOne.jpg';
import slide_two from '../../../Resources/images/slideTwo.jpg';
import slide_three from '../../../Resources/images/slideThree.jpg';
import slide_four from '../../../Resources/images/slideFour.jpg';
import slide_five from '../../../Resources/images/slideFive.jpg';
import slide_six from '../../../Resources/images/slideSix.jpg';

const Carrousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        maxHeight: '100%',
        display: 'block',
        margin: '0 auto',
    };

    return (
        <div className='carrousel_wrapper'>
            <Slider {...settings}>
                <div>
                    <img src={slide_one} alt="Slide 1" style={imageStyle} />
                </div>
                <div>
                    <img src={slide_two} alt="Slide 2" style={imageStyle} />
                </div>
                <div>
                    <img src={slide_three} alt="Slide 3" style={imageStyle} />
                </div>
                <div>
                    <img src={slide_four} alt="Slide 4" style={imageStyle} />
                </div>
                <div>
                    <img src={slide_five} alt="Slide 5" style={imageStyle} />
                </div>
                <div>
                    <img src={slide_six} alt="Slide 6" style={imageStyle} />
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;
