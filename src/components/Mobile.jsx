import React, { useState, useEffect } from 'react';
import '..//index.css';
import GopuramR from '../assets/Gopuram restored.jpeg';
import GopuramB from '../assets/Gopuram broken.jpeg';
import ChariotR from '../assets/Stone Chariot restored.jpeg';
import ChariotB from '../assets/Stone Chariot broken.jpeg';
import VishnuB from '../assets/Vishnu Murti broken.jpeg';
import VishnuR from '../assets/Vishnu Murti restored.jpeg';
import Mobileimg from '../assets/Mobile black.png';
import Atharv from '../assets/AtharvIntro.png';
import Back from '../assets/left.png';
import Next from '../assets/right.png';


const carouselR = [GopuramR, ChariotR, VishnuR];
const carouselB = [GopuramB, ChariotB, VishnuB];

const Mobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const handleAutoPlay = () => {
    if (isAutoPlay) {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselR.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  };

  useEffect(handleAutoPlay, [activeIndex, isAutoPlay]);

  const onClick = () => {
    setIsAutoPlay(false);
  };

  const onNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselR.length);
    onClick();
  };

  const onBackClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + carouselR.length) % carouselR.length);
    onClick();
  };

  return (
    <div className="w-screen h-screen flex bg-black relative">

      {/* App view */}
      <div className="w-1/2 relative">

        <img src={carouselB[activeIndex]} alt="Broken" className="w-full h-full object-cover transition-transform duration-500 " style={{ zIndex: 1 }} />

        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>

          <img src={carouselR[activeIndex]} alt="Restored" className="crop absolute transition-transform duration-500" />
          <img src={Mobileimg} alt="Mobile" className="w-1/2 relative" style={{ zIndex: 3 }} />

          <button onClick={onBackClick}>
            <img src={Back} alt='back' className="w-30 h-20 py-2 px-4 absolute left-0 top-1/2 transform -translate-y-1/2" />
          </button>
          <button onClick={onNextClick}>
            <img src={Next} alt='next' className="w-30 h-20 py-2 px-4 absolute right-0 top-1/2 transform -translate-y-1/2" />
          </button>
        </div>
      </div>

      {/* Download */}
      <div className="w-1/2 black flex items-center justify-center">
        <div className="w-2/3 h-1/2 p-4 rounded-lg">
          <img src={Atharv} alt="Atharv" className="w-1/4" />
          <h1 className="py-4 text-5xl text-white font-bold">Step into the past and resurrect history</h1>
          <p className="pb-4 text-white text-justify">
            An AR app that tells the enriching tales of the past and brings ancient ruins back to life, revealing the secrets of a bygone era.
          </p>
          <button className="bg-yellow rounded-lg text-white text-lg font-bold mt-4 p-3" onClick={onClick}>
            Download App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
