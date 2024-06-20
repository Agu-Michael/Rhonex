import React, { useEffect, useRef } from 'react';
import SussanOne from '../../../Resources/images/sussan_one.jpg';
import ChiOne from '../../../Resources/images/chi_one.jpeg';
import MicOne from '../../../Resources/images/mic_two.png';
import Card from '../../../components/home/Team/cards'

const Carousel = () => {
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const carouselRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  let runNextAuto = useRef(null);
  let runTimeOut = useRef(null);
  
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  useEffect(() => {
    const nextButton = nextRef.current;
    const prevButton = prevRef.current;

    const showSlider = (type) => {
      const sliderItems = sliderRef.current.querySelectorAll('.item');
      const thumbnailItems = thumbnailRef.current.querySelectorAll('.item');

      if (type === 'next') {
        sliderRef.current.appendChild(sliderItems[0]);
        thumbnailRef.current.appendChild(thumbnailItems[0]);
        carouselRef.current.classList.add('next');
      } else {
        sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
        thumbnailRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
        carouselRef.current.classList.add('prev');
      }

      clearTimeout(runTimeOut.current);
      runTimeOut.current = setTimeout(() => {
        carouselRef.current.classList.remove('next');
        carouselRef.current.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto.current);
      runNextAuto.current = setTimeout(() => {
        nextButton.click();
      }, timeAutoNext);
    };

    nextButton.onclick = () => showSlider('next');
    prevButton.onclick = () => showSlider('prev');

    runNextAuto.current = setTimeout(() => {
      nextButton.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAuto.current);
      clearTimeout(runTimeOut.current);
    };
  }, []);

  return (
    <div>
      <div><Card/></div>
      <div className="teamCarousel" ref={carouselRef}>
      <div className="list" ref={sliderRef}>
        <div className="item">
          <img src={SussanOne} alt="img1" />
          <div className="content">
            <div className="author">DR. SUSSAN AGU</div>
            {/* <div className="title">TEAM</div> */}
            <div className="topic">MANAGING PARTNER</div>
            <div className="des">
            Sussan Oluchi Agu, our Managing Partner, is a distinguished leader with over two decades of legal expertise, renowned for her strategic brilliance and courtroom excellence. Committed to fostering a culture of integrity and innovation, Sussan ensures our clients receive unparalleled legal representation and support. 






            </div>
            <div className="buttons">
              <button>CONTACT US</button>
              {/* <button>SUBSCRIBE</button> */}
            </div>
          </div>
        </div>
        <div className="item">
          <img src={ChiOne} alt="img1" />
          <div className="content">
            <div className="author">SUSAN C. AGU (ESQ.)</div>
            {/* <div className="title"></div> */}
            <div className="topic">PARTNER</div>
            <div className="des">
            As a dedicated Partner at our firm, Susan Chidimma Agu brings extensive legal expertise and a strong commitment to client success. Known for her strategic insight and unwavering integrity, Susan consistently delivers exceptional legal solutions and support.
            </div>
            <div className="buttons">
              <button>CONTACT US</button>
              {/* <button>SUBSCRIBE</button> */}
            </div>
          </div>
        </div>
        <div className="item">
          <img src={MicOne} alt="img1" />
          <div className="content">
            <div className="author">MICHAEL C. AGU</div>
            {/* <div className="title">TEAM</div> */}
            <div className="topic">TECH. SUPPORT</div>
            <div className="des">
            Michael Agu is a valued tech support member at your legal firm. He is known for his technical knowledge, communication skills, and friendly demeanor. Clients appreciate his proactive approach and dedication to helping them succeed.
            </div>
            <div className="buttons">
              <button>CONTACT US</button>
              {/* <button>SUBSCRIBE</button> */}
            </div>
          </div>
        </div>
        
        {/* Add other items similarly */}
      </div>
      <div className="thumbnail" ref={thumbnailRef}>
        <div className="item">
          <img src={SussanOne} alt="img1" />
          <div className="content">
            <div className="title">Dr. Sussan Agu</div>
            <div className="description">Managing Partner</div>
          </div>
        </div>
        <div className="item">
          <img src={ChiOne} alt="img1" />
          <div className="content">
            <div className="title">Susan C. Agu (Esq)</div>
            <div className="description">Partner</div>
          </div>
        </div>
        <div className="item">
          <img src={MicOne} alt="img1" />
          <div className="content">
            <div className="title">Michael Agu</div>
            <div className="description">Tech. Support</div>
          </div>
        </div>
        {/* Add other items similarly */}
      </div>
      <div className="arrows">
        <button id="prev" ref={prevRef}>{'<'}</button>
        <button id="next" ref={nextRef}>{'>'}</button>
      </div>
      <div className="time"></div>
    </div>
    </div>
    
  );
};

export default Carousel;
