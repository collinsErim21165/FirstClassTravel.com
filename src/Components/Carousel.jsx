import React, {useState} from 'react';
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs';

const sliderData = [
    {
        url: 'https://media.istockphoto.com/id/670761990/photo/coconut-trees-and-turquoise-indian-ocean.jpg?s=612x612&w=0&k=20&c=GvAl8rtbUToKA0ZnnPZbd2qHp9utSKyIgHawBA3GyMM=',
    },
    {
        url: 'https://media.istockphoto.com/id/1902308204/photo/serene-beach-scene-with-palm-trees-and-calm-ocean-waves-in-hikkaduwa.jpg?s=612x612&w=0&k=20&c=Nd4zvT8XruzczSWYdPc-nbwAzXdGUACo0a8tq9tGuqg='
    },
    {
        url: 'https://media.istockphoto.com/id/908686644/photo/sunset-brings-fire-and-light-to-the-island-of-kauai-hawaii.jpg?s=612x612&w=0&k=20&c=7S2qesSBgbGX3BE6FWFzptTgj16bm1GACOQVL2dtGcY='
    },
];

const Carousel = () => {

    const [slide, setSlide] = useState(0);
    const length = sliderData.length;
    // console.log(length)

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1  );
    };
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1 );
    };

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center w-full' >
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>
       {sliderData.map((item, index) => (
           <div className={index === slide ? '0pacity-100' : 'opacity-0'}>
             {index === slide && ( 
             <img className='w-screen h-[480px] rounded-md' src={item.url} alt="/" />
             )}
           </div>
       ))}
    </div>
  )
}

export default Carousel;