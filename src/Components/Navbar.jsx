import React, {useState} from 'react';
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaTwitter, FaInstagram,  FaPinterest, FaYoutube } from 'react-icons/fa';


const Navbar = () => {
   const [nav,  setNav] = useState(false)
   const [logo, setLogo] = useState(false)
   // set nav to opposite of it current value
   const handleNav = () => {
     setNav(!nav);
     setLogo(!logo);
   }
  return (
    <div className='flex justify-between items-center h-20 absolute z-10 text-white w-full'>
       <div>
          <h1  onClick={handleNav} className={logo ? 'hidden' : 'block' }>BEACHES.</h1>
       </div>
       <ul className='hidden md:flex'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Travel</a></li>
          <li><a href="#">Views</a></li>
          <li><a href="#">Back</a></li>
       </ul>
       <div className='hidden md:flex'>
          <BiSearch className='mr-2' size={20}/>
          <BsPerson size={20}/>
       </div>
       {/* Hamburger */}
       <div onClick={handleNav} className='md:hidden z-10'>
         {/* if nav is true we display the close icon else we display the menu icon   */}
         {nav ? <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
       </div>
       {/* Mobile menu dropdown */}
       {/* if nav is true display this styling else */}
       <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <ul>
            <h1>BEACHES.</h1>
          <li className='border-b'><a href="#">Home</a></li>
          <li className='border-b'><a href="#">Destinations</a></li>
          <li className='border-b'><a href="#">Travel</a></li>
          <li className='border-b'><a href="#">Views</a></li>
          <li className='border-b'><a href="#">Back</a></li>
          <div className='flex flex-col'>
             <button className='my-6'>Search</button>
             <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook  className="icon"/>
            <FaTwitter className="icon"/>
            <FaYoutube className="icon"/>
            <FaPinterest className="icon"/>
            <FaInstagram className="icon"/>
          </div>
          </ul>
       </div>
    </div>
  )
}

export default Navbar