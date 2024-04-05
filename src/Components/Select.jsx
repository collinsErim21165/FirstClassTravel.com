import React from 'react';
import DownloadOne from '../Assets/DownloadOne.jpg';
import DownloadTwo from '../Assets/DownloadTwo.jpg';
import DownloadThree from '../Assets/DownloadThree.jpg';
import DownloadFour from '../Assets/DownloadFour.jpg';
import DownloadFive from '../Assets/DownloadFive.jpg';
import DownloadSix from '../Assets/DownloadSix.jpg'
import SelectCard from './SelectCard';

const selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
       <SelectCard bg={DownloadOne} text='Bora Bora'  />
       <SelectCard bg={DownloadTwo} text='Maldives'  />
       <SelectCard bg={DownloadThree} text='Antigua'  />
       <SelectCard bg={DownloadFour} text='Cozumel'  />
       <SelectCard bg={DownloadFive} text='Jamaica'  />
       <SelectCard bg={DownloadSix} text='Key West'  />
      
    </div>
  )
}

export default selects