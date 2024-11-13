import React, { useEffect, useState } from 'react';
import image1 from '../../assets/1e8674ca-9bad-49b2-9c92-9618d9d73bff.webp';
import image2 from '../../assets/fullscreen/branding.jpg';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { HiArrowNarrowRight } from 'react-icons/hi';
import shoe1 from '../../assets/shoe1.jpg';
import shoe2 from '../../assets/shoe2.jpg';
import shoe3 from '../../assets/shoe3.jpg';
import shoe4 from '../../assets/shoe4.jpg';
import shoe5 from '../../assets/shoe5.jpg';

const Header = () => {
  const [windowDimension, setWindowDimension] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  const shoeOptions = [
    { image: shoe5, name: 'Air Max 270' },
    { image: shoe3, name: 'Air Max 95' },
    { image: shoe1, name: 'Air Max 97' },
    { image: shoe4, name: 'Air Max Plus' },
    { image: shoe2, name: 'Air Max 90' },
  ];

  const handleScroll = (direction) => {
    const container = document.querySelector('.scroll-container');
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimension]);

  return (
    <header>
      <div className='px-5 w-full border-2 border-red-500 md:px-12'>
        <div className='first mb-32 md:mb-12'>
          {windowDimension.winWidth > 768 ? (
            <img className='w-full' src={image2} alt='' />
          ) : (
            <img src={image1} alt='' />
          )}
          <div className='first-text text-left md:text-center'>
            <p className='mt-7'>Air Max 1</p>
            <h1 className='text-bolder md:text-bolder-md'>No Genres</h1>
            <h1 className='text-bolder md:text-bolder-md'>All Soul</h1>
            <button className='shop-button mt-12'>Shop All</button>
          </div>
        </div>
        <div className='second border-2 border-green-400'>
          <div className='text-left flex justify-between items-center border-2 border-purple-500'>
            <p className='text-lg px-2 py-7'>Air Max Collection</p>
            <div className='slide-buttons md:flex hidden'>
              <div className='border-2 border-black rounded-full h-5 w-5 m-2'>
                <HiArrowNarrowLeft onClick={() => handleScroll('left')} />
              </div>
              <div className='border-2 border-black rounded-full h-5 w-5 m-2'>
                <HiArrowNarrowRight onClick={() => handleScroll('right')} />
              </div>
            </div>
          </div>
          <div className='scroll-container scroll-smooth flex flex-row overflow-x-auto'>
            {shoeOptions.map((shoe) => (
              <div className='mx-2'>
                <img
                  className='max-w-[70vw] md:max-w-[30vw]'
                  src={shoe.image}
                  alt=''
                />
                <p className='text-lg px-2 py-7 '>{shoe.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
