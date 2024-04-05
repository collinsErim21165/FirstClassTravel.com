import React from 'react'
import beachVid from '../Assets/istockphoto.mp4';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video src={beachVid} className='w-full h-full object-cover' autoPlay loop muted/>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1>First Class Travel</h1>
            <h2 className='py-4'>Top 1% Locations Wordwides</h2>
            <form action="" className='flex justify-between item-center max-w-[700] mx-auto w-full p-1 rounded-md text-black bg-gray-100/90'>
                <div>
                    <input className='bg-transparent w-[300px] sm:w-[400px] font-[poppins] focus:outline-none' type="text" placeholder='Search Destinations' />
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon' style={{color: 'white'}}/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero