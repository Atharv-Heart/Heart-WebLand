import React, { useState, useEffect } from 'react';
import '..//index.css';
import GopuramR from '../assets/Gopuram MR.png';
import GopuramB from '../assets/Gopuram broken.jpeg';
import ChariotR from '../assets/Chariot MR.png';
import ChariotB from '../assets/Stone Chariot broken.jpeg';
import VishnuB from '../assets/Vishnu Murti broken.jpeg';
import VishnuR from '../assets/Vishnu MR.png';
// import Mobileimg from '../assets/Mobile black.png';
import Atharv from '../assets/AtharvIntro.png';
// import Back from '../assets/left.png';
// import Next from '../assets/right.png';


const carouselR = [GopuramR, ChariotR, VishnuR];
const carouselB = [GopuramB, ChariotB, VishnuB];
const history = ["Prachya Gopuram of the Vittala Temple, Hampi constructed by Rani Chinnadevi and Rani Tirumaladevi, the queens of Maharaja Krishnadevaraya between 1513 and 1516.", "Moveable Stone Chariot, Vittala Temple, Hampi built by King Krishnadevaraya of the Vijayanagara Empire in the 16th century.", "Garuda Vahana Vishnu Murti, Prachya Gopuram of Chidambaram Nataraja Temple, constucted by Cholas in 10th century & later repaired and expnaded by Pandayas in 12th and 13th century."]

const Mobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const handleAutoPlay = () => {
    if (isAutoPlay) {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselR.length);
      }, 3000);

      return () => clearInterval(timer);
    }
  };

  useEffect(handleAutoPlay, [activeIndex, isAutoPlay]);

  const onClick = () => {
    setIsAutoPlay(false);
  };


  // const onNextClick = () => {
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % carouselR.length);
  //   onClick();
  // };

  // const onBackClick = () => {
  //   setActiveIndex((prevIndex) => (prevIndex - 1 + carouselR.length) % carouselR.length);
  //   onClick();
  // };

  return (
    <div>

      {/* Large & medium screens*/}
     
      <div className="w-screen h-screen flex bg-white relative hidden lg:flex">
        {/* App view */}
        <div className="w-1/2 relative">

          <img src={carouselB[activeIndex]} alt="Broken" className="w-full h-full object-cover transition-transform duration-500 " style={{ zIndex: 1 }} />
          <p className='w-full pb-6 absolute inset-0 flex items-end text-center justify-center text-white font-semibold italic' style={{ zIndex: 2 }}><span className='bg-black bg-opacity-30 text-base mx-1'>{history[activeIndex]}</span></p>

          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }} >

            <img src={carouselR[activeIndex]} alt="Restored" className="absolute transition-transform duration-500" />
            {/* <img src={Mobileimg} alt="Mobile" className="relative " style={{ zIndex: 3 }} /> */}

            {/* <button onClick={onBackClick}>
              <img src={Back} alt='back' className="w-30 h-20 py-2 px-4 absolute left-0 top-1/2 transform -translate-y-1/2" />
            </button>
            <button onClick={onNextClick}>
              <img src={Next} alt='next' className="w-30 h-20 py-2 px-4 absolute right-0 top-1/2 transform -translate-y-1/2" />
            </button> */}
          </div>
        </div>

        {/* Download */}
        <div className="w-1/2 bg-white flex items-center justify-center">
          <div className="w-2/3 h-1/2 p-4 rounded-lg">
            <img src={Atharv} alt="Atharv" className="w-1/4" />
            <h1 className="py-4 text-5xl text-black font-bold">Step into the past and resurrect history</h1>
            <p className="pb-4 text-lg text-black text-justify">
              An AR app that tells the enriching tales of the past and brings ancient ruins back to life, revealing the secrets of a bygone era.
            </p>
            <button className="bg-yellow rounded-lg text-white text-lg font-bold mt-4 p-3" onClick={onClick}>
              Download App
            </button>
          </div>
        </div>
      </div>

      {/* Small screens */}
      <div className="w-screen h-screen flex flex-col bg-white relative lg:hidden block">
        {/* App view */}
        <div className="w-screen h-1/2 relative">

          <img src={carouselB[activeIndex]} alt="Broken" className="w-full h-full object-cover transition-transform duration-500 " style={{ zIndex: 1 }} />
          
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }} >
            <img src={carouselR[activeIndex]} alt="Restored" className="h-5/6 absolute transition-transform duration-500" />
            <p className='w-full pb-3 absolute inset-0 flex items-end text-center justify-center text-xs md:text-lg text-white font-semibold italic' style={{ zIndex: 2 }}><span className='bg-black bg-opacity-30'>{history[activeIndex]}</span></p>

          </div>
        </div>

        {/* Download */}
        <div className="w-full bg-white flex py-20 items-center justify-center">
          <div className="w-2/3 rounded-lg">
            <img src={Atharv} alt="Atharv" className="w-1/3 md:w-1/4" />
            <h1 className="py-4 text-3xl md:text-5xl text-black font-bold">Step into the past and resurrect history</h1>
            <p className="pb-4 text-black text-xs md:text-base text-justify">
              An AR app that tells the enriching tales of the past and brings ancient ruins back to life, revealing the secrets of a bygone era.
            </p>
            <button className="bg-yellow rounded-lg text-white text-sm md:text-lg font-bold p-3" onClick={onClick}>
              Download App
            </button>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Mobile;
