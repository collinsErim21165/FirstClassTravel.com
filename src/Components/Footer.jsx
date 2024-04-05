import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram,  FaPinterest, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
       <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
          <div className='sm:flex text-center justify-between items-center'>
             <h1>BEACHES.</h1>
             <div className='flex justify-between w-full sm:max-w-[200px] my-4'>
               <FaFacebook  className="icon"/>
               <FaTwitter className="icon"/>
               <FaYoutube className="icon"/>
               <FaPinterest className="icon"/>
               <FaInstagram className="icon"/>
             </div>
          </div>
          <div className='flex justify-between'>
             <ul className='lg:flex lg:flex-col'>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Partnership</a>
                </li>
                <li>
                    <a href="#">Newsroom</a>
                </li>
                <li>
                    <a href="#">Advertising</a>
                </li>
             </ul>
             <ul className='text-right lg:flex lg:flex-col'>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Destination</a>
                </li>
                <li>
                    <a href="#">Travel</a>
                </li>
                <li>
                    <a href="#">View</a>
                </li>
                <li>
                    <a href="#">Book</a>
                </li>
             </ul>
          </div>
       </div>
    </div>
  )
}

export default Footer