import React from 'react';
import istockphotoOne from '../Assets/istockphoto.jpg';
import istockphotoTwo from '../Assets/istockphoto-two.jpg';
import istockphotoThree from '../Assets/istockphoto-three.jpg';
import istockphotoFour from '../Assets/istockphoto-four.jpg';
import untouchedPhoto from '../Assets/untouched-tropical-beach.webp';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
       <h1>All-Inclusive Resorts</h1>
       <p className='py-4'>On the Caribbean's Best Beaches</p>
       <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
          <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={istockphotoOne} alt="" />
          <img className='w-full h-full object-cover' src={istockphotoTwo} alt="" />
          <img className='w-full h-full object-cover' src={istockphotoThree} alt="" />
          <img className='w-full h-full object-cover' src={istockphotoFour} alt="" />
          <img className='w-full h-full object-cover' src={untouchedPhoto} alt="" />
       </div>
    </div>
  )
}

export default Destinations