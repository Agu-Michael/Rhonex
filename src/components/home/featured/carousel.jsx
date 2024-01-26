import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import FeaturedPlayer from '../../../Resources/images/objectThree.png';
import slide_one from '../../../Resources/images/slideOne.jpg';
import slide_two from '../../../Resources/images/slideTwo.jpg';
import slide_three from '../../../Resources/images/slideThree.jpg';

const TextAnimation = ({ text, x, y, delay }) => (
    <Animate
        show={true}
        start={{
            opacity: 0,
            x: 503,
            y: 450,
        }}
        enter={{
            opacity: [1],
            x: [x],
            y: [y],
            timing: { duration: 500, delay: delay, ease: easePolyOut },
        }}
    >
        {({ opacity, x, y }) => (
            <div
                className={`featured_text ${text.toLowerCase()}`}
                style={{
                    opacity,
                    transform: `translate(${x}px, ${y}px)`,
                }}
            >
                {text}
            </div>
        )}
    </Animate>
);

const Carousel = () => {
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
    };

    return (
        <div className='carrousel_wrapper'>
            <Slider {...settings}>
                <div>
                    <img src={slide_one} alt="Slide 1" style={imageStyle} />
                    <TextAnimation text="League" x={273} y={450} delay={0} />
                    <TextAnimation text="Championships" x={273} y={586} delay={300} />
                    {/* Add other text animations as needed for the first slide */}
                    {/* ... */}
                </div>
                <div>
                    <img src={slide_two} alt="Slide 2" style={imageStyle} />
                    {/* Text animations for the second slide */}
                    {/* ... */}
                </div>
                <div>
                    <img src={slide_three} alt="Slide 3" style={imageStyle} />
                    {/* Text animations for the third slide */}
                    {/* ... */}
                </div>
                {/* Add more slides with their respective text animations */}
            </Slider>
        </div>
    );
};

export default Carousel;
