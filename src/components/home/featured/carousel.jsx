import React, { useState, useEffect, useRef } from 'react';
import Texts from './texts'; 
import TextThree from './textThree';
import TextFour from './textFour';

import slideOne from '../../../Resources/images/slide_one.png';
import slideTwo from '../../../Resources/images/slide_two.png';
import slideThree from '../../../Resources/images/slide_three.jpg';
import slideFour from '../../../Resources/images/slide_four.jpg';

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: slideOne, alt: 'Slide 1', animation: <Texts /> },
    { image: slideTwo, alt: 'Slide 2', animation: <TextThree /> },
    { image: slideThree, alt: 'Slide 3', animation: <TextFour/> },
    { image: slideFour, alt: 'Slide 4', animation: null },
    // { image: slideFive, alt: 'Slide 5', animation: null },
    // { image: slideSix, alt: 'Slide 6', animation: null },
    // { image: slideSeven, alt: 'Slide 7', animation: null },
    // { image: slideEight, alt: 'Slide 8', animation: null }
  ];

  const slideRef = useRef(null);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextSlide, 5000); // Autoplay every 5 seconds
    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`; // Adjust width as needed
    }
  }, [currentSlide]);

  return (
    <div className='carrousel_wrapper'>
      <div className='carousel_container' ref={slideRef}>
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.alt} />
            {currentSlide === index && (
              <div className='animation-container'>
                {slide.animation}
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={handlePrevSlide}>Prev</button>
      <button onClick={handleNextSlide}>Next</button>
    </div>
  );
};

export default Carrousel;

